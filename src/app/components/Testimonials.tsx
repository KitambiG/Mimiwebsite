import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Juma Mwalimu',
    role: 'Hotel Manager',
    company: 'Serengeti View Lodge, Arusha',
    content: 'Mimi App has completely transformed how we manage our safari lodge. Booking management is now seamless, and our guests love the quick check-in process. Highly recommended for any hospitality business in Tanzania!',
    rating: 5,
  },
  {
    name: 'Grace Kileo',
    role: 'Owner',
    company: 'Zanzibar Beach Resort, Zanzibar',
    content: 'Before Mimi App, we struggled with double bookings and manual record keeping. Now everything is automated and we can manage both our properties from one dashboard. Our revenue has increased by 30% in just 6 months!',
    rating: 5,
  },
  {
    name: 'Daniel Mtui',
    role: 'Operations Director',
    company: 'Kilimanjaro Guest House, Moshi',
    content: 'The mobile access feature is amazing! I can approve bookings, check room status, and respond to guests even when I\'m away from the property. Best investment we\'ve made for our guest house.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-accent/20 dark:bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Hospitality Leaders in Tanzania
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            See what hotel managers and lodge owners say about Mimi App
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="relative p-8 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-border">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-primary mt-1">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}