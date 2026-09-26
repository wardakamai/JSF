import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import PageHero from '@/components/shared/PageHero';
import CTABand from '@/components/shared/CTABand';
import Steps from '@/components/shared/Steps';
import Faq, { faqJsonLd } from '@/components/shared/Faq';
import { cityPages, cityHref } from '@/lib/cities';
import { tsaSteps } from '@/lib/tsa';
import { SITE_URL, company, terminals } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return cityPages.map(c => ({ city: c.slug }));
}

function load(slug: string) {
  const page = cityPages.find(c => c.slug === slug);
  const terminal = terminals.find(t => t.anchor === slug);
  return page && terminal ? { page, terminal } : null;
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const data = load(city);
  if (!data) return {};
  const { page, terminal } = data;
  const url = `${SITE_URL}${cityHref(city)}`;
  return {
    title: { absolute: page.title },
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      siteName: 'JSF Logistics B.V.',
      locale: 'en_US',
      title: page.title,
      description: page.description,
      url,
      images: [{ url: terminal.image, alt: terminal.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [terminal.image],
    },
  };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const data = load(city);
  if (!data) notFound();
  const { page, terminal } = data;
  const url = `${SITE_URL}${cityHref(city)}`;
  const others = terminals.filter(t => t.anchor !== city);

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Oil tank storage lease in ${terminal.city}`,
    serviceType: 'Oil tank storage lease',
    description: page.description,
    url,
    image: `${SITE_URL}${terminal.image}`,
    areaServed: { '@type': 'City', name: terminal.city },
    availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${SITE_URL}/contact`, servicePhone: company.phoneSchema },
    provider: {
      '@type': 'LocalBusiness',
      name: `JSF Logistics ${terminal.city} Terminal`,
      url,
      telephone: company.phoneSchema,
      email: company.email,
      image: `${SITE_URL}${terminal.image}`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: terminal.city,
        ...(page.region ? { addressRegion: page.region } : {}),
        addressCountry: page.country,
      },
      geo: { '@type': 'GeoCoordinates', latitude: page.geo.lat, longitude: page.geo.lon },
      parentOrganization: { '@type': 'Organization', name: company.name, url: SITE_URL },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(page.faq)) }} />

      <PageHero
        crumb={`Oil storage in ${terminal.city}`}
        parents={[{ label: 'Oil Storage Terminals', href: '/terminals' }]}
        title={page.h1}
        subtitle={page.lede}
        image={terminal.image}
        imageAlt={terminal.imageAlt}
      />

      <section className="section">
        <div className="wrap split">
          <div className="col-7 prose">
            <h2 style={{ marginBottom: '1.25rem' }}>Tank storage at the {terminal.port}</h2>
            {page.intro.map(p => <p key={p.slice(0, 20)} className="muted">{p}</p>)}
            <div className="btn-row" style={{ marginTop: '1.75rem' }}>
              <Link href="/contact" className="btn btn--primary">Request storage in {terminal.city}</Link>
              <Link href="/tank-storage-agreement" className="btn btn--ghost">How our tank leases work</Link>
            </div>
          </div>
          <div className="col-5" style={{ alignSelf: 'end' }}>
            <dl className="facts facts--compact">
              <div><dt>Throughput</dt><dd>{terminal.throughput}</dd></div>
              <div><dt>Tanks</dt><dd>{terminal.tankCount}</dd></div>
              <div><dt>Lease terms</dt><dd>Short &amp; long</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="store-title">
        <div className="wrap">
          <h2 id="store-title" style={{ marginBottom: '2rem' }}>{page.storeTitle}</h2>
          <ul className="store-grid">
            {page.store.map(s => (
              <li key={s.name}>
                <h3>{s.name}</h3>
                <p className="muted">{s.note}</p>
              </li>
            ))}
          </ul>
          <p style={{ marginTop: '1.75rem' }}>
            <Link href="/products" className="link">Grades and specifications for every product</Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="connect-title">
        <div className="wrap split" style={{ alignItems: 'center' }}>
          <div className="col-6">
            <div className="media media--wide">
              <Image src={terminal.image} alt={terminal.imageAlt} fill sizes="(max-width: 860px) 100vw, 50vw" />
            </div>
          </div>
          <div className="col-6">
            <h2 id="connect-title" style={{ marginBottom: '1.25rem' }}>Getting product in and out of {terminal.city}</h2>
            <ul className="ticks" style={{ marginBottom: '1.5rem' }}>
              {page.connections.map(c => <li key={c}>{c}</li>)}
            </ul>
            <p className="muted" style={{ marginBottom: '1rem' }}>{page.shippingNote}</p>
            <Link href="/vessel-chartering" className="link">Tanker chartering for {terminal.city} cargoes</Link>
          </div>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="steps-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="steps-title">How to secure tank storage in {terminal.city}</h2>
            <Link href="/tank-storage-agreement" className="link">About our tank storage agreements</Link>
          </div>
          <Steps steps={tsaSteps} />
        </div>
      </section>

      <section className="section" aria-labelledby="faq-title">
        <div className="wrap split">
          <div className="col-4">
            <h2 id="faq-title">Questions about storage in {terminal.city}</h2>
          </div>
          <div className="col-8">
            <Faq items={page.faq} />
          </div>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="other-title" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="wrap">
          <h2 id="other-title" style={{ fontSize: '1.4rem', marginBottom: '1.25rem' }}>Our other oil storage terminals</h2>
          <ul className="btn-row" style={{ listStyle: 'none' }}>
            {others.map(t => (
              <li key={t.anchor}>
                <Link href={cityHref(t.anchor)} className="btn btn--ghost">Oil storage in {t.city}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABand
        title={`Request tank storage in ${terminal.city}.`}
        text={`Send us the product, volume and storage period for ${terminal.city}, and our team will confirm availability and reply within 24 hours.`}
      />
    </>
  );
}
