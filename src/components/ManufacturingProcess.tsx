import React from 'react';
import { ArrowDown, CheckCircle2, Factory, Gauge, ShieldCheck } from 'lucide-react';

import stage01Image from '../assets/home page phot and logo/stage01.jpeg';
import stage02Image from '../assets/home page phot and logo/stage02.jpeg';
import stage03Image from '../assets/home page phot and logo/stage03.jpeg';

const stages = [
  {
    number: '01',
    title: 'Material intelligence',
    description: 'Every build begins with measured steel, verified dimensions and a clear engineering brief.',
    image: stage01Image,
    icon: Gauge,
  },
  {
    number: '02',
    title: 'Precision fabrication',
    description: 'Frames, panels and reinforcements come together with repeatable workshop discipline.',
    image: stage02Image,
    icon: Factory,
  },
  {
    number: '03',
    title: 'Built for the road',
    description: 'The finished body is checked for strength, fit and the confidence to carry real work.',
    image: stage03Image,
    icon: ShieldCheck,
  },
];

const ManufacturingProcess: React.FC = () => {
  return (
    <section className="process-section relative overflow-hidden bg-slate-950 py-24 text-white sm:py-32">
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

        <div className="relative">
          <div className="process-line absolute left-0 right-0 top-8 hidden h-px bg-white/15 md:block" aria-hidden="true">
            <div className="process-line-fill h-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.8)]" />
          </div>
          <div className="grid gap-8 md:grid-cols-3 md:gap-6">
            {stages.map((stage) => {
              const Icon = stage.icon;
              return (
                <article key={stage.number} className="process-card group relative transition-all duration-500 hover:-translate-y-2">
                  <div className="relative mb-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl transition-shadow duration-500 group-hover:shadow-[0_20px_40px_rgba(34,211,238,0.15)]" style={{ aspectRatio: '4/3' }}>
                    <img
                      src={stage.image}
                      alt={stage.title}
                      loading="eager"
                      className="h-full w-full object-cover object-center opacity-100 transition duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-4 font-mono text-xs font-bold tracking-[0.3em] text-cyan-200 drop-shadow">STAGE {stage.number}</span>
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
