// --- 1. Imports ---
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import { ZoomIn, Maximize2, Sparkles, Layers, Truck, ShieldCheck, Box, SlidersHorizontal, ArrowUpRight } from 'lucide-react';
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
  subtitle: string;
  badge: string;
  span?: string;
  isWide?: boolean;
}

export interface GallerySubcategory {
  title: string;
  code: string;
  desc: string;
  gridCols: string;
  items: GalleryPhotoItem[];
}

export interface GallerySection {
  id: string;
  title: string;
  badge: string;
  icon: any;
  subcategories: GallerySubcategory[];
}

// --- 5. Gallery Data Structure with Hi-Fi Bento Layouts ---
const galleryData: GallerySection[] = [
  {
    id: "containers",
    title: "Container Solutions",
    badge: "26 Models Built",
    icon: Box,
    subcategories: [
      {
        title: "10 Feet Container Series",
        code: "DEW-C10",
        desc: "Compact modular steel containers engineered for urban logistics, secure jobsite storage, and quick-turnaround freight.",
        gridCols: "grid grid-cols-1 md:grid-cols-3 gap-6",
        items: [
          { src: ten1, title: "10ft Heavy Duty Unit", subtitle: "Standard Cargo Spec · ISO Castings", badge: "3/4 View", span: "col-span-1", isWide: false },
          { src: ten2, title: "10ft Commercial Cargo", subtitle: "Corrugated Side Steel · Full Profile", badge: "Side Elevation", span: "col-span-1", isWide: false },
          { src: ten3, title: "10ft Compact High-Cube", subtitle: "Vertical High-Clearance Door Spec", badge: "Vertical Spec", span: "col-span-1", isWide: false },
        ],
      },
      {
        title: "20 & 24 Feet Container Series",
        code: "DEW-C24",
        desc: "High-volume commercial transport containers built with high-tensile steel corrugations and heavy-duty chassis mounts.",
        gridCols: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
        items: [
          { src: twenty2, title: "24ft Extended Long-Haul Carrier", subtitle: "Multi-Axle Mount · Maximum Volume Freight", badge: "Flagship Wide", span: "col-span-1 md:col-span-2", isWide: true },
          { src: twenty1, title: "20ft Standard Freight Container", subtitle: "ISO Standard Corner Assemblies", badge: "Standard Spec", span: "col-span-1", isWide: false },
          { src: twenty3, title: "20ft Side-Loading Commercial Unit", subtitle: "Reinforced Threshold & High-Torque Hinges", badge: "Side Loading", span: "col-span-1 md:col-span-2", isWide: true },
          { src: twenty4, title: "Internal High-Strength Floor Grid", subtitle: "Heavy Machinery Payload Support", badge: "Interior Detail", span: "col-span-1", isWide: false },
          { src: twenty5, title: "Deep-Rib Wall Panel Fabrication", subtitle: "Anti-Racking Structural Ribs", badge: "Wall Structure", span: "col-span-1", isWide: false },
          { src: twenty6, title: "24ft Long-Body Fleet Configuration", subtitle: "Dual Coat Industrial Finish", badge: "Full Length", span: "col-span-1 md:col-span-2", isWide: true },
          { src: twenty7, title: "20ft Chassis-Integrated Body", subtitle: "Factory Mounted & Certified Road Ready", badge: "Mounted Unit", span: "col-span-1 md:col-span-2", isWide: true },
        ],
      },
      {
        title: "32 Feet Container Series",
        code: "DEW-C32",
        desc: "Ultra-long interstate logistics containers engineered with high-yield structural steel for extreme long-distance transit.",
        gridCols: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
        items: [
          { src: thirtytwo1, title: "32ft Ultra-Long Multi-Axle Hauler", subtitle: "High Cube Interstate Freight Specification · Full Length Panoramic Profile", badge: "Masterpiece Wide", span: "col-span-1 md:col-span-2 lg:col-span-3", isWide: true },
          { src: thirtytwo2, title: "32ft High-Cube Volume Logistics", subtitle: "Corrugated Side Panels with Water-Tight Sealing", badge: "Volume Build", span: "col-span-1", isWide: false },
          { src: thirtytwo3, title: "32ft Heavy-Duty Transport Shell", subtitle: "Fabricated from High-Tensile Tested Steel", badge: "Structural Frame", span: "col-span-1", isWide: false },
          { src: thirtytwo4, title: "32ft Fleet Logistics Specification", subtitle: "Designed for National Highway Long-Route Runs", badge: "Fleet Build", span: "col-span-1", isWide: false },
          { src: thirtytwo5, title: "32ft Rear Double Door Assembly", subtitle: "Heavy-Duty Cam Locking Gear & Waterproof Gaskets", badge: "Door Mechanism", span: "col-span-1", isWide: false },
          { src: thirtytwo6, title: "32ft Chassis Mount & Subframe", subtitle: "Precision Bolt-on / Weld Configuration", badge: "Chassis Mount", span: "col-span-1", isWide: false },
          { src: thirtytwo7, title: "32ft Express Cargo Build", subtitle: "Tested Against Severe Deflection & Load Strain", badge: "Express Spec", span: "col-span-1", isWide: false },
          { src: thirtytwo8, title: "32ft Structural Corner Castings", subtitle: "Standard Container Locks & Hoisting Anchor Points", badge: "Castings Detail", span: "col-span-1", isWide: false },
        ],
      },
      {
        title: "Export RIG Support Containers",
        code: "DEW-RIG",
        desc: "Custom heavy-equipment transport platforms engineered for deep-well drilling equipment, offshore rigs, and extreme machinery.",
        gridCols: "grid grid-cols-1 md:grid-cols-2 gap-7",
        items: [
          { src: rig1, title: "Export RIG Full Transport Unit", subtitle: "Custom Heavy Machinery Enclosure Platform", badge: "Wide Panoramic", span: "col-span-1 md:col-span-2", isWide: true },
          { src: rig2, title: "Export RIG Support Chassis", subtitle: "Reinforced I-Beam Subframe Construction", badge: "Chassis Spec", span: "col-span-1", isWide: true },
          { src: rig3, title: "Industrial Heavy Structural Shell", subtitle: "High Payload Capacity for Export Markets", badge: "Heavy Duty", span: "col-span-1", isWide: true },
          { src: rig4, title: "RIG Equipment Transport Housing", subtitle: "Vibration Dampening & Structural Gussets", badge: "Support Rig", span: "col-span-1", isWide: true },
          { src: rig5, title: "Turnkey RIG Platform Ready for Dispatch", subtitle: "100% Quality Inspected & Pre-Delivery Checked", badge: "Turnkey Unit", span: "col-span-1 md:col-span-2", isWide: true },
        ],
      },
      {
        title: "All Door Container Series",
        code: "DEW-AD",
        desc: "Full side-opening containers allowing unobstructed forklift access from both flanks for rapid cargo handling.",
        gridCols: "grid grid-cols-1 md:grid-cols-3 gap-6",
        items: [
          { src: alldorr1, title: "Full Side Multi-Door Configuration", subtitle: "Bifold Access Panels for Rapid Loading", badge: "Side Access", span: "col-span-1", isWide: false },
          { src: alldoor2, title: "Double Seal End Door Locking System", subtitle: "High-Security Multipoint Cam Bars", badge: "Security Spec", span: "col-span-1", isWide: false },
          { src: alldoor3, title: "Complete Accessibility Cargo Bay", subtitle: "Zero-Obstruction Full Open Layout", badge: "Open Stance", span: "col-span-1", isWide: false },
        ],
      },
    ],
  },
  {
    id: "cabins",
    title: "Lorry Cabins & Bodies",
    badge: "14 Models Built",
    icon: Truck,
    subcategories: [
      {
        title: "Straight Type Cabin Series",
        code: "DEW-STR",
        desc: "Classic high-strength commercial cabins featuring maximum cabin volume, rugged stance, and reinforced sleeper compartments.",
        gridCols: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
        items: [
          { src: straightNew1, title: "Straight Cabin - Front Elevation", subtitle: "High-Visibility Windshield & Rigid Cowl", badge: "Front Profile", span: "col-span-1", isWide: false },
          { src: straightNew2, title: "Straight Cabin - Driver Side Stance", subtitle: "Ergonomic Door Access & Mirror Mounts", badge: "Side Profile", span: "col-span-1", isWide: false },
          { src: straightNew3, title: "Straight Cabin - Three-Quarter Fit", subtitle: "Heavy Gauge Sheet Metal Work", badge: "3/4 Stance", span: "col-span-1", isWide: false },
        ],
      },
      {
        title: "Aerodynamic Cabin Series",
        code: "DEW-AERO",
        desc: "Wind-deflecting streamlined bodywork designed to reduce highway drag, boost fuel economy, and lower highway cabin turbulence.",
        gridCols: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
        items: [
          { src: aeroNew1, title: "Aero Stance - Wind Deflector Hood", subtitle: "Sculpted Roof Spoiler for Highway Efficiency", badge: "Aero Stance", span: "col-span-1", isWide: false },
          { src: aeroNew2, title: "Aero Stance - Streamlined Contour", subtitle: "Airflow Guided Roof & Side Fairings", badge: "Deflector Spec", span: "col-span-1", isWide: false },
          { src: aeroNew3, title: "Aero Stance - Complete Road Build", subtitle: "Reinforced Pillar Anchors & High Finish", badge: "Full Vehicle", span: "col-span-1", isWide: false },
        ],
      },
      {
        title: "Cabin with Karur Grill",
        code: "DEW-KGR",
        desc: "South Indian prestige styling combined with heavy commercial grade front bumper and radiator protection assemblies.",
        gridCols: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
        items: [
          { src: karurNew1, title: "Karur Grill - Signature Chrome Stance", subtitle: "Handcrafted Traditional Radiator Shielding", badge: "Signature Spec", span: "col-span-1", isWide: false },
          { src: karurNew2, title: "Karur Grill - Heavy Bumper Assembly", subtitle: "Dual Impact Rails & Integrated Fog Housings", badge: "Bumper Guard", span: "col-span-1", isWide: false },
          { src: karurNew3, title: "Karur Stance - Full Road Presence", subtitle: "Durable Powder Coating with Mirror Chrome Accents", badge: "Highway Spec", span: "col-span-1", isWide: false },
        ],
      },
      {
        title: "Cabin with Centre Air Glass",
        code: "DEW-CAG",
        desc: "Enhanced driver cooling architecture incorporating central panoramic airflow glass vents for maximum cabin comfort.",
        gridCols: "grid grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto gap-6",
        items: [
          { src: centreAirNew1, title: "Centre Air Glass - Dual Vent Stance", subtitle: "Integrated Cowl Air Induction Window", badge: "Vent Architecture", span: "col-span-1", isWide: false },
          { src: centreAirNew2, title: "Centre Air Glass - Road Profile", subtitle: "Weather-Sealed High-Stance Cabin Geometry", badge: "Front Elevation", span: "col-span-1", isWide: false },
        ],
      },
      {
        title: "Curved Type Air Cutter Vehicle",
        code: "DEW-CAC",
        desc: "Advanced contour cutter cabins designed to deflect aerodynamic drag above long trailers for superior handling stability.",
        gridCols: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
        items: [
          { src: curvedNew1, title: "Curved Air Cutter - Aero Cowl Front", subtitle: "Continuous Radius Wind Curve Profile", badge: "Curved Spec", span: "col-span-1", isWide: false },
          { src: curvedNew2, title: "Curved Air Cutter - Dual Deflector Stance", subtitle: "Upper Air Channeling System", badge: "Deflector Stance", span: "col-span-1", isWide: false },
          { src: curvedNew3, title: "Curved Air Cutter - Highway Fitment", subtitle: "Full Chassis Integration & Road Ready Fit", badge: "Highway Fit", span: "col-span-1", isWide: false },
        ],
      },
    ],
  },
  {
    id: "workshop",
    title: "Workshop & Facility",
    badge: "Facility Showcase",
    icon: Layers,
    subcategories: [
      {
        title: "Tiruchengode Fabrication Facility",
        code: "DEW-FAC",
        desc: "Take a look inside our specialized welding bays, CNC cutting, chassis fitting stations, and paint shop.",
        gridCols: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
        items: workshopImages.map((img, i) => ({
          src: img,
          title: `Precision Manufacturing Stage 0${i + 1}`,
          subtitle: "Automated welding & precision steel alignment station",
          badge: `Station 0${i + 1}`,
          span: "col-span-1",
          isWide: false,
        })),
      },
    ],
  },
];

