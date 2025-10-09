'use client';

import Image from 'next/image';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const sectionIds = ['hero', 'company', 'services', 'vision-mission', 'locations', 'wms', 'contact'];
  const activeSection = useActiveSection(sectionIds);
  const [isScrolled, setIsScrolled] = useState(false);

  const isActive = (sectionId: string) => activeSection === sectionId;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Navbar berubah setelah scroll 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`hidden md:block fixed top-0 w-full transition-all duration-300 z-50 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-red-100/30'
        : 'bg-transparent backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <div className="flex items-center">
            <div className="mr-3 sm:mr-4">
              <Image
                src="/assets/logo-mindotek.webp"
                alt="Mindotek Logo"
                width={48}
                height={48}
                className={`h-10 sm:h-12 w-auto transition-all duration-300 ${
                  isScrolled ? '' : 'brightness-0 invert'
                }`}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('company')}
              className={`transition-all duration-300 font-medium hover:scale-105 relative group ${
                isScrolled
                  ? (isActive('company') ? 'text-red-600' : 'text-gray-700 hover:text-red-600')
                  : (isActive('company') ? 'text-red-600' : 'text-white hover:text-red-300')
              }`}
            >
              Company
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300 ${
                isActive('company') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
            <button
              onClick={() => scrollToSection('vision-mission')}
              className={`transition-all duration-300 font-medium hover:scale-105 relative group ${
                isScrolled
                  ? (isActive('vision-mission') ? 'text-red-600' : 'text-gray-700 hover:text-red-600')
                  : (isActive('vision-mission') ? 'text-red-600' : 'text-white hover:text-red-300')
              }`}
            >
              Vision
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300 ${
                isActive('vision-mission') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`transition-all duration-300 font-medium hover:scale-105 relative group ${
                isScrolled
                  ? (isActive('services') ? 'text-red-600' : 'text-gray-700 hover:text-red-600')
                  : (isActive('services') ? 'text-red-600' : 'text-white hover:text-red-300')
              }`}
            >
              Services
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300 ${
                isActive('services') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
            <button
              onClick={() => scrollToSection('locations')}
              className={`transition-all duration-300 font-medium hover:scale-105 relative group ${
                isScrolled
                  ? (isActive('locations') ? 'text-red-600' : 'text-gray-700 hover:text-red-600')
                  : (isActive('locations') ? 'text-red-600' : 'text-white hover:text-red-300')
              }`}
            >
              Locations
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300 ${
                isActive('locations') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
            <button
              onClick={() => scrollToSection('wms')}
              className={`transition-all duration-300 font-medium hover:scale-105 relative group ${
                isScrolled
                  ? (isActive('wms') ? 'text-red-600' : 'text-gray-700 hover:text-red-600')
                  : (isActive('wms') ? 'text-red-600' : 'text-white hover:text-red-300')
              }`}
            >
              WMS
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300 ${
                isActive('wms') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`transition-all duration-300 font-medium hover:scale-105 relative group ${
                isScrolled
                  ? (isActive('contact') ? 'text-red-600' : 'text-gray-700 hover:text-red-600')
                  : (isActive('contact') ? 'text-red-600' : 'text-white hover:text-red-300')
              }`}
            >
              Contact
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300 ${
                isActive('contact') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
