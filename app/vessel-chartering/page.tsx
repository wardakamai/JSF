import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import CTABand from '@/components/shared/CTABand';
import Steps from '@/components/shared/Steps';
import Faq, { faqJsonLd, type FaqItem } from '@/components/shared/Faq';
import { cityHref } from '@/lib/cities';
import { SITE_URL, company, terminals } from '@/lib/site';

const URL = `${SITE_URL}/vessel-chartering`;
const TITLE = 'Tanker Chartering & Vessel Charter for Oil | JSF Logistics';
const DESCRIPTION =
  'Charter a tanker for crude oil and petroleum products. Voyage and time charters on VLCC, Suezmax, Aframax and MR vessels, loading at Rotterdam, Houston, Jurong and Fujairah.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    'tanker chartering', 'vessel chartering', 'oil tanker charter', 'charter party', 'voyage charter tanker',
    'time charter tanker', 'VLCC charter', 'Aframax charter', 'MR tanker charter', 'crude oil shipping', 'CPP DPP chartering',
  ],
  alternates: { canonical: URL },
  openGraph: {
    type: 'website',
    siteName: 'JSF Logistics B.V.',
    locale: 'en_US',
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    images: [{ url: '/images/og-jsf-logistics.jpg', width: 1200, height: 630, alt: 'Crude oil tanker chartered by JSF Logistics' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/images/og-jsf-logistics.jpg'] },
};

const vessels = [
  { name: 'VLCC', dwt: '200,000–320,000 DWT', use: 'Long-haul crude oil, around 2 million barrels per cargo' },
  { name: 'Suezmax', dwt: '120,000–200,000 DWT', use: 'Crude oil and dirty products, around 1 million barrels' },
  { name: 'Aframax', dwt: '80,000–120,000 DWT', use: 'Crude and fuel oil on regional and cross-trade routes' },
  { name: 'MR tanker', dwt: '25,000–55,000 DWT', use: 'Clean products: gasoil, EN590 diesel, jet fuel, gasoline, naphtha' },
];

const steps = [
  { title: 'Send your cargo details', text: 'Product and grade, quantity, load and discharge ports, and your laycan (the dates the vessel must arrive to load).' },
  { title: 'Receive vessel options', text: 'We propose suitable tankers with a freight offer, or a daily hire rate for a time charter.' },
  { title: 'Fix the charter party', text: 'Once you accept, we confirm the fixture and sign the charter party with freight, laytime and demurrage agreed up front.' },
  { title: 'Load and document', text: 'We coordinate loading, surveying, bill of lading and customs documentation at the load port.' },
  { title: 'Track to discharge', text: 'We follow the voyage and discharge, including into storage at one of our terminals if you need it.' },
];

const faq: FaqItem[] = [
  {
    q: 'What is a charter party?',
    a: 'A charter party is the contract between the shipowner and the charterer. It sets out the vessel, cargo, ports, dates, freight or hire rate, laytime and demurrage for the voyage or period.',
  },
  {
    q: 'What is the difference between a voyage charter and a time charter?',
    a: 'In a voyage charter you pay freight to move one cargo between agreed ports, and the owner runs the ship. In a time charter you hire the vessel for a period at a daily rate and direct where it goes.',
  },
  {
    q: 'What do you need from me for a chartering quote?',
    a: 'The product and grade, quantity, load and discharge ports, and laycan. With that we can check vessel availability and send a freight offer.',
  },
  {
    q: 'Can the vessel load or discharge at your storage terminals?',
    a: 'Yes. We charter tankers loading and discharging at our terminals in Rotterdam, Houston, Jurong and Fujairah, so we can combine storage and shipping in one arrangement.',
  },
];

export default function VesselCharteringPage() {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Tanker chartering',
    serviceType: 'Vessel chartering',
    description: DESCRIPTION,
    url: URL,
    areaServed: 'Worldwide',
    provider: { '@type': 'Organization', name: company.name, url: SITE_URL },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Tanker charters',
      itemListElement: ['Voyage charter', 'Time charter'].map(n => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: n } })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faq)) }} />

      <PageHero
        crumb="Vessel Chartering"
        parents={[{ label: 'Services', href: '/services' }]}
        title="Tanker chartering for crude oil and petroleum products"
        subtitle="Voyage and time charters on VLCC, Suezmax, Aframax and MR tankers, with loading and storage at our own terminals."
        image="/images/hero-tanker.webp"
        imageAlt="Crude oil tanker at sea on a voyage charter arranged by JSF Logistics"
      />

      <section className="section" aria-labelledby="types-title">
        <div className="wrap">
          <h2 id="types-title" style={{ marginBottom: '2rem' }}>Charters we arrange</h2>
          <div className="cols">
            <div className="col-item">
              <h3>Voyage charter</h3>
              <p>Move one cargo from load port to discharge port for an agreed freight. The owner operates the vessel; you provide the cargo.</p>
            </div>
            <div className="col-item">
              <h3>Time charter</h3>
              <p>Hire a tanker for a set period at a daily rate and direct its voyages, for regular cargo programmes or trading flexibility.</p>
            </div>
            <div className="col-item">
              <h3>Storage and shipping together</h3>
              <p>Load from or discharge into leased tanks at Rotterdam, Houston, Jurong or Fujairah, with one team handling both.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="vessels-title">
        <div className="wrap split">
          <div className="col-4">
            <h2 id="vessels-title" style={{ marginBottom: '1rem' }}>Tanker sizes</h2>
            <p className="muted">We charter clean and dirty petroleum product tankers, from MR to VLCC.</p>
          </div>
          <div className="col-8" style={{ overflowX: 'auto' }}>
            <table className="data-table">
              <thead><tr><th scope="col">Vessel</th><th scope="col">Size</th><th scope="col">Typical use</th></tr></thead>
              <tbody>
                {vessels.map(v => (
                  <tr key={v.name}><th scope="row">{v.name}</th><td className="nowrap">{v.dwt}</td><td>{v.use}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="cp-title">
        <div className="wrap split">
          <div className="col-6">
            <h2 id="cp-title" style={{ marginBottom: '1rem' }}>Charter party terms agreed up front</h2>
            <p className="muted" style={{ marginBottom: '1.25rem' }}>
              Every fixture is confirmed in a charter party before the vessel is nominated, so freight, laytime and
              demurrage are clear from the start.
            </p>
            <ul className="ticks">
              <li>Industry-standard tanker charter party forms</li>
              <li>Freight or daily hire, laytime and demurrage agreed in writing</li>
              <li>Bill of lading, surveying and customs documentation handled</li>
              <li>Emergency response and spill containment at our terminals</li>
            </ul>
          </div>
          <div className="col-6">
            <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Cargoes we ship</h2>
            <ul className="inline-list">
              {['Crude oil', 'Fuel oil', 'VLSFO', 'Gasoil', 'EN590 diesel', 'Jet A-1', 'Gasoline', 'Naphtha'].map(c => <li key={c}>{c}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="steps-title">
        <div className="wrap">
          <h2 id="steps-title" style={{ marginBottom: '2rem' }}>How to charter a tanker with us</h2>
          <Steps steps={steps} />
        </div>
      </section>

      <section className="section" aria-labelledby="ports-title">
        <div className="wrap">
          <h2 id="ports-title" style={{ marginBottom: '1.25rem' }}>Load or discharge at our terminals</h2>
          <ul className="btn-row" style={{ listStyle: 'none' }}>
            {terminals.map(t => (
              <li key={t.anchor}><Link href={cityHref(t.anchor)} className="btn btn--ghost">Storage and shipping in {t.city}</Link></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="faq-title">
        <div className="wrap split">
          <div className="col-4"><h2 id="faq-title">Questions about tanker chartering</h2></div>
          <div className="col-8"><Faq items={faq} /></div>
        </div>
      </section>

      <CTABand
        title="Need a tanker for your cargo?"
        text="Send us the product, quantity, ports and laycan, and we will reply with vessel options and a freight offer within 24 hours."
      />
    </>
  );
}
