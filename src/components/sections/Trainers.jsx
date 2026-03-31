import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { Camera, Hash } from 'lucide-react';

const trainers = [
  {
    name: 'Marcus Johnson',
    role: 'Strength & Conditioning',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=2574&auto=format&fit=crop',
  },
  {
    name: 'Elena Rostova',
    role: 'Yoga & Mobility',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=2670&auto=format&fit=crop',
  },
  {
    name: 'David Chen',
    role: 'HIIT Specialist',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2670&auto=format&fit=crop',
  },
  {
    name: 'Sarah Williams',
    role: 'Nutrition Coach',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=3270&auto=format&fit=crop',
  },
];

export function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Meet The Elite" 
          subtitle="Our trainers are world-class professionals who are dedicated to helping you achieve your absolute best."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-gray-900 border border-gray-800"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent opacity-80 transition-opacity duration-300"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-heading font-bold text-white tracking-widest uppercase mb-1">{trainer.name}</h3>
                <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{trainer.role}</p>
                
                <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Camera size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Hash size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
