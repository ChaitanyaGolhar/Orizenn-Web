'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/ui/Container';

gsap.registerPlugin(ScrollTrigger);

export function WhatWeAreBuilding() {
  const containerRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      const textElements = gsap.utils.toArray('.build-text-anim');
      
      gsap.from(textElements, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });

      if (visualRef.current) {
        const blocks = gsap.utils.toArray('.build-block');
        const lines = gsap.utils.toArray('.build-line');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: visualRef.current,
            start: 'top 75%',
          }
        });

        tl.from(blocks[0], { y: 20, opacity: 0, duration: 0.5, ease: 'power2.out' })
          .from(lines[0], { scaleY: 0, opacity: 0, duration: 0.4, transformOrigin: 'top center', ease: 'power1.inOut' }, '-=0.2')
          .from(blocks[1], { y: 20, opacity: 0, duration: 0.5, ease: 'power2.out' }, '-=0.1')
          .from(lines[1], { scaleY: 0, opacity: 0, duration: 0.4, transformOrigin: 'top center', ease: 'power1.inOut' }, '-=0.2')
          .from(blocks[2], { y: 20, opacity: 0, duration: 0.5, ease: 'power2.out' }, '-=0.1');
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-24 lg:py-48 border-t border-white/5 bg-[#070709]" id="what-we-are-building">
      <Container className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        <h2 className="build-text-anim font-sans text-4xl md:text-5xl lg:text-7xl font-light tracking-tighter text-foreground leading-[1.1] mb-8">
          We are building infrastructure for understanding technical work.
        </h2>
        
        <p className="build-text-anim text-lg lg:text-xl text-muted max-w-3xl leading-relaxed">
          Orizenn is being built to make the evidence inside technical work more visible, structured, and useful — for the people who build it, the people who evaluate it, and the institutions that support it.
        </p>

        {/* Conceptual Visual */}
        <div ref={visualRef} className="build-text-anim mt-20 lg:mt-32 w-full max-w-lg mx-auto">
          <div className="flex flex-col items-center justify-center font-mono text-sm tracking-[0.2em] text-foreground">
            
            <div className="build-block w-full py-6 border border-white/10 bg-white/[0.03] rounded-2xl backdrop-blur-sm shadow-xl transition-colors hover:bg-white/[0.05]">
              TECHNICAL WORK
            </div>
            
            <div className="build-line w-[1px] h-12 bg-gradient-to-b from-white/20 to-signal/50 my-2 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-signal shadow-[0_0_10px_rgba(0,107,255,0.8)]"></div>
            </div>
            
            <div className="build-block w-full py-6 border border-signal/30 bg-signal/10 rounded-2xl text-signal shadow-[0_0_30px_rgba(0,107,255,0.1)] transition-all hover:bg-signal/20 hover:shadow-[0_0_40px_rgba(0,107,255,0.2)]">
              STRUCTURED EVIDENCE
            </div>
            
            <div className="build-line w-[1px] h-12 bg-gradient-to-b from-signal/50 to-white/20 my-2 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/40"></div>
            </div>
            
            <div className="build-block w-full py-6 border border-white/10 bg-white/[0.02] rounded-2xl text-muted backdrop-blur-sm transition-colors hover:bg-white/[0.04] hover:text-foreground">
              DEEPER UNDERSTANDING
            </div>

          </div>
        </div>

      </Container>
    </section>
  );
}
