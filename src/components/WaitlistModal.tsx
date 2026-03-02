import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Loader2 } from 'lucide-react';
import { getSupabase } from '../integrations/supabase/supabase';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setEmail('');
      setName('');
      setStatus('idle');
      setErrorMessage('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Simple rate limiting: check localStorage
    const lastSubmission = localStorage.getItem('waitlist_submission_time');
    if (lastSubmission && Date.now() - parseInt(lastSubmission) < 60000) {
      setStatus('error');
      setErrorMessage('Please wait a minute before trying again.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      let supabase;
      try {
        supabase = getSupabase();
      } catch (err: any) {
        setStatus('error');
        setErrorMessage(err.message || 'Supabase configuration is missing.');
        return;
      }

      const { error } = await supabase
        .from('waitlist')
        .insert([{ email, name: name || null }]);

      if (error) {
        if (error.code === '23505') { // Unique violation
          setStatus('success');
          setErrorMessage('You’re already on the waitlist 🚀');
        } else {
          console.error('Supabase error:', error);
          setStatus('error');
          setErrorMessage('Something went wrong. Please try again.');
        }
      } else {
        localStorage.setItem('waitlist_submission_time', Date.now().toString());
        setStatus('success');
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-md p-8 bg-white rounded-3xl shadow-2xl animate-fade-in-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-background"
        >
          <X size={24} />
        </button>

        {status === 'success' && !errorMessage ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">You're in.</h3>
            <p className="text-muted-foreground">We'll notify you before launch.</p>
            <button 
              onClick={onClose}
              className="mt-8 w-full py-4 bg-background text-foreground font-bold rounded-full hover:bg-muted-foreground/20 transition-all"
            >
              Close
            </button>
          </div>
        ) : status === 'success' && errorMessage ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Already registered!</h3>
            <p className="text-muted-foreground">{errorMessage}</p>
            <button 
              onClick={onClose}
              className="mt-8 w-full py-4 bg-background text-foreground font-bold rounded-full hover:bg-muted-foreground/20 transition-all"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 mb-4 opacity-80">
                <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(0,212,126,0.6)]"></div>
                <span className="text-sm font-bold uppercase tracking-widest text-primary">Early Access</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground tracking-tight mb-2">Join the waitlist</h2>
              <p className="text-muted-foreground">Be the first to know when we launch.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-1">Name</label>
                <input 
                  type="text" 
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-background border border-transparent rounded-xl focus:outline-none focus:border-accent focus:bg-white transition-all"
                  placeholder="Jane Doe"
                  disabled={status === 'loading'}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-1">Email <span className="text-red-500">*</span></label>
                <input 
                  type="email" 
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-background border border-transparent rounded-xl focus:outline-none focus:border-accent focus:bg-white transition-all"
                  placeholder="jane@example.com"
                  disabled={status === 'loading'}
                />
              </div>

              {status === 'error' && (
                <p className="text-red-500 text-sm font-medium">{errorMessage}</p>
              )}

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full mt-4 py-4 bg-foreground text-white font-bold text-lg rounded-full flex items-center justify-center gap-2 hover:bg-foreground/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Joining...
                  </>
                ) : (
                  'Get Early Access'
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
