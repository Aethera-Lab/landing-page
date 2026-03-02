import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

interface HeroProps {
  onOpenWaitlist: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenWaitlist }) => {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-20 pb-32 md:pt-32 md:pb-48 flex flex-col items-center justify-center text-center">
      
      {/* Content Container */}
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-10 md:space-y-12">
        
        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.95] font-bold tracking-tight text-foreground">
          Make sunlight <br />
          <span className="text-muted-foreground">investable.</span>
        </h1>
        
        {/* Subheadline & Description */}
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Fast funding for solar installers.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Aethera helps solar installers access fast, affordable capital and gives everyday investors simple, verifiable ways to earn income from real solar projects through asset tokenization — no bank paperwork, no black boxes.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 pt-6 w-full justify-center">
          
          {/* Primary CTA */}
          <div className="group flex flex-col items-center">
            <button 
              onClick={onOpenWaitlist}
              className="w-full sm:w-auto px-8 py-4 bg-primary text-foreground font-bold text-lg rounded-full flex items-center justify-center gap-2 hover:bg-[#00b56b] transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/20"
            >
              Get early access <ArrowRight size={20} />
            </button>
            <p className="mt-3 text-sm text-muted-foreground font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
              Join 450+ waitlist
            </p>
          </div>

          {/* Secondary CTA */}
          <div className="group flex flex-col items-center">
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-muted-foreground/30 text-foreground font-semibold text-lg rounded-full flex items-center justify-center gap-2 hover:border-foreground hover:bg-white transition-all">
              See a demo <PlayCircle size={20} />
            </button>
            <p className="mt-3 text-sm text-muted-foreground font-medium">
              Watch 90s demo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};