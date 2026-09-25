import Link from 'next/link';
import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import CTABand from '@/components/shared/CTABand';
import { services, terminals } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Oil Storage & Logistics Services — Tank Farm Operations',
  description:
    'JSF Logistics offers crude oil storage, marine shipping, product blending, laboratory testing, road transportation, and pipeline facilitation from four global tank farm terminals.',
  keywords: ['oil storage services', 'crude oil tank farm', 'marine shipping', 'product blending', 'petroleum laboratory testing', 'pipeline facilitation', 'liquid bulk terminal'],
  alternates: {
    canonical: 'https://jsf-logistics.com/services',
  },
  openGraph: {
    type: 'website',
    siteName: 'JSF Logistics B.V.',
    locale: 'en_US',
    title: 'Oil Storage & Logistics Services — JSF Logistics B.V.',
    description:
      'From large-capacity tank storage to VLCC vessel handling — full-spectrum oil and gas logistics services from JSF Logistics terminals in Rotterdam, Houston, Fujairah, and Jurong.',
    url: 'https://jsf-logistics.com/services',
    images: [
      {
        url: '/images/og-jsf-logistics.jpg',
        width: 1200,
        height: 630,
        alt: 'JSF Logistics Oil Storage & Logistics Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oil Storage & Logistics Services — JSF Logistics B.V.',
    description:
      'Crude oil storage, marine shipping, product blending, pipeline facilitation and lab testing from four global terminal locations.',
    images: ['/images/og-jsf-logistics.jpg'],
  },
};

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Oil storage and logistics services',
  itemListElement: services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Service',
      name: s.title,
      description: s.desc,
      url: `https://jsf-logistics.com/services#${s.anchor}`,
      serviceType: s.title,
      areaServed: ['Rotterdam', 'Houston', 'Jurong', 'Fujairah'],
      provider: { '@type': 'Organization', name: 'JSF Logistics B.V.', url: 'https://jsf-logistics.com' },
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <PageHero
        crumb="Oil Storage & Logistics Services"
        title="Oil storage and logistics services"
        subtitle="From tank storage to marine operations, we provide the full spectrum of oil and gas logistics services your business depends on."
        image="/images/hero-tanker.webp"
        imageAlt="Crude oil tanker at sea, loaded for discharge at a JSF Logistics terminal"
      />

      <div className="wrap">
        <nav className="jump" aria-label="Services on this page">
          {services.map(s => <a key={s.anchor} href={`#${s.anchor}`}>{s.title}</a>)}
        </nav>

        {services.map(s => (
          <section key={s.anchor} id={s.anchor} className="service-block split">
            <div className="col-7">
              <h2>{s.title}</h2>
              <p className="muted prose" style={{ marginBottom: '1.5rem' }}>{s.desc}</p>
              <Link href="/contact" className="link">Enquire about {s.title.toLowerCase()}</Link>
            </div>
            <div className="col-5">
              <div className="panel">
                <h3>Key capabilities</h3>
                <ul className="ticks">
                  {s.points.map(pt => <li key={pt}>{pt}</li>)}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="section section--surface" aria-labelledby="available-title">
        <div className="wrap">
          <h2 id="available-title" style={{ marginBottom: '1.25rem' }}>Available at our terminals</h2>
          <ul className="btn-row" style={{ listStyle: 'none' }}>
            {terminals.map(t => (
              <li key={t.anchor}>
                <Link href={`/terminals#${t.anchor}`} className="btn btn--ghost">Oil storage in {t.city}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABand />
    </>
  );
}
