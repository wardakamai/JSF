import Link from 'next/link';
import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import SectionReveal from '@/components/shared/SectionReveal';
import CTABanner from '@/components/home/CTABanner';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'JSF Logistics offers oil storage, marine shipping, product blending, laboratory testing, road transportation, and pipeline facilitation from four global energy terminals.',
  keywords: ['oil storage services', 'marine shipping', 'product blending', 'petroleum laboratory testing', 'road transport fuel', 'pipeline facilitation'],
  openGraph: {
    title: 'Energy Logistics Services — JSF Logistics B.V.',
    description:
      'From large-capacity tank storage to VLCC vessel handling — explore the full spectrum of oil and gas logistics services from JSF Logistics.',
    url: 'https://jsf-logistics.com/services',
  },
};

const services = [
  {
    icon: '🛢️',
    title: 'Oil Storage',
    desc: 'Our strategic storage infrastructure spans four continents, providing secure and flexible tank farm operations for crude oil, fuel oil, chemicals, and refined products. Each terminal is equipped with modern metering, blanketing, and heating systems.',
    points: [
      'Fixed and floating roof tanks up to 100,000 m³',
      'Full-pipeline, vessel, truck, and rail connectivity',
      'Real-time inventory monitoring and reporting',
      'Flexible short- and long-term leasing arrangements',
    ],
  },
  {
    icon: '🚢',
    title: 'Marine Shipping',
    desc: 'We provide comprehensive marine operations including vessel loading and discharging, berth management, and coordination of tanker schedules across our four deep-water port facilities. Our team works 24/7 to ensure seamless cargo movements.',
    points: [
      'VLCC, Suezmax, Aframax, and MR tanker handling',
      'Full ship-to-shore and shore-to-ship transfers',
      'Bill of lading, surveying, and customs documentation',
      'Emergency response and spill containment capability',
    ],
  },
  {
    icon: '⚗️',
    title: 'Product Blending',
    desc: 'Our in-line and batch blending capabilities allow us to produce custom product specifications for clients. From bunker fuel blending to aviation fuel preparation, we meet every international quality standard.',
    points: [
      'In-line blending for high-volume production',
      'Tank-to-tank batch blending for specification products',
      'ASTM and IP method quality compliance',
      'Blend certificates issued for every batch',
    ],
  },
  {
    icon: '🔬',
    title: 'Laboratory Testing',
    desc: 'Our accredited laboratories operate at all four terminals, providing comprehensive analytical services that guarantee product integrity from receipt through discharge. We test to international standards and issue full certificates of quality.',
    points: [
      'Petroleum and marine fuel analysis',
      'ASTM / IP / ISO standard test methods',
      'Independent surveying and cargo sampling',
      'Rapid turnaround with digital reporting',
    ],
  },
  {
    icon: '🚛',
    title: 'Road Transportation',
    desc: 'We coordinate efficient truck loading operations from all terminals, managing scheduling, dispatch, and documentation for last-mile delivery of petroleum products, chemicals, and specialty fuels across domestic and cross-border routes.',
    points: [
      'ADR/IMDG compliant fleet partnerships',
      'Top- and bottom-loading gantry operations',
      'Real-time GPS tracking and ETA management',
      'Automated ticketing and invoice generation',
    ],
  },
  {
    icon: '🔧',
    title: 'Pipeline Facilitation',
    desc: 'JSF Logistics maintains direct pipeline connections at Rotterdam and Houston, enabling high-throughput transfers between refineries, petrochemical plants, and export facilities without the logistical complexity of vessel or road transport.',
    points: [
      'Direct refinery-to-terminal pipeline links',
      'High-volume throughput up to 5,000 m³/hr',
      'Pig receiver and launcher stations installed',
      'Seamless integration with national pipeline networks',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="What We Do"
        title="Comprehensive Energy"
        highlight="Logistics Services"
        subtitle="From tank storage to marine operations, we provide the full spectrum of oil and gas logistics services your business depends on."
      />

      <section style={{ background: 'var(--jsf-900)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
            {services.map((s, i) => (
              <SectionReveal key={s.title} delay={0.05}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '3rem',
                  alignItems: 'start',
                  flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
                }}>
                  {/* Left: icon + title block */}
                  <div style={{ position: 'relative' }}>
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      width: '72px', height: '72px',
                      background: 'var(--jsf-700)',
                      border: '1px solid rgba(93,214,44,0.2)',
                      borderRadius: '16px',
                      fontSize: '2rem',
                      marginBottom: '1.25rem',
                    }}>
                      {s.icon}
                    </div>
                    <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--jsf-100)', marginBottom: '1rem' }}>{s.title}</h2>
                    <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '1.5rem' }}>{s.desc}</p>
                    <Link href="/contact" style={{
                      display: 'inline-block',
                      padding: '0.625rem 1.5rem',
                      background: 'var(--jsf-600)',
                      color: 'var(--jsf-100)',
                      fontFamily: 'Syne, sans-serif',
                      fontWeight: 700,
                      fontSize: '13px',
                      letterSpacing: '0.04em',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      transition: 'background 0.2s',
                    }}
                    >
                      ENQUIRE NOW →
                    </Link>
                  </div>

                  {/* Right: bullet points */}
                  <div style={{
                    background: 'var(--jsf-800)',
                    border: '1px solid rgba(93,214,44,0.12)',
                    borderRadius: '14px',
                    padding: '2rem',
                  }}>
                    <h4 style={{ fontFamily: 'Syne, sans-serif', fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.12em', marginBottom: '1.25rem' }}>KEY CAPABILITIES</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                      {s.points.map(pt => (
                        <li key={pt} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                          <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(93,214,44,0.15)', border: '1px solid rgba(93,214,44,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path d="M2 5l2 2 4-4" stroke="#5dd62c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
