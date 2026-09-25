import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';
import CTABand from '@/components/shared/CTABand';

export const metadata: Metadata = {
  title: 'About JSF Logistics — Oil & Gas Terminal Operator Since 2008',
  description:
    'JSF Logistics B.V. is a global oil storage and tank farm operator founded in 2008, headquartered in Eindhoven, Netherlands, with terminals in Rotterdam, Houston, Fujairah, and Jurong.',
  keywords: ['JSF Logistics history', 'oil storage company Netherlands', 'energy logistics company', 'petroleum terminal operator', 'tank farm operator'],
  alternates: {
    canonical: 'https://jsf-logistics.com/about',
  },
  openGraph: {
    type: 'website',
    siteName: 'JSF Logistics B.V.',
    locale: 'en_US',
    title: 'About JSF Logistics B.V. — Oil & Gas Terminal Operator Since 2008',
    description:
      'Founded in 2008, JSF Logistics B.V. has grown into a trusted global oil storage and tank farm operator across Rotterdam, Houston, Fujairah, and Jurong.',
    url: 'https://jsf-logistics.com/about',
    images: [
      {
        url: '/images/og-jsf-logistics.jpg',
        width: 1200,
        height: 630,
        alt: 'JSF Logistics B.V. — Oil & Gas Terminal Operator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About JSF Logistics B.V. — Oil & Gas Terminal Operator Since 2008',
    description:
      'Founded in 2008, JSF Logistics B.V. is a trusted global oil storage and tank farm operator with terminals in Rotterdam, Houston, Fujairah, and Jurong.',
    images: ['/images/og-jsf-logistics.jpg'],
  },
};

const values = [
  { title: 'Integrity', desc: 'We operate with full transparency in every transaction, measurement, and contractual commitment with our clients and partners.' },
  { title: 'Safety', desc: 'Safety is non-negotiable. Every operation is governed by rigorous HSE protocols and continuously audited against international standards.' },
  { title: 'Innovation', desc: 'We invest in technology and process improvements that give our clients a competitive edge in a fast-moving global energy market.' },
  { title: 'Sustainability', desc: 'We are committed to minimizing environmental impact and meeting the evolving sustainability expectations of our stakeholders.' },
];

const milestones = [
  { year: '2008', event: 'JSF Logistics B.V. founded in Eindhoven, Netherlands, with first tank lease agreement at Rotterdam.' },
  { year: '2012', event: 'Houston terminal operations launched, opening access to Gulf Coast crude and refined product markets.' },
  { year: '2016', event: 'Jurong terminal capacity added, establishing our presence as a key Asia-Pacific storage partner.' },
  { year: '2019', event: 'Fujairah operations commenced, completing our four-port global footprint across every major ocean basin.' },
  { year: '2022', event: 'ISO 9001, ISO 14001, and ISO 45001 certifications achieved across all terminal operations.' },
  { year: '2025', event: 'Laboratory division expanded with full ASTM-accredited testing at Rotterdam and Houston.' },
];

const certs = ['ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018', 'ISPS Code', 'MARPOL Annex II'];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About JSF Logistics"
        title="An oil and gas terminal operator since 2008"
        subtitle="JSF Logistics B.V. is a global oil and gas storage and shipping company headquartered in Eindhoven, Netherlands, with operations across four strategic international terminals."
        image="/images/about-tanks.jpg"
        imageAlt="Aerial view of a JSF Logistics oil storage tank farm at dusk"
      />

      <section className="section">
        <div className="wrap cols">
          <div className="col-item">
            <h2 style={{ fontSize: '1.6rem', marginBottom: '0.75rem' }}>Our mission</h2>
            <p className="lede" style={{ color: 'var(--ink)' }}>
              To be the most reliable and transparent oil &amp; gas storage and logistics partner in the world,
              enabling producers, traders, and refiners to move energy with confidence across every market.
            </p>
          </div>
          <div className="col-item">
            <h2 style={{ fontSize: '1.6rem', marginBottom: '0.75rem' }}>Our vision</h2>
            <p className="lede" style={{ color: 'var(--ink)' }}>
              To build a future where energy logistics is seamless, sustainable, and accessible, connecting supply
              chains across oceans so the global economy keeps moving forward without interruption.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="milestones-title">
        <div className="wrap split">
          <div className="col-5">
            <h2 id="milestones-title" style={{ marginBottom: '1.5rem' }}>Company milestones</h2>
            <div className="media media--tall">
              <Image src="/images/terminal-rotterdam.jpg" alt="The Port of Rotterdam, where JSF Logistics signed its first tank lease in 2008" fill sizes="(max-width: 860px) 100vw, 40vw" />
            </div>
          </div>
          <div className="col-7">
            <ol className="timeline">
              {milestones.map(m => (
                <li key={m.year}>
                  <time dateTime={m.year}>{m.year}</time>
                  <p>{m.event}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="values-title">
        <div className="wrap">
          <h2 id="values-title" style={{ marginBottom: '2.5rem' }}>Our core values</h2>
          <div className="cols">
            {values.map(v => (
              <div key={v.title} className="col-item">
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="certs-title" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="wrap split" style={{ alignItems: 'center' }}>
          <h2 id="certs-title" className="col-4" style={{ fontSize: '1.4rem' }}>Certifications and compliance</h2>
          <ul className="cert-list col-8">
            {certs.map(c => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </section>

      <CTABand />
    </>
  );
}
