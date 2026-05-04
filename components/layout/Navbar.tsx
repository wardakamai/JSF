'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/terminals', label: 'Terminals' },
  { href: '/products', label: 'Products' },
  { href: '/hse', label: 'HSE' },
  { href: '/laboratory', label: 'Laboratory' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  /* Entrance slide-down on first mount */
  useEffect(() => {
    gsap.from(headerRef.current, {
      y: -80, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.1,
    });
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header ref={headerRef} style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      transition: 'background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease',
      background: scrolled ? 'rgba(6,13,6,0.96)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(93,214,44,0.15)' : '1px solid transparent',
    }}>
      <nav className="nav-inner" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '92px' }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', textDecoration: 'none' }}>
          <Image
            src="/images/site--logoo.png"
            alt="JSF Logistics Logo"
            width={52}
            height={52}
            style={{ objectFit: 'contain' }}
            priority
          />
          <div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '15px', color: '#ffffff', lineHeight: 1.1, letterSpacing: '0.02em' }}>JSF LOGISTICS</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: 'var(--jsf-300)', letterSpacing: '0.1em', lineHeight: 1 }}>ENERGY &amp; STORAGE B.V.</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex" style={{ alignItems: 'center', gap: '0.125rem' }}>
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link key={href} href={href} style={{
                padding: '0.375rem 0.75rem',
                fontSize: '13px',
                fontWeight: active ? 600 : 400,
                color: active ? 'var(--jsf-100)' : 'rgba(255,255,255,0.65)',
                textDecoration: 'none',
                borderRadius: '6px',
                transition: 'color 0.2s, background 0.2s',
                background: active ? 'rgba(210,255,40,0.08)' : 'transparent',
                letterSpacing: '0.03em',
              }}
              onMouseEnter={e => { if (!active) (e.target as HTMLElement).style.color = '#ffffff'; }}
              onMouseLeave={e => { if (!active) (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.65)'; }}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* CTA + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Link href="/contact" className="hidden lg:block" style={{
            padding: '0.5rem 1.25rem',
            background: 'var(--jsf-100)',
            color: 'var(--jsf-900)',
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: '13px',
            letterSpacing: '0.05em',
            borderRadius: '6px',
            textDecoration: 'none',
            transition: 'background 0.2s, transform 0.15s',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#e8ff60'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--jsf-100)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
          >
            GET A QUOTE →
          </Link>

          <button onClick={() => setMenuOpen(v => !v)} className="lg:hidden"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', color: '#ffffff' }}
            aria-label="Toggle menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen
                ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={{ background: 'rgba(6,13,6,0.98)', backdropFilter: 'blur(14px)', borderTop: '1px solid rgba(93,214,44,0.12)', padding: '1rem 1.5rem 1.5rem' }}>
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} style={{
              display: 'block', padding: '0.75rem 0', fontSize: '15px',
              fontWeight: pathname === href ? 700 : 400,
              color: pathname === href ? 'var(--jsf-100)' : 'rgba(255,255,255,0.75)',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(93,214,44,0.08)',
            }}>{label}</Link>
          ))}
          <Link href="/contact" style={{
            display: 'block', marginTop: '1rem',
            padding: '0.75rem 1.5rem',
            background: 'var(--jsf-100)', color: 'var(--jsf-900)',
            fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '14px',
            borderRadius: '6px', textDecoration: 'none', textAlign: 'center',
          }}>GET A QUOTE →</Link>
        </div>
      )}
    </header>
  );
}
