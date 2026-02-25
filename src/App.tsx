// --- 1. Imports ---
import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Achievement from './components/Achievement';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ProductsPage from './pages/ProductsPage'; 
import Gallery from './components/Gallery';
import ContactPage from './pages/ContactPage';
import QualityStandardsPage from './pages/QualityStandardsPage';
import Chatbot from './components/Chatbot';

function App() {
  // --- 2. State Management ---
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [fabRef, isFabVisible] = useScrollAnimation();

  // --- 3. Effects ---
  useEffect(() => {
    const handleNavigate = (e: CustomEvent) => {
      const page = e.detail.split('#')[0];
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('navigate', handleNavigate as EventListener);
    return () => window.removeEventListener('navigate', handleNavigate as EventListener);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- 4. Helper Functions ---
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- 5. Page Rendering Logic ---
  const renderPage = () => {
    switch (currentPage) {
      case 'products':
        return <ProductsPage />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <ContactPage />;
      case 'quality':
        return <QualityStandardsPage />;
      default:
        return (
          <>
            <Hero />
            <About />
            <Achievement />
            <WhyChooseUs />
            <Testimonials />
          </>
        );
    }
  };

  // --- 6. JSX Rendering ---
  return (
    <div className="min-h-screen bg-white">
      <Header 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      
      <main>
        {renderPage()}
      </main>

      <Footer />

      {/* Floating Action Buttons - Right Side */}
      <div 
        ref={fabRef}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col space-y-3 transition-all duration-1000 ${
          isFabVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}
      >
        {/* Chatbot Button */}
        <Chatbot />

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919442262444?text=Hello%20Deepam%20Engineering,%20I'm%20interested%20in%20your%20container%20solutions"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 relative"
          title="Chat on WhatsApp"
        >
          <MessageCircle size={24} className="sm:w-6 sm:h-6" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </a>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="bg-slate-700 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-slate-800 transition-all duration-300 hover:scale-110"
            title="Scroll to top"
          >
            <ArrowUp size={24} className="sm:w-6 sm:h-6" />
          </button>
        )}
      </div>

      {/* Sticky Get Quote Button - Left Side */}
      <div 
        className={`fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 transition-all duration-1000 ${
          isFabVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}
      >
        <button
          onClick={() => setCurrentPage('contact')}
          className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center space-x-2 font-semibold text-sm sm:text-base"
        >
          <span className="hidden sm:inline">Get Free Quote</span>
          <span className="sm:hidden">Quote</span>
          <ArrowUp size={20} className="rotate-90 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

    </div>
  );
}

export default App;