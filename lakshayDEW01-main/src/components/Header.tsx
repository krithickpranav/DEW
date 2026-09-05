// --- 1. Imports ---
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, GitCompare } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import ComparisonTool from './ComparisonTool';
import { useLanguage } from '../contexts/LanguageContext';
import companyLogo from '../../gallery/logo/ChatGPT Image Mar 5, 2026, 01_53_39 PM.png';

const CompanyLogo: React.FC = () => (
  <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white shadow-[0_0_0_3px_rgba(143,227,85,0.22),0_18px_30px_rgba(16,185,129,0.22)] sm:h-12 sm:w-12">
    <img
      src={companyLogo}
      alt="Deepam Engineering Works logo"
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
  // --- 3. State and Hooks ---
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showComparison, setShowComparison] = useState(false);

  useEffect(() => {
    // Effect to handle scroll state
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- 4. Navigation Handler ---
  const navigateToPage = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- 5. JSX Rendering ---
  return (
    <>
      {/* Top Contact Bar */}
      <div className="hidden md:block border-b border-slate-200 bg-slate-950 text-white/90">
        <div className="container mx-auto flex justify-between items-center px-4 py-2 text-xs lg:text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} className="text-blue-300" />
              <span>+91 9442262444</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} className="text-blue-300" />
              <span>deepamengineeringworks.contact@gmail.com</span>
            </div>
          </div>
          <div className="text-slate-300">
            Mon - Sat: 9:00 AM - 6:30 PM
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl md:top-0' : 'bg-white/85 backdrop-blur-xl md:top-9'
      }`}>
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <CompanyLogo />
              <div className="min-w-0">
                <h1 className="truncate text-sm font-extrabold tracking-tight text-slate-900 sm:text-lg lg:text-xl">Deepam Engineering Works</h1>
                <p className="hidden text-xs font-medium text-slate-600 sm:block">Container Solutions</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-6 lg:flex xl:space-x-8">
              <button 
                onClick={() => navigateToPage('home')} 
                className={`text-sm font-medium transition-all xl:text-base ${currentPage === 'home' ? 'text-blue-700' : 'text-slate-700 hover:text-blue-700'}`}
              >
                {t('nav.home')}
              </button>
              <button 
                onClick={() => navigateToPage('products')} 
                className={`text-sm font-medium transition-all xl:text-base ${currentPage === 'products' ? 'text-blue-700' : 'text-slate-700 hover:text-blue-700'}`}
              >
                {t('nav.products')}
              </button>
              <button 
                onClick={() => navigateToPage('gallery')} 
                className={`text-sm font-medium transition-all xl:text-base ${currentPage === 'gallery' ? 'text-blue-700' : 'text-slate-700 hover:text-blue-700'}`}
              >
                {t('nav.gallery')}
              </button>
              <button 
                onClick={() => navigateToPage('certification')} 
                className={`text-sm font-medium transition-all xl:text-base ${currentPage === 'certification' ? 'text-blue-700' : 'text-slate-700 hover:text-blue-700'}`}
              >
                Certification
              </button>
              <button 
                onClick={() => navigateToPage('contact')} 
                className={`text-sm font-medium transition-all xl:text-base ${currentPage === 'contact' ? 'text-blue-700' : 'text-slate-700 hover:text-blue-700'}`}
              >
                {t('nav.contact')}
              </button>
              
              <button
                onClick={() => setShowComparison(true)}
                className="flex items-center space-x-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
              >
                <GitCompare size={18} />
                <span className="hidden xl:inline">Compare</span>
              </button>
              
              <LanguageSelector />
            </div>
            
            {/* Comparison Tool Modal */}
            <ComparisonTool isOpen={showComparison} onClose={() => setShowComparison(false)} />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-slate-700 hover:text-blue-600 transition-colors p-2 -mr-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-slate-200 bg-white">
              <div className="flex flex-col space-y-3 pt-4">
                <button 
                  onClick={() => navigateToPage('home')} 
                  className={`transition-colors text-left py-2 px-2 rounded ${currentPage === 'home' ? 'text-blue-600 font-semibold bg-blue-50' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'}`}
                >
                  {t('nav.home')}
                </button>
                <button 
                  onClick={() => navigateToPage('products')} 
                  className={`transition-colors text-left py-2 px-2 rounded ${currentPage === 'products' ? 'text-blue-600 font-semibold bg-blue-50' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'}`}
                >
                  {t('nav.products')}
                </button>
                <button 
                  onClick={() => navigateToPage('gallery')} 
                  className={`transition-colors text-left py-2 px-2 rounded ${currentPage === 'gallery' ? 'text-blue-600 font-semibold bg-blue-50' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'}`}
                >
                  {t('nav.gallery')}
                </button>
                <button 
                  onClick={() => navigateToPage('certification')} 
                  className={`transition-colors text-left py-2 px-2 rounded ${currentPage === 'certification' ? 'text-blue-600 font-semibold bg-blue-50' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'}`}
                >
                  Certification
                </button>
                <button 
                  onClick={() => navigateToPage('contact')} 
                  className={`transition-colors text-left py-2 px-2 rounded ${currentPage === 'contact' ? 'text-blue-600 font-semibold bg-blue-50' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'}`}
                >
                  {t('nav.contact')}
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