'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { terminals } from '@/lib/site';
import { cityHref } from '@/lib/cities';

// Longitude window that frames Houston (-95°) to Jurong (104°).
const LON_MIN = -110;
const LON_MAX = 120;

const stops = [...terminals].sort((a, b) => a.lon - b.lon);

function localTime(timeZone: string, now: Date) {
  return new Intl.DateTimeFormat('en-GB', { timeZone, hour: '2-digit', minute: '2-digit' }).format(now);
}

export default function TerminalClocks() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="meridian" aria-label="Our terminals and their local time">
      <div className="wrap">
        <p className="meridian-caption">Our four terminals from west to east, with live local time. Operations run 24/7.</p>
        <div className="meridian-track">
          {stops.map((t, i) => {
            const pct = ((t.lon - LON_MIN) / (LON_MAX - LON_MIN)) * 100;
            return (
              <Link
                key={t.anchor}
                href={cityHref(t.anchor)}
                className={`meridian-stop${i === stops.length - 1 ? ' is-end' : ''}`}
                style={{ left: `${pct}%` }}
              >
                <span className="meridian-city">{t.city}</span>
                <span className="meridian-time">
                  {now ? `${localTime(t.timeZone, now)} local time` : t.region}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
