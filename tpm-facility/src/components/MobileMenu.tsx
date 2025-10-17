'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const menuItems = [
    { id: 1, label: 'Home', link: '/', isExternal: false },
    { id: 2, label: 'About Us', link: '/about', isExternal: false },
    { id: 3, label: 'Services', link: '/services', isExternal: false },
    { id: 4, label: 'Client', link: '/client', isExternal: false },
    { id: 5, label: 'Career', link: '/career', isExternal: false },
    { id: 6, label: 'Contact', link: '/contact', isExternal: false },
  ]

  const handleMenuClick = (link: string, isExternal: boolean) => {
    if (isExternal) {
      window.open(link, '_blank')
    }
    setIsOpen(false)
  }

  // Function to check if a link is active
  const isActiveLink = (href: string, pathname: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Mobile Navigation Bar */}
      <nav
        className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-gradient-to-b from-blue-600/90 to-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={scrolled ? '/assets/logo-tpm-text-black.webp' : '/assets/logo-tpm-text-white.webp'}
              alt="TPM Group Logo"
              width={120}
              height={40}
              className="h-8 w-auto sm:h-10"
              priority
            />
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`relative z-50 p-2 rounded-lg transition-colors duration-300 ${
              isOpen
                ? 'bg-blue-600 text-white'
                : scrolled
                ? 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 bg-white z-40 lg:hidden shadow-2xl overflow-y-auto"
            >
              <div className="p-6 pt-20">
                {/* Company Info */}
                <div className="mb-8 pb-6 border-b border-gray-200">
                  <Image
                    src="/assets/logo-tpm-text-black.webp"
                    alt="TPM Group"
                    width={140}
                    height={48}
                    className="h-10 w-auto mb-3"
                  />
                  <p className="text-sm text-gray-600">
                    PT. Trimitra Putra Mandiri
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Facility Management Excellence
                  </p>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() =>
                        handleMenuClick(item.link, item.isExternal)
                      }
                      className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-between group relative ${
                        isActiveLink(item.link, pathname)
                          ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                          : 'hover:bg-blue-50 text-gray-700'
                      }`}
                    >
                      <span className={`font-medium text-base flex items-center ${
                        isActiveLink(item.link, pathname)
                          ? 'text-blue-600'
                          : 'text-gray-800 group-hover:text-blue-600'
                      }`}>
                        {item.label}
                        {/* Active indicator dot */}
                        {isActiveLink(item.link, pathname) && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="ml-3 w-2 h-2 bg-blue-600 rounded-full"
                          />
                        )}
                      </span>
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isActiveLink(item.link, pathname)
                            ? 'text-blue-600 rotate-90'
                            : 'text-blue-600 group-hover:translate-x-1'
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
                  ))}
                </nav>

                {/* Contact Info */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">
                    Contact Us
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>📧 info@tpmgroup.co.id</p>
                    <p>📞 +62 21 1234 5678</p>
                    <p>📍 Jakarta, Indonesia</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

