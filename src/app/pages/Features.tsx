import { motion } from 'motion/react';
import {
  Calendar, Users, Globe, CreditCard, BarChart3, Smartphone,
  Building2, ClipboardCheck, Shield, Bell, Wifi, Cloud,
  CheckCircle2, ArrowRight, Zap, Lock, TrendingUp
} from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import logoDark from '../../imports/MimiApp_TextWhite.png';

const featureCategories = [
  {
    title: 'Booking & Reservations',
    description: 'Streamline your booking process with powerful reservation management tools',
    icon: Calendar,
    color: 'from-primary to-primary/70',
    features: [
      {
        icon: Calendar,
        title: 'Smart Reservation System',
        description: 'Manage all bookings from one central calendar with real-time availability updates across all channels.',
      },
      {
        icon: Globe,
        title: 'Online Booking Engine',
        description: 'Accept direct bookings through your website with instant confirmations and automated email notifications.',
      },
      {
        icon: Bell,
        title: 'Automated Reminders',
        description: 'Send automatic booking confirmations, check-in reminders, and follow-up messages to guests.',
      },
      {
        icon: Wifi,
        title: 'Channel Management',
        description: 'Sync your availability across multiple booking platforms to avoid double bookings and maximize occupancy.',
      },
    ],
  },
  {
    title: 'Guest Management',
    description: 'Build lasting relationships with personalized guest experiences',
    icon: Users,
    color: 'from-secondary to-secondary/70',
    features: [
      {
        icon: Users,
        title: 'Guest Profiles',
        description: 'Store detailed guest information, preferences, and booking history for personalized service.',
      },
      {
        icon: CheckCircle2,
        title: 'Check-In / Check-Out',
        description: 'Fast and efficient check-in/check-out process with digital registration and payment processing.',
      },
      {
        icon: Bell,
        title: 'Guest Communication',
        description: 'Send automated messages, special offers, and important updates directly to guests via SMS or email.',
      },
      {
        icon: TrendingUp,
        title: 'Loyalty Programs',
        description: 'Reward repeat guests with points, discounts, and special perks to increase retention.',
      },
    ],
  },
  {
    title: 'Property Operations',
    description: 'Manage daily operations efficiently across all properties',
    icon: Building2,
    color: 'from-chart-3 to-chart-3/70',
    features: [
      {
        icon: Building2,
        title: 'Multi-Property Dashboard',
        description: 'Monitor and manage multiple properties from a single unified dashboard with real-time updates.',
      },
      {
        icon: ClipboardCheck,
        title: 'Housekeeping Management',
        description: 'Coordinate room cleaning schedules, track room status, and assign tasks to housekeeping staff.',
      },
      {
        icon: Shield,
        title: 'User Roles & Permissions',
        description: 'Set up different access levels for staff with customizable permissions for each role.',
      },
      {
        icon: Zap,
        title: 'Maintenance Tracking',
        description: 'Log and track maintenance requests, schedule repairs, and monitor property condition.',
      },
    ],
  },
  {
    title: 'Financial Management',
    description: 'Take control of your finances with comprehensive payment tracking',
    icon: CreditCard,
    color: 'from-chart-4 to-chart-4/70',
    features: [
      {
        icon: CreditCard,
        title: 'Payment Processing',
        description: 'Accept multiple payment methods including cash, credit cards, and M-Pesa mobile payments.',
      },
      {
        icon: BarChart3,
        title: 'Invoice Generation',
        description: 'Create and send professional invoices automatically with customizable templates.',
      },
      {
        icon: TrendingUp,
        title: 'Revenue Management',
        description: 'Track revenue across properties, rooms, and services with detailed financial breakdowns.',
      },
      {
        icon: CheckCircle2,
        title: 'Expense Tracking',
        description: 'Monitor operational expenses, supplier payments, and maintain complete financial records.',
      },
    ],
  },
  {
    title: 'Reports & Analytics',
    description: 'Make data-driven decisions with powerful insights',
    icon: BarChart3,
    color: 'from-chart-5 to-chart-5/70',
    features: [
      {
        icon: BarChart3,
        title: 'Occupancy Reports',
        description: 'Track occupancy rates, average daily rates, and revenue per available room in real-time.',
      },
      {
        icon: TrendingUp,
        title: 'Revenue Analytics',
        description: 'Visualize revenue trends, identify peak seasons, and optimize pricing strategies.',
      },
      {
        icon: Users,
        title: 'Guest Analytics',
        description: 'Understand guest behavior, preferences, and demographics to improve service quality.',
      },
      {
        icon: CheckCircle2,
        title: 'Custom Reports',
        description: 'Generate custom reports for any metric you need with exportable data in multiple formats.',
      },
    ],
  },
  {
    title: 'Mobile & Cloud',
    description: 'Access your system anywhere, anytime from any device',
    icon: Smartphone,
    color: 'from-primary to-secondary',
    features: [
      {
        icon: Smartphone,
        title: 'Mobile Responsive',
        description: 'Fully optimized mobile interface works perfectly on smartphones and tablets.',
      },
      {
        icon: Cloud,
        title: 'Cloud-Based',
        description: 'All your data is securely stored in the cloud with automatic backups and 99.9% uptime.',
      },
      {
        icon: Lock,
        title: 'Bank-Level Security',
        description: 'Enterprise-grade encryption protects your sensitive guest and financial data.',
      },
      {
        icon: Wifi,
        title: 'Real-Time Sync',
        description: 'Instant updates across all devices and platforms - always stay connected with your team.',
      },
    ],
  },
];

