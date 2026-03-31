import { motion } from 'framer-motion';
import { Target, Users, Zap } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

const stats = [
  { label: 'Active Members', value: '10k+' },
  { label: 'Expert Trainers', value: '50+' },
  { label: 'Modern Equipment', value: '100+' },
  { label: 'Awards Won', value: '15' },
];

const features = [
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: 'Goal Oriented',
    description: 'Personalized programs designed to hit your specific fitness targets.',
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: 'Community First',
    description: 'Join a welcoming community that motivates and pushes you further.',
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: 'High Energy',
    description: 'Experience intense, adrenaline-pumping workouts every day.',
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Who We Are" 
          subtitle="More than just a gym. We are a community of dedicated individuals pushing each other to reach new heights and achieve what once seemed impossible."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4 relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 pt-12"
            >
              <img 
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2670&auto=format&fit=crop" 
                alt="Gym Environment" 
                className="rounded-lg shadow-2xl object-cover h-64 w-full grayscale hover:grayscale-0 transition-all duration-500"
              />
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2670&auto=format&fit=crop" 
                alt="Working Out" 
                className="rounded-lg shadow-2xl object-cover h-48 w-full grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <img 
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2670&auto=format&fit=crop" 
                alt="Weightlifting" 
                className="rounded-lg shadow-2xl object-cover h-48 w-full grayscale hover:grayscale-0 transition-all duration-500"
              />
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=3270&auto=format&fit=crop" 
                alt="Trainer" 
                className="rounded-lg shadow-2xl object-cover h-64 w-full grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold mb-6 font-heading">
              Our <span className="text-primary">Mission</span> & <span className="text-primary">Vision</span>
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Founded on the belief that fitness is not a destination but a way of life, our gym provides the ultimate environment for physical transformation. We blend cutting-edge equipment with expert coaching to deliver results that last.
            </p>

            <div className="space-y-6 mb-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="bg-gray-900 p-3 rounded-lg h-fit border border-gray-800">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1 font-heading">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gray-900">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <div className="text-3xl font-bold font-heading text-white mb-1">{stat.value}</div>
                  <div className="text-primary text-xs font-semibold uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
