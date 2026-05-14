import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const slideFromBehindVariants = {
    hidden: {
      opacity: 0,
      scale: 0.6,
      z: -400,
      rotateY: -20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      z: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 20,
        duration: 1,
      },
    },
  };

  const featureCardVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      z: -200,
    },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      z: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.15,
      },
    }),
  };

  const statVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      z: -300,
    },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      z: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 18,
        delay: 0.6 + index * 0.1,
      },
    }),
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background via-accent/10 to-background dark:from-background dark:via-card/10 dark:to-background relative overflow-hidden" style={{ perspective: "2000px" }}>
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">🇹🇿 Made for Tanzania</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Smart Management for Your Property
          </h2>
          <p className="text-lg text-muted-foreground">
            Built specifically for Tanzania's hotels, lodges, and safari camps
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16" style={{ transformStyle: "preserve-3d" }}>
          {/* Image Side */}
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/20">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1578326626553-39f72c545b07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc2FmYXJpJTIwZWxlcGhhbnRzfGVufDF8fHx8MTc3ODcwNDM0MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Safari lodge in Tanzania with wildlife"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute top-6 right-6 px-4 py-2 bg-card/80 backdrop-blur-xl rounded-xl border border-primary/30 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-xs text-muted-foreground">Properties</div>
                </div>
              </motion.div>

              {/* Bottom Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="px-4 py-3 bg-card/80 backdrop-blur-xl rounded-xl border border-primary/30 flex items-center gap-3 shadow-xl">
                  <span className="text-2xl">🏨</span>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Tanzania Tourism</div>
                    <div className="text-xs text-muted-foreground">Trusted by leading properties</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Content Side */}
          <div className="space-y-6" style={{ transformStyle: "preserve-3d" }}>
            <div className="space-y-4">
              <motion.div
                custom={0}
                variants={featureCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  z: 40,
                  transition: { duration: 0.3 },
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 hover:border-primary/40 transition-all group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Easy Booking Management</h3>
                  <p className="text-sm text-muted-foreground">Handle reservations with real-time sync across all platforms</p>
                </div>
              </motion.div>

              <motion.div
                custom={1}
                variants={featureCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  z: 40,
                  transition: { duration: 0.3 },
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20 hover:border-secondary/40 transition-all group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Cloud-Based System</h3>
                  <p className="text-sm text-muted-foreground">Access your data from anywhere with internet connection</p>
                </div>
              </motion.div>

              <motion.div
                custom={2}
                variants={featureCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  z: 40,
                  transition: { duration: 0.3 },
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-br from-emerald-500/5 to-emerald-500/10 border border-emerald-500/20 hover:border-emerald-500/40 transition-all group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">M-Pesa Integration</h3>
                  <p className="text-sm text-muted-foreground">Accept payments with Tanzania's preferred method</p>
                </div>
              </motion.div>

              <motion.div
                custom={3}
                variants={featureCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  z: 40,
                  transition: { duration: 0.3 },
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-br from-blue-500/5 to-blue-500/10 border border-blue-500/20 hover:border-blue-500/40 transition-all group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Track Everything</h3>
                  <p className="text-sm text-muted-foreground">Guests, rooms, staff, and finances in one dashboard</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, z: -100 }}
              whileInView={{ opacity: 1, scale: 1, z: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.6,
              }}
            >
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:shadow-2xl transition-all duration-300 group text-sm sm:text-base"
              >
                Discover Our Story
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6" style={{ transformStyle: "preserve-3d" }}>
          <motion.div
            custom={0}
            variants={statVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              scale: 1.1,
              z: 50,
              transition: { duration: 0.3 },
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="text-center p-6 rounded-xl bg-card/70 backdrop-blur-xl border border-border/50 shadow-lg"
          >
            <div className="text-3xl font-bold text-primary mb-1">500+</div>
            <div className="text-sm text-muted-foreground">Properties</div>
          </motion.div>
          <motion.div
            custom={1}
            variants={statVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              scale: 1.1,
              z: 50,
              transition: { duration: 0.3 },
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="text-center p-6 rounded-xl bg-card/70 backdrop-blur-xl border border-border/50 shadow-lg"
          >
            <div className="text-3xl font-bold text-secondary mb-1">98%</div>
            <div className="text-sm text-muted-foreground">Satisfaction</div>
          </motion.div>
          <motion.div
            custom={2}
            variants={statVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              scale: 1.1,
              z: 50,
              transition: { duration: 0.3 },
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="text-center p-6 rounded-xl bg-card/70 backdrop-blur-xl border border-border/50 shadow-lg"
          >
            <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">24/7</div>
            <div className="text-sm text-muted-foreground">Support</div>
          </motion.div>
          <motion.div
            custom={3}
            variants={statVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              scale: 1.1,
              z: 50,
              transition: { duration: 0.3 },
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="text-center p-6 rounded-xl bg-card/70 backdrop-blur-xl border border-border/50 shadow-lg"
          >
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">10-Day</div>
            <div className="text-sm text-muted-foreground">Free Trial</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
