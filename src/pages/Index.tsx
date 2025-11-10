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

const Index = () => {
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
    <div className="relative overflow-hidden">
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
        <div className="space-y-8 text-center max-w-3xl mx-auto pb-16">
          <motion.div variants={badgeVariants} whileHover="hover" className="inline-block">
            <div className="px-6 py-3 bg-gradient-to-r from-energy/20 to-accent/10 border border-energy/30 rounded-full backdrop-blur-md hover:border-energy/50 transition-colors">
              <div className="flex items-center gap-2 justify-center">
                <Zap className="w-4 h-4 text-energy" />
                <span className="text-white font-semibold">Powered by DePIN Technology</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-foreground">The DePIN for</span>
            <br />
            <span className="bg-gradient-to-r from-energy via-accent to-primary bg-clip-text text-transparent">
              Renewable Power
            </span>
            <br />
            <span className="text-foreground">Generation & Storage</span>
          </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto"
          >
            <span className="font-semibold text-energy">Tokenized.</span>
            <span className="mx-2">Climate-neutral.</span>
            <span className="font-semibold text-accent">Bridging the $350B financing gap</span>
            <span className="ml-2">for renewable energy.</span>
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a href="https://aethera-app.vercel.app/">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-energy to-accent text-white font-semibold px-8 shadow-lg hover:shadow-xl transition-all hover:from-energy/90 hover:to-accent/90 group"
                >
                  Explore the Network
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Button>
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a href="https://aethera-app.vercel.app/">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-foreground/5 backdrop-blur-md border-energy/30 text-foreground font-semibold hover:bg-energy/10 hover:border-energy/60 hover:text-white transition-all px-8"
                >
                  Join Now
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/*<motion.div
            className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-energy">2,000+</div>
              <div className="text-sm text-muted-foreground mt-1">Renewable Nodes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-solar">12+</div>
              <div className="text-sm text-muted-foreground mt-1">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-energy">$50M+</div>
              <div className="text-sm text-muted-foreground mt-1">Tokenized Financing</div>
            </div>
          </motion.div>*/}
        </div>
      </ScrollExpandMedia>

      {/* Problem Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-1/4 -left-32 w-64 h-64 bg-destructive/5 rounded-full blur-3xl"
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/3 -right-32 w-64 h-64 bg-energy/5 rounded-full blur-3xl"
              animate={{
                y: [0, 20, 0],
                x: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </div>

          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The <span className="text-solar">$350B</span> Renewable Financing Gap
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Solar & wind projects can't scale because traditional capital can't keep up.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.div variants={cardVariants} whileHover="whileHover">
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-destructive/20 h-full overflow-hidden group relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div
                      className="p-3 bg-destructive/10 rounded-lg"
                      variants={iconVariants}
                      whileHover="whileHover"
                    >
                      <Target className="w-6 h-6 text-destructive" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-destructive">Traditional Financing</h3>
                      <p className="text-muted-foreground">Slow, limited, and costly</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {[
                      "Months-long approval processes",
                      "Limited to institutional investors",
                      "High overhead and bureaucracy",
                      "Geographic limitations",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-3"
                        variants={listItemVariants}
                        initial="initial"
                        whileInView="whileInView"
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-1.5 h-1.5 bg-destructive rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants} whileHover="whileHover">
              <Card className="p-8 bg-gradient-to-br from-energy/10 to-solar/10 backdrop-blur-sm border-energy/20 h-full overflow-hidden group relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-energy/10 to-transparent"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div className="p-3 bg-energy/10 rounded-lg" variants={iconVariants} whileHover="whileHover">
                      <Zap className="w-6 h-6 text-energy" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-energy">Aethera Tokenized Financing</h3>
                      <p className="text-muted-foreground">Instant, global, and efficient</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {[
                      "Instant on-chain deployment",
                      "Accessible to all investors globally",
                      "Minimal overhead costs",
                      "Borderless infrastructure",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-3"
                        variants={listItemVariants}
                        initial="initial"
                        whileInView="whileInView"
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-1.5 h-1.5 bg-energy rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground font-medium">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 relative bg-gradient-to-b from-transparent to-card/30">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-energy/5 rounded-full blur-3xl pointer-events-none"
          variants={glowVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"
          variants={glowVariants}
          animate="animate"
          transition={{ delay: 0.5 }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Aethera Bridges 
              <span className="bg-gradient-to-r from-energy to-solar bg-clip-text text-transparent">
                Energy & DePIN
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three simple steps to power the future of clean energy financing
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Coins,
                title: "Tokenize Renewable Assets",
                description:
                  "Each solar or wind node becomes an on-chain asset, enabling fractional ownership and instant liquidity.",
                number: "01",
                colorClass: "energy",
                bgColor: "from-energy/10 to-energy/5",
                borderColor: "border-energy/20",
                hoverBorderColor: "hover:border-energy/40",
                glowColor: "bg-energy/5",
                hoverGlowColor: "group-hover:bg-energy/10",
              },
              {
                icon: Globe,
                title: "Connect to Aethera Network",
                description:
                  "Energy nodes join a decentralized financing grid, creating a global marketplace for clean energy investments.",
                number: "02",
                colorClass: "accent",
                bgColor: "from-accent/10 to-accent/5",
                borderColor: "border-accent/20",
                hoverBorderColor: "hover:border-accent/40",
                glowColor: "bg-accent/5",
                hoverGlowColor: "group-hover:bg-accent/10",
              },
              {
                icon: TrendingUp,
                title: "Earn, Trade, Power",
                description:
                  "Investors and communities earn from real-world clean energy returns while supporting climate goals.",
                number: "03",
                colorClass: "energy",
                bgColor: "from-energy/10 to-energy/5",
                borderColor: "border-energy/20",
                hoverBorderColor: "hover:border-energy/40",
                glowColor: "bg-energy/5",
                hoverGlowColor: "group-hover:bg-energy/10",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <motion.div variants={cardHoverVariants} initial="initial" whileHover="hover" className="h-full">
                  <Card
                    className={`p-8 bg-card/50 backdrop-blur-sm ${item.borderColor} ${item.hoverBorderColor} relative overflow-hidden group transition-colors h-full`}
                  >
                    <motion.div
                      className={`absolute top-0 right-0 w-32 h-32 ${item.glowColor} rounded-full blur-2xl ${item.hoverGlowColor} transition-colors`}
                      variants={glowVariants}
                      animate="animate"
                    />

                    <div className="relative">
                      <motion.div
                        variants={iconVariants}
                        initial="initial"
                        whileHover="hover"
                        className={`w-12 h-12 bg-${item.colorClass}/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-${item.colorClass}/20 transition-colors`}
                      >
                        <item.icon className={`w-6 h-6 text-${item.colorClass}`} />
                      </motion.div>

                      <div className="text-6xl font-bold text-foreground/10 mb-4">{item.number}</div>
                      <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Flow Diagram */}
          <motion.div 
            className="mt-16 max-w-4xl mx-auto"
            {...fadeInUp}
          >
            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-16 h-16 bg-energy/20 rounded-full flex items-center justify-center animate-pulse">
                    <Sun className="w-8 h-8 text-energy" />
                  </div>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-energy to-solar relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-solar rounded-full animate-pulse" />
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-16 h-16 bg-solar/20 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '0.5s' }}>
                    <Wind className="w-8 h-8 text-solar" />
                  </div>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-solar to-energy relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-energy rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-16 h-16 bg-energy/20 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '1s' }}>
                    <Battery className="w-8 h-8 text-energy" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powering <span className="text-energy">Climate-Neutral</span> Growth
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real impact, real numbers, real change
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <GlowCard 
                glowColor="green" 
                customSize 
                className="w-full h-auto aspect-auto p-8"
              >
                <div className="flex flex-col items-center justify-center text-center h-full">
                  <Sun className="w-12 h-12 text-energy mb-4" />
                  <div className="text-5xl font-bold text-energy mb-2">2,000+</div>
                  <div className="text-foreground mb-4 font-medium">Decentralized Renewable Network</div>
                  <div className="text-sm text-muted-foreground">
                    Building the foundation for on-chain solar, wind, and storage nodes.
                  </div>
                </div>
              </GlowCard>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <GlowCard 
                glowColor="blue" 
                customSize 
                className="w-full h-auto aspect-auto p-8"
              >
                <div className="flex flex-col items-center justify-center text-center h-full">
                  <Globe className="w-12 h-12 text-solar mb-4" />
                  <div className="text-5xl font-bold text-solar mb-2">12+</div>
                  <div className="text-foreground mb-4 font-medium">Global by Design</div>
                  <div className="text-sm text-muted-foreground">
                    Connecting clean energy projects and investors across continents.
                  </div>
                </div>
              </GlowCard>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <GlowCard 
                glowColor="orange" 
                customSize 
                className="w-full h-auto aspect-auto p-8"
              >
                <div className="flex flex-col items-center justify-center text-center h-full">
                  <BarChart3 className="w-12 h-12 text-energy mb-4" />
                  <div className="text-5xl font-bold text-energy mb-2">$50M+</div>
                  <div className="text-foreground mb-4 font-medium">Tokenized Climate Financing</div>
                  <div className="text-sm text-muted-foreground">
                    Enabling transparent, accessible and climate-neutral capital flows.
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          </motion.div>

          {/* World Map Placeholder */}
          <motion.div {...fadeInUp}>
            <Card className="p-12 bg-card/30 backdrop-blur-sm border-energy/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-energy/5 via-transparent to-solar/5" />
              <div className="relative text-center">
                <Globe className="w-24 h-24 text-energy/30 mx-auto mb-6 animate-float" />
                <h3 className="text-2xl font-bold mb-4">Global Energy Network</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Aethera nodes are deployed across North America, Europe, Asia, and emerging markets, 
                  creating a truly decentralized renewable energy infrastructure.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Token Utility Section */}
      <section className="py-24 relative bg-gradient-to-b from-transparent via-card/30 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-energy via-solar to-energy bg-clip-text text-transparent">Aethera Tokens</span>: Energy Meets Incentives
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Aethera's token powers node participation, governance, and rewards
            </p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto"
            {...fadeInUp}
          >
            <Card className="p-12 bg-gradient-to-br from-energy/5 via-card/50 to-solar/5 backdrop-blur-sm border-energy/20 relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-energy/10 rounded-full blur-3xl animate-glow-pulse" />
              
              <div className="relative">
                {/* Central Token Icon */}
                <div className="flex justify-center mb-12">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-energy to-solar rounded-full flex items-center justify-center animate-float">
                      <Coins className="w-16 h-16 text-background" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-energy to-solar rounded-full animate-ping opacity-20" />
                  </div>
                </div>

                {/* Token Flow Cycle */}
                <div className="grid md:grid-cols-5 gap-6 text-center">
                  <div className="space-y-3">
                    <div className="w-16 h-16 bg-energy/10 rounded-full flex items-center justify-center mx-auto">
                      <Lock className="w-8 h-8 text-energy" />
                    </div>
                    <h4 className="font-semibold">Stake</h4>
                    <p className="text-sm text-muted-foreground">Lock tokens to secure the network</p>
                  </div>

                  <div className="flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-energy" />
                  </div>

                  <div className="space-y-3">
                    <div className="w-16 h-16 bg-solar/10 rounded-full flex items-center justify-center mx-auto">
                      <Zap className="w-8 h-8 text-solar" />
                    </div>
                    <h4 className="font-semibold">Fund</h4>
                    <p className="text-sm text-muted-foreground">Support renewable projects</p>
                  </div>

                  <div className="flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-energy" />
                  </div>

                  <div className="space-y-3">
                    <div className="w-16 h-16 bg-energy/10 rounded-full flex items-center justify-center mx-auto">
                      <TrendingUp className="w-8 h-8 text-energy" />
                    </div>
                    <h4 className="font-semibold">Earn</h4>
                    <p className="text-sm text-muted-foreground">Receive energy returns</p>
                  </div>
                </div>

                <div className="mt-12 grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="w-16 h-16 bg-solar/10 rounded-full flex items-center justify-center">
                      <Coins className="w-8 h-8 text-solar" />
                    </div>
                    <h4 className="font-semibold text-lg">Redeem</h4>
                    <p className="text-muted-foreground">Convert rewards to real-world energy or trade on markets</p>
                  </div>

                  <div className="space-y-3">
                    <div className="w-16 h-16 bg-energy/10 rounded-full flex items-center justify-center">
                      <Shield className="w-8 h-8 text-energy" />
                    </div>
                    <h4 className="font-semibold text-lg">Govern</h4>
                    <p className="text-muted-foreground">Vote on network upgrades and new node deployments</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-br from-energy/5 to-transparent rounded-full blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-0 w-72 h-72 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeInUp} viewport={{ once: true }} className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <div className="px-4 py-2 bg-gradient-to-r from-energy/20 to-accent/10 border border-energy/30 rounded-full backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}>
                    <Sparkles className="w-4 h-4 text-energy" />
                  </motion.div>
                  <span className="text-sm font-semibold text-foreground">Limited Slots Available</span>
                </div>
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Join the{" "}
              <span className="bg-gradient-to-r from-energy to-accent bg-clip-text text-transparent">
                Decentralized Climate
              </span>{" "}
              Movement
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Be part of the first tokenized clean energy network reshaping renewable energy finance
            </p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.div variants={scaleIn}>
              <Card className="p-8 md:p-12 bg-gradient-to-br from-energy/10 via-card/50 to-solar/10 backdrop-blur-sm border-energy/20 text-center relative overflow-hidden group hover:border-energy/40 transition-all duration-300">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-energy/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />

                <motion.div
                  className="relative z-10 mx-auto mb-6 w-fit"
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <motion.div {...pulseGlow}>
                    <Users className="w-16 h-16 text-energy" />
                  </motion.div>
                </motion.div>

                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-4">Early Access Program</h3>
                  <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                    Get exclusive access to node deployment opportunities, governance rights, and early investor benefits.
                    Join the future of renewable energy financing.
                  </p>

                  <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                  >
                    <motion.div
                      variants={fadeInUp}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <a href="https://aethera-app.vercel.app/">
                        <Button
                          size="lg"git init
                          className="bg-gradient-to-r from-energy to-accent text-white font-semibold px-8 shadow-lg hover:shadow-xl transition-all group"
                        >
                          Check Now
                          <motion.div
                            className="ml-2"
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY }}
                          >
                            <ArrowRight className="w-5 h-5" />
                          </motion.div>
                        </Button>
                      </a>
                    </motion.div>

                    <motion.div
                      variants={fadeInUp}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <a href="https://x.com/aetheraFi">
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-energy text-energy hover:bg-energy/10 font-semibold px-8 group bg-transparent"
                        >
                          Follow @aetheraFi
                          <motion.div
                            className="ml-2"
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0.1 }}
                          >
                            <ArrowRight className="w-5 h-5" />
                          </motion.div>
                        </Button>
                      </a>
                    </motion.div>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <StackedCircularFooter />
    </div>
  );
};

export default Index;
