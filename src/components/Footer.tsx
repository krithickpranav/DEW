// --- 1. Imports ---
import React, { useEffect, useRef, useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Linkedin, 
  Instagram, 
  Youtube, 
  ChevronRight, 
  Clock, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';
import companyLogo from '../assets/logo/ChatGPT Image Mar 5, 2026, 01_53_39 PM.webp';



const Footer: React.FC = () => {
  // Navigation helper for SPA routing
  const navigateTo = (page: string) => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: page }));
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/deepamengineeringworks',
      icon: Linkedin,
      hoverClass: 'hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:shadow-[0_0_20px_rgba(10,102,194,0.5)]',
      color: '#0A66C2',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/deepamengineeringworks/',
      icon: Instagram,
      hoverClass: 'hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-[#dc2743] hover:shadow-[0_0_20px_rgba(220,39,67,0.5)]',
      color: '#E4405F',
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@deepamengineeringworkstgode?si=aGmJt8q4ydJbExVR',
      icon: Youtube,
      hoverClass: 'hover:bg-[#FF0000] hover:border-[#FF0000] hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]',
      color: '#FF0000',
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/share/1CCboPuUv3/',
      icon: Facebook,
      hoverClass: 'hover:bg-[#1877F2] hover:border-[#1877F2] hover:shadow-[0_0_20px_rgba(24,119,242,0.5)]',
      color: '#1877F2',
    },
  ];

  return (
    <footer className="relative mt-16 bg-gradient-to-b from-slate-950 via-[#0B0F17] to-black text-white border-t border-slate-800/80 overflow-hidden">
      {/* Top Accent Gradient Border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/70 to-transparent" />

      {/* Ambient Glows */}
      <div className="pointer-events-none absolute -top-24 left-1/4 w-96 h-96 bg-orange-500/5 blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 blur-[140px] rounded-full" />

      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16 relative z-10">
        <div className="mx-auto max-w-7xl">
          {/* Main 4-Column Grid */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            
            {/* 1. Company Brand & Socials (Span 4 on LG) */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <div className="mb-6 flex items-center space-x-3.5">
                  <div className="relative group cursor-pointer" onClick={() => navigateTo('home')}>
                    <img
                      src={companyLogo}
                      alt="Deepam Engineering Works logo"
                      className="h-12 w-12 rounded-full object-cover bg-white ring-2 ring-orange-500/30 shadow-[0_0_20px_rgba(249,115,22,0.25)] transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-slate-950"></span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                      Deepam Engineering Works
                    </h3>
                    <p className="text-xs font-medium text-orange-400/90 tracking-wide uppercase">
                      Commercial Vehicles & Containers
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-400 mb-6 leading-relaxed max-w-sm">
                  Pioneering manufacturer of heavy-duty cargo containers, aerodynamic lorry cabins, and customized transport bodies in Tiruchengode with 15+ years of engineering excellence.
                </p>

                {/* Trust Badges */}
                <div className="flex items-center gap-2 mb-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-300">
                    <ShieldCheck size={14} className="text-orange-400" /> ISO Certified Standards
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/10 border border-orange-500/20 text-orange-400">
                    15+ Years Trust
                  </span>
                </div>
              </div>

              {/* Modern Social Media Hub */}
              <div>
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Connect With Us
                </span>
                <div className="flex items-center space-x-3">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className={`group relative flex items-center justify-center w-11 h-11 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 transition-all duration-300 hover:text-white hover:-translate-y-1 active:scale-95 shadow-sm ${social.hoverClass}`}
                      >
                        <IconComponent size={20} className="transition-transform duration-300 group-hover:scale-110" />

                        {/* Floating Tooltip */}
                        <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 text-[11px] font-semibold tracking-wide bg-slate-900 text-white px-2.5 py-1 rounded-md shadow-xl whitespace-nowrap border border-slate-700/80 z-20">
                          {social.name}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 2. Quick Navigation (Span 2 on LG) */}
            <div className="lg:col-span-2">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {[
                  { label: 'Home Page', action: () => navigateTo('home') },
                  { label: 'About Company', action: () => navigateTo('home#about') },
                  { label: 'Our Products', action: () => navigateTo('products') },
                  { label: 'Product Gallery', action: () => navigateTo('gallery') },
                  { label: 'Certifications', action: () => navigateTo('certification') },
                  { label: 'Contact Support', action: () => navigateTo('contact') },
                ].map((link, idx) => (
                  <li key={idx}>
                    <button
                      onClick={link.action}
                      className="group flex items-center gap-1.5 text-sm text-slate-400 hover:text-orange-400 transition-colors text-left"
                    >
                      <ChevronRight 
                        size={14} 
                        className="text-orange-500 transition-transform duration-200 group-hover:translate-x-1" 
                      />
                      <span>{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Products & Solutions (Span 3 on LG) */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                Our Solutions
              </h4>
              <ul className="space-y-2.5">
                {[
                  { label: '32 Ft Multi-Axle Containers', action: () => navigateTo('products') },
                  { label: '20 & 24 Ft Freight Containers', action: () => navigateTo('products') },
                  { label: 'All-Door Commercial Containers', action: () => navigateTo('products') },
                  { label: 'Aerodynamic Lorry Cabins', action: () => navigateTo('products') },
                  { label: 'Straight Type Commercial Cabins', action: () => navigateTo('products') },
                  { label: 'Curved Type Air Cutter Vehicles', action: () => navigateTo('products') },
                  { label: 'Export RIG & Customized Bodies', action: () => navigateTo('products') },
                ].map((item, idx) => (
                  <li key={idx}>
                    <button
                      onClick={item.action}
                      className="group flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors text-left"
                    >
                      <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-orange-500 transition-colors" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {item.label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Contact & Works Info (Span 3 on LG) */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                Contact & Works
              </h4>
              <div className="space-y-4 text-sm">
                
                {/* Works Address */}
                <div className="flex items-start space-x-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-xs">Works & Office</p>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      Tiruchengode, Namakkal District, Tamil Nadu 637211, India
                    </p>
                  </div>
                </div>

                {/* Click-to-Call Phone Numbers */}
                <div className="flex items-start space-x-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-xs">Direct Support</p>
                    <div className="flex flex-col gap-0.5 mt-0.5">
                      <a href="tel:+919787262444" className="text-xs text-slate-300 hover:text-orange-400 transition-colors font-mono">
                        +91 97872 62444
                      </a>
                      <a href="tel:+919442262444" className="text-xs text-slate-300 hover:text-orange-400 transition-colors font-mono">
                        +91 94422 62444
                      </a>
                    </div>
                  </div>
                </div>

                {/* Click-to-Email */}
                <div className="flex items-start space-x-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail size={16} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-white text-xs">Email Inquiries</p>
                    <a 
                      href="mailto:deepamengineeringworks2018@gmail.com" 
                      className="text-xs text-slate-300 hover:text-orange-400 transition-colors block truncate mt-0.5"
                      title="deepamengineeringworks2018@gmail.com"
                    >
                      deepamengineeringworks2018@gmail.com
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-slate-900/40 border border-slate-800/60 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Clock size={13} className="text-orange-400" />
                    <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
                  </div>
                  <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Open
                  </span>
                </div>

              </div>
            </div>

          </div>

          {/* Bottom Bar with Copyright & Legal Links */}
          <div className="border-t border-slate-800/80 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <div className="text-center md:text-left flex flex-wrap items-center justify-center gap-1.5">
              <span>© {new Date().getFullYear()} Deepam Engineering Works.</span>
              <span className="hidden sm:inline">•</span>
              <span>All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="text-slate-500">Precision Engineered in Tiruchengode, India.</span>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-slate-400">
              <button 
                onClick={() => navigateTo('certification')} 
                className="hover:text-orange-400 transition-colors"
              >
                Quality Compliance
              </button>
              <button 
                onClick={() => navigateTo('contact')} 
                className="hover:text-orange-400 transition-colors"
              >
                Inquiries & Quotes
              </button>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                Back to Top <ArrowUpRight size={12} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;