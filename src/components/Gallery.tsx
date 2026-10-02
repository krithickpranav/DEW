// --- 1. Imports ---
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import { ZoomIn, Sparkles, CheckCircle2 } from 'lucide-react';
import "yet-another-react-lightbox/styles.css";

// --- 2. Container Image Imports (Optimized WebP) ---
import ten1 from '../assets/container photos/10 Feet Container01.webp';
import ten2 from '../assets/container photos/10 Feet Container02.webp';
import ten3 from '../assets/container photos/10 Feet Container03.webp';

import twenty1 from '../assets/container photos/20 & 24 Feet Container01.webp';
import twenty2 from '../assets/container photos/20 & 24 Feet Container02.webp';
import twenty3 from '../assets/container photos/20 & 24 Feet Container03.webp';
import twenty4 from '../assets/container photos/20 & 24 Feet Container.04.webp';
import twenty5 from '../assets/container photos/20 & 24 Feet Container.05.webp';
import twenty6 from '../assets/container photos/20 & 24 Feet Container.06.webp';
import twenty7 from '../assets/container photos/20 & 24 Feet Container07.webp';

import thirtytwo1 from '../assets/container photos/32feetcontainer01.webp';
import thirtytwo2 from '../assets/container photos/32feetcontainer02.webp';
import thirtytwo3 from '../assets/container photos/32feetcontainer03.webp';
import thirtytwo4 from '../assets/container photos/32feetcontainer04.webp';
import thirtytwo5 from '../assets/container photos/32feetcontainer05.webp';
import thirtytwo6 from '../assets/container photos/32feetcontainer06.webp';
import thirtytwo7 from '../assets/container photos/32feetcontainer07.webp';
import thirtytwo8 from '../assets/container photos/32feetcontainer08.webp';

import rig1 from '../assets/container photos/exportrig1.webp';
import rig2 from '../assets/container photos/exportrig2.webp';
import rig3 from '../assets/container photos/exportrig3.webp';
import rig4 from '../assets/container photos/exportrig4.webp';
import rig5 from '../assets/container photos/exportrig5.webp';

import alldorr1 from '../assets/container photos/alldorr1.webp';
import alldoor2 from '../assets/container photos/alldoor2.webp';
import alldoor3 from '../assets/container photos/alldoor3.webp';

// --- 3. Lorry Cabin Image Imports (Optimized WebP) ---
import straightNew1 from '../assets/cabin photos/Straight Type Cabin01.webp';
import straightNew2 from '../assets/cabin photos/Straight Type Cabin02.webp';
import straightNew3 from '../assets/cabin photos/Straight Type Cabin03.webp';

import aeroNew1 from '../assets/cabin photos/Aerodynamic Cabin01.webp';
import aeroNew2 from '../assets/cabin photos/Aerodynamic Cabin02.webp';
import aeroNew3 from '../assets/cabin photos/Aerodynamic Cabin03.webp';

import karurNew1 from '../assets/cabin photos/Cabin with Karur Grill01.webp';
import karurNew2 from '../assets/cabin photos/Cabin with Karur Grill02.webp';
import karurNew3 from '../assets/cabin photos/Cabin with Karur Grill03.webp';

import centreAirNew1 from '../assets/cabin photos/Cabin with Centre Air Glass01.webp';
import centreAirNew2 from '../assets/cabin photos/Cabin with Centre Air Glass02.webp';

import curvedNew1 from '../assets/cabin photos/Curved Type Air Cutter Vehicle01.webp';
import curvedNew2 from '../assets/cabin photos/Curved Type Air Cutter Vehicle02.webp';
import curvedNew3 from '../assets/cabin photos/Curved Type Air Cutter Vehicle03.webp';

// --- 4. Workshop Placeholder Images ---
const workshopImages = [
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503389152951-9f343605f61e?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=900&auto=format&fit=crop",
];

export interface GalleryPhotoItem {
  src: string;
  title: string;
  span?: string;
  isWide?: boolean;
}

