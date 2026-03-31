import { Navbar } from '../components/Navbar';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Memberships } from '../components/sections/Memberships';
import { Trainers } from '../components/sections/Trainers';
import { Schedule } from '../components/sections/Schedule';
import { Testimonials } from '../components/sections/Testimonials';
import { Contact } from '../components/sections/Contact';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div className="bg-gray-950 min-h-screen text-gray-100 font-sans selection:bg-primary/30 selection:text-primary-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Memberships />
        <Trainers />
        <Schedule />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
