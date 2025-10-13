'use client';

import Link from 'next/link';
import PortfolioCard from '@/components/PortfolioCard';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
  link: string;
}

interface PortfolioGridProps {
  projects: PortfolioItem[];
}

export default function PortfolioGrid({ projects }: PortfolioGridProps) {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our successful projects and innovative solutions that drive business transformation
          </p>
        </div>


        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <PortfolioCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Have a Project in Mind?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
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
              className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-red-500 hover:text-red-500 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

