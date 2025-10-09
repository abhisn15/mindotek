import Link from 'next/link';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import servicesData from '@/data/services.json';

export const metadata = {
  title: 'Our Services – Mindotek',
  description: 'Comprehensive logistics services including warehousing, transport, and integrated solutions.',
};

export default function ServicesPage() {
  const icons = [
    // Warehousing
    <svg key="warehouse" className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>,
    // Transport
    <svg key="transport" className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
    </svg>,
    // Management
    <svg key="management" className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>,
    // Integrated
    <svg key="integrated" className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
    </svg>
  ];

  return (
    <main className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Our Services
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-lg leading-relaxed">
            We provide end-to-end logistics solutions tailored to your business needs across Indonesia.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <StaggerItem key={service.id}>
              <Link href={`/services/${service.slug}`}>
                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-2xl transition-all cursor-pointer h-full transform hover:-translate-y-2">
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4 text-white shadow-lg group-hover:scale-110 transition-transform">
                      {icons[index]}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {service.summary}
                  </p>
                  <span className="inline-flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                    Learn more 
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.6}>
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Logistics?</h2>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Let us help you streamline your supply chain with our comprehensive logistics solutions.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started Today
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}

