// --- 1. Imports ---
import React, { useState, useEffect } from 'react';
import { Phone, Mail, GitCompare, Home, Package, Image, Award, MessageSquare } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import ComparisonTool from './ComparisonTool';
import { useLanguage } from '../contexts/LanguageContext';
import companyLogo from '../assets/logo/ChatGPT Image Mar 5, 2026, 01_53_39 PM.webp';

const CompanyLogo: React.FC = () => (
  <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full ring-2 ring-orange-400/60 shadow-lg sm:h-12 sm:w-12">
    <img
      src={companyLogo}
      alt="Deepam Engineering Works logo"
      style={{ opacity: 1 }}
      className="h-full w-full rounded-full object-cover"
    />
  </div>
);

// --- 2. Component Props Interface ---
interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen: _isMenuOpen, setIsMenuOpen: _setIsMenuOpen, currentPage, setCurrentPage }) => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showComparison, setShowComparison] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToPage = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { key: 'home',          label: t('nav.home'),    icon: Home },
    { key: 'products',      label: t('nav.products'), icon: Package },
    { key: 'gallery',       label: t('nav.gallery'),  icon: Image },
    { key: 'certification', label: 'Cert.',           icon: Award },
    { key: 'contact',       label: t('nav.contact'),  icon: MessageSquare },
  ];

  return (
    <>
      {/* Top Contact Bar — desktop only */}
      <div className="hidden md:block border-b border-white/10 bg-slate-950 text-white/80">
        <div className="container mx-auto flex justify-between items-center px-4 py-2 text-xs lg:text-sm">
          <div className="flex items-center space-x-6">
            <a href="tel:+919442262444" className="flex items-center space-x-2 hover:text-orange-400 transition-colors duration-200">
              <Phone size={13} className="text-orange-400" />
              <span>+91 9442262444</span>
            </a>
            <a href="mailto:deepamengineeringworks.contact@gmail.com" className="flex items-center space-x-2 hover:text-orange-400 transition-colors duration-200">
              <Mail size={13} className="text-orange-400" />
              <span>deepamengineeringworks.contact@gmail.com</span>
            </a>
          </div>
          <div className="text-slate-400 text-xs">Mon - Sat: 9:00 AM - 6:30 PM</div>
        </div>
      </div>

      {/* ─── Top Header Bar ─── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 shadow-[0_4px_24px_rgba(15,23,42,0.10)] backdrop-blur-xl md:top-0'
          : 'bg-white/95 backdrop-blur-xl md:top-9'
      }`}>
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5">
          <div className="flex items-center justify-between">

            {/* Logo + Company Name */}
            <button onClick={() => navigateToPage('home')} className="flex items-center space-x-2.5 sm:space-x-3">
              <CompanyLogo />
              <div className="min-w-0">
                <div className="truncate text-sm font-extrabold tracking-tight sm:text-base lg:text-lg leading-tight bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                  Deepam Engineering Works
                </div>
                <p className="hidden text-[11px] font-medium text-slate-500 sm:block tracking-wide">Container Solutions</p>
              </div>
            </button>

            {/* ─── Desktop Navigation (lg and above) ─── */}
            <div className="hidden items-center space-x-1 lg:flex xl:space-x-1">
              {navLinks.map(link => (
                <button
                  key={link.key}
                  onClick={() => navigateToPage(link.key)}
                  className={`relative px-3.5 py-2 text-sm font-semibold rounded-xl transition-all duration-200 xl:text-[15px] ${
                    currentPage === link.key
                      ? 'text-orange-600 bg-orange-50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {/* Use full label on desktop */}
                  {link.key === 'certification' ? 'Certification' : link.label}
                  {currentPage === link.key && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-orange-500 rounded-full" />
                  )}
                </button>
              ))}

              <button
                onClick={() => setShowComparison(true)}
                className="ml-2 flex items-center space-x-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-orange-600 hover:shadow-orange-500/25 hover:shadow-lg"
              >
                <GitCompare size={16} />
                <span className="hidden xl:inline">Compare</span>
              </button>

              <LanguageSelector />
            </div>

            <ComparisonTool isOpen={showComparison} onClose={() => setShowComparison(false)} />
          </div>
        </nav>
      </header>

      {/* ─── Mobile Bottom Navigation Bar (always visible, no toggle needed) ─── */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-slate-200 shadow-[0_-4px_24px_rgba(15,23,42,0.12)]">
        <div className="flex items-stretch">
          {navLinks.map(link => {
            const Icon = link.icon;
            const isActive = currentPage === link.key;
            return (
              <button
                key={link.key}
                onClick={() => navigateToPage(link.key)}
                className="relative flex flex-1 flex-col items-center justify-center gap-0.5 py-2 transition-all duration-200 active:scale-95"
              >
                {/* Active top indicator */}
                {isActive && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-orange-500" />
                )}

                {/* Icon with background pill when active */}
                <span className={`flex items-center justify-center rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-orange-50 px-3 py-1 -mt-1'
                    : 'px-3 py-1'
                }`}>
                  <Icon
                    size={20}
                    className={`transition-colors duration-200 ${
                      isActive ? 'text-orange-500' : 'text-slate-400'
                    }`}
                    strokeWidth={isActive ? 2.5 : 1.8}
                  />
                </span>

                {/* Label */}
                <span className={`text-[10px] font-semibold leading-none transition-colors duration-200 ${
                  isActive ? 'text-orange-600' : 'text-slate-400'
                }`}>
                  {link.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Header;