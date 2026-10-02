// --- 1. Imports ---
import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import heroImage from '../assets/home page phot and logo/logistics-import-export-background-of-container-truck-at-the-dock.jpg';
import companyLogo from '../assets/logo/ChatGPT Image Mar 5, 2026, 01_53_39 PM.webp';
import { ArrowRight, FileText } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../contexts/LanguageContext';
import gsap from 'gsap';

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
  const introRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Animated counters
  const containersCount = useCountUp(500, 2000, isHeroVisible);
  const yearsCount = useCountUp(15, 2000, isHeroVisible);
  const clientsCount = useCountUp(100, 2000, isHeroVisible);
  const supportCount = useCountUp(24, 1500, isHeroVisible);

  useLayoutEffect(() => {
    const intro = introRef.current;
    const content = contentRef.current;
    if (!intro || !content) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const context = gsap.context(() => {
      const plateTop = intro.querySelector<HTMLElement>('.steel-plate-top');
      const plateBottom = intro.querySelector<HTMLElement>('.steel-plate-bottom');
      const sparks = intro.querySelectorAll<HTMLElement>('.weld-spark');
      const logo = intro.querySelector<HTMLElement>('.steel-logo');
      const label = intro.querySelector<HTMLElement>('.steel-intro-label');

      if (reducedMotion) {
        gsap.set(intro, { autoAlpha: 0, pointerEvents: 'none' });
        gsap.set(content, { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.set(content, { autoAlpha: 0, y: 24 });
      gsap.set([plateTop, plateBottom], { xPercent: 0 });
      gsap.set(logo, { autoAlpha: 0, scale: 0.86, filter: 'blur(8px)' });
      gsap.set(label, { autoAlpha: 0, y: 10 });
      gsap.set(sparks, { autoAlpha: 0, scale: 0.2 });

      const timeline = gsap.timeline({ delay: 0.15 });
      timeline
        .to(sparks, { autoAlpha: 1, scale: 1, stagger: 0.04, duration: 0.18, ease: 'power2.out' })
        .to(sparks, { autoAlpha: 0, y: -18, stagger: 0.03, duration: 0.5, ease: 'power2.in' }, '<0.08')
        .to(logo, { autoAlpha: 1, scale: 1, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out' }, '-=0.25')
        .to(label, { autoAlpha: 1, y: 0, duration: 0.35, ease: 'power2.out' }, '-=0.35')
        .to(content, { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '+=0.15')
        .to(plateTop, { yPercent: -100, duration: 1.15, ease: 'power4.inOut' }, '+=0.1')
        .to(plateBottom, { yPercent: 100, duration: 1.15, ease: 'power4.inOut' }, '<')
        .to(intro, { autoAlpha: 0, pointerEvents: 'none', duration: 0.2 }, '-=0.15');
    }, intro);

    return () => context.revert();
  }, []);
  // --- 4. JSX Rendering ---
  return (
    <section
      ref={heroRef}
      id="home"
      className="relative flex h-[92vh] items-center justify-center overflow-hidden pt-20 sm:h-screen sm:pt-24 md:pt-28"
    >
      <div ref={introRef} className="steel-intro" aria-hidden="true">
        <div className="steel-plate steel-plate-top" />
        <div className="steel-plate steel-plate-bottom" />
        <div className="steel-intro-content">
          <div className="steel-logo-frame">
            <img src={companyLogo} alt="" className="steel-logo" />
          </div>
          <span className="steel-intro-label">PRECISION ENGINEERING / DEW</span>
        </div>
        <div className="weld-sparks">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((spark) => <span key={spark} className="weld-spark" />)}
        </div>
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`
        }}
      >
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.35),_transparent_38%),linear-gradient(135deg,rgba(15,23,42,0.9),rgba(15,23,42,0.75))]" />
      </div>

      <div ref={contentRef} className={`relative z-10 container mx-auto px-4 py-16 transition-all duration-1000 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
        <div className="mx-auto max-w-5xl text-center text-white">
          {/* Live Eyebrow Badge */}
          <div className={`mb-6 inline-flex items-center gap-2.5 rounded-full border border-orange-500/30 bg-slate-950/75 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-orange-300 shadow-xl shadow-orange-950/30 backdrop-blur-md sm:px-6 sm:text-sm ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
            </span>
            <span>{t('hero.badge')}</span>
          </div>

          {/* Main Headline */}
          <h1 className={`mb-6 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[1.08] transition-all duration-1000 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            <span className="block font-['Outfit'] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
              DEEPAM ENGINEERING WORKS.
            </span>
            <span className="mt-2 sm:mt-3 block font-['Outfit'] bg-gradient-to-r from-orange-400 via-amber-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-md">
              CHANGING THE MOVING WORLD.
            </span>
          </h1>

          {/* Description & Supporting Text */}
          <p className={`mx-auto max-w-3xl text-base sm:text-lg md:text-xl font-normal leading-relaxed text-slate-200/95 drop-shadow-sm ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
            {t('hero.description')}
          </p>

          <p className={`mx-auto mt-3 max-w-2xl text-xs sm:text-sm md:text-base font-light text-slate-300/80 leading-relaxed ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
            {t('hero.details')}
          </p>

          {/* CTA Action Buttons */}
          <div className={`mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' }))}
              className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 px-7 py-3.5 text-sm sm:text-base font-bold text-white shadow-xl shadow-orange-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/40 sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                <FileText size={18} />
                {t('hero.getQuote')}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            <button
              onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'products' }))}
              className="group w-full rounded-xl border border-white/20 bg-slate-900/60 px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/50 hover:bg-slate-900/90 sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                {t('hero.viewProducts')}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1 text-orange-400" />
              </span>
            </button>
          </div>

          {/* Key Stat Cards */}
          <div className={`mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:mt-14 sm:grid-cols-4 sm:gap-6 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 sm:p-5 backdrop-blur-md shadow-xl transition-all duration-300 hover:scale-[1.03] hover:border-orange-500/40 hover:bg-slate-950/60">
              <div className="mb-1 text-2xl sm:text-3xl font-black font-['Outfit'] bg-gradient-to-br from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">{containersCount}+</div>
              <div className="text-xs text-slate-300 md:text-sm font-medium">{t('hero.stat1')}</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 sm:p-5 backdrop-blur-md shadow-xl transition-all duration-300 hover:scale-[1.03] hover:border-orange-500/40 hover:bg-slate-950/60">
              <div className="mb-1 text-2xl sm:text-3xl font-black font-['Outfit'] bg-gradient-to-br from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">{yearsCount}+</div>
              <div className="text-xs text-slate-300 md:text-sm font-medium">{t('hero.stat2')}</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 sm:p-5 backdrop-blur-md shadow-xl transition-all duration-300 hover:scale-[1.03] hover:border-orange-500/40 hover:bg-slate-950/60">
              <div className="mb-1 text-2xl sm:text-3xl font-black font-['Outfit'] bg-gradient-to-br from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">{clientsCount}+</div>
              <div className="text-xs text-slate-300 md:text-sm font-medium">{t('hero.stat3')}</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 sm:p-5 backdrop-blur-md shadow-xl transition-all duration-300 hover:scale-[1.03] hover:border-orange-500/40 hover:bg-slate-950/60">
              <div className="mb-1 text-2xl sm:text-3xl font-black font-['Outfit'] bg-gradient-to-br from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">{supportCount}/7</div>
              <div className="text-xs text-slate-300 md:text-sm font-medium">{t('hero.stat4')}</div>
            </div>
          </div>
        </div>
      </div>

      <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 text-white transition-all duration-1000 delay-1200 sm:bottom-8 ${isHeroVisible ? 'opacity-100' : 'opacity-0'
        }`}>
        <div className="flex h-8 w-5 justify-center rounded-full border-2 border-white/30 sm:h-10 sm:w-6">
          <div className="mt-2 h-3 w-1 rounded-full bg-white animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;