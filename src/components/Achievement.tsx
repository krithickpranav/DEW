// --- 1. Imports ---
import React from 'react';
import { Package, Truck, Settings, Wind, Layers, DoorOpen, CheckCircle2, ArrowRight, Eye } from 'lucide-react';

// --- 2. Asset Imports ---
const containersImage = new URL('../assets/container photos/homepagecontainerrr.webp', import.meta.url).href;
const cabinImage03 = new URL('../assets/home page phot and logo/homepagecabin image03.jpeg', import.meta.url).href;
const cabinImage01 = new URL('../assets/home page phot and logo/homepagecabin image01.jpeg', import.meta.url).href;
const cabinImage02 = new URL('../assets/home page phot and logo/homepagecabin image02.jpeg', import.meta.url).href;

const cabinList = [
  {
    src: cabinImage01,
    title: 'Curved Type Air Cutter',
    tag: 'Reinforced Shell',
    specs: 'High-strength steel · Ergonomic interior',
    modelId: 'curved-air-cutter',
  },
  {
    src: cabinImage03,
    title: 'Aerodynamic Cabin',
    tag: 'Aero Efficiency',
    specs: 'Wind-tunnel optimized · Fuel saving design',
    modelId: 'aerodynamic',
  },
  {
    src: cabinImage02,
    title: 'Straight Type Commercial',
    tag: 'Heavy Duty',
    specs: 'Full-width sleeper · Durable chassis mount',
    modelId: 'straight-type',
  },
];

// Helper: dispatch a deep-link navigate event
const navigateTo = (detail: string) => {
  window.dispatchEvent(new CustomEvent('navigate', { detail }));
};

