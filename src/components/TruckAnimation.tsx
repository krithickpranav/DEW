/**
 * TruckAnimation.tsx
 *
 * Fixed-position truck at the very bottom of every page.
 * – The JPEG image is STATIC (never slides/moves).
 * – Spinning wheel overlays rotate proportionally to scroll distance
 *   (wheel circumference math → realistic rotation).
 * – Exhaust smoke particles rise from cab top while scrolling.
 * – Road dashes animate while scrolling.
 * – All effects pause naturally when the user stops scrolling.
 */

import React, { useEffect, useRef, useState, useCallback } from 'react';

const truckSrc = new URL(
  '../assets/home page phot and logo/anima.jpeg',
  import.meta.url
).href;

// ─── Wheel config (percentages of the rendered truck image dimensions) ────────
// Measured from the actual anima.jpeg side-view:
//   3 rear wheels bunched at  ~27%, ~35%, ~43% from left, ~85% from top
//   1 front wheel at           ~86% from left,             ~85% from top
const WHEELS = [
  { id: 'r1', leftPct: 26.5, topPct: 76 },   // rear-most
  { id: 'r2', leftPct: 34.0, topPct: 76 },   // rear-mid
  { id: 'r3', leftPct: 41.5, topPct: 76 },   // rear-front
  { id: 'f1', leftPct: 85.5, topPct: 76 },   // front wheel
];

// Approximate visual radius of each wheel in the 180-px-tall image (px)
const WHEEL_VISUAL_RADIUS = 13; // px at truck display height of ~180px

// ─── Smoke particle positions (from top of exhaust pipe on cab) ───────────────
//   Exhaust stack appears at roughly 88% left, 8% top of the image
const EXHAUST = { leftPct: 87.5, topPct: 6 };

// Number of staggered smoke puffs
const SMOKE_COUNT = 6;

