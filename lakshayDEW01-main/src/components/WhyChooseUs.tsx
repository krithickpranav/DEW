// --- 1. Imports ---
import React from 'react';
import { Shield, Settings, Award, Headphones } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../contexts/LanguageContext';

const WhyChooseUs: React.FC = () => {
  // --- 2. Hooks ---
    const { t } = useLanguage();
  const [whyChooseRef, isWhyChooseVisible] = useScrollAnimation();
  const [featuresRef, visibleFeatures] = useStaggeredAnimation(4, 200);

  // --- 3. Data Definitions ---
  const features = [
    {
      icon: Shield,
      title: 'Durability',
      description: 'Built with premium materials and advanced welding techniques for maximum strength and longevity.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Settings,
      title: 'Customization',
      description: 'Tailored solutions to meet specific requirements with flexible design options.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'ISO certified processes and rigorous quality checks ensure superior standards.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Headphones,
      title: 'Support',
      description: '24/7 customer support with comprehensive after-sales service and maintenance.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  // --- 4. JSX Rendering ---
  return (
    <section 
      ref={whyChooseRef}
      className="py-16 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-12 transition-all duration-1000 ${
            isWhyChooseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="text-blue-600 font-semibold text-lg mb-2 block">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Excellence in Every Detail
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our commitment to quality, innovation, and customer satisfaction sets us apart 
              in the container manufacturing industry.
            </p>
          </div>

          {/* Features Grid */}
          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`group relative p-6 md:p-8 bg-white rounded-xl border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  visibleFeatures[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                {/* Gradient Background (appears on hover) */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-300">
                    <feature.icon 
                      className="text-slate-700 group-hover:text-white transition-colors duration-300" 
                      size={32} 
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-white mb-4 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-slate-600 group-hover:text-white/90 leading-relaxed transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-8 h-8 border-2 border-slate-200 group-hover:border-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className={`text-center mt-12 transition-all duration-1000 delay-800 ${
            isWhyChooseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <div className="inline-flex items-center bg-slate-100 rounded-full px-8 py-4">
              <div className="flex -space-x-2 mr-4">
                {[...Array(4)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-semibold"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="font-semibold text-slate-900">Join 100+ Satisfied Clients</div>
                <div className="text-xs md:text-sm text-slate-600">Containers & Cabins - Experience the Deepam Engineering difference</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;