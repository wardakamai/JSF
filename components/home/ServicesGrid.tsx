'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionReveal from '@/components/shared/SectionReveal';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: '🛢️', title: 'Oil Storage', desc: 'Large-capacity tank storage for crude oil, fuel oil, chemicals, and refined products at our four global terminals.' },
  { icon: '🚢', title: 'Marine Shipping', desc: 'Full-service vessel loading, discharging, and marine logistics across major international shipping lanes.' },
  { icon: '⚗️', title: 'Product Blending', desc: 'Custom in-line and tank-to-tank blending to meet precise client specifications and international standards.' },
  { icon: '🔬', title: 'Laboratory Testing', desc: 'State-of-the-art quality control, sample analysis, and certification testing for all stored and shipped products.' },
  { icon: '🚛', title: 'Road Transportation', desc: 'Efficient truck loading, last-mile delivery, and logistics coordination from terminal to final destination.' },
  { icon: '🔧', title: 'Pipeline Facilitation', desc: 'Direct pipeline connections enabling high-volume throughput and seamless refinery network integration.' },
];

export default function ServicesGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    /* Icon bounce stagger on each card */
    gsap.from('.svc-card', {
      y: 55,
      opacity: 0,
      scale: 0.92,
      stagger: 0.1,
      duration: 0.75,
      ease: 'back.out(1.4)',
      scrollTrigger: {
        trigger: gridRef.current,
        start: 'top 84%',
        toggleActions: 'play none none none',
      },
    });

    /* Icon pop-in after cards appear */
    gsap.from('.svc-icon', {
      scale: 0,
      rotation: -20,
      stagger: 0.1,
      duration: 0.55,
      ease: 'back.out(2)',
      delay: 0.15,
      scrollTrigger: {
        trigger: gridRef.current,
        start: 'top 84%',
        toggleActions: 'play none none none',
      },
    });
  }, { scope: gridRef });

  return (
    <section className="section-pad" style={{ background: 'var(--jsf-900)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        <SectionReveal style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span style={{ width: '28px', height: '2px', background: 'var(--jsf-300)', display: 'inline-block' }} />
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--jsf-300)', letterSpacing: '0.16em' }}>OUR CORE SERVICES</span>
            <span style={{ width: '28px', height: '2px', background: 'var(--jsf-300)', display: 'inline-block' }} />
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', color: '#ffffff', marginBottom: '1rem' }}>
            End-to-End Energy<br /><span className="gradient-text">Logistics Solutions</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.55)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
            From tank storage to marine operations, we deliver full-spectrum logistics so your supply chain never stops moving.
          </p>
        </SectionReveal>

        <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {services.map((s) => (
            <div key={s.title} className="svc-card card-hover" style={{
              background: 'var(--jsf-800)',
              border: '1px solid rgba(93,214,44,0.12)',
              borderRadius: '14px',
              padding: '2rem',
            }}>
              <div className="svc-icon" style={{
                width: '52px', height: '52px', borderRadius: '12px',
                background: 'rgba(93,214,44,0.08)', border: '1px solid rgba(93,214,44,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.6rem', marginBottom: '1.25rem',
                transformOrigin: 'center center',
              }}>{s.icon}</div>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.625rem' }}>{s.title}</h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '1.25rem' }}>{s.desc}</p>
              <Link href="/services" style={{ fontSize: '13px', fontWeight: 700, color: 'var(--jsf-300)', textDecoration: 'none', letterSpacing: '0.05em', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = 'var(--jsf-100)'}
                onMouseLeave={e => (e.target as HTMLElement).style.color = 'var(--jsf-300)'}>
                LEARN MORE →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
