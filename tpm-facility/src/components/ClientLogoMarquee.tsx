'use client'

import OptimizedImage from './OptimizedImage'

interface Client {
  name: string
  logo: string
  isLarge?: boolean
}

interface ClientLogoMarqueeProps {
  clients: Client[]
}

export default function ClientLogoMarquee({ clients }: ClientLogoMarqueeProps) {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Multiple Marquee Rows */}
      <div className="space-y-8">
        {/* First Row - Left to Right */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee-left">
            {/* Duplicate 3 times for seamless loop */}
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8"
              >
                <div className="group relative">
                  <OptimizedImage
                    src={client.logo}
                    alt={client.name}
                    width={client.isLarge ? 180 : 120}
                    height={client.isLarge ? 90 : 60}
                    className={`${
                      client.isLarge
                        ? 'w-36 sm:w-40 md:w-44 lg:w-45 h-18 sm:h-20 md:h-22 lg:h-22.5'
                        : 'w-24 sm:w-28 md:w-30 lg:w-32 h-12 sm:h-14 md:h-15 lg:h-16'
                    } object-contain hover:scale-105 transition-transform duration-300 gpu-accelerated`}
                    quality={85}
                    placeholderColor="#f8fafc"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Organic Textured Blur Layers - Left */}
          <div className="absolute left-0 top-0 bottom-0 w-48 sm:w-56 md:w-24 z-10 pointer-events-none">
            <div className="absolute inset-0 lg:bg-gradient-to-r lg:from-blue-50/90 lg:to-transparent lg:backdrop-blur" 
                  style={{
                    clipPath: 'polygon(0% 0%, 85% 10%, 90% 25%, 80% 40%, 85% 55%, 75% 70%, 80% 85%, 70% 100%, 0% 100%)'
                  }}></div>
            <div className="absolute inset-0 lg:bg-gradient-to-r lg:from-blue-50/60 lg:to-transparent lg:backdrop-blur-sm"
                  style={{
                    clipPath: 'polygon(0% 0%, 75% 15%, 85% 30%, 70% 45%, 80% 60%, 65% 75%, 75% 90%, 60% 100%, 0% 100%)'
                  }}></div>
            <div className="absolute inset-0 lg:bg-gradient-to-r lg:from-white/30 lg:to-transparent lg:backdrop-blur-sm"
                  style={{
                    clipPath: 'polygon(0% 0%, 70% 20%, 80% 35%, 65% 50%, 75% 65%, 60% 80%, 70% 95%, 50% 100%, 0% 100%)'
                  }}></div>
          </div>

          {/* Organic Textured Blur Layers - Right */}
          <div className="absolute right-0 top-0 bottom-0 w-48 sm:w-14 md:w-24 z-10 pointer-events-none">
            <div className="absolute inset-0 lg:bg-gradient-to-l lg:from-blue-50/90 lg:to-transparent lg:backdrop-blur-sm"
                  style={{
                    clipPath: 'polygon(100% 0%, 15% 10%, 10% 25%, 20% 40%, 15% 55%, 25% 70%, 20% 85%, 30% 100%, 100% 100%)'
                  }}></div>
            <div className="absolute inset-0 lg:bg-gradient-to-l lg:from-blue-50/60 lg:to-transparent lg:backdrop-blur-sm"
                  style={{
                    clipPath: 'polygon(100% 0%, 25% 15%, 15% 30%, 30% 45%, 20% 60%, 35% 75%, 25% 90%, 40% 100%, 100% 100%)'
                  }}></div>
            <div className="absolute inset-0 lg:bg-gradient-to-l lg:from-white/30 lg:to-transparent lg:backdrop-blur-sm"
                  style={{
                    clipPath: 'polygon(100% 0%, 30% 20%, 20% 35%, 35% 50%, 25% 65%, 40% 80%, 30% 95%, 50% 100%, 100% 100%)'
                  }}></div>
          </div>
        </div>

        {/* Second Row - Right to Left */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee-right">
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8"
              >
                <div className="group relative">
                  <OptimizedImage
                    src={client.logo}
                    alt={client.name}
                    width={client.isLarge ? 180 : 120}
                    height={client.isLarge ? 90 : 60}
                    className={`${
                      client.isLarge
                        ? 'w-36 sm:w-40 md:w-44 lg:w-45 h-18 sm:h-20 md:h-22 lg:h-22.5'
                        : 'w-24 sm:w-28 md:w-30 lg:w-32 h-12 sm:h-14 md:h-15 lg:h-16'
                    } object-contain hover:scale-105 transition-transform duration-300 gpu-accelerated`}
                    quality={85}
                    placeholderColor="#f8fafc"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Blur Layers for Second Row */}
          <div className="absolute left-0 top-0 bottom-0 w-48 sm:w-56 md:w-24 z-10 pointer-events-none">
            <div className="absolute inset-0 lg:bg-gradient-to-r lg:from-blue-50/90 lg:to-transparent lg:backdrop-blur" 
                  style={{
                    clipPath: 'polygon(0% 0%, 85% 10%, 90% 25%, 80% 40%, 85% 55%, 75% 70%, 80% 85%, 70% 100%, 0% 100%)'
                  }}></div>
            <div className="absolute inset-0 lg:bg-gradient-to-r lg:from-blue-50/60 lg:to-transparent lg:backdrop-blur-sm"
                  style={{
                    clipPath: 'polygon(0% 0%, 75% 15%, 85% 30%, 70% 45%, 80% 60%, 65% 75%, 75% 90%, 60% 100%, 0% 100%)'
                  }}></div>
            <div className="absolute inset-0 lg:bg-gradient-to-r lg:from-white/30 lg:to-transparent lg:backdrop-blur-sm"
                  style={{
                    clipPath: 'polygon(0% 0%, 70% 20%, 80% 35%, 65% 50%, 75% 65%, 60% 80%, 70% 95%, 50% 100%, 0% 100%)'
                  }}></div>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-48 sm:w-14 md:w-24 z-10 pointer-events-none">
            <div className="absolute inset-0 lg:bg-gradient-to-l lg:from-blue-50/90 lg:to-transparent lg:backdrop-blur-sm"
                  style={{
                    clipPath: 'polygon(100% 0%, 15% 10%, 10% 25%, 20% 40%, 15% 55%, 25% 70%, 20% 85%, 30% 100%, 100% 100%)'
                  }}></div>
            <div className="absolute inset-0 lg:bg-gradient-to-l lg:from-blue-50/60 lg:to-transparent lg:backdrop-blur-sm"
                  style={{
                    clipPath: 'polygon(100% 0%, 25% 15%, 15% 30%, 30% 45%, 20% 60%, 35% 75%, 25% 90%, 40% 100%, 100% 100%)'
                  }}></div>
            <div className="absolute inset-0 lg:bg-gradient-to-l lg:from-white/30 lg:to-transparent lg:backdrop-blur-sm"
                  style={{
                    clipPath: 'polygon(100% 0%, 30% 20%, 20% 35%, 35% 50%, 25% 65%, 40% 80%, 30% 95%, 50% 100%, 100% 100%)'
                  }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

