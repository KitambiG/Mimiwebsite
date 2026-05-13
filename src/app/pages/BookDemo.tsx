import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Building2, Users, Phone, Mail, MapPin, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Header } from '../components/Header';
import logoDark from '../../imports/MimiApp_TextWhite.png';

export function BookDemo() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    propertyName: '',
    propertyType: '',
    numberOfRooms: '',
    location: '',
    currentSystem: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo booking submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        propertyName: '',
        propertyType: '',
        numberOfRooms: '',
        location: '',
        currentSystem: '',
        preferredDate: '',
        preferredTime: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const benefits = [
    'See Mimi App in action with live demonstration',
    'Learn how to streamline your property operations',
    'Discover features tailored for Tanzania hospitality',
    'Get answers to all your questions',
    'Receive personalized setup recommendations',
    'No commitment required',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-card via-background to-card/50">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-subtle" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }} />

<Header />

      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:sticky lg:top-8"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                Book Your Demo
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                See Mimi App in Action
              </h1>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Schedule a personalized demo with our team and discover how Mimi App can transform your property management operations. Perfect for hotels, lodges, guest houses, and safari camps across Tanzania.
              </p>

              {/* Benefits List */}
              <div className="space-y-4 mb-8">
                <h3 className="font-semibold text-foreground mb-4">What to expect:</h3>
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border mt-8">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759038085950-1234ca8f5fed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlY2VwdGlvbiUyMGRlc2slMjBob3NwaXRhbGl0eSUyMG1hbmFnZW1lbnQlMjB0YWJsZXR8ZW58MXx8fHwxNzc4NjU3MTY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Mimi App Demo"
                  className="w-full h-auto"
                />
              </div>

              {/* Contact Info */}
              <div className="mt-8 p-6 rounded-xl border border-border/50 bg-card/70 backdrop-blur-xl shadow-lg">
                <h3 className="font-semibold text-foreground mb-4">Need immediate assistance?</h3>
                <div className="space-y-3">
                  <a href="tel:+255742434540" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="w-5 h-5" />
                    <span>+255 742 434 540</span>
                  </a>
                  <a href="https://wa.me/255742434540" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="w-5 h-5" />
                    <span>WhatsApp: +255 742 434 540</span>
                  </a>
                  <a href="mailto:sales@mimiapp.co.tz" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="w-5 h-5" />
                    <span>sales@mimiapp.co.tz</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-card/80 backdrop-blur-2xl border border-border/50 rounded-2xl shadow-2xl p-8">
                {!submitted ? (
                  <>
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                      Schedule Your Free Demo
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Information */}
                      <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Personal Information</h3>

                        <div>
                          <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                            placeholder="Your full name"
                          />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                              placeholder="you@example.com"
                            />
                          </div>

                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                              placeholder="+255 XXX XXX XXX"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Property Information */}
                      <div className="space-y-4 pt-4 border-t border-border">
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Property Information</h3>

                        <div>
                          <label htmlFor="propertyName" className="block text-sm font-medium text-foreground mb-2">
                            Property Name *
                          </label>
                          <input
                            type="text"
                            id="propertyName"
                            name="propertyName"
                            value={formData.propertyName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                            placeholder="Your hotel/lodge name"
                          />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="propertyType" className="block text-sm font-medium text-foreground mb-2">
                              Property Type *
                            </label>
                            <select
                              id="propertyType"
                              name="propertyType"
                              value={formData.propertyType}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                            >
                              <option value="">Select type</option>
                              <option value="hotel">Hotel</option>
                              <option value="lodge">Lodge</option>
                              <option value="guesthouse">Guest House</option>
                              <option value="resort">Resort</option>
                              <option value="safari-camp">Safari Camp</option>
                              <option value="apartment">Apartment</option>
                              <option value="other">Other</option>
                            </select>
                          </div>

                          <div>
                            <label htmlFor="numberOfRooms" className="block text-sm font-medium text-foreground mb-2">
                              Number of Rooms *
                            </label>
                            <input
                              type="number"
                              id="numberOfRooms"
                              name="numberOfRooms"
                              value={formData.numberOfRooms}
                              onChange={handleChange}
                              required
                              min="1"
                              className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                              placeholder="10"
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="location" className="block text-sm font-medium text-foreground mb-2">
                              Location *
                            </label>
                            <input
                              type="text"
                              id="location"
                              name="location"
                              value={formData.location}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                              placeholder="e.g., Dar es Salaam"
                            />
                          </div>

                          <div>
                            <label htmlFor="currentSystem" className="block text-sm font-medium text-foreground mb-2">
                              Current System
                            </label>
                            <input
                              type="text"
                              id="currentSystem"
                              name="currentSystem"
                              value={formData.currentSystem}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                              placeholder="Manual / Excel / Other"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Demo Scheduling */}
                      <div className="space-y-4 pt-4 border-t border-border">
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Preferred Demo Time</h3>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="preferredDate" className="block text-sm font-medium text-foreground mb-2">
                              Preferred Date *
                            </label>
                            <input
                              type="date"
                              id="preferredDate"
                              name="preferredDate"
                              value={formData.preferredDate}
                              onChange={handleChange}
                              required
                              min={new Date().toISOString().split('T')[0]}
                              className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                            />
                          </div>

                          <div>
                            <label htmlFor="preferredTime" className="block text-sm font-medium text-foreground mb-2">
                              Preferred Time *
                            </label>
                            <select
                              id="preferredTime"
                              name="preferredTime"
                              value={formData.preferredTime}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                            >
                              <option value="">Select time</option>
                              <option value="09:00">9:00 AM</option>
                              <option value="10:00">10:00 AM</option>
                              <option value="11:00">11:00 AM</option>
                              <option value="14:00">2:00 PM</option>
                              <option value="15:00">3:00 PM</option>
                              <option value="16:00">4:00 PM</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Additional Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Additional Information
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                          placeholder="Tell us about your specific needs or questions..."
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl font-medium group"
                      >
                        Schedule Demo
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>

                      <p className="text-xs text-muted-foreground text-center">
                        By submitting this form, you agree to receive communications from Mimi App. We respect your privacy.
                      </p>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Demo Booked Successfully!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for scheduling a demo with Mimi App. Our team will contact you shortly to confirm your appointment and send you the meeting details.
                    </p>
                    <Link
                      to="/"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all"
                    >
                      Return to Home
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
