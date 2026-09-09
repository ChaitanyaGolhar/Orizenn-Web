'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/ui/Container';

gsap.registerPlugin(ScrollTrigger);

export function WhyOrizenn() {
  const containerRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      const textElements = gsap.utils.toArray('.why-text-anim');
      
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

      // Visual Animation
      if (visualRef.current) {
        const lostItems = gsap.utils.toArray('.lost-item');
        
        gsap.fromTo(lostItems, 
          { x: 0, opacity: 0, scale: 0.8 },
          {
            scrollTrigger: {
              trigger: visualRef.current,
              start: 'top 70%',
              end: 'bottom center',
              scrub: 1,
            },
            x: (i) => i % 2 === 0 ? -40 : 40,
            opacity: (i) => 0.3 + (i * 0.05),
            scale: 1,
            stagger: 0.1,
            ease: 'power1.out'
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-24 lg:py-48 border-t border-white/5" id="why-orizenn">
      <Container className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        <h2 className="why-text-anim font-sans text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-foreground leading-[1.1] mb-8">
          A lot gets lost between the work and the signal.
        </h2>
        
        <p className="why-text-anim text-lg lg:text-xl text-muted max-w-2xl leading-relaxed">
          Technical work is often compressed into grades, resumes, certificates, portfolios, or final submissions. These signals are useful, but they cannot always capture the context contained in the work itself.
        </p>

        {/* Compression Visual */}
        <div ref={visualRef} className="why-text-anim mt-20 lg:mt-32 font-mono text-sm tracking-widest text-muted/60 flex flex-col items-center w-full max-w-lg mx-auto relative">
          
          <div className="w-full py-4 border border-white/10 bg-white/[0.02] rounded-xl text-foreground backdrop-blur-sm relative z-10">
            TECHNICAL WORK
          </div>
          
          <div className="w-[1px] h-32 bg-gradient-to-b from-white/30 via-white/10 to-signal/30 my-2 relative z-0">
             {/* What gets lost (animated drift out) */}
             <div className="lost-item absolute left-0 top-4 text-[10px] whitespace-nowrap text-white/40">Experiments</div>
             <div className="lost-item absolute right-0 top-8 text-[10px] whitespace-nowrap text-white/40">Iterations</div>
             <div className="lost-item absolute left-0 top-14 text-[10px] whitespace-nowrap text-white/40">Decisions</div>
             <div className="lost-item absolute right-0 top-20 text-[10px] whitespace-nowrap text-white/40">Changes</div>
             <div className="lost-item absolute left-0 top-24 text-[10px] whitespace-nowrap text-white/40">Reasoning</div>
             <div className="lost-item absolute right-0 top-28 text-[10px] whitespace-nowrap text-white/40">Attempts</div>
          </div>
          
          <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] my-2 italic z-10">
            compressed into
          </div>
          
          <div className="w-[1px] h-8 bg-gradient-to-b from-signal/30 to-signal/60 my-2 z-0"></div>
          
          <div className="px-8 py-3 rounded-xl border border-signal/30 bg-signal/10 text-signal font-medium shadow-[0_0_20px_rgba(0,107,255,0.15)] z-10 uppercase tracking-[0.3em]">
            SIGNAL
          </div>
          
        </div>
        
      </Container>
    </section>
  );
}
