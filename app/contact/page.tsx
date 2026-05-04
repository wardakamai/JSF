import type { Metadata } from 'next';
import ContactPageContent from '@/components/contact/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with JSF Logistics B.V. — reach our team for oil storage enquiries, terminal availability, shipping requests, and partnership opportunities. Response within 24 hours.',
  keywords: ['contact JSF Logistics', 'oil storage enquiry', 'energy logistics contact', 'Rotterdam terminal contact', 'request a quote petroleum'],
  openGraph: {
    title: 'Contact JSF Logistics B.V. — Get a Storage Quote',
    description:
      'Reach out for oil and gas storage, marine shipping, or product blending enquiries. Based in Eindhoven, Netherlands — terminals in Rotterdam, Houston, Jurong, and Fujairah.',
    url: 'https://jsf-logistics.com/contact',
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
