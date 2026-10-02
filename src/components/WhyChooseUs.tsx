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
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden"
    >
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-14 transition-all duration-1000 ${
            isWhyChooseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Excellence in Every Detail
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Our commitment to quality, innovation, and customer satisfaction sets us apart
              in the container manufacturing industry.
            </p>
          </div>

          {/* Features Grid */}
          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative p-7 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 cursor-default ${
                  visibleFeatures[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="text-white" size={28} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Decorative corner dot */}
                <div className={`absolute top-5 right-5 w-2 h-2 rounded-full bg-gradient-to-br ${feature.color} opacity-60 group-hover:opacity-100 transition-opacity`} />
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className={`text-center mt-14 transition-all duration-1000 delay-800 ${
            isWhyChooseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <div className="inline-flex items-center bg-white/10 border border-white/15 rounded-2xl px-8 py-4 gap-4">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-slate-900 flex items-center justify-center text-white text-sm font-bold shadow"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="font-bold text-white text-sm">Join 100+ Satisfied Clients</div>
                <div className="text-xs text-slate-400">Experience the Deepam Engineering difference</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;