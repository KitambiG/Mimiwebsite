import { motion } from 'motion/react';
import { Check, Sparkles, ArrowRight, HelpCircle } from 'lucide-react';
import { Link } from 'react-router';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import logoDark from '../../imports/MimiApp_TextWhite.png';

const plans = [
  {
    name: 'Basic',
    description: 'Perfect for small guest houses and bed & breakfasts',
    features: [
      'Up to 10 rooms',
      'Online booking system',
      'Guest management',
      'Basic reports',
      'Email support',
      'Mobile access',
      '10-day free trial',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    description: 'Ideal for hotels and lodges with multiple rooms',
    features: [
      'Up to 50 rooms',
      'Multi-property management',
      'Advanced analytics',
      'Payment tracking (M-Pesa)',
      'Housekeeping management',
      'Priority support',
      'Staff roles & permissions',
      'Custom reports',
      '10-day free trial',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For large resorts and property management companies',
    features: [
      'Unlimited rooms & properties',
      'White-label solution',
      'API access',
      'Custom integrations',
      'Dedicated account manager',
      '24/7 phone support',
      'Training & onboarding',
      'Custom features',
      'Flexible terms',
    ],
    popular: false,
  },
];

const faqs = [
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept bank transfers, M-Pesa, credit cards, and mobile money. All payments are processed securely.',
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any charges.',
  },
  {
    question: 'Is there a long-term contract?',
    answer: 'No, all plans are month-to-month with no long-term commitment. You can cancel anytime without penalties.',
  },
  {
    question: 'What happens after the 10-day free trial?',
    answer: 'After your 10-day trial, you\'ll be automatically moved to your selected plan. You can cancel before the trial ends without any charges.',
  },
  {
    question: 'Do you offer discounts for annual payments?',
    answer: 'Yes! Pay annually and save up to 20%. Contact our sales team to discuss annual pricing options.',
  },
  {
    question: 'Is training included?',
    answer: 'Basic and Professional plans include online training resources. Enterprise plans include personalized onboarding and staff training.',
  },
];

export function PricingPage() {
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
              Pricing Plans
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Flexible Plans for Every Property
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Choose the perfect plan for your property. Contact our sales team to get custom pricing tailored to your specific needs.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground">10-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground">Cancel anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="px-4 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-white flex items-center gap-2 shadow-lg">
                      <Sparkles className="w-4 h-4" />
                      <span className="text-sm font-medium">Most Popular</span>
                    </div>
                  </div>
                )}

                <div
                  className={`relative h-full p-8 rounded-2xl border-2 transition-all duration-300 ${
                    plan.popular
                      ? 'border-primary/50 bg-card/80 backdrop-blur-2xl shadow-2xl scale-105'
                      : 'border-border/50 bg-card/70 backdrop-blur-xl hover:border-primary/30 hover:shadow-lg'
                  }`}
                >
                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-8">{plan.description}</p>

                  {/* CTA Button */}
                  <Link
                    to="/contact-sales"
                    className={`w-full py-3 px-4 sm:px-6 rounded-lg font-medium transition-all duration-300 mb-8 flex items-center justify-center gap-2 text-sm sm:text-base ${
                      plan.popular
                        ? 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-2xl shadow-lg'
                        : 'bg-card border-2 border-border text-foreground hover:border-primary/50 hover:shadow-lg'
                    }`}
                  >
                    Get Pricing
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  {/* Features */}
                  <div className="space-y-4">
                    <p className="text-sm font-medium text-foreground mb-4">What's included:</p>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12 p-6 rounded-xl bg-accent/30 dark:bg-card/50 backdrop-blur-xl border border-border/50 shadow-lg"
          >
            <p className="text-muted-foreground mb-4">
              Pricing is customized based on your property size, features needed, and business requirements. Contact our sales team to receive a personalized quote tailored to your needs.
            </p>
            <Link to="/contact-sales" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2">
              Get Your Custom Pricing Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 sm:py-16 md:py-20 bg-accent/20 dark:bg-card/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              FAQs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our pricing and plans
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12 p-8 rounded-xl border border-border bg-card"
          >
            <h3 className="text-xl font-bold text-foreground mb-3">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help you choose the right plan for your property
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact-sales"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2"
              >
                Contact Sales
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/sign-up"
                className="px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 border border-border transition-all inline-flex items-center justify-center gap-2"
              >
                Register Now
              </Link>
            </div>
          </motion.div>
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
              Start Your 10-Day Free Trial Today
            </h2>

            <p className="text-xl text-white/90 mb-8">
              No credit card required. Get full access to all features during your trial period.
            </p>

            <Link
              to="/get-started"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl group"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
