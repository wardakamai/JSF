import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import EnquiryForm from '@/components/shared/EnquiryForm';
import { company, terminals } from '@/lib/site';

export default function ContactPageContent() {
  return (
    <>
      <PageHero
        crumb="Contact Us"
        title="Request an oil storage quote"
        subtitle="We respond to every enquiry within 24 hours. Whether you need storage, shipment, sourcing, or simply want to understand your options, we're here."
      />

      <section className="section">
        <div className="wrap split">
          <div className="col-7">
            <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Send us a message</h2>
            <p className="muted" style={{ marginBottom: '1.75rem' }}>
              Tell us the product, volume and preferred terminal, and a member of our team will get back to you.
            </p>
            <EnquiryForm kind="contact" />
          </div>

          <aside className="col-5" aria-label="Contact details">
            <div className="contact-card">
              <h2>Head office</h2>
              <address>
                {company.street}<br />
                {company.postalCode} {company.city}<br />
                {company.country}
              </address>
            </div>
            <div className="contact-card">
              <h2>Email and phone</h2>
              <p><a className="link" href={`mailto:${company.email}`}>{company.email}</a></p>
              <p><a className="link" href={`mailto:${company.storageEmail}`}>{company.storageEmail}</a></p>
              <p style={{ marginTop: '0.5rem' }}><a className="link" href={company.phoneHref}>{company.phone}</a></p>
              <p className="muted small" style={{ marginTop: '0.75rem' }}>We respond to every enquiry within 24 hours, Monday to Sunday.</p>
            </div>
            <div className="contact-card">
              <h2>Terminal locations</h2>
              <ul style={{ listStyle: 'none', display: 'grid', gap: '0.4rem' }}>
                {terminals.map(t => (
                  <li key={t.anchor}>
                    <Link href={`/terminals#${t.anchor}`} className="link">{t.city}</Link>
                    <span className="muted">, {t.region}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
