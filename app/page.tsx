import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import TerminalClocks from '@/components/shared/TerminalClocks';
import TerminalCards from '@/components/home/TerminalCards';
import CTABand from '@/components/shared/CTABand';
import { services } from '@/lib/site';

export const metadata: Metadata = {
  title: {
    absolute: 'JSF Logistics B.V. | Oil Storage & Tank Farm Terminals | Rotterdam, Houston, Fujairah, Jurong',
  },
  description:
    'JSF Logistics B.V. operates strategic oil storage and tank farm terminals in Rotterdam, Houston, Fujairah and Jurong. Reliable liquid bulk storage for crude oil and petroleum products.',
  keywords: [
    'oil storage terminal', 'tank farm Rotterdam', 'oil storage Houston',
    'Fujairah oil terminal', 'Jurong tank farm', 'liquid bulk storage',
    'petroleum storage', 'crude oil terminal', 'oil logistics',
  ],
  alternates: {
    canonical: 'https://jsf-logistics.com',
  },
  openGraph: {
    type: 'website',
    siteName: 'JSF Logistics B.V.',
    locale: 'en_US',
    title: 'JSF Logistics B.V. | Oil Storage & Tank Farm Terminals | Rotterdam, Houston, Fujairah, Jurong',
    description:
      'Strategic oil storage and tank farm terminals in Rotterdam, Houston, Fujairah and Jurong. Trusted liquid bulk storage partner for crude oil and petroleum products since 2008.',
    url: 'https://jsf-logistics.com',
    images: [
      {
        url: '/images/og-jsf-logistics.jpg',
        width: 1200,
        height: 630,
        alt: 'JSF Logistics B.V. — Global Oil Storage & Tank Farm Terminals',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSF Logistics B.V. | Oil Storage & Tank Farm Terminals',
    description:
      'Strategic oil storage and tank farm terminals in Rotterdam, Houston, Fujairah and Jurong. Liquid bulk storage for crude oil and petroleum products.',
    images: ['/images/og-jsf-logistics.jpg'],
  },
};

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <h1>Oil &amp; gas storage at four of the world&rsquo;s busiest energy ports.</h1>
            <p className="lede">
              JSF Logistics B.V. leases tank capacity at terminals in Rotterdam, Houston, Jurong and Fujairah,
              and handles the shipping, blending and testing around it for producers, traders and refiners
              worldwide.
            </p>
            <div className="btn-row">
              <Link href="/terminals" className="btn btn--primary">Explore our terminals</Link>
              <Link href="/contact" className="btn btn--ghost">Request a quote</Link>
            </div>
          </div>
          <div className="hero-media">
            <Image
              src="/images/tanks-closeup.webp"
              alt="White oil storage tanks with green stairways at a JSF Logistics tank farm terminal"
              fill
              priority
              sizes="(max-width: 860px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <TerminalClocks />

      <section className="section">
        <div className="wrap split">
          <div className="col-7 prose">
            <h2 style={{ marginBottom: '1.25rem' }}>Storage run with the books open.</h2>
            <p className="lede">
              JSF Logistics B.V. was founded on a belief that oil &amp; gas storage and logistics could be done
              with greater transparency, flexibility, and accountability than the industry standard.
            </p>
            <p className="muted">
              With terminals in Europe, the Americas, Southeast Asia, and the Middle East, we provide
              uninterrupted supply chain continuity for producers, traders, and refiners worldwide.
            </p>
            <p style={{ marginTop: '1.5rem' }}><Link href="/about" className="link">About JSF Logistics</Link></p>
          </div>
          <div className="col-5" style={{ alignSelf: 'end' }}>
            <dl className="facts">
              <div><dt>Strategic terminals</dt><dd>4</dd></div>
              <div><dt>Vessel operations a year</dt><dd>250+</dd></div>
              <div><dt>Partners in 40+ countries</dt><dd>500+</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="services-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="services-title">What we do at each terminal</h2>
            <Link href="/services" className="link">All oil storage &amp; logistics services</Link>
          </div>
          <ul className="index-list">
            {services.map(s => (
              <li key={s.anchor}>
                <Link href={s.href ?? `/services#${s.anchor}`}>
                  <h3>{s.title}</h3>
                  <p>{s.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="terminals-title">
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2 id="terminals-title" style={{ marginBottom: '0.75rem' }}>Four ports. Every ocean.</h2>
              <p className="muted">Each terminal has deep-water berths, its own laboratory and room for multi-product storage.</p>
            </div>
            <Link href="/terminals" className="link">Compare all terminals</Link>
          </div>
          <TerminalCards />
        </div>
      </section>

      <section className="section section--surface">
        <div className="wrap split" style={{ alignItems: 'center' }}>
          <div className="col-6">
            <div className="media media--wide">
              <Image
                src="/images/about-tanks.jpg"
                alt="Aerial view of a JSF Logistics tank farm lit up at dusk"
                fill
                sizes="(max-width: 860px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="col-6">
            <h2 style={{ marginBottom: '1rem' }}>Every cargo tested, every site audited.</h2>
            <p className="muted" style={{ marginBottom: '1.5rem' }}>
              Accredited laboratories at all four terminals test product at receipt and discharge. Our operations
              are certified to ISO 9001, ISO 14001 and ISO 45001, and audited every year.
            </p>
            <ul className="ticks" style={{ marginBottom: '1.75rem' }}>
              <li>ASTM, IP and ISO test methods with digital certificates</li>
              <li>Permit-to-work and HAZOP reviews on every critical task</li>
              <li>Vapor recovery units at all tank farms</li>
            </ul>
            <div className="btn-row" style={{ gap: '0.75rem 1.5rem' }}>
              <Link href="/laboratory" className="link">Laboratory services</Link>
              <Link href="/hse" className="link">Health, safety &amp; environment</Link>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
