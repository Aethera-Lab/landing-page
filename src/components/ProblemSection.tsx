import React from 'react';
import { Clock, AlertTriangle, BatteryWarning } from 'lucide-react';
import { Reveal } from './Reveal';

export const ProblemSection: React.FC = () => {
  return (
    <section className="bg-white w-full py-24 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Signifier / Label */}
        <Reveal>
          <div className="flex items-center gap-3 mb-12 opacity-60">
              <div className="w-2 h-2 bg-foreground rounded-full"></div>
              <span className="text-sm font-bold uppercase tracking-widest text-foreground">The Problem</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            
            {/* Left Column: The Brutal Fact (Headline) */}
            <div className="lg:col-span-5">
                <Reveal delay={100}>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
                      Good solar projects die for <br className="hidden lg:block"/>
                      <span className="relative inline-block">
                          lack of capital.
                          {/* Underline decoration style */}
                          <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary" viewBox="0 0 100 10" preserveAspectRatio="none">
                              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                          </svg>
                      </span>
                  </h2>
                </Reveal>
            </div>

            {/* Right Column: Empathy & Logic */}
            <div className="lg:col-span-7 flex flex-col gap-10">
                <Reveal delay={200}>
                  <div className="prose prose-lg md:prose-xl text-input leading-relaxed">
                      <p>
                          Installers need cash up front to buy panels, book teams, and start work. Banks take months and charge high rates. 
                          <span className="text-foreground font-medium"> Small and medium projects — the ones that bring solar to neighborhoods — are ignored. </span> 
                          That&apos;s why pipelines stall and climate progress slows.
                      </p>
                  </div>
                </Reveal>

                {/* Conceptual Model: The Equation of Failure */}
                <Reveal delay={300}>
                  <div className="mt-4 bg-background rounded-2xl p-8 border border-foreground/5">
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-6">System Failure Logic</p>
                      
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative">
                          {/* Step 1 */}
                          <div className="flex items-center gap-3 z-10">
                              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-muted-foreground/20 text-foreground shadow-sm">
                                  <Clock size={20} />
                              </div>
                              <span className="font-semibold text-foreground">Slow financing</span>
                          </div>

                          {/* Connector (Mobile: Vertical, Desktop: Horizontal) */}
                          <div className="hidden md:block h-px flex-1 bg-muted-foreground/30 border-t border-dashed border-foreground/30 mx-2"></div>
                          <div className="md:hidden w-px h-8 bg-muted-foreground/30 border-l border-dashed border-foreground/30 ml-5 my-[-10px]"></div>

                          {/* Step 2 */}
                          <Reveal delay={400} className="w-full md:w-auto">
                            <div className="flex items-center gap-3 z-10">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-muted-foreground/20 text-foreground shadow-sm">
                                    <AlertTriangle size={20} />
                                </div>
                                <span className="font-semibold text-foreground">Delayed projects</span>
                            </div>
                          </Reveal>

                          {/* Connector */}
                          <div className="hidden md:block h-px flex-1 bg-muted-foreground/30 border-t border-dashed border-foreground/30 mx-2"></div>
                          <div className="md:hidden w-px h-8 bg-muted-foreground/30 border-l border-dashed border-foreground/30 ml-5 my-[-10px]"></div>

                          {/* Step 3 (Result) */}
                          <Reveal delay={500} className="w-full md:w-auto">
                            <div className="flex items-center gap-3 z-10">
                                <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center text-white shadow-md">
                                    <BatteryWarning size={20} />
                                </div>
                                <span className="font-bold text-foreground border-b-2 border-foreground pb-0.5">Wasted clean energy</span>
                            </div>
                          </Reveal>
                      </div>
                  </div>
                </Reveal>
            </div>
        </div>
      </div>
    </section>
  );
};