// ─── Component ────────────────────────────────────────────────────────────────
const TruckAnimation: React.FC = () => {
  const [wheelDeg, setWheelDeg]     = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDelta, setScrollDelta] = useState(0);

  const degRef    = useRef(0);           // accumulated rotation (no re-render on every px)
  const lastY     = useRef(window.scrollY);
  const stopTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Realistic wheel rotation: degrees = (pixels scrolled) / (2π·r) × 360
  const DEG_PER_PX = 360 / (2 * Math.PI * WHEEL_VISUAL_RADIUS);

  const onScroll = useCallback(() => {
    const currentY = window.scrollY;
    const dy = Math.abs(currentY - lastY.current);
    lastY.current = currentY;

    degRef.current = (degRef.current + dy * DEG_PER_PX) % 36000; // keep in manageable range
    setWheelDeg(degRef.current);
    setScrollDelta(dy);
    setIsScrolling(true);

    if (stopTimer.current) clearTimeout(stopTimer.current);
    stopTimer.current = setTimeout(() => {
      setIsScrolling(false);
      setScrollDelta(0);
    }, 350);
  }, [DEG_PER_PX]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (stopTimer.current) clearTimeout(stopTimer.current);
    };
  }, [onScroll]);

  // Smoke speed: faster scroll → heavier smoke
  const smokeIntensity = isScrolling ? Math.min(1, scrollDelta / 30) : 0;
  const smokeDuration  = isScrolling ? Math.max(0.8, 2.5 - smokeIntensity * 1.5) : 4;

  return (
    <>
      {/* ── CSS Keyframes injected once ── */}
      <style>{`
        @keyframes truckRoadDash {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes smokeRise {
          0%   { transform: translateY(0)    scale(0.4); opacity: 0.75; }
          40%  { transform: translateY(-28px) scale(0.9); opacity: 0.45; }
          80%  { transform: translateY(-52px) scale(1.5); opacity: 0.18; }
          100% { transform: translateY(-72px) scale(2.0); opacity: 0;    }
        }

        @keyframes roadFlicker {
          0%,100% { opacity: 0.18; }
          50%      { opacity: 0.28; }
        }
      `}</style>

      {/* ── Fixed banner at bottom ── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-30 pointer-events-none select-none"
        aria-hidden="true"
      >
        {/* Road strip */}
        <div
          style={{
            position: 'relative',
            height: '90px',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 30%, rgba(10,10,14,0.92) 100%)',
            overflow: 'hidden',
          }}
        >
          {/* Top amber guardrail */}
          <div style={{
            position: 'absolute', top: 28, left: 0, right: 0,
            height: '2px',
            background: 'rgba(245,158,11,0.35)',
            boxShadow: '0 0 6px rgba(245,158,11,0.2)',
          }} />

          {/* Scrolling dashed centre lane — animates only while scrolling */}
          <div
            style={{
              position: 'absolute',
              top: '58px',
              left: 0,
              width: '200%',
              display: 'flex',
              gap: '28px',
              alignItems: 'center',
              animation: isScrolling
                ? `truckRoadDash ${Math.max(0.4, 0.9 - smokeIntensity * 0.4)}s linear infinite`
                : 'none',
              willChange: 'transform',
            }}
          >
            {Array.from({ length: 60 }).map((_, i) => (
              <span
                key={i}
                style={{
                  display: 'inline-block',
                  width: '36px', height: '2px',
                  background: 'rgba(255,255,255,0.22)',
                  borderRadius: '2px',
                  flexShrink: 0,
                }}
              />
            ))}
          </div>

          {/* Bottom boundary line */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            height: '2px',
            background: 'rgba(255,255,255,0.15)',
          }} />

          {/* ── THE TRUCK (STATIC IMAGE — never moves) ── */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '520px',
              maxWidth: '90vw',
            }}
          >
            {/* Exhaust SMOKE — rendered BEFORE image so it appears behind/from top */}
            {Array.from({ length: SMOKE_COUNT }).map((_, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  left: `${EXHAUST.leftPct}%`,
                  top: `${EXHAUST.topPct}%`,
                  width: `${10 + i * 4}px`,
                  height: `${10 + i * 4}px`,
                  borderRadius: '50%',
                  background: i % 2 === 0
                    ? 'rgba(160,160,160,0.55)'
                    : 'rgba(200,200,200,0.40)',
                  filter: 'blur(3px)',
                  opacity: isScrolling ? 0.75 : 0,
                  animationName: 'smokeRise',
                  animationDuration: `${smokeDuration + i * 0.18}s`,
                  animationDelay: `${(i * smokeDuration) / SMOKE_COUNT}s`,
                  animationTimingFunction: 'ease-out',
                  animationIterationCount: 'infinite',
                  animationPlayState: isScrolling ? 'running' : 'paused',
                  transition: 'opacity 0.4s ease',
                  pointerEvents: 'none',
                  zIndex: 2,
                }}
              />
            ))}

            {/* Truck JPEG — always in same position */}
            <img
              src={truckSrc}
              alt="Deepam Engineering Works Container Truck"
              draggable={false}
              style={{
                display: 'block',
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 -4px 20px rgba(0,0,0,0.8))',
                position: 'relative',
                zIndex: 3,
              }}
            />

            {/* ── SPINNING WHEEL OVERLAYS ── */}
            {WHEELS.map((w) => (
              <div
                key={w.id}
                style={{
                  position: 'absolute',
                  left:  `${w.leftPct}%`,
                  top:   `${w.topPct}%`,
                  width:  `${WHEEL_VISUAL_RADIUS * 2}px`,
                  height: `${WHEEL_VISUAL_RADIUS * 2}px`,
                  transform: `translate(-50%, -50%) rotate(${wheelDeg}deg)`,
                  zIndex: 4,
                  willChange: 'transform',
                  // Wheel ring with spokes visual
                  borderRadius: '50%',
                  border: '3px solid rgba(200,30,30,0.85)',
                  boxShadow: 'inset 0 0 0 2px rgba(0,0,0,0.5)',
                  background: `
                    repeating-conic-gradient(
                      from 0deg,
                      rgba(160,20,20,0.9) 0deg 6deg,
                      rgba(20,20,20,0.7) 6deg 60deg
                    )
                  `,
                }}
              >
                {/* Hub centre dot */}
                <div style={{
                  position: 'absolute',
                  top: '50%', left: '50%',
                  transform: 'translate(-50%,-50%)',
                  width: '6px', height: '6px',
                  borderRadius: '50%',
                  background: '#22c55e',
                  boxShadow: '0 0 4px rgba(34,197,94,0.8)',
                }} />
              </div>
            ))}
          </div>

          {/* Ground shadow under truck */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '400px',
            maxWidth: '75vw',
            height: '12px',
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.6) 0%, transparent 70%)',
            filter: 'blur(4px)',
          }} />
        </div>
      </div>
    </>
  );
};

export default TruckAnimation;
