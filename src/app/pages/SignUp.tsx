import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { User, Mail, Phone, Building2, CheckCircle2, X, Sparkles } from 'lucide-react';
import { Header } from '../components/Header';

export function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyName: '',
    propertyType: '',
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedEmail(formData.email);
    setShowSuccessModal(true);
  };

  const closeModal = () => {
    setShowSuccessModal(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      propertyName: '',
      propertyType: '',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card/20 to-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-primary rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [180, 90, 0],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-secondary rounded-full blur-3xl"
        />
      </div>

      <Header />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              >
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">Start Your Free Trial</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Join 500+ Properties in Tanzania
              </h1>
              <p className="text-lg text-muted-foreground">
                Create your account and get started with Mimi App today. No credit card required.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { title: 'Instant Setup', desc: 'Get your account credentials via email within minutes' },
                { title: '10-Day Free Trial', desc: 'Full access to all features, no payment required' },
                { title: 'Quick Onboarding', desc: 'Our team will help you get started' },
                { title: '24/7 Support', desc: 'We\'re here to help whenever you need us' },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card/60 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-colors shadow-lg"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-card/80 backdrop-blur-2xl border border-border/50 rounded-3xl p-8 shadow-2xl"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">Create Your Account</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <User className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full pl-11 pr-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full pl-11 pr-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full pl-11 pr-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                    placeholder="+255 XXX XXX XXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="propertyName" className="block text-sm font-medium text-foreground mb-2">
                  Property Name *
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <Building2 className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input
                    id="propertyName"
                    name="propertyName"
                    type="text"
                    required
                    value={formData.propertyName}
                    onChange={handleChange}
                    className="block w-full pl-11 pr-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                    placeholder="Your Hotel or Lodge Name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="propertyType" className="block text-sm font-medium text-foreground mb-2">
                  Property Type *
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  required
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                >
                  <option value="">Select property type</option>
                  <option value="hotel">Hotel</option>
                  <option value="lodge">Lodge</option>
                  <option value="safari-camp">Safari Camp</option>
                  <option value="resort">Resort</option>
                  <option value="guesthouse">Guest House</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all text-sm sm:text-base"
              >
                Create Account
              </motion.button>

              <p className="text-sm text-muted-foreground text-center">
                By signing up, you agree to our{' '}
                <Link to="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </p>

              <div className="mt-6 pt-6 border-t border-border text-center space-y-3">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{' '}
                  <Link to="/login" className="text-primary font-semibold hover:underline">
                    Sign in
                  </Link>
                </p>
                <p className="text-sm text-muted-foreground">
                  <Link to="/forgot-password" className="text-muted-foreground hover:text-primary transition-colors">
                    Forgot your password?
                  </Link>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-card/90 backdrop-blur-2xl border border-border/50 rounded-3xl p-8 max-w-md w-full shadow-2xl relative"
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-accent hover:bg-accent/80 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>

                {/* Success Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </motion.div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Account Created Successfully!
                  </h3>

                  <div className="bg-accent/50 border border-border rounded-xl p-4 mb-6 text-left">
                    <p className="text-sm text-muted-foreground mb-2">
                      We've sent your login details to:
                    </p>
                    <p className="text-foreground font-semibold break-all">{submittedEmail}</p>
                  </div>

                  <div className="space-y-3 text-left mb-6">
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">What's next?</strong>
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Check your email for login instructions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Follow the setup guide to configure your property</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Start your 10-day free trial immediately</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 mb-6">
                    <p className="text-sm text-foreground mb-2">
                      <strong>Need Help?</strong>
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      Our support team is ready to assist you with setup and onboarding.
                    </p>
                    <a
                      href="mailto:sales@mimiapp.co.tz"
                      className="text-primary hover:underline text-sm font-semibold"
                    >
                      sales@mimiapp.co.tz
                    </a>
                  </div>

                  <div className="flex gap-3">
                    <Link
                      to="/login"
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold hover:shadow-lg transition-all text-center"
                      onClick={closeModal}
                    >
                      Go to Login
                    </Link>
                    <button
                      onClick={closeModal}
                      className="flex-1 px-6 py-3 border border-border bg-accent hover:bg-accent/80 text-foreground rounded-xl font-semibold transition-all"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
