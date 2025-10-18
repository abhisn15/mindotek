'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CountUp from './CountUp'

interface Stat {
  number: string
  label: string
  description: string
  icon?: React.ReactNode
  color: string
}

const stats: Stat[] = [
  {
    number: '20',
    label: 'Years Experience',
    description: 'Since 2004',
    color: 'from-blue-500 to-blue-600'
  },
  {
    number: '60',
    label: 'Companies Served',
    description: 'Various Industries',
    color: 'from-blue-600 to-blue-700'
  },
  {
    number: '30',
    label: 'Regional Offices',
    description: 'Across Indonesia',
    color: 'from-blue-700 to-blue-800'
  },
  {
    number: '5',
    label: 'ISO Certified',
    description: 'Quality Standards',
    color: 'from-blue-800 to-blue-900'
  }
]

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Animate cards entrance with smooth easing
      gsap.fromTo(cardRefs.current,
        { 
          y: 40, 
          opacity: 0, 
          scale: 0.95
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none'
          }
        }
      )

      // Add subtle floating animation
      cardRefs.current.forEach((card, index) => {
        if (card) {
          gsap.to(card, {
            y: -5,
            duration: 2.5 + index * 0.2,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
            delay: index * 0.15
          })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full transform rotate-45"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-blue-300 rounded-full transform rotate-12"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-blue-400 rounded-full transform -rotate-12"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-blue-500 rounded-full transform rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Our Achievements
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Companies
            <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Across Indonesia
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With over two decades of experience, we have built a reputation for excellence 
            in facility management services across various industries.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el }}
              className="group relative"
            >
              {/* Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 relative overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Number */}
                  <div className="mb-4">
                    <CountUp
                      end={parseInt(stat.number)}
                      duration={2.5}
                      suffix={stat.number.includes('+') ? '+' : ''}
                      className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                      delay={index * 0.2}
                    />
                  </div>
                  
                  {/* Label */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300 leading-tight">
                    {stat.label}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm group-hover:text-gray-500 transition-colors duration-300">
                    {stat.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-gray-600 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
            <span className="text-sm font-medium">Ready to join our success stories?</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get Started Today
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
