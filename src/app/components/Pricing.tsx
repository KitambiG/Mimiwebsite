import { motion } from 'motion/react';
import { Check, Sparkles } from 'lucide-react';
import { Link } from 'react-router';

const plans = [
  {
    name: 'Basic',
    price: '200,000',
    period: '/month',
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
    price: '450,000',
    period: '/month',
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
    price: 'Custom',
    period: '',
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

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-background to-accent/30 dark:from-background dark:to-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              Pricing Plans
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Simple, Transparent Pricing
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Choose the plan that fits your property size and needs. All prices in Tanzanian Shillings.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                    ? 'border-primary bg-card shadow-xl scale-105'
                    : 'border-border bg-card hover:border-primary/30 hover:shadow-lg'
                }`}
              >
                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-muted-foreground">TZS</span>
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                {/* CTA Button */}
                {plan.name === 'Enterprise' ? (
                  <Link
                    to="/contact-sales"
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 mb-8 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl'
                        : 'bg-accent text-accent-foreground hover:bg-accent/80 border border-border'
                    }`}
                  >
                    Contact Sales
                  </Link>
                ) : (
                  <Link
                    to="/get-started"
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 mb-8 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl'
                        : 'bg-accent text-accent-foreground hover:bg-accent/80 border border-border'
                    }`}
                  >
                    Get Started
                  </Link>
                )}

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
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            All plans include 10-day free trial • No credit card required • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
