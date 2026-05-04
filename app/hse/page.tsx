import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import SectionReveal from '@/components/shared/SectionReveal';
import CTABanner from '@/components/home/CTABanner';

export const metadata: Metadata = {
  title: 'Health, Safety & Environment',
  description:
    'JSF Logistics upholds ISO 9001, ISO 14001, and ISO 45001 certified HSE standards across all operations. Safety, environmental responsibility, and quality are embedded in every decision we make.',
  keywords: ['HSE oil terminal', 'ISO 9001 logistics', 'ISO 14001 environment', 'ISO 45001 safety', 'petroleum HSE policy', 'energy company safety standards'],
  openGraph: {
    title: 'Health, Safety & Environment — JSF Logistics B.V.',
    description:
      'ISO-certified health, safety, and environmental management across all four JSF Logistics terminals. Safety is not a department — it is our culture.',
    url: 'https://jsf-logistics.com/hse',
  },
};

const pillars = [
  {
    icon: '❤️',
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
    icon: '🛡️',
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
    icon: '🌿',
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
    icon: '✅',
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
  { value: '15+', label: 'Years without major incident', sub: 'Across all four terminals' },
  { value: '4', label: 'ISO certifications held', sub: '9001 · 14001 · 45001 · ISPS' },
];

export default function HSEPage() {
  return (
    <>
      <PageHero
        label="Our Commitment"
        title="Health, Safety &"
        highlight="Environment"
        subtitle="At JSF Logistics, HSE is not a department — it is a culture embedded in every decision, every operation, and every person on our sites."
      />

      {/* Policy Statement */}
      <section style={{ background: 'var(--jsf-800)', padding: '5rem 1.5rem', borderBottom: '1px solid rgba(93,214,44,0.1)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <SectionReveal>
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🌐</div>
            <blockquote style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', color: 'var(--jsf-100)', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '1.5rem' }}>
              &ldquo;JSF Logistics B.V. is committed to protecting the health and safety of all personnel, preventing environmental harm, and continuously improving our management systems to meet and exceed regulatory expectations worldwide.&rdquo;
            </blockquote>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.08em', fontWeight: 600 }}>— JSF LOGISTICS B.V. HSE POLICY, CURRENT EDITION</p>
          </SectionReveal>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: 'var(--jsf-700)', padding: '3.5rem 1.5rem', borderBottom: '1px solid rgba(93,214,44,0.1)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {stats.map((s, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div style={{ textAlign: 'center', padding: '1.5rem', background: 'var(--jsf-800)', borderRadius: '12px', border: '1px solid rgba(93,214,44,0.1)' }}>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '2.5rem', fontWeight: 800, color: 'var(--jsf-100)', marginBottom: '0.375rem' }}>{s.value}</div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', marginBottom: '0.25rem' }}>{s.label}</div>
                  <div style={{ fontSize: '11px', color: 'rgba(93,214,44,0.5)' }}>{s.sub}</div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Four pillars */}
      <section className="section-pad" style={{ background: 'var(--jsf-900)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <SectionReveal style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: 'var(--jsf-100)' }}>
              Our Four <span style={{ color: 'rgba(255,255,255,0.6)' }}>HSE Pillars</span>
            </h2>
          </SectionReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {pillars.map((p, i) => (
              <SectionReveal key={p.title} delay={i * 0.08}>
                <div className="card-hover" style={{ background: 'var(--jsf-800)', border: '1px solid rgba(93,214,44,0.12)', borderRadius: '16px', padding: '2rem' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{p.icon}</div>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.25rem', color: 'var(--jsf-100)', marginBottom: '0.75rem' }}>{p.title}</h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '1.25rem' }}>{p.desc}</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {p.points.map(pt => (
                      <li key={pt} style={{ display: 'flex', gap: '0.5rem', fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>
                        <span style={{ color: 'var(--jsf-100)', flexShrink: 0 }}>—</span> {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section style={{ background: 'var(--jsf-800)', padding: '4rem 1.5rem', borderTop: '1px solid rgba(93,214,44,0.1)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <SectionReveal>
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.5rem', color: 'var(--jsf-100)', marginBottom: '0.75rem' }}>Certifications &amp; Standards</h3>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', maxWidth: '520px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
              Our management systems are independently certified and regularly audited by accredited third-party bodies.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              {['ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018', 'ISPS Code', 'MARPOL Annex I & II', 'ISGOTT Guidelines'].map(c => (
                <div key={c} style={{
                  padding: '0.75rem 1.5rem', background: 'var(--jsf-700)',
                  border: '1px solid rgba(93,214,44,0.2)',
                  borderRadius: '8px', fontFamily: 'Syne, sans-serif', fontWeight: 700,
                  fontSize: '13px', color: 'rgba(255,255,255,0.6)',
                }}>
                  {c}
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
