import { motion } from 'motion/react';
import { Twitter, Linkedin, Facebook, Instagram, Mail, Phone, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router';
import logoWhite from '../../imports/MimiApp_TextWhite.png';

const footerLinks = {
  Product: [
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
  ],
  Company: [
    { name: 'About Us', path: '/about' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
  { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
  { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
  { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' },
];

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-primary rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [180, 90, 0],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-secondary rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand Column - Spans more space */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <Link to="/" className="inline-block mb-6 group">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={logoWhite}
                alt="Mimi App"
                className="h-12 w-auto"
              />
            </Link>

            <p className="text-gray-400 mb-8 text-lg leading-relaxed max-w-md">
              Smart Property Management System for Tanzania's tourism and hospitality industry.
              <span className="block mt-2 text-primary font-semibold">Simplify operations, increase bookings, and delight guests.</span>
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-3 mb-8">
              <motion.a
                href="tel:+255742434540"
                whileHover={{ scale: 1.02, x: 4 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Call Us</p>
                  <p className="text-white font-medium">+255 742 434 540</p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:info@mimiapp.co.tz"
                whileHover={{ scale: 1.02, x: 4 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-secondary/50 hover:bg-white/10 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Email Us</p>
                  <p className="text-white font-medium">info@mimiapp.co.tz</p>
                </div>
              </motion.a>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Office Location</p>
                  <p className="text-white font-medium">Karatu, Arusha 🇹🇿</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links - Redesigned */}
            <div>
              <p className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Connect With Us
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all group ${social.color}`}
                  >
                    <social.icon className="w-5 h-5 relative z-10" />
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
                  {category}
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '60%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  />
                </h3>
                <ul className="space-y-4">
                  {links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: linkIndex * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                      >
                        <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                        <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Get Started
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '70%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </h3>

            <p className="text-gray-400 mb-6 text-sm">
              Ready to transform your property management? Start your free trial today.
            </p>

            <Link to="/book-demo">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative flex items-center justify-center gap-2">
                  Book a Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </Link>

            <Link to="/get-started">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-3 px-6 py-4 bg-white/5 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-white/30 transition-all"
              >
                Start Free Trial
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Divider with gradient */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"
        />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © 2026 <span className="text-white font-semibold">Mimi App</span> by{' '}
              <span className="text-primary font-semibold">Insync Technologies Company Limited</span>
            </p>
            <p className="text-gray-500 text-xs mt-1">
              All rights reserved. Made with <span className="text-red-500">❤️</span> in Tanzania 🇹🇿
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-sm text-gray-400 hover:text-primary transition-colors relative group"
            >
              Privacy
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all" />
            </Link>
            <Link
              to="/terms"
              className="text-sm text-gray-400 hover:text-primary transition-colors relative group"
            >
              Terms
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all" />
            </Link>
            <Link
              to="/security"
              className="text-sm text-gray-400 hover:text-primary transition-colors relative group"
            >
              Security
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all" />
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}