import { motion } from 'motion/react';
import {
  Calendar, Users, Globe, CreditCard, BarChart3, Smartphone,
  Building2, ClipboardCheck, Shield, Bell, Wifi, Cloud,
  CheckCircle2, ArrowRight, Zap, Lock, TrendingUp, Check, X
} from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

const plans = ['Basic', 'Professional', 'Enterprise'];

const featureGroups = [
  {
    category: 'Booking & Reservations',
    icon: Calendar,
    color: 'from-blue-500 to-cyan-500',
    features: [
      { name: 'Smart Reservation System', basic: true, professional: true, enterprise: true },
      { name: 'Online Booking Engine', basic: true, professional: true, enterprise: true },
      { name: 'Automated Reminders', basic: true, professional: true, enterprise: true },
      { name: 'Channel Management', basic: false, professional: true, enterprise: true },
      { name: 'Real-time Availability Sync', basic: false, professional: true, enterprise: true },
      { name: 'Custom Booking Rules', basic: false, professional: false, enterprise: true },
    ],
  },
  {
    category: 'Guest Management',
    icon: Users,
    color: 'from-purple-500 to-pink-500',
    features: [
      { name: 'Guest Profiles', basic: true, professional: true, enterprise: true },
      { name: 'Check-In / Check-Out', basic: true, professional: true, enterprise: true },
      { name: 'Guest Communication (SMS/Email)', basic: true, professional: true, enterprise: true },
      { name: 'Loyalty Programs', basic: false, professional: true, enterprise: true },
      { name: 'Guest Analytics', basic: false, professional: true, enterprise: true },
      { name: 'VIP Guest Management', basic: false, professional: false, enterprise: true },
    ],
  },
  {
    category: 'Property Operations',
    icon: Building2,
    color: 'from-orange-500 to-red-500',
    features: [
      { name: 'Multi-Property Dashboard', basic: false, professional: true, enterprise: true },
      { name: 'Housekeeping Management', basic: true, professional: true, enterprise: true },
      { name: 'User Roles & Permissions', basic: true, professional: true, enterprise: true },
      { name: 'Maintenance Tracking', basic: false, professional: true, enterprise: true },
      { name: 'Staff Scheduling', basic: false, professional: true, enterprise: true },
      { name: 'Inventory Management', basic: false, professional: false, enterprise: true },
    ],
  },
  {
    category: 'Financial Management',
    icon: CreditCard,
    color: 'from-emerald-500 to-teal-500',
    features: [
      { name: 'Payment Processing', basic: true, professional: true, enterprise: true },
      { name: 'Invoice Generation', basic: true, professional: true, enterprise: true },
      { name: 'M-Pesa Integration', basic: true, professional: true, enterprise: true },
      { name: 'Revenue Management', basic: false, professional: true, enterprise: true },
      { name: 'Expense Tracking', basic: false, professional: true, enterprise: true },
      { name: 'Custom Financial Reports', basic: false, professional: false, enterprise: true },
    ],
  },
  {
    category: 'Reports & Analytics',
    icon: BarChart3,
    color: 'from-violet-500 to-purple-500',
    features: [
      { name: 'Occupancy Reports', basic: true, professional: true, enterprise: true },
      { name: 'Revenue Analytics', basic: true, professional: true, enterprise: true },
      { name: 'Guest Analytics', basic: false, professional: true, enterprise: true },
      { name: 'Custom Reports', basic: false, professional: true, enterprise: true },
      { name: 'Advanced Forecasting', basic: false, professional: false, enterprise: true },
      { name: 'API Data Export', basic: false, professional: false, enterprise: true },
    ],
  },
  {
    category: 'Mobile & Cloud',
    icon: Smartphone,
    color: 'from-sky-500 to-blue-500',
    features: [
      { name: 'Mobile Responsive Interface', basic: true, professional: true, enterprise: true },
      { name: 'Cloud-Based Storage', basic: true, professional: true, enterprise: true },
      { name: 'Bank-Level Security', basic: true, professional: true, enterprise: true },
      { name: 'Real-Time Sync', basic: true, professional: true, enterprise: true },
      { name: 'Offline Mode', basic: false, professional: true, enterprise: true },
      { name: 'White-Label Solution', basic: false, professional: false, enterprise: true },
    ],
  },
];

