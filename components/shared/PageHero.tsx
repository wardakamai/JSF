import Image from 'next/image';
import Breadcrumb, { type BreadcrumbItem } from '@/components/shared/Breadcrumb';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  crumb: string;
  parents?: BreadcrumbItem[];
  image?: string;
  imageAlt?: string;
}

export default function PageHero({ title, subtitle, crumb, parents = [], image, imageAlt }: PageHeroProps) {
  const items: BreadcrumbItem[] = [{ label: 'Home', href: '/' }, ...parents, { label: crumb }];

  return (
    <section className="page-hero">
      <div className={`wrap page-hero-grid${image ? '' : ' no-media'}`}>
        <div className="page-hero-copy">
          <Breadcrumb items={items} />
          <h1>{title}</h1>
          {subtitle && <p className="lede">{subtitle}</p>}
        </div>
        {image && (
          <div className="page-hero-media">
            <Image src={image} alt={imageAlt ?? ''} fill priority sizes="(max-width: 860px) 100vw, 45vw" />
          </div>
        )}
      </div>
    </section>
  );
}
