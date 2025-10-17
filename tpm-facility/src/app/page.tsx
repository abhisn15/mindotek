'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  Shield,
  Users,
  Wrench,
  Building,
  ArrowRight,
  CheckCircle,
  Clock,
  FileCheck,
  Headphones,
  TrendingUp,
  Award,
  MapPin,
  Heart,
} from 'lucide-react'
import HeroCarousel from '@/components/HeroCarousel'
import ClientLogoMarquee from '@/components/ClientLogoMarquee'
import StatsSection from '@/components/StatsSection'
import MobileMenu from '@/components/MobileMenu'
import OptimizedImage from '@/components/OptimizedImage'

export default function Home() {
  // Featured client logos for homepage (select the most prominent ones)
  const featuredClientLogos = [
    { name: "Bank BRI", logo: "/assets/clients/bank-bri.webp" },
    { name: "SOGO", logo: "/assets/clients/sogo.webp" },
    { name: "Smartfren", logo: "/assets/clients/smartfren-hitam.webp" },
    { name: "Pertamina", logo: "/assets/clients/pertamina.webp" },
    { name: "Telkomsel", logo: "/assets/clients/telkomsel.webp" },
    { name: "Ramayana", logo: "/assets/clients/ramayana.webp" },
    { name: "MyRepublic", logo: "/assets/clients/myrep.webp" },
    { name: "Anteraja", logo: "/assets/clients/anteraja.webp" },
    { name: "ZARA", logo: "/assets/clients/zara.webp" },
    { name: "Meikarta", logo: "/assets/clients/meikarta.webp", isLarge: true },
    { name: "SEPHORA", logo: "/assets/clients/sephora.webp" },
    {
      name: "Marks & Spencer",
      logo: "/assets/clients/marks-and-spencers.webp",
    },
    {
      name: "Galeries Lafayette",
      logo: "/assets/clients/galeries-lafayette.webp",
    },
    { name: "Kinokuniya", logo: "/assets/clients/kinokuniya.webp" },
    { name: "Foodhall", logo: "/assets/clients/foodhall.webp" },
    { name: "Max Fashion", logo: "/assets/clients/max-fashion.webp" },
    { name: "Bershka", logo: "/assets/clients/bershka.webp" },
    { name: "Pull & Bear", logo: "/assets/clients/pull-and-bear.webp" },
    { name: "Stradivarius", logo: "/assets/clients/stradivarius.webp" },
    { name: "LC Waikiki", logo: "/assets/clients/lc-waikiki.webp" },
    { name: "Swatch", logo: "/assets/clients/swatch.webp" },
    { name: "HEMA", logo: "/assets/clients/hema.webp" },
    { name: "Sociolla", logo: "/assets/clients/sociolla.webp" },
    { name: "Babyshop", logo: "/assets/clients/babyshop.webp" },
    { name: "Daily Foodhall", logo: "/assets/clients/daily-foodhall.webp" },
    { name: "Lippo Group", logo: "/assets/clients/lippo-group.webp" },
    { name: "Sinarmas", logo: "/assets/clients/sinarmas.webp" },
    { name: "Pakuwon Group", logo: "/assets/clients/pakuwon-group.webp" },
    { name: "Indosat M2", logo: "/assets/clients/indosat-m2.webp" },
    { name: "Mitsubishi Motors", logo: "/assets/clients/mitsibishi.webp" },
    { name: "Bolloré Logistics", logo: "/assets/clients/bollore.webp" },
    { name: "UNAIDS", logo: "/assets/clients/unaids.webp" },
  ];

  return (
    <div className="min-h-screen">
      <MobileMenu />
      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* About Preview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
                About TPM Group
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Leading Facility Management
                <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Since 2004
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                PT. Trimitra Putra Mandiri - Your trusted partner in facility
                management services, committed to delivering excellence across
                Indonesia with ISO-certified quality standards.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Learn More About Us
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
            <div>
              <StatsSection />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              Our Services
            </div>
            <h2 className="h-auto text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Facility
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Management Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integrated services tailored to meet your specific needs with
              excellence and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                icon: Shield,
                title: "Security Services",
                description:
                  "End-to-end security solutions with certified guards, advanced monitoring, and consulting support",
                color: "from-blue-500 to-blue-600",
                image: "/assets/banner-hero/security.webp",
              },
              {
                icon: Users,
                title: "Cleaning & Gardening",
                description:
                  "General, hygiene, and high-rise cleaning plus professional landscaping and gardening",
                color: "from-blue-600 to-blue-700",
                image: "/assets/cleaning.webp",
              },
              {
                icon: Wrench,
                title: "Property Maintenance",
                description: "Mechanical, electrical, pest control, and full building maintenance services",
                color: "from-blue-700 to-blue-800",
                image: "/assets/property_maintenance.webp",
              },
              {
                icon: Building,
                title: "Office Support",
                description:
                  "Comprehensive office support from administration, technical, customer service, to operational workforce",
                color: "from-blue-800 to-blue-900",
                image: "/assets/office_support.webp",
              },
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 h-full overflow-hidden">
                    {/* Service Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={`${service.title} - TPM Group`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
                      
                      {/* Icon Overlay on Image */}
                      <div className="absolute bottom-4 left-4">
                        <div
                          className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className="text-white" size={24} />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {service.description}
                      </p>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 border-2 border-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore All Services
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold mb-6">
              Why Choose TPM
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The TPM Advantage
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              What makes us the preferred choice for facility management across
              Indonesia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "24/7 Support",
                description:
                  "24/7 support and real-time monitoring to ensure safety and operational continuity",
              },
              {
                icon: FileCheck,
                title: "ISO Certified",
                description:
                  "Certified with ISO 9001, 14001, 45001, 37001, and 31000 to meet global benchmarks",
              },
              {
                icon: Headphones,
                title: "Dedicated Team",
                description:
                  "Nationwide PIC and professional teams delivering consistent, tailored service across Indonesia",
              },
              {
                icon: TrendingUp,
                title: "Proven Track Record",
                description:
                  "20+ years of experience serving 60+ leading companies across multiple industries",
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-blue-100 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-24 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              Our Clients
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Leading Companies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join over 60 companies who trust TPM Group for their facility management needs
            </p>
          </div>

          {/* Client Logos Marquee */}
          <ClientLogoMarquee clients={featuredClientLogos} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Industry Categories */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12 mt-16">
              {[
                { name: "Banking", count: "5+", icon: Building },
                { name: "Retail", count: "15+", icon: Award },
                { name: "Telecom", count: "8+", icon: TrendingUp },
                { name: "Logistics", count: "6+", icon: MapPin },
                { name: "Energy", count: "4+", icon: Shield },
                { name: "Healthcare", count: "3+", icon: Heart },
              ].map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 text-center border border-gray-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="text-white" size={20} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-blue-600 font-semibold">
                      {industry.count} Clients
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <Link
                href="/client"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View All Clients
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Career Preview Section - With Images */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
                Join Our Team
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Build Your Career
                <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  With TPM Group
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Join a dynamic team of professionals dedicated to excellence. We
                offer continuous training, career development, and opportunities
                across Indonesia for security officers, facility managers,
                cleaning supervisors, and administrative staff.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Professional Development & Training",
                  "Career Advancement Opportunities",
                  "Work-Life Balance",
                  "Competitive Benefits Package",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="text-white" size={16} />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/career"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Open Positions
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: Award,
                  title: "Training Programs",
                  desc: "Continuous Learning & Certification",
                  image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                },
                {
                  icon: TrendingUp,
                  title: "Career Growth",
                  desc: "Clear Advancement Paths",
                  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                },
                { 
                  icon: Heart, 
                  title: "Work Culture", 
                  desc: "Supportive Environment",
                  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                },
                { 
                  icon: Users, 
                  title: "Team Spirit", 
                  desc: "Collaborative Teamwork",
                  image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                },
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                  >
                    {/* Image with Overlay */}
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={item.image}
                        alt={`${item.title} - TPM Group`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                      
                      {/* Icon on Image */}
                      <div className="absolute bottom-3 left-3">
                        <div className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="text-blue-600" size={22} />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 text-center">
                      <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 border-2 border-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold mb-6">
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your Facilities?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Contact us today for a free consultation and discover how we can
              help you achieve operational excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Us Now
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
