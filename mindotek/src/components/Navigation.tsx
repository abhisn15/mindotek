"use client";

import Image from "next/image";
import Link from "next/link";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useState, useEffect, useCallback, useMemo } from "react";

// Types
interface MenuItem {
  id: string;
  label: string;
  ariaLabel: string;
}

// Constants
const SCROLL_THRESHOLD = 50;
const SCROLL_OFFSET = -80; // Offset for fixed header

const SECTION_IDS = [
  "hero",
  "company",
  "vision-mission",
  "services",
  "locations",
  "portfolio",
  "contact",
] as const;

const MENU_ITEMS: MenuItem[] = [
  { id: "hero", label: "Home", ariaLabel: "Navigate to home section" },
  { id: "company", label: "About Us", ariaLabel: "Navigate to about us section" },
  { id: "vision-mission", label: "Vision", ariaLabel: "Navigate to vision and mission section" },
  { id: "services", label: "Services", ariaLabel: "Navigate to services section" },
  { id: "locations", label: "Locations", ariaLabel: "Navigate to locations section" },
  { id: "portfolio", label: "Portfolio", ariaLabel: "Navigate to portfolio section" },
  { id: "contact", label: "Contact", ariaLabel: "Navigate to contact section" },
];

export default function Navigation() {
  const activeSection = useActiveSection(SECTION_IDS as unknown as string[]);
  const [isScrolled, setIsScrolled] = useState(false);

  // Memoized check for active section
  const isActive = useCallback(
    (sectionId: string) => activeSection === sectionId,
    [activeSection]
  );

  // Optimized scroll handler with smooth scrolling
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY + SCROLL_OFFSET;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>, sectionId: string) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        scrollToSection(sectionId);
      }
    },
    [scrollToSection]
  );

  // Optimized scroll listener with throttling
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
      }, 10); // Throttle to 100fps max
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  // Memoize logo src to prevent unnecessary re-renders
  const logoSrc = useMemo(
    () =>
      isScrolled
        ? "/assets/logo-mindotek-black.webp"
        : "/assets/logo-mindotek-white.webp",
    [isScrolled]
  );

  return (
    <nav
      className={`hidden md:block fixed top-0 w-full transition-all duration-300 z-50 ${
        isScrolled
          ? "bg-white/65 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-lg transition-all"
              aria-label="Mindotek home page"
            >
              <Image
                src={logoSrc}
                alt="Mindotek - PT. Logamindo Teknologi Indonesia"
                className="hidden lg:block hover:opacity-90 transition-opacity"
                width={240}
                height={40}
                style={{ width: "240px", height: "auto" }}
                priority
                quality={90}
              />
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-1" role="menubar">
            {MENU_ITEMS.map((item) => {
              const active = isActive(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  onKeyDown={(e) => handleKeyDown(e, item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                    active
                      ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-md"
                      : isScrolled
                      ? "text-gray-700 hover:bg-red-50 hover:text-red-600"
                      : "text-white hover:bg-white/20 hover:text-white"
                  }`}
                  aria-label={item.ariaLabel}
                  aria-current={active ? "page" : undefined}
                  role="menuitem"
                  tabIndex={0}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
