// --- 1. Imports ---
import React from 'react';
import { Package, Truck, Settings, Wind, Layers, DoorOpen, CheckCircle2 } from 'lucide-react';

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
  },
  {
    src: cabinImage03,
    title: 'Aerodynamic Cabin',
    tag: 'Aero Efficiency',
    specs: 'Wind-tunnel optimized · Fuel saving design',
  },
  {
    src: cabinImage02,
    title: 'Straight Type Commercial',
    tag: 'Heavy Duty',
    specs: 'Full-width sleeper · Durable chassis mount',
  },
];

const Achievement: React.FC = () => {
  const categories = [
    {
      id: 'containers',
      title: 'Container Solutions',
      description: 'Durable, customizable containers for logistics, export and industrial use.',
      icon: Package,
      items: [
        { icon: Layers, text: '10 ft, 20/24 ft, 32 ft models' },
        { icon: DoorOpen, text: 'All Door Container' },
        { icon: Settings, text: 'Customized Containers' },
        { icon: Truck, text: 'Export RIG Support' },
      ],
      image: containersImage,
    },
    {
      id: 'lorry-cabins',
      title: 'Lorry Cabins',
      description: 'High-performance cabins designed for strength, comfort, and aerodynamic efficiency.',
      icon: Truck,
      items: [
        { icon: Truck, text: 'Straight Type Cabin' },
        { icon: Wind, text: 'Aerodynamic Cabin' },
        { icon: DoorOpen, text: 'Cabin with Karur Grill' },
        { icon: DoorOpen, text: 'Cabin with Centre Air Glass' },
        { icon: Settings, text: 'Curved Type Air Cutter Vehicle' },
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
                    /* --- Cabin: 3-column grid, each image shows fully --- */
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {cat.cabins?.map((cabin, idx) => (
                        <div
                          key={idx}
                          className="group/cabin bg-white rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-xl transition-all duration-400 overflow-hidden"
                        >
                          {/* Image — no fixed height, shows at natural ratio */}
                          <div className="bg-slate-100 rounded-t-2xl overflow-hidden">
                            <img
                              src={cabin.src}
                              alt={cabin.title}
                              style={{ opacity: 1, display: 'block' }}
                              className="w-full h-auto group-hover/cabin:scale-105 transition-transform duration-500 ease-out"
                            />
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
                    {cat.items.map((it, i) => (
                      <li
                        key={i}
                        className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-orange-50/60 hover:border-orange-200/70 transition-colors duration-200"
                      >
                        <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-500 flex items-center justify-center shrink-0">
                          <it.icon size={16} />
                        </div>
                        <span className="text-slate-700 text-sm font-medium">{it.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-14">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'products' }))}
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
