// --- 1. Imports ---
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import { ZoomIn, Eye, Sparkles } from 'lucide-react';
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

// --- 4. Workshop Placeholder Images (Optimized dimensions & WebP format) ---
const workshopImages = [
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503389152951-9f343605f61e?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=900&auto=format&fit=crop",
];

// --- 5. Gallery Data Structure ---
const galleryData = [
  {
    id: "containers",
    title: "Containers",
    badge: "26 Models",
    subcategories: [
      { title: "10 Feet Container", images: [ten1, ten2, ten3] },
      { title: "20 & 24 Feet Container", images: [twenty1, twenty2, twenty3, twenty4, twenty5, twenty6, twenty7] },
      { title: "32 Feet Container", images: [thirtytwo1, thirtytwo2, thirtytwo3, thirtytwo4, thirtytwo5, thirtytwo6, thirtytwo7, thirtytwo8] },
      { title: "Export RIG Support Container", images: [rig1, rig2, rig3, rig4, rig5] },
      { title: "All Door Container", images: [alldorr1, alldoor2, alldoor3] },
    ],
  },
  {
    id: "cabins",
    title: "Lorry Cabins",
    badge: "14 Models",
    subcategories: [
      { title: "Straight Type Cabin", images: [straightNew1, straightNew2, straightNew3] },
      { title: "Aerodynamic Cabin", images: [aeroNew1, aeroNew2, aeroNew3] },
      { title: "Cabin with Karur Grill", images: [karurNew1, karurNew2, karurNew3] },
      { title: "Cabin with Centre Air Glass", images: [centreAirNew1, centreAirNew2] },
      { title: "Curved Type Air Cutter Vehicle", images: [curvedNew1, curvedNew2, curvedNew3] },
    ],
  },
  {
    id: "workshop",
    title: "Workshop",
    badge: "6 Photos",
    subcategories: [
      { title: "Manufacturing & Fabrication", images: workshopImages },
    ],
  },
];

// --- 6. Optimized Image Card with Smooth Shimmer Skeleton ---
interface GalleryCardProps {
  image: string;
  alt: string;
  onClick: () => void;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ image, alt, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer group break-inside-avoid touch-manipulation mb-6"
    >
      <div className="overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 bg-slate-100 border border-slate-200/80 relative w-full group aspect-[4/3]">
        <img
          src={image}
          alt={alt}
          className="absolute inset-0 w-full h-full block object-cover group-hover:scale-105 transition-all duration-500 ease-out"
        />

        {/* Hover overlay with zoom button */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-between">
            <div className="bg-white/90 p-2.5 rounded-full shadow-lg">
              <ZoomIn className="text-black" size={20} />
            </div>
            <span className="text-slate-900 text-xs font-bold tracking-wider uppercase bg-white/90 px-3 py-1 rounded-full">
              View Fullscreen
            </span>
          </div>
        </div>

        {/* Mobile tap badge */}
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity sm:hidden">
          Tap to view
        </div>
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
  const openLightbox = (images: string[], index: number) => {
    const slides = images.map((src) => ({ src }));
    setCurrentSlides(slides);
    setCurrentIndex(index);
    setOpen(true);
  };

  // Total images count
  const totalCount = galleryData.reduce(
    (acc, sec) => acc + sec.subcategories.reduce((subAcc, sub) => subAcc + sub.images.length, 0),
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
            Explore our precision-built steel containers, heavy commercial lorry cabins, and manufacturing facility in Tiruchengode.
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
                  <div key={subIndex} className="mb-12">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-5 pl-1 flex items-center gap-2">
                      <span className="w-1.5 h-4 bg-slate-400 rounded-full inline-block" />
                      {subcategory.title}
                      <span className="text-xs font-medium text-slate-600">
                        ({subcategory.images.length} photos)
                      </span>
                    </h3>

                    {/* GPU-accelerated Masonry Columns */}
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
                      {subcategory.images.map((image, imageIndex) => (
                        <GalleryCard
                          key={`${image}-${imageIndex}`}
                          image={image}
                          alt={`${subcategory.title} - ${imageIndex + 1}`}
                          onClick={() => openLightbox(subcategory.images, imageIndex)}
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