'use client';

import { useEffect, useRef } from 'react';

export default function AdvancedHeroParallax() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      
      // Different parallax speeds for different layers
      if (backgroundRef.current) {
        const yPos = scrollTop * 0.4; // Background moves slower
        backgroundRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
      
      if (overlayRef.current) {
        const yPos = scrollTop * 0.2; // Overlay moves even slower
        overlayRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
      
      if (gradientRef.current) {
        const yPos = scrollTop * 0.1; // Gradient moves slowest
        gradientRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
      
      if (floatingRef.current) {
        // Floating elements move very slowly with slight rotation
        const yPos = scrollTop * 0.05;
        const rotation = scrollTop * 0.02;
        floatingRef.current.style.transform = `translate3d(0, ${yPos}px, 0) rotate(${rotation}deg)`;
      }
    };

    // Throttled scroll listener for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  return (
    <div className="absolute top-0 inset-0 overflow-hidden">
      {/* Background image with parallax */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{ 
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0)'
        }}
      >
        <div
          className="w-full h-full bg-cover bg-center rounded-b-xl sm:rounded-b-4xl"
          style={{
            backgroundImage: "url('/assets/banner-hero.webp')",
            backgroundAttachment: 'scroll',
            filter: 'brightness(0.8) contrast(1.1)',
          }}
        />
      </div>

      {/* Dark overlay with parallax */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none"
        style={{ 
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0)'
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/10" />
      </div>

      {/* Gradient overlay with parallax */}
      <div 
        ref={gradientRef}
        className="absolute inset-0 w-full pointer-events-none"
        style={{ 
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0)'
        }}
      >
        {/* Subtle color tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 via-transparent to-orange-900/5"></div>
      </div>

      {/* Floating elements with subtle parallax */}
      <div 
        ref={floatingRef}
        className="absolute inset-0 pointer-events-none"
        style={{ 
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0)'
        }}
      >
        <div className="absolute top-16 left-10 w-32 h-32 bg-gradient-to-br from-red-400/15 to-orange-400/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-orange-400/15 to-red-400/15 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-red-300/10 to-orange-300/10 rounded-full blur-xl animate-pulse"></div>
      </div>
    </div>
  );
}
