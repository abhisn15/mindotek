import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
// Image import removed as it's no longer used
import Footer from '@/components/Footer';
import portfolioData from '@/data/portfolio-wms.json';

const PortfolioFeatures = dynamic(() => import('@/components/PortfolioFeatures'), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div></div>,
});
const PortfolioCounter = dynamic(() => import('@/components/PortfolioCounter'), {
  loading: () => <div className="h-48 animate-pulse bg-white/10 rounded-2xl"></div>,
});

export const metadata: Metadata = {
  title: 'WMS Portfolio - Warehouse Management System | Mindotek',
  description: 'Comprehensive Warehouse Management System developed by Mindotek. Real-time inventory tracking, order fulfillment, and advanced analytics for modern warehouse operations.',
  keywords: 'WMS, Warehouse Management System, Inventory Management, Logistics Software, Mindotek Portfolio',
  openGraph: {
    title: 'WMS Portfolio - Warehouse Management System | Mindotek',
    description: 'Comprehensive Warehouse Management System developed by Mindotek',
    images: ['/assets/portfolio/wms-homepage.webp'],
  },
};

export default function WMSPortfolioPage() {
  return (
    <>
      <main className="min-h-screen bg-white">

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-xl font-bold text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-8 overflow-x-auto">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors whitespace-nowrap">
              Home
            </Link>
            <span className="text-gray-600">/</span>
            <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors whitespace-nowrap">
              Portfolio
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-red-500 whitespace-nowrap">WMS</span>
          </nav>

          <div className="max-w-4xl">
            {/* Category Badge */}
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-semibold rounded-full">
                {portfolioData.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {portfolioData.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
              {portfolioData.subtitle}
            </p>

            {/* Description */}
            <p className="text-lg text-gray-400 mb-12 leading-relaxed">
              {portfolioData.description}
            </p>

            {/* Meta Info */}
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-8 py-8 border-t border-gray-700">
              <div>
                <p className="text-sm text-gray-500 mb-2">Client</p>
                <p className="text-white font-semibold text-sm sm:text-base">{portfolioData.client}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Year</p>
                <p className="text-white font-semibold">{portfolioData.year}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Services</p>
                <p className="text-white font-semibold">{portfolioData.category}</p>
              </div>
            </div>

            {/* Tags - Fixed overflow */}
            <div className="flex flex-wrap gap-2 mt-8 overflow-hidden">
              {portfolioData.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs sm:text-sm rounded-full border border-white/20 whitespace-nowrap flex-shrink-0"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

        {/* Portfolio Features Section */}
        <PortfolioFeatures content={portfolioData.content} />

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Technologies Used
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built with proven, reliable technologies using PHP Native & CodeIgniter 3 Framework
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 overflow-hidden">
            {portfolioData.technologies.map((tech, index) => (
              <div
                key={index}
                className="px-4 sm:px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex-shrink-0"
              >
                <span className="text-gray-800 font-medium text-sm sm:text-base whitespace-nowrap">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Results & Impact
            </h2>
            <p className="text-lg text-red-100 max-w-2xl mx-auto">
              Measurable improvements in warehouse operations and efficiency
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioData.results.map((result, index) => (
              <PortfolioCounter
                key={index}
                metric={result.metric}
                description={result.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {portfolioData.testimonial && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              {/* Quote Icon */}
              <svg
                className="absolute -top-4 -left-4 w-16 h-16 text-red-200"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h2V8h-2zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h2V8h-2z" />
              </svg>

              <blockquote className="relative z-10 pl-8">
                <p className="text-2xl sm:text-3xl text-gray-900 font-medium mb-8 leading-relaxed">
                  &ldquo;{portfolioData.testimonial.quote}&rdquo;
                </p>
                <footer>
                  <p className="text-lg font-semibold text-gray-900">
                    {portfolioData.testimonial.author}
                  </p>
                  <p className="text-gray-600">{portfolioData.testimonial.company}</p>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Warehouse Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s discuss how our WMS solution can optimize your logistics and warehouse management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/portfolio"
              className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              View More Projects
            </Link>
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </>
  );
}
