'use client';

import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' }, { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' }, { href: '/terminals', label: 'Terminals' },
  { href: '/products', label: 'Products' }, { href: '/hse', label: 'HSE' },
  { href: '/laboratory', label: 'Laboratory' }, { href: '/contact', label: 'Contact' },
];

const services = ['Oil Storage', 'Marine Shipping', 'Product Blending', 'Laboratory Testing', 'Road Transportation', 'Pipeline Facilitation'];

const terminals = [
  { flag: '🇳🇱', city: 'Rotterdam', country: 'Netherlands' },
  { flag: '🇺🇸', city: 'Houston', country: 'Texas, USA' },
  { flag: '🇸🇬', city: 'Jurong', country: 'Singapore' },
  { flag: '🇦🇪', city: 'Fujairah', country: 'UAE' },
];

const linkHover = {
  onMouseEnter: (e: React.MouseEvent) => ((e.target as HTMLElement).style.color = '#ffffff'),
  onMouseLeave: (e: React.MouseEvent) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.55)'),
};

export default function Footer() {
  return (
    <footer style={{ background: 'var(--jsf-900)', borderTop: '1px solid rgba(93,214,44,0.12)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1.5rem 3rem' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem' }}>

          {/* Col 1: Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1rem' }}>
              <Image src="/images/site--logoo.png" alt="JSF Logistics" width={38} height={38} style={{ objectFit: 'contain' }} />
              <div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '14px', color: '#ffffff' }}>JSF LOGISTICS B.V.</div>
                <div style={{ fontSize: '10px', color: 'var(--jsf-300)', letterSpacing: '0.1em' }}>ENERGY &amp; STORAGE</div>
              </div>
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '260px' }}>
              Global oil &amp; gas storage, pipeline facilitation, and product logistics from four strategic energy terminals.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {terminals.map(t => (
                <div key={t.city} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--jsf-300)', display: 'inline-block', boxShadow: '0 0 6px rgba(93,214,44,0.7)' }} />
                  <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)' }}>{t.city} <span style={{ opacity: 0.45 }}>— {t.country}</span></span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 style={{ fontFamily: 'Syne, sans-serif', fontSize: '12px', fontWeight: 700, color: 'var(--jsf-300)', letterSpacing: '0.12em', marginBottom: '1rem' }}>NAVIGATION</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navLinks.map(({ href, label }) => (
                <li key={href}><Link href={href} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.2s' }} {...linkHover}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 style={{ fontFamily: 'Syne, sans-serif', fontSize: '12px', fontWeight: 700, color: 'var(--jsf-300)', letterSpacing: '0.12em', marginBottom: '1rem' }}>OUR SERVICES</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {services.map(s => (
                <li key={s}><Link href="/services" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.2s' }} {...linkHover}>{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 style={{ fontFamily: 'Syne, sans-serif', fontSize: '12px', fontWeight: 700, color: 'var(--jsf-300)', letterSpacing: '0.12em', marginBottom: '1rem' }}>CONTACT</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <div style={{ display: 'flex', gap: '0.625rem' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--jsf-300)', flexShrink: 0, marginTop: '3px' }}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>Luchthavenweg 81 Unit 2.28a<br />5657 EA, Eindhoven<br />Netherlands</span>
              </div>
              <div style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--jsf-300)', flexShrink: 0, marginTop: '3px' }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <div>
                  <a href="mailto:info@jsf-logistics.com" style={{ display: 'block', fontSize: '13px', color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>info@jsf-logistics.com</a>
                  <a href="mailto:storage@jsf-logistics.com" style={{ display: 'block', fontSize: '13px', color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>storage@jsf-logistics.com</a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.625rem', alignItems: 'center' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--jsf-300)', flexShrink: 0 }}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.001 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>
                <a href="tel:+32678954564" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>+32 678 954-564</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(93,214,44,0.08)', padding: '1.25rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>© {new Date().getFullYear()} JSF Logistics B.V. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/contact" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="/contact" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
