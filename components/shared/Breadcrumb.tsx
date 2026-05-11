import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `https://jsf-logistics.com${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        style={{
          background: 'var(--jsf-800)',
          borderBottom: '1px solid rgba(93,214,44,0.08)',
          padding: '0.55rem 1.5rem',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <ol
            style={{
              listStyle: 'none',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '0.25rem',
            }}
          >
            {items.map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                {i > 0 && (
                  <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)', userSelect: 'none', padding: '0 0.125rem' }}>›</span>
                )}
                {item.href && i < items.length - 1 ? (
                  <Link
                    href={item.href}
                    style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    aria-current={i === items.length - 1 ? 'page' : undefined}
                    style={{ fontSize: '12px', color: 'var(--jsf-300)', fontWeight: 600 }}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
