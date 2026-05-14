import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { Mail, CheckCircle2, X, ArrowLeft, Lock, Sparkles } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedEmail(email);
    setShowSuccessModal(true);
  };

  const closeModal = () => {
    setShowSuccessModal(false);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card/20 to-background relative overflow-hidden">
      {/* Animated Background Orbs */}
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
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md w-full"
        >
          {/* Glass Morphism Card */}
          <div className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl p-8 shadow-2xl">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
              className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6"
            >
              <Lock className="w-10 h-10 text-white" />
            </motion.div>

            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-3">
                Forgot Password?
              </h1>
              <p className="text-muted-foreground">
                No worries! Enter your email address and we'll send you instructions to reset your password.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-11 pr-4 py-3 border border-border rounded-lg bg-background/50 text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all text-sm sm:text-base"
              >
                Send Reset Instructions
              </motion.button>
            </form>

            {/* Back to Login */}
            <div className="mt-6 pt-6 border-t border-border">
              <Link
                to="/login"
                className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Back to Login</span>
              </Link>
            </div>

            {/* Help Text */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Need help?{' '}
                <Link to="/contact-sales" className="text-primary hover:underline">
                  Contact Support
                </Link>
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-center"
          >
            <p className="text-sm text-muted-foreground">
              Don't have an account?{' '}
              <Link to="/sign-up" className="text-primary font-semibold hover:underline">
                Sign up for free
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Success Modal - Glass Morphism Popup */}
      <AnimatePresence>
        {showSuccessModal && (
          <>
            {/* Backdrop with Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
            />

            {/* Modal */}
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-card/95 backdrop-blur-2xl border border-border/50 rounded-3xl p-8 max-w-md w-full shadow-2xl relative"
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-accent/80 hover:bg-accent transition-colors flex items-center justify-center"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>

                {/* Success Icon with Animation */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                  className="relative mx-auto mb-6 w-20 h-20"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <motion.div
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary"
                  />
                </motion.div>

                {/* Content */}
                <div className="text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Check Your Inbox!
                    </h3>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-4 mb-6"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-left flex-1">
                        <p className="text-sm font-medium text-foreground mb-1">
                          Reset email sent to:
                        </p>
                        <p className="text-sm text-primary font-semibold break-all">
                          {submittedEmail}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-3 text-left mb-6"
                  >
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">What to do next:</strong>
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Check your email inbox (and spam folder)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Click the password reset link within 24 hours</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Create a new secure password for your account</span>
                      </li>
                    </ul>
                  </motion.div>

                  {/* Info Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-accent/50 border border-border rounded-xl p-4 mb-6 text-left"
                  >
                    <div className="flex items-start gap-2">
                      <Sparkles className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground mb-1">
                          Didn't receive the email?
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Wait a few minutes and check your spam folder. Still nothing?{' '}
                          <Link to="/contact-sales" className="text-primary hover:underline" onClick={closeModal}>
                            Contact support
                          </Link>
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Actions */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex gap-3"
                  >
                    <Link
                      to="/login"
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold hover:shadow-lg transition-all text-center"
                      onClick={closeModal}
                    >
                      Go to Login
                    </Link>
                    <button
                      onClick={closeModal}
                      className="flex-1 px-6 py-3 border border-border bg-accent/80 hover:bg-accent text-foreground rounded-xl font-semibold transition-all"
                    >
                      Close
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
