'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Shield, Users, Wrench, Building, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ServicesPage() {
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
          stagger: 0.1,
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

  const mainServices = [
    {
      id: 'security',
      icon: Shield,
      title: 'Security Services',
      description: 'Professional security solutions with trained personnel and advanced monitoring systems',
      color: 'from-blue-500 to-blue-600',
      features: [
        'Guard Officers with professional training',
        'Security consultants and planning',
        'Advanced equipment and CCTV systems',
        'Comprehensive training programs'
      ]
    },
    {
      id: 'cleaning',
      icon: Users,
      title: 'Cleaning & Gardening',
      description: 'Comprehensive cleaning and landscaping services for all types of properties',
      color: 'from-blue-600 to-blue-700',
      features: [
        'General and specialized cleaning',
        'Hygiene cleaning for sensitive areas',
        'Professional landscaping services',
        'High-rise building cleaning'
      ]
    },
    {
      id: 'maintenance',
      icon: Wrench,
      title: 'Property Maintenance',
      description: 'Complete property maintenance solutions including mechanical, electrical, and building services',
      color: 'from-blue-700 to-blue-800',
      features: [
        'Pest control services',
        'M&E maintenance and repairs',
        'Building maintenance solutions',
        'Preventive maintenance programs'
      ]
    },
    {
      id: 'office',
      icon: Building,
      title: 'Office Support',
      description: 'Full-service office support including administration, technical, and operational services',
      color: 'from-blue-800 to-blue-900',
      features: [
        'Front desk and reception services',
        'Administrative support',
        'Technical and IT support',
        'Sales and marketing assistance'
      ]
    }
  ]

  const securityDetails = [
    {
      title: 'Guard Officer',
      points: [
        'Thorough routine patrols and fast detection',
        'Integrated security technology',
        'Experienced staff flexible to your needs',
        'Security certification and training'
      ]
    },
    {
      title: 'Security Consultant',
      points: [
        'Security surveys and vulnerability assessments',
        'Security plans and designs development',
        'Security procedures research and development',
        'Alternative security equipment solutions'
      ]
    },
    {
      title: 'Equipment & Devices',
      points: [
        'CCTV system installation and monitoring',
        'Fire alarm systems',
        'Metal detector & X-Ray systems',
        '360 degrees CCTV solutions'
      ]
    },
    {
      title: 'Training Programs',
      points: [
        'Basic SATPAM training (Gada Pratama)',
        'K3, Firefighting, Bomb Threat training',
        'Global security standards education',
        'Collaboration with certified training centers'
      ]
    }
  ]

  const cleaningDetails = [
    {
      title: 'General Cleaning',
      points: [
        'Business and public place cleaning',
        'Environmentally friendly products',
        'Effective cleaning methods',
        'Trained and experienced staff'
      ]
    },
    {
      title: 'Hygiene Cleaning',
      points: [
        'Hospitals and laboratories cleaning',
        'Restaurant and food service areas',
        'International standards compliance',
        'Specialized cleaning equipment'
      ]
    },
    {
      title: 'Gardening Services',
      points: [
        'Plant and landscape care',
        'Beautiful garden pattern design',
        'Planting and maintenance techniques',
        'Plant health management'
      ]
    },
    {
      title: 'High-Rise Building',
      points: [
        'Specialized high-rise cleaning',
        'Safety-certified personnel',
        'Advanced cleaning equipment',
        'Regular maintenance schedules'
      ]
    }
  ]

  return (
    <div ref={heroRef} className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-200 rounded-lg transform rotate-45"></div>
          <div className="absolute top-40 right-32 w-32 h-32 bg-blue-300 rounded-lg transform rotate-12"></div>
          <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-blue-400 rounded-lg transform -rotate-12"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center hero-content">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Our Services
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8">
              Comprehensive Facility
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Management Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Integrated facility management services tailored to meet your specific needs, 
              ensuring optimal performance and cost-effectiveness for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              Service Categories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Four Core
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Service Pillars
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={service.id}
                  ref={(el) => { cardRefs.current[index] = el }}
                  className="group relative"
                >
                  <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 relative overflow-hidden h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="text-white" size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href={`#${service.id}`}
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                      >
                        Learn More
                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Security Services Detail */}
      <section id="security" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Security Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Security
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive security services with trained personnel and advanced monitoring systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityDetails.map((detail, index) => (
              <div
                key={index}
                ref={(el) => { cardRefs.current[4 + index] = el }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{detail.title}</h3>
                <ul className="space-y-3">
                  {detail.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cleaning Services Detail */}
      <section id="cleaning" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              <Users className="w-4 h-4 mr-2" />
              Cleaning & Gardening
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Clean & Green
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Environment Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional cleaning and landscaping services for all types of properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cleaningDetails.map((detail, index) => (
              <div
                key={index}
                ref={(el) => { cardRefs.current[8 + index] = el }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{detail.title}</h3>
                <ul className="space-y-3">
                  {detail.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Maintenance Detail */}
      <section id="maintenance" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              <Wrench className="w-4 h-4 mr-2" />
              Property Maintenance
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Maintenance
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive property maintenance including mechanical, electrical, and building services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Pest Control', 'M&E Maintenance', 'Building Maintenance', 'Preventive Programs'].map((service, index) => (
              <div
                key={index}
                ref={(el) => { cardRefs.current[12 + index] = el }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Wrench className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Support Detail */}
      <section id="office" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              <Building className="w-4 h-4 mr-2" />
              Office Support
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Office Excellence
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Support Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Full-service office support including administration, technical, and operational services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Front Desk Services', 'Administrative Support', 'Technical Support', 'Sales & Marketing'].map((service, index) => (
              <div
                key={index}
                ref={(el) => { cardRefs.current[16 + index] = el }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-800 to-blue-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Building className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{service}</h3>
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
            Ready to Optimize Your Facility Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let us help you transform your facility management with our comprehensive and professional services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/client"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              View Our Clients
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
