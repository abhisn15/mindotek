import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Image
                src="/assets/logo-tpm-text-white.webp"
                alt="TPM Group Logo"
                width={200}
                height={200}
                className="brightness-100"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              PT. Trimitra Putra Mandiri - Your trusted partner in facility management services since 2004.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30"
              >
                <Youtube size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Our Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/client" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Our Clients
                </Link>
              </li>
              <li>
                <Link 
                  href="/career" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/services#security" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Security Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/services#cleaning" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Cleaning & Gardening
                </Link>
              </li>
              <li>
                <Link 
                  href="/services#maintenance" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Property Maintenance
                </Link>
              </li>
              <li>
                <Link 
                  href="/services#office" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Office Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                  <MapPin size={18} className="text-blue-400 group-hover:text-white" />
                </div>
                <div className="text-sm text-gray-400">
                  <p className="font-semibold text-gray-300 mb-1">Head Office</p>
                  <p className="leading-relaxed">Kompleks Dutamas Fatmawati Blok B2 No. 26</p>
                  <p className="leading-relaxed">Jl. RS Fatmawati No. 39, Jakarta Selatan 12150</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                  <Phone size={18} className="text-blue-400 group-hover:text-white" />
                </div>
                <a href="tel:+622129305768" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                  +62 (021) 29305768
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                  <Mail size={18} className="text-blue-400 group-hover:text-white" />
                </div>
                <a href="mailto:marketing@tpm-facility.com" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                  marketing@tpm-facility.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 PT. Trimitra Putra Mandiri. All rights reserved.
            </p>
            {/* <div className="flex flex-wrap gap-6 justify-center">
              <Link 
                href="/privacy" 
                className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-700">•</span>
              <Link 
                href="/terms" 
                className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <span className="text-gray-700">•</span>
              <Link 
                href="/sitemap.xml" 
                className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-300"
              >
                Sitemap
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
