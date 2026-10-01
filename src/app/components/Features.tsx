import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Users, Globe, CreditCard, BarChart3, Smartphone, Building2, ClipboardCheck, Shield, ArrowRight, Sparkles, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Link } from 'react-router';

const features = [
  {
    icon: Calendar,
    title: 'Reservation Management',
    description: 'Handle all bookings effortlessly with a smart calendar system that shows real-time availability across all rooms and properties.',
    gradient: 'from-blue-500 to-cyan-500',
    number: '01',
  },
  {
    icon: Users,
    title: 'Guest Management',
    description: 'Store guest profiles, preferences, and booking history to provide personalized service and build lasting relationships.',
    gradient: 'from-purple-500 to-pink-500',
    number: '02',
  },
  {
    icon: Globe,
    title: 'Online Booking',
    description: 'Accept direct bookings through your website with integrated booking engine and instant confirmation system.',
    gradient: 'from-primary to-secondary',
    number: '03',
  },
  {
    icon: Building2,
    title: 'Multi Property Dashboard',
    description: 'Manage multiple properties from one unified dashboard. Switch between locations seamlessly and monitor all operations.',
    gradient: 'from-orange-500 to-red-500',
    number: '04',
    featured: true,
  },
  {
    icon: CreditCard,
    title: 'Payment Tracking',
    description: 'Track payments, invoices, and financial records with support for multiple payment methods including M-Pesa integration.',
    gradient: 'from-emerald-500 to-teal-500',
    number: '05',
  },
  {
    icon: BarChart3,
    title: 'Reports & Analytics',
    description: 'Get real-time insights on occupancy rates, revenue, guest trends, and performance metrics with detailed reporting.',
    gradient: 'from-violet-500 to-purple-500',
    number: '06',
    featured: true,
  },
  {
    icon: ClipboardCheck,
    title: 'Housekeeping Management',
    description: 'Coordinate room cleaning schedules, maintenance requests, and staff assignments to ensure smooth daily operations.',
    gradient: 'from-amber-500 to-orange-500',
    number: '07',
  },
  {
    icon: Smartphone,
    title: 'Mobile Access',
    description: 'Manage your property on-the-go with mobile-optimized interface. Check bookings, update rooms, and respond to guests anywhere.',
    gradient: 'from-sky-500 to-blue-500',
    number: '08',
  },
  {
    icon: Shield,
    title: 'User Roles & Permissions',
    description: 'Set up different access levels for staff members. Control who can view, edit, or manage specific property information.',
    gradient: 'from-rose-500 to-pink-500',
    number: '09',
  },
];

export function Features() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? -45 : 45,
    }),
  };

  const currentFeature = features[currentIndex];

  return (
    <section
      id="features"
      className="relative py-24 bg-gradient-to-b from-background via-accent/20 to-background dark:from-background dark:via-card/20 dark:to-background overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Animated Decorative background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/3 to-secondary/3 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Powerful Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Everything You Need to Manage Your Hospitality Business
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Powerful features designed specifically for Tanzania's tourism and hospitality industry
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel Card */}
          <div className="relative h-[500px] flex items-center justify-center perspective-1000">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.5 },
                  rotateY: { duration: 0.5 },
                }}
                className="absolute w-full max-w-4xl"
              >
                <div className="relative group">
                  {/* Glow Effect */}
                  <div className={`absolute -inset-4 bg-gradient-to-r ${currentFeature.gradient} rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />

                  {/* Main Card */}
                  <div className="relative p-12 rounded-3xl border-2 border-border/50 bg-card/80 backdrop-blur-2xl shadow-2xl">
                    {/* Featured Badge */}
                    {currentFeature.featured && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium shadow-lg"
                      >
                        ⭐ Popular Feature
                      </motion.div>
                    )}

                    {/* Number Badge */}
                    <motion.div
                      initial={{ rotate: -180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="absolute top-8 right-8 w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/30"
                    >
                      <span className="text-lg font-bold text-primary">{currentFeature.number}</span>
                    </motion.div>

                    <div className="flex flex-col md:flex-row items-center gap-8">
                      {/* Icon Section */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                        className="flex-shrink-0"
                      >
                        <div className={`relative w-32 h-32 rounded-3xl bg-gradient-to-br ${currentFeature.gradient} flex items-center justify-center shadow-2xl`}>
                          <currentFeature.icon className="w-16 h-16 text-white" />

                          {/* Animated Ring */}
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${currentFeature.gradient} blur-xl`}
                          />
                        </div>
                      </motion.div>

                      {/* Content Section */}
                      <div className="flex-1 text-center md:text-left">
                        <motion.h3
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                        >
                          {currentFeature.title}
                        </motion.h3>

                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="text-lg text-muted-foreground leading-relaxed mb-6"
                        >
                          {currentFeature.description}
                        </motion.p>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <Link
                            to="/features"
                            className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${currentFeature.gradient} text-white rounded-xl hover:shadow-2xl transition-all duration-300 group`}
                          >
                            Learn More
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex items-center justify-between px-4 pointer-events-none">
            <button
              onClick={goToPrevious}
              className="pointer-events-auto w-12 h-12 rounded-full bg-card/70 backdrop-blur-xl border border-border/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center shadow-lg hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="pointer-events-auto w-12 h-12 rounded-full bg-card/70 backdrop-blur-xl border border-border/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center shadow-lg hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Dots Navigation & Controls */}
        <div className="mt-12 flex flex-col items-center gap-6">
          {/* Dots */}
          <div className="flex items-center gap-3">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="group relative"
              >
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary scale-125'
                    : 'bg-border hover:bg-primary/50'
                }`} />
                {index === currentIndex && (
                  <motion.div
                    layoutId="active-dot"
                    className="absolute inset-0 rounded-full border-2 border-primary"
                    style={{ scale: 1.5 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Play/Pause & Counter */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/70 backdrop-blur-xl border border-border/50 hover:bg-accent transition-all"
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-4 h-4" />
                  <span className="text-sm">Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  <span className="text-sm">Play</span>
                </>
              )}
            </button>

            <span className="text-sm text-muted-foreground">
              {currentIndex + 1} / {features.length}
            </span>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <Link
              to="/features"
              className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
            >
              Explore All Features
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/sign-up"
              className="px-8 py-4 border-2 border-border bg-card hover:bg-accent rounded-xl hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              Get Started Free
              <Sparkles className="w-5 h-5" />
            </Link>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Join 500+ properties in Tanzania already using Mimi App
          </p>
        </motion.div>
      </div>
    </section>
  );
}