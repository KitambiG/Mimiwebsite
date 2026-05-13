import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Shield, Lock, Database, Eye, Server, AlertTriangle, CheckCircle2, Key } from 'lucide-react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import logoDark from '../../imports/MimiApp_TextWhite.png';

export function SecurityPage() {
  const sections = [
    {
      icon: Lock,
      title: 'Data Encryption',
      content: [
        'AES-256 encryption for data at rest',
        'TLS 1.3 encryption for data in transit',
        'End-to-end encryption for sensitive information',
        'Encrypted database backups',
        'Secure key management with hardware security modules (HSM)',
      ],
    },
    {
      icon: Server,
      title: 'Infrastructure Security',
      content: [
        'Hosted on enterprise-grade cloud infrastructure',
        'Redundant data centers across multiple locations',
        'DDoS protection and firewall systems',
        'Regular security patches and updates',
        '99.9% uptime SLA with automatic failover',
        'Isolated customer data environments',
      ],
    },
    {
      icon: Key,
      title: 'Access Control',
      content: [
        'Multi-factor authentication (MFA) available',
        'Role-based access control (RBAC)',
        'Strong password requirements',
        'Automatic session timeout',
        'IP whitelisting for enterprise accounts',
        'Detailed audit logs of all access and actions',
      ],
    },
    {
      icon: Eye,
      title: 'Monitoring & Detection',
      content: [
        '24/7 security monitoring and threat detection',
        'Real-time intrusion detection systems',
        'Automated vulnerability scanning',
        'Security incident response team',
        'Regular penetration testing by third parties',
        'Continuous security audits and assessments',
      ],
    },
    {
      icon: Database,
      title: 'Data Protection',
      content: [
        'Daily automated backups with encryption',
        'Point-in-time recovery capabilities',
        'Data residency options for compliance',
        'Secure data deletion procedures',
        'Data loss prevention (DLP) measures',
        'Compliance with GDPR and international standards',
      ],
    },
    {
      icon: CheckCircle2,
      title: 'Compliance & Certifications',
      content: [
        'SOC 2 Type II compliance (in progress)',
        'GDPR compliant data handling',
        'PCI DSS compliant payment processing',
        'Regular third-party security audits',
        'ISO 27001 information security standards',
        'Industry best practices and frameworks',
      ],
    },
  ];

  const bestPractices = [
    {
      title: 'Use Strong Passwords',
      description: 'Create unique passwords with a mix of letters, numbers, and symbols. Never reuse passwords across services.',
    },
    {
      title: 'Enable Two-Factor Authentication',
      description: 'Add an extra layer of security to your account with 2FA using an authenticator app.',
    },
    {
      title: 'Review Access Regularly',
      description: 'Periodically review user permissions and remove access for users who no longer need it.',
    },
    {
      title: 'Keep Software Updated',
      description: 'Ensure your browser and operating system are up to date with the latest security patches.',
    },
    {
      title: 'Be Wary of Phishing',
      description: 'Never share your password or click suspicious links. We will never ask for your password via email.',
    },
    {
      title: 'Monitor Account Activity',
      description: 'Regularly check your audit logs for any unusual or unauthorized activity.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
<Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-card via-background to-card/50 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <Shield className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">Security</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Enterprise-Grade Security
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Last updated: May 13, 2026
            </p>

            <p className="text-lg text-muted-foreground">
              Your data security is our top priority. We employ industry-leading security measures to protect your information and ensure the integrity of our platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Protect Your Data
            </h2>
            <p className="text-lg text-muted-foreground">
              Multiple layers of security to safeguard your business information
            </p>
          </motion.div>

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
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mt-2">{section.title}</h3>
                </div>

                <ul className="space-y-3 ml-16">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-20 bg-gradient-to-b from-background to-accent/20 dark:from-background dark:to-card/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Security Best Practices
            </h2>
            <p className="text-lg text-muted-foreground">
              Follow these guidelines to keep your account secure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestPractices.map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-emerald-500/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{practice.title}</h3>
                <p className="text-sm text-muted-foreground">{practice.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Incident Reporting */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-red-500/5 to-orange-500/5 border border-red-500/20 rounded-2xl p-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Report a Security Issue</h2>
                <p className="text-muted-foreground mb-4">
                  If you discover a security vulnerability or suspicious activity, please report it immediately. We take all security reports seriously and will investigate promptly.
                </p>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Email:</strong>{' '}
                    <a href="mailto:info@mimiapp.co.tz" className="text-primary hover:underline">
                      info@mimiapp.co.tz
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Phone:</strong>{' '}
                    <a href="tel:+255742434540" className="text-primary hover:underline">
                      +255 742 434 540
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground mt-4">
                    Please include as much detail as possible, including steps to reproduce the issue. We appreciate responsible disclosure and will acknowledge your report within 48 hours.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <h3 className="text-xl font-bold text-foreground mb-4">Questions About Our Security?</h3>
            <p className="text-muted-foreground mb-6">
              Our security team is here to answer your questions and provide additional information about our practices.
            </p>
            <Link
              to="/contact-sales"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:shadow-2xl transition-all"
            >
              Contact Security Team
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
