// --- 1. Imports ---
import React, { useState } from 'react';
import { Award, Users, Target, Zap, ShieldCheck, ZoomIn, Sparkles } from 'lucide-react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../contexts/LanguageContext';
import companyCardImage from '../assets/home page phot and logo/company card.jpeg';

const About: React.FC = () => {
  // --- 2. Hooks & State ---
  const [aboutRef, isAboutVisible] = useScrollAnimation();
  const { t } = useLanguage();
  const [featuresRef, visibleFeatures] = useStaggeredAnimation(3, 200);
  const [isCardLightboxOpen, setIsCardLightboxOpen] = useState(false);

  // --- 3. JSX Rendering ---
  return (
    <section 
      ref={aboutRef}
      id="about" 
      className="py-20 bg-transparent"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`mb-12 text-center transition-all duration-1000 ${
            isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="mb-3 block text-lg font-bold tracking-[0.12em] text-blue-700 uppercase">{t('about.label')}</span>
            <h2 className="mb-4 text-3xl font-black text-slate-900 md:text-5xl">
              {t('about.title')}
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
              {t('about.description')}
            </p>
          </div>

          <div className={`mb-16 grid items-center gap-10 lg:grid-cols-12 lg:gap-12 transition-all duration-1000 delay-300 ${
            isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Content Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-bold uppercase tracking-wider w-fit mb-4">
                <Sparkles size={14} className="text-blue-600" />
                <span>{t('about.storyLabel')}</span>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-4 tracking-tight leading-snug">
                Precision Engineering & Heavy-Duty Craftsmanship
              </h3>
              <p className="text-base md:text-lg text-slate-700 mb-4 leading-relaxed">
                {t('about.storyPara1')}
              </p>
              <p className="text-base md:text-lg text-slate-700 mb-6 leading-relaxed">
                {t('about.storyPara2')}
              </p>

              {/* Mission & Vision Cards */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="group rounded-2xl border border-slate-200/80 bg-white/70 p-4 sm:p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-md">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <Target size={22} />
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-slate-900 mb-1.5">{t('about.mission')}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t('about.missionDesc')}
                  </p>
                </div>

                <div className="group rounded-2xl border border-slate-200/80 bg-white/70 p-4 sm:p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-indigo-200 hover:bg-white hover:shadow-md">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                    <Zap size={22} />
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-slate-900 mb-1.5">{t('about.vision')}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t('about.visionDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Company Card Showcase Column (5 cols) */}
            <div className={`lg:col-span-5 flex justify-center transition-all duration-1000 delay-500 ${
              isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="relative w-full max-w-[390px] sm:max-w-[420px]">
                {/* Ambient glow behind card */}
                <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-blue-600/20 via-sky-400/20 to-emerald-500/20 rounded-[36px] blur-2xl opacity-75 group-hover:opacity-100 transition-all duration-700 pointer-events-none -z-10" />

                {/* ISO Certified Floating Badge - Top Right */}
                <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-3 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-700 to-indigo-600 text-white text-xs font-bold shadow-lg shadow-blue-600/30 tracking-wide uppercase">
                  <ShieldCheck size={14} className="text-blue-200" />
                  <span>ISO 9001:2015</span>
                </div>

                {/* Main Card Frame */}
                <div 
                  onClick={() => setIsCardLightboxOpen(true)}
                  className="group relative cursor-pointer overflow-hidden rounded-[26px] border border-slate-200/90 bg-white/90 p-2 sm:p-2.5 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.18)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-300 hover:shadow-[0_35px_70px_-15px_rgba(37,99,235,0.22)]"
                  title="Click to view full card"
                >
                  {/* Card Aspect Ratio Container (2:3) */}
                  <div className="relative w-full aspect-[2/3] overflow-hidden rounded-[18px] bg-slate-900">
                    <img
                      src={companyCardImage}
                      alt="Deepam Engineering Works Corporate Card"
                      style={{ opacity: 1 }}
                      className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    
                    {/* Modern hover overlay with zoom pill */}
                    <div className="absolute inset-0 bg-slate-950/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md text-slate-900 font-bold text-xs sm:text-sm shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <ZoomIn size={16} className="text-blue-600" />
                        <span>Click to Enlarge</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Years Experience Floating Badge - Bottom Left */}
                <div className="absolute -bottom-4 -left-3 sm:-bottom-5 sm:-left-5 z-20 rounded-2xl border border-slate-100/90 bg-white/95 p-3 sm:p-4 shadow-[0_20px_40px_rgba(15,23,42,0.14)] backdrop-blur-md transition-transform duration-300 hover:scale-105">
                  <div className="flex items-center space-x-3 sm:space-x-3.5">
                    <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-md shadow-blue-500/30">
                      <Award className="text-white" size={22} />
                    </div>
                    <div>
                      <div className="text-lg sm:text-xl font-black text-slate-900 leading-tight">{t('about.yearsCount')}</div>
                      <div className="text-xs text-slate-600 font-medium">{t('about.yearsBadge')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lightbox for zooming in on the company card */}
          {isCardLightboxOpen && (
            <Lightbox
              open={isCardLightboxOpen}
              close={() => setIsCardLightboxOpen(false)}
              slides={[{ src: companyCardImage }]}
            />
          )}

          {/* Key Features - Enhanced with Glassmorphism */}
          <div ref={featuresRef} className="grid md:grid-cols-3 gap-6">
            <div className={`group relative rounded-2xl border border-slate-200 bg-white/80 p-6 text-center shadow-[0_18px_45px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_30px_60px_rgba(37,99,235,0.12)] md:p-8 ${
              visibleFeatures[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                  <Award className="text-blue-600 group-hover:scale-110 transition-transform" size={32} />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{t('about.qualityAssurance')}</h4>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  {t('about.qualityDesc')}
                </p>
              </div>
            </div>

            <div className={`group relative rounded-2xl border border-slate-200 bg-white/80 p-6 text-center shadow-[0_18px_45px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-[0_30px_60px_rgba(34,197,94,0.12)] md:p-8 ${
              visibleFeatures[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                  <Users className="text-green-600 group-hover:scale-110 transition-transform" size={32} />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-4 group-hover:text-green-600 transition-colors">{t('about.expertise')}</h4>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  {t('about.expertiseDesc')}
                </p>
              </div>
            </div>

            <div className={`group relative rounded-2xl border border-slate-200 bg-white/80 p-6 text-center shadow-[0_18px_45px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-violet-200 hover:shadow-[0_30px_60px_rgba(139,92,246,0.12)] md:p-8 ${
              visibleFeatures[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                  <Zap className="text-purple-600 group-hover:scale-110 transition-transform" size={32} />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors">{t('about.innovation')}</h4>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  {t('about.innovationDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;