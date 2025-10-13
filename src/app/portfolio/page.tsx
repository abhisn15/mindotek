'use client';

import dynamic from 'next/dynamic';
import Footer from '@/components/Footer';
import LazyProjectGrid from '@/components/LazyProjectGrid';
import FilterModal from '@/components/FilterModal';
import portfolioList from '@/data/portfolio-list.json';
import Link from 'next/link';
// Image import removed as it's no longer used
import { useState, useMemo } from 'react';

const PortfolioStatsCounter = dynamic(() => import('@/components/PortfolioStatsCounter'), {
  loading: () => <div className="text-4xl sm:text-5xl font-bold mb-2 animate-pulse text-gray-400">0</div>,
});

export default function PortfolioPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All Projects');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const filters = ['All Projects', 'Software Development', 'Logistics Solutions', 'WMS'];

  const filteredProjects = useMemo(() => {
    let filtered = portfolioList;

    // Filter by category
    if (activeFilter !== 'All Projects') {
      filtered = filtered.filter(project => 
        project.category.toLowerCase().includes(activeFilter.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(activeFilter.toLowerCase()))
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    return filtered;
  }, [searchTerm, activeFilter]);
  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-xl font-bold text-white pb-20 pt-4 lg:pt-8 md:pt-8">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-8">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-red-400">Portfolio</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Portfolio</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
              Discover our successful projects and innovative solutions that drive business transformation
            </p>
          </div>

          {/* Stats with Counter Animation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <PortfolioStatsCounter metric="5+" description="Years Experience" index={0} />
            {/* <PortfolioStatsCounter metric="1" description="Project Completed" index={1} /> */}
            <PortfolioStatsCounter metric="7+" description="Warehouse Locations" index={2} />
            <PortfolioStatsCounter metric="99%" description="System Uptime" index={3} />
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 border-b border-gray-200 sticky top-0 bg-white z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar with Filter Button */}
          <div className="mb-6">
            <div className="flex gap-3 items-center">
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 pr-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              
              {/* Filter Button */}
              <button
                onClick={() => setIsFilterModalOpen(true)}
                className="px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-300 group"
              >
                <svg className="w-5 h-5 text-gray-600 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            {/* Active Filter Display */}
            <div className="flex items-center gap-2">
              <span className="text-gray-600 text-sm">Filter:</span>
              <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-sm font-medium">
                {activeFilter}
              </span>
            </div>
            
            {/* Results Counter */}
            <p className="text-gray-600 text-sm lg:text-base">
              <span className="font-semibold text-gray-900">{filteredProjects.length}</span> {filteredProjects.length === 1 ? 'Project' : 'Projects'} Found
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid with Lazy Loading */}
      <LazyProjectGrid projects={filteredProjects} searchTerm={searchTerm} />

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

      {/* Filter Modal */}
      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        filters={filters}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <Footer />
    </>
  );
}

