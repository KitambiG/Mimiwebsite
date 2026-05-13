import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'Real-time stock synchronization',
  'Barcode & QR code scanning',
  'Batch and serial number tracking',
  'Purchase order automation',
  'Sales order processing',
  'Integration with e-commerce platforms',
];

export function Showcase() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-lg shadow-xl overflow-hidden border border-gray-200">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1737573296361-75315239293a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjBjb21wdXRlciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzY0MDg0OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Inventory management workspace"
                className="w-full"
              />
            </div>
          </motion.div>
          
          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Complete Inventory Control at Your Fingertips
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Gain complete visibility into your inventory operations. Track stock movements, manage orders, and make data-driven decisions with confidence.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}