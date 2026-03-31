import { Dumbbell, MapPin, Phone, Mail, MessageSquare, Hash, Camera, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors inline-block">
              <Dumbbell className="w-8 h-8" />
              <span className="font-heading font-bold text-2xl text-white tracking-wider uppercase">
                GOLD<span className="text-primary">'S</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Premium fitness center dedicated to helping you achieve your fitness goals with state-of-the-art equipment and expert trainers.
            </p>
            <div className="flex items-center gap-4 text-gray-400">
              <a href="#" className="hover:text-primary transition-colors hover:-translate-y-1 transform duration-300"><MessageSquare size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors hover:-translate-y-1 transform duration-300"><Hash size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors hover:-translate-y-1 transform duration-300"><Camera size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors hover:-translate-y-1 transform duration-300"><Video size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-heading font-semibold text-lg uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Classes', 'Trainers', 'Pricing', 'Blog'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                    <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-white font-heading font-semibold text-lg uppercase tracking-wider">Support</h3>
            <ul className="space-y-2">
              {['FAQ', 'Terms & Conditions', 'Privacy Policy', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                    <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-heading font-semibold text-lg uppercase tracking-wider">Contact Info</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-0.5" size={18} />
                <span>123 Fitness Street, NY 10001, United States</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <span>contact@goldsgym.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Gold's Gym. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Term of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
