'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckCircle, Award, Users, Target, Globe, Shield, Lightbulb, TrendingUp, Heart } from 'lucide-react'
import CountUp from '@/components/CountUp'
import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from '@/components/MobileMenu'

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const certRefs = useRef<(HTMLDivElement | null)[]>([])

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

      // Animate certifications one by one with stagger
      gsap.fromTo(certRefs.current,
        { y: 50, opacity: 0, scale: 0.8, rotationY: -15 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 0.8,
          ease: 'back.out(1.7)',
          stagger: 0.15,
          scrollTrigger: {
            trigger: certRefs.current[0],
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none none'
          }
        }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our business practices and relationships."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for continuous improvement and deliver exceptional quality in every service."
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "We believe in the power of collaboration and mutual respect among our team members."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace new technologies and innovative solutions to enhance our services."
    },
    {
      icon: Heart,
      title: "Commitment",
      description: "We are dedicated to our clients' success and long-term partnership."
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "We continuously develop our people and processes to stay ahead of industry demands."
    }
  ]

  const certifications = [
    {
      title: "ISO 9001:2015",
      description: "Quality Management System",
      image: "/assets/iso-certified/iso_1.webp"
    },
    {
      title: "ISO 14001:2015",
      description: "Environmental Management",
      image: "/assets/iso-certified/iso_2.webp"
    },
    {
      title: "ISO 37001:2016",
      description: "Anti-Bribery Management",
      image: "/assets/iso-certified/iso_3.webp"
    },
    {
      title: "ISO 45001:2018",
      description: "OH&S Management",
      image: "/assets/iso-certified/iso_4.webp"
    },
    {
      title: "ISO 31000:2018",
      description: "Risk Management",
      image: "/assets/iso-certified/iso_5.webp"
    }
  ]

  const achievements = [
    {
      year: "2021",
      title: "Vendor Challenge Winner",
      description: "1st Winner in Vendor Challenge 2021",
      company: "Smartfren"
    },
    {
      year: "2022",
      title: "Top 3 Vendor Competition",
      description: "1st Winner in Top 3 Vendor Competition 2022",
      company: "Smartfren"
    },
    {
      year: "2023",
      title: "Spin to Win Challenge",
      description: "2nd Winner in Spin to Win Challenge 2023",
      company: "Smartfren"
    }
  ]

  return (
    <div ref={heroRef} className="min-h-screen">
      <MobileMenu />
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-b from-blue-400 to-white overflow-hidden">
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
              About Us
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8">
              Leading Facility and Service Management Company
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Since 2004
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              PT. Trimitra Putra Mandiri - Your trusted partner in facility & service management services, 
              committed to delivering excellence across Indonesia with ISO-certified quality standards.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <CountUp
                  end={20}
                  duration={2.5}
                  suffix="+"
                  className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent block"
                />
                <p className="text-gray-600 mt-2 font-medium">Years</p>
              </div>
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
                  end={30}
                  duration={2.5}
                  className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent block"
                />
                <p className="text-gray-600 mt-2 font-medium">Locations</p>
              </div>
              <div className="text-center">
                <CountUp
                  end={6}
                  duration={2.5}
                  className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent block"
                />
                <p className="text-gray-600 mt-2 font-medium">ISO Certified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div ref={(el) => { cardRefs.current[0] = el }} className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-2">
                Our Story
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Two Decades of
                <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Excellence & Growth
                </span>
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Since 2004, PT Trimitra Putra Mandiri has been a leading provider of integrated facility and service management solutions, trusted by businesses across Indonesia.
                </p>
                <p>
                  We deliver a wide range of services—security, cleaning & gardening, property maintenance, and office support—ensuring health, safety, and productivity in every client's environment.
                </p>
                <p>
                  With certified teams and nationwide coverage, TPM is committed to raising service standards, streamlining operations, and helping your business thrive.
                </p>
              </div>
              <div className="flex gap-4 pt-4">
                <Link
                  href="/services"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Our Services
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div ref={(el) => { cardRefs.current[1] = el }} className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Modern office building - TPM Group Company History"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                
                {/* Company History Overlay - Smaller */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Globe className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-900">Company History</h3>
                        <p className="text-xs text-gray-600">Growing Together Since 2004</p>
                      </div>
                    </div>
                    <div className="space-y-1.5 text-xs text-gray-700">
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span>Founded in Jakarta, 2004</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span>20+ Years of Excellence</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span>Leading Facility & Service Management</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              Mission & Vision
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Purpose &
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Direction
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision */}
            <div ref={(el) => { cardRefs.current[2] = el }} className="group relative">
              <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    To become the leading integrated facility management company in Indonesia, 
                    recognized for innovation, reliability, and commitment to excellence in serving 
                    our clients' diverse needs with comprehensive solutions that exceed industry standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div ref={(el) => { cardRefs.current[3] = el }} className="group relative">
              <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Award className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <ul className="space-y-4 text-gray-600 text-lg">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                      <span>Provide qualified and consistent services with competitive cost</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                      <span>Create professional, qualified and certified labor force</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                      <span>Conduct tiered and continual trainings</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                      <span>Technology utilizations as supporting services</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              Core Values
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Principles That
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Guide Our Actions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values define who we are and how we operate, ensuring excellence in everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              const valueImages = [
                "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", // Integrity
                "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", // Excellence
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", // Teamwork
                "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", // Innovation
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", // Commitment
                "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"  // Growth
              ];
              return (
                <div
                  key={index}
                  ref={(el) => { cardRefs.current[4 + index] = el }}
                  className="group relative"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 relative overflow-hidden h-full">
                    {/* Value Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={valueImages[index]}
                        alt={`${value.title} - TPM Group Core Value`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                      
                      {/* Icon Overlay on Image */}
                      <div className="absolute bottom-4 left-4">
                        <div className="w-14 h-14 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="text-blue-600" size={24} />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 border-2 border-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ISO Certifications */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-full"></div>
          <div className="absolute top-8 right-8 w-12 h-12 bg-white rounded-full"></div>
          <div className="absolute bottom-8 left-8 w-20 h-20 bg-white rounded-full"></div>
          <div className="absolute bottom-4 right-4 w-14 h-14 bg-white rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
              Quality Standards
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ISO Certifications
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Committed to maintaining the highest international standards in quality, 
              safety, and environmental management.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                ref={(el) => { certRefs.current[index] = el }}
                className="group text-center flex-shrink-0"
              >
                <div className="w-36 h-36 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl border-4 border-white/20 group-hover:scale-110 transition-transform duration-300 p-4 overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    width={144}
                    height={144}
                    className="object-contain w-full h-full"
                    loading="lazy"
                    unoptimized
                  />
                </div>
                <h3 className="text-sm font-bold text-white mb-1">{cert.title}</h3>
                <p className="text-xs text-blue-100 leading-tight">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              Awards & Recognition
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Recognized for
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Excellence & Performance
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality and service excellence has been recognized by leading industry partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                ref={(el) => { cardRefs.current[10 + index] = el }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 text-center h-full">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-black text-white">{achievement.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                  <p className="text-gray-600 mb-2">{achievement.description}</p>
                  <p className="text-sm text-blue-600 font-semibold">by {achievement.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Partner with Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join over 60 companies who trust TPM Group for their facility management needs. 
            Experience the difference of working with certified professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
