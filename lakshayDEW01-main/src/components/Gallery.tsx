// --- 1. Imports ---
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import { ZoomIn } from 'lucide-react';
import "yet-another-react-lightbox/styles.css";

// --- 1. Container Image Imports ---
import ten1 from '../assets/container photos/10feet1.jpg';
import ten2 from '../assets/container photos/10feet2.jpg';
import ten3 from '../assets/container photos/10feet3.jpg';

import twenty1 from '../assets/container photos/20feet1.jpg';
import twenty2 from '../assets/container photos/20feet2.jpg';
import twenty3 from '../assets/container photos/20feet3.jpg';
import twenty4 from '../assets/container photos/20feet4.jpg';

import twentyfour1 from '../assets/container photos/24feet1.jpg';
import twentyfour2 from '../assets/container photos/24feet2.jpg';
import twentyfour3 from '../assets/container photos/24feet3.jpg';
import twentyfour4 from '../assets/container photos/24feet4.jpg';

import thirtytwo1 from '../assets/container photos/32feet1.jpg';
import thirtytwo2 from '../assets/container photos/32feet2.jpg';
import thirtytwo3 from '../assets/container photos/32feet3.jpg';
import thirtytwo4 from '../assets/container photos/32feet4.jpg';
import thirtytwo5 from '../assets/container photos/32feet5.jpg';

import rig1 from '../assets/container photos/exportrig1.jpg';
import rig2 from '../assets/container photos/exportrig2.jpg';
import rig3 from '../assets/container photos/exportrig3.jpg';
import rig4 from '../assets/container photos/exportrig4.jpg';
import rig5 from '../assets/container photos/exportrig5.jpg';

import alldorr1 from '../assets/container photos/alldorr1.jpg';
import alldoor2 from '../assets/container photos/alldoor2.jpg';
import alldoor3 from '../assets/container photos/alldoor3.jpg';

// --- 3. Lorry Cabin Image Imports ---
import straight1 from '../assets/cabin photos/straighht1.jpg';
import straight2 from '../assets/cabin photos/straight2.jpg';
import straight3 from '../assets/cabin photos/straight3.jpg';
import straight4 from '../assets/cabin photos/straight4.jpg';
import straight5 from '../assets/cabin photos/straight5.jpg';
import straight6 from '../assets/cabin photos/straight6.jpg';

import aero1 from '../assets/cabin photos/aero1.jpg';
import aero2 from '../assets/cabin photos/aero2.jpg';
import aero3 from '../assets/cabin photos/aero3.jpg';
import aero4 from '../assets/cabin photos/aero4.jpg';

import karur1 from '../assets/cabin photos/karur1.jpg';
import karur2 from '../assets/cabin photos/karur2.jpg';
import karur3 from '../assets/cabin photos/karur3.jpg';
import karur4 from '../assets/cabin photos/karur4.jpg';
import karur5 from '../assets/cabin photos/karur5.jpg';

import centreAir1 from '../assets/cabin photos/centre air.jpg';
import centreAir2 from '../assets/cabin photos/centreair2.jpg';
import centreAir3 from '../assets/cabin photos/centre air3.jpg';

import curved1 from '../assets/cabin photos/curvedtpe1.jpg';
import curved2 from '../assets/cabin photos/curvettype2.jpg';
import curved3 from '../assets/cabin photos/curvedtype3.jpg';

// --- 4. Workshop Placeholder Images ---
const workshopImages = [
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503389152951-9f343605f61e?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
];

// --- 5. Gallery Data Structure ---
const galleryData = [
  {
    title: "Containers",
    subcategories: [
      { title: "10 Feet Container", images: [ten1, ten2, ten3] },
      { title: "20 Feet Container", images: [twenty1, twenty2, twenty3, twenty4] },
      { title: "24 Feet Container", images: [twentyfour1, twentyfour2, twentyfour3, twentyfour4] },
      { title: "32 Feet Container", images: [thirtytwo1, thirtytwo2, thirtytwo3, thirtytwo4, thirtytwo5] },
      { title: "Export RIG Support Container", images: [rig1, rig2, rig3, rig4, rig5] },
      { title: "All Door Container", images: [alldorr1, alldoor2, alldoor3] },
    ],
  },
  {
    title: "Lorry Cabins",
    subcategories: [
      { title: "Straight Type Cabin", images: [straight1, straight2, straight3, straight4, straight5, straight6] },
      { title: "Aerodynamic Cabin", images: [aero1, aero2, aero3, aero4] },
      { title: "Cabin with Karur Grill", images: [karur1, karur2, karur3, karur4, karur5] },
      { title: "Cabin with Centre Air Glass", images: [centreAir1, centreAir2, centreAir3] },
      { title: "Curved Type Air Cutter Vehicle", images: [curved1, curved2, curved3] },
    ],
  },
  {
    title: "Workshop",
    subcategories: [
      { title: "Manufacturing & Fabrication", images: workshopImages },
    ],
  },
];

// --- 6. Animation Variants ---
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const Gallery: React.FC = () => {
  // --- 7. State Management ---
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSlides, setCurrentSlides] = useState<{ src: string }[]>([]);

  // --- 8. Event Handlers ---
  const openLightbox = (images: string[], index: number) => {
    const slides = images.map((src) => ({ src }));
    setCurrentSlides(slides);
    setCurrentIndex(index);
    setOpen(true);
  };

  // --- 9. JSX Rendering ---
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="container mx-auto px-4 py-8">
        <motion.h1
          className="text-5xl font-bold text-slate-900 text-center my-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Gallery
        </motion.h1>

        {galleryData.map((section, sectionIndex) => (
          <motion.section
            key={sectionIndex}
            className="mb-16"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-2 border-b-2 border-blue-200">
              {section.title}
            </h2>
            {section.subcategories.map((subcategory, subIndex) => (
              <div key={subIndex} className="mb-12">
                <h3 className="text-3xl font-semibold text-slate-900 mb-4">
                  {subcategory.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {subcategory.images.map((image, imageIndex) => (
                    <motion.div
                      key={imageIndex}
                      className="relative cursor-pointer group touch-manipulation"
                      variants={imageVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      onClick={() => openLightbox(subcategory.images, imageIndex)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    > 
                      <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-slate-100 border border-slate-200 h-64 sm:h-80 w-full relative">
                        <img 
                          src={image}
                          alt={`${subcategory.title} - ${imageIndex + 1}`}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                          loading="eager"
                          onError={(e) => {
                            console.error('Image failed to load:', image);
                            e.currentTarget.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30">
                            <ZoomIn className="text-white" size={28} />
                          </div>
                        </div>
                        {/* Mobile tap indicator */}
                        <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity sm:hidden">
                          Tap to view
                        </div>
                      </div>
                    </motion.div> 
                  ))}
                </div>
              </div>
            ))}
          </motion.section>
        ))}
      </div>

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