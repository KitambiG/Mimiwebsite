import { motion } from 'motion/react';
import { CheckCircle2, AlertCircle, Sparkles, Globe, Users, BarChart3, ArrowRight, Building2, Calendar, Shield } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function AboutPage() {
  const slideFromBehindVariants = {
    hidden: {
      opacity: 0,
      scale: 0.6,
      z: -400,
      rotateX: 30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      z: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 20,
        duration: 1,
      },
    },
  };

  const cardFromBehindVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      z: -300,
      rotateY: -15,
    },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      z: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 18,
        delay: index * 0.2,
      },
    }),
  };

  const challenges = [
    {
      icon: AlertCircle,
      title: 'Connectivity Gap',
      description: 'Many properties in remote areas struggle with reliable internet access, making cloud-only systems impractical and leaving operations vulnerable to downtime.',
      gradient: 'from-red-500 to-orange-500',
    },
    {
      icon: AlertCircle,
      title: 'Inventory Fragmentation',
      description: 'Room availability scattered across multiple platforms leads to overbooking, lost revenue, and frustrated guests when systems are not synchronized.',
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      icon: AlertCircle,
      title: 'Operational Friction',
      description: 'Manual processes and disconnected tools create inefficiencies, errors, and make it difficult to deliver the seamless guest experience modern travelers expect.',
      gradient: 'from-amber-500 to-yellow-500',
    },
  ];

  const solutions = [
    {
      icon: Users,
      title: 'Guest Account Management',
      description: 'Centralized guest profiles with preferences, booking history, and communication logs ensure personalized service and build lasting relationships.',
      gradient: 'from-primary to-emerald-500',
    },
    {
      icon: Calendar,
      title: 'Activity Coordination',
      description: 'Streamline safari bookings, excursions, and daily operations with integrated scheduling that keeps your team and guests in perfect sync.',
      gradient: 'from-primary to-secondary',
    },
    {
      icon: Building2,
      title: 'Unified Command',
      description: 'One dashboard to manage all properties, rooms, staff, and operations. Real-time insights and control from anywhere with internet.',
      gradient: 'from-secondary to-amber-600',
    },
  ];

  const channelFeatures = [
    'Connect to global OTAs (Booking.com, Expedia, Airbnb)',
    'Real-time inventory synchronization',
    'Automated rate management',
    'Commission tracking & analytics',
    'Direct booking engine',
    'Channel performance insights',
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-card via-background to-card/50 overflow-hidden" style={{ perspective: "2000px" }}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              About Us
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Transforming Hospitality Management in Tanzania
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Insync Technologies is a forward-thinking software firm dedicated to solving the unique challenges faced by Tanzania's hospitality industry through innovative technology solutions.
            </p>
          </motion.div>

          <motion.div
            variants={slideFromBehindVariants}
            initial="hidden"
            animate="visible"
            whileHover={{
              scale: 1.02,
              z: 50,
              transition: { duration: 0.4 },
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/20 max-w-5xl mx-auto"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1741850826371-b658677324e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUYW56YW5pYSUyMHNhZmFyaSUyMGxvZGdlJTIwcmVzb3J0JTIwaG90ZWx8ZW58MXx8fHwxNzc4NzA1MzI1fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Beautiful Tanzania safari lodge resort"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-2xl font-bold mb-2">Empowering Excellence</p>
              <p className="text-lg text-white/90">Technology that works for your team</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-accent/20 dark:from-background dark:to-card/20" style={{ perspective: "2000px" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 mb-6">
              The Challenge
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Hidden Costs of Manual Management
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Tanzania's hospitality operators face three critical bottlenecks that drain resources and limit growth potential.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16" style={{ transformStyle: "preserve-3d" }}>
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardFromBehindVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  z: 50,
                  transition: { duration: 0.3 },
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative group"
              >
                <div className={`absolute -inset-2 bg-gradient-to-r ${challenge.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`} />
                <div className="relative p-8 rounded-2xl border-2 border-border/50 bg-card/70 backdrop-blur-xl hover:border-red-500/30 transition-all h-full shadow-lg">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${challenge.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                    <challenge.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{challenge.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{challenge.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={slideFromBehindVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              z: 40,
              transition: { duration: 0.4 },
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-border/50 bg-card/20 backdrop-blur-xl"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1602410125631-7e736e36797c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUYW56YW5pYSUyMHdpbGRsaWZlJTIwZWxlcGhhbnRzJTIwbGlvbnMlMjB6ZWJyYXMlMjBzYWZhcml8ZW58MXx8fHwxNzc4NzA1MzM0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Tanzania safari wildlife zebras"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="text-xl md:text-2xl font-bold mb-2">Tanzania's Tourism Potential</p>
              <p className="text-base md:text-lg text-white/90">Don't let outdated systems hold your property back</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-accent/20 to-background dark:from-card/20 dark:to-background" style={{ perspective: "2000px" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              The Solution
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Mimi PMS: Built for Tanzania
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              A comprehensive property management system designed specifically for Tanzania's unique hospitality landscape.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16" style={{ transformStyle: "preserve-3d" }}>
            <motion.div
              variants={slideFromBehindVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                z: 40,
                transition: { duration: 0.4 },
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/20"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1573567199032-50a155ba6de1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN0YWZmJTIwdXNpbmclMjBjb21wdXRlciUyMGxhcHRvcCUyMHJlY2VwdGlvbnxlbnwxfHx8fDE3Nzg3MDUzMzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Hotel staff using Mimi App at reception"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            </motion.div>

            <div className="space-y-8" style={{ transformStyle: "preserve-3d" }}>
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardFromBehindVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    z: 40,
                    transition: { duration: 0.3 },
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group"
                >
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <solution.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{solution.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6" style={{ transformStyle: "preserve-3d" }}>
            <motion.div
              custom={0}
              variants={cardFromBehindVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                scale: 1.1,
                z: 50,
                transition: { duration: 0.3 },
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
            >
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-foreground font-semibold mb-1">Uptime Guarantee</div>
              <div className="text-sm text-muted-foreground">Reliable cloud infrastructure</div>
            </motion.div>
            <motion.div
              custom={1}
              variants={cardFromBehindVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                scale: 1.1,
                z: 50,
                transition: { duration: 0.3 },
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="p-6 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20"
            >
              <div className="text-4xl font-bold text-secondary mb-2">500+</div>
              <div className="text-foreground font-semibold mb-1">Properties</div>
              <div className="text-sm text-muted-foreground">Trust Mimi across Tanzania</div>
            </motion.div>
            <motion.div
              custom={2}
              variants={cardFromBehindVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                scale: 1.1,
                z: 50,
                transition: { duration: 0.3 },
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20"
            >
              <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">24/7</div>
              <div className="text-foreground font-semibold mb-1">Support</div>
              <div className="text-sm text-muted-foreground">Always here to help</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mimi Channel Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden" style={{ perspective: "2000px" }}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                Coming Soon
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Introducing Mimi Channel
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Your global distribution hub connecting Tanzania's finest properties to the world's leading travel platforms.
              </p>

              <div className="space-y-4 mb-8">
                {channelFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/contact-sales"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-xl hover:bg-white/90 transition-all shadow-xl hover:shadow-2xl group"
              >
                Join the Waitlist
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              variants={slideFromBehindVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                z: 50,
                transition: { duration: 0.4 },
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1747745139883-b641673288bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxnbG9iYWwlMjBidXNpbmVzcyUyMHRlY2hub2xvZ3klMjB0cmF2ZWwlMjBjb25uZWN0aW9uc3xlbnwxfHx8fDE3Nzg3MDU0Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Glowing world map representing global distribution network"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                    <Globe className="w-10 h-10 text-white" />
                    <div>
                      <div className="font-bold text-white mb-1">Global Reach</div>
                      <div className="text-sm text-white/80">Connect to worldwide distribution networks</div>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -right-6 p-4 rounded-xl bg-white shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-primary" />
                  <div>
                    <div className="text-xs text-muted-foreground">Coming Q3 2026</div>
                    <div className="text-sm font-bold text-foreground">Early Access</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-background" style={{ perspective: "2000px" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={slideFromBehindVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Property Management?
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Join 500+ properties across Tanzania already using Mimi App to streamline operations and delight guests.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/get-started"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:shadow-2xl transition-all group"
              >
                Start 10-Day Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/sign-up"
                className="px-8 py-4 border-2 border-border bg-card hover:bg-accent rounded-xl hover:shadow-xl transition-all"
              >
                Register Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
