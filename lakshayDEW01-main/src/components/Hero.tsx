// --- 1. Imports ---
import React, { useState, useEffect } from 'react';
import heroImage from '../assets/home page phot and logo/logistics-import-export-background-of-container-truck-at-the-dock.jpg';
import { ArrowRight, FileText, Phone } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../contexts/LanguageContext';

// --- 2. Component Props Interface ---
interface HeroProps {
}

// --- 3. Counter Animation Hook ---
const useCountUp = (end: number, duration: number = 2000, isVisible: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * (end - startValue) + startValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return count;
};

const Hero: React.FC<HeroProps> = () => {
  // --- 4. Hooks ---
  const { t } = useLanguage();
  const [heroRef, isHeroVisible] = useScrollAnimation(0.2);
  
  // Animated counters
  const containersCount = useCountUp(500, 2000, isHeroVisible);
  const yearsCount = useCountUp(15, 2000, isHeroVisible);
  const clientsCount = useCountUp(100, 2000, isHeroVisible);
  const supportCount = useCountUp(24, 1500, isHeroVisible);
  // --- 4. JSX Rendering ---
  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative h-[90vh] sm:h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-28"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat filter contrast-125 brightness-110"
        style={{
          backgroundImage: `url(${heroImage})`
        }}
      >
        <div className="absolute inset-0 bg-slate-900/80"></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 container mx-auto px-4 py-16 transition-all duration-1000 ${
        isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="max-w-5xl mx-auto text-center text-white">
          {/* Badge */}
          <div className={`inline-flex items-center bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8 transition-all duration-1000 delay-200 ${
            isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></span>
            <span className="text-blue-200 text-xs sm:text-sm font-medium">{t('hero.badge')}</span>
          </div>

          {/* Main Headline */}
          <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight transition-all duration-1000 delay-400 ${
            isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="block text-white">{t('hero.title')}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mt-1 sm:mt-2">
              {t('hero.subtitle')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`text-base sm:text-lg md:text-xl text-slate-300 mb-3 sm:mb-4 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-600 ${
            isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            {t('hero.description')}
          </p>
          
          <p className={`text-sm sm:text-base md:text-lg text-slate-400 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-700 ${
            isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            {t('hero.details')}
          </p>

          {/* Action Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6 mb-8 sm:mb-12 transition-all duration-1000 delay-800 ${
            isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' }))}
              className="group relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto justify-center text-sm sm:text-base overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FileText size={20} className="relative z-10" />
              <span className="relative z-10">{t('hero.getQuote')}</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform relative z-10" />
            </button>
            
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'products' }))}
              className="group bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white/20 hover:border-white/50 transition-all duration-300 flex items-center space-x-2 shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto justify-center text-sm sm:text-base"
            >
              <span>{t('hero.viewProducts')}</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats - Animated Counters with Glassmorphism */}
          <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-1000 ${
            isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="group text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-1 sm:mb-2">
                {containersCount}+
              </div>
              <div className="text-slate-300 text-xs md:text-sm">{t('hero.stat1')}</div>
            </div>
            <div className="group text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-1 sm:mb-2">
                {yearsCount}+
              </div>
              <div className="text-slate-300 text-xs md:text-sm">{t('hero.stat2')}</div>
            </div>
            <div className="group text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-1 sm:mb-2">
                {clientsCount}+
              </div>
              <div className="text-slate-300 text-xs md:text-sm">{t('hero.stat3')}</div>
            </div>
            <div className="group text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-1 sm:mb-2">
                {supportCount}/7
              </div>
              <div className="text-slate-300 text-xs md:text-sm">{t('hero.stat4')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className={`absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce transition-all duration-1000 delay-1200 ${
        isHeroVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;