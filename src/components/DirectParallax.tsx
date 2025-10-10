'use client';

import { useEffect, useRef } from 'react';

export default function DirectParallax() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      
      // Background image parallax
      if (backgroundRef.current) {
        const yPos = scrollTop * 0.5;
        backgroundRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
      
      // Overlay parallax
      if (overlayRef.current) {
        const yPos = scrollTop * 0.3;
        overlayRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
      
      // Gradient parallax
      if (gradientRef.current) {
        const yPos = scrollTop * 0.2;
        gradientRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
    };

    // Throttled scroll listener
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
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Background image with parallax */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{ willChange: 'transform' }}
      >
        <img
          src="/assets/banner-hero.webp"
          alt="Mindotek Warehouse Facility"
          className="w-full h-full object-cover brightness-80"
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            filter: 'brightness(0.8)'
          }}
        />
      </div>

      {/* Overlay layer with parallax */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none"
        style={{ willChange: 'transform' }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20" />
      </div>

      {/* Gradient layer with parallax */}
      <div 
        ref={gradientRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none"
        style={{ willChange: 'transform' }}
      >
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white via-white/10 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 via-transparent to-orange-900/5"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-red-300/20 to-orange-300/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-orange-300/20 to-red-300/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-12 sm:w-20 h-12 sm:h-20 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-full blur-xl animate-pulse"></div>
      </div>
    </div>
  );
}
