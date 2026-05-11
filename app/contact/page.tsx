import type { Metadata } from 'next';
import ContactPageContent from '@/components/contact/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact JSF Logistics — Request an Oil Storage Quote',
  description:
    'Contact JSF Logistics B.V. for oil storage enquiries, tank farm availability, marine shipping requests, and partnership opportunities. Response within 24 hours.',
  keywords: ['contact JSF Logistics', 'oil storage quote', 'tank farm enquiry', 'energy logistics contact', 'Rotterdam terminal contact', 'petroleum storage request'],
  alternates: {
    canonical: 'https://jsf-logistics.com/contact',
  },
  openGraph: {
    title: 'Contact JSF Logistics B.V. — Request an Oil Storage Quote',
    description:
      'Reach out for oil storage, tank farm availability, marine shipping, or product blending enquiries. Terminals in Rotterdam, Houston, Jurong, and Fujairah.',
    url: 'https://jsf-logistics.com/contact',
    images: [
      {
        url: '/images/hero-tanker.webp',
        width: 1200,
        height: 630,
        alt: 'JSF Logistics B.V. — Contact Our Oil Storage Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact JSF Logistics B.V. — Request an Oil Storage Quote',
    description:
      'Get in touch for oil storage, tank farm availability, marine shipping, or blending enquiries. Response within 24 hours.',
    images: ['/images/hero-tanker.webp'],
  },
};

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'JSF Logistics B.V.',
  url: 'https://jsf-logistics.com',
  logo: 'https://jsf-logistics.com/images/site--logoo.png',
  description: 'Oil storage and tank farm terminal operator in Rotterdam, Houston, Fujairah and Jurong.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Luchthavenweg 81 Unit 2.28a',
    postalCode: '5657 EA',
    addressLocality: 'Eindhoven',
    addressCountry: 'NL',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+32-678-954-564',
      contactType: 'customer service',
      email: 'info@jsf-logistics.com',
      availableLanguage: ['English'],
    },
  ],
  areaServed: ['Rotterdam', 'Houston', 'Fujairah', 'Jurong'],
  sameAs: ['https://www.linkedin.com/company/jsf-logistics'],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <ContactPageContent />
    </>
  );
}
