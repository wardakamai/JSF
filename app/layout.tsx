import type { Metadata, Viewport } from 'next';
import { Archivo } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ImpersonationNotice from '@/components/shared/ImpersonationNotice';
import WhatsAppButton from '@/components/shared/WhatsAppButton';

const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  display: 'swap',
  variable: '--font-archivo',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1b7a38',
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
    locale: 'en_US',
    url: 'https://jsf-logistics.com',
    title: 'JSF Logistics B.V. — Global Oil & Gas Storage & Shipping',
    description:
      'Strategic oil & gas storage terminals in Rotterdam, Houston, Jurong, and Fujairah. Marine shipping, product blending, and pipeline facilitation worldwide.',
    images: [
      {
        url: '/images/og-jsf-logistics.jpg',
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
    images: ['/images/og-jsf-logistics.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/images/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: { url: '/images/apple-touch-icon.png', sizes: '180x180' },
  },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'JSF Logistics B.V.',
  url: 'https://jsf-logistics.com',
  inLanguage: 'en',
  publisher: { '@type': 'Organization', name: 'JSF Logistics B.V.', url: 'https://jsf-logistics.com' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'JSF Logistics B.V.',
  url: 'https://jsf-logistics.com',
  logo: 'https://jsf-logistics.com/images/logo-512.png',
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
    <html lang="en" className={archivo.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ImpersonationNotice />
      </body>
    </html>
  );
}
