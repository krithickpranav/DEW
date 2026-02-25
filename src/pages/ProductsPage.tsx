// --- 1. Imports ---
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Download, MessageCircle, Phone, Package, Truck, Eye, Shield, Box, Layers, DoorOpen, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

// --- 2. Asset Imports ---
// Main Category Images
const container32feet2 = new URL('../assets/container photos/32feet2.jpg', import.meta.url).href;
const cabinAero1 = new URL('../assets/cabin photos/aero1.jpg', import.meta.url).href;

// Container Model Images
const container10feet1 = new URL('../assets/container photos/10feet1.jpg', import.meta.url).href;
const container20feet1 = new URL('../assets/container photos/20feet1.jpg', import.meta.url).href;
const container32feet1 = new URL('../assets/container photos/32feet1.jpg', import.meta.url).href;
const containerExportRig1 = new URL('../assets/container photos/exportrig1.jpg', import.meta.url).href;
const containerAllDoor1 = new URL('../assets/container photos/alldorr1.jpg', import.meta.url).href;
const container10feet2 = new URL('../assets/container photos/10feet2.jpg', import.meta.url).href;
const container10feet3 = new URL('../assets/container photos/10feet3.jpg', import.meta.url).href;
const container20feet2 = new URL('../assets/container photos/20feet2.jpg', import.meta.url).href;
const container20feet3 = new URL('../assets/container photos/20feet3.jpg', import.meta.url).href;
const container20feet4 = new URL('../assets/container photos/20feet4.jpg', import.meta.url).href;
const container24feet1 = new URL('../assets/container photos/24feet1.jpg', import.meta.url).href;
const container24feet2 = new URL('../assets/container photos/24feet2.jpg', import.meta.url).href;
const container24feet3 = new URL('../assets/container photos/24feet3.jpg', import.meta.url).href;
const container24feet4 = new URL('../assets/container photos/24feet4.jpg', import.meta.url).href;
const container32feet3 = new URL('../assets/container photos/32feet3.jpg', import.meta.url).href;
const container32feet4 = new URL('../assets/container photos/32feet4.jpg', import.meta.url).href;
const container32feet5 = new URL('../assets/container photos/32feet5.jpg', import.meta.url).href;
const containerExportRig2 = new URL('../assets/container photos/exportrig2.jpg', import.meta.url).href;
const containerExportRig3 = new URL('../assets/container photos/exportrig3.jpg', import.meta.url).href;
const containerExportRig4 = new URL('../assets/container photos/exportrig4.jpg', import.meta.url).href;
const containerExportRig5 = new URL('../assets/container photos/exportrig5.jpg', import.meta.url).href;
const containerAllDoor2 = new URL('../assets/container photos/alldoor2.jpg', import.meta.url).href;
const containerAllDoor3 = new URL('../assets/container photos/alldoor3.jpg', import.meta.url).href;

// Lorry Cabin Model Images
const cabinAero2 = new URL('../assets/cabin photos/aero2.jpg', import.meta.url).href;
const cabinAero3 = new URL('../assets/cabin photos/aero3.jpg', import.meta.url).href;
const cabinAero4 = new URL('../assets/cabin photos/aero4.jpg', import.meta.url).href;
const cabinStr1 = new URL('../assets/cabin photos/straighht1.jpg', import.meta.url).href;
const cabinStr2 = new URL('../assets/cabin photos/straight2.jpg', import.meta.url).href;
const cabinStr3 = new URL('../assets/cabin photos/straight3.jpg', import.meta.url).href;
const cabinStr4 = new URL('../assets/cabin photos/straight4.jpg', import.meta.url).href;
const cabinStr5 = new URL('../assets/cabin photos/straight5.jpg', import.meta.url).href;
const cabinStr6 = new URL('../assets/cabin photos/straight6.jpg', import.meta.url).href;
const cabinKarur1 = new URL('../assets/cabin photos/karur1.jpg', import.meta.url).href;
const cabinKarur2 = new URL('../assets/cabin photos/karur2.jpg', import.meta.url).href;
const cabinKarur3 = new URL('../assets/cabin photos/karur3.jpg', import.meta.url).href;
const cabinKarur4 = new URL('../assets/cabin photos/karur4.jpg', import.meta.url).href;
const cabinKarur5 = new URL('../assets/cabin photos/karur5.jpg', import.meta.url).href;
const cabinCentreAir1 = new URL('../assets/cabin photos/centre air.jpg', import.meta.url).href;
const cabinCentreAir2 = new URL('../assets/cabin photos/centreair2.jpg', import.meta.url).href;
const cabinCentreAir3 = new URL('../assets/cabin photos/centre air3.jpg', import.meta.url).href;
const cabinCurved1 = new URL('../assets/cabin photos/curvedtpe1.jpg', import.meta.url).href;
const cabinCurved2 = new URL('../assets/cabin photos/curvettype2.jpg', import.meta.url).href;
const cabinCurved3 = new URL('../assets/cabin photos/curvedtype3.jpg', import.meta.url).href;
const cabinCustom1 = new URL('../assets/cabin photos/custom1.jpg', import.meta.url).href;
const cabinCustom2 = new URL('../assets/cabin photos/custom2.jpg', import.meta.url).href;
const cabinCustom3 = new URL('../assets/cabin photos/custom3.jpg', import.meta.url).href;
const cabinCustom4 = new URL('../assets/cabin photos/custom4.jpg', import.meta.url).href;

// --- 3. Type Definitions ---
type View = 'main' | 'container-models' | 'lorry-models' | 'container-specs' | 'lorry-specs';

