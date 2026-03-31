import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    text: "Joining Gold's Gym was the best decision I've made. The atmosphere is incredible, and the trainers push you exactly the right amount. I've lost 30lbs and feel stronger than ever.",
    author: "Michael T.",
    role: "Member since 2022",
  },
  {
    text: "The facilities are always clean, the equipment is top-tier, and the community is super supportive. The yoga classes have completely transformed my mobility.",
    author: "Samantha R.",
    role: "Member since 2021",
  },
  {
    text: "As a professional athlete, I need high-end equipment to train properly. This gym provides everything I need and more. Highly recommend to anyone serious about fitness.",
    author: "James L.",
    role: "Member since 2023",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gray-950 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader 
          title="Success Stories" 
          subtitle="Don't just take our word for it. Hear from real people who have transformed their lives with our community."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-gray-900 border border-gray-800 p-8 rounded-2xl relative group hover:border-primary/50 transition-colors duration-300"
            >
              <Quote className="absolute top-6 right-6 text-gray-800 w-12 h-12 rotate-180 group-hover:text-primary/20 transition-colors" />
              
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-8 italic leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>
              
              <div className="mt-auto">
                <h4 className="font-heading font-bold text-white uppercase tracking-wider">{testimonial.author}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
