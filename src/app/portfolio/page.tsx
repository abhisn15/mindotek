import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import MobileMenu from '@/components/MobileMenu';
import Footer from '@/components/Footer';
import PortfolioGrid from '@/components/PortfolioGrid';
import portfolioList from '@/data/portfolio-list.json';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Portfolio - Our Projects | Mindotek',
  description: 'Explore our portfolio of successful projects including Warehouse Management Systems, logistics solutions, and custom software development.',
  keywords: 'portfolio, projects, WMS, logistics software, warehouse management, Mindotek',
};

export default function PortfolioPage() {
  return (
    <>
      <Navigation />
      <MobileMenu />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 pt-32 md:pt-24">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-8">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-white">Portfolio</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Portfolio</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
              Discover our successful projects and innovative solutions that drive business transformation
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-4xl sm:text-5xl font-bold mb-2">5+</p>
              <p className="text-gray-400">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl sm:text-5xl font-bold mb-2">50+</p>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl sm:text-5xl font-bold mb-2">100+</p>
              <p className="text-gray-400">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-4xl sm:text-5xl font-bold mb-2">99%</p>
              <p className="text-gray-400">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-b border-gray-200 sticky top-20 bg-white z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300">
                All Projects
              </button>
              <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300">
                Software Development
              </button>
              <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300">
                Logistics Solutions
              </button>
              <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300">
                WMS
              </button>
            </div>
            <p className="text-gray-600">
              <span className="font-semibold text-gray-900">{portfolioList.length}</span> {portfolioList.length === 1 ? 'Project' : 'Projects'} Found
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <PortfolioGrid projects={portfolioList} />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Have a Project in Mind?
          </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s collaborate and bring your vision to life with our expertise and innovative solutions.
            </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Start a Project
            </a>
            <Link
              href="/"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </>
  );
}

