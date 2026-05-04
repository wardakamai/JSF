'use client';

import { useRef, ReactNode } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SectionRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'scale';
  className?: string;
  style?: React.CSSProperties;
  stagger?: boolean;
}

export default function SectionReveal({
  children, delay = 0, direction = 'up', className, style, stagger = false,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    const targets = stagger ? Array.from(el.children) : [el];

    const fromVars: gsap.TweenVars = {
      opacity: 0,
      duration: 0.85,
      ease: 'power3.out',
      delay,
    };

    if (direction === 'up')    { fromVars.y = 52; }
    if (direction === 'left')  { fromVars.x = -60; }
    if (direction === 'right') { fromVars.x = 60; }
    if (direction === 'scale') { fromVars.scale = 0.88; fromVars.y = 24; }

    gsap.from(targets, {
      ...fromVars,
      scrollTrigger: {
        trigger: el,
        start: 'top 86%',
        toggleActions: 'play none none none',
      },
      stagger: stagger ? 0.1 : 0,
    });
  }, { scope: ref });

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
