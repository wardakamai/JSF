import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE = 'https://jsf-logistics.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/send.php'],
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
