import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Reveal } from './Reveal';

const faqs = [
  {
    question: "Is this a loan or an investment?",
    answer: "It's investment-backed financing. Investors buy fractional ownership in a project's revenue — installers get the capital they need without complex bank procedures."
  },
  {
    question: "How do investors get paid?",
    answer: "Payouts are automated and tied to the project's real energy production. You'll see generation data and payment history in your dashboard."
  },
  {
    question: "Is this risky?",
    answer: "All investments carry risk. We mitigate this with project vetting, escrowed funds, and transparent performance data. Pilot projects and small initial investments are recommended."
  },
  {
    question: "How fast can I get funded?",
    answer: "Typical funding timelines are measured in days to weeks once a project is approved and listed."
  }
];

export const FAQ: React.FC = () => {
  return (
    <section className="bg-white w-full py-24 px-6 md:px-12">
      <div className="max-w-[1000px] mx-auto">
        
        {/* Header */}
        <Reveal>
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 mb-4 opacity-60">
                    <div className="w-2 h-2 bg-foreground rounded-full"></div>
                    <span className="text-sm font-bold uppercase tracking-widest text-foreground">F.A.Q.</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                    Common Questions
                </h2>
            </div>
        </Reveal>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-20">
            {faqs.map((faq, index) => (
                <Reveal key={index} delay={index * 100}>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-xl font-bold text-foreground">
                            {faq.question}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                        </p>
                    </div>
                </Reveal>
            ))}
        </div>

        {/* CTA */}
        <Reveal delay={200}>
            <div className="bg-background rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">More questions?</h3>
                    <p className="text-muted-foreground font-medium">We&apos;re here to help you understand the platform.</p>
                </div>
                
                <button className="px-8 py-4 bg-white border border-foreground/5 text-foreground font-bold text-lg rounded-full flex items-center gap-2 hover:bg-foreground hover:text-white transition-all shadow-sm">
                    <MessageCircle size={20} />
                    Contact support
                </button>
            </div>
        </Reveal>

      </div>
    </section>
  );
};