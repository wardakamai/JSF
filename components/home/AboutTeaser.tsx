'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutTeaser() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    /* Text column stagger */
    gsap.from('.about-text-item', {
      y: 45,
      opacity: 0,
      stagger: 0.12,
      duration: 0.85,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    /* Image slide in from right */
    gsap.from(imgRef.current, {
      x: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 78%',
        toggleActions: 'play none none none',
      },
    });

    /* Subtle parallax on image while scrolling */
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
      onUpdate: (self) => {
        gsap.set(imgRef.current, { y: self.progress * -40 });
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="section-pad" style={{ background: 'var(--jsf-900)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

          {/* Text column */}
          <div>
            <div className="about-text-item" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <span style={{ width: '28px', height: '2px', background: 'var(--jsf-300)', display: 'inline-block' }} />
              <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--jsf-300)', letterSpacing: '0.16em' }}>ABOUT JSF LOGISTICS</span>
            </div>

            <h2 className="about-text-item" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#ffffff', marginBottom: '1.25rem', lineHeight: 1.1 }}>
              Energy Logistics,<br /><span className="gradient-text">Built Different.</span>
            </h2>

            <p className="about-text-item" style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.85, marginBottom: '1rem' }}>
              JSF Logistics B.V. was founded on a belief that oil &amp; gas storage and logistics could be done with greater transparency, flexibility, and accountability than the industry standard.
            </p>
            <p className="about-text-item" style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.85, marginBottom: '2rem' }}>
              With terminals in Europe, the Americas, Southeast Asia, and the Middle East, we provide uninterrupted supply chain continuity for producers, traders, and refiners worldwide.
            </p>

            <div className="about-text-item" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link href="/about" style={{
                padding: '0.75rem 1.75rem', background: 'var(--jsf-100)', color: 'var(--jsf-900)',
                fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '13px', letterSpacing: '0.05em',
                borderRadius: '8px', textDecoration: 'none', transition: 'background 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#e8ff60'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--jsf-100)'; }}>
                ABOUT US →
              </Link>
              <Link href="/services" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontWeight: 600, letterSpacing: '0.04em', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = 'var(--jsf-300)'}
                onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.55)'}>
                View Services
              </Link>
            </div>
          </div>

          {/* Image column */}
          <div ref={imgRef} style={{ borderRadius: '18px', overflow: 'hidden', position: 'relative', aspectRatio: '4/3', border: '1px solid rgba(93,214,44,0.15)' }}>
            <Image
              src="/images/about-tanks.jpg"
              alt="JSF Logistics storage terminal at night"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(6,13,6,0.3) 0%, rgba(93,214,44,0.05) 100%)' }} />
            {/* Badge */}
            <div style={{
              position: 'absolute', bottom: '1.25rem', left: '1.25rem',
              background: 'rgba(6,13,6,0.88)', backdropFilter: 'blur(8px)',
              border: '1px solid rgba(93,214,44,0.25)', borderRadius: '10px',
              padding: '0.75rem 1rem',
            }}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.4rem', color: 'var(--jsf-100)', lineHeight: 1 }}>15+</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginTop: '0.2rem' }}>Years of Operations</div>
            </div>
            {/* Top-right accent */}
            <div style={{
              position: 'absolute', top: '1.25rem', right: '1.25rem',
              background: 'rgba(6,13,6,0.75)', backdropFilter: 'blur(8px)',
              border: '1px solid rgba(93,214,44,0.2)', borderRadius: '8px',
              padding: '0.4rem 0.75rem',
              fontSize: '11px', fontWeight: 700, color: 'var(--jsf-300)', letterSpacing: '0.08em',
            }}>
              ● OPERATING 24/7
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
