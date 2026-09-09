'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/ui/Container';

gsap.registerPlugin(ScrollTrigger);

export function OurApproach() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      const elements = gsap.utils.toArray('.approach-anim');
      
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
    <section ref={containerRef} className="relative py-24 lg:py-48 border-t border-white/5" id="our-approach">
      <Container className="max-w-4xl mx-auto flex flex-col items-start">
        
        <h2 className="approach-anim font-sans text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter text-foreground leading-[1.1] mb-24">
          Build from evidence.
        </h2>

        <div className="flex flex-col gap-12 lg:gap-16 w-full max-w-2xl mx-auto text-center lg:text-left lg:mx-0">
          
          <div className="approach-anim flex flex-col items-center lg:items-start">
            <h3 className="font-mono text-sm lg:text-base text-signal tracking-[0.2em] uppercase mb-4">GROUNDED</h3>
            <p className="text-2xl lg:text-4xl text-foreground font-light tracking-tight">
              Start with the actual work.
            </p>
          </div>

          <div className="approach-anim w-[1px] h-12 bg-white/10 mx-auto lg:mx-0"></div>

          <div className="approach-anim flex flex-col items-center lg:items-start">
            <h3 className="font-mono text-sm lg:text-base text-signal tracking-[0.2em] uppercase mb-4">CONTEXTUAL</h3>
            <p className="text-2xl lg:text-4xl text-foreground font-light tracking-tight">
              Understand evidence in relation.
            </p>
          </div>

          <div className="approach-anim w-[1px] h-12 bg-white/10 mx-auto lg:mx-0"></div>

          <div className="approach-anim flex flex-col items-center lg:items-start">
            <h3 className="font-mono text-sm lg:text-base text-signal tracking-[0.2em] uppercase mb-4">TRACEABLE</h3>
            <p className="text-2xl lg:text-4xl text-foreground font-light tracking-tight">
              Connect findings to their sources.
            </p>
          </div>

          <div className="approach-anim w-[1px] h-12 bg-white/10 mx-auto lg:mx-0"></div>

          <div className="approach-anim flex flex-col items-center lg:items-start">
            <h3 className="font-mono text-sm lg:text-base text-signal tracking-[0.2em] uppercase mb-4">HONEST</h3>
            <p className="text-2xl lg:text-4xl text-foreground font-light tracking-tight">
              Be clear about the limits.
            </p>
          </div>

        </div>
        
      </Container>
    </section>
  );
}