export interface GallerySubcategory {
  title: string;
  gridCols: string;
  items: GalleryPhotoItem[];
}

export interface GallerySection {
  id: string;
  title: string;
  badge: string;
  subcategories: GallerySubcategory[];
}

// --- 5. Gallery Data Structure with Photo-Adaptive Grids ---
const galleryData: GallerySection[] = [
  {
    id: "containers",
    title: "Containers",
    badge: "26 Models",
    subcategories: [
      {
        title: "10 Feet Container",
        gridCols: "grid grid-cols-1 md:grid-cols-3 gap-6",
        items: [
          { src: ten1, title: "10ft Commercial Container - 3/4 Perspective View", span: "col-span-1", isWide: false },
          { src: ten2, title: "10ft Heavy Duty Storage - Full Side Elevation", span: "col-span-1", isWide: false },
          { src: ten3, title: "10ft Compact Unit - Vertical Profile View", span: "col-span-1", isWide: false },
        ],
      },
      {
        title: "20 & 24 Feet Container",
        gridCols: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
        items: [
          { src: twenty1, title: "20ft Standard Freight Container", span: "col-span-1", isWide: false },
          { src: twenty2, title: "24ft Extended Long-Haul Container (Panoramic)", span: "col-span-1 md:col-span-2", isWide: true },
          { src: twenty3, title: "20ft Cargo Heavy-Duty Side Loading", span: "col-span-1 md:col-span-2", isWide: true },
          { src: twenty4, title: "Internal High-Strength Flooring Structure", span: "col-span-1", isWide: false },
          { src: twenty5, title: "Reinforced Steel Corrugated Wall Panels", span: "col-span-1", isWide: false },
          { src: twenty6, title: "24ft Commercial Carrier - Full Side Profile", span: "col-span-1 md:col-span-2", isWide: true },
          { src: twenty7, title: "20ft Chassis-Mounted Logistics Container", span: "col-span-1 md:col-span-2", isWide: true },
        ],
      },
      {
        title: "32 Feet Container",
        gridCols: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
        items: [
          { src: thirtytwo1, title: "32ft Ultra-Long Multi-Axle Hauler (Full Length)", span: "col-span-1 md:col-span-2 lg:col-span-3", isWide: true },
          { src: thirtytwo2, title: "32ft High-Cube Volume Logistics Container", span: "col-span-1", isWide: false },
          { src: thirtytwo3, title: "32ft Heavy Duty Steel Cargo Body", span: "col-span-1", isWide: false },
          { src: thirtytwo4, title: "32ft Commercial Fleet Cargo Unit", span: "col-span-1", isWide: false },
          { src: thirtytwo5, title: "32ft Dual Door Rear Locking Gear", span: "col-span-1", isWide: false },
          { src: thirtytwo6, title: "32ft Integrated Chassis Mount Point", span: "col-span-1", isWide: false },
          { src: thirtytwo7, title: "32ft Express Long-Route Cargo Container", span: "col-span-1", isWide: false },
          { src: thirtytwo8, title: "32ft Heavy-Duty Corner Castings & Seal", span: "col-span-1", isWide: false },
        ],
      },
      {
        title: "Export RIG Support Container",
        gridCols: "grid grid-cols-1 md:grid-cols-2 gap-6",
        items: [
          { src: rig1, title: "RIG Heavy Transport Unit - Full Side Elevation", span: "col-span-1 md:col-span-2", isWide: true },
          { src: rig2, title: "Export RIG Industrial Heavy Chassis Support", span: "col-span-1", isWide: true },
          { src: rig3, title: "Export RIG High-Strength Structural Platform", span: "col-span-1", isWide: true },
          { src: rig4, title: "Heavy Machinery Transport Support Rig", span: "col-span-1", isWide: true },
          { src: rig5, title: "Export RIG Turnkey Platform Ready for Road", span: "col-span-1 md:col-span-2", isWide: true },
        ],
      },
      {
        title: "All Door Container",
        gridCols: "grid grid-cols-1 md:grid-cols-3 gap-6",
        items: [
          { src: alldorr1, title: "Full Side Multi-Door Configuration", span: "col-span-1", isWide: false },
          { src: alldoor2, title: "End Door Double Seal Waterproof Lock", span: "col-span-1", isWide: false },
          { src: alldoor3, title: "Complete Accessibility Side Loading Bay", span: "col-span-1", isWide: false },
        ],
      },
    ],
  },
  {
    id: "cabins",
    title: "Lorry Cabins",
    badge: "14 Models",
    subcategories: [
      {
        title: "Straight Type Cabin",
        gridCols: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
        items: [
          { src: straightNew1, title: "Straight Cabin - High-Stance Front Elevation", span: "col-span-1", isWide: false },
          { src: straightNew2, title: "Straight Cabin - Ergonomic Driver Stance", span: "col-span-1", isWide: false },
          { src: straightNew3, title: "Straight Cabin - Heavy Steel Shell Angle", span: "col-span-1", isWide: false },
        ],
      },
      {
        title: "Aerodynamic Cabin",
        gridCols: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
        items: [
          { src: aeroNew1, title: "Aero Stance - Streamlined Roof Deflector", span: "col-span-1", isWide: false },
          { src: aeroNew2, title: "Aero Stance - Wind-Tunnel Tested Contours", span: "col-span-1", isWide: false },
          { src: aeroNew3, title: "Aero Stance - Heavy Haul Commercial Finish", span: "col-span-1", isWide: false },
        ],
      },
      {
        title: "Cabin with Karur Grill",
        gridCols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
        items: [
          { src: karurNew1, title: "Karur Traditional Heavy Grill - Front Stance", span: "col-span-1", isWide: false },
          { src: karurNew2, title: "Karur Chrome Accented Radiator Protection", span: "col-span-1", isWide: false },
          { src: karurNew3, title: "Karur Commercial Bumper Integration", span: "col-span-1", isWide: false },
        ],
      },
      {
        title: "Cabin with Centre Air Glass",
        gridCols: "grid grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto gap-6",
        items: [
          { src: centreAirNew1, title: "Centre Air Glass - Wide Panoramic View", span: "col-span-1", isWide: false },
          { src: centreAirNew2, title: "Centre Air Glass - Dual Vent Airflow Geometry", span: "col-span-1", isWide: false },
        ],
      },
      {
        title: "Curved Type Air Cutter Vehicle",
        gridCols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
        items: [
          { src: curvedNew1, title: "Curved Air Cutter - Aero Cowl Front Profile", span: "col-span-1", isWide: false },
          { src: curvedNew2, title: "Curved Air Cutter - Dual Deflector Upper Body", span: "col-span-1", isWide: false },
          { src: curvedNew3, title: "Curved Air Cutter - Highway Transport Ready", span: "col-span-1", isWide: false },
        ],
      },
    ],
  },
  {
    id: "workshop",
    title: "Workshop",
    badge: "6 Photos",
    subcategories: [
      {
        title: "Manufacturing & Fabrication",
        gridCols: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
        items: workshopImages.map((img, i) => ({
          src: img,
          title: `Precision Workshop Process 0${i + 1}`,
          span: "col-span-1",
          isWide: false,
        })),
      },
    ],
  },
];

