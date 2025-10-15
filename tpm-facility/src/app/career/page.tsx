'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Users, Award, MapPin, TrendingUp, CheckCircle, Heart, Lightbulb, Shield } from 'lucide-react'
import Link from 'next/link'

export default function CareerPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!heroRef.current) return

    const ctx = gsap.context(() => {
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

  const benefits = [
    {
      icon: Award,
      title: 'Professional Development',
      description: 'Continuous training and certification programs to enhance your skills and career growth'
    },
    {
      icon: TrendingUp,
      title: 'Career Advancement',
      description: 'Clear career paths with opportunities for promotion and leadership roles'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible schedules and supportive work environment for better work-life harmony'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work with diverse, talented teams across Indonesia in a collaborative environment'
    }
  ]

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We value honesty and ethical behavior in all our interactions'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We encourage creative thinking and continuous improvement'
    },
    {
      icon: Heart,
      title: 'Respect',
      description: 'We treat everyone with dignity and value diversity'
    }
  ]

  const positions = [
    {
      title: 'Security Officer',
      type: 'Full-time',
      location: 'Multiple Locations',
      requirements: ['Experience in security services', 'SATPAM certification preferred', 'Good physical fitness', 'Team player']
    },
    {
      title: 'Cleaning Supervisor',
      type: 'Full-time',
      location: 'Jakarta, Surabaya',
      requirements: ['2+ years supervisory experience', 'Knowledge of cleaning procedures', 'Good leadership skills', 'Detail-oriented']
    },
    {
      title: 'Facility Manager',
      type: 'Full-time',
      location: 'Jakarta',
      requirements: ['5+ years facility management', 'Strong organizational skills', 'Budget management', 'Team leadership']
    },
    {
      title: 'Admin Staff',
      type: 'Full-time',
      location: 'Jakarta',
      requirements: ['Proficient in MS Office', 'Good communication skills', 'Organized and detail-oriented', '1+ years experience']
    }
  ]

  return (
    <div ref={heroRef} className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-200 rounded-full transform rotate-45"></div>
          <div className="absolute top-40 right-32 w-32 h-32 bg-blue-300 rounded-full transform rotate-12"></div>
          <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-blue-400 rounded-full transform -rotate-12"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center hero-content">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Join Our Team
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8">
              Build Your Career
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                With TPM Group
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Join a dynamic team of professionals dedicated to excellence in facility management. 
              Grow your career with training, development, and opportunities across Indonesia.
            </p>
            <Link
              href="#positions"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View Open Positions
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              Why Join Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Benefits &
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Perks
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div
                  key={index}
                  ref={(el) => { cardRefs.current[index] = el }}
                  className="group relative"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 relative overflow-hidden h-full text-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="text-white" size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              Our Culture
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div
                  key={index}
                  ref={(el) => { cardRefs.current[4 + index] = el }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              Open Positions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Current
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Opportunities
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <div
                key={index}
                ref={(el) => { cardRefs.current[8 + index] = el }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                    {position.type}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-6">
                  <MapPin size={16} />
                  <span>{position.location}</span>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <CheckCircle className="text-blue-600 mt-0.5 flex-shrink-0" size={16} />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-900 transition-all duration-300"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-full"></div>
          <div className="absolute top-8 right-8 w-12 h-12 bg-white rounded-full"></div>
          <div className="absolute bottom-8 left-8 w-20 h-20 bg-white rounded-full"></div>
          <div className="absolute bottom-4 right-4 w-14 h-14 bg-white rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Your Journey With Us
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't see a position that matches your skills? Send us your CV and we'll keep you in mind for future opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Submit Your CV
          </Link>
        </div>
      </section>
    </div>
  )
}
