import React from 'react';
import { ArrowRight, FileText, Users, Sun } from 'lucide-react';
import { Reveal } from './Reveal';

export const HowItWorks: React.FC = () => {
  return (
    <section className="bg-background w-full py-24 px-6 md:px-12 border-t border-muted-foreground/10">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        
        {/* Header */}
        <Reveal>
          <div className="text-center max-w-3xl mb-20 flex flex-col items-center">
              <div className="inline-flex items-center gap-2 mb-4 opacity-60">
                  <div className="w-2 h-2 bg-foreground rounded-full"></div>
                  <span className="text-sm font-bold uppercase tracking-widest text-foreground">The Process</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                  How it works — <br className="md:hidden" /> in three simple steps
              </h2>
          </div>
        </Reveal>

        {/* Steps Container */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 relative mb-20">
            {/* Connecting Line (Desktop) - Visualizing the flow */}
            <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-foreground/10 -z-10"></div>

            {/* Step 1 */}
            <Reveal delay={100} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-white rounded-2xl border border-foreground/10 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 relative z-10">
                    <span className="absolute -top-3 -right-3 w-8 h-8 bg-foreground text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-background">1</span>
                    <FileText size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Installers list a project.</h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs text-sm md:text-base">
                    Add costs, timelines, and expected output.
                </p>
            </Reveal>

            {/* Step 2 */}
            <Reveal delay={300} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-white rounded-2xl border border-foreground/10 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 relative z-10">
                    <span className="absolute -top-3 -right-3 w-8 h-8 bg-foreground text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-background">2</span>
                    <Users size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Community invests.</h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs text-sm md:text-base">
                    Investors fund the project instantly.
                </p>
            </Reveal>

            {/* Step 3 */}
            <Reveal delay={500} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-white rounded-2xl border border-foreground/10 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 relative z-10">
                    <span className="absolute -top-3 -right-3 w-8 h-8 bg-foreground text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-aethera-light">3</span>
                    <Sun size={28} className="text-aethera-green" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Energy generates returns.</h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs text-sm md:text-base">
                    Electricity is sold; investors get paid automatically.
                </p>
            </Reveal>
        </div>

        {/* CTA */}
        <Reveal delay={600}>
            <button className="px-8 py-4 bg-transparent border border-foreground text-foreground font-bold text-lg rounded-full flex items-center gap-2 hover:bg-foreground hover:text-white transition-all group">
                See detailed process <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
            </button>
        </Reveal>

      </div>
    </section>
  );
};