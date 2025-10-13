"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const getMenuItems = (isPortfolioPage: boolean) => {
  if (isPortfolioPage) {
    return [
      { label: "Home", link: "/", id: "home", isExternal: true },
      { label: "Portfolio", link: "/portfolio", id: "portfolio", isExternal: true },
      { label: "Services", link: "/#services", id: "services", isExternal: true },
      { label: "Locations", link: "/#locations", id: "locations", isExternal: true },
      { label: "Contact", link: "/#contact", id: "contact", isExternal: true },
    ];
  }

  return [
    { label: "Home", link: "#hero", id: "hero" },
    { label: "About Us", link: "#company", id: "company" },
    { label: "Vision", link: "#vision-mission", id: "vision-mission" },
    { label: "Services", link: "#services", id: "services" },
    { label: "Locations", link: "#locations", id: "locations" },
    { label: "Portfolio", link: "/portfolio", id: "portfolio", isExternal: true },
    { label: "Contact", link: "#contact", id: "contact" },
  ];
};

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPortfolioPage, setIsPortfolioPage] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const router = useRouter();

  // Improved intersection observer logic to avoid bugs with sticky and remount observer when menu open
  useEffect(() => {
    // Check portfolio/project path
    const currentPath = window.location.pathname;
    setIsPortfolioPage(currentPath.includes('/portfolio') || currentPath.includes('/project'));
  }, []);

  useEffect(() => {
    // IntersectionObserver should NOT be active when menu is open or on portfolio pages
    if (isOpen || isPortfolioPage) {
      return;
    }
    const observerOptions = {
      root: null,
      rootMargin: "-51% 0px -49% 0px", // Make the window slightly above/below mid-point for sticky+header
      threshold: 0,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // Important: only update if visible, do not flicker if null
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    // Disconnect previous
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new window.IntersectionObserver(callback, observerOptions);

    // Clean up previous before setting up new
    const menuItems = getMenuItems(isPortfolioPage).filter(item => !item.isExternal);
    const elements: HTMLElement[] = [];

    menuItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observerRef.current!.observe(element);
        elements.push(element);
      }
    });

    return () => {
      if (observerRef.current) {
        elements.forEach((el) => observerRef.current!.unobserve(el));
        observerRef.current.disconnect();
      }
    };
  }, [isOpen, isPortfolioPage]);

  useEffect(() => {
    const handleScroll = () => {
      // Prevent scrolled shadow/glass when menu open
      if (isOpen) return;
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const handleMenuClick = (link: string, isExternal?: boolean) => {
    if (isExternal) {
      router.push(link);
      setIsOpen(false);
      return;
    }
    const targetId = link.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      // When click, offset scroll by header height and sticky offset
      const yOffset = -72; // Approx height: header (56px-72px)
      const y =
        element.getBoundingClientRect().top +
        window.scrollY +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }

    setIsOpen(false);
  };

  // Always keep header visible at top, but use 'sticky' instead of fixed
  return (
    <>
      {/* Mobile Header with Logo and Menu Button */}
      <div
        className={`lg:hidden sticky top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
          isScrolled && isOpen
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : !isOpen
            ? "bg-white shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            {/* Only hide logo when menu open */}
            {!isOpen && (
              <Image
                src="/assets/logo-mindotek.webp"
                alt="Mindotek Logo"
                className="w-40 h-auto"
                width={160}
                height={32}
                priority
                style={{ width: 'auto', height: 'auto' }}
              />
            )}
          </div>
          {/* Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`w-12 h-12 rounded-xl shadow-lg flex items-center justify-center transition-all duration-300 ${
              (isScrolled && !isOpen) || isOpen
                ? "bg-white hover:bg-gray-50"
                : "bg-white/90 hover:bg-white"
            }`}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-red-600 rounded-full transition-all"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-red-600 rounded-full transition-all"
              />
              <motion.span
                animate={isOpen ? { rotate: -50, y: -10 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-red-600 rounded-full transition-all"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[9990]"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="lg:hidden fixed top-0 right-0 w-full h-full bg-white z-[9995] overflow-y-auto"
            >
              {/* Logo selalu tampil pada header hamburger */}
              <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between z-10">
                <div className="flex items-center">
                  <div className="mr-3">
                    <Image
                      src="/assets/logo-mindotek.webp"
                      alt="Mindotek Logo"
                      className="w-60"
                      width={240}
                      height={40}
                    />
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <nav className="px-6 py-8">
                <div className="space-y-2">
                  {getMenuItems(isPortfolioPage).map((item, index) => {
                    const isActive = !item.isExternal && activeSection === item.id;
                    return (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handleMenuClick(item.link, item.isExternal)}
                        className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                          isActive
                            ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg"
                            : "hover:bg-red-50 text-gray-700"
                        }`}
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
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </motion.button>
                    );
                  })}
                </div>
              </nav>

              {/* Footer */}
              <div className="px-6 py-8 border-t border-gray-100">
                <p className="text-sm text-gray-500 text-center">
                  © 2025 Mindotek - TPM Group
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
