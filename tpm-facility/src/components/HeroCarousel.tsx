'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

type Slide = {
  id: string
  image: string
  title: string
  subtitle: string
  description: string
  color: string // tailwind gradient: 'from-... to-...'
  duration: number // ms
}

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const progressRefs = useRef<(HTMLDivElement | null)[]>([])
  const progressTimeline = useRef<gsap.core.Timeline | null>(null)

  const slides: Slide[] = [
    {
      id: 'security',
      image: '/assets/banner-hero/security.webp',
      title: 'Security Services',
      subtitle: 'Professional Security Solutions',
      description:
        'Comprehensive security services with trained personnel and advanced monitoring systems',
      color: 'from-blue-500 to-blue-600',
      duration: 5000
    },
    {
      id: 'cleaning',
      image: '/assets/banner-hero/cleaning.webp',
      title: 'Cleaning & Gardening',
      subtitle: 'Clean & Green Environment',
      description:
        'Professional cleaning and landscaping services for all types of properties',
      color: 'from-blue-600 to-blue-700',
      duration: 5000
    },
    {
      id: 'maintenance',
      image:
        '/assets/banner-hero/property_maintenance.webp',
      title: 'Property Maintenance',
      subtitle: 'Complete Maintenance Solutions',
      description:
        'Comprehensive property maintenance including mechanical, electrical, and building services',
      color: 'from-blue-700 to-blue-800',
      duration: 5000
    },
    {
      id: 'office',
      image:
        '/assets/banner-hero/office_support.webp',
      title: 'Office Support',
      subtitle: 'Office Excellence',
      description:
        'Full-service office support including administration, technical, and operational services',
      color: 'from-blue-800 to-blue-900',
      duration: 5000
    }
  ]

  // Register GSAP plugins once
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
  }, [])

  // Auto-advance based on per-slide duration
  useEffect(() => {
    // Clear any existing timeline
    if (progressTimeline.current) {
      progressTimeline.current.kill()
    }

    const timer = setTimeout(() => {
      setIsTransitioning(true)
      // Add delay to allow CSS transitions to complete
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 100)
    }, 5000) // Fixed duration to match all slides

    return () => {
      clearTimeout(timer)
      if (progressTimeline.current) {
        progressTimeline.current.kill()
      }
    }
  }, [currentSlide])

  // Animate progress bars whenever slide changes
  useEffect(() => {
    // Kill any existing timeline
    if (progressTimeline.current) {
      progressTimeline.current.kill()
    }

    // Set widths for non-active slides first
    progressRefs.current.forEach((bar, idx) => {
      if (!bar) return
      if (idx < currentSlide) {
        gsap.set(bar, { width: '100%' })
      } else if (idx > currentSlide) {
        gsap.set(bar, { width: '0%' })
      }
    })

    // Create new timeline for current slide
    const activeBar = progressRefs.current[currentSlide]
    if (activeBar) {
      gsap.set(activeBar, { width: '0%' })
      
      // Create timeline with exact duration
      progressTimeline.current = gsap.timeline()
      progressTimeline.current.to(activeBar, {
        width: '100%',
        duration: 5, // Exactly 5 seconds
        ease: 'none',
        onComplete: () => {
          setIsTransitioning(false)
        }
      })
    }
  }, [currentSlide])

  // Enhanced text entrance animation on each slide with smoother effects
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simplified animation styles for smoother transitions
      const animationStyles = [
        // Security - Gentle fade and scale
        {
          title: { y: 30, opacity: 0, scale: 0.95 },
          subtitle: { y: 20, opacity: 0 },
          description: { y: 15, opacity: 0 },
          buttons: { y: 10, opacity: 0 }
        },
        // Cleaning - Gentle slide from right
        {
          title: { x: 30, opacity: 0, scale: 0.95 },
          subtitle: { x: 25, opacity: 0 },
          description: { x: 20, opacity: 0 },
          buttons: { x: 15, opacity: 0 }
        },
        // Maintenance - Gentle fade and scale
        {
          title: { opacity: 0, scale: 0.95, y: 25 },
          subtitle: { opacity: 0, y: 20 },
          description: { opacity: 0, y: 15 },
          buttons: { opacity: 0, y: 10 }
        },
        // Office - Gentle slide from left
        {
          title: { x: -30, opacity: 0, scale: 0.95 },
          subtitle: { x: -25, opacity: 0 },
          description: { x: -20, opacity: 0 },
          buttons: { x: -15, opacity: 0 }
        }
      ]
      
      const currentStyle = animationStyles[currentSlide] || animationStyles[0]
      
      // Reset all elements with smoother initial state
      gsap.set('.hero-title', currentStyle.title)
      gsap.set('.hero-subtitle', currentStyle.subtitle)
      gsap.set('.hero-description', currentStyle.description)
      gsap.set('.hero-buttons', currentStyle.buttons)
      
      // Animate title with smooth ease
      gsap.to('.hero-title', {
        y: 0,
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.0,
        ease: 'power2.out',
        delay: 0.2
      })
      
      // Animate subtitle
      gsap.to('.hero-subtitle', {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.4
      })
      
      // Animate description
      gsap.to('.hero-description', {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.6
      })
      
      // Animate buttons with smooth ease
      gsap.to('.hero-buttons', {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power2.out',
        delay: 0.8
      })
      
      // Add subtle floating animation to title (less aggressive)
      gsap.to('.hero-title', {
        y: -3,
        duration: 3,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        delay: 2.0
      })
      
    }, carouselRef)
    return () => ctx.revert()
  }, [currentSlide])

  const goToSlide = (index: number) => {
    if (index === currentSlide || isTransitioning) return
    
    // Kill current timeline
    if (progressTimeline.current) {
      progressTimeline.current.kill()
    }
    
    setIsTransitioning(true)
    setCurrentSlide(index)
  }

  return (
    <section ref={carouselRef} className="relative min-h-screen overflow-hidden">
      {/* Background Images with Smoother Transitions */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={index !== currentSlide}
            style={{
              transform: index === currentSlide ? 'scale(1)' : 'scale(1.05)',
              transition: 'all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
              style={{
                filter:
                  slide.id === 'security'
                    ? 'brightness(1.15) contrast(1.06) saturate(1.06)'
                    : 'none',
                transform: index === currentSlide ? 'scale(1.02)' : 'scale(1)',
                transition: 'transform 10s ease-out'
              }}
            />
            {/* Smoother contrast overlays */}
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/15 to-black/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="w-full py-20 md:py-0">
          <div className="mx-auto flex justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-[65ch] md:max-w-[75ch] space-y-8 md:space-y-10 text-center">
              {/* Title - Enhanced Typography */}
              <h1
                className={[
                  'hero-title',
                  'font-black text-white',
                  'text-[clamp(2.5rem,7vw,6rem)]',
                  'leading-[0.85] tracking-[-0.02em]',
                  'drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]',
                  '[text-wrap:balance]',
                  'bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent'
                ].join(' ')}
                style={{
                  textShadow: '0 0 40px rgba(255,255,255,0.3), 0 4px 20px rgba(0,0,0,0.8)'
                }}
              >
                {slides[currentSlide].title}
              </h1>

              {/* Subtitle - Enhanced Typography */}
              <h2
                className={[
                  'hero-subtitle',
                  'font-bold text-white/95',
                  'text-[clamp(1.25rem,3vw,2.25rem)]',
                  'tracking-[0.01em]',
                  '[text-wrap:pretty]',
                  'drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]'
                ].join(' ')}
                style={{
                  textShadow: '0 2px 12px rgba(0,0,0,0.7)'
                }}
              >
                {slides[currentSlide].subtitle}
              </h2>

              {/* Description - Enhanced Typography */}
              <p
                className={[
                  'hero-description',
                  'text-white/85',
                  'text-[clamp(1.125rem,2vw,1.5rem)]',
                  'leading-[1.6]',
                  '[text-wrap:pretty]',
                  'max-w-[55ch] mx-auto',
                  'drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]'
                ].join(' ')}
                style={{
                  textShadow: '0 2px 8px rgba(0,0,0,0.6)'
                }}
              >
                {slides[currentSlide].description}
              </p>

              {/* CTA Buttons - Enhanced Design */}
              <div className="hero-buttons flex flex-col sm:flex-row gap-5 justify-center items-center pt-6 md:pt-8">
                <a
                  href="/services"
                  className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl font-bold text-lg md:text-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center gap-3 shadow-2xl shadow-blue-900/30 hover:shadow-blue-900/50 hover:scale-105 transform"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a
                  href="/contact"
                  className="group border-2 border-white/90 text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl font-bold text-lg md:text-xl hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-2xl shadow-black/20 hover:shadow-white/20 hover:scale-105 transform backdrop-blur-sm"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress / Tiles */}
      <div className="hidden md:block absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6 md:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 md:gap-6">
          {slides.map((slide, index) => {
            const isActive = index === currentSlide
            return (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className="group relative text-left outline-none"
                aria-current={isActive}
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') goToSlide(index)
                }}
              >
                {/* Tile title + dot */}
                <div
                  className={`flex items-center mb-2 transition-opacity duration-300 ${
                    isActive ? '' : 'hover:opacity-90'
                  }`}
                >
                  <span
                    className={`w-2.5 h-2.5 rounded-full mr-2 transition-all duration-300 ${
                      isActive
                        ? 'bg-white shadow-[0_0_0_4px_rgba(255,255,255,0.2)]'
                        : 'bg-white/40 group-hover:bg-white/70'
                    }`}
                  />
                  <h3
                    className={`text-[0.9rem] font-medium tracking-wide [text-wrap:balance] ${
                      isActive
                        ? 'text-white'
                        : 'text-white/70 group-hover:text-white'
                    }`}
                  >
                    {/* underline accent using gradient */}
                    <span
                      className={`
                        relative inline-block
                        after:absolute after:left-0 after:-bottom-1
                        after:h-[2px] after:w-full after:rounded-full
                        after:bg-gradient-to-r ${slide.color}
                        ${isActive ? 'after:opacity-100' : 'after:opacity-0 group-hover:after:opacity-60'}
                      `}
                    >
                      {slide.title}
                    </span>
                  </h3>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="h-[2px] bg-white/20 rounded-full overflow-hidden">
                    <div
                      ref={(el) => {
                        progressRefs.current[index] = el
                      }}
                      className={`h-full rounded-full bg-gradient-to-r ${slide.color} ${
                        isActive ? 'shadow-[0_0_10px_2px_rgba(255,255,255,0.15)]' : ''
                      }`}
                      style={{ 
                        width: isActive ? '0%' : index < currentSlide ? '100%' : '0%',
                        transition: isActive ? 'none' : 'width 0.3s ease'
                      }}
                    />
                  </div>
                  
                  {/* Progress indicator dot */}
                  {isActive && (
                    <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg animate-pulse" 
                         style={{ 
                           left: 'calc(0% - 4px)',
                           transition: 'left 0.1s linear'
                         }} />
                  )}
                  
                  <div
                    className={`absolute inset-0 -inset-y-2 rounded-lg transition-colors duration-300 ${
                      isActive ? 'bg-white/5' : 'bg-transparent group-hover:bg-white/5'
                    }`}
                  />
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}