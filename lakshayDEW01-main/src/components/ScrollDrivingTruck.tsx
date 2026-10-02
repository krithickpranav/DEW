import React, { useEffect, useState, useRef } from 'react';
import companyLogo from '../assets/logo/ChatGPT Image Mar 5, 2026, 01_53_39 PM.webp';

const truckSrc = new URL('../assets/home page phot and logo/anima.jpeg', import.meta.url).href;

const WHEELS = [
  { id: 'r1', leftPct: 26.5, topPct: 76 },   // rear-most
  { id: 'r2', leftPct: 34.0, topPct: 76 },   // rear-mid
  { id: 'r3', leftPct: 41.5, topPct: 76 },   // rear-front
  { id: 'f1', leftPct: 85.5, topPct: 76 },   // front wheel
];

const WHEEL_VISUAL_RADIUS_PX = 5;
const EXHAUST = { leftPct: 87.5, topPct: 6 };
const TRUCK_WIDTH = 200; // slightly wider to show the logo nicely

const ScrollDrivingTruck: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [wheelRotation, setWheelRotation] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState(0);
  
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight);
      const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
      
      const deltaY = scrollY - lastScrollY.current;
      lastScrollY.current = scrollY;

      setScrollProgress(progress);
      setScrollSpeed(deltaY);
      
      const screenWidth = window.innerWidth;
      const totalTravelDistance = screenWidth + TRUCK_WIDTH;
      const distanceTravelled = progress * totalTravelDistance;
      const circumference = 2 * Math.PI * WHEEL_VISUAL_RADIUS_PX;
      const rotation = (distanceTravelled / circumference) * 360;
      setWheelRotation(rotation);

      setIsScrolling(true);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
        setScrollSpeed(0);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  const truckLeftPosition = `calc(${-TRUCK_WIDTH}px + ${scrollProgress * 100}vw + ${scrollProgress * TRUCK_WIDTH}px)`;

  const smokeParticles = Array.from({ length: 10 }).map((_, i) => {
    const delay = i * 0.12;
    return (
      <div
        key={i}
        className="absolute rounded-full pointer-events-none"
        style={{
          left: `${EXHAUST.leftPct}%`,
          top: `${EXHAUST.topPct}%`,
          width: '7px',
          height: '7px',
          background: 'rgba(120, 120, 120, 0.7)',
          filter: 'blur(3px)',
          opacity: isScrolling ? 1 : 0,
          animation: isScrolling ? `smokeRise 1.2s linear infinite` : 'none',
          animationDelay: `${delay}s`,
          zIndex: 10,
        }}
      />
    );
  });

  return (
    <>
      <style>{`
        @keyframes smokeRise {
          0% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          100% { transform: translate(-25px, -35px) scale(3.5); opacity: 0; }
        }
        @keyframes roadDashes {
          0% { background-position: 0 0; }
          100% { background-position: -40px 0; }
        }
      `}</style>
      <div className="fixed bottom-0 left-0 w-full h-[60px] z-[100] pointer-events-none" aria-hidden="true">
        {/* Road line */}
        <div 
           className="absolute bottom-2 w-full h-[2px] bg-slate-400/30"
           style={{
             backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.4) 50%, transparent 50%)',
             backgroundSize: '40px 2px',
             animation: isScrolling ? `roadDashes ${scrollSpeed > 0 ? 0.3 : (scrollSpeed < 0 ? -0.3 : 0)}s linear infinite` : 'none',
             animationDirection: scrollSpeed < 0 ? 'reverse' : 'normal'
           }}
        />
        
        {/* The Truck Container */}
        <div 
          className="absolute bottom-3 will-change-transform"
          style={{
            width: `${TRUCK_WIDTH}px`,
            left: truckLeftPosition,
            transition: 'left 0.1s linear',
          }}
        >
          {smokeParticles}
          <svg width="0" height="0" className="absolute">
            <defs>
              <filter id="remove-black" colorInterpolationFilters="sRGB">
                <feColorMatrix type="matrix" values="
                  1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  2 2 2 0 0
                " />
              </filter>
            </defs>
          </svg>
          
          <div className="relative w-full h-auto z-20">
            {/* Dark backdrop behind the container text to fill in the transparency created by #remove-black, making the logo solid dark on all backgrounds */}
            <div 
              className="absolute bg-slate-900 rounded-sm" 
              style={{ left: '12%', top: '25%', width: '55%', height: '40%', zIndex: -1 }} 
            />
            
            <img src={truckSrc} 
              alt="Moving Truck" 
              className="w-full h-auto drop-shadow-xl"
              style={{ filter: 'url(#remove-black) contrast(1.4) saturate(1.4) brightness(1.1)' }}
            />
          </div>
          
          {/* Wheel Overlays */}
          {WHEELS.map((w) => (
            <div
              key={w.id}
              className="absolute z-30 rounded-full border-2 border-slate-800/80 bg-slate-900 shadow-inner flex items-center justify-center will-change-transform"
              style={{
                left: `${w.leftPct}%`,
                top: `${w.topPct}%`,
                width: `${WHEEL_VISUAL_RADIUS_PX * 2}px`,
                height: `${WHEEL_VISUAL_RADIUS_PX * 2}px`,
                transform: `translate(-50%, -50%) rotate(${wheelRotation}deg)`,
                transition: 'transform 0.1s linear',
                backgroundImage: 'repeating-conic-gradient(from 0deg, #1e293b 0deg 30deg, #0f172a 30deg 60deg)',
              }}
            >
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full shadow-sm" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ScrollDrivingTruck;