const quickBenefits = [
  'Reduce manual work by 70%',
  'Increase bookings by 40%',
  'Improve guest satisfaction',
  'Save 10+ hours per week',
  'Real-time visibility',
  'Scale effortlessly',
];

export function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
<Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-card via-background to-card/50 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              All Features
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Everything You Need to Run Your Hospitality Business
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Mimi App provides comprehensive tools designed specifically for Tanzania's tourism industry.
              From booking management to financial reporting, we've got you covered.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {quickBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="px-4 py-2 rounded-full bg-card border border-border flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Categories */}
      {featureCategories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-background' : 'bg-accent/20 dark:bg-card/20'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className={`inline-flex w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} items-center justify-center mb-6`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {category.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {category.description}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {category.features.map((feature, featureIndex) => (
                <motion.div
                  key={featureIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                  className="group p-8 rounded-2xl border border-border/50 bg-card/70 backdrop-blur-xl hover:border-primary/30 hover:shadow-2xl transition-all duration-300 shadow-lg"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Feature Showcase with Image */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 dark:from-primary/10 dark:via-background dark:to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                See It In Action
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Beautiful, Intuitive Interface Built for Hospitality
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our user-friendly dashboard makes it easy for your entire team to get started.
                No technical knowledge required - if you can use a smartphone, you can use Mimi App.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Clean, modern design optimized for speed',
                  'Intuitive navigation that makes sense',
                  'Customizable to match your workflow',
                  'Works on desktop, tablet, and mobile',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/book-demo"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl group"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 backdrop-blur-xl bg-card/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759038085950-1234ca8f5fed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlY2VwdGlvbiUyMGRlc2slMjBob3NwaXRhbGl0eSUyMG1hbmFnZW1lbnQlMjB0YWJsZXR8ZW58MXx8fHwxNzc4NjU3MTY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Mimi App Dashboard Interface"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Property Management?
            </h2>

            <p className="text-xl text-white/90 mb-8">
              Join 500+ properties across Tanzania already using Mimi App to streamline operations and delight guests.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book-demo"
                className="px-8 py-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                Book a Free Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/#pricing"
                className="px-8 py-4 bg-white/10 backdrop-blur-xl text-white border-2 border-white/50 rounded-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                View Pricing
              </Link>
            </div>

            <p className="mt-6 text-white/80 text-sm">
              30-day free trial • No credit card required • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
