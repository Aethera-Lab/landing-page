import React, { useState } from 'react';
import {
    AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from 'recharts';
import {
    LayoutDashboard, Store, Briefcase, Gift, Lock,
    TrendingUp, Leaf, Zap, ArrowRight, Sun, ChevronRight,
} from 'lucide-react';
import { Reveal } from './Reveal';


const energyData = [
    { month: 'Jan', kwh: 8400 },
    { month: 'Feb', kwh: 12200 },
    { month: 'Mar', kwh: 18800 },
    { month: 'Apr', kwh: 22500 },
    { month: 'May', kwh: 19900 },
    { month: 'Jun', kwh: 31200 },
    { month: 'Jul', kwh: 38600 },
];

const projects = [
    { name: 'Rajasthan Solar Farm A', location: 'Jaipur, RJ', funded: 87, target: '₹42L', roi: '11.4%', status: 'Active' },
    { name: 'Gujarat Rooftop Collective', location: 'Ahmedabad, GJ', funded: 63, target: '₹18L', roi: '9.8%', status: 'Funding' },
    { name: 'Tamil Nadu Industrial', location: 'Chennai, TN', funded: 100, target: '₹95L', roi: '13.1%', status: 'Generating' },
];

const statCards = [
    { label: 'Portfolio Value', value: '₹2,84,500', change: '+12.4%', icon: <TrendingUp size={16} />, positive: true },
    { label: 'Total Returns', value: '₹34,200', change: '+8.2% this month', icon: <Zap size={16} />, positive: true },
    { label: 'Projects Funded', value: '34', change: '+3 this month', icon: <Sun size={16} />, positive: true },
    { label: 'CO₂ Offset', value: '18.4 T', change: 'Lifetime', icon: <Leaf size={16} />, positive: null },
];

const navItems = [
    { label: 'Dashboard', icon: <LayoutDashboard size={15} />, locked: false },
    { label: 'Marketplace', icon: <Store size={15} />, locked: false },
    { label: 'My Investments', icon: <Briefcase size={15} />, locked: false },
    { label: 'Yield & Rewards', icon: <Gift size={15} />, locked: true, badge: 'Pro' },
];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload?.length) {
        return (
            <div className="bg-foreground text-white text-xs rounded-xl px-3 py-2 shadow-lg border border-white/10">
                <p className="text-white/60 mb-1">{label}</p>
                <p className="font-bold text-primary">{payload[0].value.toLocaleString()} kWh</p>
            </div>
        );
    }
    return null;
};

