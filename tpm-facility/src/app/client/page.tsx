'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Award, Users, MapPin, CheckCircle, Building2, TrendingUp, Shield } from 'lucide-react'
import Link from 'next/link'
import CountUp from '@/components/CountUp'

export default function ClientPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!heroRef.current) return

    const ctx = gsap.context(() => {
      // Hero animation with smooth easing
      gsap.fromTo('.hero-content > *', 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          stagger: 0.15,
          ease: "power3.out"
        }
      )

      // Animate cards with smoother timing
      gsap.fromTo(cardRefs.current,
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: cardRefs.current[0],
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none'
          }
        }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const clientCategories = [
    {
      title: 'Banking & Finance',
      icon: Building2,
      clients: ['BANK BRI', 'Direktorat Jenderal Pajak', 'BRILian', 'Amartha']
    },
    {
      title: 'Retail & Fashion',
      icon: Award,
      clients: ['SOGO', 'Ramayana', 'Max Fashions', 'Kinokuniya', 'Foodhall', 'ZARA', 'Galeries Lafayette', 'SEPHORA', 'M&S']
    },
    {
      title: 'Telecommunications',
      icon: TrendingUp,
      clients: ['Smartfren', 'MyRepublic', 'TELKOMSEL', 'CBN', 'Balifiber']
    },
    {
      title: 'Logistics & Delivery',
      icon: MapPin,
      clients: ['Anteraja', 'Bolloré Logistics']
    },
    {
      title: 'Automotive',
      icon: Shield,
      clients: ['Mitsubishi Motors', 'KTM Motorcycle']
    },
    {
      title: 'Real Estate & Property',
      icon: Building2,
      clients: ['Meikarta', 'Ancol', 'North Land Ancol Residence', 'BKS Property']
    },
    {
      title: 'Energy & Resources',
      icon: TrendingUp,
      clients: ['Pertamina', 'Alter Abadi Group']
    },
    {
      title: 'Healthcare',
      icon: Shield,
      clients: ['RSCM Kencana']
    }
  ]

  const benefits = [
    {
      icon: Award,
      title: 'IT System Support',
      description: 'Integrated management systems including MMS, HRIS, EMS for efficient operations'
    },
    {
      icon: Users,
      title: 'Professional Workforce',
      description: 'Qualified, trained, and certified employees across all service categories'
    },
    {
      icon: MapPin,
      title: 'Nationwide Coverage',
      description: '30+ representatives across Indonesia ensuring consistent service quality'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'ISO certified standards with continuous monitoring and improvement'
    }
  ]

  return (
    <div ref={heroRef} className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-200 rounded-full transform rotate-45"></div>
          <div className="absolute top-40 right-32 w-32 h-32 bg-blue-300 rounded-full transform rotate-12"></div>
          <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-blue-400 rounded-full transform -rotate-12"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center hero-content">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Our Clients
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8">
              Trusted by Industry
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Leaders
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Over 60 companies across Indonesia trust TPM Group for their facility management needs, 
              spanning diverse industries from finance to retail, telecommunications to healthcare.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <CountUp
                  end={60}
                  duration={2.5}
                  suffix="+"
                  className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent block"
                />
                <p className="text-gray-600 mt-2 font-medium">Clients</p>
              </div>
              <div className="text-center">
                <CountUp
                  end={12}
                  duration={2.5}
                  className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent block"
                />
                <p className="text-gray-600 mt-2 font-medium">Industries</p>
              </div>
              <div className="text-center">
                <CountUp
                  end={30}
                  duration={2.5}
                  suffix="+"
                  className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent block"
                />
                <p className="text-gray-600 mt-2 font-medium">Cities</p>
              </div>
              <div className="text-center">
                <CountUp
                  end={98}
                  duration={2.5}
                  suffix="%"
                  className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent block"
                />
                <p className="text-gray-600 mt-2 font-medium">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              Client Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Serving Diverse
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Industries
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive facility management solutions serve a wide range of industries across Indonesia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <div
                  key={index}
                  ref={(el) => { cardRefs.current[index] = el }}
                  className="group relative"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 relative overflow-hidden h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="text-white" size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                      <ul className="space-y-2">
                        {category.clients.map((client, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600">
                            <CheckCircle className="text-blue-600 mt-0.5 flex-shrink-0" size={16} />
                            <span className="text-sm">{client}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Client Benefits */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Benefits for
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Our Clients
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support and services that drive operational excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div
                  key={index}
                  ref={(el) => { cardRefs.current[8 + index] = el }}
                  className="group relative"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 relative overflow-hidden h-full text-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="text-white" size={28} />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              Client Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Say About Us
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                company: 'Smartfren',
                quote: 'TPM Group has consistently delivered excellent service quality. Their professional team and systematic approach have been instrumental in our facility management success.',
                position: 'Facility Manager'
              },
              {
                company: 'SOGO Department Store',
                quote: 'Reliable, professional, and always responsive to our needs. TPM Group has been an invaluable partner in maintaining our facilities.',
                position: 'Operations Director'
              },
              {
                company: 'PERTAMINA',
                quote: 'The quality of service and attention to detail provided by TPM Group exceeds our expectations. They truly understand our business needs.',
                position: 'General Manager'
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                ref={(el) => { cardRefs.current[12 + index] = el }}
                className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="mb-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic leading-relaxed mb-6">"{testimonial.quote}"</p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.company}</p>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-full"></div>
          <div className="absolute top-8 right-8 w-12 h-12 bg-white rounded-full"></div>
          <div className="absolute bottom-8 left-8 w-20 h-20 bg-white rounded-full"></div>
          <div className="absolute bottom-4 right-4 w-14 h-14 bg-white rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Growing List of Satisfied Clients
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Partner with Indonesia's leading facility management company and experience 
            the difference of working with certified professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
