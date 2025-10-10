"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const menuItems = [
  { label: "Home", link: "#hero", id: "hero" },
  { label: "About Us", link: "#company", id: "company" },
  { label: "Vision", link: "#vision-mission", id: "vision-mission" },
  { label: "Services", link: "#services", id: "services" },
  { label: "Locations", link: "#locations", id: "locations" },
  { label: "WMS", link: "#wms", id: "wms" },
  { label: "Contact", link: "#contact", id: "contact" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    menuItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (link: string) => {
    const targetId = link.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    setIsOpen(false); // Close menu after click
  };

  return (
    <>
      {/* Mobile Header with Logo and Menu Button */}
      <div className={`md:hidden fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/assets/logo-mindotek.webp"
              alt="Mindotek Logo"
              className="w-40"
              width={160}
              height={32}
            />
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`w-12 h-12 rounded-xl shadow-lg flex items-center justify-center transition-all duration-300 ${
              isScrolled 
                ? 'bg-white hover:bg-gray-50' 
                : 'bg-white/90 hover:bg-white'
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
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
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
              className="md:hidden fixed top-0 right-0 w-full h-full bg-white z-[9995] overflow-y-auto"
            >
              {/* Header */}
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
                  {menuItems.map((item, index) => {
                    const isActive = activeSection === item.id;
                    return (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handleMenuClick(item.link)}
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
