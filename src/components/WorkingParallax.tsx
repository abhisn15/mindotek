'use client';

import { useEffect, useRef } from 'react';

export default function WorkingParallax() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      
      if (backgroundRef.current) {
        // Simple parallax effect - background moves slower than scroll
        const yPos = scrollTop * 10;
        backgroundRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Background image with parallax */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{ 
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0)'
        }}
      >
        <img
          src="/assets/banner-hero.webp"
          alt="Mindotek Warehouse Facility"
          className="w-full h-full object-cover"
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            filter: 'brightness(0.8)'
          }}
        />
      </div>

      {/* Static overlay */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      
      {/* Static gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white via-white/10 to-transparent pointer-events-none" />
    </div>
  );
}
