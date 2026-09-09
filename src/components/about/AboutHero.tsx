'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/ui/Container';

gsap.registerPlugin(ScrollTrigger);

export function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      const textElements = gsap.utils.toArray('.hero-text-anim');

      gsap.set(textElements, { opacity: 0, y: 30 });
      gsap.set(visualRef.current, { opacity: 0, y: 50, scale: 0.95 });

      tl.to(textElements, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15
      }, 0.2);

      tl.to(visualRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
      }, 0.6);

      // Subtle parallax on scroll
      if (containerRef.current && visualRef.current) {
        gsap.to(visualRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom center',
            scrub: true,
          },
          scale: 1.05,
          y: -20,
          ease: 'none'
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative pt-32 pb-24 md:pt-44 lg:pb-32 overflow-hidden bg-[#070709]" id="about-hero">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-signal/10 rounded-full blur-[100px] mix-blend-screen opacity-60" />
      </div>

      <Container className="flex flex-col items-center text-center gap-6 relative z-10 max-w-4xl mx-auto">
        
        <span className="hero-text-anim font-mono text-[10px] lg:text-xs text-signal tracking-widest uppercase block mb-2">
          ABOUT ORIZENN
        </span>
        
        <h1 className="hero-text-anim font-sans text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter text-foreground leading-[1.1]">
          The work deserves to be seen.
        </h1>
        
        <p className="hero-text-anim text-lg lg:text-xl text-muted leading-relaxed max-w-3xl mx-auto mt-4">
          We believe technical work contains evidence of how people build, experiment, learn, and solve problems — much of which gets lost when it is reduced to conventional signals.
        </p>

      </Container>

      {/* Restrained Conceptual Visual */}
      <Container className="mt-20 lg:mt-28 max-w-3xl relative z-10">
        <div ref={visualRef} className="flex flex-col items-center justify-center font-mono text-sm tracking-widest text-muted/60 p-12 bg-white/[0.02] border border-white/5 rounded-2xl shadow-2xl backdrop-blur-sm relative overflow-hidden">
          
          {/* Inner subtle glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
          
          <div className="mb-6 text-white/80 font-medium">WORK</div>
          <div className="w-[1px] h-10 bg-gradient-to-b from-white/30 to-transparent"></div>
          
          <div className="w-56 h-[1px] bg-white/20 flex justify-between relative mt-6 mb-6">
            <div className="w-[1px] h-5 bg-white/20 absolute left-0 -top-5"></div>
            <div className="w-[1px] h-5 bg-white/20 absolute left-1/2 -top-5"></div>
            <div className="w-[1px] h-5 bg-white/20 absolute right-0 -top-5"></div>
          </div>
          
          <div className="flex justify-between w-72 text-xs opacity-60">
            <span>CODE</span>
            <span>TESTS</span>
            <span>DOCS</span>
          </div>
          
          <div className="flex justify-between w-56 mt-6 relative h-12">
             <div className="w-[1px] h-12 bg-gradient-to-t from-signal/40 to-white/20 absolute left-0 rotate-[25deg] origin-top"></div>
             <div className="w-[1px] h-12 bg-gradient-to-t from-signal/40 to-white/20 absolute left-1/2"></div>
             <div className="w-[1px] h-12 bg-gradient-to-t from-signal/40 to-white/20 absolute right-0 -rotate-[25deg] origin-top"></div>
          </div>
          
          <div className="mt-8 px-6 py-2 rounded-full border border-signal/30 bg-signal/10 text-signal font-medium shadow-[0_0_15px_rgba(0,107,255,0.2)]">
            EVIDENCE
          </div>
        </div>
      </Container>
    </section>
  );
}
