import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import SectionReveal from '@/components/shared/SectionReveal';
import CTABanner from '@/components/home/CTABanner';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about JSF Logistics B.V. — founded in 2008, we are a global oil and gas storage and logistics company headquartered in Eindhoven, Netherlands, with terminals across four continents.',
  keywords: ['JSF Logistics history', 'oil and gas company Netherlands', 'energy logistics company', 'petroleum storage company'],
  openGraph: {
    title: 'About JSF Logistics B.V. — Our Story & Mission',
    description:
      'Founded in 2008, JSF Logistics B.V. has grown into a trusted global partner for oil & gas storage across Rotterdam, Houston, Jurong, and Fujairah.',
    url: 'https://jsf-logistics.com/about',
  },
};

const values = [
  { icon: '⚖️', title: 'Integrity', desc: 'We operate with full transparency in every transaction, measurement, and contractual commitment with our clients and partners.' },
  { icon: '🛡️', title: 'Safety', desc: 'Safety is non-negotiable. Every operation is governed by rigorous HSE protocols and continuously audited against international standards.' },
  { icon: '💡', title: 'Innovation', desc: 'We invest in technology and process improvements that give our clients a competitive edge in a fast-moving global energy market.' },
  { icon: '🌿', title: 'Sustainability', desc: 'We are committed to minimizing environmental impact and meeting the evolving sustainability expectations of our stakeholders.' },
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
        label="Who We Are"
        title="Built on Trust,"
        highlight="Driven by Energy."
        subtitle="JSF Logistics B.V. is a global oil and gas storage and shipping company headquartered in Eindhoven, Netherlands, with operations across four strategic international terminals."
      />

      {/* Mission & Vision */}
      <section className="section-pad" style={{ background: 'var(--jsf-900)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <SectionReveal>
              <div style={{ background: 'var(--jsf-800)', border: '1px solid rgba(93,214,44,0.12)', borderRadius: '16px', padding: '2.5rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎯</div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.4rem', color: '#ffffff', marginBottom: '1rem' }}>Our Mission</h3>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
                  To be the most reliable and transparent oil &amp; gas storage and logistics partner in the world — enabling producers, traders, and refiners to move energy with confidence across every market.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <div style={{ background: 'var(--jsf-700)', border: '1px solid rgba(93,214,44,0.15)', borderRadius: '16px', padding: '2.5rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔭</div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.4rem', color: '#ffffff', marginBottom: '1rem' }}>Our Vision</h3>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
                  To build a future where energy logistics is seamless, sustainable, and accessible — connecting supply chains across oceans so the global economy keeps moving forward without interruption.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad" style={{ background: 'var(--jsf-800)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <SectionReveal style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ width: '24px', height: '2px', background: 'var(--jsf-300)', display: 'inline-block' }} />
              <span style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.15em' }}>OUR JOURNEY</span>
              <span style={{ width: '24px', height: '2px', background: 'var(--jsf-300)', display: 'inline-block' }} />
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#ffffff' }}>
              Company <span style={{ color: 'rgba(255,255,255,0.6)' }}>Milestones</span>
            </h2>
          </SectionReveal>

          <div style={{ position: 'relative', maxWidth: '720px', margin: '0 auto' }}>
            {/* Vertical line */}
            <div style={{ position: 'absolute', left: '80px', top: 0, bottom: 0, width: '1px', background: 'rgba(93,214,44,0.2)' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {milestones.map((m, i) => (
                <SectionReveal key={m.year} delay={i * 0.07}>
                  <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', paddingLeft: '0' }}>
                    <div style={{ width: '80px', flexShrink: 0, textAlign: 'right', position: 'relative' }}>
                      <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1rem', color: 'rgba(255,255,255,0.6)' }}>{m.year}</span>
                      {/* dot */}
                      <div style={{ position: 'absolute', right: '-8px', top: '50%', transform: 'translateY(-50%)', width: '14px', height: '14px', borderRadius: '50%', background: 'var(--jsf-300)', border: '3px solid var(--jsf-800)' }} />
                    </div>
                    <div style={{ flex: 1, background: 'var(--jsf-700)', borderRadius: '10px', padding: '1rem 1.25rem', border: '1px solid rgba(93,214,44,0.1)' }}>
                      <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>{m.event}</p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-pad" style={{ background: 'var(--jsf-900)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <SectionReveal style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#ffffff' }}>
              Our Core <span style={{ color: 'rgba(255,255,255,0.6)' }}>Values</span>
            </h2>
          </SectionReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {values.map((v, i) => (
              <SectionReveal key={v.title} delay={i * 0.08}>
                <div className="card-hover" style={{ background: 'var(--jsf-800)', border: '1px solid rgba(93,214,44,0.12)', borderRadius: '14px', padding: '2rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{v.icon}</div>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.1rem', color: '#ffffff', marginBottom: '0.75rem' }}>{v.title}</h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section style={{ background: 'var(--jsf-800)', borderTop: '1px solid rgba(93,214,44,0.1)', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>CERTIFICATIONS &amp; COMPLIANCE</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            {certs.map(c => (
              <div key={c} style={{ padding: '0.625rem 1.25rem', background: 'var(--jsf-700)', border: '1px solid rgba(93,214,44,0.2)', borderRadius: '8px', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
