import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import SectionReveal from '@/components/shared/SectionReveal';
import Breadcrumb from '@/components/shared/Breadcrumb';
import CTABanner from '@/components/home/CTABanner';

export const metadata: Metadata = {
  title: 'Petroleum Products — Crude Oil, Fuel Oil & Chemical Storage',
  description:
    'JSF Logistics stores crude oil, fuel oil, gas oil, jet fuel, specialty chemicals, and LPG across four global tank farm terminals — with full quality management and certification at every stage.',
  keywords: ['crude oil storage', 'fuel oil bunker storage', 'gas oil diesel terminal', 'jet fuel storage', 'chemical tank storage', 'LPG storage', 'petroleum products terminal'],
  alternates: {
    canonical: 'https://jsf-logistics.com/products',
  },
  openGraph: {
    title: 'Petroleum Products — Crude Oil, Fuel Oil & Chemical Storage | JSF Logistics',
    description:
      'From crude oil to specialty chemicals — JSF Logistics manages the full range of petroleum products with precision quality assurance across Rotterdam, Houston, Fujairah, and Jurong.',
    url: 'https://jsf-logistics.com/products',
    images: [
      {
        url: '/images/hero-tanker.webp',
        width: 1200,
        height: 630,
        alt: 'JSF Logistics Petroleum Products — Crude Oil, Fuel Oil & Chemical Storage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Petroleum Products — Crude Oil, Fuel Oil & Chemical Storage',
    description:
      'Crude oil, fuel oil, gas oil, jet fuel, chemicals, and LPG storage across four global tank farm terminals.',
    images: ['/images/hero-tanker.webp'],
  },
};

const products = [
  {
    icon: '🛢️',
    title: 'Crude Oil',
    grades: ['Brent Blend', 'WTI', 'Arab Light', 'Bonny Light'],
    desc: 'We handle a full range of crude oil grades across all four terminals, providing receipt, storage, blending, and delivery services for refiners and crude traders worldwide.',
    specs: ['API Gravity: 10–45°', 'Sulfur Content: 0.1–3.5%', 'Multiple grade segregation', 'Custom heating available'],
  },
  {
    icon: '⚫',
    title: 'Fuel Oil / Bunker Fuel',
    grades: ['IFO 180', 'IFO 380', 'VLSFO 0.5%', 'ULSFO'],
    desc: 'As a leading bunkering hub operator, we stock and supply a comprehensive range of marine fuel grades compliant with IMO 2020 sulfur regulations at all four ports.',
    specs: ['VLSFO ≤0.5% sulfur', 'IMO 2020 compliant', 'In-line blending capability', 'Automated delivery'],
  },
  {
    icon: '🟡',
    title: 'Gas Oil / Diesel',
    grades: ['EN 590', 'D2', 'GASOIL 0.1%', 'ULSD'],
    desc: 'Gasoil and ultra-low-sulfur diesel (ULSD) storage and distribution services with precise quality control for both industrial and road transport applications.',
    specs: ['ULSD ≤10 ppm sulfur', 'EN 590 compliant', 'Winter and summer grades', 'Additive injection available'],
  },
  {
    icon: '✈️',
    title: 'Jet Fuel',
    grades: ['Jet A-1', 'JP-4', 'JP-8', 'TS-1'],
    desc: 'Aviation turbine fuel storage and delivery at our Rotterdam, Houston, Jurong, and Fujairah terminals, with full IATA and DEF STAN quality compliance.',
    specs: ['Jet A-1 ASTM D1655', 'DEF STAN 91-091', 'Dedicated aviation tanks', 'Filtration to ASTM D4176'],
  },
  {
    icon: '🧪',
    title: 'Chemicals & Petrochemicals',
    grades: ['Methanol', 'Ethanol', 'Naphtha', 'MTBE', 'Xylene'],
    desc: 'Specialty chemical and petrochemical storage in fully segregated, ATEX-rated tanks with vapor recovery systems and full compatibility screening.',
    specs: ['Epoxy-coated or stainless tanks', 'Vapor recovery systems', 'Nitrogen blanketing', 'Full MSDS compliance'],
  },
  {
    icon: '🔵',
    title: 'LPG & Liquefied Gas',
    grades: ['Propane', 'Butane', 'LPG Mix', 'LNG'],
    desc: 'Refrigerated and pressurized LPG storage and ship-to-ship transfer services at our Houston and Fujairah terminals, catering to petrochemical feedstock and domestic energy markets.',
    specs: ['Pressurized sphere storage', 'Refrigerated LPG tanks', 'Ship-to-ship transfers', 'ISO 8217 specification'],
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        label="What We Store"
        title="Products We"
        highlight="Handle & Store"
        subtitle="From crude oil to specialty chemicals, our terminals accommodate the full spectrum of petroleum products with precision quality management at every step."
      />
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Petroleum Products' },
      ]} />

      <section className="section-pad" style={{ background: 'var(--jsf-900)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {products.map((p, i) => (
              <SectionReveal key={p.title} delay={i * 0.07}>
                <div className="card-hover" style={{
                  background: 'var(--jsf-800)',
                  border: '1px solid rgba(93,214,44,0.12)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                }}>
                  {/* Top bar */}
                  <div style={{ background: 'var(--jsf-700)', padding: '1.5rem', borderBottom: '1px solid rgba(93,214,44,0.1)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '2.5rem' }}>{p.icon}</span>
                    <div>
                      <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.15rem', color: 'var(--jsf-100)' }}>{p.title}</h3>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginTop: '0.375rem' }}>
                        {p.grades.map(g => (
                          <span key={g} style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)', background: 'rgba(93,214,44,0.1)', padding: '0.15rem 0.4rem', borderRadius: '3px' }}>{g}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div style={{ padding: '1.5rem' }}>
                    <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '1.25rem' }}>{p.desc}</p>

                    <h4 style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(93,214,44,0.6)', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>SPECIFICATIONS</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {p.specs.map(s => (
                        <li key={s} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--jsf-300)', flexShrink: 0, display: 'inline-block' }} />
                          <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal style={{ marginTop: '4rem', textAlign: 'center' }}>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem' }}>
              Don&apos;t see your product listed? We work with clients to accommodate specialty requirements.
            </p>
            <Link href="/contact" style={{
              padding: '0.875rem 2rem',
              background: 'var(--jsf-600)',
              color: 'var(--jsf-100)',
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: '14px',
              borderRadius: '8px',
              textDecoration: 'none',
              letterSpacing: '0.04em',
            }}>
              DISCUSS YOUR PRODUCT REQUIREMENTS →
            </Link>
          </SectionReveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
