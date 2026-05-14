import { motion } from 'motion/react';
import { MapPin, Zap, Lock, TrendingUp, Cloud, Headphones, Sparkles } from 'lucide-react';

const reasons = [
  {
    icon: MapPin,
    title: 'Built for Tanzania',
    description: 'Designed with Tanzania\'s unique hospitality needs in mind, from safari lodges to beach resorts.',
    gradient: 'from-primary to-emerald-500',
    delay: 0.1,
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Intuitive interface that requires minimal training. Get your team up and running in hours, not weeks.',
    gradient: 'from-secondary to-amber-500',
    delay: 0.2,
  },
  {
    icon: Cloud,
    title: 'Cloud-Based',
    description: 'Access your data from anywhere, anytime with secure cloud storage and real-time sync.',
    gradient: 'from-blue-500 to-cyan-500',
    delay: 0.3,
  },
  {
    icon: Lock,
    title: 'Bank-Level Security',
    description: 'Enterprise-grade encryption with secure data storage. Your business information is always protected.',
    gradient: 'from-violet-500 to-purple-500',
    delay: 0.4,
  },
  {
    icon: TrendingUp,
    title: 'Scales With You',
    description: 'Grows with your business. Start with one property and easily expand to multiple locations.',
    gradient: 'from-rose-500 to-pink-500',
    delay: 0.5,
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Get instant updates on bookings, payments, and operations. Our team is here whenever you need us.',
    gradient: 'from-emerald-500 to-teal-500',
    delay: 0.6,
  },
];

export function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.3,
      rotateY: -90,
      z: -200,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      z: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-background via-card/30 to-background overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: 0.2,
            }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 mb-6 whitespace-nowrap"
          >
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-bold text-primary whitespace-nowrap">Why Choose Mimi App</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.3,
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
          >
            Built for Your Success
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Trusted by 500+ hotels, lodges, and resorts across Tanzania
          </motion.p>
        </motion.div>

        {/* 3D Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ perspective: "2000px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 50,
                transition: { duration: 0.3 },
              }}
              className="relative group"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Glow Effect */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${reason.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: reason.delay,
                }}
              />

              {/* Main Card */}
              <div className="relative h-full p-8 rounded-2xl border-2 border-border/50 bg-card/70 backdrop-blur-2xl hover:border-primary/50 transition-all duration-500 overflow-hidden shadow-xl hover:shadow-2xl">
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.5, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Icon Container */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: 0.1 + index * 0.1,
                  }}
                  whileHover={{
                    rotate: 360,
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 200, damping: 15 },
                  }}
                  className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center mb-6 shadow-2xl`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <reason.icon className="w-10 h-10 text-white relative z-10" />

                  {/* Animated Ring */}
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: reason.delay,
                    }}
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${reason.gradient} blur-md`}
                  />
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {reason.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>

                {/* Decorative Corner Element */}
                <motion.div
                  className="absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-transparent"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 180],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    delay: reason.delay,
                  }}
                />

                {/* Floating Particles */}
                <motion.div
                  className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-primary"
                  animate={{
                    y: [-10, -20, -10],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: reason.delay,
                  }}
                />
                <motion.div
                  className="absolute bottom-8 right-8 w-2 h-2 rounded-full bg-secondary"
                  animate={{
                    y: [-15, -25, -15],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: reason.delay + 0.5,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 1,
          }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "500+", label: "Properties" },
            { number: "98%", label: "Satisfaction" },
            { number: "24/7", label: "Support" },
            { number: "99.9%", label: "Uptime" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 1.2 + index * 0.1,
              }}
              whileHover={{ scale: 1.1, rotateY: 10 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-card/70 to-card/40 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-lg"
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold text-primary mb-2"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              >
                {stat.number}
              </motion.div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
