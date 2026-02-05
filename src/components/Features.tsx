import React from 'react';
import { ShieldCheck, Layers, LayoutDashboard, RefreshCcw, UserCheck, ArrowLeftRight, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

const features = [
  {
    title: "Project Funding & Escrow",
    description: "Funds are held in a secure escrow and released on milestones.",
    icon: <ShieldCheck size={28} />,
  },
  {
    title: "Asset Tokenization",
    description: "Convert the project into fractional investment units that represent ownership in the project’s revenue.",
    icon: <Layers size={28} />,
  },
  {
    title: "Live Project Dashboard",
    description: "Real-time funding progress, generation data, and payment history.",
    icon: <LayoutDashboard size={28} />,
  },
  {
    title: "Automated Payouts",
    description: "Investors receive payouts automatically based on production.",
    icon: <RefreshCcw size={28} />,
  },
  {
    title: "KYC & Compliance",
    description: "Built-in verification to keep participation safe and compliant.",
    icon: <UserCheck size={28} />,
  },
  {
    title: "Secondary Liquidity",
    description: "Future option to trade positions if you need to exit early.",
    icon: <ArrowLeftRight size={28} />,
    badge: "Roadmap"
  }
];

export const Features: React.FC = () => {
  return (
    <section className="bg-white w-full py-24 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <Reveal className="max-w-2xl">
                <div className="inline-flex items-center gap-2 mb-4 opacity-60">
                    <div className="w-2 h-2 bg-foreground rounded-full"></div>
                    <span className="text-sm font-bold uppercase tracking-widest text-foreground">Platform Features</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.1]">
                    Everything you need to <br />
                    fund and scale solar.
                </h2>
            </Reveal>
            
            <Reveal delay={200} width="fit-content" className="hidden md:block">
                <button className="flex group items-center gap-2 text-foreground font-semibold border-b border-transparent hover:borderforeground transition-all pb-0.5">
                    Request pilot <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </Reveal>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
                <Reveal key={index} delay={index * 100} className="h-full">
                    <div className="group p-8 rounded-2xl bg-background border border-transparent hover:border-foreground/10 hover:bg-white hover:shadow-xl hover:shadow-foreground/5 transition-all duration-300 flex flex-col h-full">
                        
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-foreground shadow-sm group-hover:bgforeground group-hover:text-primary transition-colors duration-300">
                                {feature.icon}
                            </div>
                            {feature.badge && (
                                <span className="px-3 py-1 bg-muted-foreground/10 text-muted-foreground text-xs font-bold uppercase tracking-wider rounded-full">
                                    {feature.badge}
                                </span>
                            )}
                        </div>

                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                            {feature.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                            {feature.description}
                        </p>
                    </div>
                </Reveal>
            ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-12 md:hidden flex justify-center">
            <Reveal width="100%">
                <button className="px-8 py-4 bg-foreground text-white font-bold text-lg rounded-full flex items-center gap-2 hover:bg-foreground/90 transition-all w-full justify-center">
                    Talk to sales <ArrowRight size={20} />
                </button>
            </Reveal>
        </div>

      </div>
    </section>
  );
};