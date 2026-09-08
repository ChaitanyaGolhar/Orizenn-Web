'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      // 1. Initial Load Animation (Fade text in, gently reveal mockup)
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      const textElements = gsap.utils.toArray('.hero-text-anim');

      gsap.set(textElements, { opacity: 0, y: 15 });
      gsap.set(mockupRef.current, { opacity: 0, y: 40, scale: 0.98 });

      tl.to(textElements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1
      }, 0.2);

      tl.to(mockupRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out'
      }, 0.6);

      // 2. Subtle Scroll Reveal (Scale up slightly as user scrolls down)
      if (containerRef.current && mockupRef.current) {
        gsap.to(mockupRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom center',
            scrub: true,
          },
          scale: 1.02,
          ease: 'none'
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-[#070709] pt-24 md:pt-44 pb-10 overflow-hidden">

      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        {/* Soft radial spotlight anchored behind the mockup */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-signal/20 rounded-full blur-[120px] mix-blend-screen opacity-80" />
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center">

        {/* Copy Structure */}
        <div ref={textRef} className="flex flex-col items-center gap-5 max-w-[800px] mb-10">

          <div className="hero-text-anim font-mono text-[10px] md:text-[11px] tracking-[0.1em] text-muted uppercase">
            From Technical Work to Evidence
          </div>

          {/* Centered Editorial Headline */}
          <h1 className="hero-text-anim font-sans text-h1 md:text-hero font-normal leading-[1.05] tracking-[-0.04em] text-foreground m-0 whitespace-nowrap">
            Let the work speak.
          </h1>

          <p className="hero-text-anim text-small md:text-lg text-muted max-w-[460px] leading-[1.6] m-0">
            Turn technical work into structured evidence<br className="hidden sm:block" /> for clearer evaluation and deeper understanding.
          </p>

          <div className="hero-text-anim flex flex-col sm:flex-row items-center gap-5 mt-6 pointer-events-auto w-full sm:w-auto">
            {/* PRIMARY CTA */}
            <a
              href="/product"
              className="group relative flex items-center justify-center gap-2 px-8 py-3.5 w-full sm:w-auto rounded-lg bg-gradient-to-b from-signal to-[#0055CC] text-white font-sans font-medium text-small md:text-base tracking-wide transition-all duration-300 hover:-translate-y-[1px] hover:brightness-110 shadow-[0_0_20px_rgba(0,107,255,0.2)] hover:shadow-[0_0_30px_rgba(0,107,255,0.3)] focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 focus:ring-offset-background"
            >
              Explore Orizenn
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>

            {/* SECONDARY CTA */}
            <a
              href="/institutions"
              className="group flex items-center justify-center gap-2 px-6 py-3.5 w-full sm:w-auto rounded-lg text-muted font-sans font-medium text-small md:text-base tracking-wide transition-all duration-300 hover:text-foreground hover:bg-surface/30 focus:outline-none focus:ring-2 focus:ring-signal/50 focus:ring-offset-2 focus:ring-offset-background"
            >
              For Institutions
              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:text-signal">→</span>
            </a>
          </div>

          {/* <div className="hero-text-anim font-mono text-micro text-muted mt-8 opacity-60 uppercase tracking-widest hidden md:block">
            Real work. Real evidence. Better context.
          </div> */}

        </div>

        {/* Product Visual Proof Placeholder */}
        <div ref={mockupRef} className="w-full max-w-[1100px] mx-auto perspective-[1000px]">
          <div className="w-full will-change-transform h-[500px] md:h-[600px] bg-[#0c0c0e] rounded-xl border border-border/50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] flex items-center justify-center">
            <span className="font-mono text-muted/50 uppercase tracking-widest">Product Mockup Placeholder</span>
          </div>
        </div>

      </Container>
    </section>
  );
}
