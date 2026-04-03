import { useNavigate } from "react-router-dom";
import { ArrowLeft, Zap } from "lucide-react";

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-background text-foreground flex flex-col"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      {/* Nav */}
      <header className="border-b border-border px-6 md:px-12 h-16 flex items-center justify-between max-w-[1440px] mx-auto w-full">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          <ArrowLeft size={16} />
          Back
        </button>
        <span className="text-lg font-bold tracking-tight text-foreground">
          Aethera<span className="text-primary">.</span>
        </span>
        <div className="w-16" />
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-6 relative overflow-hidden">

        {/* Background decorative blobs */}
        <div className="absolute top-1/4 -left-32 w-80 h-80 rounded-full bg-primary opacity-5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-primary opacity-5 blur-3xl pointer-events-none" />

        {/* Large ghost text */}
        <span className="absolute select-none font-bold text-[20vw] leading-none text-foreground/[0.03] pointer-events-none">
          Soon
        </span>

        <div className="relative flex flex-col items-center text-center max-w-lg space-y-8">

          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <Zap size={28} className="text-primary" />
          </div>

          {/* Headline */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card text-xs font-bold text-muted-foreground tracking-widest uppercase">
              Coming Soon
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1]">
              Something's<br />
              <span className="text-primary">brewing.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're working on something exciting. Stay tuned — this page will be live soon.
            </p>
          </div>

          {/* Notify pill / email input */}
          <div className="flex items-center gap-2 w-full max-w-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2.5 rounded-full bg-muted border border-border text-sm font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <button className="px-5 py-2.5 bg-primary text-foreground font-bold rounded-full hover:bg-[#00b56b] transition-all transform hover:-translate-y-0.5 shadow-md shadow-primary/20 text-sm whitespace-nowrap">
              Notify me
            </button>
          </div>

          {/* Back CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full justify-center">
            <a
              href="/"
              className="flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-foreground font-bold rounded-full hover:bg-[#00b56b] transition-all transform hover:-translate-y-0.5 shadow-md shadow-primary/20 text-sm"
            >
              <Zap size={16} />
              Go to Home
            </a>
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent border border-border text-foreground font-semibold rounded-full hover:border-foreground hover:bg-card transition-all text-sm"
            >
              <ArrowLeft size={16} />
              Go Back
            </button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default ComingSoon;