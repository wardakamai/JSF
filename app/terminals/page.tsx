import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';
import TerminalClocks from '@/components/shared/TerminalClocks';
import CTABand from '@/components/shared/CTABand';
import { terminals } from '@/lib/site';
import { cityHref } from '@/lib/cities';

export const metadata: Metadata = {
  title: 'Oil Storage Terminals — Rotterdam, Houston, Fujairah, Jurong',
  description:
    'JSF Logistics operates bulk liquid storage terminals in Rotterdam (Netherlands), Houston (Texas), Jurong (Singapore), and Fujairah (UAE) — covering every major global energy trading region.',
  keywords: ['oil tank lease', 'tank farm Rotterdam', 'tank farm Houston', 'Rotterdam oil terminal', 'Houston energy terminal', 'Jurong bulk storage', 'Fujairah tank terminal', 'global petroleum terminals', 'bulk liquid storage', 'tank farm'],
  alternates: {
    canonical: 'https://jsf-logistics.com/terminals',
  },
  openGraph: {
    type: 'website',
    siteName: 'JSF Logistics B.V.',
    locale: 'en_US',
    title: 'Oil Storage Terminals — Rotterdam, Houston, Fujairah, Jurong | JSF Logistics',
    description:
      'Strategic deep-water oil storage terminals in Rotterdam, Houston, Jurong, and Fujairah. Crude oil, fuel oil, chemicals, and gas products storage across four continents.',
    url: 'https://jsf-logistics.com/terminals',
    images: [
      {
        url: '/images/og-jsf-logistics.jpg',
        width: 1200,
        height: 630,
        alt: 'JSF Logistics Global Oil Storage Terminals — Rotterdam, Houston, Fujairah, Jurong',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oil Storage Terminals — Rotterdam, Houston, Fujairah, Jurong',
    description:
      'Strategic oil storage and tank farm terminals across four global ports. Crude oil, fuel oil, chemicals, and gas products storage.',
    images: ['/images/og-jsf-logistics.jpg'],
  },
};

const localBusinessJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'JSF Logistics Rotterdam Terminal',
    description: 'Oil storage and tank farm terminal at Port of Rotterdam, Netherlands. Crude oil, fuel oil, chemicals, and refined product storage.',
    url: 'https://jsf-logistics.com/oil-storage/rotterdam',
    image: 'https://jsf-logistics.com/images/terminal-rotterdam.jpg',
    telephone: '+32-678-954-564',
    email: 'info@jsf-logistics.com',
    address: { '@type': 'PostalAddress', addressLocality: 'Rotterdam', addressCountry: 'NL' },
    geo: { '@type': 'GeoCoordinates', latitude: 51.9225, longitude: 4.4792 },
    parentOrganization: { '@type': 'Organization', name: 'JSF Logistics B.V.', url: 'https://jsf-logistics.com' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'JSF Logistics Houston Terminal',
    description: 'Oil storage and tank farm terminal at Port of Houston, Texas. Crude oil, LPG, refined products, and chemicals storage.',
    url: 'https://jsf-logistics.com/oil-storage/houston',
    image: 'https://jsf-logistics.com/images/terminal-houston.jpg',
    telephone: '+32-678-954-564',
    email: 'info@jsf-logistics.com',
    address: { '@type': 'PostalAddress', addressLocality: 'Houston', addressRegion: 'TX', addressCountry: 'US' },
    geo: { '@type': 'GeoCoordinates', latitude: 29.7489, longitude: -95.2353 },
    parentOrganization: { '@type': 'Organization', name: 'JSF Logistics B.V.', url: 'https://jsf-logistics.com' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'JSF Logistics Jurong Terminal',
    description: 'Bulk liquid storage and tank farm terminal at Port of Jurong, Singapore. Fuel oil, crude oil, naphtha, and chemicals storage.',
    url: 'https://jsf-logistics.com/oil-storage/jurong',
    image: 'https://jsf-logistics.com/images/terminal-jurong.jpg',
    telephone: '+32-678-954-564',
    email: 'info@jsf-logistics.com',
    address: { '@type': 'PostalAddress', addressLocality: 'Jurong', addressCountry: 'SG' },
    geo: { '@type': 'GeoCoordinates', latitude: 1.2966, longitude: 103.7764 },
    parentOrganization: { '@type': 'Organization', name: 'JSF Logistics B.V.', url: 'https://jsf-logistics.com' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'JSF Logistics Fujairah Terminal',
    description: 'Oil storage and bunkering terminal at Port of Fujairah, UAE. Bunker fuel, crude oil, gasoil, and LNG storage.',
    url: 'https://jsf-logistics.com/oil-storage/fujairah',
    image: 'https://jsf-logistics.com/images/terminal-fujairah.webp',
    telephone: '+32-678-954-564',
    email: 'info@jsf-logistics.com',
    address: { '@type': 'PostalAddress', addressLocality: 'Fujairah', addressCountry: 'AE' },
    geo: { '@type': 'GeoCoordinates', latitude: 25.1288, longitude: 56.3265 },
    parentOrganization: { '@type': 'Organization', name: 'JSF Logistics B.V.', url: 'https://jsf-logistics.com' },
  },
];

export default function TerminalsPage() {
  return (
    <>
      {localBusinessJsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <PageHero
        crumb="Oil Storage Terminals"
        title="Oil storage terminals in Rotterdam, Houston, Jurong and Fujairah"
        subtitle="Strategically positioned terminals give JSF Logistics reach across every major energy trading region: Europe, the US Gulf Coast, Asia-Pacific and the Middle East."
        image="/images/rotterdam-panorama.jpg"
        imageAlt="Panorama of the Port of Rotterdam, home of the JSF Logistics Rotterdam oil storage terminal"
      />

      <TerminalClocks />

      <div className="wrap">
        {terminals.map(t => (
          <section key={t.anchor} id={t.anchor} className="terminal-block split" aria-labelledby={`${t.anchor}-title`}>
            <div className="col-6 terminal-block-media">
              <div className="media media--wide">
                <Image src={t.image} alt={t.imageAlt} fill sizes="(max-width: 860px) 100vw, 50vw" />
              </div>
            </div>
            <div className="col-6">
              <h2 id={`${t.anchor}-title`}>{t.port}</h2>
              <p className="where">{t.region}. {t.tagline}.</p>
              <p className="muted">{t.description}</p>

              <dl className="spec-row">
                <div><dt>Throughput</dt><dd>{t.throughput}</dd></div>
                <div><dt>Capacity</dt><dd>Flexible multi-product</dd></div>
                <div><dt>Tanks</dt><dd>{t.tankCount}</dd></div>
              </dl>

              <ul className="ticks" style={{ marginBottom: '1.5rem' }}>
                {t.highlights.map(h => <li key={h}>{h}</li>)}
              </ul>

              <h3 className="small" style={{ marginBottom: '0.6rem', fontStretch: '100%' }}>Products handled</h3>
              <ul className="inline-list" style={{ marginBottom: '1.5rem' }}>
                {t.products.map(p => <li key={p}>{p}</li>)}
              </ul>

              <div className="btn-row" style={{ gap: '0.75rem 1.5rem' }}>
                <Link href={cityHref(t.anchor)} className="btn btn--primary">Lease oil storage in {t.city}</Link>
                <Link href="/services" className="link" style={{ alignSelf: 'center' }}>All services in {t.city}</Link>
              </div>
            </div>
          </section>
        ))}
      </div>

      <CTABand title={'Need tank space at one of these ports?'} />
    </>
  );
}
