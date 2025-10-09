import Link from 'next/link';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { FadeIn } from '@/components/animations/FadeIn';
import { GoogleMap } from '@/components/GoogleMap';
import locationsData from '@/data/locations.json';

export const metadata = {
  title: 'Warehouse Locations – Mindotek',
  description: 'Our warehouse facilities are strategically located across major cities in Indonesia.',
};

export default function WarehouseLocationsPage() {
  return (
    <main className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {locationsData.title}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {locationsData.description}
            </p>
          </ScrollReveal>
        </div>

        {/* Statistics Section */}
        <ScrollReveal delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white text-center shadow-xl">
              <div className="text-4xl font-bold mb-2">{locationsData.locations.length}</div>
              <div className="text-blue-100">Locations</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl p-6 text-white text-center shadow-xl">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-indigo-100">Operations</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white text-center shadow-xl">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-purple-100">Monitored</div>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-6 text-white text-center shadow-xl">
              <div className="text-4xl font-bold mb-2">ISO</div>
              <div className="text-pink-100">Certified</div>
            </div>
          </div>
        </ScrollReveal>

        {/* Google Map Integration */}
        <FadeIn delay={0.4}>
          <div className="mb-16">
            <GoogleMap locations={locationsData.locations} />
          </div>
        </FadeIn>

        {/* Features Section */}
        <ScrollReveal delay={0.5}>
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
              Why Choose Our Warehouses?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Security First</h3>
                <p className="text-gray-600">24/7 CCTV monitoring, fire safety systems, and professional security personnel</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Modern Equipment</h3>
                <p className="text-gray-600">Forklifts, hand pallets, racking systems, and warehouse management tools</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Skilled Team</h3>
                <p className="text-gray-600">Trained warehouse staff and logistics experts at every location</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal delay={0.6}>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Location?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We can establish warehouse facilities at locations tailored to your project requirements throughout Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contact Us Now
              </Link>
              <Link
                href="/services"
                className="inline-block bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition-all border-2 border-white/20"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}

