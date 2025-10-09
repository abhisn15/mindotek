'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-red-600">
              Mindotek
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#hero" className="text-gray-700 hover:text-red-600 transition">
              Home
            </Link>
            <Link href="/#about" className="text-gray-700 hover:text-red-600 transition">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-red-600 transition">
              Services
            </Link>
            <Link href="/wms-system" className="text-gray-700 hover:text-red-600 transition">
              WMS System
            </Link>
            <Link href="/warehouse-locations" className="text-gray-700 hover:text-red-600 transition">
              Locations
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-red-600 transition">
              Contact
            </Link>
          </div>

          {/* Mobile menu button - now handled by StaggeredMenu component */}
        </div>
      </div>

    </nav>
  );
}

