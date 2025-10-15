'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckCircle, Award, Users, Target, Lightbulb, Shield } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We maintain the highest ethical standards in all our business practices and relationships.'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for continuous improvement and deliver exceptional quality in every service.'
  },
  {
    icon: Users,
    title: 'Teamwork',
    description: 'We believe in the power of collaboration and mutual respect among our team members.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace new technologies and innovative solutions to enhance our services.'
  }
]

const achievements = [
  {
    icon: Award,
    title: 'ISO 9001:2015',
    description: 'Quality Management System'
  },
  {
    icon: Award,
    title: 'ISO 14001:2015',
    description: 'Environmental Management'
  },
  {
    icon: Award,
    title: 'OHSAS 18001:2007',
    description: 'Occupational Health & Safety'
  },
  {
    icon: Award,
    title: 'ISO 45001:2018',
    description: 'Occupational Health & Safety'
  }
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])
  const valueRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Animate main content with smooth easing
      gsap.fromTo(contentRefs.current,
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

      // Animate values cards with smoother timing
      gsap.fromTo(valueRefs.current,
        { y: 30, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: valueRefs.current[0],
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none'
          }
        }
      )

      // Add subtle floating animation to values
      valueRefs.current.forEach((card, index) => {
        if (card) {
          gsap.to(card, {
            y: -5,
            duration: 3 + index * 0.2,
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
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-200 rounded-full transform rotate-45"></div>
        <div className="absolute top-40 right-32 w-32 h-32 bg-blue-300 rounded-full transform rotate-12"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-blue-400 rounded-full transform -rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            About TPM Group
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            Leading Facility Management
            <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Since 2004
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are the best and integrated network provider of corporate or public facility services and maintenance, 
            committed to delivering excellence across Indonesia with ISO-certified quality standards.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Mission & Vision */}
          <div className="space-y-8">
            <div ref={(el) => { contentRefs.current[0] = el }} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <Target className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Provide qualified and consistent services with competitive cost',
                  'Create professional, qualified and certified labor force',
                  'Conduct tiered and continual trainings',
                  'Technology utilizations as supporting services'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div ref={(el) => { contentRefs.current[1] = el }} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <Lightbulb className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                To become the leading integrated facility management company in Indonesia, 
                recognized for our innovation, reliability, and commitment to excellence in 
                serving our clients' diverse needs.
              </p>
            </div>
          </div>

          {/* Company Image Placeholder */}
          <div ref={(el) => { contentRefs.current[2] = el }} className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="text-gray-500" size={40} />
                  </div>
                  <p className="text-lg font-medium">Company Team</p>
                  <p className="text-sm">Professional Excellence</p>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our actions and define our company culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div
                  key={index}
                  ref={(el) => { valueRefs.current[index] = el }}
                  className="group relative"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 relative overflow-hidden h-full">
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="text-white" size={28} />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-500 transition-colors duration-300">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-12 border border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quality Certifications
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to quality is validated by international standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 text-sm group-hover:text-gray-500 transition-colors duration-300">
                    {achievement.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