export function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section with Safari Image */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Tanzania Safari Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-gray-900/95 backdrop-blur-sm" />
        </div>

        {/* Animated orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 backdrop-blur-xl border border-primary/30 text-primary mb-6">
              All Features
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Everything You Need to Run Your Hospitality Business
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Mimi App provides comprehensive tools designed specifically for Tanzania's tourism industry.
              From booking management to financial reporting, we've got you covered.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['Up to 50 rooms', 'Multi-property', 'M-Pesa integration', 'Real-time sync', 'Mobile access', 'Cloud-based'].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-sm text-white">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-gradient-to-b from-background to-accent/10 dark:from-background dark:to-card/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Compare Plans & Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect plan for your property size and needs
            </p>
          </motion.div>

          {/* Desktop Table */}
          <div className="hidden lg:block">
            <div className="bg-card/70 backdrop-blur-xl border border-border/50 rounded-3xl shadow-2xl overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-4 gap-4 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-border/50">
                <div className="text-lg font-bold text-foreground">Features</div>
                {plans.map((plan, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-xl font-bold ${index === 1 ? 'text-primary' : 'text-foreground'}`}>
                      {plan}
                    </div>
                    {index === 1 && (
                      <span className="inline-block mt-1 px-3 py-1 bg-primary text-white text-xs rounded-full">
                        Most Popular
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Feature Groups */}
              {featureGroups.map((group, groupIndex) => (
                <motion.div
                  key={groupIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                >
                  {/* Category Header */}
                  <div className="px-6 py-4 bg-accent/20 dark:bg-card/20 border-b border-border/50">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center`}>
                        <group.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{group.category}</h3>
                    </div>
                  </div>

                  {/* Features */}
                  {group.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className={`grid grid-cols-4 gap-4 px-6 py-4 border-b border-border/30 hover:bg-accent/20 transition-colors ${
                        featureIndex === group.features.length - 1 ? 'border-b-2 border-border/50' : ''
                      }`}
                    >
                      <div className="flex items-center text-foreground">{feature.name}</div>
                      <div className="flex items-center justify-center">
                        {feature.basic ? (
                          <CheckCircle2 className="w-6 h-6 text-primary" />
                        ) : (
                          <X className="w-6 h-6 text-muted-foreground/30" />
                        )}
                      </div>
                      <div className="flex items-center justify-center">
                        {feature.professional ? (
                          <CheckCircle2 className="w-6 h-6 text-primary" />
                        ) : (
                          <X className="w-6 h-6 text-muted-foreground/30" />
                        )}
                      </div>
                      <div className="flex items-center justify-center">
                        {feature.enterprise ? (
                          <CheckCircle2 className="w-6 h-6 text-primary" />
                        ) : (
                          <X className="w-6 h-6 text-muted-foreground/30" />
                        )}
                      </div>
                    </div>
                  ))}
                </motion.div>
              ))}

              {/* CTA Footer */}
              <div className="grid grid-cols-4 gap-4 p-6 bg-gradient-to-r from-primary/5 to-secondary/5">
                <div></div>
                {plans.map((plan, index) => (
                  <div key={index} className="text-center">
                    <Link
                      to="/contact-sales"
                      className={`block px-6 py-3 rounded-xl font-semibold transition-all ${
                        index === 1
                          ? 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-xl shadow-lg'
                          : 'bg-card border-2 border-border text-foreground hover:border-primary/50 hover:shadow-lg'
                      }`}
                    >
                      Get Pricing
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Cards */}
          <div className="lg:hidden space-y-8">
            {plans.map((plan, planIndex) => (
              <motion.div
                key={planIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card/70 backdrop-blur-xl border-2 border-border/50 rounded-3xl shadow-xl overflow-hidden"
              >
                {/* Plan Header */}
                <div className={`p-6 ${planIndex === 1 ? 'bg-gradient-to-r from-primary/20 to-secondary/20' : 'bg-accent/20'}`}>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan}</h3>
                  {planIndex === 1 && (
                    <span className="inline-block px-3 py-1 bg-primary text-white text-xs rounded-full">
                      Most Popular
                    </span>
                  )}
                </div>

                {/* Features by Category */}
                <div className="p-6 space-y-6">
                  {featureGroups.map((group, groupIndex) => (
                    <div key={groupIndex}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center`}>
                          <group.icon className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="font-bold text-foreground">{group.category}</h4>
                      </div>
                      <div className="space-y-3 ml-13">
                        {group.features.map((feature, featureIndex) => {
                          const hasFeature = planIndex === 0 ? feature.basic : planIndex === 1 ? feature.professional : feature.enterprise;
                          return (
                            <div key={featureIndex} className="flex items-start gap-3">
                              {hasFeature ? (
                                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              ) : (
                                <X className="w-5 h-5 text-muted-foreground/30 flex-shrink-0 mt-0.5" />
                              )}
                              <span className={hasFeature ? 'text-foreground' : 'text-muted-foreground/50'}>{feature.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="p-6 border-t border-border/50">
                  <Link
                    to="/contact-sales"
                    className={`block w-full px-6 py-4 rounded-xl font-semibold text-center transition-all ${
                      planIndex === 1
                        ? 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-xl shadow-lg'
                        : 'bg-card border-2 border-border text-foreground hover:border-primary/50 hover:shadow-lg'
                    }`}
                  >
                    Get Pricing
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Showcase with Safari Images */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                Built for Tanzania
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Perfect for Safari Lodges, Hotels & Resorts
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you manage a luxury safari lodge in Serengeti, a beach resort in Zanzibar, or a boutique hotel in Arusha, Mimi App adapts to your unique needs.
              </p>

              <div className="space-y-4">
                {[
                  'Manage safari bookings and excursions',
                  'Handle seasonal pricing automatically',
                  'Sync with international OTAs',
                  'Mobile access from remote locations',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Tanzania Safari Lodge"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>

          {/* Second Row - Reversed */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1568127623945-a2a9a0a83f3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Tanzania Wildlife Safari"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-6">
                Complete Solution
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                One Platform for All Your Operations
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Stop juggling multiple tools and spreadsheets. Mimi App brings everything together in one intuitive dashboard designed for hospitality professionals.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Properties', value: '500+' },
                  { label: 'Rooms Managed', value: '15,000+' },
                  { label: 'Daily Bookings', value: '2,000+' },
                  { label: 'Happy Guests', value: '50,000+' },
                ].map((stat, index) => (
                  <div key={index} className="p-4 rounded-xl bg-accent/20 dark:bg-card/20 border border-border/50">
                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1549366021-9f761d450615?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Tanzania Sunset Safari"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-secondary/95" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Property Management?
            </h2>

            <p className="text-xl text-white/90 mb-8">
              Join 500+ properties across Tanzania already using Mimi App to streamline operations and delight guests.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book-demo"
                className="px-8 py-4 bg-white text-primary rounded-xl hover:bg-white/90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group font-semibold"
              >
                Book a Free Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact-sales"
                className="px-8 py-4 bg-white/10 backdrop-blur-xl text-white border-2 border-white/50 rounded-xl hover:bg-white/20 transition-all flex items-center justify-center gap-2 font-semibold"
              >
                Get Pricing
              </Link>
            </div>

            <p className="mt-6 text-white/80 text-sm">
              10-day free trial • Custom pricing • No credit card required
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