const StatusBadge = ({ status }: { status: string }) => {
    const styles: Record<string, string> = {
        Active: 'bg-primary/10 text-primary',
        Funding: 'bg-blue-500/10 text-blue-500',
        Generating: 'bg-emerald-500/10 text-emerald-600',
    };
    return (
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${styles[status] ?? 'bg-muted text-muted-foreground'}`}>
            {status}
        </span>
    );
};


export const DashboardPreview: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="bg-white w-full py-24 px-6 md:px-12 overflow-hidden">
            <div className="max-w-[1440px] mx-auto">

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
                    <Reveal className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 mb-4 opacity-60">
                            <div className="w-2 h-2 bg-foreground rounded-full" />
                            <span className="text-sm font-bold uppercase tracking-widest text-foreground">The Platform</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.1]">
                            A complete platform, <br />
                            built for solar at scale.
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-xl">
                            From project listing to automated payouts — everything lives in one transparent dashboard. No spreadsheets, no black boxes.
                        </p>
                    </Reveal>

                    <Reveal delay={200} width="fit-content" className="hidden md:block">
                        <button className="flex group items-center gap-2 text-foreground font-semibold border-b border-transparent hover:border-foreground transition-all pb-0.5">
                            Request early access <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Reveal>
                </div>

                <Reveal delay={100}>
                    <div className="rounded-2xl border border-foreground/10 overflow-hidden shadow-2xl shadow-foreground/5">

                        <div className="bg-foreground/5 border-b border-foreground/10 px-4 py-3 flex items-center gap-3">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                                <div className="w-3 h-3 rounded-full bg-primary/60" />
                            </div>
                            <div className="flex-1 mx-3">
                                <div className="bg-white border border-foreground/10 rounded-md px-3 py-1 text-xs text-muted-foreground font-medium max-w-xs">
                                    app.aethera.energy/dashboard
                                </div>
                            </div>
                        </div>

                        <div className="flex bg-background min-h-[560px]">

                            <div className="hidden md:flex w-52 bg-foreground flex-col py-6 px-4 gap-1 flex-shrink-0">
                                <div className="flex items-center gap-2 px-2 mb-6">
                                    <img src="/atheraLogo.png" alt="Aethera" className="h-6 w-auto object-contain brightness-0 invert" />
                                </div>

                                {navItems.map((item, i) => (
                                    <button
                                        key={i}
                                        onClick={() => !item.locked && setActiveTab(i)}
                                        className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all
                      ${i === activeTab && !item.locked
                                                ? 'bg-primary text-foreground'
                                                : 'text-white/50 hover:text-white hover:bg-white/5'
                                            }
                      ${item.locked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                    `}
                                    >
                                        {item.icon}
                                        <span>{item.label}</span>
                                        {item.locked && (
                                            <span className="ml-auto flex items-center gap-1 text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-primary/20 text-primary">
                                                <Lock size={8} /> {item.badge}
                                            </span>
                                        )}
                                    </button>
                                ))}

                                <div className="mt-auto mx-1 p-3 rounded-xl bg-primary/10 border border-primary/20">
                                    <p className="text-white text-xs font-bold mb-1">Upgrade to Pro</p>
                                    <p className="text-white/50 text-[10px] leading-relaxed mb-2">Unlock Yield &amp; Rewards, advanced analytics, and more.</p>
                                    <button className="w-full py-1.5 bg-primary text-foreground text-xs font-bold rounded-lg hover:bg-[#00b56b] transition-colors">
                                        Upgrade
                                    </button>
                                </div>
                            </div>

                            <div className="flex-1 p-5 md:p-7 overflow-hidden">

                                {activeTab === 0 && (
                                    <div className="flex flex-col gap-6">
                                        <div>
                                            <h3 className="text-base font-bold text-foreground">Good morning, Akash 👋</h3>
                                            <p className="text-xs text-muted-foreground">Here's your portfolio at a glance</p>
                                        </div>

                                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                                            {statCards.map((s, i) => (
                                                <div key={i} className="bg-white rounded-xl border border-border p-4 flex flex-col gap-2">
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-xs text-muted-foreground font-medium">{s.label}</span>
                                                        <div className="w-7 h-7 rounded-lg bg-foreground/5 flex items-center justify-center text-foreground">
                                                            {s.icon}
                                                        </div>
                                                    </div>
                                                    <p className="text-xl font-bold text-foreground">{s.value}</p>
                                                    <p className={`text-[11px] font-semibold ${s.positive === true ? 'text-primary' : 'text-muted-foreground'}`}>
                                                        {s.positive === true && '↑ '}{s.change}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">

                                            <div className="lg:col-span-3 bg-white rounded-xl border border-border p-4">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div>
                                                        <p className="text-sm font-bold text-foreground">Energy Generation</p>
                                                        <p className="text-xs text-muted-foreground">kWh across all projects</p>
                                                    </div>
                                                    <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">Live</span>
                                                </div>
                                                <ResponsiveContainer width="100%" height={140}>
                                                    <AreaChart data={energyData} margin={{ top: 0, right: 0, left: -28, bottom: 0 }}>
                                                        <defs>
                                                            <linearGradient id="energyGrad" x1="0" y1="0" x2="0" y2="1">
                                                                <stop offset="5%" stopColor="#00D47E" stopOpacity={0.15} />
                                                                <stop offset="95%" stopColor="#00D47E" stopOpacity={0} />
                                                            </linearGradient>
                                                        </defs>
                                                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(210 8% 85%)" vertical={false} />
                                                        <XAxis dataKey="month" tick={{ fontSize: 10, fill: 'hsl(210 8% 58%)' }} axisLine={false} tickLine={false} />
                                                        <YAxis tick={{ fontSize: 10, fill: 'hsl(210 8% 58%)' }} axisLine={false} tickLine={false} />
                                                        <Tooltip content={<CustomTooltip />} />
                                                        <Area type="monotone" dataKey="kwh" stroke="#00D47E" strokeWidth={2} fill="url(#energyGrad)" dot={false} />
                                                    </AreaChart>
                                                </ResponsiveContainer>
                                            </div>

                                            <div className="lg:col-span-2 bg-white rounded-xl border border-border p-4 flex flex-col gap-3">
                                                <p className="text-sm font-bold text-foreground">Active Projects</p>
                                                {projects.map((p, i) => (
                                                    <div key={i} className="flex flex-col gap-1.5 pb-3 border-b border-border last:border-0 last:pb-0">
                                                        <div className="flex items-start justify-between gap-2">
                                                            <div>
                                                                <p className="text-xs font-bold text-foreground leading-tight">{p.name}</p>
                                                                <p className="text-[10px] text-muted-foreground">{p.location}</p>
                                                            </div>
                                                            <StatusBadge status={p.status} />
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                                                                <div
                                                                    className="h-full bg-primary rounded-full"
                                                                    style={{ width: `${p.funded}%` }}
                                                                />
                                                            </div>
                                                            <span className="text-[10px] font-bold text-foreground">{p.funded}%</span>
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-[10px] text-muted-foreground">Target {p.target}</span>
                                                            <span className="text-[10px] font-bold text-primary">{p.roi} ROI</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 1 && (
                                    <div className="flex flex-col gap-5">
                                        <div>
                                            <h3 className="text-base font-bold text-foreground">Marketplace</h3>
                                            <p className="text-xs text-muted-foreground">Browse and invest in verified solar projects</p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {[
                                                { name: 'Rajasthan Solar Farm A', location: 'Jaipur, RJ', capacity: '120 kW', roi: '11.4%', funded: 87, target: '₹42L', risk: 'Low' },
                                                { name: 'Gujarat Rooftop Collective', location: 'Ahmedabad, GJ', capacity: '45 kW', roi: '9.8%', funded: 63, target: '₹18L', risk: 'Low' },
                                                { name: 'Tamil Nadu Industrial', location: 'Chennai, TN', capacity: '340 kW', roi: '13.1%', funded: 100, target: '₹95L', risk: 'Medium' },
                                            ].map((p, i) => (
                                                <div key={i} className="bg-white rounded-xl border border-border p-4 flex flex-col gap-3 hover:border-primary/30 transition-colors">
                                                    <div className="h-20 bg-gradient-to-br from-foreground/5 to-primary/5 rounded-lg flex items-center justify-center">
                                                        <Sun size={28} className="text-primary/40" />
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-bold text-foreground">{p.name}</p>
                                                        <p className="text-[10px] text-muted-foreground">{p.location} · {p.capacity}</p>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                                                            <div className="h-full bg-primary rounded-full" style={{ width: `${p.funded}%` }} />
                                                        </div>
                                                        <span className="text-[10px] font-bold">{p.funded}%</span>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-[10px] text-muted-foreground">Target {p.target}</span>
                                                        <span className="text-[10px] font-bold text-primary">{p.roi} est. ROI</span>
                                                    </div>
                                                    <button className={`w-full py-2 rounded-lg text-xs font-bold transition-colors
                            ${p.funded === 100
                                                            ? 'bg-muted text-muted-foreground cursor-not-allowed'
                                                            : 'bg-primary text-foreground hover:bg-[#00b56b]'
                                                        }`}>
                                                        {p.funded === 100 ? 'Fully Funded' : 'Invest Now'}
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeTab === 2 && (
                                    <div className="flex flex-col gap-5">
                                        <div>
                                            <h3 className="text-base font-bold text-foreground">My Investments</h3>
                                            <p className="text-xs text-muted-foreground">Track all your active and completed positions</p>
                                        </div>

                                        <div className="grid grid-cols-3 gap-3">
                                            {[
                                                { label: 'Total Invested', value: '₹2,50,000' },
                                                { label: 'Returns Earned', value: '₹34,200' },
                                                { label: 'Avg. ROI', value: '11.2%' },
                                            ].map((s, i) => (
                                                <div key={i} className="bg-white rounded-xl border border-border p-4">
                                                    <p className="text-[10px] text-muted-foreground mb-1">{s.label}</p>
                                                    <p className="text-lg font-bold text-foreground">{s.value}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="bg-white rounded-xl border border-border overflow-hidden">
                                            <div className="grid grid-cols-4 text-[10px] font-bold uppercase tracking-wider text-muted-foreground px-4 py-2.5 border-b border-border bg-background">
                                                <span>Project</span>
                                                <span className="text-center">Invested</span>
                                                <span className="text-center">Returns</span>
                                                <span className="text-right">Status</span>
                                            </div>
                                            {[
                                                { name: 'Rajasthan Solar Farm A', invested: '₹1,20,000', returns: '₹13,680', status: 'Active' },
                                                { name: 'Gujarat Rooftop', invested: '₹80,000', returns: '₹7,840', status: 'Funding' },
                                                { name: 'Tamil Nadu Industrial', invested: '₹50,000', returns: '₹12,680', status: 'Generating' },
                                            ].map((r, i) => (
                                                <div key={i} className="grid grid-cols-4 items-center px-4 py-3 border-b border-border last:border-0 hover:bg-background/50 transition-colors">
                                                    <span className="text-xs font-semibold text-foreground truncate pr-2">{r.name}</span>
                                                    <span className="text-xs text-center text-muted-foreground">{r.invested}</span>
                                                    <span className="text-xs text-center font-bold text-primary">{r.returns}</span>
                                                    <span className="flex justify-end"><StatusBadge status={r.status} /></span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </Reveal>

                <Reveal delay={200}>
                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                        {navItems.map((item, i) => (
                            <button
                                key={i}
                                onClick={() => !item.locked && setActiveTab(i)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border transition-all
                  ${i === activeTab && !item.locked
                                        ? 'bg-foreground text-white border-foreground'
                                        : 'bg-white text-foreground border-border hover:border-foreground/30'
                                    }
                  ${item.locked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                `}
                            >
                                {item.icon}
                                {item.label}
                                {item.locked && (
                                    <span className="flex items-center gap-1 text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-primary/15 text-primary ml-1">
                                        <Lock size={8} /> {item.badge}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                    <p className="text-center text-xs text-muted-foreground mt-3">
                        Click tabs above to explore the platform — <span className="text-foreground font-semibold">Yield &amp; Rewards</span> unlocks with Pro.
                    </p>
                </Reveal>

            </div>
        </section>
    );
};