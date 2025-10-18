"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

// Types
interface MenuItem {
  label: string;
  link: string;
  id: string;
  isExternal?: boolean;
  ariaLabel: string;
}

// Constants
const SCROLL_THRESHOLD = 50;
const SCROLL_OFFSET = -72;
const ANIMATION_STAGGER_DELAY = 0.05;

// Menu items generator with proper types and accessibility
const getMenuItems = (): MenuItem[] => {
  return [
    { 
      label: "Home", 
      link: "/", 
      id: "home", 
      isExternal: false,
      ariaLabel: "Navigate to home page" 
    },
    {
      label: "About Us",
      link: "/about",
      id: "about",
      isExternal: false,
      ariaLabel: "Navigate to about us page"
    },
    {
      label: "Services",
      link: "/services",
      id: "services",
      isExternal: false,
      ariaLabel: "Navigate to services page"
    },
    {
      label: "Client",
      link: "/client",
      id: "client",
      isExternal: false,
      ariaLabel: "Navigate to client page"
    },
    {
      label: "Career",
      link: "/career",
      id: "career",
      isExternal: false,
      ariaLabel: "Navigate to career page"
    },
    { 
      label: "Contact", 
      link: "/contact", 
      id: "contact", 
      isExternal: false,
      ariaLabel: "Navigate to contact page"
    },
  ];
};

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollPositionRef = useRef(0);
  
  const observerRef = useRef<IntersectionObserver | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Get memoized menu items
  const menuItems = useMemo(() => getMenuItems(), []);

  // Memoize logo source
  const logoSrc = useMemo(
    () =>
      isScrolled
        ? "/assets/logo-tpm-text-black.webp"
        : "/assets/logo-tpm-text-white.webp",
    [isScrolled]
  );

  // Close menu handler
  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Toggle menu handler
  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Body scroll lock when menu is open
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position to ref
      scrollPositionRef.current = window.scrollY;
      
      // Lock body scroll
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
    } else {
      // Remove body scroll lock
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      
      // Restore scroll position immediately
      window.scrollTo({
        top: scrollPositionRef.current,
        left: 0,
        behavior: 'instant' as ScrollBehavior
      });
    }

    return () => {
      // Cleanup on unmount
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Keyboard navigation - ESC to close menu
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeMenu]);

  // Optimized scroll handler with throttling
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      if (isOpen) return;
      
      if (timeoutId) clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
      }, 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isOpen]);

  // Handle menu item click with proper navigation
  const handleMenuClick = useCallback(
    (link: string, isExternal?: boolean) => {
      router.push(link);
      closeMenu();
    },
    [router, closeMenu]
  );

  // Function to check if a link is active based on pathname
  const isActiveLink = useCallback((link: string, pathname: string) => {
    if (link === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(link);
  }, []);

  return (
    <>
      {/* Mobile Header with Logo and Menu Button */}
      <header
        className={`lg:hidden sticky top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "h-0 bg-transparent"
        }`}
        role="banner"
      >
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center" aria-label="TPM Group logo">
            <Image
              src={logoSrc}
              alt="TPM Group - PT. Trimitra Putra Mandiri"
              className={!isScrolled && isOpen ? "hidden" : "block"}
              width={180}
              height={40}
              priority
              style={{ width: "180px", height: "auto" }}
              quality={90}
            />
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className={`w-12 h-12 rounded-xl shadow-lg flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              (isScrolled && !isOpen) || isOpen
                ? "bg-white hover:bg-gray-50"
                : "bg-white/90 hover:bg-white"
            }`}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            type="button"
          >
            <div className="w-6 h-5 flex flex-col justify-between" aria-hidden="true">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-blue-600 rounded-full"
                transition={{ duration: 0.2 }}
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-blue-600 rounded-full"
                transition={{ duration: 0.2 }}
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-blue-600 rounded-full"
                transition={{ duration: 0.2 }}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[9990]"
              aria-hidden="true"
            />

            {/* Menu Panel */}
            <motion.aside
              ref={menuRef}
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden fixed top-0 right-0 w-full h-full bg-white z-[9995] overflow-y-auto"
              role="dialog"
              aria-label="Mobile navigation menu"
              aria-modal="true"
            >
              {/* Menu Header with Logo */}
              <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between z-10">
                <div className="flex items-center">
                  <Image
                    src="/assets/logo-tpm-text-black.webp"
                    alt="TPM Group - PT. Trimitra Putra Mandiri"
                    width={240}
                    height={40}
                    style={{ width: "240px", height: "auto" }}
                    quality={90}
                  />
                </div>
              </div>

              {/* Navigation Menu Items */}
              <nav className="px-6 py-8" role="navigation" aria-label="Mobile menu items">
                <ul className="space-y-2" role="menu">
                  {menuItems.map((item, index) => {
                    const isActive = isActiveLink(item.link, pathname);
                    return (
                      <motion.li
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * ANIMATION_STAGGER_DELAY,
                          duration: 0.2,
                        }}
                        role="none"
                      >
                        <button
                          onClick={() => handleMenuClick(item.link, item.isExternal)}
                          className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                            isActive
                              ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                              : "hover:bg-blue-50 text-gray-700"
                          }`}
                          aria-label={item.ariaLabel}
                          aria-current={isActive ? "page" : undefined}
                          role="menuitem"
                          tabIndex={0}
                        >
                          <span
                            className={`font-medium text-base ${
                              isActive
                                ? "text-white"
                                : "text-gray-800 group-hover:text-blue-600"
                            }`}
                          >
                            {item.label}
                          </span>
                          <svg
                            className={`w-5 h-5 transition-transform duration-300 ${
                              isActive
                                ? "text-white translate-x-1"
                                : "text-blue-600 group-hover:translate-x-1"
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Contact Information */}
              <div className="px-6 py-8 border-t border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span>+62 (021) 29305768</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span>marketing@tpm-facility.com</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span>
                      Kompleks Dutamas Fatmawati Blok B2 No. 26<br />
                      Jakarta Selatan 12150
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <footer className="px-6 py-8 border-t border-gray-100">
                <p className="text-sm text-gray-500 text-center">
                  © {new Date().getFullYear()} TPM Group - PT. Trimitra Putra Mandiri
                </p>
                <p className="text-xs text-gray-400 text-center mt-2">
                  Facility & Service Management Excellence
                </p>
              </footer>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}