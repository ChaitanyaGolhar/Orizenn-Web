'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

gsap.registerPlugin(ScrollTrigger);

export function AboutCTA() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      const elements = gsap.utils.toArray('.cta-anim');
      
      gsap.from(elements, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-32 lg:py-48 border-t border-white/5" id="about-cta">
      <Container className="flex flex-col items-center text-center max-w-3xl">
        <h2 className="cta-anim font-sans text-5xl lg:text-7xl font-light tracking-tighter text-foreground mb-8">
          Let the work speak.
        </h2>
        <p className="cta-anim text-lg lg:text-xl text-muted mb-12 leading-relaxed">
          Explore what Orizenn is building.
        </p>
        <div className="cta-anim flex flex-col sm:flex-row items-center gap-4">
          <Button href="https://app.orizenn.com" variant="primary">Explore Orizenn →</Button>
          <Button href="/how-it-works" variant="secondary">How It Works →</Button>
        </div>
      </Container>
    </section>
  );
}
