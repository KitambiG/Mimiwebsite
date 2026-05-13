import { motion } from 'motion/react';
import { Link } from 'react-router';
import { FileText, CheckCircle2, AlertTriangle, Scale, Ban, RefreshCw } from 'lucide-react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import logoDark from '../../imports/MimiApp_TextWhite.png';

export function TermsPage() {
  const sections = [
    {
      icon: CheckCircle2,
      title: 'Acceptance of Terms',
      content: [
        'By accessing or using Mimi App, you agree to be bound by these Terms of Service',
        'If you do not agree with any part of these terms, you may not use our services',
        'We reserve the right to modify these terms at any time with notice',
        'Continued use after changes constitutes acceptance of modified terms',
      ],
    },
    {
      icon: FileText,
      title: 'Service Description',
      content: [
        'Mimi App provides cloud-based property management software for hospitality businesses',
        'Services include booking management, guest tracking, reporting, and channel management',
        'We strive for 99.9% uptime but do not guarantee uninterrupted service',
        'Features and functionality may be updated or modified without prior notice',
        'Additional services may be offered at extra cost',
      ],
    },
    {
      icon: Scale,
      title: 'User Responsibilities',
      content: [
        'You must provide accurate and complete registration information',
        'You are responsible for maintaining the confidentiality of your account credentials',
        'You must notify us immediately of any unauthorized access to your account',
        'You agree to use the service only for lawful purposes',
        'You are responsible for all activity under your account',
        'You must not attempt to gain unauthorized access to our systems',
      ],
    },
    {
      icon: RefreshCw,
      title: 'Subscription and Payment',
      content: [
        'Subscription fees are billed in advance on a monthly or annual basis',
        'All fees are non-refundable except as required by law',
        'We reserve the right to change pricing with 30 days notice',
        'Failed payments may result in service suspension',
        'You can cancel your subscription at any time, effective at the end of the billing period',
        'Enterprise plans may have custom terms and pricing',
      ],
    },
    {
      icon: Ban,
      title: 'Prohibited Activities',
      content: [
        'Violating any applicable laws or regulations',
        'Infringing on intellectual property rights',
        'Uploading malicious code or viruses',
        'Attempting to reverse engineer or copy our software',
        'Using the service to send spam or unsolicited communications',
        'Interfering with other users\' access to the service',
        'Reselling or redistributing our services without authorization',
      ],
    },
    {
      icon: AlertTriangle,
      title: 'Limitation of Liability',
      content: [
        'Mimi App is provided "as is" without warranties of any kind',
        'We are not liable for indirect, incidental, or consequential damages',
        'Our total liability is limited to the amount paid by you in the past 12 months',
        'We are not responsible for third-party integrations or services',
        'You are responsible for maintaining backups of your data',
        'We are not liable for losses resulting from unauthorized access to your account',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
<Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-card via-background to-card/50 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <Scale className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium text-secondary">Terms of Service</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Terms of Service
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Last updated: May 13, 2026
            </p>

            <p className="text-lg text-muted-foreground">
              These Terms of Service govern your use of Mimi App and the services we provide. Please read them carefully.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-background">
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
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mt-2">{section.title}</h2>
                </div>

                <ul className="space-y-3 ml-16">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
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
            className="mt-12 bg-gradient-to-br from-secondary/5 to-primary/5 backdrop-blur-xl border border-secondary/30 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground mb-4">
              All content, features, and functionality of Mimi App are owned by Insync Technologies and are protected by international copyright, trademark, and other intellectual property laws. You may not copy, modify, or distribute our software without explicit permission.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Termination</h3>
            <p className="text-muted-foreground mb-4">
              We may terminate or suspend your account immediately, without prior notice, for any reason, including breach of these terms. Upon termination, your right to use the service will immediately cease. You may terminate your account at any time through your account settings.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Governing Law</h3>
            <p className="text-muted-foreground mb-4">
              These terms shall be governed by and construed in accordance with the laws of the United Republic of Tanzania. Any disputes shall be resolved in the courts of Tanzania.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Severability</h3>
            <p className="text-muted-foreground mb-4">
              If any provision of these terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives to the greatest extent possible, and the remaining provisions will continue in full force and effect.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Contact Us</h3>
            <p className="text-muted-foreground">
              If you have questions about these Terms of Service, please contact us at{' '}
              <a href="mailto:info@mimiapp.co.tz" className="text-secondary hover:underline">
                info@mimiapp.co.tz
              </a>{' '}
              or call us at{' '}
              <a href="tel:+255742434540" className="text-secondary hover:underline">
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
