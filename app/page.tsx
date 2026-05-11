import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import StatsBar from '@/components/home/StatsBar';
import ServicesGrid from '@/components/home/ServicesGrid';
import TerminalsPreview from '@/components/home/TerminalsPreview';
import AboutTeaser from '@/components/home/AboutTeaser';
import CTABanner from '@/components/home/CTABanner';

export const metadata: Metadata = {
  title: {
    absolute: 'JSF Logistics B.V. | Oil Storage & Tank Farm Terminals | Rotterdam, Houston, Fujairah, Jurong',
  },
  description:
    'JSF Logistics B.V. operates strategic oil storage and tank farm terminals in Rotterdam, Houston, Fujairah and Jurong. Reliable liquid bulk storage for crude oil and petroleum products.',
  keywords: [
    'oil storage terminal', 'tank farm Rotterdam', 'oil storage Houston',
    'Fujairah oil terminal', 'Jurong tank farm', 'liquid bulk storage',
    'petroleum storage', 'crude oil terminal', 'oil logistics',
  ],
  alternates: {
    canonical: 'https://jsf-logistics.com',
  },
  openGraph: {
    title: 'JSF Logistics B.V. | Oil Storage & Tank Farm Terminals | Rotterdam, Houston, Fujairah, Jurong',
    description:
      'Strategic oil storage and tank farm terminals in Rotterdam, Houston, Fujairah and Jurong. Trusted liquid bulk storage partner for crude oil and petroleum products since 2008.',
    url: 'https://jsf-logistics.com',
    images: [
      {
        url: '/images/hero-tanker.webp',
        width: 1200,
        height: 630,
        alt: 'JSF Logistics B.V. — Global Oil Storage & Tank Farm Terminals',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSF Logistics B.V. | Oil Storage & Tank Farm Terminals',
    description:
      'Strategic oil storage and tank farm terminals in Rotterdam, Houston, Fujairah and Jurong. Liquid bulk storage for crude oil and petroleum products.',
    images: ['/images/hero-tanker.webp'],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesGrid />
      <TerminalsPreview />
      <AboutTeaser />
      <CTABanner />
    </>
  );
}
