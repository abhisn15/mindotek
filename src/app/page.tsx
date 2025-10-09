import Image from 'next/image';
import { Typewriter } from '@/components/Typewriter';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { ScaleIn } from '@/components/animations/ScaleIn';
import Navigation from '@/components/Navigation';
import companyData from '@/data/company.json';
import visionMission from '@/data/vision-mission.json';
import benefitsData from '@/data/customer-benefits.json';
import servicesData from '@/data/services.json';
import locationsData from '@/data/locations.json';
import wmsData from '@/data/wms.json';
import legalityData from '@/data/legality.json';

export const metadata = {
  title: 'Mindotek – PT. Logamindo Teknologi Indonesia | TPM Group Company Profile',
  description: 'PT. Logamindo Teknologi Indonesia (Mindotek) - Leading logistics and warehousing company in Indonesia. Member of TPM Group providing comprehensive supply chain solutions with 7 strategic locations nationwide.',
  keywords: 'logistics Indonesia, warehouse Jakarta, TPM Group, Mindotek, distribution services, warehousing solutions, supply chain management, Indonesian logistics company, cold storage Indonesia, transportation services',
  authors: [{ name: 'PT. Logamindo Teknologi Indonesia' }],
  creator: 'PT. Logamindo Teknologi Indonesia',
  publisher: 'TPM Group',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mindotek.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Mindotek – PT. Logamindo Teknologi Indonesia | TPM Group',
    description: 'Leading logistics and warehousing company in Indonesia providing comprehensive supply chain solutions with 7 strategic locations nationwide.',
    url: 'https://mindotek.com',
    siteName: 'Mindotek',
    locale: 'en_ID',
    type: 'website',
    images: [
      {
        url: '/assets/banner-hero.png',
        width: 1200,
        height: 630,
        alt: 'Mindotek Warehouse Facility',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mindotek – PT. Logamindo Teknologi Indonesia | TPM Group',
    description: 'Leading logistics and warehousing company in Indonesia providing comprehensive supply chain solutions.',
    images: ['/assets/banner-hero.png'],
    creator: '@tpmgroup',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function Home() {
  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "PT. Logamindo Teknologi Indonesia",
            "alternateName": "Mindotek",
            "url": "https://mindotek.com",
            "logo": "https://mindotek.com/logo.png",
            "description": "Leading logistics and warehousing company in Indonesia providing comprehensive supply chain solutions with 7 strategic locations nationwide.",
            "foundingDate": "2018",
            "industry": "Logistics and Supply Chain",
            "areaServed": "Indonesia",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Komp. Dutamas Fatmawati Blok B2/26, Jl. Fatmawati Cipete Utara",
              "addressLocality": "Jakarta Selatan",
              "addressRegion": "DKI Jakarta",
              "postalCode": "12410",
              "addressCountry": "Indonesia"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+62-21-29305768",
              "contactType": "customer service",
              "email": "contact@mindotek.com",
              "availableLanguage": ["Indonesian", "English"]
            },
            "sameAs": [
              "https://tpmgroup.id"
            ]
          })
        }}
      />

      <main className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-50 via-white to-orange-50">
        {/* Animated Background Patterns */}
        <div className="absolute inset-0 z-0">
          {/* Vintage styled hero background using Tailwind */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/assets/banner-hero.png"
              alt="Mindotek Warehouse Facility - Modern logistics infrastructure"
              fill
              className="object-cover opacity-60 contrast-125 brightness-95"
              priority
            />
            {/* Vintage overlay: slight vignette and color tint */}
            <div className="absolute inset-0 pointer-events-none bg-black/20" style={{
              background: ""
            }} />
            
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 via-transparent to-orange-900/5"></div>
        </div>

        {/* Sophisticated Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large decorative circles */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-red-300 to-orange-300 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-orange-300 to-red-300 rounded-full opacity-12 animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-20 w-20 h-20 bg-gradient-to-br from-red-400 to-orange-400 rounded-full opacity-8 animate-pulse delay-2000"></div>

          {/* Additional floating shapes */}
          <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-gradient-to-br from-red-200 to-pink-200 rounded-2xl opacity-15 animate-pulse delay-500 rotate-45"></div>
          <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full opacity-12 animate-pulse delay-1500"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-7xl mx-auto">
          <ScaleIn>
            <div className="mb-6 sm:mb-8">
              <span className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-red-100 to-orange-100 text-red-800 rounded-full text-sm font-semibold mb-4 sm:mb-6 shadow-lg">
                PT. Logamindo Teknologi Indonesia
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent leading-tight tracking-tight">
          {companyData.tradingName}
        </h1>
            </div>
          </ScaleIn>

          <ScrollReveal delay={0.3}>
            <div className="mb-8 sm:mb-12">
              <Typewriter
                text={companyData.tagline}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-red-700 mb-6 sm:mb-8 font-light block leading-relaxed"
              />
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 max-w-4xl lg:max-w-5xl mx-auto leading-relaxed font-light">
                Your trusted logistics and warehousing partner in Indonesia, delivering excellence since 2018
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-center">
              <a
                href="#company"
                className="group inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 text-white px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-2xl sm:rounded-3xl font-bold text-base sm:text-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto"
              >
                <span className="flex-1 sm:flex-none">Explore Our Company</span>
                <svg className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center bg-white/90 backdrop-blur-sm text-red-600 px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-2xl sm:rounded-3xl font-bold text-base sm:text-lg hover:bg-white hover:text-red-700 transition-all duration-300 shadow-xl border-2 border-red-200 hover:border-red-300 transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto"
              >
                <span className="flex-1 sm:flex-none">Get In Touch</span>
                <svg className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </div>
          </ScrollReveal>

          {/* Enhanced Scroll Indicator */}
          <div className="absolute -bottom-20 sm:-bottom-40 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <div className="w-6 sm:w-8 h-10 sm:h-14 border-2 border-red-400 rounded-full flex justify-center">
                <div className="w-1 h-2 sm:h-3 bg-red-400 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section id="company" className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-2">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="dots-red" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#dots-red)" className="text-red-600"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <span className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-red-100 to-orange-100 text-red-800 rounded-full text-sm font-semibold mb-4 sm:mb-6 shadow-lg">
                About Mindotek
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent leading-tight">
                Corporate Profile
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed font-light">
                PT. Logamindo Teknologi Indonesia - A member of TPM Group focusing on comprehensive logistics services across Indonesia
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center mb-16 sm:mb-20 lg:mb-24">
            <ScrollReveal direction="left">
              <div className="relative">
                {/* Glassmorphism Card */}
                <div className="bg-white/90 backdrop-blur-xl p-6 sm:p-8 lg:p-10 rounded-3xl lg:rounded-4xl shadow-2xl border border-white/30 relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute -top-8 -right-8 w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40 bg-gradient-to-br from-red-200 to-orange-200 rounded-full opacity-20"></div>
                  <div className="absolute -bottom-8 -left-8 w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 bg-gradient-to-br from-orange-200 to-red-200 rounded-full opacity-15"></div>

                  <div className="relative z-10">
                    <div className="flex items-center mb-6 sm:mb-8">
                      <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-xl sm:rounded-2xl flex items-center justify-center mr-4 sm:mr-6 shadow-xl">
                        <svg className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Company Introduction</h3>
                    </div>
                    <div className="prose prose-base sm:prose-lg lg:prose-xl text-gray-700 leading-relaxed">
                      {companyData.introduction.split('\n\n').map((paragraph, index) => (
                        <p key={index} className={`mb-4 sm:mb-6 last:mb-0 ${index === 0 ? 'text-base sm:text-lg font-medium' : 'text-sm sm:text-base'}`}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                <div className="group bg-white/95 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                  <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">2018</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-center text-sm sm:text-base">Founded</h4>
                  <p className="text-xs sm:text-sm text-gray-600 text-center">March 2018</p>
                </div>

                <div className="group bg-white/95 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                  <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">7</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-center text-sm sm:text-base">Locations</h4>
                  <p className="text-xs sm:text-sm text-gray-600 text-center">Across Indonesia</p>
                </div>

                <div className="group bg-white/95 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                  <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-center text-sm sm:text-base">Core Business</h4>
                  <p className="text-xs sm:text-sm text-gray-600 text-center">Warehouse & Distribution</p>
                </div>

                <div className="group bg-white/95 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                  <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-center text-sm sm:text-base">TPM Group</h4>
                  <p className="text-xs sm:text-sm text-gray-600 text-center">Member Company</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision-mission" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-red-50/30 via-white to-orange-50/30">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                Vision & Mission
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                The guiding principles that drive our commitment to excellence in logistics and supply chain management
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            <ScrollReveal direction="left" delay={0.2}>
              <div className="group bg-white/95 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-3xl shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40 bg-gradient-to-br from-red-100 to-orange-100 rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="absolute -bottom-4 -left-4 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-gradient-to-br from-orange-100 to-red-100 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="flex items-start mb-6 sm:mb-8">
                    <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-xl sm:rounded-2xl flex items-center justify-center mr-4 sm:mr-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <svg className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold mb-3">
                        Our Vision
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300 mb-4">
                        Vision
                      </h3>
                    </div>
                  </div>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                    {visionMission.vision}
                  </p>
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 p-4 sm:p-6 rounded-xl border-l-4 border-red-500 relative">
                    <div className="absolute top-2 right-2 w-4 h-4 sm:w-6 sm:h-6 bg-red-200 rounded-full opacity-50"></div>
                    <p className="text-red-800 font-medium italic leading-relaxed text-sm sm:text-base">
                      &ldquo;{visionMission.visionIcon}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <div className="group bg-white/95 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-3xl shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40 bg-gradient-to-br from-orange-100 to-red-100 rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="absolute -bottom-4 -left-4 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-gradient-to-br from-red-100 to-orange-100 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="flex items-start mb-6 sm:mb-8">
                    <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-gradient-to-br from-red-700 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center mr-4 sm:mr-6 shadow-xl group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                      <svg className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold mb-3">
                        Our Mission
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-red-700 transition-colors duration-300 mb-4">
                        Mission
                      </h3>
                    </div>
                  </div>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                    {visionMission.mission}
                  </p>
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 sm:p-6 rounded-xl border-l-4 border-orange-500 relative">
                    <div className="absolute top-2 right-2 w-4 h-4 sm:w-6 sm:h-6 bg-orange-200 rounded-full opacity-50"></div>
                    <p className="text-orange-800 font-medium italic leading-relaxed text-sm sm:text-base">
                      &ldquo;{visionMission.missionIcon}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                Our Products & Solutions
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed">
                Comprehensive logistics services tailored to meet your business needs across Indonesia
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {servicesData.map((service, index) => (
              <StaggerItem key={service.id}>
                <div className="group bg-white/95 backdrop-blur-sm border-2 border-red-100 rounded-3xl p-6 sm:p-8 hover:border-red-300 hover:shadow-2xl transition-all duration-300 cursor-pointer h-full transform hover:-translate-y-1 sm:hover:-translate-y-2 relative overflow-hidden">
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Floating icon */}
                  <div className="absolute -top-4 -right-4 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    <div className="flex items-start mb-6 sm:mb-8">
                      <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center mr-4 sm:mr-6 text-white shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0">
                        {index === 0 && (
                          <svg className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        )}
                        {index === 1 && (
                          <svg className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                          </svg>
                        )}
                        {index === 2 && (
                          <svg className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        )}
                        {index === 3 && (
                          <svg className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                          </svg>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {service.summary}
                        </p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center text-sm sm:text-base">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                        Key Features:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center text-xs sm:text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 mr-2 flex-shrink-0 group-hover:text-red-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-red-50 to-orange-50 p-4 sm:p-6 rounded-xl border border-red-100 group-hover:border-red-200 transition-colors">
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {service.details}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits & KPI */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-red-50/30 via-white to-orange-50/30 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 sm:w-40 lg:w-48 h-32 sm:h-40 lg:h-48 bg-gradient-to-br from-red-200 to-orange-200 rounded-full opacity-10"></div>
          <div className="absolute bottom-20 right-20 w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40 bg-gradient-to-br from-orange-200 to-red-200 rounded-full opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
            <div>
              <ScrollReveal>
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                    {benefitsData.title}
                  </h2>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  {benefitsData.subtitle}
                </p>
              </ScrollReveal>
              <StaggerContainer>
                {benefitsData.items.map((benefit, index) => (
                  <StaggerItem key={index}>
                    <div className="group flex items-start mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl bg-white/60 hover:bg-white/80 transition-all duration-300 border border-red-100 hover:border-red-200 hover:shadow-lg">
                      <div className="w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <svg className="w-3 sm:w-4 h-3 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm sm:text-base text-gray-800 font-medium group-hover:text-gray-900 transition-colors leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <div>
              <ScrollReveal delay={0.3}>
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900">
                    {benefitsData.kpi.title}
                  </h3>
                </div>
              </ScrollReveal>
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {benefitsData.kpi.items.map((kpi, index) => (
                  <StaggerItem key={index}>
                    <div className="group bg-white/95 backdrop-blur-sm p-3 sm:p-4 lg:p-6 rounded-xl shadow-lg border border-red-100 hover:shadow-xl hover:border-red-200 transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-red-700 font-semibold text-sm sm:text-base lg:text-lg">
                          {kpi}
                        </span>
                        <div className="w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-3 sm:w-4 h-3 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="w-full bg-red-100 rounded-full h-1.5 sm:h-2">
                        <div className="bg-gradient-to-r from-red-500 to-red-600 h-1.5 sm:h-2 rounded-full transition-all duration-1000 w-11/12"></div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Warehouse Locations */}
      <section id="locations" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                {locationsData.title}
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed">
                {locationsData.description}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {locationsData.locations.map((location, index) => (
              <ScrollReveal key={location.id} delay={index * 0.1}>
                <div className="group bg-white/95 backdrop-blur-sm border-2 border-red-100 rounded-2xl p-4 sm:p-6 text-center hover:border-red-300 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
                  <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-base sm:text-lg">📍</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{location.city}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{location.region}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-6 sm:p-8 lg:p-10 xl:p-12 text-white text-center shadow-2xl relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id="dots-locations" width="10" height="10" patternUnits="userSpaceOnUse">
                      <circle cx="5" cy="5" r="1" fill="currentColor"/>
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#dots-locations)"/>
                </svg>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Strategic Nationwide Coverage</h3>
                <p className="text-red-100 mb-6 sm:mb-8 text-base sm:text-lg lg:text-xl max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
                  Our warehouses are strategically located across major cities in Indonesia to ensure optimal distribution and logistics efficiency for your business needs.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                    <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">7</div>
                    <div className="text-red-200 text-xs sm:text-sm">Locations</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                    <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">24/7</div>
                    <div className="text-red-200 text-xs sm:text-sm">Operations</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                    <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">100%</div>
                    <div className="text-red-200 text-xs sm:text-sm">Security</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                    <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">ISO</div>
                    <div className="text-red-200 text-xs sm:text-sm">Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WMS System */}
      <section id="wms" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-red-50/30 via-white to-orange-50/30">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                {wmsData.title}
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed">
                {wmsData.description}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {wmsData.features.map((feature, index) => (
              <ScrollReveal key={feature} delay={index * 0.1}>
                <div className="group bg-white/95 backdrop-blur-sm border-2 border-red-100 rounded-2xl p-4 sm:p-6 hover:border-red-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-sm sm:text-base">#{index + 1}</span>
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors leading-tight">
                    {feature}
                  </h3>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 xl:p-12 shadow-xl border border-red-100 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id="hexagons" width="20" height="20" patternUnits="userSpaceOnUse">
                      <polygon points="10,0 15,5 10,10 5,5" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#hexagons)"/>
                </svg>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center text-gray-900">Advanced WMS Capabilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                  <div className="text-center group">
                    <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform">
                      <svg className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-gray-900 group-hover:text-red-600 transition-colors">Custom Built</h4>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Developed in-house by our IT team to match your exact business processes and requirements</p>
                  </div>
                  <div className="text-center group">
                    <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-gradient-to-br from-red-700 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform">
                      <svg className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-gray-900 group-hover:text-red-700 transition-colors">Real-Time Data</h4>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Monitor your inventory and operations with up-to-the-minute accuracy and live updates</p>
                  </div>
                  <div className="text-center group">
                    <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-gradient-to-br from-red-600 to-red-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform">
                      <svg className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-gray-900 group-hover:text-red-600 transition-colors">Scalable</h4>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Grows with your business, from single warehouse to nationwide operations seamlessly</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Legality Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                {legalityData.title}
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-6 sm:p-8 lg:p-10 xl:p-12 shadow-xl border border-red-100">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 text-gray-900 text-center">Legal Documents & Certifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {Object.entries(legalityData.documents[0]).map(([key, value]) => (
                  key !== 'name' && key !== 'address' && (
                    <div key={key} className="flex flex-col sm:flex-row sm:justify-between sm:items-start py-3 sm:py-4 border-b border-red-200 last:border-b-0">
                      <span className="font-semibold text-gray-900 capitalize text-sm sm:text-base mb-1 sm:mb-0">
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
                      </span>
                      <span className="text-gray-700 text-sm sm:text-base text-left sm:text-right sm:ml-4 break-all">{value}</span>
                    </div>
                  )
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 bg-white rounded-full opacity-5 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-40 sm:w-56 lg:w-72 h-40 sm:h-56 lg:h-72 bg-white rounded-full opacity-5 blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl lg:max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Get In Touch</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg sm:text-xl lg:text-2xl text-red-100 mb-8 sm:mb-12 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
              Ready to optimize your logistics operations? Contact us today for a consultation and customized solution.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-center justify-center mb-3 sm:mb-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-xl flex items-center justify-center mr-0 sm:mr-3 mb-2 sm:mb-0">
                    <svg className="w-5 sm:w-6 h-5 sm:h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="font-bold text-base sm:text-lg">Email</h4>
                    <a href={`mailto:${companyData.email}`} className="text-red-200 hover:text-white transition-colors text-sm sm:text-base break-all">
                      {companyData.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-center justify-center mb-3 sm:mb-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-xl flex items-center justify-center mr-0 sm:mr-3 mb-2 sm:mb-0">
                    <svg className="w-5 sm:w-6 h-5 sm:h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="font-bold text-base sm:text-lg">Phone</h4>
                    <a href={`tel:${companyData.phone.replace(/\s+/g, '')}`} className="text-red-200 hover:text-white transition-colors text-sm sm:text-base">
                      {companyData.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
        <a
          href={`tel:${companyData.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center bg-white text-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 text-sm sm:text-base"
              >
                <svg className="w-4 sm:w-5 h-4 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
              <a
                href={`mailto:${companyData.email}`}
                className="inline-flex items-center bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold hover:bg-red-800 transition-all shadow-lg border-2 border-white/20 hover:border-white/40 transform hover:-translate-y-1 hover:scale-105 text-sm sm:text-base"
              >
                <svg className="w-4 sm:w-5 h-4 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Email
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                  <span className="text-white font-bold text-lg sm:text-xl">M</span>
                </div>
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Mindotek
                </span>
              </div>
              <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                PT. Logamindo Teknologi Indonesia - Your trusted logistics and warehousing partner in Indonesia
              </p>
              <p className="text-gray-400 text-sm sm:text-base">
                Head Office: {companyData.headOffice}
              </p>
            </div>

            <div>
              <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#company" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Company</a></li>
                <li><a href="#vision-mission" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Vision & Mission</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Services</a></li>
                <li><a href="#locations" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Locations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="break-words">Jakarta, Indonesia</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="break-words">{companyData.phone}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="break-words">{companyData.email}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-gray-400">
            <p className="text-sm sm:text-base">&copy; 2024 PT. Logamindo Teknologi Indonesia (Mindotek). All rights reserved.</p>
            <p className="mt-1 sm:mt-2 text-xs sm:text-sm">Part of TPM Group - Quality & Safety</p>
          </div>
        </div>
      </footer>
    </main>
    </>
  );
}
