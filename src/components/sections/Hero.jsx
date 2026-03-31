import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=3270&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-gray-950/70 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          className="max-w-3xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="flex items-center gap-2 mb-6 text-primary font-bold tracking-widest uppercase">
            <span className="w-12 h-0.5 bg-primary rounded"></span>
            Elevate your fitness
          </motion.div>
          
          <motion.h1 
            variants={item}
            className="text-5xl md:text-7xl lg:text-8xl font-black font-heading leading-[1.1] mb-8 text-white uppercase tracking-tighter"
          >
            Transform <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">Your Body</span>
          </motion.h1>
          
          <motion.p 
            variants={item}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl font-light leading-relaxed"
          >
            Push your limits, break your boundaries, and achieve your peak physical condition with world-class trainers and state-of-the-art facilities.
          </motion.p>
          
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
            <Link to="/join">
              <Button size="lg" className="w-full sm:w-auto font-bold uppercase tracking-wider group">
                Join Now
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="#memberships">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white hover:bg-white/10 uppercase tracking-wider font-bold">
                View Plans
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
