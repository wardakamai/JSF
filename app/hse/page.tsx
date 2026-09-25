import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import CTABand from '@/components/shared/CTABand';

export const metadata: Metadata = {
  title: 'Health, Safety & Environment — ISO Certified Terminal Operations',
  description:
    'JSF Logistics upholds ISO 9001, ISO 14001, and ISO 45001 certified HSE standards across all oil storage terminal operations. Safety, environmental responsibility, and quality are embedded in every decision.',
  keywords: ['HSE oil terminal', 'ISO 9001 logistics', 'ISO 14001 environment', 'ISO 45001 safety', 'petroleum HSE policy', 'energy company safety', 'tank farm HSE'],
  alternates: {
    canonical: 'https://jsf-logistics.com/hse',
  },
  openGraph: {
    type: 'website',
    siteName: 'JSF Logistics B.V.',
    locale: 'en_US',
    title: 'Health, Safety & Environment — ISO Certified Terminal Operations | JSF Logistics',
    description:
      'ISO 9001, ISO 14001, and ISO 45001 certified HSE management across all four JSF Logistics terminals. Safety is not a department — it is our culture.',
    url: 'https://jsf-logistics.com/hse',
    images: [
      {
        url: '/images/og-jsf-logistics.jpg',
        width: 1200,
        height: 630,
        alt: 'JSF Logistics Health, Safety & Environment — ISO Certified Operations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Health, Safety & Environment — ISO Certified Terminal Operations',
    description:
      'ISO 9001, 14001, and 45001 certified HSE management across all four JSF Logistics oil storage terminals.',
    images: ['/images/og-jsf-logistics.jpg'],
  },
};

const pillars = [
  {
    title: 'Health',
    desc: 'We protect the health of our employees, contractors, and surrounding communities through comprehensive occupational health programs, medical surveillance, and wellness initiatives.',
    points: [
      'Occupational health monitoring programs',
      'Ergonomic risk assessments across all terminals',
      'Substance and fatigue management policies',
      'Mental health and wellbeing support',
    ],
  },
  {
    title: 'Safety',
    desc: 'Zero harm is our unwavering objective. Every JSF Logistics operation is governed by a robust safety management system built on risk assessment, permit-to-work, and continuous learning.',
    points: [
      'ISO 45001:2018 certified safety management',
      'Permit-to-work system for all critical tasks',
      'HAZOP and HAZID risk review processes',
      'Emergency response planning and drills',
    ],
  },
  {
    title: 'Environment',
    desc: 'We are committed to minimizing our environmental footprint at every terminal through vapor recovery, spill prevention, waste reduction, and proactive environmental monitoring.',
    points: [
      'ISO 14001:2015 environmental management',
      'Vapor recovery units at all tank farms',
      'Zero liquid discharge ambition',
      'Annual GHG emissions reporting',
    ],
  },
  {
    title: 'Quality',
    desc: 'Our quality management system guarantees that every product stored, blended, or shipped meets the contractual and regulatory specifications agreed with our clients.',
    points: [
      'ISO 9001:2015 quality management system',
      'Accredited laboratory testing at all sites',
      'Non-conformance tracking and root cause analysis',
      'Client satisfaction surveys and KPI reporting',
    ],
  },
];

const stats = [
  { value: '0', label: 'LTIF (Lost Time Injury Frequency)', sub: '2024 rolling 12-month average' },
  { value: '100%', label: 'Operations audited annually', sub: 'Internal and third-party' },
  { value: '5+', label: 'Years without major incident', sub: 'Across all four terminals' },
  { value: '4', label: 'ISO certifications held', sub: 'ISO 9001, 14001, 45001 and ISPS' },
];

const certs = ['ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018', 'ISPS Code', 'MARPOL Annex I & II', 'ISGOTT Guidelines'];

export default function HSEPage() {
  return (
    <>
      <PageHero
        crumb="Health, Safety & Environment"
        title="Health, safety and environment"
        subtitle="At JSF Logistics, HSE is not a department. It is a culture embedded in every decision, every operation, and every person on our sites."
        image="/images/tanks-closeup.webp"
        imageAlt="Storage tanks with guarded stairways and walkways at a JSF Logistics terminal"
      />

      <section className="section">
        <div className="wrap">
          <figure>
            <blockquote className="policy">
              &ldquo;JSF Logistics B.V. is committed to protecting the health and safety of all personnel, preventing
              environmental harm, and continuously improving our management systems to meet and exceed regulatory
              expectations worldwide.&rdquo;
            </blockquote>
            <figcaption className="policy-src">JSF Logistics B.V. HSE policy, current edition</figcaption>
          </figure>

          <dl className="facts" style={{ marginTop: 'clamp(3rem, 6vw, 4.5rem)' }}>
            {stats.map(s => (
              <div key={s.label}>
                <dt>{s.label}<br /><span className="small">{s.sub}</span></dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="pillars-title">
        <div className="wrap">
          <h2 id="pillars-title" style={{ marginBottom: '2.5rem' }}>Our four HSE pillars</h2>
          <div className="cols">
            {pillars.map(p => (
              <div key={p.title} className="col-item">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <ul className="ticks small">
                  {p.points.map(pt => <li key={pt}>{pt}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="certs-title">
        <div className="wrap split">
          <div className="col-5">
            <h2 id="certs-title" style={{ marginBottom: '1rem' }}>Certifications and standards</h2>
            <p className="muted">Our management systems are independently certified and regularly audited by accredited third-party bodies.</p>
          </div>
          <div className="col-7" style={{ alignSelf: 'center' }}>
            <ul className="cert-list">
              {certs.map(c => <li key={c}>{c}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
