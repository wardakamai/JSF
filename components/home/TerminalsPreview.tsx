'use client';

import Link from 'next/link';
import Image from 'next/image';
import SectionReveal from '@/components/shared/SectionReveal';

const terminals = [
  { flag: '🇳🇱', city: 'Port of Rotterdam', country: 'Netherlands', tagline: "Europe's largest energy hub", throughput: '400M+', image: '/images/terminal-rotterdam.jpg', imageAlt: 'JSF Logistics oil storage tank farm at Port of Rotterdam, Netherlands', anchor: 'rotterdam', linkLabel: 'Oil storage in Rotterdam', products: ['Fuel Oil', 'Crude', 'Gasoil', 'Jet Fuel', 'Chemicals'] },
  { flag: '🇺🇸', city: 'Port of Houston', country: 'Texas, USA', tagline: "America's energy trading centre", throughput: '240M+', image: '/images/terminal-houston.jpg', imageAlt: 'JSF Logistics liquid bulk terminal at Port of Houston, Texas USA', anchor: 'houston', linkLabel: 'Oil storage in Houston', products: ['Crude Oil', 'LPG', 'Refined', 'Chemicals', 'Bitumen'] },
  { flag: '🇸🇬', city: 'Port of Jurong', country: 'Singapore', tagline: 'Asia-Pacific bulk & liquid specialist', throughput: '580M+', image: '/images/terminal-jurong.jpg', imageAlt: 'JSF Logistics tank farm at Port of Jurong, Singapore', anchor: 'jurong', linkLabel: 'Oil storage in Jurong', products: ['Fuel Oil', 'Crude', 'Naphtha', 'Gas Oil', 'Chemicals'] },
  { flag: '🇦🇪', city: 'Port of Fujairah', country: 'UAE', tagline: 'Arabian Sea strategic position', throughput: 'Top 3', image: '/images/terminal-fujairah.webp', imageAlt: 'JSF Logistics petroleum storage terminal at Port of Fujairah, UAE', anchor: 'fujairah', linkLabel: 'Oil storage in Fujairah', products: ['Bunker Fuel', 'Crude', 'Gasoil', 'Jet Fuel', 'LNG'] },
];

export default function TerminalsPreview() {
  return (
    <section className="section-pad" style={{ background: 'var(--jsf-800)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        <SectionReveal style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.875rem' }}>
              <span style={{ width: '28px', height: '2px', background: 'var(--jsf-300)', display: 'inline-block' }} />
              <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--jsf-300)', letterSpacing: '0.16em' }}>GLOBAL PRESENCE</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', color: '#ffffff', lineHeight: 1.05 }}>
              Four ports.<br /><span style={{ color: 'var(--jsf-100)' }}>Every ocean.</span>
            </h2>
          </div>
          <Link href="/terminals" style={{
            padding: '0.625rem 1.5rem', border: '1.5px solid rgba(210,255,40,0.3)',
            color: 'var(--jsf-100)', borderRadius: '8px', textDecoration: 'none',
            fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '13px', letterSpacing: '0.05em',
            transition: 'border-color 0.2s, background 0.2s', whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--jsf-100)'; (e.currentTarget as HTMLElement).style.background = 'rgba(210,255,40,0.06)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(210,255,40,0.3)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}>
            VIEW ALL TERMINALS →
          </Link>
        </SectionReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
          {terminals.map((t, i) => (
            <SectionReveal key={t.city} delay={i * 0.08}>
              <div className="card-hover" style={{
                background: 'var(--jsf-700)', border: '1px solid rgba(93,214,44,0.12)',
                borderRadius: '14px', overflow: 'hidden',
              }}>
                {/* Image */}
                <div style={{ position: 'relative', height: '160px', overflow: 'hidden' }}>
                  <Image src={t.image} alt={t.imageAlt} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 25vw" />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(6,13,6,0.2) 0%, rgba(6,13,6,0.7) 100%)' }} />
                  <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--jsf-300)', background: 'rgba(6,13,6,0.75)', padding: '0.2rem 0.6rem', borderRadius: '100px', border: '1px solid rgba(93,214,44,0.3)' }}>● ACTIVE</span>
                  </div>
                  <div style={{ position: 'absolute', bottom: '0.75rem', left: '0.875rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>{t.flag}</span>
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: '1.25rem' }}>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.05rem', color: '#ffffff', marginBottom: '0.2rem' }}>{t.city}</h3>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginBottom: '0.3rem' }}>{t.country}</p>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', fontStyle: 'italic', marginBottom: '1rem' }}>{t.tagline}</p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.625rem', marginBottom: '1rem', paddingTop: '0.875rem', borderTop: '1px solid rgba(93,214,44,0.08)' }}>
                    <div>
                      <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>THROUGHPUT</div>
                      <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '1rem', fontWeight: 800, color: 'var(--jsf-100)' }}>{t.throughput}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>CAPACITY</div>
                      <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '1rem', fontWeight: 800, color: 'var(--jsf-100)' }}>Flexible</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginBottom: '0.875rem' }}>
                    {t.products.map(p => (
                      <span key={p} style={{ fontSize: '10px', color: 'var(--jsf-300)', background: 'rgba(93,214,44,0.07)', border: '1px solid rgba(93,214,44,0.15)', padding: '0.15rem 0.45rem', borderRadius: '4px' }}>{p}</span>
                    ))}
                  </div>
                  <Link
                    href={`/terminals#${t.anchor}`}
                    style={{ fontSize: '12px', fontWeight: 700, color: 'var(--jsf-300)', textDecoration: 'none', letterSpacing: '0.04em', display: 'inline-block', borderTop: '1px solid rgba(93,214,44,0.08)', paddingTop: '0.75rem', width: '100%' }}
                  >
                    {t.linkLabel} →
                  </Link>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
