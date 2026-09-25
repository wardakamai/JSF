import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap prose">
        <h1 style={{ marginBottom: '1rem' }}>This page doesn&apos;t exist.</h1>
        <p className="lede" style={{ marginBottom: '2rem' }}>
          The link may be old or mistyped. Try one of these instead.
        </p>
        <div className="btn-row">
          <Link href="/" className="btn btn--primary">Go to the home page</Link>
          <Link href="/terminals" className="btn btn--ghost">See our terminals</Link>
          <Link href="/contact" className="btn btn--ghost">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