const Achievement: React.FC = () => {
  const categories = [
    {
      id: 'containers',
      title: 'Container Solutions',
      description: 'Durable, customizable containers for logistics, export and industrial use.',
      icon: Package,
      items: [
        { icon: Layers,   text: '10 ft, 20/24 ft, 32 ft models', deepLink: null },
        { icon: DoorOpen, text: 'All Door Container',             deepLink: 'products#containers:all-door' },
        { icon: Settings, text: 'Customized Containers',          deepLink: 'products#containers:customized' },
        { icon: Truck,    text: 'Export RIG Support',             deepLink: 'products#containers:export-rig' },
      ],
      image: containersImage,
      // Quick-pick size buttons for the "10ft, 20/24ft, 32ft" item
      sizeLinks: [
        { label: '10 ft',     deepLink: 'products#containers:10ft' },
        { label: '20/24 ft',  deepLink: 'products#containers:20-24ft' },
        { label: '32 ft',     deepLink: 'products#containers:32ft' },
      ],
    },
    {
      id: 'lorry-cabins',
      title: 'Lorry Cabins',
      description: 'High-performance cabins designed for strength, comfort, and aerodynamic efficiency.',
      icon: Truck,
      items: [
        { icon: Truck,    text: 'Straight Type Cabin',                deepLink: 'products#lorry-cabins:straight-type' },
        { icon: Wind,     text: 'Aerodynamic Cabin',                  deepLink: 'products#lorry-cabins:aerodynamic' },
        { icon: DoorOpen, text: 'Cabin with Karur Grill',             deepLink: 'products#lorry-cabins:karur-grill' },
        { icon: DoorOpen, text: 'Cabin with Centre Air Glass',        deepLink: 'products#lorry-cabins:centre-air-glass' },
        { icon: Settings, text: 'Curved Type Air Cutter Vehicle',     deepLink: 'products#lorry-cabins:curved-air-cutter' },
      ],
      cabins: cabinList,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-widest mb-4">
              Our Products
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              What We Build
            </h2>
            <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
              A quick overview of our core products. Explore full specs and models on the Products page.
            </p>
          </div>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 gap-10">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100"
              >
                {/* Image Showcase Section */}
                <div className="p-4 sm:p-6 bg-slate-50/60">
                  {cat.id === 'lorry-cabins' ? (
                    /* --- Cabin: 3-column grid, each image is CLICKABLE --- */
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {cat.cabins?.map((cabin, idx) => (
                        <div
                          key={idx}
                          onClick={() => navigateTo(`products#lorry-cabins:${cabin.modelId}`)}
                          className="group/cabin bg-white rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-xl transition-all duration-400 overflow-hidden cursor-pointer"
                        >
                          {/* Image — uncropped, full view with matching alignment */}
                          <div className="bg-slate-100/80 rounded-t-2xl overflow-hidden flex items-center justify-center p-3 min-h-[260px] relative">
                            <img
                              src={cabin.src}
                              alt={cabin.title}
                              style={{ opacity: 1, display: 'block' }}
                              className="w-full h-auto max-h-[290px] object-contain group-hover/cabin:scale-105 transition-transform duration-500 ease-out"
                            />
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-slate-900/0 group-hover/cabin:bg-slate-900/30 transition-all duration-300 flex items-center justify-center">
                              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/95 text-slate-900 font-bold text-xs shadow-xl opacity-0 group-hover/cabin:opacity-100 translate-y-2 group-hover/cabin:translate-y-0 transition-all duration-300">
                                <Eye size={14} className="text-orange-500" />
                                View Details
                              </span>
                            </div>
                          </div>

                          {/* Caption */}
                          <div className="p-4 border-t border-slate-100">
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100 uppercase tracking-wider">
                                <CheckCircle2 size={10} className="text-blue-500" />
                                {cabin.tag}
                              </span>
                              <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">
                                Mod 0{idx + 1}
                              </span>
                            </div>
                            <h4 className="text-sm font-bold text-slate-900 group-hover/cabin:text-blue-600 transition-colors duration-200">
                              {cabin.title}
                            </h4>
                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">{cabin.specs}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* --- Container: single image, full natural width --- */
                    <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden group/container">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        style={{ opacity: 1, display: 'block' }}
                        className="w-full h-auto group-hover/container:scale-[1.02] transition-transform duration-500 ease-out"
                      />
                      <div className="px-5 py-3.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ring-2 ring-emerald-500/20" />
                          <span className="font-bold text-slate-800 text-sm">Heavy-Duty Commercial Cargo Container</span>
                          <span className="text-slate-300 hidden sm:inline">|</span>
                          <span className="text-slate-500 hidden sm:inline font-medium">
                            Engineered for high volume payload and long-haul transport
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-blue-600 font-bold bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">
                          <Package size={13} />
                          <span>10ft · 20/24ft · 32ft Available</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Text & Features Section */}
                <div className="p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                        <cat.icon size={22} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">{cat.title}</h3>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 bg-orange-50 text-orange-600 rounded-full w-fit border border-orange-200/50">
                      Certified Build Standards
                    </span>
                  </div>
                  <p className="text-slate-600 mb-6 text-base leading-relaxed">{cat.description}</p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                    {cat.items.map((it, i) => {
                      // First container item gets size-pick buttons instead of a single link
                      const isSizeRow = cat.id === 'containers' && i === 0;
                      return (
                        <li key={i}>
                          {isSizeRow ? (
                            /* Container size quick-picks */
                            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                              <div className="flex items-center space-x-2 mb-2">
                                <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-500 flex items-center justify-center shrink-0">
                                  <it.icon size={16} />
                                </div>
                                <span className="text-slate-700 text-sm font-medium">Container Sizes</span>
                              </div>
                              <div className="flex flex-wrap gap-1.5">
                                {cat.sizeLinks?.map((s) => (
                                  <button
                                    key={s.label}
                                    onClick={() => navigateTo(s.deepLink)}
                                    className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold rounded-lg bg-orange-50 text-orange-600 border border-orange-200/60 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-200 cursor-pointer"
                                  >
                                    {s.label}
                                    <ArrowRight size={10} />
                                  </button>
                                ))}
                              </div>
                            </div>
                          ) : (
                            /* Regular clickable feature item */
                            <button
                              onClick={() => it.deepLink && navigateTo(it.deepLink)}
                              className={`w-full flex items-center space-x-3 p-3 rounded-xl bg-slate-50 border border-slate-100 transition-all duration-200 text-left ${
                                it.deepLink
                                  ? 'hover:bg-orange-50/60 hover:border-orange-200/70 cursor-pointer group/item'
                                  : ''
                              }`}
                            >
                              <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-500 flex items-center justify-center shrink-0">
                                <it.icon size={16} />
                              </div>
                              <span className="text-slate-700 text-sm font-medium flex-1">{it.text}</span>
                              {it.deepLink && (
                                <ArrowRight size={14} className="text-slate-300 group-hover/item:text-orange-500 group-hover/item:translate-x-0.5 transition-all duration-200" />
                              )}
                            </button>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-14">
            <button
              onClick={() => navigateTo('products')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-3.5 rounded-2xl font-bold text-base hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/35 hover:-translate-y-0.5"
            >
              View All Products
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
