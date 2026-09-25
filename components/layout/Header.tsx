'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navLinks } from '@/lib/site';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (href: string) => pathname === href || pathname === `${href}/`;

  return (
    <header className="site-header">
      <div className="wrap">
        <Link href="/" className="brand">
          <Image src="/images/logo.png" alt="" width={56} height={34} priority />
          <span className="brand-name">
            JSF Logistics
            <span className="brand-sub">Energy &amp; storage B.V.</span>
          </span>
        </Link>

        <nav className="nav" aria-label="Main">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} aria-current={isActive(href) ? 'page' : undefined}>
              {label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn btn--primary header-cta">Request a quote</Link>

        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(v => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      <nav id="mobile-nav" className="mobile-nav" data-open={open} aria-label="Mobile">
        <ul>
          <li><Link href="/" aria-current={pathname === '/' ? 'page' : undefined}>Home</Link></li>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} aria-current={isActive(href) ? 'page' : undefined}>{label}</Link>
            </li>
          ))}
          <li><Link href="/contact" className="btn btn--primary">Request a quote</Link></li>
        </ul>
      </nav>
    </header>
  );
}
