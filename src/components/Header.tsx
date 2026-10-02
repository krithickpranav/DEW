// --- 1. Imports ---
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, GitCompare } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import ComparisonTool from './ComparisonTool';
import { useLanguage } from '../contexts/LanguageContext';
import companyLogo from '../assets/logo/ChatGPT Image Mar 5, 2026, 01_53_39 PM.webp';

const CompanyLogo: React.FC = () => (
  <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full ring-2 ring-orange-400/40 shadow-lg sm:h-12 sm:w-12">
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

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen, currentPage, setCurrentPage }) => {
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
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { key: 'home', label: t('nav.home') },
    { key: 'products', label: t('nav.products') },
    { key: 'gallery', label: t('nav.gallery') },
    { key: 'certification', label: 'Certification' },
    { key: 'contact', label: t('nav.contact') },
  ];

  return (
    <>
      {/* Top Contact Bar */}
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

      {/* Main Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 shadow-[0_4px_24px_rgba(15,23,42,0.10)] backdrop-blur-xl md:top-0'
          : 'bg-white/92 backdrop-blur-xl md:top-9'
      }`}>
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button onClick={() => navigateToPage('home')} className="flex items-center space-x-2.5 sm:space-x-3">
              <CompanyLogo />
              <div className="min-w-0">
                <div className="truncate text-sm font-extrabold tracking-tight text-slate-900 sm:text-base lg:text-lg leading-tight">
                  Deepam Engineering Works
                </div>
                <p className="hidden text-[11px] font-medium text-slate-500 sm:block tracking-wide">Container Solutions</p>
              </div>
            </button>

            {/* Desktop Navigation */}
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
                  {link.label}
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-slate-700 hover:text-orange-600 transition-colors duration-200 p-2 -mr-2 rounded-xl hover:bg-slate-100"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-3 pb-4 border-t border-slate-100">
              <div className="flex flex-col gap-1 pt-3">
                {navLinks.map(link => (
                  <button
                    key={link.key}
                    onClick={() => navigateToPage(link.key)}
                    className={`text-left py-2.5 px-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      currentPage === link.key
                        ? 'text-orange-600 font-semibold bg-orange-50 border border-orange-100'
                        : 'text-slate-700 hover:text-orange-600 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => { setShowComparison(true); setIsMenuOpen(false); }}
                  className="mt-2 flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white w-fit"
                >
                  <GitCompare size={16} />
                  Compare Products
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;