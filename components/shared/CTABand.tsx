import Link from 'next/link';
import { company } from '@/lib/site';

interface CTABandProps {
  title?: string;
  text?: string;
}

export default function CTABand({
  title = 'Tell us what you need to store.',
  text = 'Tank leasing, shipment or product sourcing: send us the product, volume and preferred terminal, and our team will reply within 24 hours.',
}: CTABandProps) {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="wrap">
        <h2 id="cta-title">{title}</h2>
        <p>{text}</p>
        <div className="btn-row">
          <Link href="/contact" className="btn btn--ink">Request a quote</Link>
          <Link href="/services" className="btn btn--ghost">See our services</Link>
        </div>
        <p className="contact-line">
          Or call <a href={company.phoneHref}>{company.phone}</a> or email <a href={`mailto:${company.email}`}>{company.email}</a>.
        </p>
      </div>
    </section>
  );
}
