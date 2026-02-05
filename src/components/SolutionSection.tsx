import React from 'react';
import { Zap, TrendingDown, PieChart, Activity, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

export const SolutionSection: React.FC = () => {
  return (
    <section className="bg-foreground w-full py-24 px-6 md:px-12 text-white">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Signifier / Label */}
        <Reveal>
          <div className="flex items-center gap-3 mb-16 opacity-80">
              <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(0,212,126,0.6)]"></div>
              <span className="text-sm font-bold uppercase tracking-widest text-primary">The Solution</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Column: Core Value Proposition */}
            <div className="lg:col-span-5 flex flex-col gap-8">
                <Reveal delay={100}>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
                      Aethera: <br/>
                      <span className="text-aethera-grey">fast, transparent</span> financing for solar.
                  </h2>
                </Reveal>
                
                <Reveal delay={200}>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                      We convert a solar project&apos;s financing need into an investable asset (asset tokenization). Installers get funding in days. Investors get an easy, verifiable claim on the project&apos;’s cash flows. Everything is transparent, auditable, and automated — no heavy legal paperwork, no surprise fees.
                  </p>
                </Reveal>

                <Reveal delay={300}>
                  <div className="pt-4">
                      <button className="group inline-flex items-center gap-3 px-8 py-4 bg-primary-foreground text-foreground font-bold text-lg rounded-full hover:bg-[#00b56b] transition-all transform hover:-translate-y-1">
                          Start a project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                      <p className="mt-4 text-sm text-muted-foreground">Get funded faster.</p>
                  </div>
                </Reveal>
            </div>

            {/* Right Column: Key Benefits Grid */}
            <div className="lg:col-span-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* Benefit 1 */}
                    <Reveal delay={200}>
                      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300 h-full">
                          <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6 text-primary">
                              <Zap size={24} />
                          </div>
                          <h3 className="text-xl font-bold mb-2">Faster funding</h3>
                          <p className="text-muted-foreground">Capital in days, not months. Move at the speed of installation.</p>
                      </div>
                    </Reveal>

                    {/* Benefit 2 */}
                    <Reveal delay={300}>
                      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300 h-full">
                          <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6 text-primary">
                              <TrendingDown size={24} />
                          </div>
                          <h3 className="text-xl font-bold mb-2">Lower cost</h3>
                          <p className="text-primary">More affordable rates for installers through direct investment.</p>
                      </div>
                    </Reveal>

                    {/* Benefit 3 */}
                    <Reveal delay={400}>
                      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300 h-full">
                          <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6 text-primary">
                              <PieChart size={24} />
                          </div>
                          <h3 className="text-xl font-bold mb-2">Fractional investment</h3>
                          <p className="text-muted-foreground">Anyone can invest at small sizes, democratizing energy assets.</p>
                      </div>
                    </Reveal>

                    {/* Benefit 4 */}
                    <Reveal delay={500}>
                      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300 h-full">
                          <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6 text-primary">
                              <Activity size={24} />
                          </div>
                          <h3 className="text-xl font-bold mb-2">Real reporting</h3>
                          <p className="text-muted-foreground">Generation and payouts are visible and verifiable on-chain.</p>
                      </div>
                    </Reveal>

                </div>
            </div>
        </div>
      </div>
    </section>
  );
};