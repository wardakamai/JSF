import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';
import SectionReveal from '@/components/shared/SectionReveal';
import Breadcrumb from '@/components/shared/Breadcrumb';
import CTABanner from '@/components/home/CTABanner';

export const metadata: Metadata = {
  title: 'Oil Storage Terminals — Rotterdam, Houston, Fujairah, Jurong',
  description:
    'JSF Logistics operates bulk liquid storage terminals in Rotterdam (Netherlands), Houston (Texas), Jurong (Singapore), and Fujairah (UAE) — covering every major global energy trading region.',
  keywords: ['Rotterdam oil terminal', 'Houston energy terminal', 'Jurong bulk storage', 'Fujairah tank terminal', 'global petroleum terminals', 'bulk liquid storage', 'tank farm'],
  alternates: {
    canonical: 'https://jsf-logistics.com/terminals',
  },
  openGraph: {
    title: 'Oil Storage Terminals — Rotterdam, Houston, Fujairah, Jurong | JSF Logistics',
    description:
      'Strategic deep-water oil storage terminals in Rotterdam, Houston, Jurong, and Fujairah. Crude oil, fuel oil, chemicals, and gas products storage across four continents.',
    url: 'https://jsf-logistics.com/terminals',
    images: [
      {
        url: '/images/hero-tanker.webp',
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
    images: ['/images/hero-tanker.webp'],
  },
};

const localBusinessJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'JSF Logistics Rotterdam Terminal',
    description: 'Oil storage and tank farm terminal at Port of Rotterdam, Netherlands. Crude oil, fuel oil, chemicals, and refined product storage.',
    url: 'https://jsf-logistics.com/terminals',
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
    url: 'https://jsf-logistics.com/terminals',
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
    url: 'https://jsf-logistics.com/terminals',
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
    url: 'https://jsf-logistics.com/terminals',
    telephone: '+32-678-954-564',
    email: 'info@jsf-logistics.com',
    address: { '@type': 'PostalAddress', addressLocality: 'Fujairah', addressCountry: 'AE' },
    geo: { '@type': 'GeoCoordinates', latitude: 25.1288, longitude: 56.3265 },
    parentOrganization: { '@type': 'Organization', name: 'JSF Logistics B.V.', url: 'https://jsf-logistics.com' },
  },
];

