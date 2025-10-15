import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="block mb-4">
              <Image
                src="/assets/logo-mindotek-white.webp"
                alt="Mindotek Logo"
                width={180}
                height={30}
                className="h-8 w-auto hover:opacity-90 transition-opacity"
              />
            </Link>
            <p className="text-gray-400">
              PT. Logamindo Teknologi Indonesia
            </p>
            <p className="text-gray-400 mt-2">
              Your trusted logistics and warehousing partner in Indonesia
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-gray-400 hover:text-red-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-red-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio/wms" className="text-gray-400 hover:text-red-400 transition">
                  WMS System
                </Link>
              </li>
              <li>
                <Link href="/#locations" className="text-gray-400 hover:text-red-400 transition">
                  Warehouse Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="tel:+622129305768" className="hover:text-red-400 transition">
                  +62 21 29305768
                </a>
              </li>
              <li>
                <a href="mailto:info@mindotek.com" className="hover:text-red-400 transition">
                  info@mindotek.com
                </a>
              </li>
              <li>
                Jakarta, Indonesia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} PT. Logamindo Teknologi Indonesia (Mindotek). All rights reserved.</p>
          <p className="mt-2 text-sm">Part of TPM Group</p>
        </div>
      </div>
    </footer>
  );
}

