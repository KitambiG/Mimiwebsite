import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail, Phone, MapPin, Clock, CheckCircle2, ArrowRight,
  Building2, Users, DollarSign, Calendar, MessageSquare
} from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import logoDark from '../../imports/MimiApp_TextWhite.png';

export function ContactSales() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    propertyType: '',
    numberOfProperties: '',
    numberOfRooms: '',
    location: '',
    currentSolution: '',
    budget: '',
    timeline: '',
    interestedIn: [] as string[],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact sales form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        companyName: '',
        propertyType: '',
        numberOfProperties: '',
        numberOfRooms: '',
        location: '',
        currentSolution: '',
        budget: '',
        timeline: '',
        interestedIn: [],
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (value: string) => {
    const updatedInterests = formData.interestedIn.includes(value)
      ? formData.interestedIn.filter(item => item !== value)
      : [...formData.interestedIn, value];
    setFormData({ ...formData, interestedIn: updatedInterests });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+255 742 434 540',
      link: 'tel:+255742434540',
    },
    {
      icon: MessageSquare,
      label: 'WhatsApp',
      value: '+255 742 434 540',
      link: 'https://wa.me/255742434540',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'sales@mimiapp.co.tz',
      link: 'mailto:sales@mimiapp.co.tz',
    },
    {
      icon: MapPin,
      label: 'Office',
      value: 'Dar es Salaam, Tanzania',
      link: '#',
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Mon - Sat: 8 AM - 6 PM EAT',
      link: '#',
    },
  ];

  const reasons = [
    'Custom pricing for large operations',
    'Dedicated account manager',
    'Priority support & training',
    'Custom feature development',
    'API access & integrations',
    'Volume discounts available',
  ];

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
              Contact Sales
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Let's Discuss Your Property Management Needs
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Our sales team is ready to help you find the perfect solution for your hospitality business. Get personalized pricing and recommendations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-card/80 backdrop-blur-2xl border border-border/50 rounded-2xl shadow-xl p-8">
                {!submitted ? (
                  <>
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                      Get in Touch with Our Sales Team
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Information */}
                      <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Personal Information</h3>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                              First Name *
                            </label>
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                              placeholder="John"
                            />
                          </div>

                          <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                              Last Name *
                            </label>
                            <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                              placeholder="Mwangi"
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                              Business Email *
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                              placeholder="you@company.com"
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

                      {/* Company Information */}
                      <div className="space-y-4 pt-4 border-t border-border">
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Company Information</h3>

                        <div>
                          <label htmlFor="companyName" className="block text-sm font-medium text-foreground mb-2">
                            Company/Property Name *
                          </label>
                          <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                            placeholder="Your company or property name"
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
                              <option value="resort">Resort</option>
                              <option value="guesthouse">Guest House</option>
                              <option value="safari-camp">Safari Camp</option>
                              <option value="apartment">Apartment/Airbnb</option>
                              <option value="management">Property Management Company</option>
                              <option value="other">Other</option>
                            </select>
                          </div>

                          <div>
                            <label htmlFor="numberOfProperties" className="block text-sm font-medium text-foreground mb-2">
                              Number of Properties *
                            </label>
                            <input
                              type="number"
                              id="numberOfProperties"
                              name="numberOfProperties"
                              value={formData.numberOfProperties}
                              onChange={handleChange}
                              required
                              min="1"
                              className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                              placeholder="1"
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="numberOfRooms" className="block text-sm font-medium text-foreground mb-2">
                              Total Number of Rooms *
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
                              placeholder="50"
                            />
                          </div>

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
                              placeholder="City, Region"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="space-y-4 pt-4 border-t border-border">
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Project Details</h3>

                        <div>
                          <label htmlFor="currentSolution" className="block text-sm font-medium text-foreground mb-2">
                            Current Solution
                          </label>
                          <input
                            type="text"
                            id="currentSolution"
                            name="currentSolution"
                            value={formData.currentSolution}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                            placeholder="e.g., Manual/Excel, Other PMS"
                          />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                              Monthly Budget Range
                            </label>
                            <select
                              id="budget"
                              name="budget"
                              value={formData.budget}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                            >
                              <option value="">Select range</option>
                              <option value="under-200k">Under 200,000 TZS</option>
                              <option value="200k-500k">200,000 - 500,000 TZS</option>
                              <option value="500k-1m">500,000 - 1,000,000 TZS</option>
                              <option value="1m-plus">1,000,000+ TZS</option>
                              <option value="flexible">Flexible</option>
                            </select>
                          </div>

                          <div>
                            <label htmlFor="timeline" className="block text-sm font-medium text-foreground mb-2">
                              Implementation Timeline *
                            </label>
                            <select
                              id="timeline"
                              name="timeline"
                              value={formData.timeline}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                            >
                              <option value="">Select timeline</option>
                              <option value="immediate">Immediate (1-2 weeks)</option>
                              <option value="1month">Within 1 month</option>
                              <option value="3months">Within 3 months</option>
                              <option value="6months">Within 6 months</option>
                              <option value="exploring">Just exploring</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-3">
                            What are you interested in?
                          </label>
                          <div className="space-y-2">
                            {['Enterprise Plan', 'Custom Integrations', 'White-Label Solution', 'API Access', 'Multi-Property Management', 'Staff Training'].map((option) => (
                              <label key={option} className="flex items-center gap-3 cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={formData.interestedIn.includes(option)}
                                  onChange={() => handleCheckboxChange(option)}
                                  className="w-4 h-4 text-primary focus:ring-primary border-border rounded"
                                />
                                <span className="text-foreground text-sm">{option}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Message */}
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
                          placeholder="Tell us about your specific needs, challenges, or questions..."
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl font-medium group"
                      >
                        Submit Request
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>

                      <p className="text-xs text-muted-foreground text-center">
                        By submitting this form, you agree to be contacted by our sales team. We respect your privacy and will never share your information.
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
                      Request Received!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for contacting our sales team. We'll review your information and get back to you within 24 hours.
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

            {/* Right Side - Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Why Contact Sales?
                </h2>
                <div className="space-y-3">
                  {reasons.map((reason, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground mb-4">Get in Touch</h3>
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-card/70 backdrop-blur-xl hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <info.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxob3RlbCUyMHJlY2VwdGlvbiUyMGRlc2slMjBob3NwaXRhbGl0eSUyMG1hbmFnZW1lbnQlMjB0YWJsZXR8ZW58MXx8fHwxNzc4NjU3MTY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Contact Sales"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
