import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  User, Mail, Phone, Building2, MapPin, CreditCard, CheckCircle2,
  X, Edit2, Send, FileText, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import logoDark from '../../imports/MimiApp_TextWhite.png';

const packages = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'Perfect for small guest houses',
    features: [
      'Up to 10 rooms',
      'Online booking system',
      'Guest management',
      'Basic reports',
      'Email support',
      'Mobile access',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Ideal for hotels and lodges',
    features: [
      'Up to 50 rooms',
      'Multi-property management',
      'Advanced analytics',
      'Payment tracking (M-Pesa)',
      'Housekeeping management',
      'Priority support',
    ],
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large resorts',
    features: [
      'Unlimited rooms & properties',
      'White-label solution',
      'API access',
      'Custom integrations',
      'Dedicated account manager',
      '24/7 phone support',
    ],
  },
];

export function Payment() {
  const [selectedPackage, setSelectedPackage] = useState('professional');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [tempEmail, setTempEmail] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    propertyName: '',
    propertyType: '',
    numberOfRooms: '',
    location: '',
    address: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Payment form submitted:', { ...formData, selectedPackage });
    setTempEmail(formData.email);
    setShowConfirmation(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleResendInvoice = () => {
    console.log('Resending invoice to:', tempEmail);
    setFormData({ ...formData, email: tempEmail });
    setIsEditingEmail(false);
    alert(`Invoice resent to ${tempEmail}`);
  };

  const selectedPlan = packages.find(pkg => pkg.id === selectedPackage);

  return (
    <div className="min-h-screen bg-background">
<Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 bg-gradient-to-br from-card via-background to-card/50 overflow-hidden">
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
              Get Started
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Request Your Custom Pricing Quote
            </h1>

            <p className="text-lg text-muted-foreground mb-4">
              Fill in your property details below and our sales team will send you a personalized pricing quote tailored to your needs.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-foreground">10-day free trial included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-foreground">Custom pricing quote</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-foreground">Setup support included</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Side - Package Selection */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24">
                <h2 className="text-2xl font-bold text-foreground mb-6">Select Your Package</h2>

                <div className="space-y-4">
                  {packages.map((pkg) => (
                    <button
                      key={pkg.id}
                      onClick={() => setSelectedPackage(pkg.id)}
                      className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 ${
                        selectedPackage === pkg.id
                          ? 'border-primary/50 bg-primary/10 backdrop-blur-xl shadow-xl'
                          : 'border-border/50 bg-card/70 backdrop-blur-xl hover:border-primary/30 shadow-lg'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{pkg.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{pkg.description}</p>
                        </div>
                        {pkg.popular && (
                          <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                            Popular
                          </span>
                        )}
                      </div>

                      <div className="mb-4 py-3">
                        <span className="text-lg font-semibold text-primary">Pricing on request</span>
                      </div>

                      <ul className="space-y-2">
                        {pkg.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {pkg.features.length > 3 && (
                          <li className="text-sm text-primary">
                            +{pkg.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </button>
                  ))}
                </div>

                <div className="mt-6 p-6 rounded-xl border border-border/50 bg-card/70 backdrop-blur-xl shadow-lg">
                  <h3 className="font-semibold text-foreground mb-3">What happens next?</h3>
                  <ol className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">1</span>
                      <span>Submit your property details</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">2</span>
                      <span>Our team reviews and prepares custom pricing</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">3</span>
                      <span>Receive personalized quote & invoice via email</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">4</span>
                      <span>Complete payment & get instant access with your 10-day trial</span>
                    </li>
                  </ol>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Customer Details Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="bg-card/80 backdrop-blur-2xl border border-border/50 rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Your Details
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Personal Information</h3>

                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="block w-full pl-11 pr-4 py-3 border border-border rounded-lg bg-input-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                          placeholder="John Mwangi"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="block w-full pl-11 pr-4 py-3 border border-border rounded-lg bg-input-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                            placeholder="john@example.com"
                          />
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">Invoice will be sent to this email</p>
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Phone className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="block w-full pl-11 pr-4 py-3 border border-border rounded-lg bg-input-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                            placeholder="+255 XXX XXX XXX"
                          />
                        </div>
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
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Building2 className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <input
                          type="text"
                          id="propertyName"
                          name="propertyName"
                          value={formData.propertyName}
                          onChange={handleChange}
                          required
                          className="block w-full pl-11 pr-4 py-3 border border-border rounded-lg bg-input-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                          placeholder="Your hotel or property name"
                        />
                      </div>
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
                          className="block w-full px-4 py-3 border border-border rounded-lg bg-input-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                        >
                          <option value="">Select type</option>
                          <option value="hotel">Hotel</option>
                          <option value="lodge">Lodge</option>
                          <option value="resort">Resort</option>
                          <option value="guesthouse">Guest House</option>
                          <option value="safari-camp">Safari Camp</option>
                          <option value="apartment">Apartment/Airbnb</option>
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
                          className="block w-full px-4 py-3 border border-border rounded-lg bg-input-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                          placeholder="10"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-foreground mb-2">
                        Location (City, Region) *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <MapPin className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          required
                          className="block w-full pl-11 pr-4 py-3 border border-border rounded-lg bg-input-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                          placeholder="Dar es Salaam, Tanzania"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-foreground mb-2">
                        Physical Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 border border-border rounded-lg bg-input-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                        placeholder="Street address (optional)"
                      />
                    </div>
                  </div>

                  {/* Order Summary */}
                  <div className="pt-4 border-t border-border">
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">Order Summary</h3>

                    <div className="p-6 rounded-xl bg-accent/30 dark:bg-card/50 backdrop-blur-xl border border-border/50 shadow-lg">
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-semibold text-foreground">{selectedPlan?.name} Plan</p>
                          <span className="text-lg font-semibold text-primary">Pricing on request</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{selectedPlan?.description}</p>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <div className="flex items-center gap-2 text-sm text-primary">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>10-day free trial included</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-2xl transition-all shadow-lg font-medium group"
                  >
                    <Send className="w-5 h-5" />
                    Request Custom Pricing Quote
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you agree to be contacted by our sales team with a personalized quote. No payment will be charged during your 10-day trial period.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showConfirmation && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-md bg-card/90 backdrop-blur-2xl rounded-2xl shadow-2xl border border-border/50 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowConfirmation(false)}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-accent transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8">
                {/* Success Icon */}
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground text-center mb-4">
                  Quote Request Submitted Successfully!
                </h3>

                {/* Message */}
                <p className="text-muted-foreground text-center mb-6">
                  Our sales team will prepare your custom pricing quote and send it to:
                </p>

                {/* Email Display/Edit */}
                {!isEditingEmail ? (
                  <div className="p-4 rounded-xl bg-accent/30 dark:bg-card/30 border border-border mb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-primary" />
                        <span className="font-semibold text-foreground">{tempEmail}</span>
                      </div>
                      <button
                        onClick={() => setIsEditingEmail(true)}
                        className="p-2 rounded-lg hover:bg-accent transition-colors"
                      >
                        <Edit2 className="w-4 h-4 text-primary" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 mb-6">
                    <div>
                      <label htmlFor="tempEmail" className="block text-sm font-medium text-foreground mb-2">
                        Correct Email Address
                      </label>
                      <input
                        type="email"
                        id="tempEmail"
                        value={tempEmail}
                        onChange={(e) => setTempEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setIsEditingEmail(false)}
                        className="flex-1 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleResendInvoice}
                        className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        Resend
                      </button>
                    </div>
                  </div>
                )}

                {/* Instructions */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p>Our sales team will review your property details and prepare a custom pricing quote tailored to your specific needs.</p>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p>You'll receive your personalized quote and invoice within 24 hours. After payment, your account will be activated with a 10-day free trial.</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3">
                  <Link
                    to="/"
                    onClick={() => setShowConfirmation(false)}
                    className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all text-center font-medium"
                  >
                    Return to Home
                  </Link>
                  <button
                    onClick={() => setShowConfirmation(false)}
                    className="w-full px-6 py-3 border border-border rounded-lg hover:bg-accent transition-all text-center"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
