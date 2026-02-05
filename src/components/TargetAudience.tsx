import React from 'react';
import { Check, ArrowRight, HardHat, TrendingUp } from 'lucide-react';
import { Reveal } from './Reveal';

export const TargetAudience: React.FC = () => {
  return (
    <section className="bg-foreground w-full py-24 px-6 md:px-12 text-white border-t border-white/5">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header */}
        <Reveal>
            <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 mb-4 opacity-80">
                    <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(0,212,126,0.6)]"></div>
                    <span className="text-sm font-bold uppercase tracking-widest text-primary">Who it's for</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                    Built for installers. <span className="text-muted-foreground">Loved by investors.</span>
                </h2>
            </div>
        </Reveal>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Installers Column */}
            <Reveal delay={200} className="h-full">
                <div className="group bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col hover:bg-white/10 transition-all duration-300 h-full">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-14 h-14 bg-primary/20 text-primary rounded-2xl flex items-center justify-center">
                            <HardHat size={32} />
                        </div>
                        <h3 className="text-3xl font-bold">For Installers</h3>
                    </div>
                    
                    <ul className="space-y-6 mb-12 flex-1">
                        {[
                            "Quick capital to start installs",
                            "Lower rates than traditional loans",
                            "Intuitive project dashboard",
                            "No complex tax-equity structures"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-4">
                                <div className="mt-1 min-w-[24px] text-primary">
                                    <Check size={24} strokeWidth={3} />
                                </div>
                                <span className="text-background/90 text-lg font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <button className="w-full py-4 bg-primary text-foreground font-bold text-lg rounded-full flex items-center justify-center gap-2 hover:bg-[#00b56b] transition-all transform hover:-translate-y-1">
                        Submit a project <ArrowRight size={20} />
                    </button>
                </div>
            </Reveal>

            {/* Investors Column */}
            <Reveal delay={400} className="h-full">
                <div className="group bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col hover:bg-white/10 transition-all duration-300 h-full">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-14 h-14 bg-white/10 text-white rounded-2xl flex items-center justify-center">
                            <TrendingUp size={32} />
                        </div>
                        <h3 className="text-3xl font-bold">For Investors</h3>
                    </div>
                    
                    <ul className="space-y-6 mb-12 flex-1">
                        {[
                            "Invest in real, income-generating solar projects",
                            "Start with small amounts",
                            "Transparent performance data",
                            "Automated income, minimal admin"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-4">
                                <div className="mt-1 min-w-[24px] text-white/40 group-hover:text-white transition-colors">
                                    <Check size={24} strokeWidth={3} />
                                </div>
                                <span className="text-background/90 text-lg font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <button className="w-full py-4 bg-white text-foreground font-bold text-lg rounded-full flex items-center justify-center gap-2 hover:bg-background hover:scale-[1.02] transition-all">
                        Explore projects <ArrowRight size={20} />
                    </button>
                </div>
            </Reveal>

        </div>

      </div>
    </section>
  );
};