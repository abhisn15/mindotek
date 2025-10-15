import dynamic from "next/dynamic";
import { Typewriter } from "@/components/Typewriter";
import Navigation from "@/components/Navigation";
import AdvancedHeroParallax from "@/components/AdvancedHeroParallax";
import FloatingIcons from "@/components/FloatingIcons";
import StatsCounter from "@/components/StatsCounter";
import FeatureShowcase from "@/components/FeatureShowcase";
import CTASection from "@/components/CTASection";
import {
  TrophyIcon,
  LockIcon,
  ComputerIcon,
  TruckIcon,
  UsersIcon,
  ChartIcon,
  BuildingIcon,
  CalendarIcon,
  MapPinIcon,
} from "@/components/icons/ProfessionalIcons";
import companyData from "@/data/company.json";
import visionMission from "@/data/vision-mission.json";
import benefitsData from "@/data/customer-benefits.json";
import servicesData from "@/data/services.json";
import locationsData from "@/data/locations.json";
import portfolioData from "@/data/portfolio-list.json";
import SimpleFadeIn from "@/components/SimpleFadeIn";
import Footer from "@/components/Footer";
import MobileMenu from "@/components/MobileMenu";
import Link from "next/link";
import Image from "next/image";

// Essential dynamic imports only - reduced for better performance
const GoogleMap = dynamic(() => import("@/components/GoogleMap").then(mod => ({ default: mod.GoogleMap })), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 rounded-2xl" />
});
const AnimatedProgressBar = dynamic(() => import("@/components/AnimatedProgressBar"), {
  loading: () => <div className="h-16 animate-pulse bg-gray-100 rounded-lg" />,
});

