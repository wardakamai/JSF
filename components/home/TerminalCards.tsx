'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { terminals } from '@/lib/site';
import { cityHref } from '@/lib/cities';

// The biggest terminal (Jurong, 50+ tanks) shows as a full tank.
const MAX_TANKS = Math.max(...terminals.map(t => parseInt(t.tankCount, 10)));

function localTime(timeZone: string, now: Date) {
  return new Intl.DateTimeFormat('en-GB', { timeZone, hour: '2-digit', minute: '2-digit' }).format(now);
}

export default function TerminalCards() {
  const listRef = useRef<HTMLUListElement>(null);
  const [animate, setAnimate] = useState(false);
  const [seen, setSeen] = useState<Set<number>>(new Set());
  const [current, setCurrent] = useState(0);
  const [now, setNow] = useState<Date | null>(null);

  // Clock
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  // Reveal each card once it scrolls (desktop) or swipes (mobile) into view.
  useEffect(() => {
    const list = listRef.current;
    if (!list || typeof IntersectionObserver === 'undefined') return;
    setAnimate(true);
    const cards = Array.from(list.children) as HTMLElement[];

    const reveal = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const i = cards.indexOf(e.target as HTMLElement);
        setSeen(prev => (prev.has(i) ? prev : new Set(prev).add(i)));
        reveal.unobserve(e.target);
      });
    }, { threshold: 0.35 });

    // Tracks which card is centred in the mobile carousel, for the dots.
    const centre = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) setCurrent(cards.indexOf(e.target as HTMLElement));
      });
    }, { root: list, threshold: 0.6 });

    cards.forEach(c => { reveal.observe(c); centre.observe(c); });
    return () => { reveal.disconnect(); centre.disconnect(); };
  }, []);

  return (
    <div className="tcards-wrap">
      <ul
        ref={listRef}
        className="tcards"
        data-animate={animate ? 'on' : undefined}
        aria-label="Our four oil storage terminals"
        tabIndex={0}
      >
        {terminals.map((t, i) => {
          const tanks = parseInt(t.tankCount, 10);
          return (
            <li
              key={t.anchor}
              className={`tcard${seen.has(i) ? ' is-in' : ''}`}
              style={{ '--level': (tanks / MAX_TANKS).toFixed(2), '--delay': `${(i % 4) * 110}ms` } as React.CSSProperties}
            >
              <Link href={cityHref(t.anchor)} className="tcard-link">
                <div className="tcard-photo">
                  <Image src={t.image} alt={t.imageAlt} fill sizes="(max-width: 700px) 82vw, (max-width: 1000px) 50vw, 25vw" />
                  <span className="tcard-time">
                    {now ? `${localTime(t.timeZone, now)} local` : t.country}
                  </span>
                  <h3 className="tcard-city">{t.city}</h3>
                </div>

                <div className="tcard-body">
                  <p className="tcard-tag">{t.region}. {t.tagline}.</p>

                  <div className="tcard-stats">
                    <span className="tcard-tank" aria-hidden="true"><span className="tcard-liquid" /></span>
                    <dl>
                      <div><dt>Tanks</dt><dd>{t.tankCount}</dd></div>
                      <div><dt>Throughput</dt><dd>{t.throughput}</dd></div>
                    </dl>
                  </div>

                  <ul className="tcard-products" aria-label="Main products">
                    {t.products.slice(0, 4).map(p => <li key={p}>{p}</li>)}
                  </ul>

                  <span className="tcard-cta">Oil storage in {t.city}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="tcards-dots" aria-hidden="true">
        {terminals.map((t, i) => <span key={t.anchor} className={i === current ? 'is-current' : undefined} />)}
      </div>
    </div>
  );
}
