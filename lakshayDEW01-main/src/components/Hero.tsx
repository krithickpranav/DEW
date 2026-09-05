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
      className="relative flex h-[92vh] items-center justify-center overflow-hidden pt-20 sm:h-screen sm:pt-24 md:pt-28"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`
        }}
      >
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.35),_transparent_38%),linear-gradient(135deg,rgba(15,23,42,0.9),rgba(15,23,42,0.75))]" />
      </div>

      <div className={`relative z-10 container mx-auto px-4 py-16 transition-all duration-1000 ${
        isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="mx-auto max-w-5xl text-center text-white">
          <div className={`mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-blue-100 shadow-lg shadow-blue-950/20 backdrop-blur-md sm:px-6 sm:text-sm ${
            isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <span className="mr-3 h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            <span>{t('hero.badge')}</span>
          </div>

          <h1 className={`mb-4 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl ${
            isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="block">{t('hero.title')}</span>
            <span className="mt-2 block bg-gradient-to-r from-blue-300 via-cyan-300 to-white bg-clip-text text-transparent">
              {t('hero.subtitle')}
            </span>
          </h1>

          <p className={`mx-auto max-w-3xl text-base text-slate-200 sm:text-lg md:text-xl ${
            isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            {t('hero.description')}
          </p>
          
          <p className={`mx-auto mt-4 max-w-2xl text-sm text-slate-300 sm:text-base md:text-lg ${
            isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            {t('hero.details')}
          </p>

          <div className={`mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4 ${
            isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' }))}
              className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:w-auto sm:px-8 sm:text-base"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                <FileText size={18} />
                {t('hero.getQuote')}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'products' }))}
              className="group w-full rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10 sm:w-auto sm:px-8 sm:text-base"
            >
              <span className="flex items-center justify-center gap-2">
                {t('hero.viewProducts')}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>

          <div className={`mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:mt-12 sm:grid-cols-4 sm:gap-6 ${
            isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md shadow-lg shadow-slate-900/20 transition-all duration-300 hover:scale-[1.02] hover:bg-white/10">
              <div className="mb-1 text-2xl font-black text-blue-300 sm:text-3xl">{containersCount}+</div>
              <div className="text-xs text-slate-300 md:text-sm">{t('hero.stat1')}</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md shadow-lg shadow-slate-900/20 transition-all duration-300 hover:scale-[1.02] hover:bg-white/10">
              <div className="mb-1 text-2xl font-black text-blue-300 sm:text-3xl">{yearsCount}+</div>
              <div className="text-xs text-slate-300 md:text-sm">{t('hero.stat2')}</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md shadow-lg shadow-slate-900/20 transition-all duration-300 hover:scale-[1.02] hover:bg-white/10">
              <div className="mb-1 text-2xl font-black text-blue-300 sm:text-3xl">{clientsCount}+</div>
              <div className="text-xs text-slate-300 md:text-sm">{t('hero.stat3')}</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md shadow-lg shadow-slate-900/20 transition-all duration-300 hover:scale-[1.02] hover:bg-white/10">
              <div className="mb-1 text-2xl font-black text-blue-300 sm:text-3xl">{supportCount}/7</div>
              <div className="text-xs text-slate-300 md:text-sm">{t('hero.stat4')}</div>
            </div>
          </div>
        </div>
      </div>

      <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 text-white transition-all duration-1000 delay-1200 sm:bottom-8 ${
        isHeroVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="flex h-8 w-5 justify-center rounded-full border-2 border-white/30 sm:h-10 sm:w-6">
          <div className="mt-2 h-3 w-1 rounded-full bg-white animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;