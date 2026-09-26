// Content for the /oil-storage/[city] landing pages. Terminal facts (throughput, tanks, products,
// highlights) come from `terminals` in lib/site.ts; everything here is unique per city.

export type CityPage = {
  slug: string;              // matches Terminal.anchor
  title: string;             // <title>, absolute (≤ 60 chars)
  description: string;       // meta description (≤ 160 chars)
  keywords: string[];
  h1: string;
  lede: string;
  intro: string[];
  storeTitle: string;
  store: { name: string; note: string }[];
  connections: string[];
  shippingNote: string;
  faq: { q: string; a: string }[];
  geo: { lat: number; lon: number };
  country: string;           // ISO code for schema
  region?: string;
};

export const cityPages: CityPage[] = [
  {
    slug: 'rotterdam',
    title: 'Oil Tank Lease in Rotterdam | Tank Storage | JSF Logistics',
    description:
      'Lease oil storage tanks in the Port of Rotterdam. Crude oil, fuel oil, EN590 gasoil, Jet A-1 and chemicals, with pipeline, vessel, barge, rail and truck access.',
    keywords: [
      'oil tank lease Rotterdam', 'rent tank storage Rotterdam', 'oil storage Rotterdam', 'tank farm Rotterdam',
      'tank storage agreement Rotterdam', 'EN590 storage Rotterdam', 'Jet A1 storage Rotterdam', 'tank terminal Rotterdam',
    ],
    h1: 'Oil tank lease in Rotterdam',
    lede:
      'Lease tank capacity at our terminal in the Port of Rotterdam, Europe’s largest energy hub, for crude oil, fuel oil, EN590 gasoil, Jet A-1 and chemicals.',
    intro: [
      'Our Rotterdam terminal gives traders, refiners and distributors storage at the centre of the European oil market. Tanks connect directly to the largest petrochemical complex in Europe and to the Rhine waterway, so product can move inland by barge as easily as it arrives by sea.',
      'We lease fixed and floating roof tanks on short- and long-term tank storage agreements, with real-time inventory reporting and laboratory testing of every cargo at receipt and discharge.',
    ],
    storeTitle: 'What you can store in Rotterdam',
    store: [
      { name: 'Crude oil', note: 'Multiple grade segregation and custom heating.' },
      { name: 'Fuel oil and bunker fuel', note: 'IFO 180, IFO 380, VLSFO 0.5% and ULSFO, IMO 2020 compliant.' },
      { name: 'Gasoil and EN590 diesel', note: 'ULSD ≤10 ppm sulfur, winter and summer grades, additive injection.' },
      { name: 'Jet fuel (Jet A-1)', note: 'Dedicated aviation tanks, ASTM D1655 and DEF STAN 91-091.' },
      { name: 'Naphtha, chemicals and bitumen', note: 'Segregated tanks with vapor recovery and nitrogen blanketing.' },
      { name: 'LNG', note: 'Handled at the Rotterdam terminal alongside liquid products.' },
    ],
    connections: [
      'VLCC-capable berths for deep-sea crude and product tankers',
      'Pipeline connection to the Rhine network and nearby refineries',
      'Barge, rail and truck loading for inland distribution',
      '24/7 operations and ISO 9001 certified management',
    ],
    shippingNote:
      'Need a tanker to bring product in or take it out? We arrange voyage and time charters for crude and petroleum products loading or discharging at Rotterdam.',
    faq: [
      {
        q: 'How long can I lease an oil tank in Rotterdam?',
        a: 'We offer both short-term and long-term leases. The period, tank size and product are set out in your tank storage agreement, so you only commit to the capacity and time you need.',
      },
      {
        q: 'Can you store EN590 diesel and Jet A-1 in Rotterdam?',
        a: 'Yes. We store gasoil and EN590 diesel to ULSD specification, and Jet A-1 in dedicated aviation tanks, with quality tested by our laboratory at receipt and discharge.',
      },
      {
        q: 'Can large tankers load and discharge at the Rotterdam terminal?',
        a: 'Yes. The terminal has VLCC-capable berths and also handles Suezmax, Aframax and MR tankers, as well as barges for Rhine distribution.',
      },
      {
        q: 'How do I secure tank storage in Rotterdam?',
        a: 'Send us the product, volume, storage period and how the product will arrive and leave. We confirm availability, send a quote and prepare the tank storage agreement for signature.',
      },
    ],
    geo: { lat: 51.9225, lon: 4.4792 },
    country: 'NL',
  },
  {
    slug: 'houston',
    title: 'Oil Storage & Tank Lease in Houston | JSF Logistics',
    description:
      'Lease crude oil and petroleum storage tanks in the Port of Houston. Gulf Coast refinery links, pipeline, rail, truck and export access, including LPG handling.',
    keywords: [
      'oil storage Houston', 'crude oil storage Houston', 'petroleum tank rental Houston', 'tank farm Houston',
      'tank lease Houston', 'oil terminal Houston', 'LPG storage Houston', 'Houston tank storage agreement',
    ],
    h1: 'Oil storage and tank lease in Houston',
    lede:
      'Store crude oil, refined products, LPG and chemicals in the Port of Houston, next to the US Gulf Coast refining complex and its export terminals.',
    intro: [
      'Houston is the energy capital of North America. Our terminal on the Gulf Coast gives clients direct access to the US domestic refining complex, Gulf of Mexico offshore production and the export terminals that move US crude and products worldwide.',
      'We lease tank capacity on short- and long-term agreements, with direct pipeline connections for high-volume transfers, rail and truck loading, and an ASTM-accredited laboratory on site.',
    ],
    storeTitle: 'What you can store in Houston',
    store: [
      { name: 'Crude oil', note: 'Receipt, storage, blending and delivery for refiners and crude traders.' },
      { name: 'LPG', note: 'Pressurized and refrigerated storage, plus ship-to-ship transfers.' },
      { name: 'Refined products and gasoline', note: 'Segregated storage with blend certificates for every batch.' },
      { name: 'Jet fuel', note: 'Dedicated aviation tanks and filtration to ASTM D4176.' },
      { name: 'Chemicals and ethanol', note: 'Segregated, ATEX-rated tanks with vapor recovery.' },
      { name: 'Bitumen', note: 'Heated storage for heavy products.' },
    ],
    connections: [
      'Direct pipeline links to Gulf Coast refineries, up to 5,000 m³/hr',
      'Rail and truck loading for domestic distribution',
      'US Gulf Coast export access for crude and products',
      'LPG handling capability, including ship-to-ship transfers',
    ],
    shippingNote:
      'Exporting from the US Gulf? We charter crude and product tankers loading at Houston, from MR up to VLCC-sized cargoes.',
    faq: [
      {
        q: 'Can I lease crude oil storage in Houston for export?',
        a: 'Yes. Our Houston terminal stores crude oil with access to US Gulf Coast export routes, and we can arrange the tanker charter for the export voyage.',
      },
      {
        q: 'Do you store LPG in Houston?',
        a: 'Yes. We offer pressurized and refrigerated LPG storage and ship-to-ship transfer services at Houston for petrochemical feedstock and domestic energy markets.',
      },
      {
        q: 'Is the Houston terminal connected by pipeline?',
        a: 'Yes. Direct pipeline connections link the terminal with refineries and petrochemical plants, with throughput of up to 5,000 m³ per hour.',
      },
      {
        q: 'How is product quality verified in Houston?',
        a: 'Our ASTM-accredited laboratory in Houston tests every cargo at receipt and discharge and issues certificates of quality, delivered digitally.',
      },
    ],
    geo: { lat: 29.7489, lon: -95.2353 },
    country: 'US',
    region: 'TX',
  },
  {
    slug: 'jurong',
    title: 'Oil Tank Storage in Jurong, Singapore | JSF Logistics',
    description:
      'Lease oil and chemical storage tanks at Jurong, Singapore, the world’s largest bunkering port. Fuel oil, crude, naphtha, gas oil, jet fuel and methanol.',
    keywords: [
      'oil storage Jurong', 'tank storage Singapore', 'oil tank lease Singapore', 'Jurong tank farm',
      'Jurong Island tank storage', 'bunker fuel storage Singapore', 'chemical storage Singapore', 'tank terminal Singapore',
    ],
    h1: 'Oil tank storage in Jurong, Singapore',
    lede:
      'Lease tank capacity at Jurong, Singapore, the world’s largest bunkering port and the storage hub for Asia-Pacific refining markets.',
    intro: [
      'Singapore sits on the main shipping route between the Middle East and East Asia. Our Jurong facility gives clients strategic access to refining and trading markets across China, Japan, South Korea and Southeast Asia.',
      'Jurong is our largest tank farm. We lease tanks for fuel oil, crude, naphtha, gas oil, jet fuel and chemicals on short- and long-term agreements, with in-line blending and laboratory testing on site.',
    ],
    storeTitle: 'What you can store in Jurong',
    store: [
      { name: 'Fuel oil and bunker fuel', note: 'VLSFO and ULSFO grades for the world’s busiest bunkering port.' },
      { name: 'Crude oil', note: 'Grade segregation and custom heating available.' },
      { name: 'Naphtha', note: 'Storage for petrochemical feedstock markets across Asia.' },
      { name: 'Gas oil', note: 'Winter and summer grades, additive injection available.' },
      { name: 'Jet fuel', note: 'Dedicated aviation tanks to Jet A-1 specification.' },
      { name: 'Methanol, ethanol and chemicals', note: 'Epoxy-coated or stainless tanks with nitrogen blanketing.' },
    ],
    connections: [
      'Deepwater terminal berths for large crude and product tankers',
      'Access to Asia-Pacific refining and trading hubs',
      'In-line and tank-to-tank blending for bunker fuel specifications',
      'Our largest tank farm capacity, with 50+ tanks',
    ],
    shippingNote:
      'Moving cargo into or out of Asia? We charter tankers for voyages loading or discharging at Jurong, including clean and dirty petroleum products.',
    faq: [
      {
        q: 'Can I store bunker fuel in Singapore with JSF Logistics?',
        a: 'Yes. We store fuel oil and bunker grades including VLSFO and ULSFO at Jurong, and can blend to IMO 2020 specifications in-line or tank-to-tank.',
      },
      {
        q: 'Do you store chemicals at Jurong?',
        a: 'Yes. Methanol, ethanol, naphtha and other chemicals are stored in fully segregated tanks with vapor recovery, nitrogen blanketing and compatibility screening.',
      },
      {
        q: 'Why store oil in Singapore?',
        a: 'Singapore is the world’s largest bunkering port and a central trading hub for Asia-Pacific, so stored product is close to buyers in China, Japan, South Korea and Southeast Asia.',
      },
      {
        q: 'How do I lease a tank at Jurong?',
        a: 'Send us the product, volume and storage period. We confirm tank availability, send a quote and prepare the tank storage agreement.',
      },
    ],
    geo: { lat: 1.2966, lon: 103.7764 },
    country: 'SG',
  },
  {
    slug: 'fujairah',
    title: 'Oil Storage & Bunker Tank Lease in Fujairah | JSF Logistics',
    description:
      'Lease oil and bunker fuel storage in Fujairah, UAE, on the Gulf of Oman. Crude, fuel oil, gasoil, jet fuel, LPG and chemicals with direct tanker access.',
    keywords: [
      'oil storage Fujairah', 'Fujairah tank lease', 'Fujairah oil terminal', 'bunker fuel storage Fujairah',
      'tank farm Fujairah', 'oil tank storage UAE', 'Fujairah tank storage agreement',
    ],
    h1: 'Oil and bunker fuel storage in Fujairah',
    lede:
      'Lease storage in Fujairah on the Gulf of Oman, one of the world’s top three bunkering hubs and the gateway for Middle East crude.',
    intro: [
      'Fujairah is the only emirate on the Gulf of Oman coastline, making it the natural transit point between the Persian Gulf and global shipping lanes. Our terminal here is a key bunkering and storage hub for tankers transiting the Strait of Hormuz.',
      'We lease tanks for bunker fuel, crude, gasoil, jet fuel, LPG and chemicals on short- and long-term agreements, with blending for marine fuel specifications and laboratory testing of every cargo.',
    ],
    storeTitle: 'What you can store in Fujairah',
    store: [
      { name: 'Bunker fuel', note: 'VLSFO, ULSFO, IFO 180 and IFO 380, IMO 2020 compliant.' },
      { name: 'Crude oil', note: 'Storage for Middle East crude grades such as Arab Light.' },
      { name: 'Gasoil and fuel oil', note: 'Segregated storage with blend certificates for every batch.' },
      { name: 'Jet fuel', note: 'Dedicated aviation tanks to Jet A-1 specification.' },
      { name: 'LPG and LNG', note: 'Pressurized and refrigerated LPG storage and ship-to-ship transfers.' },
      { name: 'Chemicals and naphtha', note: 'Segregated, ATEX-rated tanks with vapor recovery.' },
    ],
    connections: [
      'Direct tanker access outside the Strait of Hormuz',
      'One of the top three bunkering hubs in the world',
      'Gateway for Middle East crude exports',
      'Ship-to-ship transfer capability for LPG',
    ],
    shippingNote:
      'Loading Middle East crude or products? We charter tankers for voyages from Fujairah to Asia, Europe and the Americas.',
    faq: [
      {
        q: 'Can I lease bunker fuel storage in Fujairah?',
        a: 'Yes. We store VLSFO, ULSFO and IFO grades in Fujairah and can blend to IMO 2020 specifications, with quality certified by our laboratory.',
      },
      {
        q: 'Why store oil in Fujairah instead of inside the Gulf?',
        a: 'Fujairah is on the Gulf of Oman, outside the Strait of Hormuz, so tankers can reach it directly from global shipping lanes and product can be exported without transiting the strait.',
      },
      {
        q: 'Do you offer ship-to-ship transfers in Fujairah?',
        a: 'Yes. We offer ship-to-ship transfer services for LPG at Fujairah, alongside pressurized and refrigerated LPG storage.',
      },
      {
        q: 'How do I secure tank storage in Fujairah?',
        a: 'Send us the product, volume, storage period and arrival details. We confirm availability, quote and prepare the tank storage agreement.',
      },
    ],
    geo: { lat: 25.1288, lon: 56.3265 },
    country: 'AE',
  },
];

export const citySlugs = cityPages.map(c => c.slug);
export const cityHref = (slug: string) => `/oil-storage/${slug}`;
