// --- 1. Imports ---
import React from 'react';
import { MapPinned, Navigation, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import companyLogo from '../assets/logo/ChatGPT Image Mar 5, 2026, 01_53_39 PM.webp';

const Testimonials: React.FC = () => {
  const [testimonialsRef, isTestimonialsVisible] = useScrollAnimation();

  const networkPoints = [
    { name: 'Coimbatore', left: '13%', top: '26%' },
    { name: 'Tiruchengode', left: '27%', top: '38%' },
    { name: 'Tiruchirappalli', left: '39%', top: '47%' },
    { name: 'Karur', left: '48%', top: '26%' },
    { name: 'Namakkal', left: '20%', top: '49%' },
    { name: 'Erode', left: '9%', top: '42%' },
    { name: 'Salem', left: '26%', top: '61%' },
    { name: 'Perambalur', left: '47%', top: '59%' },
    { name: 'Chennai', left: '72%', top: '34%' },
    { name: 'Madurai', left: '56%', top: '72%' },
    { name: 'Dindigul', left: '61%', top: '58%' },
    { name: 'Bengaluru', left: '67%', top: '56%' }
  ];

  return (
    <section
      ref={testimonialsRef}
      className="relative overflow-hidden py-20 bg-[radial-gradient(circle_at_top,_rgba(14,116,144,0.08),_transparent_32%),linear-gradient(180deg,_#f8fafc_0%,_#eff6ff_100%)]"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          <div className={`mb-12 text-center transition-all duration-1000 ${
            isTestimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="mb-3 block text-lg font-bold uppercase tracking-[0.12em] text-blue-700">Network</span>
            <h2 className="mb-4 text-3xl font-black text-slate-900 md:text-5xl">
              Deepam Engineering Works across South India
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
              Our solutions reach transport businesses and industrial partners across the region, connecting dependable service, quality manufacturing, and long-term customer trust.
            </p>
          </div>

          <div className={`relative overflow-hidden rounded-[32px] border border-slate-200 bg-slate-950 p-4 shadow-[0_35px_90px_rgba(15,23,42,0.18)] md:p-8 ${
            isTestimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.18),_transparent_45%),linear-gradient(135deg,_rgba(15,23,42,0.96),_rgba(15,23,42,0.88))]" />

            <div className="relative grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative h-[440px] overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/80">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.22),_transparent_45%)]" />
                <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/25" />
                <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/15" />

                <svg viewBox="0 0 600 420" className="absolute inset-0 h-full w-full opacity-90">
                  <path d="M300 210 L120 110" stroke="rgba(110,231,183,0.5)" strokeWidth="2" fill="none" />
                  <path d="M300 210 L170 165" stroke="rgba(110,231,183,0.45)" strokeWidth="2" fill="none" />
                  <path d="M300 210 L210 195" stroke="rgba(110,231,183,0.4)" strokeWidth="2" fill="none" />
                  <path d="M300 210 L242 255" stroke="rgba(110,231,183,0.4)" strokeWidth="2" fill="none" />
                  <path d="M300 210 L150 200" stroke="rgba(110,231,183,0.35)" strokeWidth="2" fill="none" />
                  <path d="M300 210 L410 175" stroke="rgba(110,231,183,0.45)" strokeWidth="2" fill="none" />
                  <path d="M300 210 L440 150" stroke="rgba(110,231,183,0.45)" strokeWidth="2" fill="none" />
                  <path d="M300 210 L500 160" stroke="rgba(110,231,183,0.5)" strokeWidth="2" fill="none" />
                  <path d="M300 210 L500 240" stroke="rgba(110,231,183,0.5)" strokeWidth="2" fill="none" />
                  <path d="M300 210 L360 310" stroke="rgba(110,231,183,0.45)" strokeWidth="2" fill="none" />
                  <path d="M300 210 L430 300" stroke="rgba(110,231,183,0.4)" strokeWidth="2" fill="none" />
                  <path d="M300 210 L250 320" stroke="rgba(110,231,183,0.35)" strokeWidth="2" fill="none" />
                </svg>

                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                  <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-4 border-emerald-300 bg-white/10 shadow-[0_0_35px_rgba(110,231,183,0.6)] backdrop-blur-sm sm:h-32 sm:w-32">
                    <div className="absolute inset-2 animate-ping rounded-full border border-emerald-400/60" />
                    <img
                      src={companyLogo}
                      alt="Deepam Engineering Works logo"
                      className="relative h-full w-full rounded-full object-cover"
                    />
                  </div>
                </div>

                {networkPoints.map((point, index) => (
                  <div
                    key={index}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: point.left, top: point.top }}
                  >
                    <div className="relative flex items-center justify-center">
                      <div className="h-3.5 w-3.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)]" />
                      <div className="absolute h-9 w-9 animate-ping rounded-full border border-emerald-400/40" style={{ animationDelay: `${index * 0.45}s` }} />
                    </div>
                    <div className="mt-2 rounded-full border border-white/10 bg-slate-950/90 px-2.5 py-1 text-[10px] font-medium text-slate-100 shadow-[0_10px_25px_rgba(15,23,42,0.6)] backdrop-blur-sm sm:text-xs">
                      {point.name}
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative z-10 text-white">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
                  <Navigation size={14} />
                  South India Reach
                </div>

                <h3 className="mb-4 text-3xl font-black leading-tight text-white md:text-4xl">
                  Serving logistics and transport partners throughout the region.
                </h3>

                <p className="max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
                  From Coimbatore to Chennai, and across key transport corridors in Tamil Nadu and South India, Deepam Engineering Works continues to build strong customer relationships through reliable container solutions and responsive service.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <div className="mb-2 flex items-center gap-2 text-cyan-300">
                      <MapPinned size={16} />
                      <span className="text-sm font-semibold uppercase tracking-[0.08em]">Coverage</span>
                    </div>
                    <p className="text-sm text-slate-200">Coimbatore, Tiruchengode, Tiruchirappalli, Karur, Namakkal, Erode, Salem, Chennai, Madurai and other key Tamil Nadu hubs.</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <div className="mb-2 flex items-center gap-2 text-emerald-300">
                      <Sparkles size={16} />
                      <span className="text-sm font-semibold uppercase tracking-[0.08em]">Network</span>
                    </div>
                    <p className="text-sm text-slate-200">Trusted by transport companies across Tamil Nadu who rely on dependable, performance-focused engineering support.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;