import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import logoDark from '../../imports/MimiApp_TextWhite.png';

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
    alert('Login functionality will be implemented with backend integration!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-card via-background to-card/50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-subtle" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }} />

      <div className="max-w-6xl w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Branding & Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >
            <Link to="/" className="mb-8 inline-block">
              <img
                src={logoDark}
                alt="Mimi App"
                className="h-12 w-auto"
              />
            </Link>

            <h1 className="text-4xl font-bold text-foreground mb-4">
              Welcome Back!
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Access your property management dashboard and continue delivering exceptional hospitality experiences.
            </p>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1731344693980-f4146ae3bed2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx0YW56YW5pYSUyMHNhZmFyaSUyMGxvZGdlJTIwaG90ZWwlMjByZXNvcnR8ZW58MXx8fHwxNzc4NjU3MTY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Tanzania hospitality"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Right Side - Login Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="bg-card/80 backdrop-blur-2xl border border-border/50 rounded-2xl shadow-2xl p-8 sm:p-10">
              {/* Mobile Logo */}
              <Link to="/" className="lg:hidden mb-6 inline-block">
                <img
                  src={logoDark}
                  alt="Mimi App"
                  className="h-10 w-auto"
                />
              </Link>

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Sign In
                </h2>
                <p className="text-muted-foreground">
                  Enter your credentials to access your account
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full pl-11 pr-4 py-3 border border-border rounded-lg bg-input-background text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="current-password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="block w-full pl-11 pr-12 py-3 border border-border rounded-lg bg-input-background text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                      ) : (
                        <Eye className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember"
                      name="remember"
                      type="checkbox"
                      checked={formData.remember}
                      onChange={handleChange}
                      className="h-4 w-4 text-primary focus:ring-primary border-border rounded"
                    />
                    <label htmlFor="remember" className="ml-2 block text-sm text-foreground">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <Link to="/forgot-password" className="font-medium text-primary hover:text-primary/80 transition-colors">
                      Forgot password?
                    </Link>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 sm:px-8 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl font-medium group text-sm sm:text-base"
                >
                  Sign In
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              {/* Divider */}
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-card text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>

                {/* Social Login Buttons */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="w-full flex items-center justify-center px-4 py-3 border border-border rounded-lg bg-background hover:bg-accent transition-all"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="ml-2">Google</span>
                  </button>

                  <button
                    type="button"
                    className="w-full flex items-center justify-center px-4 py-3 border border-border rounded-lg bg-background hover:bg-accent transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="ml-2">Facebook</span>
                  </button>
                </div>
              </div>

              {/* Sign Up Link */}
              <p className="mt-8 text-center text-sm text-muted-foreground">
                Don't have an account?{' '}
                <Link to="/sign-up" className="font-medium text-primary hover:text-primary/80 transition-colors">
                  Sign up for free
                </Link>
              </p>
            </div>

            {/* Back to Home Link */}
            <div className="mt-6 text-center">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                ← Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
