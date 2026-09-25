import Link from 'next/link';
import Image from 'next/image';
import { company, navLinks, services, terminals } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Link href="/" className="brand" style={{ marginBottom: '1rem' }}>
            <Image src="/images/logo.png" alt="" width={56} height={34} />
            <span className="brand-name">JSF Logistics B.V.</span>
          </Link>
          <p className="muted" style={{ maxWidth: '22em', marginBottom: '1rem' }}>
            Oil &amp; gas storage, pipeline facilitation and product logistics from four terminals.
          </p>
          <address>
            {company.street}<br />
            {company.postalCode} {company.city}<br />
            {company.country}
          </address>
        </div>

        <div>
          <h2>Company</h2>
          <ul>
            <li><Link href="/">Home</Link></li>
            {navLinks.map(({ href, label }) => (
              <li key={href}><Link href={href}>{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Services</h2>
          <ul>
            {services.map(s => (
              <li key={s.anchor}><Link href={`/services#${s.anchor}`}>{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Contact</h2>
          <ul>
            <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
            <li><a href={`mailto:${company.storageEmail}`}>{company.storageEmail}</a></li>
            <li><a href={company.phoneHref}>{company.phone}</a></li>
            <li><a href={company.linkedin} rel="noopener">LinkedIn</a></li>
          </ul>
          <h2 style={{ marginTop: '1.5rem' }}>Terminals</h2>
          <ul>
            {terminals.map(t => (
              <li key={t.anchor}><Link href={`/terminals#${t.anchor}`}>{t.city}, {t.country}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="wrap footer-base">
        <span>© {new Date().getFullYear()} {company.name} All rights reserved.</span>
        <span>Terminals in Rotterdam, Houston, Jurong and Fujairah</span>
      </div>
    </footer>
  );
}
