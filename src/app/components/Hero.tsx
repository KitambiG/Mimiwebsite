import { motion } from 'motion/react';
import { ArrowRight, Calendar, Building2 } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-card via-background to-card/50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-subtle" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary border border-primary/20">
              <span className="text-sm font-medium">🇹🇿 Built for Tanzania Tourism Industry</span>
            </div>
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Built  to  simplify.                       
            </h1>

            {/* <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Simplifying Hospitality Management in Tanzania
            </h2> */}

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Smart Property Management System designed for hotels, lodges, guest houses, and safari camps. Manage bookings, guests, and operations seamlessly with Mimi App.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/sign-up" className="px-6 py-3 sm:px-8 sm:py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group text-sm sm:text-base">
                Register Now
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link to="/contact-sales" className="px-6 py-3 sm:px-8 sm:py-4 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base">
                Get Pricing
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Easy Booking</p>
                  <p className="text-muted-foreground">Seamless online reservations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Multi-Property</p>
                  <p className="text-muted-foreground">Manage all properties in one place</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right image - Tanzania tourism */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-border">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1741850826371-b658677324e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW56YW5pYSUyMHNhZmFyaSUyMGxvZGdlJTIwaG90ZWwlMjByZXNvcnR8ZW58MXx8fHwxNzc4NjU3MTY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Tanzania safari lodge and resort"
                className="w-full h-auto"
              />
            </div>

            {/* Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-xl p-4 border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">🏨</span>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Properties Managed</div>
                  <div className="text-2xl font-bold text-foreground">500+</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -top-6 -right-6 bg-card rounded-xl shadow-xl p-4 border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Guest Satisfaction</div>
                  <div className="text-2xl font-bold text-foreground">98%</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}