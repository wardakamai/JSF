import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import CTABand from '@/components/shared/CTABand';
import Steps from '@/components/shared/Steps';
import Faq, { faqJsonLd, type FaqItem } from '@/components/shared/Faq';
import { tsaSteps } from '@/lib/tsa';
import { cityHref } from '@/lib/cities';
import { SITE_URL, company, terminals } from '@/lib/site';

const URL = `${SITE_URL}/tank-storage-agreement`;
const TITLE = 'Tank Storage Agreement (TSA) | Oil Tank Lease | JSF Logistics';
const DESCRIPTION =
  'Secure an oil tank lease with a tank storage agreement (TSA) at Rotterdam, Houston, Jurong or Fujairah. Short- and long-term storage for crude and petroleum products.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    'tank storage agreement', 'TSA oil storage', 'oil tank lease', 'oil storage agreement', 'oil storage contract',
    'tank lease agreement', 'short-term tank storage', 'long-term tank storage', 'rent oil storage tank',
  ],
  alternates: { canonical: URL },
  openGraph: {
    type: 'website',
    siteName: 'JSF Logistics B.V.',
    locale: 'en_US',
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    images: [{ url: '/images/og-jsf-logistics.jpg', width: 1200, height: 630, alt: 'JSF Logistics tank storage agreements' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/images/og-jsf-logistics.jpg'] },
};

const covers = [
  { title: 'Tanks and capacity', text: 'Which tanks you lease and their capacity, from single tanks up to 100,000 m³.' },
  { title: 'Product and specification', text: 'The product you store, its grade and the quality specification it must meet.' },
  { title: 'Term', text: 'A short-term lease for a single cargo or trading window, or a long-term lease for secured capacity.' },
  { title: 'Receipt and delivery', text: 'How product arrives and leaves: vessel, pipeline, barge, rail or truck.' },
  { title: 'Services', text: 'Heating, blending, additive injection, nitrogen blanketing and laboratory testing, as needed.' },
  { title: 'Reporting and fees', text: 'Real-time inventory reporting, and the storage and handling fees agreed up front.' },
];

const faq: FaqItem[] = [
  {
    q: 'What is a tank storage agreement (TSA)?',
    a: 'A tank storage agreement is the contract under which you lease tank capacity at a terminal. It sets out the tanks, product, volume, storage period, services and fees, and the responsibilities of the terminal and the client.',
  },
  {
    q: 'How much capacity can I lease?',
    a: 'It depends on the terminal and product. Our tanks range up to 100,000 m³ each, and larger volumes can be split across several tanks. Tell us your volume and we will confirm what is available.',
  },
  {
    q: 'Can I store more than one product?',
    a: 'Yes. Products are kept in segregated tanks, and we can store several grades or products for you under one agreement.',
  },
  {
    q: 'How are quantity and quality verified?',
    a: 'Product is measured into and out of the tank, and our accredited laboratory samples and tests it at receipt and discharge, issuing certificates of quality.',
  },
  {
    q: 'Can you also arrange the ship?',
    a: 'Yes. We charter tankers for voyages loading or discharging at our terminals, so storage and shipping can be arranged together.',
  },
];

export default function TankStorageAgreementPage() {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Oil tank storage lease',
    serviceType: 'Tank storage agreement',
    description: DESCRIPTION,
    url: URL,
    areaServed: terminals.map(t => ({ '@type': 'City', name: t.city })),
    provider: { '@type': 'Organization', name: company.name, url: SITE_URL },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faq)) }} />

      <PageHero
        crumb="Tank Storage Agreements"
        parents={[{ label: 'Services', href: '/services' }]}
        title="Tank storage agreements for oil and petroleum products"
        subtitle="Lease tank capacity at Rotterdam, Houston, Jurong or Fujairah under a clear tank storage agreement, for as long as you need it."
        image="/images/hero-tanks.jpg"
        imageAlt="Oil storage tanks available for lease under a JSF Logistics tank storage agreement"
      />

      <section className="section" aria-labelledby="covers-title">
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2 id="covers-title" style={{ marginBottom: '0.75rem' }}>What your agreement covers</h2>
              <p className="muted">Everything is agreed in writing before your product arrives.</p>
            </div>
          </div>
          <div className="cols">
            {covers.map(c => (
              <div key={c.title} className="col-item">
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="term-title">
        <div className="wrap">
          <h2 id="term-title" style={{ marginBottom: '2rem' }}>Short-term or long-term storage</h2>
          <div className="cols">
            <div className="col-item">
              <h3>Short-term lease</h3>
              <p>For a single cargo, a trading or blending window, or while you wait for the right market. You keep flexibility and pay only for the period you use.</p>
            </div>
            <div className="col-item">
              <h3>Long-term lease</h3>
              <p>For refiners, distributors and traders who need guaranteed capacity at a hub. Your tanks are reserved for you for the full term of the agreement.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="where-title">
        <div className="wrap">
          <h2 id="where-title" style={{ marginBottom: '1.25rem' }}>Where you can lease tanks</h2>
          <ul className="btn-row" style={{ listStyle: 'none' }}>
            {terminals.map(t => (
              <li key={t.anchor}><Link href={cityHref(t.anchor)} className="btn btn--ghost">Oil tank lease in {t.city}</Link></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="steps-title">
        <div className="wrap">
          <h2 id="steps-title" style={{ marginBottom: '2rem' }}>How to secure your tank storage</h2>
          <Steps steps={tsaSteps} />
          <p className="form-status" style={{ marginTop: '2.5rem', maxWidth: '46em' }}>
            <strong>Check who you are dealing with.</strong> Genuine JSF Logistics agreements come only from
            addresses ending in <span className="nowrap">@jsf-logistics.com</span>. We are not connected to
            jsf-logistics.nl. If in doubt, call <a className="link nowrap" href={company.phoneHref}>{company.phone}</a>.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-title">
        <div className="wrap split">
          <div className="col-4"><h2 id="faq-title">Questions about tank storage agreements</h2></div>
          <div className="col-8"><Faq items={faq} /></div>
        </div>
      </section>

      <CTABand
        title="Request a tank storage agreement."
        text="Send us the product, volume, storage period and preferred terminal. We confirm availability and reply within 24 hours."
      />
    </>
  );
}