export const metadata = {
  title:
    "Mindotek – PT. Logamindo Teknologi Indonesia | TPM Group Company Profile",
  description:
    "PT. Logamindo Teknologi Indonesia (Mindotek) - Leading logistics and warehousing company in Indonesia. Member of TPM Group providing comprehensive supply chain solutions with 7 strategic locations nationwide.",
  keywords:
    "logistics Indonesia, warehouse Jakarta, TPM Group, Mindotek, distribution services, warehousing solutions, supply chain management, Indonesian logistics company, cold storage Indonesia, transportation services",
  authors: [{ name: "PT. Logamindo Teknologi Indonesia" }],
  creator: "PT. Logamindo Teknologi Indonesia",
  publisher: "TPM Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mindotek.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mindotek – PT. Logamindo Teknologi Indonesia | TPM Group",
    description:
      "Leading logistics and warehousing company in Indonesia providing comprehensive supply chain solutions with 7 strategic locations nationwide.",
    url: "https://mindotek.com",
    siteName: "Mindotek",
    locale: "en_ID",
    type: "website",
    images: [
      {
        url: "/assets/logo-mindotek.webp",
        width: 1200,
        height: 630,
        alt: "Mindotek Warehouse Facility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mindotek – PT. Logamindo Teknologi Indonesia | TPM Group",
    description:
      "Leading logistics and warehousing company in Indonesia providing comprehensive supply chain solutions.",
    images: ["/assets/logo-mindotek.webp"],
    creator: "@tpmgroup",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function Home() {
  const stats = [
    {
      value: 7,
      label: "Locations",
      suffix: "+",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      value: 24,
      label: "24/7 Operations",
      suffix: "/7",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      value: 100,
      label: "Security",
      suffix: "%",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      value: 2018,
      label: "Founded",
      noComma: true,
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  const whyChooseUs = [
    {
      icon: <TrophyIcon className="w-8 h-8" />,
      title: "Proven Excellence",
      description:
        "Years of experience delivering quality logistics solutions across Indonesia with ISO certification.",
    },
    {
      icon: <LockIcon className="w-8 h-8" />,
      title: "Secure & Safe",
      description:
        "24/7 CCTV monitoring, fire safety systems, and comprehensive insurance coverage for your peace of mind.",
    },
    {
      icon: <ComputerIcon className="w-8 h-8" />,
      title: "Advanced Technology",
      description:
        "Custom-built WMS system developed in-house for real-time inventory tracking and management.",
    },
    {
      icon: <TruckIcon className="w-8 h-8" />,
      title: "Nationwide Coverage",
      description:
        "Strategic locations across Indonesia ensuring efficient distribution and timely delivery.",
    },
    {
      icon: <UsersIcon className="w-8 h-8" />,
      title: "Professional Team",
      description:
        "Skilled workforce trained to handle diverse logistics needs with expertise and dedication.",
    },
    {
      icon: <ChartIcon className="w-8 h-8" />,
      title: "Cost Effective",
      description:
        "Optimized operations and routes to provide competitive pricing without compromising quality.",
    },
  ];

  return (
    <>
      {/* SEO Structured Data - Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "PT. Logamindo Teknologi Indonesia",
            alternateName: "Mindotek",
            url: "https://mindotek.com",
            logo: "https://mindotek.com/assets/logo-mindotek-white.webp",
            image: "https://mindotek.com/assets/banner-hero.webp",
            description:
              "Leading logistics and warehousing company in Indonesia providing comprehensive supply chain solutions with 7 strategic locations nationwide.",
            foundingDate: "2018",
            industry: "Logistics and Supply Chain",
            areaServed: "Indonesia",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Komp. Dutamas Fatmawati Blok B2/26, Jl. Fatmawati Cipete Utara",
              addressLocality: "Jakarta Selatan",
              addressRegion: "DKI Jakarta",
              postalCode: "12410",
              addressCountry: "Indonesia",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+62-21-29305768",
              contactType: "customer service",
              email: "contact@mindotek.com",
              availableLanguage: ["Indonesian", "English"],
            },
            sameAs: ["https://tpmgroup.id"],
          }),
        }}
      />

      {/* SEO Structured Data - WebSite for Sitelinks Search Box */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Mindotek",
            alternateName: "PT. Logamindo Teknologi Indonesia",
            url: "https://mindotek.com",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://mindotek.com/portfolio?search={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          }),
        }}
      />

      {/* SEO Structured Data - BreadcrumbList for Navigation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://mindotek.com"
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Company Profile",
                item: "https://mindotek.com/#company"
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Services",
                item: "https://mindotek.com/#services"
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Portfolio",
                item: "https://mindotek.com/portfolio"
              },
              {
                "@type": "ListItem",
                position: 5,
                name: "Locations",
                item: "https://mindotek.com/#locations"
              },
              {
                "@type": "ListItem",
                position: 6,
                name: "Contact",
                item: "https://mindotek.com/#contact"
              }
            ]
          }),
        }}
      />

      {/* SEO Structured Data - Service offerings */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: servicesData.map((service, index) => ({
              "@type": "Service",
              position: index + 1,
              name: service.title,
              description: service.summary,
              provider: {
                "@type": "Organization",
                name: "PT. Logamindo Teknologi Indonesia",
                url: "https://mindotek.com"
              },
              areaServed: "Indonesia",
              serviceType: "Logistics and Supply Chain"
            }))
          }),
        }}
      />

      <main className="min-h-screen bg-white">
        {/* Navigation */}
        <Navigation />
        <MobileMenu />

        {/* Hero Section */}
        <section
          id="hero"
          className="relative min-h-screen flex items-start md:items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-100 pt-20 md:pt-0"
        >
          {/* Background visual: subtle industrial texture or image */}

          {/* Advanced Parallax Background */}
          <AdvancedHeroParallax />
          
          {/* Floating Icons Animation */}
          <FloatingIcons />

          <div className="relative z-20 text-center px-6 sm:px-8 md:px-12 max-w-6xl mx-auto py-24 sm:py-28">
            {/* Company Label */}
            <div className="inline-block px-6 py-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg mb-6">
              <span className="text-sm sm:text-base font-semibold text-red-700 tracking-wide">
                PT. Logamindo Teknologi Indonesia – Member of TPM Group
              </span>
            </div>

            {/* Main Title */}
            <h1
              className="tracking-tighter text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-orange-600 to-yellow-600 drop-shadow-sm"
              style={{ fontFamily: '"Century", serif' }}
            >
              MINDOTEK
            </h1>

            {/* Animated Tagline */}
            <div className="mb-8">
              <Typewriter
                text="Logistics Partner in Indonesia"
                className="text-2xl sm:text-3xl md:text-4xl text-orange-600 font-medium mb-4 [text-shadow:0_2px_8px_rgba(0,0,0,0.7),0_1px_0_#222,0_0_4px_#ed3f27]"
              />
              <p className="text-base sm:text-lg md:text-xl text-white font-medium shadow-lg max-w-3xl mx-auto leading-relaxed">
                <span className="[text-shadow:0_2px_8px_rgba(0,0,0,0.7),0_1px_0_#222,0_0_4px_#ed3f27]">
                  Providing{" "}
                  <span className="text-orange-600 font-semibold [text-shadow:0_2px_8px_rgba(0,0,0,0.7),0_1px_0_#222,0_0_4px_#ed3f27]">
                    integrated logistics, warehousing,
                  </span>{" "}
                  and{" "}
                  across Indonesia — ensuring{" "}
                  <span className="font-semibold text-orange-600 [text-shadow:0_2px_8px_rgba(0,0,0,0.7),0_1px_0_#222,0_0_4px_#ed3f27]">
                    Quality &amp; Safety
                  </span>{" "}
                  in every delivery since 2018.
                </span>
              </p>
            </div>

            {/* Value Highlight Strip */}
            <div className="mt-10 mb-14 mx-auto max-w-4xl bg-white/90 backdrop-blur-md border border-red-100 rounded-2xl shadow-md">
              <p className="text-gray-700 text-base sm:text-lg md:text-xl px-8 py-6 leading-relaxed">
                From <strong>Warehouse Management System (WMS)</strong> to
                nationwide distribution and on-site support, Mindotek delivers{" "}
                <strong>reliable logistics excellence</strong> with technology
                and commitment.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <a
                href="#company"
                className="group inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-orange-600 text-white px-10 py-4 rounded-2xl font-bold text-base sm:text-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 w-full sm:w-auto"
              >
                <span>Discover Our Company</span>
                <svg
                  className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center bg-white/95 backdrop-blur-md text-red-700 px-10 py-4 rounded-2xl font-bold text-base sm:text-lg border-2 border-red-200 hover:border-red-300 hover:bg-white transition-all duration-300 shadow-lg transform hover:-translate-y-1 hover:scale-105 w-full sm:w-auto"
              >
                <span>Get in Touch</span>
                <svg
                  className="w-5 h-5 ml-3 group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Company Profile Section */}
        <section
          id="company"
          className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 bg-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-2">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <pattern
                  id="dots-red"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="10" cy="10" r="1.5" fill="currentColor" />
                </pattern>
              </defs>
              <rect
                width="100"
                height="100"
                fill="url(#dots-red)"
                className="text-red-600"
              />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <SimpleFadeIn>
              <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                <span className="inline-block px-6 py-3 bg-gradient-to-r from-red-100 to-orange-100 text-red-800 rounded-full text-sm sm:text-base font-semibold mb-6 shadow-lg">
                  About Mindotek
                </span>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent leading-tight">
                  Corporate Profile
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed">
                  PT. Logamindo Teknologi Indonesia - A member of TPM Group
                  focusing on comprehensive logistics services across Indonesia
                </p>
              </div>
            </SimpleFadeIn>

            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center mb-16 sm:mb-20">
              <SimpleFadeIn direction="left">
                <div className="relative">
                  <div className="bg-white/90 backdrop-blur-xl p-8 sm:p-10 lg:p-12 rounded-3xl shadow-2xl border border-white/30 relative overflow-hidden">
                    <div className="absolute -top-8 -right-8 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-red-200 to-orange-200 rounded-full opacity-20"></div>
                    <div className="absolute -bottom-8 -left-8 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-orange-200 to-red-200 rounded-full opacity-15"></div>

                    <div className="relative z-10">
                      <div className="flex items-center mb-6 sm:mb-8">
                        <div className="w-14 sm:w-16 lg:w-20 h-14 sm:h-16 lg:h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mr-4 sm:mr-6 shadow-xl">
                          <svg
                            className="w-7 sm:w-8 lg:w-10 h-7 sm:h-8 lg:h-10 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                        </div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                          Company Introduction
                        </h3>
                      </div>
                      <div className="prose prose-lg text-gray-700 leading-relaxed">
                        {companyData.introduction
                          .split("\n\n")
                          .map((paragraph, index) => (
                            <p
                              key={index}
                              className={`mb-6 ${
                                index === 0
                                  ? "text-lg sm:text-xl font-medium"
                                  : "text-base sm:text-lg"
                              }`}
                            >
                              {paragraph}
                            </p>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SimpleFadeIn>

              <SimpleFadeIn direction="right">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {[
                    { icon: <CalendarIcon className="w-8 h-8" />, title: "Founded", subtitle: "March 2018" },
                    {
                      icon: <MapPinIcon className="w-8 h-8" />,
                      title: "Locations",
                      subtitle: "Across Indonesia",
                    },
                    {
                      icon: <BuildingIcon className="w-8 h-8" />,
                      title: "Core Business",
                      subtitle: "Warehouse & Distribution",
                    },
                    {
                      icon: <UsersIcon className="w-8 h-8" />,
                      title: "TPM Group",
                      subtitle: "Member Company",
                    },
                  ].map((item, index) => (
                    <SimpleFadeIn key={index} delay={index * 0.1}>
                      <div className="group bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 min-h-[160px] sm:min-h-[180px] flex flex-col items-center justify-center">
                        <div className="w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                          <span className="text-white font-bold text-xl sm:text-2xl">
                            {item.icon}
                          </span>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2 text-center text-base sm:text-lg">
                          {item.title}
                        </h4>
                        <p className="text-sm sm:text-base text-gray-600 text-center">
                          {item.subtitle}
                        </p>
                      </div>
                    </SimpleFadeIn>
                  ))}
                </div>
              </SimpleFadeIn>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section
          id="vision-mission"
          className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-red-50/30 via-white to-orange-50/30"
        >
          <div className="max-w-7xl mx-auto">
            <SimpleFadeIn>
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                  Vision & Mission
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  The guiding principles that drive our commitment to excellence
                  in logistics and supply chain management
                </p>
              </div>
              </SimpleFadeIn>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
              <SimpleFadeIn direction="left" delay={0.2}>
                <div className="group bg-white/95 backdrop-blur-sm p-8 sm:p-10 rounded-3xl shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden h-full">
                  <div className="absolute -top-6 -right-6 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-red-100 to-orange-100 rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    <div className="flex items-start mb-6 sm:mb-8">
                      <div className="w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mr-4 sm:mr-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <svg
                          className="w-7 sm:w-8 h-7 sm:h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
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
                    <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border-l-4 border-red-500">
                      <p className="text-red-800 font-medium italic leading-relaxed text-sm sm:text-base">
                        &ldquo;{visionMission.visionIcon}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
                </SimpleFadeIn>

              <SimpleFadeIn direction="right" delay={0.4}>
                <div className="group bg-white/95 backdrop-blur-sm p-8 sm:p-10 rounded-3xl shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden h-full">
                  <div className="absolute -top-6 -right-6 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-orange-100 to-red-100 rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    <div className="flex items-start mb-6 sm:mb-8">
                      <div className="w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br from-red-700 to-red-600 rounded-2xl flex items-center justify-center mr-4 sm:mr-6 shadow-xl group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                        <svg
                          className="w-7 sm:w-8 h-7 sm:h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
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
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border-l-4 border-orange-500">
                      <p className="text-orange-800 font-medium italic leading-relaxed text-sm sm:text-base">
                        &ldquo;{visionMission.missionIcon}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </SimpleFadeIn>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <FeatureShowcase
              features={whyChooseUs}
              title="Why Choose Mindotek?"
              subtitle="We combine experience, technology, and dedication to deliver exceptional logistics solutions"
            />
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-red-50/30 via-white to-orange-50/30"
        >
          <div className="max-w-7xl mx-auto">
            <SimpleFadeIn>
              <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                  Our Products & Solutions
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed">
                  Comprehensive logistics services tailored to meet your
                  business needs across Indonesia
                </p>
              </div>
            </SimpleFadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {servicesData.map((service, index) => (
                <SimpleFadeIn key={service.id} delay={index * 0.1} direction="up">
                  <div className="group bg-white/95 backdrop-blur-sm border-2 border-red-100 rounded-3xl p-8 sm:p-10 hover:border-red-300 hover:shadow-2xl transition-all duration-300 cursor-pointer h-full transform hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-orange-50/0 group-hover:from-red-50/80 group-hover:to-orange-50/80 transition-all duration-300"></div>

                    <div className="relative z-10">
                      <div className="flex items-start mb-6 sm:mb-8">
                        <div className="w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mr-4 sm:mr-6 text-white shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0">
                          {index === 0 && (
                            <svg
                              className="w-7 sm:w-8 h-7 sm:w-8"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                              />
                            </svg>
                          )}
                          {index === 1 && (
                            <svg
                              className="w-7 sm:w-8 h-7 sm:h-8"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                              />
                            </svg>
                          )}
                          {index === 2 && (
                            <svg
                              className="w-7 sm:w-8 h-7 sm:h-8"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                              />
                            </svg>
                          )}
                          {index === 3 && (
                            <svg
                              className="w-7 sm:w-8 h-7 sm:h-8"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z"
                              />
                            </svg>
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-base text-gray-600 leading-relaxed">
                            {service.summary}
                          </p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center text-base">
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                          Key Features:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.map((feature, i) => (
                            <div
                              key={i}
                              className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors"
                            >
                              <svg
                                className="w-4 h-4 text-red-500 mr-2 flex-shrink-0 group-hover:text-red-600 transition-colors"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border border-red-100 group-hover:border-red-200 transition-colors">
                        <p className="text-base text-gray-700 leading-relaxed">
                          {service.details.split("\n\n")[0]}
                        </p>
                      </div>
                    </div>
                  </div>
                </SimpleFadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits & KPI */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
              {/* Customer Benefits Column */}
              <div className="flex flex-col">
                <SimpleFadeIn>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                    {benefitsData.title}
                  </h2>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                    {benefitsData.subtitle}
                  </p>
                </SimpleFadeIn>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefitsData.items.map((benefit, index) => (
                    <SimpleFadeIn
                      key={index}
                      delay={index * 0.05}
                      direction="left"
                    >
                      <div className="group flex items-start p-5 rounded-2xl bg-gradient-to-br from-white to-red-50/30 border-2 border-red-100 hover:border-red-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                        {/* Background gradient on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-orange-500/0 group-hover:from-red-500/5 group-hover:to-orange-500/5 transition-all duration-300" />
                        
                        <div className="relative flex items-start w-full">
                          <div className="w-11 h-11 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                            <svg
                              className="w-6 h-6 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span className="text-base text-gray-900 font-semibold group-hover:text-red-600 transition-colors leading-relaxed">
                            {benefit}
                          </span>
                        </div>
                      </div>
                    </SimpleFadeIn>
                  ))}
                </div>
              </div>

              {/* KPI Column */}
              <div className="flex flex-col">
                <SimpleFadeIn delay={0.2}>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                    {benefitsData.kpi.title}
                  </h2>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                    Measure our excellence through real performance metrics
                  </p>
                  </SimpleFadeIn>

                <div className="space-y-6 bg-gradient-to-br from-white to-gray-50 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100">
                  {benefitsData.kpi.items.map((kpi, index) => (
                    <AnimatedProgressBar
                      key={index}
                      label={kpi}
                      percentage={95 + index}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Warehouse Locations */}
        <section
          id="locations"
          className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-red-50/30 via-white to-orange-50/30"
        >
          <div className="max-w-7xl mx-auto">
            <SimpleFadeIn>
              <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                  {locationsData.title}
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed">
                  {locationsData.description}
                </p>
              </div>
            </SimpleFadeIn>

            {/* Interactive Map */}
            <SimpleFadeIn>
              <div className="mb-12 sm:mb-16">
                <GoogleMap locations={locationsData.locations} />
              </div>
            </SimpleFadeIn>

            {/* <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
              {locationsData.locations.map((location, index) => (
                <SimpleFadeIn key={location.id} delay={index * 0.1}>
                  <div className="group bg-white/95 backdrop-blur-sm border-2 border-red-100 rounded-2xl p-6 sm:p-8 text-center hover:border-red-300 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2 min-h-[160px] sm:min-h-[180px] flex flex-col items-center justify-center">
                    <div className="w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-2xl">📍</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">
                      {location.city}
                    </h3>
                    <p className="text-sm text-gray-600">{location.region}</p>
                  </div>
                </SimpleFadeIn>
              ))}
            </div> */}

            <SimpleFadeIn>
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-center shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <pattern
                        id="dots-locations"
                        width="10"
                        height="10"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle cx="5" cy="5" r="1" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect
                      width="100"
                      height="100"
                      fill="url(#dots-locations)"
                    />
                  </svg>
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">
                    Strategic Nationwide Coverage
                  </h3>
                  <p className="text-red-100 mb-8 sm:mb-10 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                    Our warehouses are strategically located across major cities
                    in Indonesia to ensure optimal distribution and logistics
                    efficiency for your business needs.
                  </p>

                  <StatsCounter stats={stats} />
                </div>
              </div>
            </SimpleFadeIn>
          </div>
        </section>

        {/* Portfolio Section */}
        <section
          id="portfolio"
          className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white"
        >
          <div className="max-w-7xl mx-auto">
            <SimpleFadeIn>
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                  Our Portfolio
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Explore our cutting-edge technology solutions designed to transform warehouse and logistics operations
                </p>
              </div>
            </SimpleFadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {portfolioData.map((project, index) => (
                <SimpleFadeIn key={project.id} delay={index * 0.1}>
                  <Link href={project.link}>
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-red-300 cursor-pointer hover:-translate-y-2">
                      {/* Project Image */}
                      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-red-50 to-orange-50">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Year Badge */}
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                          <span className="text-sm font-bold text-red-600">{project.year}</span>
                        </div>

                        {/* View Details on Hover */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white text-red-600 px-6 py-3 rounded-full font-semibold flex items-center gap-2">
                            <span>View Details</span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="p-6">
                        <div className="mb-3">
                          <span className="inline-block px-3 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded-full">
                            {project.category}
                          </span>
                        </div>
                        
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 group-hover:text-red-600 transition-colors">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full group-hover:bg-red-50 group-hover:text-red-600 transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </SimpleFadeIn>
              ))}
            </div>

            {/* View All Portfolio Button */}
            <SimpleFadeIn delay={0.3}>
              <div className="text-center mt-12">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-2xl font-semibold hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>View All Projects</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </SimpleFadeIn>
          </div>
        </section>

        {/* Legality Section
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-red-50/30 via-white to-orange-50/30">
          <div className="max-w-7xl mx-auto">
            <SimpleFadeIn>
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                  {legalityData.title}
                </h2>
              </div>
              </SimpleFadeIn>

            <SimpleFadeIn>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 sm:p-12 shadow-xl border border-red-100">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-8 text-gray-900 text-center">
                  Legal Documents & Certifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {Object.entries(legalityData.documents[0]).map(
                    ([key, value]) =>
                      key !== "name" &&
                      key !== "address" && (
                        <div
                          key={key}
                          className="flex flex-col sm:flex-row sm:justify-between sm:items-start py-4 border-b border-red-200 last:border-b-0"
                        >
                          <span className="font-semibold text-gray-900 capitalize text-base mb-2 sm:mb-0">
                            {key
                              .replace(/([A-Z])/g, " $1")
                              .replace(/^./, (str) => str.toUpperCase())}
                            :
                          </span>
                          <span className="text-gray-700 text-base text-left sm:text-right sm:ml-4 break-words">
                            {value}
                          </span>
                        </div>
                      )
                  )}
                </div>
              </div>
            </SimpleFadeIn>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <CTASection
              title="Ready to Optimize Your Logistics?"
              description="Contact us today for a consultation and discover how our comprehensive logistics solutions can streamline your supply chain operations."
              primaryButton={{
                text: "Get Started Now",
                href: "#contact",
              }}
              secondaryButton={{
                text: "View Our Services",
                href: "#services",
              }}
            />
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-white rounded-full opacity-5 blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-56 sm:w-72 h-56 sm:h-72 bg-white rounded-full opacity-5 blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-4xl lg:max-w-5xl mx-auto text-center">
            <SimpleFadeIn>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Get In Touch
              </h2>
            </SimpleFadeIn>
            <SimpleFadeIn delay={0.2}>
              <p className="text-lg sm:text-xl lg:text-2xl text-red-100 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
                Ready to optimize your logistics operations? Contact us today
                for a consultation and customized solution.
              </p>
            </SimpleFadeIn>

              <SimpleFadeIn delay={0.4}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 min-h-[120px] flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-3">
                      <svg
                        className="w-6 h-6 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <h4 className="font-bold text-lg mb-2">Email</h4>
                  <a
                    href={`mailto:${companyData.email}`}
                    className="text-red-200 hover:text-white transition-colors text-base break-all"
                  >
                    {companyData.email}
                  </a>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 min-h-[120px] flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-3">
                      <svg
                        className="w-6 h-6 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                  </div>
                  <h4 className="font-bold text-lg mb-2">Phone</h4>
                  <a
                    href={`tel:${companyData.phone.replace(/\s+/g, "")}`}
                    className="text-red-200 hover:text-white transition-colors text-base"
                  >
                    {companyData.phone}
                  </a>
                </div>
              </div>
            </SimpleFadeIn>

            <SimpleFadeIn delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <a
                  href={`tel:${companyData.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center justify-center bg-white text-red-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 text-base sm:text-lg min-h-[60px]"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call Now
                </a>
                <a
                  href={`mailto:${companyData.email}`}
                  className="inline-flex items-center justify-center bg-red-700 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-red-800 transition-all shadow-lg border-2 border-white/20 hover:border-white/40 transform hover:-translate-y-1 hover:scale-105 text-base sm:text-lg min-h-[60px]"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Send Email
                </a>
              </div>
            </SimpleFadeIn>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
