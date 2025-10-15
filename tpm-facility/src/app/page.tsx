'use client'

import HeroCarousel from '@/components/HeroCarousel'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import StatsSection from '@/components/StatsSection'
import CTASection from '@/components/CTASection'

export default function Home() {

  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* About Section */}
      <AboutSection />

      {/* About CTA */}
      <CTASection
        subtitle="Learn More About Us"
        title="Partner with Industry Leaders"
        description="Join over 60 companies who trust TPM Group for their facility management needs. Experience the difference of working with ISO-certified professionals."
        primaryButton={{
          text: 'Our Company Profile',
          href: '/about'
        }}
        secondaryButton={{
          text: 'View Our Clients',
          href: '/client'
        }}
      />

      {/* Services Section */}
      <ServicesSection />

      {/* Career CTA */}
      <CTASection
        subtitle="Join Our Team"
        title="Build Your Career With Us"
        description="Looking for talented professionals to join our growing team. Discover opportunities for career growth and professional development across Indonesia."
        primaryButton={{
          text: 'View Open Positions',
          href: '/career'
        }}
        secondaryButton={{
          text: 'Submit Your CV',
          href: '/contact'
        }}
        variant="gradient"
      />

      {/* Stats Section */}
      <StatsSection />

      {/* Final Contact CTA */}
      <CTASection
        subtitle="Get In Touch"
        title="Ready to Optimize Your Facilities?"
        description="Contact us today for a free consultation and discover how we can help you achieve operational excellence with our comprehensive facility management solutions."
        primaryButton={{
          text: 'Contact Us Now',
          href: '/contact'
        }}
        secondaryButton={{
          text: 'Request a Quote',
          href: '/contact'
        }}
      />
    </div>
  )
}
