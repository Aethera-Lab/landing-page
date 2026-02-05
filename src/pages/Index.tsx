
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Zap, 
  TrendingUp, 
  Globe, 
  Lock, 
  Coins, 
  Users, 
  ArrowRight,
  Battery,
  Sun,
  Wind,
  Leaf,
  Target,
  BarChart3,
  Shield,
  Sparkles
} from "lucide-react";
import heroImage from "@/assets/vertical.jpg";
import bgImage from "@/assets/bg.png";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { GlowCard } from "@/components/ui/spotlight-card";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { Variants } from "framer-motion";
import { WaitlistDialog } from "@/components/WaitlistDialog";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { TargetAudience } from "@/components/TargetAudience";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {

  const [waitlistOpen, setWaitlistOpen] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, 0.05, 0.95],
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  } as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  } as const;

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  } as const;

  const glowVariants = {
    animate: {
      opacity: [0.3, 0.6, 0.3],
      scale: [1, 1.1, 1],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut" as const,
      },
    },
  }
  
  const dotVariants = {
    animate: {
      opacity: [0.5, 1, 0.5],
      scale: [0.8, 1, 0.8],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  } as const;

  const cardVariants = {
    initial: { opacity: 0, y: 30, scale: 0.95 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true },
    whileHover: { y: -8, transition: { duration: 0.3 } },
  } as const;
  
  const listItemVariants = {
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true },
  } as const;
  
  const iconVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 },
    },
  } as const;

  const cardHoverVariants = {
    initial: { y: 0 },
    hover: { y: -8, transition: { duration: 0.3, ease: "easeOut" } },
  } as const;

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  }
  
  const pulseGlow = {
    animate: {
      boxShadow: ["0 0 0 0 rgba(var(--energy-rgb), 0.7)", "0 0 0 20px rgba(var(--energy-rgb), 0)"],
    },
    transition: { duration: 2, repeat: Number.POSITIVE_INFINITY },
  }

  return (
    <div className="relative overflow-hidden bg-aethera-light text-aethera-black">
      {/* Hero Section with Scroll Expansion */}
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc={heroImage}
        bgImageSrc={bgImage}
        title="Aethera DePIN Network"
        date="Tokenized Energy"
        scrollToExpand="Scroll to Explore"
        textBlend
      >
        <Hero />
      </ScrollExpandMedia>

      {/* Problem Section */}
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <Features />
      <TargetAudience />
      <FAQ />
      <FinalCTA />
      <Footer />
    

      {/*<StackedCircularFooter />*/}
      <WaitlistDialog open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </div>
  );
};

export default Index;
