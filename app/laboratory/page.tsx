import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import EnquiryForm from '@/components/shared/EnquiryForm';
import CTABand from '@/components/shared/CTABand';

export const metadata: Metadata = {
  title: 'Petroleum Lab Testing — ASTM Accredited Terminal Laboratories',
  description:
    'ASTM-accredited petroleum and marine fuel laboratories at all four JSF Logistics terminals in Rotterdam, Houston, Fujairah, and Jurong. Rapid analytical testing, independent surveying, and quality certification for every cargo.',
  keywords: ['petroleum laboratory testing', 'ASTM accredited petroleum lab', 'marine fuel analysis', 'crude oil testing', 'chemical analysis petroleum', 'bunker fuel quality testing'],
  alternates: {
    canonical: 'https://jsf-logistics.com/laboratory',
  },
  openGraph: {
    type: 'website',
    siteName: 'JSF Logistics B.V.',
    locale: 'en_US',
    title: 'Petroleum Lab Testing — ASTM Accredited Terminal Laboratories | JSF Logistics',
    description:
      'ASTM and ISO-method analytical laboratories at Rotterdam, Houston, Jurong, and Fujairah. Fast, independent petroleum and marine fuel testing with full certification.',
    url: 'https://jsf-logistics.com/laboratory',
    images: [
      {
        url: '/images/og-jsf-logistics.jpg',
        width: 1200,
        height: 630,
        alt: 'JSF Logistics ASTM Accredited Petroleum Laboratory Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Petroleum Lab Testing — ASTM Accredited Terminal Laboratories',
    description:
      'ASTM-accredited petroleum and marine fuel laboratories at Rotterdam, Houston, Fujairah, and Jurong. Fast, independent testing with full certification.',
    images: ['/images/og-jsf-logistics.jpg'],
  },
};

const services = [
  {
    title: 'Petroleum Testing',
    desc: 'Comprehensive analysis of crude oils, refined products, and fuel grades to international ASTM, IP, and ISO standards. We test flash point, viscosity, density, pour point, sulfur content, and full distillation profiles.',
    methods: ['ASTM D86 Distillation', 'ASTM D93 Flash Point', 'ASTM D445 Viscosity', 'ASTM D1298 Density', 'ASTM D4294 Sulfur'],
  },
  {
    title: 'Marine Fuel Analysis',
    desc: 'IMO 2020-compliant marine fuel testing for VLSFO, ULSFO, and residual marine fuels. We ensure every delivery meets ISO 8217:2017 specifications before vessel bunkering operations commence.',
    methods: ['ISO 8217 Compliance', 'ASTM D4294 Sulfur', 'IP 33 Ignition Quality', 'ASTM D5800 Evaporation', 'Cat Fine (Aluminum + Silicon)'],
  },
  {
    title: 'Chemical Analysis',
    desc: 'Petrochemical and specialty chemical verification including purity testing, contaminant screening, and full composition analysis for methanol, ethanol, naphtha, MTBE, xylenes, and other bulk chemicals.',
    methods: ['GC/MS Composition', 'Karl Fischer Water', 'ASTM D1747 Refractive Index', 'Chloride Screening', 'Metal Trace Analysis'],
  },
  {
    title: 'Water & Environmental',
    desc: 'Environmental water sampling and analysis for terminal effluent, ballast water, and stormwater compliance with MARPOL and local regulatory discharge standards.',
    methods: ['COD / BOD Analysis', 'Total Hydrocarbon Content', 'pH and Conductivity', 'Heavy Metal Screening', 'Ballast Water Testing'],
  },
];

const equipment = [
  { name: 'Gas Chromatograph (GC-FID)', use: 'Hydrocarbon composition' },
  { name: 'GC-MS System', use: 'Chemical identification' },
  { name: 'ICP-OES Spectrometer', use: 'Trace metal analysis' },
  { name: 'Automated Flash Point Tester', use: 'ASTM D93 / D56' },
  { name: 'Digital Viscometer (SVM)', use: 'Kinematic and dynamic' },
  { name: 'Automated Distillation Unit', use: 'ASTM D86 / D1160' },
  { name: 'X-Ray Fluorescence (XRF)', use: 'Sulfur determination' },
  { name: 'Karl Fischer Titrator', use: 'Water content' },
];

export default function LaboratoryPage() {
  return (
    <>
      <PageHero
        crumb="Laboratory Services"
        title="Petroleum laboratory testing at every terminal"
        subtitle="Our ASTM-accredited laboratories operate at all four global terminals, delivering accurate, fast, and independent quality analysis for every cargo we handle."
      />

      <section className="section">
        <div className="wrap split">
          <div className="col-7">
            <h2 style={{ marginBottom: '1rem' }}>Independent, accurate, certified.</h2>
            <p className="lede">
              Every cargo stored or shipped from JSF Logistics terminals undergoes rigorous laboratory analysis at
              receipt and discharge. Our lab results are legally binding, internationally recognized, and delivered
              digitally within hours.
            </p>
          </div>
          <div className="col-5" style={{ alignSelf: 'end' }}>
            <dl className="facts">
              <div><dt>Lab locations</dt><dd>4</dd></div>
              <div><dt>Test methods</dt><dd>50+</dd></div>
              <div><dt>Turnaround</dt><dd>24 hr</dd></div>
              <div><dt>Digital reporting</dt><dd>100%</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="areas-title">
        <div className="wrap">
          <h2 id="areas-title" style={{ marginBottom: '2.5rem' }}>Testing service areas</h2>
          <div className="cols">
            {services.map(s => (
              <div key={s.title} className="col-item">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <h4 className="small" style={{ marginBottom: '0.5rem', fontStretch: '100%' }}>Standard methods</h4>
                <ul className="ticks small">
                  {s.methods.map(m => <li key={m}>{m}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="equipment-title">
        <div className="wrap split">
          <div className="col-4">
            <h2 id="equipment-title" style={{ marginBottom: '1rem' }}>Laboratory equipment</h2>
            <p className="muted">State-of-the-art instrumentation calibrated to international traceability standards.</p>
          </div>
          <div className="col-8" style={{ overflowX: 'auto' }}>
            <table className="data-table">
              <thead>
                <tr><th scope="col">Instrument</th><th scope="col">Used for</th></tr>
              </thead>
              <tbody>
                {equipment.map(e => (
                  <tr key={e.name}><th scope="row">{e.name}</th><td>{e.use}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="sample-request" className="section section--surface" aria-labelledby="sample-title">
        <div className="wrap split">
          <div className="col-5">
            <h2 id="sample-title" style={{ marginBottom: '1rem' }}>Request a sample analysis</h2>
            <p className="muted">Submit your request and our lab team will respond within 4 business hours.</p>
          </div>
          <div className="col-7">
            <EnquiryForm kind="lab" />
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
