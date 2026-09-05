import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, CheckCircle2, Factory, Gauge, ShieldCheck } from 'lucide-react';

import containerImage from '../assets/container photos/32feet1.jpg';
import cabinImage from '../assets/cabin photos/aero1.jpg';
import workshopImage from '../assets/home page phot and logo/WhatsApp Image 2025-10-08 at 22.48.27_fb58ee87.jpg';

gsap.registerPlugin(ScrollTrigger);

const stages = [
  {
    number: '01',
    title: 'Material intelligence',
    description: 'Every build begins with measured steel, verified dimensions and a clear engineering brief.',
    image: workshopImage,
    icon: Gauge,
  },
  {
    number: '02',
    title: 'Precision fabrication',
    description: 'Frames, panels and reinforcements come together with repeatable workshop discipline.',
    image: containerImage,
    icon: Factory,
  },
  {
    number: '03',
    title: 'Built for the road',
    description: 'The finished body is checked for strength, fit and the confidence to carry real work.',
    image: cabinImage,
    icon: ShieldCheck,
  },
];

const ManufacturingProcess: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const context = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.process-card');
      const line = section.querySelector<HTMLElement>('.process-line-fill');

      if (reduceMotion) {
        gsap.set(cards, { autoAlpha: 1, y: 0 });
        if (line) gsap.set(line, { scaleX: 1 });
        return;
      }

      gsap.set(cards, { autoAlpha: 0, y: 48 });
      gsap.set(line, { scaleX: 0, transformOrigin: 'left center' });

      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 72%',
          end: 'bottom 55%',
          scrub: 0.7,
        },
      })
        .to(line, { scaleX: 1, ease: 'none', duration: 1 })
        .to(cards, { autoAlpha: 1, y: 0, stagger: 0.18, ease: 'power2.out', duration: 0.7 }, 0.08);
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} className="process-section relative overflow-hidden bg-slate-950 py-24 text-white sm:py-32">
      <div className="process-blueprint absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="industrial-kicker">THE DEW METHOD / 03 STAGES</p>
            <h2 className="mt-4 max-w-xl text-3xl font-black tracking-tight sm:text-5xl">
              Raw material into road-ready confidence.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            From the first cut to the final inspection, our process is built around control. The result is fabrication that looks precise, works hard and lasts beyond the handover.
          </p>
        </div>

        <div ref={trackRef} className="relative">
          <div className="process-line absolute left-0 right-0 top-8 hidden h-px bg-white/15 md:block" aria-hidden="true">
            <div className="process-line-fill h-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.8)]" />
          </div>
          <div className="grid gap-8 md:grid-cols-3 md:gap-6">
            {stages.map((stage) => {
              const Icon = stage.icon;
              return (
                <article key={stage.number} className="process-card group relative">
                  <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl">
                    <img src={stage.image} alt="" loading="lazy" className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
                    <span className="absolute bottom-4 left-4 font-mono text-xs tracking-[0.3em] text-cyan-200">STAGE {stage.number}</span>
                  </div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/40 bg-slate-950 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                      <Icon size={18} />
                    </div>
                    <div className="h-px flex-1 bg-white/10 md:hidden" />
                    <span className="font-mono text-xs tracking-[0.3em] text-slate-500">{stage.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{stage.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-400">{stage.description}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-16 flex items-center gap-3 border-t border-white/10 pt-6 text-sm text-slate-400">
          <CheckCircle2 size={18} className="text-emerald-400" />
          <span>Measured. Fabricated. Inspected.</span>
          <ArrowDown size={16} className="ml-auto rotate-[-45deg] text-cyan-300" />
        </div>
      </div>
    </section>
  );
};

export default ManufacturingProcess;