// --- 6. Photo-Adaptive Card Component ---
interface GalleryCardProps {
  item: GalleryPhotoItem;
  alt: string;
  onClick: () => void;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ item, alt, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${item.span || 'col-span-1'} group relative cursor-pointer rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between`}
    >
      {/* Photo Container: completely uncropped, natural fit */}
      <div className="relative w-full overflow-hidden bg-slate-50/80 flex items-center justify-center p-3 sm:p-4 min-h-[220px]">
        <img
          src={item.src}
          alt={alt}
          loading="eager"
          decoding="async"
          style={{ opacity: 1, display: 'block' }}
          className="w-full h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02] drop-shadow-sm rounded-xl max-h-[550px]"
        />

        {/* Hover overlay with zoom button */}
        <div className="absolute inset-0 bg-slate-950/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md text-slate-900 font-bold text-xs sm:text-sm shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <ZoomIn size={16} className="text-blue-600" />
            <span>Click to Enlarge</span>
          </span>
        </div>

        {/* Top-Right Badge */}
        <div className="absolute top-3 right-3 bg-slate-900/75 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm tracking-wider uppercase">
          {item.isWide ? 'Wide Panoramic' : 'Full Photo'}
        </div>
      </div>

      {/* Card Footer with Title */}
      <div className="px-4 py-3 bg-white border-t border-slate-100 flex items-center justify-between gap-3">
        <p className="text-xs sm:text-sm font-bold text-slate-800 truncate group-hover:text-blue-600 transition-colors">
          {item.title}
        </p>
        <span className="shrink-0 text-slate-400 group-hover:text-blue-600 transition-colors">
          <ZoomIn size={15} />
        </span>
      </div>
    </div>
  );
};

// --- 7. Main Gallery Component ---
const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'containers' | 'cabins' | 'workshop'>('all');
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSlides, setCurrentSlides] = useState<{ src: string }[]>([]);

  // Filter sections based on selected tab
  const filteredData = activeTab === 'all'
    ? galleryData
    : galleryData.filter((section) => section.id === activeTab);

  // Open Lightbox handler
  const openLightbox = (items: GalleryPhotoItem[], index: number) => {
    const slides = items.map((item) => ({ src: item.src }));
    setCurrentSlides(slides);
    setCurrentIndex(index);
    setOpen(true);
  };

  // Total images count
  const totalCount = galleryData.reduce(
    (acc, sec) => acc + sec.subcategories.reduce((subAcc, sub) => subAcc + sub.items.length, 0),
    0
  );

  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-3">
            <Sparkles size={14} /> DEW Portfolio & Manufacturing
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Product Gallery
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Explore our precision-built steel containers, heavy commercial lorry cabins, and manufacturing facility in Tiruchengode. Every photo is displayed fully without cropping.
          </p>
        </div>

        {/* Filter Pills / Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
              activeTab === 'all'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-sm'
            }`}
          >
            All Works
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
              activeTab === 'all' ? 'bg-white/25 text-white' : 'bg-slate-100 text-slate-600'
            }`}>
              {totalCount}
            </span>
          </button>

          {galleryData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'containers' | 'cabins' | 'workshop')}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-sm'
              }`}
            >
              {tab.title}
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                activeTab === tab.id ? 'bg-white/25 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {tab.badge}
              </span>
            </button>
          ))}
        </div>

        {/* Gallery Sections */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {filteredData.map((section, sectionIndex) => (
              <section key={section.id || sectionIndex} className="mb-16">
                <div className="flex items-center justify-between pb-3 mb-8 border-b-2 border-slate-200">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-3">
                    <span className="w-2.5 h-8 bg-blue-600 rounded-full inline-block" />
                    {section.title}
                  </h2>
                  <span className="text-sm font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                    {section.badge}
                  </span>
                </div>

                {section.subcategories.map((subcategory, subIndex) => (
                  <div key={subIndex} className="mb-14">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-5 pl-1 flex items-center gap-2">
                      <span className="w-1.5 h-4 bg-orange-500 rounded-full inline-block" />
                      {subcategory.title}
                      <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                        {subcategory.items.length} photos
                      </span>
                    </h3>

                    {/* Photo-Adaptive Dynamic Grid */}
                    <div className={subcategory.gridCols}>
                      {subcategory.items.map((item, itemIndex) => (
                        <GalleryCard
                          key={`${item.src}-${itemIndex}`}
                          item={item}
                          alt={`${subcategory.title} - ${item.title}`}
                          onClick={() => openLightbox(subcategory.items, itemIndex)}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </section>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox for Fullscreen View */}
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={currentSlides}
          index={currentIndex}
        />
      )}
    </div>
  );
};

export default Gallery;