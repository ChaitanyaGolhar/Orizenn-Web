'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/ui/Container';

gsap.registerPlugin(ScrollTrigger);

export function OurStandard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      const elements = gsap.utils.toArray('.standard-anim');
      
      gsap.from(elements, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-32 lg:py-48 border-t border-white/5 bg-[#070709]" id="our-standard">
      <Container className="flex flex-col items-center text-center">
        
        <h2 className="standard-anim font-sans text-xl lg:text-2xl font-light tracking-tighter text-muted mb-24 lg:mb-40">
          We would rather show than claim.
        </h2>

        <div className="flex flex-col gap-24 lg:gap-40 w-full max-w-5xl mx-auto">
          
          <div className="standard-anim flex flex-col items-center gap-6">
            <h3 className="font-sans text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter text-foreground leading-[1.1]">
              SHOW THE WORK
            </h3>
            <span className="font-mono text-sm text-signal tracking-[0.3em] uppercase italic">not</span>
            <h3 className="font-sans text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter text-muted/60 leading-[1.1]">
              MAKE BIG CLAIMS
            </h3>
          </div>

          <div className="standard-anim flex flex-col items-center gap-6">
            <h3 className="font-sans text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter text-foreground leading-[1.1]">
              SHOW THE EVIDENCE
            </h3>
            <span className="font-mono text-sm text-signal tracking-[0.3em] uppercase italic">not</span>
            <h3 className="font-sans text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter text-muted/60 leading-[1.1]">
              HIDE THE PROCESS
            </h3>
          </div>

          <div className="standard-anim flex flex-col items-center gap-6">
            <h3 className="font-sans text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter text-foreground leading-[1.1]">
              SHOW THE LIMITS
            </h3>
            <span className="font-mono text-sm text-signal tracking-[0.3em] uppercase italic">not</span>
            <h3 className="font-sans text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter text-muted/60 leading-[1.1]">
              PRETEND CERTAINTY
            </h3>
          </div>

        </div>
        
      </Container>
    </section>
  );
}