const ProductsPage: React.FC = () => {
  // --- 4. State and Hooks ---
  const [currentView, setCurrentView] = useState<View>('main');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [headerRef, isHeaderVisible] = useScrollAnimation();
  const [lightboxImage, setLightboxImage] = useState<{ gallery: any[], index: number } | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [gridRef, visibleGridItems] = useStaggeredAnimation(12, 100);

  // --- 5. Constants ---
  // WhatsApp number
  const whatsappNumber = '+91 9442262444';

  // --- 6. Data Definitions ---
  // Main Product Categories
  const mainCategories = [
    {
      id: 'containers',
      title: 'Container Solutions',
      description: 'Durable and customizable containers built for logistics, export, and industrial use.',
      image: container32feet2,
      icon: Package
    },
    {
      id: 'lorry-cabins',
      title: 'Lorry Cabins',
      description: 'High-performance truck cabins designed for strength, comfort, and aerodynamics.',
      image: cabinAero1,
      icon: Truck
    }
  ];

  // Container Models
  const containerModels = [
    {
      id: '10ft',
      title: '10 Feet Container',
      description: 'Compact container ideal for small-scale transport and storage needs.',
      image: container10feet1
    },
    {
      id: '20-24ft',
      title: '20 & 24 Feet Container',
      description: 'Standard containers perfect for medium cargo transportation.',
      image: container20feet1
    },
    {
      id: '32ft',
      title: '32 Feet Container',
      description: 'Large capacity container for heavy-duty transport requirements.',
      image: container32feet1
    },
    {
      id: 'export-rig',
      title: 'Export RIG Support Container',
      description: 'Specialized container designed for export and industrial support.',
      image: containerExportRig1
    },
    {
      id: 'all-door',
      title: 'All Door Container',
      description: 'Versatile container with multiple door access points for easy loading.',
      image: containerAllDoor1
    },
    {
      id: 'customized',
      title: 'Customized Container',
      description: 'Fully tailor-made container designed to meet your exact requirements.',
      image: 'https://images.pexels.com/photos/4559592/pexels-photo-4559592.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      isSpecial: true
    }
  ];

  // Lorry Cabin Models
  const lorryCabinModels = [
    {
      id: 'straight-type',
      title: 'Straight Type Cabin',
      description: 'Classic design cabin with straightforward construction and reliability.',
      image: cabinStr1
    },
    {
      id: 'aerodynamic',
      title: 'Aerodynamic Cabin',
      description: 'Streamlined design for optimal fuel efficiency and performance.',
      image: cabinAero1
    },
    {
      id: 'karur-grill',
      title: 'Cabin with Karur Grill',
      description: 'Enhanced protection with traditional Karur-style front grill design.',
      image: cabinKarur1
    },
    {
      id: 'centre-air-glass',
      title: 'Cabin with Centre Air Glass',
      description: 'Modern cabin featuring center-mounted air vent and glass design.',
      image: cabinCentreAir1
    },
    {
      id: 'curved-air-cutter',
      title: 'Curved Type Air Cutter Vehicle',
      description: 'Advanced curved design for superior aerodynamics and wind resistance.',
      image: cabinCurved1,
    }
  ];

  // Container Specifications Data
  const getContainerSpecs = (modelId: string) => {
    const specs: Record<string, any> = {
      '10ft': {
        title: '10 Feet Container',
        tagline: 'Compact solution for efficient small-scale transport',
        heroImage: container10feet1,
        definition: 'A compact 10-foot container designed for efficient small-scale transportation and storage. Ideal for businesses requiring flexible cargo solutions without compromising on quality and durability.',
        usage: [
          'Ideal for transport & storage of small to medium cargo',
          'Weather-resistant and durable steel construction',
          'Stackable design for efficient space utilization',
          'Customizable with various door and fitting options',
          'Perfect for construction sites and retail applications'
        ],
        productSpec: {
          dimensionType: "10' x 5'9'' x 6'6'\'",

          
          resistance: 'Weather-resistant, anti-corrosion coated'
        },
        externalDimensions: {
          length: '3,048 mm (10 ft)',
          width: '1,798.32 mm (5\'9" ft)',
          height: '2,591 mm (8\'6")'
        },
       
        doorOpening: {
          width: '2,340 mm',
          height: '2,280 mm'
        },
        weight: {
          approxweight:'850 kg',
          
        },
        internalDimensions: {
          length: '3,048 mm',
          width: '1,798.32 mm',
          height: '2,011.68 mm'
        },
        gallery: [
          { id: 1, url: container10feet1, title: '10ft Container - Front View' },
          { id: 2, url: container10feet2, title: '10ft Container - Side View' },
          { id: 3, url: container10feet3, title: '10ft Container - Interior' }
        ]
      },
      '20-24ft': {
        title: '20 & 24 Feet Container',
        tagline: 'Standard solution for versatile cargo transportation',
        heroImage: container20feet1,
        definition: 'Industry-standard 20 and 24-foot containers offering optimal balance between capacity and maneuverability. Perfect for general cargo transportation and international shipping.',
        usage: [
          'Standard solution for general cargo and freight',
          'ISO-certified for international shipping',
          'Suitable for multi-modal transportation',
          'Reinforced corner posts for stacking',
          'Available in both 20ft and 24ft variants'
        ],
        productSpec: {
          dimensionType: "20'/24' x 8' x 8'",
          resistance: 'Marine-grade weather protection'
        },
        externalDimensions: {
          length: '6,058 mm (20ft) / 7,315 mm (24ft)',
          width: '2,438 mm (8 ft)',
          height: '2,591 mm (8\'6")'
        },
        internalDimensions: {
          length: '6,096 mm / 7,315.2 mm',
          width: '2,438 mm',
          height: '2,438 mm'
        },
        doorOpening: {
          width: '2,340 mm',
          height: '2,280 mm'
        },
        weight: {
          approxweight:'1,800 / 2,000 kg',
          
        },
        gallery: [
          { id: 4, url: container20feet1, title: '20ft Container - Perspective View' },
          { id: 5, url: container20feet2, title: '20ft Container - Side Profile' },
          { id: 6, url: container20feet3, title: '20ft Container - Front View' },
          { id: 7, url: container20feet4, title: '20ft Container - Interior View' },
          { id: 8, url: container24feet1, title: '24ft Container - Side View' },
          { id: 9, url: container24feet2, title: '24ft Container - Front Angle' },
          { id: 10, url: container24feet3, title: '24ft Container - Rear View' },
          { id: 11, url: container24feet4, title: '24ft Container - Open Doors' }
        ]
      },
      '32ft': {
        title: '32 Feet Container',
        tagline: 'Heavy-duty container for every industry',
        heroImage: container32feet1,
        definition: 'Heavy-duty 32-foot container engineered for high-capacity transportation needs. Designed to handle large volumes while maintaining structural integrity and security.',
        usage: [
          'Heavy-duty transport for industrial cargo',
          'Extended length for oversized goods',
          'Reinforced structure for maximum load capacity',
          'Weather-resistant and durable construction',
          'Ideal for construction and manufacturing sectors'
        ],
        productSpec: {
          dimensionType: "32' x 8'3\" x 9'6\"",
          
          resistance: 'Heavy-duty anti-corrosion coating'
        },
        externalDimensions: {
          length: '9,754 mm (32 ft)',
          width: '2,438 mm (8 ft)',
          height: '2,591 mm (8\'6")'
        },
        internalDimensions: {
          length: '9,753 mm',
          width: '2,529.84 mm',
          height: '2,926.08 mm'
        },
        doorOpening: {
          width: '2,340 mm',
          height: '2,280 mm'
        },
        weight: {
          approxweight:'3,500 kg',
          
        },
        gallery: [
          { id: 12, url: container32feet1, title: '32ft Container - Side View' },
          { id: 13, url: container32feet2, title: '32ft Container - Front Angle' },
          { id: 14, url: container32feet3, title: '32ft Container - Interior View' },
          { id: 15, url: container32feet4, title: '32ft Container - Open Doors' },
          { id: 16, url: container32feet5, title: '32ft Container - Top View' }
        ]
      },
      'export-rig': {
        title: 'Export RIG Support Container',
        tagline: 'Specialized solution for export and industrial applications',
        heroImage: containerExportRig1,
        definition: 'Specialized container designed for export operations and industrial rig support. Built to withstand harsh environments and meet international shipping standards.',
        usage: [
          'Purpose-built for export operations',
          'Industrial equipment and rig support',
          'International shipping compliance',
          'Enhanced structural reinforcement',
          'Suitable for oil & gas, construction sectors'
        ],
        productSpec: {
          dimensionType: "Customizable based on requirements",
          sizeTypeCode: 'Export RIG',
          
          resistance: 'Marine-grade corrosion protection'
        },
        externalDimensions: {
          length: 'Custom (typically 20-40 ft)',
          width: '2,438 mm (8 ft)',
          height: '2,591-2,896 mm'
        },
        internalDimensions: {
          length: 'As per specification',
          width: '2,352 to 2,529.84 mm',
          height: '2,393 to 2,926.08 mm'
        },
        doorOpening: {
          width: '2,340 mm',
          height: '2,280-2,585 mm'
        },
        weight: {
          approxweight:'Up to 3,500 kg',
        },
        gallery: [
          { id: 18, url: containerExportRig2, title: 'Export RIG - Side Profile' },
          { id: 19, url: containerExportRig3, title: 'Export RIG - Top View' },
          { id: 20, url: containerExportRig4, title: 'Export RIG - Interior' },
          { id: 21, url: containerExportRig5, title: 'Export RIG - On Vehicle' },
          { id: 17, url: containerExportRig1, title: 'Export RIG - Front View' }
        ]
      },
      'all-door': {
        title: 'All Door Container',
        tagline: 'Maximum accessibility with multi-door design',
        heroImage: containerAllDoor1,
        definition: 'Innovative container featuring multiple door access points for enhanced loading and unloading efficiency. Ideal for operations requiring frequent access from multiple sides.',
        usage: [
          'Multiple door access for easy loading',
          'Ideal for warehousing and distribution',
          'Quick access from various points',
          'Weather-resistant door sealing',
          'Perfect for high-frequency cargo operations'
        ],
        productSpec: {
          dimensionType: "20'/24' x 8' x 8'6\"",
          resistance: 'Multi-seal weather protection'
        },
        externalDimensions: {
          length: '6,058-7,315 mm',
          width: '2,438 mm (8 ft)',
          height: '2,591 mm (8\'6")'
        },
        internalDimensions: {
          length: '5,898-7,150 mm',
          width: '2,352 mm',
          height: '2,393 mm'
        },
        doorOpening: {
          width: 'Multiple: 2,340 mm each',
          height: '2,280 mm'
        },
        weight: {
          approxweight:'2,500 to 2,900 kg',
        },
        gallery: [
            { id: 22, url: containerAllDoor1, title: 'All Door Container - Side View' },
            { id: 23, url: containerAllDoor2, title: 'All Door Container - Multiple Doors Open' },
            { id: 24, url: containerAllDoor3, title: 'All Door Container - Front View' }
        ]
      },
      'customized': {
        title: 'Customized Container',
        tagline: 'Your Container. Your Way.',
        heroImage: 'https://images.pexels.com/photos/4559592/pexels-photo-4559592.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1200&fit=crop',
        definition: 'A fully tailor-made container designed to meet your project\'s exact requirements — from size and layout to material and fittings. Perfect for specialized applications requiring unique specifications.',
        usage: [
          'Ideal for site offices, mobile shops, control rooms, or modular homes',
          'Built for industrial, defense, telecom, and construction applications',
          'Supports thermal & sound insulation options',
          'Custom door, window, and electrical fitting layouts',
          'Designed for long-term durability and mobility'
        ],
        productSpec: {
          customDimensions: 'Any size (8 ft – 45 ft)',
          materialOptions: 'Steel / GI / Corten Steel',
          insulation: 'Thermal or acoustic',
          flooring: 'Marine ply / Steel / Anti-slip',
          electricalFittings: 'Lighting, sockets, wiring',
          windowsDoors: 'Custom size & placement',
          partitions: 'Optional (metal or wood)',
          finishOptions: 'Powder-coated or painted',
          roofType: 'Flat / Curved / Reinforced'
        },
        externalDimensions: {
          length: 'Custom',
          width: 'Custom',
          height: 'Custom'
        },
        internalDimensions: {
          length: 'As per design',
          width: 'As per design',
          height: 'As per design'
        },
        doorOpening: {
          width: 'Custom specification',
          height: 'Custom specification'
        },
        weight: {
          maxGross: 'As per design',
          avgTare: 'Variable',
          maxPayload: 'Depends on structure'
        },
        optionalAddons: [
          { icon: '🔌', text: 'Pre-wired electrical panel' },
          { icon: '🌡️', text: 'god photo' },
          { icon: '🔇', text: 'Acoustic insulation' },
          { icon: '🪟', text: 'Glass windows or skylights' },
          { icon: '🚪', text: 'Roller/double doors' },
          { icon: '🧱', text: 'Partitioned workspace' },
          { icon: '🧰', text: 'Equipment racks or shelves' }
        ],
        gallery: [
          { id: 1, url: 'https://images.pexels.com/photos/4559592/pexels-photo-4559592.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
          { id: 2, url: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
          { id: 3, url: 'https://images.pexels.com/photos/163726/belgium-antwerp-port-container-163726.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' }
        ]
      }
    };

    return specs[modelId];
  };

  // Lorry Cabin Specifications Data
  const getLorryCabinSpecs = (modelId: string) => {
    const specs: Record<string, any> = {
      'straight-type': {
        title: 'Straight Type Cabin',
        tagline: 'Classic reliability for every journey',
        heroImage: cabinStr1,
        definition: 'Traditional straight-type cabin design combining time-tested reliability with modern comfort features. Ideal for standard commercial vehicle applications.',
        usage: [
          'Perfect for medium to long-haul vehicles',
          'Classic design with proven durability',
          'Comfortable interiors for driver wellbeing',
          'Easy maintenance and parts availability',
          'Cost-effective solution for fleet operators'
        ],
        productSpec: {
          dimensionType: 'L × W × H',
          seatingCapacity: '2 / 3-seater options',
          roofTypeHeight: 'Standard Roof',
          material: 'Steel frame with composite panels',
          aerodynamicFeatures: 'Basic streamlining',
         
        },
        externalDimensions: {
          length: '2,200 mm',
          width: '2,400 mm',
          height: '2,100 mm'
        },
        internalDimensions: {
          length: '2,000 mm',
          width: '2,200 mm',
          height: '1,900 mm'
        },
        weightCapacity: {
          maxGross: '2,200 kg',
          tare: '750 kg',
          payload: '1,450 kg'
        },
        safetyComfort: [
         
          'Adjustable ergonomic seats',
          'Adjustable steering column',
          
          'Standard ventilation',
          'Interior LED lighting',
          'Storage compartments'
        ],
        gallery: [
          { id: 28, url: cabinStr1, title: 'Straight Type Cabin - Front View' },
          { id: 29, url: cabinStr2, title: 'Straight Type Cabin - Side Profile' },
          { id: 30, url: cabinStr3, title: 'Straight Type Cabin - Interior' },
          { id: 31, url: cabinStr4, title: 'Straight Type Cabin - Rear View' },
          { id: 32, url: cabinStr5, title: 'Straight Type Cabin - On Road' },
          { id: 33, url: cabinStr6, title: 'Straight Type Cabin - Angled View' }
        ]
      },
      'aerodynamic': {
        title: 'Aerodynamic Cabin',
        tagline: 'Streamlined efficiency for modern transport',
        heroImage: cabinAero1,
        definition: 'Advanced aerodynamic cabin design engineered to reduce drag and maximize fuel efficiency. Features modern styling with cutting-edge comfort technology.',
        usage: [
          'Optimized for long-haul fuel efficiency',
          'Reduced wind resistance design',
          'Modern aesthetic appeal',
          'Enhanced driver comfort for extended trips',
          'Ideal for interstate and highway operations'
        ],
        productSpec: {
          dimensionType: 'L × W × H',
          seatingCapacity: '2 / 3-seater options',
          roofTypeHeight: 'Streamlined Standard Roof',
          material: 'Aluminum composite with steel reinforcement',
          aerodynamicFeatures: 'Air deflector, Streamlined hood, Roof fairing',
        },        externalDimensions: {
          length: '2,400 mm',
          width: '2,400 mm',
          height: '2,150 mm'
        },
        internalDimensions: {
          length: '2,200 mm',
          width: '2,200 mm',
          height: '1,950 mm'
        },
        weightCapacity: {
          maxGross: '2,300 kg',
          tare: '800 kg',
          payload: '1,500 kg'
        },
        safetyComfort: [
          
         
          'Telescopic steering wheel',
          'Enhanced soundproofing',
         
          'Premium LED lighting',
          'Ample storage space'
        ],
        gallery: [
          { id: 37, url: cabinAero1, title: 'Aerodynamic Cabin - Front View' },
          { id: 38, url: cabinAero2, title: 'Aerodynamic Cabin - Side Profile' },
          { id: 39, url: cabinAero3, title: 'Aerodynamic Cabin - Angled View' },
          { id: 40, url: cabinAero4, title: 'Aerodynamic Cabin - On Road' }
        ]
      },
      'karur-grill': {
        title: 'Cabin with Karur Grill',
        tagline: 'Traditional strength meets modern design',
        heroImage: cabinKarur1,
        definition: 'Robust cabin featuring the distinctive Karur-style front grill design, offering enhanced protection and traditional aesthetic appeal popular in Indian commercial vehicles.',
        usage: [
          'Enhanced frontal protection',
          'Traditional Karur styling',
          'Ideal for rugged terrain operations',
          'Preferred by regional transport operators',
          'Durable construction for heavy-duty use'
        ],
        productSpec: {
          dimensionType: 'L × W × H',
          seatingCapacity: '2 / 3-seater',
          roofTypeHeight: 'Standard Roof with reinforced structure',
          material: 'Heavy-duty steel with protective grill',
          aerodynamicFeatures: 'Standard with protective enhancement',
          
        },
        externalDimensions: {
          length: '2,300 mm',
          width: '2,450 mm',
          height: '2,100 mm'
        },
        internalDimensions: {
          length: '2,100 mm',
          width: '2,250 mm',
          height: '1,900 mm'
        },
        weightCapacity: {
          maxGross: '2,400 kg',
          tare: '850 kg',
          payload: '1,550 kg'
        },
        safetyComfort: [
          'Reinforced front protection',
         
          'Comfortable bench seating',
          'Adjustable controls',
          'Standard insulation',
          'Overhead storage',
          'Durable interior finish'
        ],
        gallery: [
          { id: 41, url: cabinKarur1, title: 'Karur Grill Cabin - Front View' },
          { id: 42, url: cabinKarur2, title: 'Karur Grill Cabin - Side Profile' },
          { id: 43, url: cabinKarur3, title: 'Karur Grill Cabin - Angled View' },
          { id: 44, url: cabinKarur4, title: 'Karur Grill Cabin - Detail' },
          { id: 45, url: cabinKarur5, title: 'Karur Grill Cabin - On Road' }
        ]
      },
      'centre-air-glass': {
        title: 'Cabin with Centre Air Glass',
        tagline: 'Modern ventilation with sleek design',
        heroImage: cabinCentreAir1,
        definition: 'Contemporary cabin design featuring center-mounted air vent system with glass panel integration, providing optimal airflow and modern aesthetic appeal.',
        usage: [
          'Enhanced natural ventilation',
          'Modern glass integration design',
          'Improved driver visibility',
          'Comfortable cabin atmosphere',
          'Suitable for urban and highway operations'
        ],
        productSpec: {
          dimensionType: 'L × W × H',
          seatingCapacity: '2-seater',
          roofTypeHeight: 'Standard with glass panel',
          material: 'Steel frame with glass composite',
          aerodynamicFeatures: 'Center air flow optimization',
        },
        externalDimensions: {
          length: '2,250 mm',
          width: '2,400 mm',
          height: '2,100 mm'
        },
        internalDimensions: {
          length: '2,050 mm',
          width: '2,200 mm',
          height: '1,900 mm'
        },
        weightCapacity: {
          maxGross: '2,250 kg',
          tare: '780 kg',
          payload: '1,470 kg'
        },
        safetyComfort: [
          'Safety glass windows',
          
        
          'Ventilated seating',
          'Multi-function steering',
          'Enhanced air circulation',
      
          'Modern dashboard layout'
        ],
        gallery: [
          { id: 46, url: cabinCentreAir1, title: 'Centre Air Glass - Front View' },
          { id: 47, url: cabinCentreAir2, title: 'Centre Air Glass - Side Profile' },
          { id: 48, url: cabinCentreAir3, title: 'Centre Air Glass - Interior' }
        ]
      },
      'curved-air-cutter': {
        title: 'Curved Type Air Cutter Vehicle',
        tagline: 'Ultimate aerodynamics for maximum efficiency',
        heroImage: cabinCurved1,
        definition: 'Premium cabin featuring advanced curved air cutter design for superior aerodynamic performance. Engineered to minimize wind resistance and maximize fuel economy on long-haul operations.',
        usage: [
          'Maximum fuel efficiency on highways',
          'Reduced wind noise at high speeds',
          'Premium comfort for long-distance drivers',
          'State-of-the-art design',
          'Ideal for premium fleet operations'
        ],
        productSpec: {
          dimensionType: 'L × W × H',
          seatingCapacity: '2-seater with sleeper option',
          roofTypeHeight: 'Curved aerodynamic profile',
          material: 'Lightweight aluminum composite',
          aerodynamicFeatures: 'Advanced air cutter, Side deflectors, Underbody panels',
        },
        externalDimensions: {
          length: '2,600 mm',
          width: '2,450 mm',
          height: '2,200 mm'
        },
        internalDimensions: {
          length: '2,400 mm',
          width: '2,250 mm',
          height: '2,000 mm'
        },
        weightCapacity: {
          maxGross: '2,500 kg',
          tare: '850 kg',
          payload: '1,650 kg'
        },
        safetyComfort: [
         
          'Electronic stability control',
          
          'Fully adjustable controls',
          
          'Ambient LED lighting',
          'Luxury interior trim'
        ],
        gallery: [
          { id: 49, url: cabinCurved1, title: 'Curved Air Cutter - Front View' },
          { id: 50, url: cabinCurved2, title: 'Curved Air Cutter - Side Profile' },
          { id: 51, url: cabinCurved3, title: 'Curved Air Cutter - Angled View' }
        ]
      }
    };

    return specs[modelId];
  };

  // --- 7. Event Handlers ---
  const handleCategorySelect = (categoryId: string) => {
    if (categoryId === 'containers') {
      setCurrentView('container-models');
    } else {
      setCurrentView('lorry-models');
    }
  };

  const handleModelSelect = (modelId: string, isLorry: boolean) => {
    setSelectedModel(modelId);
    setCurrentView(isLorry ? 'lorry-specs' : 'container-specs');
  };

  const handleBackToMain = () => {
    setCurrentView('main');
    setSelectedModel('');
  };

  const handleBackToModels = () => {
    if (currentView === 'container-specs') {
      setCurrentView('container-models');
    } else {
      setCurrentView('lorry-models');
    }
    setSelectedModel('');
  };

  const openLightbox = (gallery: any[], index: number) => {
    setLightboxImage({ gallery, index });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextLightboxImage = () => {
    if (lightboxImage) {
      const nextIndex = (lightboxImage.index + 1) % lightboxImage.gallery.length;
      setLightboxImage({ ...lightboxImage, index: nextIndex });
    }
  };

  const prevLightboxImage = () => {
    if (lightboxImage) {
      const prevIndex = (lightboxImage.index - 1 + lightboxImage.gallery.length) % lightboxImage.gallery.length;
      setLightboxImage({ ...lightboxImage, index: prevIndex });
    }
  };

  // --- 8. Effects ---
  useEffect(() => {
    // Handle deep linking from footer or other external links
    const hash = window.location.hash;
    if (hash === '#containers') {
      setCurrentView('container-models');
    } else if (hash === '#lorry-cabins') {
      setCurrentView('lorry-models');
    }
    // Clean up the hash
    if (window.history.pushState) { window.history.pushState('', document.title, window.location.pathname + window.location.search); } else { window.location.hash = ''; }
  }, []);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxImage) {
        if (e.key === 'ArrowRight') nextLightboxImage();
        if (e.key === 'ArrowLeft') prevLightboxImage();
        if (e.key === 'Escape') closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.targetTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) { // Swipe threshold
      if (diff > 0) {
        nextLightboxImage();
      } else {
        prevLightboxImage();
      }
      setTouchStart(null);
    }
  };

  // --- 9. Sub-components ---
  // Sticky CTA Component for Desktop
  const StickyCTA: React.FC<{ modelName: string; isCustomized?: boolean }> = ({ modelName, isCustomized }) => {
    const message = isCustomized
      ? `Hi, I need a customized container with specific features.`
      : `Hi, I want to enquire about ${modelName}`;

    return (
      <div className="sticky top-24 space-y-4">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Request a Quote</h3>
          <div className="space-y-3">
            <button className="w-full bg-slate-100 text-slate-700 py-3 px-4 rounded-lg font-semibold hover:bg-slate-200 transition-all duration-300 flex items-center justify-center space-x-2">
              <Download size={18} />
              <span>Download Brochure</span>
            </button>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
            >
              <Phone size={18} />
              <span>Call for Enquiry</span>
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-6">
          <h4 className="font-bold text-slate-900 mb-2">Need Expert Advice?</h4>
          <p className="text-sm text-slate-600 mb-4">
            Our team is ready to help you choose the perfect solution for your needs.
          </p>
          <button className="text-orange-600 font-semibold text-sm hover:text-orange-700 transition-colors">
            Contact Our Team →
          </button>
        </div>
      </div>
    );
  };

  // Mobile Sticky CTA Bar
  const MobileStickyCTA: React.FC<{ modelName: string; isCustomized?: boolean }> = ({ modelName, isCustomized }) => {
    const message = isCustomized
      ? `Hi, I need a customized container with specific features.`
      : `Hi, I want to enquire about ${modelName}`;

    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-2xl p-4 z-50 lg:hidden">
        <div className="flex space-x-2">
          <button className="flex-1 bg-slate-100 text-slate-700 py-3 px-4 rounded-lg font-semibold hover:bg-slate-200 transition-all flex items-center justify-center space-x-2">
            <Download size={16} />
            <span className="text-sm">Brochure</span>
          </button>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-all flex items-center justify-center space-x-2"
          >
            <Phone size={16} />
            <span className="text-sm">Call Us</span>
          </a>
        </div>
      </div>
    );
  };

  // --- 10. Render Functions ---
const renderMainCategories = () => (
  <div ref={gridRef} className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
    {mainCategories.map((category, index) => (
      <div
        key={category.id}
        className={`group relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ease-in-out cursor-pointer ${
          visibleGridItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        onClick={() => handleCategorySelect(category.id)}
      >
        {/* Image and Overlay */}
        <img
          src={category.image}
          alt={category.title}
          className={`w-full h-[450px] md:h-[600px] ${
            category.id === 'containers' ? 'object-contain' : 'object-cover'
          } object-center group-hover:scale-105 transition-all duration-1000 ease-in-out p-4`}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent transition-all duration-500 group-hover:from-slate-900/95"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
          <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-xl flex items-center justify-center mb-6 border border-white/20">
              <category.icon className="text-white" size={32} />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 drop-shadow-lg">
              {category.title}
            </h3>
            <p className="text-white/90 text-lg leading-relaxed drop-shadow-md max-w-md">
              {category.description}
            </p>
          </div>

          {/* Explore Button (appears on hover) */}
          <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:-translate-y-2">
            <div className="inline-flex items-center space-x-3 bg-white/90 backdrop-blur-md text-slate-900 px-8 py-4 rounded-lg font-bold shadow-lg">
              <span>Explore Products</span>
              <Eye size={20} />
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

  const renderContainerModels = () => (
    <div>
      <div className="flex items-center mb-8">
        <button
          onClick={handleBackToMain}
          className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 transition-colors font-semibold"
        >
          <ArrowLeft size={20} />
          <span>Back to Categories</span>
        </button>
      </div>

      <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {containerModels.map((model, index) => (
          <div
            key={model.id}
            className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
              visibleGridItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${model.isSpecial ? 'ring-2 ring-orange-400' : ''}`}
          >
            <div className="relative aspect-video overflow-hidden bg-slate-100 p-4">
              <img
                src={model.image}
                alt={model.title}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
 
              {model.isSpecial && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Custom
                </div>
              )}
            </div>
 
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                {model.title}
              </h3>
              <p className="text-slate-600 mb-5 leading-relaxed text-sm">
                {model.description}
              </p>
              <button 
                onClick={() => handleModelSelect(model.id, false)}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
              >
                <span>View Details</span>
                <Eye size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderLorryModels = () => (
    <div>
      <div className="flex items-center mb-8">
        <button
          onClick={handleBackToMain}
          className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 transition-colors font-semibold"
        >
          <ArrowLeft size={20} />
          <span>Back to Categories</span>
        </button>
      </div>

      <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lorryCabinModels.map((model, index) => (
          <div
            key={model.id}
            className={`group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer ${
              visibleGridItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative aspect-video overflow-hidden bg-gray-50 p-4">
              <img
                src={model.image}
                alt={model.title}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                {model.title}
              </h3>
              <p className="text-slate-600 mb-5 leading-relaxed text-sm">
                {model.description}
              </p>
              <button 
                onClick={() => handleModelSelect(model.id, true)}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
              >
                <span>View Details</span>
                <Eye size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContainerSpecs = () => {
    const specs = getContainerSpecs(selectedModel);
    if (!specs) return null;

    const isCustomized = selectedModel === 'customized';

    return (
      <div className="pb-24 lg:pb-0">
        <div className="flex items-center mb-8">
          <button
            onClick={handleBackToModels}
            className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 transition-colors font-semibold"
          >
            <ArrowLeft size={20} />
            <span>Back to Models</span>
          </button>
        </div>

        {/* Breadcrumb */}
        <div className="text-sm text-slate-600 mb-6 flex items-center space-x-2">
          <span>Home</span>
          <span>→</span>
          <span>Products</span>
          <span>→</span>
          <span>Container Solutions</span>
          <span>→</span>
          <span className="text-orange-600 font-semibold">{specs.title}</span>
        </div>

        {/* Hero Image Header */}
        <div className="relative h-72 sm:h-96 lg:h-[80vh] w-full rounded-2xl overflow-hidden mb-8 shadow-2xl">
          <img
            src={specs.heroImage}
            alt={specs.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {specs.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light">
              {specs.tagline}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Definition */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center space-x-3">
                <Box className="text-blue-600" size={28} />
                <span>Definition</span>
              </h2>
              <p className="text-slate-700 leading-relaxed text-lg">
                {specs.definition}
              </p>
            </div>

            {/* Usage */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center space-x-3">
                <Shield className="text-green-600" size={28} />
                <span>Usage Applications</span>
              </h2>
              <ul className="space-y-4">
                {specs.usage.map((use: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-slate-700 leading-relaxed">{use}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Specifications */}
            {!isCustomized ? (
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Product Specification</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="hidden md:table-header-group">
                      <tr className="border-b-2 border-slate-200">
                        <th className="text-left py-4 px-4 text-slate-600 font-semibold">Field</th>
                        <th className="text-left py-4 px-4 text-slate-600 font-semibold">Details</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {Object.entries(specs.productSpec).map(([key, value]) => (
                        <tr key={key} className="block md:table-row hover:bg-slate-50 transition-colors mb-4 md:mb-0">
                          <td className="block md:table-cell py-2 md:py-4 px-4 text-slate-600 font-medium capitalize">
                            <span className="md:hidden">{key.replace(/([A-Z])/g, ' $1').trim()}: </span>
                            <span className="hidden md:inline">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                          </td>
                          <td className="block md:table-cell py-2 md:py-4 px-4 text-slate-900 font-semibold">{value as string}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <>
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Product Specification</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {Object.entries(specs.productSpec).map(([key, value]) => (
                      <div key={key} className="bg-gradient-to-br from-slate-50 to-white p-4 rounded-xl border border-slate-200">
                        <div className="text-sm text-slate-500 mb-1 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                        <div className="text-slate-900 font-semibold">{value as string}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Optional Add-ons */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 md:p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Optional Add-ons</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {specs.optionalAddons.map((addon: any, index: number) => (
                      <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow">
                        <span className="text-2xl">{addon.icon}</span>
                        <span className="text-slate-700 font-medium">{addon.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Dimensions Section - Professional Layout */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Internal Dimensions</h2>

              <div className="space-y-8">
                {/* Internal Dimensions */}
                <div>
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(specs.internalDimensions).map(([key, value]) => (
                      <div key={key} className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl p-4 text-center">
                        <div className="text-xs uppercase tracking-wide text-green-600 font-semibold mb-2">
                          {key}
                        </div>
                        <div className="text-lg font-bold text-slate-900">
                          {value as string}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Door Opening */}
                <div>
                  <div className="flex items-center space-x-2 mb-4 pb-2 border-b-2 border-orange-100">
                    <DoorOpen className="text-orange-600" size={22} />
                    <h3 className="text-lg font-bold text-slate-900">Door Opening</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(specs.doorOpening).map(([key, value]) => (
                      <div key={key} className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl p-4 text-center">
                        <div className="text-xs uppercase tracking-wide text-orange-600 font-semibold mb-2">
                          {key}
                        </div>
                        <div className="text-lg font-bold text-slate-900">
                          {value as string}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Weight Specifications */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center space-x-3">
                <Package className="text-slate-600" size={28} />
                <span>Weight Specifications</span>
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(specs.weight).map(([key, value]) => (
                  <div key={key} className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 text-center border border-slate-200">
                    <div className="text-xs uppercase tracking-wide text-slate-500 font-semibold mb-3">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className="text-2xl font-bold text-slate-900">
                      {value as string}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Gallery */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center space-x-3">
                <Eye className="text-slate-600" size={28} />
                <span>Image Gallery</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {specs.gallery.map((image: any, index: number) => (
                  <div 
                    key={image.id} 
                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                    onClick={() => openLightbox(specs.gallery, index)}
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-56 sm:h-64 object-contain bg-slate-100 p-2 object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-semibold text-slate-900">{image.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Sidebar - Desktop */}
          <div className="hidden lg:block lg:col-span-1">
            <StickyCTA modelName={specs.title} isCustomized={isCustomized} />
          </div>
        </div>

        {/* Mobile Sticky CTA */}
        <MobileStickyCTA modelName={specs.title} isCustomized={isCustomized} />
      </div>
    );
  };

  const renderLorryCabinSpecs = () => {
    const specs = getLorryCabinSpecs(selectedModel);
    if (!specs) return null;

    return (
      <div className="pb-24 lg:pb-0">
        <div className="flex items-center mb-8">
          <button
            onClick={handleBackToModels}
            className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 transition-colors font-semibold"
          >
            <ArrowLeft size={20} />
            <span>Back to Models</span>
          </button>
        </div>

        {/* Breadcrumb */}
        <div className="text-sm text-slate-600 mb-6 flex items-center space-x-2">
          <span>Home</span>
          <span>→</span>
          <span>Products</span>
          <span>→</span>
          <span>Lorry Cabins</span>
          <span>→</span>
          <span className="text-orange-600 font-semibold">{specs.title}</span>
        </div>

        {/* Hero Image Header */}
        <div className="relative h-72 sm:h-96 lg:h-[80vh] w-full rounded-2xl overflow-hidden mb-8 shadow-2xl">
          <img
            src={specs.heroImage}
            alt={specs.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {specs.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light">
              {specs.tagline}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Definition */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center space-x-3">
                <Truck className="text-blue-600" size={28} />
                <span>Definition</span>
              </h2>
              <p className="text-slate-700 leading-relaxed text-lg">
                {specs.definition}
              </p>
            </div>

            {/* Usage */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center space-x-3">
                <Shield className="text-green-600" size={28} />
                <span>Usage Applications</span>
              </h2>
              <ul className="space-y-4">
                {specs.usage.map((use: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-slate-700 leading-relaxed">{use}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Specifications</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="hidden md:table-header-group">
                    <tr className="border-b-2 border-slate-200">
                      <th className="text-left py-4 px-4 text-slate-600 font-semibold">Field</th>
                      <th className="text-left py-4 px-4 text-slate-600 font-semibold">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {Object.entries(specs.productSpec).map(([key, value]) => (
                      <tr key={key} className="block md:table-row hover:bg-slate-50 transition-colors mb-4 md:mb-0">
                        <td className="block md:table-cell py-2 md:py-4 px-4 text-slate-600 font-medium capitalize">
                          <span className="md:hidden">{key.replace(/([A-Z])/g, ' $1').trim()}: </span>
                          <span className="hidden md:inline">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                        </td>
                        <td className="block md:table-cell py-2 md:py-4 px-4 text-slate-900 font-semibold">{value as string}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Dimensions Section - Professional Layout */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Internal Dimensions</h2>

              <div className="space-y-8">
                {/* Internal Dimensions */}
                <div>
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(specs.internalDimensions).map(([key, value]) => (
                      <div key={key} className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl p-4 text-center">
                        <div className="text-xs uppercase tracking-wide text-green-600 font-semibold mb-2">
                          {key}
                        </div>
                        <div className="text-lg font-bold text-slate-900">
                          {value as string}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Weight & Capacity */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center space-x-3">
                <Package className="text-slate-600" size={28} />
                <span>Weight & Capacity</span>
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(specs.weightCapacity).map(([key, value]) => (
                  <div key={key} className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 text-center border border-slate-200">
                    <div className="text-xs uppercase tracking-wide text-slate-500 font-semibold mb-3">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className="text-2xl font-bold text-slate-900">
                      {value as string}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety & Comfort Features */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center space-x-3">
                <Shield className="text-green-600" size={28} />
                <span>Safety & Comfort Features</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {specs.safetyComfort.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Gallery */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center space-x-3">
                <Eye className="text-slate-600" size={28} />
                <span>Image Gallery</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {specs.gallery.map((image: any, index: number) => (
                  <div 
                    key={image.id} 
                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                    onClick={() => openLightbox(specs.gallery, index)}
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-56 sm:h-64 object-contain bg-slate-100 p-2 object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-semibold text-slate-900">{image.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Sidebar - Desktop */}
          <div className="hidden lg:block lg:col-span-1">
            <StickyCTA modelName={specs.title} />
          </div>
        </div>

        {/* Mobile Sticky CTA */}
        <MobileStickyCTA modelName={specs.title} />
      </div>
    );
  };

  // --- 11. Main Component Render ---
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 pt-24 md:pt-32">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center bg-gradient-to-r from-orange-600/10 to-blue-600/10 backdrop-blur-sm border border-orange-400/20 rounded-full px-6 py-2 mb-6">
              <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 animate-pulse"></span>
              <span className="text-orange-600 text-sm font-semibold">
                {currentView === 'main'
                  ? 'Product Categories'
                  : currentView === 'container-models' || currentView === 'lorry-models'
                  ? 'Explore Our Models'
                  : 'Detailed Specifications'}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              {currentView === 'main'
                ? 'Our Product Range'
                : currentView === 'container-models'
                ? 'Container Solutions'
                : currentView === 'lorry-models'
                ? 'Lorry Cabin Solutions'
                : 'Product Specifications'}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {currentView === 'main'
                ? 'Choose from our comprehensive range of containers and lorry cabins designed for various transportation and commercial needs.'
                : currentView === 'container-models'
                ? 'Durable and customizable containers built for logistics, export, and industrial applications.'
                : currentView === 'lorry-models'
                ? 'High-performance truck cabins designed for strength, comfort, and aerodynamics.'
                : 'Comprehensive details and technical specifications for your selected product.'}
            </p>
          </div>

          {/* Content Rendering */}
          {currentView === 'main' && renderMainCategories()}
          {currentView === 'container-models' && renderContainerModels()}
          {currentView === 'lorry-models' && renderLorryModels()}
          {currentView === 'container-specs' && renderContainerSpecs()}
          {currentView === 'lorry-specs' && renderLorryCabinSpecs()}
        </div>

        {/* Lightbox Modal */}
        {lightboxImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <div className="relative max-w-6xl max-h-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X size={20} />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevLightboxImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextLightboxImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image and Info */}
              <div className="text-center">
                <img
                  src={lightboxImage.gallery[lightboxImage.index].url}
                  alt={lightboxImage.gallery[lightboxImage.index].title}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
                <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white max-w-2xl mx-auto">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{lightboxImage.gallery[lightboxImage.index].title}</h3>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
