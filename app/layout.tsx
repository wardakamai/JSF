import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#060d06',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://jsf-logistics.com'),
  title: {
    default: 'JSF Logistics B.V. — Global Oil & Gas Storage & Shipping',
    template: '%s | JSF Logistics B.V.',
  },
  description:
    'JSF Logistics B.V. provides world-class oil & gas storage, marine shipping, product blending, and pipeline facilitation from strategic terminals in Rotterdam, Houston, Jurong, and Fujairah.',
  keywords: [
    'oil storage', 'gas logistics', 'petroleum storage', 'tank terminal', 'bulk liquid storage',
    'Rotterdam terminal', 'Houston terminal', 'Jurong terminal', 'Fujairah terminal',
    'JSF Logistics', 'marine shipping', 'bunker fuel', 'energy logistics',
    'crude oil storage', 'product blending', 'pipeline facilitation',
  ],
  openGraph: {
    type: 'website',
    siteName: 'JSF Logistics B.V.',
    title: 'JSF Logistics B.V. — Global Oil & Gas Storage & Shipping',
    description:
      'Strategic oil & gas storage terminals in Rotterdam, Houston, Jurong, and Fujairah. Marine shipping, product blending, and pipeline facilitation worldwide.',
    images: [
      {
        url: '/images/hero-tanker.webp',
        width: 1200,
        height: 630,
        alt: 'JSF Logistics — Global Energy Logistics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSF Logistics B.V. — Global Oil & Gas Storage',
    description:
      'Strategic oil & gas storage terminals across four global ports. Marine shipping, blending, and pipeline facilitation.',
    images: ['/images/hero-tanker.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/images/site--logoo.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/images/site--logoo.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'JSF Logistics B.V.',
  url: 'https://jsf-logistics.com',
  logo: 'https://jsf-logistics.com/images/site--logoo.png',
  description:
    'JSF Logistics B.V. is a global oil and gas storage and logistics company with terminals in Rotterdam, Houston, Jurong, and Fujairah.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Luchthavenweg 81 Unit 2.28a',
    postalCode: '5657 EA',
    addressLocality: 'Eindhoven',
    addressCountry: 'NL',
  },
  contactPoint: [
    { '@type': 'ContactPoint', telephone: '+32-678-954-564', contactType: 'customer service', email: 'info@jsf-logistics.com' },
  ],
  sameAs: ['https://www.linkedin.com/company/jsf-logistics'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Energy Logistics Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Oil Storage' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Marine Shipping' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Product Blending' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pipeline Facilitation' } },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
