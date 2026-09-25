import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import CTABand from '@/components/shared/CTABand';

export const metadata: Metadata = {
  title: 'Petroleum Products — Crude Oil, Fuel Oil & Chemical Storage',
  description:
    'JSF Logistics stores crude oil, fuel oil, gas oil, jet fuel, specialty chemicals, and LPG across four global tank farm terminals — with full quality management and certification at every stage.',
  keywords: ['crude oil storage', 'fuel oil bunker storage', 'gas oil diesel terminal', 'jet fuel storage', 'chemical tank storage', 'LPG storage', 'petroleum products terminal'],
  alternates: {
    canonical: 'https://jsf-logistics.com/products',
  },
  openGraph: {
    type: 'website',
    siteName: 'JSF Logistics B.V.',
    locale: 'en_US',
    title: 'Petroleum Products — Crude Oil, Fuel Oil & Chemical Storage | JSF Logistics',
    description:
      'From crude oil to specialty chemicals — JSF Logistics manages the full range of petroleum products with precision quality assurance across Rotterdam, Houston, Fujairah, and Jurong.',
    url: 'https://jsf-logistics.com/products',
    images: [
      {
        url: '/images/og-jsf-logistics.jpg',
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
    images: ['/images/og-jsf-logistics.jpg'],
  },
};

const products = [
  {
    title: 'Crude Oil',
    grades: ['Brent Blend', 'WTI', 'Arab Light', 'Bonny Light'],
    desc: 'We handle a full range of crude oil grades across all four terminals, providing receipt, storage, blending, and delivery services for refiners and crude traders worldwide.',
    specs: ['API Gravity: 10–45°', 'Sulfur Content: 0.1–3.5%', 'Multiple grade segregation', 'Custom heating available'],
  },
  {
    title: 'Fuel Oil / Bunker Fuel',
    grades: ['IFO 180', 'IFO 380', 'VLSFO 0.5%', 'ULSFO'],
    desc: 'As a leading bunkering hub operator, we stock and supply a comprehensive range of marine fuel grades compliant with IMO 2020 sulfur regulations at all four ports.',
    specs: ['VLSFO ≤0.5% sulfur', 'IMO 2020 compliant', 'In-line blending capability', 'Automated delivery'],
  },
  {
    title: 'Gas Oil / Diesel',
    grades: ['EN 590', 'D2', 'GASOIL 0.1%', 'ULSD'],
    desc: 'Gasoil and ultra-low-sulfur diesel (ULSD) storage and distribution services with precise quality control for both industrial and road transport applications.',
    specs: ['ULSD ≤10 ppm sulfur', 'EN 590 compliant', 'Winter and summer grades', 'Additive injection available'],
  },
  {
    title: 'Jet Fuel',
    grades: ['Jet A-1', 'JP-4', 'JP-8', 'TS-1'],
    desc: 'Aviation turbine fuel storage and delivery at our Rotterdam, Houston, Jurong, and Fujairah terminals, with full IATA and DEF STAN quality compliance.',
    specs: ['Jet A-1 ASTM D1655', 'DEF STAN 91-091', 'Dedicated aviation tanks', 'Filtration to ASTM D4176'],
  },
  {
    title: 'Chemicals & Petrochemicals',
    grades: ['Methanol', 'Ethanol', 'Naphtha', 'MTBE', 'Xylene'],
    desc: 'Specialty chemical and petrochemical storage in fully segregated, ATEX-rated tanks with vapor recovery systems and full compatibility screening.',
    specs: ['Epoxy-coated or stainless tanks', 'Vapor recovery systems', 'Nitrogen blanketing', 'Full MSDS compliance'],
  },
  {
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
        crumb="Petroleum Products"
        title="Petroleum products we store and handle"
        subtitle="From crude oil to specialty chemicals, our terminals accommodate the full spectrum of petroleum products with precision quality management at every step."
        image="/images/hero-tanks.jpg"
        imageAlt="Large petroleum storage tanks at a JSF Logistics terminal under a clear sky"
      />

      <div className="wrap">
        {products.map(p => (
          <section key={p.title} className="product-row" aria-labelledby={`p-${p.title.replace(/\W+/g, '-')}`}>
            <div>
              <h2 id={`p-${p.title.replace(/\W+/g, '-')}`}>{p.title}</h2>
              <ul className="inline-list" aria-label="Grades">
                {p.grades.map(g => <li key={g}>{g}</li>)}
              </ul>
            </div>
            <p className="muted">{p.desc}</p>
            <div>
              <h3>Specifications</h3>
              <ul className="ticks">
                {p.specs.map(sp => <li key={sp}>{sp}</li>)}
              </ul>
            </div>
          </section>
        ))}

        <div className="section" style={{ paddingTop: '3rem' }}>
          <p className="lede" style={{ marginBottom: '1.25rem' }}>
            Don&apos;t see your product listed? We work with clients to accommodate specialty requirements.
          </p>
          <Link href="/contact" className="btn btn--primary">Discuss your product requirements</Link>
        </div>
      </div>

      <CTABand />
    </>
  );
}
