// --- 1. Imports ---
import React from 'react';
import { Package, Truck, Settings, Wind, Layers, DoorOpen } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

// --- 2. Asset Imports ---
const containersImage = new URL('../assets/container photos/32feet1.jpg', import.meta.url).href;
const lorryCabinImage = new URL('../assets/cabin photos/straighht1.jpg', import.meta.url).href;
const aeroCabinImage = new URL('../assets/cabin photos/aero1.jpg', import.meta.url).href;
const curvedCabinImage = new URL('../assets/cabin photos/curvedtpe1.jpg', import.meta.url).href;

const Achievement: React.FC = () => {
  // --- 3. Hooks ---
  const [achievementRef, isAchievementVisible] = useScrollAnimation();
  const [cardsRef, visibleCards] = useStaggeredAnimation(2, 150);

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
      additionalImages: [lorryCabinImage, aeroCabinImage, curvedCabinImage],
    },
  ];

  // --- 5. JSX Rendering ---
  return (
    <section ref={achievementRef} className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-12 transition-all duration-1000 ${
              isAchievementVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What We Build
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              A quick overview of our core products. Explore full specs and models on the Products page.
            </p>
          </div>

          {/* Overview Cards */}
          <div ref={cardsRef} className="grid grid-cols-1 gap-6">
            {categories.map((cat, index) => (
              <div
                key={cat.id}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                  visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                {/* Image Section */}
                <div className="relative bg-slate-100">
                  {cat.id === 'lorry-cabins' ? (
                    <div className="w-full p-4">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
                        {cat.additionalImages?.map((img, idx) => (
                          <div
                            key={idx} 
                            className="relative w-full h-[28rem] md:h-[32rem] lg:h-[36rem] overflow-hidden rounded-xl cursor-pointer transition-transform duration-500 hover:scale-105 bg-slate-100"
                          >
                            <img
                              src={img}
                              alt={`${cat.title} ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-[28rem] md:h-[32rem] lg:h-[36rem] bg-slate-100">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}

                  {/* Category Icon */}
                  <div className="absolute top-5 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <cat.icon className="text-orange-500" size={24} />
                  </div>
                </div>

                {/* Text Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-500 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{cat.description}</p>

                  <ul className="grid sm:grid-cols-2 gap-3">
                    {cat.items.map((it, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <it.icon className="text-orange-500 mt-0.5" size={18} />
                        <span className="text-slate-700">{it.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            className={`text-center mt-12 transition-all duration-1000 delay-800 ${
              isAchievementVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
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
