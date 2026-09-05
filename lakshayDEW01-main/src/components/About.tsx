// --- 1. Imports ---
import React from 'react';
import { Award, Users, Target, Zap } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../contexts/LanguageContext';
import ourStoryImage from '../assets/home page phot and logo/WhatsApp Image 2025-10-08 at 22.48.27_fb58ee87.jpg';

const About: React.FC = () => {
  // --- 2. Hooks ---
  const [aboutRef, isAboutVisible] = useScrollAnimation();
    const { t } = useLanguage();
  const [featuresRef, visibleFeatures] = useStaggeredAnimation(3, 200);

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

          <div className={`mb-12 grid items-center gap-8 lg:grid-cols-2 lg:gap-12 transition-all duration-1000 delay-300 ${
            isAboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            {/* Content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{t('about.storyLabel')}</h3>
              <p className="text-base md:text-lg text-slate-700 mb-4 leading-relaxed">
                {t('about.storyPara1')}
              </p>
              <p className="text-base md:text-lg text-slate-700 mb-6 leading-relaxed">
                {t('about.storyPara2')}
              </p>

              {/* Mission & Vision */}
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2">{t('about.mission')}</h4>
                    <p className="text-sm md:text-base text-slate-700">
                      {t('about.missionDesc')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2">{t('about.vision')}</h4>
                    <p className="text-sm md:text-base text-slate-700">
                      {t('about.visionDesc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className={`relative transition-all duration-1000 delay-500 ${
              isAboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-100 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
                <img
                  src={ourStoryImage}
                  alt="Deepam Engineering Workshop"
                  className="h-[350px] w-full object-cover object-center md:h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
              </div>
              
              <div className="absolute -bottom-5 -left-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-[0_25px_50px_rgba(15,23,42,0.12)] sm:-bottom-6 sm:-left-6 sm:p-5">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 sm:h-12 sm:w-12">
                    <Award className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-lg font-black text-slate-900 sm:text-2xl">{t('about.yearsCount')}</div>
                    <div className="text-xs text-slate-600 md:text-sm">{t('about.yearsBadge')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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