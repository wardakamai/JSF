import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import SectionReveal from '@/components/shared/SectionReveal';
import CTABanner from '@/components/home/CTABanner';

export const metadata: Metadata = {
  title: 'Laboratory Services',
  description:
    'ASTM-accredited petroleum and marine fuel laboratories at all four JSF Logistics terminals. Rapid analytical testing, independent surveying, and quality certification for every cargo.',
  keywords: ['petroleum laboratory testing', 'ASTM accredited lab', 'marine fuel analysis', 'crude oil testing', 'chemical analysis petroleum', 'bunker fuel quality'],
  openGraph: {
    title: 'Accredited Laboratory Services — JSF Logistics B.V.',
    description:
      'ASTM and ISO-method analytical laboratories at Rotterdam, Houston, Jurong, and Fujairah. Fast, independent petroleum and marine fuel testing with full certification.',
    url: 'https://jsf-logistics.com/laboratory',
  },
};

const services = [
  {
    icon: '🛢️',
    title: 'Petroleum Testing',
    desc: 'Comprehensive analysis of crude oils, refined products, and fuel grades to international ASTM, IP, and ISO standards. We test flash point, viscosity, density, pour point, sulfur content, and full distillation profiles.',
    methods: ['ASTM D86 Distillation', 'ASTM D93 Flash Point', 'ASTM D445 Viscosity', 'ASTM D1298 Density', 'ASTM D4294 Sulfur'],
  },
  {
    icon: '⚓',
    title: 'Marine Fuel Analysis',
    desc: 'IMO 2020-compliant marine fuel testing for VLSFO, ULSFO, and residual marine fuels. We ensure every delivery meets ISO 8217:2017 specifications before vessel bunkering operations commence.',
    methods: ['ISO 8217 Compliance', 'ASTM D4294 Sulfur', 'IP 33 Ignition Quality', 'ASTM D5800 Evaporation', 'Cat Fine (Aluminum + Silicon)'],
  },
  {
    icon: '🧬',
    title: 'Chemical Analysis',
    desc: 'Petrochemical and specialty chemical verification including purity testing, contaminant screening, and full composition analysis for methanol, ethanol, naphtha, MTBE, xylenes, and other bulk chemicals.',
    methods: ['GC/MS Composition', 'Karl Fischer Water', 'ASTM D1747 Refractive Index', 'Chloride Screening', 'Metal Trace Analysis'],
  },
  {
    icon: '💧',
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
        label="Quality Assurance"
        title="World-Class"
        highlight="Laboratory Services"
        subtitle="Our ASTM-accredited laboratories operate at all four global terminals, delivering accurate, fast, and independent quality analysis for every cargo we handle."
      />

      {/* Intro */}
      <section style={{ background: 'var(--jsf-800)', padding: '5rem 1.5rem', borderBottom: '1px solid rgba(93,214,44,0.1)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            <SectionReveal>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--jsf-100)', marginBottom: '1.25rem', lineHeight: 1.15 }}>
                Independent. Accurate.<br /><span style={{ color: 'rgba(255,255,255,0.6)' }}>Certified.</span>
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
                Every cargo stored or shipped from JSF Logistics terminals undergoes rigorous laboratory analysis at receipt and discharge. Our lab results are legally binding, internationally recognized, and delivered digitally within hours.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[
                  { val: '4', label: 'Lab locations' },
                  { val: '50+', label: 'Test methods' },
                  { val: '24hr', label: 'Turnaround' },
                  { val: '100%', label: 'Digital reporting' },
                ].map(s => (
                  <div key={s.label} style={{ background: 'var(--jsf-700)', borderRadius: '12px', padding: '1.25rem', textAlign: 'center', border: '1px solid rgba(93,214,44,0.1)' }}>
                    <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.75rem', color: 'var(--jsf-100)', marginBottom: '0.25rem' }}>{s.val}</div>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="section-pad" style={{ background: 'var(--jsf-900)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <SectionReveal style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: 'var(--jsf-100)' }}>
              Testing <span style={{ color: 'rgba(255,255,255,0.6)' }}>Service Areas</span>
            </h2>
          </SectionReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {services.map((s, i) => (
              <SectionReveal key={s.title} delay={i * 0.08}>
                <div className="card-hover" style={{ background: 'var(--jsf-800)', border: '1px solid rgba(93,214,44,0.12)', borderRadius: '16px', padding: '2rem' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{s.icon}</div>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.1rem', color: 'var(--jsf-100)', marginBottom: '0.75rem' }}>{s.title}</h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '1.25rem' }}>{s.desc}</p>
                  <h4 style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(93,214,44,0.6)', letterSpacing: '0.12em', marginBottom: '0.625rem' }}>STANDARD METHODS</h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                    {s.methods.map(m => (
                      <li key={m} style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--jsf-300)', flexShrink: 0 }} />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="section-pad" style={{ background: 'var(--jsf-800)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <SectionReveal style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--jsf-100)' }}>
              Laboratory <span style={{ color: 'rgba(255,255,255,0.6)' }}>Equipment</span>
            </h2>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginTop: '0.75rem' }}>State-of-the-art instrumentation calibrated to international traceability standards</p>
          </SectionReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {equipment.map((e, i) => (
              <SectionReveal key={e.name} delay={i * 0.05}>
                <div style={{ background: 'var(--jsf-700)', borderRadius: '12px', padding: '1.25rem', border: '1px solid rgba(93,214,44,0.1)' }}>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '14px', color: 'var(--jsf-100)', marginBottom: '0.375rem' }}>{e.name}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>{e.use}</div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sample request form */}
      <section className="section-pad" style={{ background: 'var(--jsf-900)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 1.5rem' }}>
          <SectionReveal style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--jsf-100)', marginBottom: '0.75rem' }}>
              Request a <span style={{ color: 'rgba(255,255,255,0.6)' }}>Sample Analysis</span>
            </h2>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>Submit your request and our lab team will respond within 4 business hours.</p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { label: 'Full Name', type: 'text', name: 'name', placeholder: 'Your full name' },
                { label: 'Company', type: 'text', name: 'company', placeholder: 'Your company name' },
                { label: 'Email Address', type: 'email', name: 'email', placeholder: 'your@company.com' },
                { label: 'Sample Type', type: 'text', name: 'sample', placeholder: 'e.g. VLSFO, Crude Oil, Methanol' },
              ].map(f => (
                <div key={f.name}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>{f.label}</label>
                  <input type={f.type} name={f.name} placeholder={f.placeholder} style={{
                    width: '100%', background: 'var(--jsf-800)', border: '1px solid rgba(93,214,44,0.2)',
                    borderRadius: '8px', padding: '0.75rem 1rem', color: 'var(--jsf-100)', fontSize: '14px',
                    outline: 'none', transition: 'border-color 0.2s',
                  }} />
                </div>
              ))}
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>Additional Notes</label>
                <textarea name="message" placeholder="Describe your analysis requirements, test parameters, or urgency..." rows={4} style={{
                  width: '100%', background: 'var(--jsf-800)', border: '1px solid rgba(93,214,44,0.2)',
                  borderRadius: '8px', padding: '0.75rem 1rem', color: 'var(--jsf-100)', fontSize: '14px',
                  outline: 'none', resize: 'vertical', fontFamily: 'Inter, sans-serif',
                }} />
              </div>
              <button type="submit" style={{
                padding: '0.875rem', background: 'var(--jsf-100)', color: 'var(--jsf-900)',
                fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '14px', letterSpacing: '0.04em',
                borderRadius: '8px', border: 'none', cursor: 'pointer', transition: 'background 0.2s',
              }}>
                SUBMIT ANALYSIS REQUEST →
              </button>
            </form>
          </SectionReveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
