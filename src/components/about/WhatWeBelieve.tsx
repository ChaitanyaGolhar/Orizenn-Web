'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/ui/Container';

gsap.registerPlugin(ScrollTrigger);

export function WhatWeBelieve() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      const elements = gsap.utils.toArray('.believe-anim');
      
      gsap.from(elements, {
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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-24 lg:py-48 border-t border-white/5" id="what-we-believe">
      <Container className="max-w-4xl mx-auto flex flex-col items-start">
        
        <h2 className="believe-anim font-sans text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter text-foreground leading-[1.1] mb-12">
          Start with the work.
        </h2>
        
        <p className="believe-anim text-xl lg:text-2xl text-muted font-light max-w-3xl leading-relaxed mb-24 lg:mb-32">
          The work itself is often the richest source of evidence.
        </p>

        <div className="flex flex-col gap-16 lg:gap-24 w-full">
          
          <div className="believe-anim flex flex-col md:flex-row gap-6 md:gap-12 w-full">
            <span className="font-mono text-sm text-signal tracking-widest uppercase md:w-16">01</span>
            <div className="flex-1">
              <h3 className="font-mono text-sm text-white/50 tracking-widest uppercase mb-4">WORK BEFORE ASSUMPTION</h3>
              <p className="text-xl text-foreground font-light leading-relaxed">
                Start with what was actually built.
              </p>
            </div>
          </div>

          <div className="believe-anim flex flex-col md:flex-row gap-6 md:gap-12 w-full">
            <span className="font-mono text-sm text-signal tracking-widest uppercase md:w-16">02</span>
            <div className="flex-1">
              <h3 className="font-mono text-sm text-white/50 tracking-widest uppercase mb-4">EVIDENCE BEFORE CONCLUSION</h3>
              <p className="text-xl text-foreground font-light leading-relaxed">
                Understand what the work demonstrates before making judgments.
              </p>
            </div>
          </div>

          <div className="believe-anim flex flex-col md:flex-row gap-6 md:gap-12 w-full">
            <span className="font-mono text-sm text-signal tracking-widest uppercase md:w-16">03</span>
            <div className="flex-1">
              <h3 className="font-mono text-sm text-white/50 tracking-widest uppercase mb-4">CONTEXT MATTERS</h3>
              <p className="text-xl text-foreground font-light leading-relaxed">
                A technical artifact means more when its relationships to the surrounding work are visible.
              </p>
            </div>
          </div>

        </div>
        
      </Container>
    </section>
  );
}
