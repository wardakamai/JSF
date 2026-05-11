'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 5, suffix: '+', label: 'Years Experience', desc: 'In global energy logistics', icon: '◆' },
  { value: 4, suffix: '', label: 'Strategic Terminals', desc: 'Rotterdam · Houston · Jurong · Fujairah', icon: '◈' },
  { value: 250, suffix: '+', label: 'Vessel Handlers', desc: 'Annual marine operations', icon: '◇' },
  { value: 500, suffix: '+', label: 'Global Partners', desc: 'Across 40+ countries', icon: '◉' },
];

export default function StatsBar() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    /* Card stagger entrance */
    gsap.from('.stat-card', {
      y: 50,
      opacity: 0,
      scale: 0.9,
      stagger: 0.12,
      duration: 0.85,
      ease: 'back.out(1.5)',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 82%',
        toggleActions: 'play none none none',
      },
    });

    /* Count-up for each stat */
    stats.forEach((s, i) => {
      const proxy = { val: 0 };
      const el = document.querySelector(`.stat-num-${i}`);
      if (!el) return;

      gsap.to(proxy, {
        val: s.value,
        duration: 1.8,
        ease: 'power2.out',
        delay: 0.12 * i,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
        onUpdate() {
          el.textContent = Math.round(proxy.val) + s.suffix;
        },
        onComplete() {
          el.textContent = s.value + s.suffix;
        },
      });
    });

    /* Glow pulse on the accent line */
    gsap.fromTo('.stats-glow-line',
      { scaleX: 0, opacity: 0 },
      {
        scaleX: 1,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} style={{
      background: 'var(--jsf-800)',
      borderTop: '1px solid rgba(93,214,44,0.1)',
      borderBottom: '1px solid rgba(93,214,44,0.1)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Radial glow bg */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '800px', height: '300px', background: 'radial-gradient(ellipse, rgba(93,214,44,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Top accent line */}
      <div className="stats-glow-line glow-line" style={{ transformOrigin: 'left center' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
          {stats.map((s, i) => (
            <div
              key={i}
              className="stat-card"
              style={{
                textAlign: 'center',
                padding: '2rem 1.25rem',
                borderRadius: '16px',
                background: 'rgba(6,13,6,0.6)',
                border: '1px solid rgba(93,214,44,0.1)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Corner accent */}
              <div style={{ position: 'absolute', top: 0, right: 0, width: '80px', height: '80px', background: 'radial-gradient(circle at top right, rgba(93,214,44,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

              {/* Counter */}
              <div
                className={`stat-num-${i} gradient-text`}
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                  lineHeight: 1,
                  marginBottom: '0.625rem',
                }}
              >
                0{s.suffix}
              </div>

              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '15px', fontWeight: 700, color: '#ffffff', marginBottom: '0.3rem' }}>{s.label}</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{s.desc}</div>

              {/* Bottom accent line */}
              <div style={{ position: 'absolute', bottom: 0, left: '20%', right: '20%', height: '1px', background: 'linear-gradient(to right, transparent, rgba(93,214,44,0.3), transparent)' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
