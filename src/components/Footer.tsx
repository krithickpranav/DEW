// --- 1. Imports ---
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  // --- 2. JSX Rendering ---
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg sm:text-xl">D</span>
                </div>
                <div>
                  <h3 className="text-base sm:text-xl font-bold">Deepam Engineering Works</h3>
                  <p className="text-xs sm:text-sm text-slate-400">Container Solutions</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mb-4 sm:mb-6 leading-relaxed">
                Leading manufacturer of high-quality container solutions and lorry cabins in India. 
                Specializing in containers, driver cabins, body cabins, and customized solutions with over 15 years of experience.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Facebook size={16} className="sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Twitter size={16} className="sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Linkedin size={16} className="sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Instagram size={16} className="sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 md:mb-6">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="#about" className="text-slate-300 hover:text-white transition-colors text-sm sm:text-base">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#products" className="text-slate-300 hover:text-white transition-colors text-sm sm:text-base">
                    Our Products
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="text-slate-300 hover:text-white transition-colors text-sm sm:text-base">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#quality" className="text-slate-300 hover:text-white transition-colors text-sm sm:text-base">
                    Quality Standards
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 md:mb-6">Our Services</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'products#containers' }))}>
                  <a href="#products-containers" className="text-slate-300 hover:text-white transition-colors text-sm sm:text-base cursor-pointer">
                    Container Solutions
                  </a>
                </li>
                <li onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'products#lorry-cabins' }))}>
                  <a href="#products-lorry-cabins" className="text-slate-300 hover:text-white transition-colors text-sm sm:text-base cursor-pointer">
                    Lorry Cabins
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'products#containers' }))}
                    className="text-slate-300 hover:text-white transition-colors text-sm sm:text-base text-left w-full"
                  >
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 md:mb-6">Contact Information</h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-blue-400 mt-1 flex-shrink-0" size={16} />
                  <div>
                    <p className="text-xs sm:text-sm text-slate-300">
                      Tiruchengode,<br />
                      Tamil Nadu 637211,<br />
                      India
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-blue-400 flex-shrink-0" size={16} />
                  <div>
                    <p className="text-xs sm:text-sm text-slate-300">+91 97872 62444</p>
                    <p className="text-xs sm:text-sm text-slate-300">+91 94422 62444</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-400 flex-shrink-0" size={16} />
                  <div>
                    <p className="text-xs sm:text-sm text-slate-300">deepamengineeringworks2018@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 mt-4 sm:mt-6 md:mt-8 pt-4 sm:pt-6 md:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <div className="text-slate-400 text-xs sm:text-sm text-center sm:text-left">
              © 2026 Deepam Engineering Works. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-3 sm:space-x-4 md:space-x-6 text-xs sm:text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;