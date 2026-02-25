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
      className="py-16 bg-slate-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-12 transition-all duration-1000 ${
            isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="text-blue-600 font-semibold text-lg mb-2 block">{t('about.label')}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t('about.title')}
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t('about.description')}
            </p>
          </div>

          <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 transition-all duration-1000 delay-300 ${
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-100">
                <img
                  src={ourStoryImage}
                  alt="Deepam Engineering Workshop"
                  className="w-full h-[350px] md:h-[500px] object-contain object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white p-3 sm:p-6 rounded-xl shadow-xl border border-slate-100">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Award className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-lg sm:text-2xl font-bold text-slate-900">{t('about.yearsCount')}</div>
                    <div className="text-slate-600 text-xs md:text-sm">{t('about.yearsBadge')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features - Enhanced with Glassmorphism */}
          <div ref={featuresRef} className="grid md:grid-cols-3 gap-6">
            <div className={`relative text-center p-6 md:p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group border border-slate-100 hover:border-blue-200 hover:-translate-y-2 ${
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

            <div className={`relative text-center p-6 md:p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group border border-slate-100 hover:border-green-200 hover:-translate-y-2 ${
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

            <div className={`relative text-center p-6 md:p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group border border-slate-100 hover:border-purple-200 hover:-translate-y-2 ${
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