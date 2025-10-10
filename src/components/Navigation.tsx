"use client";

import Image from "next/image";
import Link from "next/link";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useState, useEffect } from "react";

export default function Navigation() {
  const sectionIds = [
    "hero",
    "company",
    "vision-mission",
    "services",
    "locations",
    "wms",
    "contact",
  ];
  const activeSection = useActiveSection(sectionIds);
  const [isScrolled, setIsScrolled] = useState(false);

  const isActive = (sectionId: string) => activeSection === sectionId;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "hero", label: "Home" },
    { id: "company", label: "About Us" },
    { id: "vision-mission", label: "Vision" },
    { id: "services", label: "Services" },
    { id: "locations", label: "Locations" },
    { id: "portfolio", label: "Portfolio", link: "/portfolio" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className={`hidden md:block fixed top-0 w-full transition-all duration-300 z-50 ${
      isScrolled 
        ? 'bg-white/65 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          <div className="flex items-center">
            <div className="">
              <Image
                src="/assets/logo-mindotek.webp"
                alt="Mindotek Logo"
                className="w-60"
                width={240}
                height={40}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => {
              // Check if item has external link
              if (item.link) {
                return (
                  <Link
                    key={item.id}
                    href={item.link}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative ${
                      isScrolled 
                        ? "text-gray-700 hover:bg-red-50 hover:text-red-600"
                        : "text-white hover:bg-white/20 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }
              
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative ${
                    isActive(item.id)
                      ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-md"
                      : isScrolled 
                        ? "text-gray-700 hover:bg-red-50 hover:text-red-600"
                        : "text-white hover:bg-white/20 hover:text-white"
                  }`}
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
