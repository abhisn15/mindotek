'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Shield, Users, Wrench, Building, ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Security Services',
    description: 'Professional security solutions with trained personnel and advanced monitoring systems.',
    features: ['Guard Officers', 'Security Consultants', 'Equipment & Devices', 'Training Programs'],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100'
  },
  {
    icon: Users,
    title: 'Cleaning & Gardening',
    description: 'Comprehensive cleaning and landscaping services for all types of properties.',
    features: ['General Cleaning', 'Hygiene Cleaning', 'High-Rise Building', 'Landscaping'],
    color: 'from-blue-600 to-blue-700',
    bgColor: 'from-blue-50 to-blue-100'
  },
  {
    icon: Wrench,
    title: 'Property Maintenance',
    description: 'Complete property maintenance solutions including mechanical, electrical, and building services.',
    features: ['Pest Control', 'M&E Maintenance', 'Building Maintenance', 'Landscaping'],
    color: 'from-blue-700 to-blue-800',
    bgColor: 'from-blue-50 to-blue-100'
  },
  {
    icon: Building,
    title: 'Office Support',
    description: 'Full-service office support including administration, technical, and operational services.',
    features: ['Front Desk', 'Administration', 'Technical Support', 'Sales & Marketing'],
    color: 'from-blue-800 to-blue-900',
    bgColor: 'from-blue-50 to-blue-100'
  }
]

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const headerRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Animate header with smooth easing
      gsap.fromTo(headerRefs.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
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

      // Animate service cards with smoother timing
      gsap.fromTo(cardRefs.current,
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardRefs.current[0],
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none'
          }
        }
      )

      // Add subtle hover animations
      cardRefs.current.forEach((card, index) => {
        if (card) {
          const icon = card.querySelector('.service-icon')
          const features = card.querySelector('.service-features')
          
          // Subtle icon floating animation
          if (icon) {
            gsap.to(icon, {
              y: -3,
              duration: 2.5 + index * 0.2,
              ease: 'sine.inOut',
              yoyo: true,
              repeat: -1,
              delay: index * 0.1
            })
          }

          // Features stagger animation on hover
          card.addEventListener('mouseenter', () => {
            if (features && features.children) {
              gsap.to(features.children, {
                y: 0,
                opacity: 1,
                duration: 0.4,
                ease: 'power3.out',
                stagger: 0.04
              })
            }
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
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-lg transform rotate-45"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-blue-300 rounded-lg transform rotate-12"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-blue-400 rounded-lg transform -rotate-12"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-blue-500 rounded-lg transform rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div ref={(el) => { headerRefs.current[0] = el }} className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Our Services
          </div>
          <h2 ref={(el) => { headerRefs.current[1] = el }} className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            Comprehensive Facility
            <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Management Solutions
            </span>
          </h2>
          <p ref={(el) => { headerRefs.current[2] = el }} className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We provide integrated facility management services tailored to meet your specific needs, 
            ensuring optimal performance and cost-effectiveness for your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                ref={(el) => { cardRefs.current[index] = el }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 relative overflow-hidden h-full">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 service-icon`}>
                      <IconComponent className="text-white" size={32} />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-500 transition-colors duration-300">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="service-features">
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3 opacity-0 translate-y-2">
                            <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600 group-hover:text-gray-500 transition-colors duration-300">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-full"></div>
              <div className="absolute top-8 right-8 w-12 h-12 bg-white rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-20 h-20 bg-white rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-14 h-14 bg-white rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Facility Management?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let us help you optimize your facility operations with our comprehensive 
                and professional services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/services"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  View All Services
                  <ArrowRight size={20} className="ml-2" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-colors duration-300"
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
