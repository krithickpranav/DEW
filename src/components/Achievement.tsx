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
    aspectRatio: '1162 / 1353',
  },
  {
    src: cabinImage03,
    title: 'Aerodynamic Cabin',
    tag: 'Aero Efficiency',
    specs: 'Wind-tunnel optimized · Fuel saving design',
    aspectRatio: '1280 / 1086',
  },
  {
    src: cabinImage02,
    title: 'Straight Type Commercial',
    tag: 'Heavy Duty',
    specs: 'Full-width sleeper · Durable chassis mount',
    aspectRatio: '1110 / 1417',
  },
];

const Achievement: React.FC = () => {
  // --- 4. Data Definitions ---
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

  // --- 5. JSX Rendering ---
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What We Build
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              A quick overview of our core products. Explore full specs and models on the Products page.
            </p>
          </div>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 gap-8">
            {categories.map((cat, index) => (
              <div
                key={cat.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-slate-100"
              >
                {/* Image Showcase Section */}
                <div className="bg-slate-50/50 p-4 sm:p-6">
                  {cat.id === 'lorry-cabins' ? (
                    <div className="w-full">
                      <div className="columns-1 md:columns-3 gap-5 space-y-5 w-full items-start">
                        {cat.cabins?.map((cabin, idx) => (
                          <div
                            key={idx}
                            className="group/cabin break-inside-avoid flex flex-col bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                          >
                            <div className="p-2 sm:p-3 bg-slate-50 flex items-center justify-center relative overflow-hidden">
                              <div
                                className="relative w-full overflow-hidden rounded-xl bg-slate-100 flex items-center justify-center"
                              >
                                <img
                                  src={cabin.src}
                                  alt={cabin.title}
                                  className="w-full h-auto object-cover group-hover/cabin:scale-110 transition-transform duration-700 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover/cabin:opacity-100 transition-opacity duration-500" />
                              </div>
                            </div>

                            <div className="p-4 flex-1 flex flex-col justify-between border-t border-slate-100 bg-white">
                              <div>
                                <div className="flex items-center justify-between mb-2">
                                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100 uppercase tracking-wider">
                                    <CheckCircle2 size={12} className="text-blue-500" />
                                    {cabin.tag}
                                  </span>
                                  <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">
                                    Mod 0{idx + 1}
                                  </span>
                                </div>
                                <h4 className="text-base font-bold text-slate-900 group-hover/cabin:text-blue-600 transition-colors duration-300">
                                  {cabin.title}
                                </h4>
                                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                                  {cabin.specs}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="w-full">
                      <div className="bg-white rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden group/container">
                        <div className="p-3 bg-slate-50 flex items-center justify-center relative overflow-hidden">
                          <div 
                            className="relative w-full overflow-hidden rounded-2xl bg-slate-100 flex items-center justify-center"
                          >
                            <img
                              src={cat.image}
                              alt={cat.title}
                              className="w-full h-auto object-cover group-hover/container:scale-105 transition-transform duration-700 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover/container:opacity-100 transition-opacity duration-500" />
                          </div>
                        </div>

                        <div className="px-6 py-4 bg-white border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs">
                          <div className="flex items-center gap-2.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse ring-4 ring-emerald-500/20"></span>
                            <span className="font-bold text-slate-800 text-sm">
                              Heavy-Duty Commercial Cargo Container
                            </span>
                            <span className="text-slate-300 hidden sm:inline">|</span>
                            <span className="text-slate-500 hidden sm:inline font-medium">
                              Engineered for high volume payload and long-haul transport
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-blue-600 font-bold bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">
                            <Package size={14} />
                            <span>10ft · 20/24ft · 32ft Available</span>
                          </div>
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
                      <h3 className="text-2xl font-bold text-slate-900 group-hover:text-orange-500 transition-colors">
                        {cat.title}
                      </h3>
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
                        className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-orange-50/60 hover:border-orange-200/70 transition-colors"
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
          <div className="text-center mt-12">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'products' }))}
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
            >
              View All Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