// --- 6. Hi-Fi Modern Studio Showcase Card ---
interface HiFiGalleryCardProps {
  item: GalleryPhotoItem;
  alt: string;
  onClick: () => void;
}

const HiFiGalleryCard: React.FC<HiFiGalleryCardProps> = ({ item, alt, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${item.span || 'col-span-1'} group relative cursor-pointer rounded-3xl p-[1px] bg-gradient-to-b from-white/15 via-white/5 to-transparent hover:from-blue-500/50 hover:via-indigo-500/30 hover:to-cyan-500/20 transition-all duration-500 shadow-[0_12px_36px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.25)] hover:-translate-y-1`}
    >
      {/* Inner Studio Pedestal Card */}
      <div className="relative rounded-[23px] bg-gradient-to-b from-slate-900/95 via-[#0c1322]/95 to-[#090d16] backdrop-blur-xl overflow-hidden flex flex-col justify-between h-full border border-white/5">
        
        {/* Ambient Studio Lighting Glow behind vehicle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/5 bg-gradient-to-tr from-blue-600/10 via-cyan-500/10 to-indigo-500/10 blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
        
        {/* Subtle Engineering Grid Backdrop */}
        <div 
          className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />

        {/* Top HUD Telemetry Bar */}
        <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/80 border border-slate-700/60 shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-mono font-bold tracking-widest text-slate-300 uppercase">
              {item.badge}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-mono text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:inline">
              Expand View
            </span>
            <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-blue-600 border border-white/10 group-hover:border-blue-400 flex items-center justify-center text-white transition-all duration-300 shadow-lg">
              <Maximize2 size={13} className="group-hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>

        {/* Photo Stage: 100% UNCLIPPED, NATURAL PROPORTIONS WITH HIGH DYNAMIC RANGE */}
        <div className="relative z-10 w-full px-4 sm:px-6 py-4 flex items-center justify-center min-h-[220px] sm:min-h-[260px] my-auto">
          <img
            src={item.src}
            alt={alt}
            loading="eager"
            decoding="async"
            style={{ opacity: 1, display: 'block' }}
            className="w-full h-auto object-contain transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:-translate-y-1 drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)] max-h-[500px]"
          />
        </div>

        {/* Floor Horizon Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom Studio Spec Label */}
        <div className="relative z-10 px-5 py-4 bg-slate-950/80 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-white/5">
          <div className="min-w-0">
            <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight truncate font-['Outfit']">
              {item.title}
            </h4>
            <p className="text-xs text-slate-400 truncate mt-0.5 font-medium">
              {item.subtitle}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-1.5 text-blue-400 text-xs font-semibold group-hover:translate-x-1 transition-transform duration-300">
            <span>Inspect</span>
            <ArrowUpRight size={14} />
          </div>
        </div>

      </div>
    </div>
  );
};

// --- 7. Main Hi-Fi Gallery Component ---
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
    <div className="min-h-screen bg-[#070b12] text-slate-100 py-12 relative overflow-hidden">
      
      {/* Ambient Cyber Backlight Mesh */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(37,99,235,0.35) 0%, rgba(14,165,233,0.15) 40%, transparent 70%)',
        }}
      />
      <div 
        className="absolute bottom-1/3 right-0 w-[600px] h-[600px] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-400 text-xs font-mono font-bold tracking-widest uppercase mb-5 shadow-[0_0_20px_rgba(56,189,248,0.2)]">
            <Sparkles size={14} className="text-cyan-400" />
            <span>DEW Industrial Showcase · Tiruchengode</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 mb-6 font-['Outfit']">
            Master Engineering Gallery
          </h1>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Every build shown at 100% full scale. Explore our heavy-duty cargo containers, commercial lorry cabins, and precision manufacturing bays.
          </p>

          {/* Quick Stat Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800">
              <Box size={14} className="text-blue-400" /> 26 Container Models
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800">
              <Truck size={14} className="text-indigo-400" /> 14 Cabin Variants
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800">
              <ShieldCheck size={14} className="text-emerald-400" /> ISO 9001:2015 Certified
            </span>
          </div>
        </div>

        {/* Hi-Fi Floating Pill Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-1.5 rounded-full bg-slate-900/90 border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.5)] scale-105'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              All Projects
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                activeTab === 'all' ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
              }`}>
                {totalCount}
              </span>
            </button>

            {galleryData.map((tab) => {
              const TabIcon = tab.icon;
              const subCount = tab.subcategories.reduce((acc, sub) => acc + sub.items.length, 0);
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'containers' | 'cabins' | 'workshop')}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.5)] scale-105'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <TabIcon size={14} className={activeTab === tab.id ? 'text-white' : 'text-slate-400'} />
                  {tab.title}
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                    activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {subCount}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Sections */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {filteredData.map((section, sectionIndex) => (
              <section key={section.id || sectionIndex} className="mb-20">
                
                {/* Major Section Banner */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 mb-10 border-b border-white/10">
                  <div>
                    <span className="text-xs font-mono font-bold tracking-[0.25em] text-cyan-400 uppercase">
                      // CATEGORY 0{sectionIndex + 1}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1 flex items-center gap-3 font-['Outfit']">
                      <span className="w-2.5 h-8 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full inline-block" />
                      {section.title}
                    </h2>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-300 bg-slate-900/90 px-3.5 py-1.5 rounded-full border border-slate-700/80 shadow-inner w-fit">
                    {section.badge}
                  </span>
                </div>

                {/* Subcategory Bento Groups */}
                {section.subcategories.map((subcategory, subIndex) => (
                  <div key={subIndex} className="mb-16">
                    
                    {/* Subcategory Engineering Header */}
                    <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-2 p-4 rounded-2xl bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent border border-white/5">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-black text-blue-400 bg-blue-950/80 border border-blue-800/60 px-2.5 py-1 rounded-md">
                          {subcategory.code}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-['Outfit']">
                          {subcategory.title}
                        </h3>
                        <span className="text-xs font-mono text-slate-400">
                          ({subcategory.items.length} angles)
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
                        {subcategory.desc}
                      </p>
                    </div>

                    {/* Hi-Fi Photo-Adaptive Studio Grid */}
                    <div className={subcategory.gridCols}>
                      {subcategory.items.map((item, itemIndex) => (
                        <HiFiGalleryCard
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

      {/* Lightbox for High-Resolution Fullscreen View */}
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