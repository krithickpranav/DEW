// --- 1. Imports ---
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, GitCompare } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import ComparisonTool from './ComparisonTool';
import { useLanguage } from '../contexts/LanguageContext';

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
      <div className="bg-slate-800 text-white py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+91 7418698082</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>deepamengineeringworks.contact@gmail.com</span>
            </div>
          </div>
          <div className="text-slate-300">
            Mon - Sat: 9:00 AM - 6:00 PM
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg md:top-0' : 'bg-white/95 backdrop-blur-sm md:top-10'
      }`}>
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg sm:text-xl">D</span>
              </div>
              <div className="min-w-0">
                <h1 className="text-sm sm:text-lg lg:text-xl font-bold text-slate-800 truncate">Deepam Engineering Works</h1>
                <p className="text-xs text-slate-600 hidden sm:block">Container Solutions</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <button 
                onClick={() => navigateToPage('home')} 
                className={`transition-colors text-sm xl:text-base ${currentPage === 'home' ? 'text-blue-600 font-semibold' : 'text-slate-700 hover:text-blue-600'}`}
              >
                {t('nav.home')}
              </button>
              <button 
                onClick={() => navigateToPage('products')} 
                className={`transition-colors text-sm xl:text-base ${currentPage === 'products' ? 'text-blue-600 font-semibold' : 'text-slate-700 hover:text-blue-600'}`}
              >
                {t('nav.products')}
              </button>
              <button 
                onClick={() => navigateToPage('gallery')} 
                className={`transition-colors text-sm xl:text-base ${currentPage === 'gallery' ? 'text-blue-600 font-semibold' : 'text-slate-700 hover:text-blue-600'}`}
              >
                {t('nav.gallery')}
              </button>
              <button 
                onClick={() => navigateToPage('quality')} 
                className={`transition-colors text-sm xl:text-base ${currentPage === 'quality' ? 'text-blue-600 font-semibold' : 'text-slate-700 hover:text-blue-600'}`}
              >
                {t('nav.quality')}
              </button>
              <button 
                onClick={() => navigateToPage('contact')} 
                className={`transition-colors text-sm xl:text-base ${currentPage === 'contact' ? 'text-blue-600 font-semibold' : 'text-slate-700 hover:text-blue-600'}`}
              >
                {t('nav.contact')}
              </button>
              
              {/* Compare Button */}
              <button
                onClick={() => setShowComparison(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-md hover:shadow-lg text-sm xl:text-base"
              >
                <GitCompare size={18} />
                <span className="hidden xl:inline">Compare</span>
              </button>
              
              {/* Language Selector */}
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
                  onClick={() => navigateToPage('quality')} 
                  className={`transition-colors text-left py-2 px-2 rounded ${currentPage === 'quality' ? 'text-blue-600 font-semibold bg-blue-50' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'}`}
                >
                  {t('nav.quality')}
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