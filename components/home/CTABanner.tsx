'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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

export default function CTABanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    /* Ken Burns on background */
    gsap.from(bgRef.current, {
      scale: 1.1,
      duration: 1.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    /* Parallax on scroll */
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 0.8,
      onUpdate: (self) => {
        gsap.set(bgRef.current, { y: self.progress * 80 });
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 78%',
        toggleActions: 'play none none none',
      },
    });

    tl.from('.cta-label', { y: -18, opacity: 0, duration: 0.5, ease: 'power2.out' }, 0)
      .from('.cta-line-1 .word-inner', { y: '110%', opacity: 0, stagger: 0.055, duration: 0.8, ease: 'power3.out' }, 0.15)
      .from('.cta-line-2 .word-inner', { y: '110%', opacity: 0, stagger: 0.055, duration: 0.8, ease: 'power3.out' }, 0.28)
      .from('.cta-sub', { y: 20, opacity: 0, duration: 0.6, ease: 'power2.out' }, 0.55)
      .from('.cta-btn', { y: 22, opacity: 0, stagger: 0.1, duration: 0.55, ease: 'back.out(1.4)' }, 0.72);
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background image (Ken Burns target) */}
      <div ref={bgRef} style={{ position: 'absolute', inset: '-8%', transformOrigin: 'center center' }}>
        <Image
          src="/images/rotterdam-panorama.jpg"
          alt="Rotterdam port panorama"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
          sizes="110vw"
        />
      </div>

      {/* Overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(6,13,6,0.96) 0%, rgba(6,13,6,0.88) 50%, rgba(13,23,13,0.80) 100%)' }} />
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      {/* Glow orbs */}
      <div style={{ position: 'absolute', top: '20%', left: '5%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(93,214,44,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '8%', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(210,255,40,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '7rem 1.5rem', position: 'relative', zIndex: 1, textAlign: 'center' }}>

        {/* Label */}
        <div className="cta-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
          <span style={{ width: '28px', height: '2px', background: 'var(--jsf-300)', display: 'inline-block' }} />
          <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--jsf-300)', letterSpacing: '0.16em' }}>READY TO GET STARTED</span>
          <span style={{ width: '28px', height: '2px', background: 'var(--jsf-300)', display: 'inline-block' }} />
        </div>

        {/* Headline */}
        <h2 style={{ fontSize: 'clamp(2rem, 5.5vw, 3.75rem)', color: '#ffffff', lineHeight: 1.05, marginBottom: '0.2rem', display: 'block' }}>
          <WordSplit text="Let's talk about your" className="cta-line-1" />
        </h2>
        <h2 style={{ fontSize: 'clamp(2rem, 5.5vw, 3.75rem)', lineHeight: 1.05, marginBottom: '1.5rem', display: 'block' }}>
          <span className="gradient-text-hero">
            <WordSplit text="storage needs." className="cta-line-2" />
          </span>
        </h2>

        <p className="cta-sub" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', maxWidth: '520px', margin: '0 auto 2.75rem', lineHeight: 1.75 }}>
          Whether you need flexible tank leasing, global shipment, or product sourcing — our team responds within 24 hours.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/contact" className="cta-btn magnetic-btn" style={{
            padding: '0.9rem 2.5rem', background: 'var(--jsf-100)', color: 'var(--jsf-900)',
            fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '14px', letterSpacing: '0.05em',
            borderRadius: '8px', textDecoration: 'none',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#e8ff60'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--jsf-100)'; }}>
            START A CONVERSATION →
          </Link>
          <Link href="/services" className="cta-btn magnetic-btn" style={{
            padding: '0.9rem 2.5rem', background: 'transparent', color: '#ffffff',
            fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '14px', letterSpacing: '0.04em',
            borderRadius: '8px', textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.3)',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--jsf-100)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.3)'; }}>
            VIEW ALL SERVICES
          </Link>
        </div>
      </div>
    </section>
  );
}
