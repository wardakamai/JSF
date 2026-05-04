'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* Split a string into masked word spans */
function WordSplit({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split(' ').map((word, i) => (
        <span key={i} className="word-mask" style={{ marginRight: i < text.split(' ').length - 1 ? '0.28em' : 0 }}>
          <span className="word-inner">{word}</span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const heroRef     = useRef<HTMLElement>(null);
  const bgRef       = useRef<HTMLDivElement>(null);
  const ringRef     = useRef<HTMLDivElement>(null);
  const ring2Ref    = useRef<HTMLDivElement>(null);

  /* ── Canvas particles ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * canvas.width, y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.22, vy: (Math.random() - 0.5) * 0.22,
        size: Math.random() * 1.6 + 0.4,
        opacity: Math.random() * 0.3 + 0.06,
      });
    }

    const COLORS = ['93,214,44', '126,218,88', '210,255,40'];

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        const c = COLORS[i % COLORS.length];
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c},${p.opacity})`; ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(93,214,44,${0.065 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  /* ── GSAP Hero Timeline ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      /* 1. Slow Ken-Burns on background image */
      gsap.from(bgRef.current, {
        scale: 1.12, duration: 2.4, ease: 'power2.out',
      });

      /* 2. Rotating rings */
      gsap.to(ringRef.current, {
        rotation: 360, duration: 28, ease: 'none', repeat: -1,
      });
      gsap.to(ring2Ref.current, {
        rotation: -360, duration: 40, ease: 'none', repeat: -1,
      });

      /* 3. Main entrance timeline */
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      /* badge slides down */
      tl.from('.hero-badge', { y: -30, opacity: 0, duration: 0.7 }, 0.3)

      /* line 1 words cascade up from mask */
        .from('.hero-line-1 .word-inner', {
          y: '110%', opacity: 0, stagger: 0.055, duration: 0.85,
        }, 0.55)

      /* line 2 words */
        .from('.hero-line-2 .word-inner', {
          y: '110%', opacity: 0, stagger: 0.055, duration: 0.85,
        }, 0.72)

      /* sub-paragraph */
        .from('.hero-sub', { y: 36, opacity: 0, duration: 0.75 }, 1.05)

      /* CTAs stagger */
        .from('.hero-cta', { y: 28, opacity: 0, stagger: 0.12, duration: 0.65 }, 1.25)

      /* scroll indicator */
        .from('.hero-scroll', { opacity: 0, duration: 0.6 }, 1.55);

      /* 4. Floating stats badges */
      gsap.from('.hero-stat', {
        y: 40, opacity: 0, stagger: 0.15, duration: 0.9, ease: 'back.out(1.6)', delay: 1.6,
      });

      /* 5. Parallax on scroll */
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.6,
        onUpdate: (self) => {
          gsap.set(bgRef.current, { y: self.progress * 120 });
          gsap.set('.hero-content', { y: self.progress * 60 });
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>

      {/* BG image (Ken Burns target) */}
      <div ref={bgRef} style={{ position: 'absolute', inset: '-10%', transformOrigin: 'center center' }}>
        <Image src="/images/hero-tanker.webp" alt="" fill priority
          style={{ objectFit: 'cover', objectPosition: 'center' }} sizes="120vw" />
      </div>

      {/* Overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(110deg, rgba(6,13,6,0.93) 0%, rgba(6,13,6,0.78) 50%, rgba(13,23,13,0.55) 100%)' }} />

      {/* Grid */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      {/* Particles */}
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />

      {/* Gradient glow blobs */}
      <div className="hero-ring-deco" style={{ position: 'absolute', top: '20%', right: '5%', width: '420px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(126,218,88,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '15%', left: '-5%', width: '260px', height: '260px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(93,214,44,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Rotating decorative rings — hidden on mobile via .hero-ring-deco */}
      <div ref={ringRef} className="hero-ring-deco" style={{ position: 'absolute', top: '15%', right: '7%', width: '380px', height: '380px', borderRadius: '50%', border: '1px dashed rgba(126,218,88,0.12)', pointerEvents: 'none', transformOrigin: 'center center' }}>
        <div style={{ position: 'absolute', top: '-5px', left: '50%', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--jsf-400)', boxShadow: '0 0 12px rgba(126,218,88,0.7)', transform: 'translateX(-50%)' }} />
      </div>
      <div ref={ring2Ref} className="hero-ring-deco" style={{ position: 'absolute', top: '20%', right: '10%', width: '270px', height: '270px', borderRadius: '50%', border: '1px solid rgba(210,255,40,0.07)', pointerEvents: 'none', transformOrigin: 'center center' }}>
        <div style={{ position: 'absolute', bottom: '-4px', left: '50%', width: '7px', height: '7px', borderRadius: '50%', background: 'var(--jsf-100)', boxShadow: '0 0 8px rgba(210,255,40,0.6)', transform: 'translateX(-50%)' }} />
      </div>

      {/* Main content */}
      <div className="hero-content hero-content-pad" style={{ maxWidth: '1280px', margin: '0 auto', padding: '8rem 1.5rem 5rem', position: 'relative', zIndex: 1, width: '100%' }}>

        {/* Status pill */}
        <div className="hero-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', background: 'rgba(93,214,44,0.08)', border: '1px solid rgba(93,214,44,0.3)', borderRadius: '100px', padding: '0.35rem 1.1rem' }}>
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--jsf-300)', display: 'inline-block', boxShadow: '0 0 8px rgba(93,214,44,0.9)' }} />
          <span style={{ fontSize: '12px', color: 'var(--jsf-300)', letterSpacing: '0.12em', fontWeight: 600 }}>GLOBAL ENERGY LOGISTICS</span>
        </div>

        {/* Headline line 1 */}
        <h1 className="hero-line-1" style={{ fontSize: 'clamp(2.8rem, 7.5vw, 6rem)', lineHeight: 1.0, color: '#ffffff', marginBottom: '0.15rem', display: 'block' }}>
          <WordSplit text="Powering Progress." />
        </h1>

        {/* Headline line 2 — gradient */}
        <h1 className="hero-line-2" style={{ fontSize: 'clamp(2.8rem, 7.5vw, 6rem)', lineHeight: 1.0, marginBottom: '2rem', display: 'block' }}>
          <span className="gradient-text-hero">
            <WordSplit text="Delivering Energy." />
          </span>
        </h1>

        <p className="hero-sub" style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, maxWidth: '540px', marginBottom: '2.75rem' }}>
          JSF Logistics B.V. is a trusted partner in oil &amp; gas storage and logistics — operating strategically placed terminals across four global ports to keep energy moving worldwide.
        </p>

        {/* CTAs */}
        <div className="hero-cta-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
          <Link href="/terminals" className="hero-cta magnetic-btn" style={{
            padding: '0.95rem 2.25rem', background: 'var(--jsf-100)', color: 'var(--jsf-900)',
            fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '14px', letterSpacing: '0.05em',
            borderRadius: '8px', textDecoration: 'none', display: 'inline-block',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#e8ff60'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--jsf-100)'; }}>
            EXPLORE TERMINALS →
          </Link>
          <Link href="/contact" className="hero-cta magnetic-btn" style={{
            padding: '0.95rem 2.25rem', background: 'transparent', color: '#ffffff',
            fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '14px', letterSpacing: '0.04em',
            borderRadius: '8px', textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.28)',
            display: 'inline-block', transition: 'border-color 0.2s',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--jsf-100)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.28)'; }}>
            REQUEST A QUOTE
          </Link>
        </div>

        {/* Floating stat badges */}
        <div className="hero-stat-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', marginTop: '3.5rem' }}>
          {[
            { value: '15+', label: 'Years Experience' },
            { value: '4', label: 'Global Terminals' },
            { value: '500+', label: 'Partners' },
          ].map(s => (
            <div key={s.label} className="hero-stat" style={{
              background: 'rgba(6,13,6,0.7)', backdropFilter: 'blur(10px)',
              border: '1px solid rgba(93,214,44,0.2)', borderRadius: '10px',
              padding: '0.625rem 1.1rem', display: 'flex', alignItems: 'center', gap: '0.625rem',
            }}>
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.3rem', color: 'var(--jsf-100)' }}>{s.value}</span>
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)' }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero-scroll" style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
        <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.18em' }}>SCROLL</span>
        <div style={{ width: '1px', height: '44px', background: 'linear-gradient(to bottom, rgba(210,255,40,0.6), transparent)' }} />
      </div>

      {/* Bottom vignette */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '180px', background: 'linear-gradient(to bottom, transparent, var(--jsf-900))', pointerEvents: 'none' }} />
    </section>
  );
}
