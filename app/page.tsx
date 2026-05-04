import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import StatsBar from '@/components/home/StatsBar';
import ServicesGrid from '@/components/home/ServicesGrid';
import TerminalsPreview from '@/components/home/TerminalsPreview';
import AboutTeaser from '@/components/home/AboutTeaser';
import CTABanner from '@/components/home/CTABanner';

export const metadata: Metadata = {
  title: 'JSF Logistics B.V. — Global Oil & Gas Storage & Shipping',
  description:
    'JSF Logistics B.V. operates strategic oil and gas storage terminals in Rotterdam, Houston, Jurong, and Fujairah — delivering marine shipping, product blending, pipeline facilitation, and laboratory services worldwide.',
  openGraph: {
    title: 'JSF Logistics B.V. — Global Oil & Gas Storage & Shipping',
    description:
      'Four strategic terminals across Europe, Americas, Asia-Pacific, and the Middle East. Trusted partner for oil & gas storage and logistics since 2008.',
    url: 'https://jsf-logistics.com',
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
