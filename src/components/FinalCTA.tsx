import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { Reveal } from './Reveal';

export const FinalCTA: React.FC = () => {
  return (
    <section className="bg-foreground w-full py-24 px-6 md:px-12 md:py-32 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Brand Mark */}
        <Reveal>
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-10 border border-white/5 shadow-2xl backdrop-blur-sm">
                <div className="w-6 h-6 bg-primary rounded-sm"></div>
            </div>
        </Reveal>

        {/* Headline */}
        <Reveal delay={100}>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-[0.95]">
            Turn sunlight into <br />
            <span className="text-primary">reliable funding.</span>
            </h2>
        </Reveal>

        {/* Subline */}
        <Reveal delay={200}>
            <p className="text-xl md:text-2xl text-aethera-grey mb-12 max-w-2xl mx-auto leading-relaxed">
            Get funding faster. Build more projects. <br className="hidden md:block"/> Earn verifiable returns.
            </p>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            
            <button className="w-full sm:w-auto px-8 py-5 bg-primary text-foreground font-bold text-lg rounded-full flex items-center justify-center gap-3 hover:bg-[#00b56b] transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(0,212,126,0.3)]">
                Join now — 450+ already on board <ArrowRight size={20} />
            </button>

            <button className="w-full sm:w-auto px-8 py-5 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-full flex items-center justify-center gap-3 hover:bg-white/10 transition-all">
                Request pilot <Mail size={20} />
            </button>

            </div>
        </Reveal>

      </div>
    </section>
  );
};