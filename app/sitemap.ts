import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE = 'https://jsf-logistics.com';

// Update a page's date here when its content meaningfully changes.
// (Using the build time made every page look "changed" on every deploy.)
const pages: { path: string; lastModified: string; changeFrequency: 'weekly' | 'monthly' | 'yearly'; priority: number }[] = [
  { path: '', lastModified: '2026-09-25', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/services', lastModified: '2026-09-25', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/terminals', lastModified: '2026-09-25', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/oil-storage/rotterdam', lastModified: '2026-09-25', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/oil-storage/houston', lastModified: '2026-09-25', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/oil-storage/jurong', lastModified: '2026-09-25', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/oil-storage/fujairah', lastModified: '2026-09-25', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/tank-storage-agreement', lastModified: '2026-09-25', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/vessel-chartering', lastModified: '2026-09-25', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/about', lastModified: '2026-09-25', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/products', lastModified: '2026-09-25', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/laboratory', lastModified: '2026-09-25', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/hse', lastModified: '2026-09-25', changeFrequency: 'yearly', priority: 0.7 },
  { path: '/contact', lastModified: '2026-09-25', changeFrequency: 'yearly', priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(p => ({
    url: `${BASE}${p.path}`,
    lastModified: p.lastModified,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
