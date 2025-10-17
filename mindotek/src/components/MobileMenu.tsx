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
const getMenuItems = (isPortfolioPage: boolean): MenuItem[] => {
  if (isPortfolioPage) {
    return [
      { 
        label: "Home", 
        link: "/", 
        id: "home", 
        isExternal: true,
        ariaLabel: "Navigate to home page" 
      },
      {
        label: "Portfolio",
        link: "/portfolio",
        id: "portfolio",
        isExternal: true,
        ariaLabel: "View our portfolio"
      },
      {
        label: "Services",
        link: "/#services",
        id: "services",
        isExternal: true,
        ariaLabel: "View our services"
      },
      {
        label: "Locations",
        link: "/#locations",
        id: "locations",
        isExternal: true,
        ariaLabel: "View our locations"
      },
      { 
        label: "Contact", 
        link: "/#contact", 
        id: "contact", 
        isExternal: true,
        ariaLabel: "Contact us"
      },
    ];
  }

  return [
    { label: "Home", link: "#hero", id: "hero", ariaLabel: "Navigate to home section" },
    { label: "About Us", link: "#company", id: "company", ariaLabel: "Navigate to about us section" },
    { label: "Vision", link: "#vision-mission", id: "vision-mission", ariaLabel: "Navigate to vision section" },
    { label: "Services", link: "#services", id: "services", ariaLabel: "Navigate to services section" },
    { label: "Locations", link: "#locations", id: "locations", ariaLabel: "Navigate to locations section" },
    { label: "Portfolio", link: "#portfolio", id: "portfolio", ariaLabel: "Navigate to portfolio section" },
    { label: "Contact", link: "#contact", id: "contact", ariaLabel: "Navigate to contact section" },
  ];
};

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  
  const observerRef = useRef<IntersectionObserver | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Determine if on portfolio page using Next.js pathname
  const isPortfolioPage = useMemo(
    () => pathname?.includes("/portfolio") || pathname?.includes("/project"),
    [pathname]
  );

  // Get memoized menu items
  const menuItems = useMemo(() => getMenuItems(isPortfolioPage), [isPortfolioPage]);

  // Memoize logo source
  const logoSrc = useMemo(
    () =>
      isScrolled
        ? "/assets/logo-mindotek-black.webp"
        : "/assets/logo-mindotek-white.webp",
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
      // Save current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }

    return () => {
      // Cleanup on unmount
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
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

  // IntersectionObserver for active section tracking
  useEffect(() => {
    if (isOpen || isPortfolioPage) return;

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-51% 0px -49% 0px",
      threshold: 0,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(callback, observerOptions);

    const elements: HTMLElement[] = [];
    menuItems.forEach((item) => {
      if (!item.isExternal) {
        const element = document.getElementById(item.id);
        if (element && observerRef.current) {
          observerRef.current.observe(element);
          elements.push(element);
        }
      }
    });

    return () => {
      if (observerRef.current) {
        elements.forEach((el) => observerRef.current?.unobserve(el));
        observerRef.current.disconnect();
      }
    };
  }, [isOpen, isPortfolioPage, menuItems]);

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
      if (isExternal) {
        router.push(link);
        closeMenu();
        return;
      }

      const targetId = link.replace("#", "");
      const element = document.getElementById(targetId);

      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY + SCROLL_OFFSET;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }

      closeMenu();
    },
    [router, closeMenu]
  );

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
          <div className="flex items-center" aria-label="Mindotek logo">
            <Image
              src={logoSrc}
              alt="Mindotek - PT. Logamindo Teknologi Indonesia"
              className={!isScrolled && isOpen ? "hidden" : "block"}
              width={160}
              height={32}
              priority
              style={{ width: "160px", height: "auto" }}
              quality={90}
            />
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className={`w-12 h-12 rounded-xl shadow-lg flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
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
                className="w-full h-0.5 bg-red-600 rounded-full"
                transition={{ duration: 0.2 }}
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-red-600 rounded-full"
                transition={{ duration: 0.2 }}
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-red-600 rounded-full"
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
                    src="/assets/logo-mindotek-black.webp"
                    alt="Mindotek - PT. Logamindo Teknologi Indonesia"
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
                    const isActive = !item.isExternal && activeSection === item.id;
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
                          className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                            isActive
                              ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg"
                              : "hover:bg-red-50 text-gray-700"
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
                                : "text-gray-800 group-hover:text-red-600"
                            }`}
                          >
                            {item.label}
                          </span>
                          <svg
                            className={`w-5 h-5 transition-transform duration-300 ${
                              isActive
                                ? "text-white translate-x-1"
                                : "text-red-600 group-hover:translate-x-1"
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

              {/* Footer */}
              <footer className="px-6 py-8 border-t border-gray-100">
                <p className="text-sm text-gray-500 text-center">
                  © {new Date().getFullYear()} Mindotek - TPM Group
                </p>
              </footer>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
