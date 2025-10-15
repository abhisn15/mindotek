'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { gsap } from 'gsap'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mobile menu animation
  useEffect(() => {
    if (isOpen) {
      // Animate mobile menu items
      gsap.fromTo(
        '.mobile-nav-item',
        { 
          opacity: 0, 
          x: -20 
        },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.4,
          stagger: 0.08,
          ease: 'power3.out'
        }
      )
    }
  }, [isOpen])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Client', href: '/client' },
    { name: 'Career', href: '/career' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/98 backdrop-blur-lg shadow-xl border-b border-gray-200' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Switch between white and black */}
          <Link href="/" className="flex items-center space-x-2 relative z-10">
            {/* White logo for transparent navbar */}
            <Image
              src="/assets/logo-tpm-text-white.webp"
              alt="TPM Group Logo"
              width={200}
              height={200}
              className={`absolute transition-all duration-500 ${
                scrolled ? 'opacity-0' : 'opacity-100'
              }`}
            />
            {/* Black logo for scrolled navbar */}
            <Image
              src="/assets/banner-hero/logo-tpm-text-black.webp"
              alt="TPM Group Logo"
              width={200}
              height={200}
              className={`transition-all duration-500 ${
                scrolled ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? scrolled
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-white bg-white/20'
                    : scrolled
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    : 'text-white hover:text-blue-200 hover:bg-white/10'
                }`}
              >
                {item.name}
                {/* Active indicator */}
                {isActive(item.href) && (
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 rounded-full ${
                      scrolled ? 'bg-blue-600' : 'bg-white'
                    }`}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-xl transition-all duration-300 relative z-10 ${
              scrolled
                ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                : 'text-white hover:text-blue-200 hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${
                  isOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                }`}
              />
              <X
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${
                  isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-2 pt-2 pb-4 space-y-1 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200 mt-2 mb-4">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`mobile-nav-item block px-4 py-3 rounded-xl font-medium transition-all duration-300 relative overflow-hidden ${
                  isActive(item.href)
                    ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-500/30'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="relative z-10 flex items-center justify-between">
                  {item.name}
                  {isActive(item.href) && (
                    <svg
                      className="w-5 h-5 animate-pulse"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </span>
                
                {/* Hover effect background */}
                {!isActive(item.href) && (
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                )}
              </Link>
            ))}
            
            {/* Decorative divider */}
            <div className="pt-3 mt-3 border-t border-gray-200">
              <div className="px-4 py-2 text-xs text-gray-500 text-center">
                PT. Trimitra Putra Mandiri
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm -z-10 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  )
}
