'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/ui/Container';

gsap.registerPlugin(ScrollTrigger);

export function LookingAhead() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      const elements = gsap.utils.toArray('.ahead-anim');
      
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
    <section ref={containerRef} className="relative py-24 lg:py-48 border-t border-white/5" id="looking-ahead">
      <Container className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        <h2 className="ahead-anim font-sans text-4xl md:text-5xl lg:text-7xl font-light tracking-tighter text-foreground leading-[1.1] mb-12">
          A clearer way to understand technical work.
        </h2>
        
        <p className="ahead-anim text-xl lg:text-3xl font-light text-foreground max-w-3xl leading-relaxed mb-8">
          As technical work becomes more complex, understanding how something was built can matter as much as the thing that was ultimately delivered.
        </p>

        <p className="ahead-anim text-xl lg:text-3xl font-light text-muted max-w-3xl leading-relaxed">
          Orizenn is building toward a world where more of that work can be seen, understood, and evaluated on its own evidence.
        </p>
        
      </Container>
    </section>
  );
}
