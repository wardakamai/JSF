'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function WordSplit({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split(' ').map((word, i, arr) => (
        <span key={i} className="word-mask" style={{ marginRight: i < arr.length - 1 ? '0.28em' : 0 }}>
          <span className="word-inner">{word}</span>
        </span>
      ))}
    </span>
  );
}

interface PageHeroProps {
  label?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
}

export default function PageHero({ label, title, highlight, subtitle, image, imageAlt }: PageHeroProps) {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.phero-blob', { scale: 0, opacity: 0, duration: 1.2, ease: 'power2.out' }, 0);

    if (label) {
      tl.from('.phero-label', { y: -20, opacity: 0, duration: 0.55 }, 0.2);
    }

    tl.from('.phero-title .word-inner', {
      y: '105%', opacity: 0, stagger: 0.05, duration: 0.75,
    }, label ? 0.38 : 0.2);

    if (highlight) {
      tl.from('.phero-highlight .word-inner', {
        y: '105%', opacity: 0, stagger: 0.05, duration: 0.75,
      }, 0.52);
    }

    if (subtitle) {
      tl.from('.phero-sub', { y: 24, opacity: 0, duration: 0.65 }, 0.75);
    }
  }, { scope: heroRef });

  return (
    <section ref={heroRef} style={{
      background: image ? undefined : 'linear-gradient(160deg, var(--jsf-800) 0%, var(--jsf-900) 60%)',
      paddingTop: '11rem',
      paddingBottom: '5rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt ?? 'JSF Logistics terminal'}
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="100vw"
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(6,13,6,0.94) 0%, rgba(6,13,6,0.80) 60%, rgba(13,23,13,0.65) 100%)' }} />
        </>
      )}

      <div className="grid-bg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      <div className="phero-blob" style={{
        position: 'absolute', top: '-60px', right: '-60px', width: '400px', height: '400px',
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(93,214,44,0.08) 0%, transparent 70%)',
        pointerEvents: 'none', transformOrigin: 'center center',
      }} />

      {/* Rotating ring — hidden on mobile */}
      <div className="hero-ring-deco" style={{
        position: 'absolute', top: '10%', right: '4%', width: '200px', height: '200px',
        borderRadius: '50%', border: '1px dashed rgba(93,214,44,0.1)', pointerEvents: 'none',
        animation: 'rotateBorder 30s linear infinite',
      }} />

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(93,214,44,0.25), transparent)' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>
        {label && (
          <div className="phero-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
            <span style={{ width: '24px', height: '2px', background: 'var(--jsf-300)', display: 'inline-block' }} />
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--jsf-300)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{label}</span>
          </div>
        )}

        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#ffffff', marginBottom: '0.75rem', lineHeight: 1.05, display: 'block' }}>
          <WordSplit text={title} className="phero-title" />
          {highlight && (
            <>
              {' '}
              <span style={{ color: 'var(--jsf-100)' }}>
                <WordSplit text={highlight} className="phero-highlight" />
              </span>
            </>
          )}
        </h1>

        {subtitle && (
          <p className="phero-sub" style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', maxWidth: '600px', lineHeight: 1.75 }}>{subtitle}</p>
        )}
      </div>
    </section>
  );
}