const terminals = [
  {
    flag: '🇳🇱', city: 'Port of Rotterdam', country: 'Netherlands, Europe',
    tagline: "Europe's largest energy hub",
    image: '/images/terminal-rotterdam.jpg',
    imageAlt: 'JSF Logistics oil storage tank farm at Port of Rotterdam, Netherlands — Europe largest energy hub',
    anchor: 'rotterdam',
    coords: { top: '30%', left: '47%' },
    throughput: '400M+ MT/year', capacity: 'Flexible multi-product', tankCount: '40+',
    products: ['Crude Oil', 'Fuel Oil', 'Gasoil', 'Jet Fuel', 'Chemicals', 'Naphtha', 'Bitumen', 'LNG'],
    description: 'Our Rotterdam terminal provides access to the largest petrochemical complex in Europe and connects directly to the Rhine waterway inland distribution network. As a cornerstone of European energy supply, Rotterdam offers unmatched pipeline, vessel, rail, and truck connectivity.',
    highlights: ['Pipeline connection to Rhine network', 'VLCC-capable berths', '24/7 operations', 'ISO 9001 certified'],
  },
  {
    flag: '🇺🇸', city: 'Port of Houston', country: 'Texas, USA',
    tagline: "America's energy trading centre",
    image: '/images/terminal-houston.jpg',
    imageAlt: 'JSF Logistics liquid bulk terminal at Port of Houston, Texas — crude oil and LPG storage',
    anchor: 'houston',
    coords: { top: '43%', left: '18%' },
    throughput: '240M+ MT/year', capacity: 'Flexible multi-product', tankCount: '25+',
    products: ['Crude Oil', 'LPG', 'Refined Products', 'Chemicals', 'Bitumen', 'Jet Fuel', 'Gasoline', 'Ethanol'],
    description: 'Houston is the energy capital of North America. Our terminal on the Gulf Coast provides direct access to the US domestic refining complex, Gulf of Mexico offshore fields, and major export terminals for global crude and product distribution.',
    highlights: ['Gulf Coast refinery links', 'Rail and truck loading', 'LPG handling capability', 'USGC export access'],
  },
  {
    flag: '🇸🇬', city: 'Port of Jurong', country: 'Singapore',
    tagline: 'Asia-Pacific bulk & liquid specialist',
    image: '/images/terminal-jurong.jpg',
    imageAlt: 'JSF Logistics tank farm at Port of Jurong, Singapore — Asia-Pacific bulk liquid storage hub',
    anchor: 'jurong',
    coords: { top: '60%', left: '74%' },
    throughput: '580M+ MT/year', capacity: 'Flexible multi-product', tankCount: '50+',
    products: ['Fuel Oil', 'Crude Oil', 'Naphtha', 'Gas Oil', 'Chemicals', 'Jet Fuel', 'Methanol', 'Ethanol'],
    description: "Singapore is the world's largest bunkering port and a critical node in Asia-Pacific supply chains. Our Jurong facility provides strategic access to refining markets across China, Japan, South Korea, and Southeast Asia.",
    highlights: ["World's #1 bunkering port", 'Asia-Pacific hub access', 'Deepwater terminal berths', 'Largest tank farm capacity'],
  },
  {
    flag: '🇦🇪', city: 'Port of Fujairah', country: 'UAE, Middle East',
    tagline: 'Arabian Sea strategic position',
    image: '/images/terminal-fujairah.webp',
    imageAlt: 'JSF Logistics petroleum and bunker fuel terminal at Port of Fujairah, UAE — Strait of Hormuz',
    anchor: 'fujairah',
    coords: { top: '48%', left: '62%' },
    throughput: 'Top 3 Global Bunkering', capacity: 'Flexible multi-product', tankCount: '30+',
    products: ['Bunker Fuel', 'Crude Oil', 'Gasoil', 'Jet Fuel', 'LNG', 'Chemicals', 'Fuel Oil', 'Naphtha'],
    description: 'Fujairah is the only emirate on the Gulf of Oman coastline, making it a pivotal transit point between the Persian Gulf and global shipping lanes. Our terminal here serves as a key bunkering and storage hub for tankers transiting the Strait of Hormuz.',
    highlights: ['Hormuz strategic position', 'Top 3 global bunkering hub', 'Direct tanker access', 'Middle East crude gateway'],
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
        label="Global Presence"
        title="Four Ports."
        highlight="Every Ocean."
        subtitle="Strategically positioned terminals in Rotterdam, Houston, Jurong, and Fujairah give JSF Logistics unmatched global reach across every major energy trading region."
        image="/images/rotterdam-panorama.jpg"
        imageAlt="JSF Logistics global oil storage terminals — Rotterdam port panorama view"
      />
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Oil Storage Terminals' },
      ]} />

      {/* World map visual */}
      <section style={{ background: 'var(--jsf-800)', padding: '4rem 1.5rem', borderBottom: '1px solid rgba(93,214,44,0.1)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '2/1', background: 'var(--jsf-700)', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(93,214,44,0.12)' }}>
            <div className="grid-bg" style={{ position: 'absolute', inset: 0 }} />
            {[25, 50, 75].map(t => (
              <div key={t} style={{ position: 'absolute', top: `${t}%`, left: 0, right: 0, height: '1px', background: 'rgba(93,214,44,0.04)' }} />
            ))}
            {terminals.map(t => (
              <div key={t.city} style={{ position: 'absolute', top: t.coords.top, left: t.coords.left, transform: 'translate(-50%, -50%)' }}>
                <div style={{ position: 'relative', width: '14px', height: '14px' }}>
                  <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'var(--jsf-100)', zIndex: 2 }} />
                  <div style={{ position: 'absolute', inset: '-6px', borderRadius: '50%', background: 'rgba(210,255,40,0.2)', animation: 'pulseRing 2s ease-out infinite' }} />
                </div>
                <div style={{
                  position: 'absolute', top: '-30px', left: '50%', transform: 'translateX(-50%)',
                  background: 'rgba(6,13,6,0.92)', borderRadius: '6px', padding: '0.2rem 0.5rem',
                  whiteSpace: 'nowrap', fontSize: '11px', fontWeight: 700, color: '#ffffff',
                  border: '1px solid rgba(93,214,44,0.2)',
                }}>
                  {t.flag} {t.city.split(' ').pop()}
                </div>
              </div>
            ))}
            <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', fontSize: '11px', color: 'rgba(255,255,255,0.3)' }}>
              Active terminals: Rotterdam · Houston · Jurong · Fujairah
            </div>
          </div>
        </div>
      </section>

      {/* Terminal detail cards */}
      <section className="section-pad" style={{ background: 'var(--jsf-900)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {terminals.map((t) => (
            <SectionReveal key={t.city} delay={0.05}>
              <div id={t.anchor} style={{
                background: 'var(--jsf-800)', borderRadius: '18px',
                border: '1px solid rgba(93,214,44,0.12)', overflow: 'hidden',
                scrollMarginTop: '5rem',
              }}>
                {/* Terminal image banner */}
                <div style={{ position: 'relative', height: '240px' }}>
                  <Image src={t.image} alt={t.imageAlt} fill style={{ objectFit: 'cover' }} sizes="100vw" />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(6,13,6,0.85) 0%, rgba(6,13,6,0.4) 60%, transparent 100%)' }} />
                  <div style={{ position: 'absolute', bottom: '1.5rem', left: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.375rem' }}>
                      <span style={{ fontSize: '2.5rem' }}>{t.flag}</span>
                      <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--jsf-300)', background: 'rgba(6,13,6,0.7)', padding: '0.25rem 0.75rem', borderRadius: '100px', border: '1px solid rgba(93,214,44,0.3)' }}>● ACTIVE</span>
                    </div>
                    <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)', color: '#ffffff' }}>{t.city}</h2>
                    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)' }}>{t.country} — {t.tagline}</p>
                  </div>
                </div>

                {/* Detail body */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', padding: '2.5rem' }}>
                  <div>
                    <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.85, marginBottom: '1.5rem' }}>{t.description}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                      {t.highlights.map(h => (
                        <div key={h} style={{ display: 'flex', gap: '0.625rem', alignItems: 'center' }}>
                          <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(93,214,44,0.12)', border: '1px solid rgba(93,214,44,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <svg width="8" height="8" viewBox="0 0 8 8"><path d="M1 4l2 2 4-4" stroke="#5dd62c" strokeWidth="1.5" strokeLinecap="round" fill="none"/></svg>
                          </span>
                          <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)' }}>{h}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/services"
                      style={{ fontSize: '13px', fontWeight: 700, color: 'var(--jsf-300)', textDecoration: 'none', letterSpacing: '0.04em' }}
                    >
                      View oil storage &amp; logistics services →
                    </Link>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.875rem' }}>
                      {[{ label: 'THROUGHPUT', val: t.throughput }, { label: 'CAPACITY', val: t.capacity }, { label: 'TANKS', val: t.tankCount }].map(s => (
                        <div key={s.label} style={{ background: 'var(--jsf-700)', borderRadius: '10px', padding: '1rem', textAlign: 'center' }}>
                          <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em', marginBottom: '0.375rem' }}>{s.label}</div>
                          <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '0.9rem', color: 'var(--jsf-100)' }}>{s.val}</div>
                        </div>
                      ))}
                    </div>
                    <div>
                      <p style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>PRODUCTS HANDLED</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                        {t.products.map(p => (
                          <span key={p} style={{ fontSize: '12px', color: 'var(--jsf-300)', background: 'rgba(93,214,44,0.07)', border: '1px solid rgba(93,214,44,0.15)', padding: '0.25rem 0.625rem', borderRadius: '4px' }}>{p}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
