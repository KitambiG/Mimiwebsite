import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Shield, Lock, Eye, Database, Users, FileText } from 'lucide-react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import logoDark from '../../imports/MimiApp_TextWhite.png';

export function PrivacyPage() {
  const sections = [
    {
      icon: FileText,
      title: 'Information We Collect',
      content: [
        'Personal information you provide when registering (name, email, phone number)',
        'Property and business information for service delivery',
        'Usage data and analytics to improve our services',
        'Payment information processed through secure third-party providers',
        'Communications between you and our support team',
      ],
    },
    {
      icon: Database,
      title: 'How We Use Your Information',
      content: [
        'Provide and maintain our property management services',
        'Process bookings and transactions on your behalf',
        'Send important updates about your account and services',
        'Improve our platform based on usage patterns',
        'Comply with legal obligations and prevent fraud',
        'Provide customer support and respond to inquiries',
      ],
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: [
        'Industry-standard encryption for data in transit and at rest',
        'Regular security audits and vulnerability assessments',
        'Strict access controls and employee confidentiality agreements',
        'Secure data centers with 99.9% uptime guarantee',
        'Regular backups to prevent data loss',
        'Compliance with international data protection standards',
      ],
    },
    {
      icon: Users,
      title: 'Data Sharing',
      content: [
        'We never sell your personal information to third parties',
        'Data shared with service providers only as necessary (payment processors, hosting)',
        'Information may be shared with online travel agencies (OTAs) as per your configuration',
        'Legal authorities when required by law or to protect rights',
        'Business transfers in case of merger or acquisition (with notice)',
      ],
    },
    {
      icon: Eye,
      title: 'Your Rights',
      content: [
        'Access your personal data at any time through your account',
        'Request correction of inaccurate information',
        'Request deletion of your data (subject to legal obligations)',
        'Export your data in a portable format',
        'Opt-out of marketing communications',
        'Lodge a complaint with relevant data protection authorities',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
<Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-card via-background to-card/50 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Privacy Policy</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Your Privacy Matters
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Last updated: May 13, 2026
            </p>

            <p className="text-lg text-muted-foreground">
              At Mimi App, we are committed to protecting your privacy and ensuring the security of your personal information. This policy explains how we collect, use, and safeguard your data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card/70 backdrop-blur-xl border border-border/50 rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mt-2">{section.title}</h2>
                </div>

                <ul className="space-y-3 ml-16">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-xl border border-primary/30 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">Cookies and Tracking</h2>
            <p className="text-muted-foreground mb-4">
              We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized features. You can control cookie preferences through your browser settings.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Data Retention</h3>
            <p className="text-muted-foreground mb-4">
              We retain your personal information for as long as necessary to provide our services and comply with legal obligations. When you close your account, we will delete or anonymize your data within 90 days, except where retention is required by law.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Children's Privacy</h3>
            <p className="text-muted-foreground mb-4">
              Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Changes to This Policy</h3>
            <p className="text-muted-foreground mb-4">
              We may update this privacy policy from time to time. We will notify you of any significant changes via email or through a notice on our platform.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Contact Us</h3>
            <p className="text-muted-foreground">
              If you have questions about this privacy policy or how we handle your data, please contact us at{' '}
              <a href="mailto:info@mimiapp.co.tz" className="text-primary hover:underline">
                info@mimiapp.co.tz
              </a>{' '}
              or call us at{' '}
              <a href="tel:+255742434540" className="text-primary hover:underline">
                +255 742 434 540
              </a>
              .
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
