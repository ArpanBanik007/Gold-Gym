import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';

const plans = [
  {
    name: 'Basic',
    price: '29',
    period: '/month',
    features: ['Access to gym equipment', 'Locker room access', '1 free personal training session', 'Open 6 AM - 10 PM'],
    popular: false,
  },
  {
    name: 'Standard',
    price: '49',
    period: '/month',
    features: ['All Basic features', 'Access to group classes', 'Sauna access', '24/7 gym access', 'Nutrition consultation'],
    popular: true,
  },
  {
    name: 'Premium',
    price: '89',
    period: '/month',
    features: ['All Standard features', 'Unlimited personal training', 'Massage therapy', 'Priority class booking', 'Exclusive VIP lounge'],
    popular: false,
  },
];

export function Memberships() {
  return (
    <section id="memberships" className="py-24 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Membership Plans" 
          subtitle="Choose the perfect plan to jumpstart your fitness journey. We offer flexible pricing to suit your goals and lifestyle."
        />

        <div className="grid md:grid-cols-3 gap-8 items-center mt-16 pb-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`relative bg-gray-950 rounded-2xl p-8 border ${
                plan.popular ? 'border-primary ring-1 ring-primary transform md:-translate-y-4 shadow-2xl shadow-primary/20 scale-105' : 'border-gray-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-primary text-gray-950 text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-heading font-medium text-white uppercase tracking-widest">{plan.name}</h3>
                <div className="mt-4 flex items-baseline justify-center text-5xl font-extrabold text-white">
                  <span className="text-3xl mr-1 text-primary">$</span>
                  {plan.price}
                  <span className="text-lg text-gray-400 font-medium ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-start text-gray-300 text-sm">
                    <Check className="h-5 w-5 text-primary mr-3 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? 'primary' : 'outline'} 
                className={`w-full ${plan.popular ? '' : 'text-white border-gray-700 hover:bg-gray-800'}`}
              >
                Choose Plan
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
