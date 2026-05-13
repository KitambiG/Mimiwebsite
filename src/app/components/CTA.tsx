import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function CTA() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Take Control of Your Inventory?
          </h2>
          
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of businesses that trust our platform to manage their inventory efficiently. Start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white hover:bg-gray-100 text-blue-600 px-8">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8">
              Contact Sales
            </Button>
          </div>
          
          <div className="mt-8 text-blue-100 text-sm">
            No credit card required • 14-day free trial • Cancel anytime
          </div>
        </motion.div>
      </div>
    </section>
  );
}