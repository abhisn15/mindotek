'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CTASectionProps {
  title: string
  subtitle?: string
  description: string
  primaryButton: {
    text: string
    href: string
  }
  secondaryButton?: {
    text: string
    href: string
  }
  variant?: 'default' | 'gradient'
}

export default function CTASection({
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton,
  variant = 'default'
}: CTASectionProps) {
  const isGradient = variant === 'gradient'

  return (
    <section className={`py-24 relative overflow-hidden ${
      isGradient 
        ? 'bg-gradient-to-r from-blue-600 to-blue-800' 
        : 'bg-white'
    }`}>
      {/* Background Pattern - Only for gradient */}
      {isGradient && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-full"></div>
          <div className="absolute top-8 right-8 w-12 h-12 bg-white rounded-full"></div>
          <div className="absolute bottom-8 left-8 w-20 h-20 bg-white rounded-full"></div>
          <div className="absolute bottom-4 right-4 w-14 h-14 bg-white rounded-full"></div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {subtitle && (
          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-6 ${
            isGradient 
              ? 'bg-white/20 text-white' 
              : 'bg-blue-100 text-blue-800'
          }`}>
            <span className={`w-2 h-2 rounded-full mr-2 animate-pulse ${
              isGradient ? 'bg-white' : 'bg-blue-500'
            }`}></span>
            {subtitle}
          </div>
        )}
        
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
          isGradient ? 'text-white' : 'text-gray-900'
        }`}>
          {title}
        </h2>
        
        <p className={`text-xl mb-8 ${
          isGradient ? 'text-blue-100' : 'text-gray-600'
        }`}>
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryButton.href}
            className={`inline-flex items-center justify-center px-8 py-4 font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
              isGradient
                ? 'bg-white text-blue-600 hover:bg-gray-100'
                : 'bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900'
            }`}
          >
            {primaryButton.text}
            <ArrowRight size={20} className="ml-2" />
          </Link>
          
          {secondaryButton && (
            <Link
              href={secondaryButton.href}
              className={`inline-flex items-center justify-center px-8 py-4 font-semibold rounded-xl transition-colors duration-300 ${
                isGradient
                  ? 'border-2 border-white text-white hover:bg-white hover:text-blue-600'
                  : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
              }`}
            >
              {secondaryButton.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

