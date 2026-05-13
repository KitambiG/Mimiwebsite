import { motion } from 'motion/react';

const integrations = [
  { name: 'Shopify', logo: '🛒' },
  { name: 'WooCommerce', logo: '🛍️' },
  { name: 'Amazon', logo: '📦' },
  { name: 'eBay', logo: '🏪' },
  { name: 'QuickBooks', logo: '📊' },
  { name: 'Xero', logo: '💼' },
  { name: 'Stripe', logo: '💳' },
  { name: 'PayPal', logo: '💰' },
];

export function Integrations() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600">
              Connect with your favorite tools and platforms
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex flex-col items-center justify-center p-8 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-300 bg-white"
              >
                <div className="text-4xl mb-3">{integration.logo}</div>
                <span className="text-gray-700 font-medium">{integration.name}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
              View all integrations →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
