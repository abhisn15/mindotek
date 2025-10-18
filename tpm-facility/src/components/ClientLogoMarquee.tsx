'use client'

import { useMemo } from 'react'
import Image from 'next/image'

interface Client {
  name: string
  logo: string
  isLarge?: boolean
}

interface ClientLogoMarqueeProps {
  clients: Client[]
  showAllLogos?: boolean
}

export default function ClientLogoMarquee({ clients, showAllLogos = false }: ClientLogoMarqueeProps) {
  // Split clients into 4 different groups for variety
  const row1Clients = clients.slice(0, Math.ceil(clients.length / 4))
  const row2Clients = clients.slice(Math.ceil(clients.length / 4), Math.ceil(clients.length / 2))
  const row3Clients = clients.slice(Math.ceil(clients.length / 2), Math.ceil(clients.length * 3 / 4))
  const row4Clients = clients.slice(Math.ceil(clients.length * 3 / 4))

  // Create different logo sets for each row using useMemo
  const logoSets = useMemo(() => {
    if (!showAllLogos) return { row1: row1Clients, row2: row2Clients, row3: row3Clients, row4: row4Clients }
    
    // Split all logos into 4 different groups with different logos
    const totalLogos = clients.length
    const logosPerRow = Math.ceil(totalLogos / 4)
    
    // Create 4 completely different sets of logos
    const row1Logos = clients.slice(0, logosPerRow)
    const row2Logos = clients.slice(logosPerRow, logosPerRow * 2)
    const row3Logos = clients.slice(logosPerRow * 2, logosPerRow * 3)
    const row4Logos = clients.slice(logosPerRow * 3)
    
    return {
      row1: row1Logos,
      row2: row2Logos,
      row3: row3Logos,
      row4: row4Logos
    }
  }, [clients, showAllLogos, row1Clients, row2Clients, row3Clients, row4Clients])
  return (
    <div className="relative w-full overflow-hidden">
      {/* Overall Mist Effect - Left & Right Only */}
      <div className="absolute left-0 top-0 bottom-0 w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-white/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/40 via-blue-50/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100/30 via-transparent to-transparent"></div>
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-l from-white/50 via-white/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-blue-50/40 via-blue-50/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-gray-100/30 via-transparent to-transparent"></div>
      </div>

      {/* 4 Marquee Rows */}
      <div className="space-y-8 md:space-y-10 lg:space-y-12">
        {/* First Row - Left to Right */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee-left" style={{ willChange: 'transform' }}>
            {[...logoSets.row1, ...logoSets.row1, ...logoSets.row1].map((client, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12"
              >
                <div className="group relative">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={client.isLarge ? 200 : 140}
                    height={client.isLarge ? 100 : 70}
                    className={`${
                      client.isLarge
                        ? 'w-56 h-28'
                        : 'w-44 h-22'
                    } object-contain hover:scale-105 transition-transform duration-300`}
                    loading="lazy"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Right to Left */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee-right" style={{ willChange: 'transform' }}>
            {[...logoSets.row2, ...logoSets.row2, ...logoSets.row2].map((client, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12"
              >
                <div className="group relative">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={client.isLarge ? 200 : 140}
                    height={client.isLarge ? 100 : 70}
                    className={`${
                      client.isLarge
                        ? 'w-40 sm:w-44 md:w-48 lg:w-52 xl:w-56 h-20 sm:h-22 md:h-24 lg:h-26 xl:h-28'
                        : 'w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44 h-14 sm:h-16 md:h-18 lg:h-20 xl:h-22'
                    } object-contain hover:scale-105 transition-transform duration-300`}
                    loading="lazy"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Third Row - Left to Right (Faster) */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee-left-fast" style={{ willChange: 'transform' }}>
            {[...logoSets.row3, ...logoSets.row3, ...logoSets.row3].map((client, index) => (
              <div
                key={`row3-${index}`}
                className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12"
              >
                <div className="group relative">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={client.isLarge ? 200 : 140}
                    height={client.isLarge ? 100 : 70}
                    className={`${
                      client.isLarge
                        ? 'w-40 sm:w-44 md:w-48 lg:w-52 xl:w-56 h-20 sm:h-22 md:h-24 lg:h-26 xl:h-28'
                        : 'w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44 h-14 sm:h-16 md:h-18 lg:h-20 xl:h-22'
                    } object-contain hover:scale-105 transition-transform duration-300`}
                    loading="lazy"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fourth Row - Right to Left (Faster) */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee-right-fast" style={{ willChange: 'transform' }}>
            {[...logoSets.row4, ...logoSets.row4, ...logoSets.row4].map((client, index) => (
              <div
                key={`row4-${index}`}
                className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12"
              >
                <div className="group relative">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={client.isLarge ? 200 : 140}
                    height={client.isLarge ? 100 : 70}
                    className={`${
                      client.isLarge
                        ? 'w-40 sm:w-44 md:w-48 lg:w-52 xl:w-56 h-20 sm:h-22 md:h-24 lg:h-26 xl:h-28'
                        : 'w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44 h-14 sm:h-16 md:h-18 lg:h-20 xl:h-22'
                    } object-contain hover:scale-105 transition-transform duration-300`}
                    loading="lazy"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

