export const SITE_URL = 'https://jsf-logistics.com';

export const company = {
  name: 'JSF Logistics B.V.',
  street: 'Luchthavenweg 81 Unit 2.28a',
  postalCode: '5657 EA',
  city: 'Eindhoven',
  country: 'Netherlands',
  phone: '+32 678 954-564',
  phoneHref: 'tel:+32678954564',
  phoneSchema: '+32-678-954-564',
  whatsapp: '32460245595',
  whatsappDisplay: '+32 460 24 55 95',
  email: 'info@jsf-logistics.com',
  storageEmail: 'storage@jsf-logistics.com',
  linkedin: 'https://www.linkedin.com/company/jsf-logistics',
};

export const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/terminals', label: 'Terminals' },
  { href: '/products', label: 'Products' },
  { href: '/laboratory', label: 'Laboratory' },
  { href: '/hse', label: 'HSE' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export type Terminal = {
  anchor: string;
  city: string;
  port: string;
  country: string;
  region: string;
  tagline: string;
  timeZone: string;
  lon: number;
  image: string;
  imageAlt: string;
  throughput: string;
  tankCount: string;
  products: string[];
  description: string;
  highlights: string[];
};

export const terminals: Terminal[] = [
  {
    anchor: 'rotterdam',
    city: 'Rotterdam',
    port: 'Port of Rotterdam',
    country: 'Netherlands',
    region: 'Netherlands, Europe',
    tagline: "Europe's largest energy hub",
    timeZone: 'Europe/Amsterdam',
    lon: 4.48,
    image: '/images/terminal-rotterdam.jpg',
    imageAlt: 'JSF Logistics oil storage tank farm at the Port of Rotterdam, Netherlands',
    throughput: '400M+ MT/year',
    tankCount: '40+',
    products: ['Crude Oil', 'Fuel Oil', 'Gasoil', 'Jet Fuel', 'Chemicals', 'Naphtha', 'Bitumen', 'LNG'],
    description:
      'Our Rotterdam terminal provides access to the largest petrochemical complex in Europe and connects directly to the Rhine waterway inland distribution network. As a cornerstone of European energy supply, Rotterdam offers unmatched pipeline, vessel, rail, and truck connectivity.',
    highlights: ['Pipeline connection to Rhine network', 'VLCC-capable berths', '24/7 operations', 'ISO 9001 certified'],
  },
  {
    anchor: 'houston',
    city: 'Houston',
    port: 'Port of Houston',
    country: 'USA',
    region: 'Texas, USA',
    tagline: "America's energy trading centre",
    timeZone: 'America/Chicago',
    lon: -95.24,
    image: '/images/terminal-houston.jpg',
    imageAlt: 'JSF Logistics liquid bulk terminal at the Port of Houston, Texas — crude oil and LPG storage',
    throughput: '240M+ MT/year',
    tankCount: '25+',
    products: ['Crude Oil', 'LPG', 'Refined Products', 'Chemicals', 'Bitumen', 'Jet Fuel', 'Gasoline', 'Ethanol'],
    description:
      'Houston is the energy capital of North America. Our terminal on the Gulf Coast provides direct access to the US domestic refining complex, Gulf of Mexico offshore fields, and major export terminals for global crude and product distribution.',
    highlights: ['Gulf Coast refinery links', 'Rail and truck loading', 'LPG handling capability', 'USGC export access'],
  },
  {
    anchor: 'jurong',
    city: 'Jurong',
    port: 'Port of Jurong',
    country: 'Singapore',
    region: 'Singapore',
    tagline: 'Asia-Pacific bulk & liquid specialist',
    timeZone: 'Asia/Singapore',
    lon: 103.78,
    image: '/images/terminal-jurong.jpg',
    imageAlt: 'JSF Logistics tank farm at the Port of Jurong, Singapore — Asia-Pacific bulk liquid storage',
    throughput: '580M+ MT/year',
    tankCount: '50+',
    products: ['Fuel Oil', 'Crude Oil', 'Naphtha', 'Gas Oil', 'Chemicals', 'Jet Fuel', 'Methanol', 'Ethanol'],
    description:
      "Singapore is the world's largest bunkering port and a critical node in Asia-Pacific supply chains. Our Jurong facility provides strategic access to refining markets across China, Japan, South Korea, and Southeast Asia.",
    highlights: ["World's #1 bunkering port", 'Asia-Pacific hub access', 'Deepwater terminal berths', 'Largest tank farm capacity'],
  },
  {
    anchor: 'fujairah',
    city: 'Fujairah',
    port: 'Port of Fujairah',
    country: 'UAE',
    region: 'UAE, Middle East',
    tagline: 'Arabian Sea strategic position',
    timeZone: 'Asia/Dubai',
    lon: 56.33,
    image: '/images/terminal-fujairah.webp',
    imageAlt: 'JSF Logistics petroleum and bunker fuel terminal at the Port of Fujairah, UAE',
    throughput: 'Top 3 global bunkering',
    tankCount: '30+',
    products: ['Bunker Fuel', 'Crude Oil', 'Gasoil', 'Jet Fuel', 'LNG', 'Chemicals', 'Fuel Oil', 'Naphtha'],
    description:
      'Fujairah is the only emirate on the Gulf of Oman coastline, making it a pivotal transit point between the Persian Gulf and global shipping lanes. Our terminal here serves as a key bunkering and storage hub for tankers transiting the Strait of Hormuz.',
    highlights: ['Hormuz strategic position', 'Top 3 global bunkering hub', 'Direct tanker access', 'Middle East crude gateway'],
  },
];

export type Service = {
  anchor: string;
  title: string;
  summary: string;
  desc: string;
  points: string[];
};

export const services: Service[] = [
  {
    anchor: 'oil-storage',
    title: 'Oil Storage',
    summary: 'Large-capacity tank storage for crude oil, fuel oil, chemicals, and refined products at our four global terminals.',
    desc: 'Our strategic storage infrastructure spans four continents, providing secure and flexible tank farm operations for crude oil, fuel oil, chemicals, and refined products. Each terminal is equipped with modern metering, blanketing, and heating systems.',
    points: [
      'Fixed and floating roof tanks up to 100,000 m³',
      'Full-pipeline, vessel, truck, and rail connectivity',
      'Real-time inventory monitoring and reporting',
      'Flexible short- and long-term leasing arrangements',
    ],
  },
  {
    anchor: 'marine-shipping',
    title: 'Marine Shipping',
    summary: 'Vessel loading, discharging, and marine logistics across major international shipping lanes.',
    desc: 'We provide comprehensive marine operations including vessel loading and discharging, berth management, and coordination of tanker schedules across our four deep-water port facilities. Our team works 24/7 to ensure seamless cargo movements.',
    points: [
      'VLCC, Suezmax, Aframax, and MR tanker handling',
      'Full ship-to-shore and shore-to-ship transfers',
      'Bill of lading, surveying, and customs documentation',
      'Emergency response and spill containment capability',
    ],
  },
  {
    anchor: 'product-blending',
    title: 'Product Blending',
    summary: 'In-line and tank-to-tank blending to meet precise client specifications and international standards.',
    desc: 'Our in-line and batch blending capabilities allow us to produce custom product specifications for clients. From bunker fuel blending to aviation fuel preparation, we meet every international quality standard.',
    points: [
      'In-line blending for high-volume production',
      'Tank-to-tank batch blending for specification products',
      'ASTM and IP method quality compliance',
      'Blend certificates issued for every batch',
    ],
  },
  {
    anchor: 'laboratory-testing',
    title: 'Laboratory Testing',
    summary: 'Quality control, sample analysis, and certification testing for every product we store and ship.',
    desc: 'Our accredited laboratories operate at all four terminals, providing comprehensive analytical services that guarantee product integrity from receipt through discharge. We test to international standards and issue full certificates of quality.',
    points: [
      'Petroleum and marine fuel analysis',
      'ASTM / IP / ISO standard test methods',
      'Independent surveying and cargo sampling',
      'Rapid turnaround with digital reporting',
    ],
  },
  {
    anchor: 'road-transportation',
    title: 'Road Transportation',
    summary: 'Truck loading, last-mile delivery, and dispatch from terminal to final destination.',
    desc: 'We coordinate efficient truck loading operations from all terminals, managing scheduling, dispatch, and documentation for last-mile delivery of petroleum products, chemicals, and specialty fuels across domestic and cross-border routes.',
    points: [
      'ADR/IMDG compliant fleet partnerships',
      'Top- and bottom-loading gantry operations',
      'Real-time GPS tracking and ETA management',
      'Automated ticketing and invoice generation',
    ],
  },
  {
    anchor: 'pipeline-facilitation',
    title: 'Pipeline Facilitation',
    summary: 'Direct pipeline connections for high-volume throughput into refinery networks.',
    desc: 'JSF Logistics maintains direct pipeline connections at Rotterdam and Houston, enabling high-throughput transfers between refineries, petrochemical plants, and export facilities without the logistical complexity of vessel or road transport.',
    points: [
      'Direct refinery-to-terminal pipeline links',
      'High-volume throughput up to 5,000 m³/hr',
      'Pig receiver and launcher stations installed',
      'Seamless integration with national pipeline networks',
    ],
  },
];
