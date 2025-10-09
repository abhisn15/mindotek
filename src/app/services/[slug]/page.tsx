import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { ScaleIn } from '@/components/animations/ScaleIn';
import servicesData from '@/data/services.json';

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found – Mindotek',
    };
  }

  return {
    title: `${service.title} – Mindotek`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal direction="left">
          <Link 
            href="/services" 
            className="inline-flex items-center mb-8 text-blue-600 hover:text-blue-700 font-semibold group"
          >
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Services
          </Link>
        </ScrollReveal>

        <ScaleIn>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {service.title}
          </h1>
        </ScaleIn>
        
        <ScrollReveal delay={0.2}>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl mb-12 border-2 border-blue-100 shadow-lg">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3 text-gray-900">Overview</h2>
                <p className="text-gray-700 text-lg leading-relaxed">{service.summary}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <span className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3 text-white font-bold">
                ✓
              </span>
              Service Details
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
              {service.details}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 md:p-10 rounded-2xl shadow-2xl text-white">
            <h3 className="text-3xl font-bold mb-4">Need This Service?</h3>
            <p className="text-blue-100 mb-6 text-lg">
              Contact us to discuss how we can support your logistics needs and create a customized solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/#contact" 
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg text-center"
              >
                Get in Touch
              </Link>
              <Link 
                href="/services" 
                className="inline-block bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition-all border-2 border-white/20 text-center"
              >
                View All Services
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}

