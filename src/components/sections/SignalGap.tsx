'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '../ui/Container';

gsap.registerPlugin(ScrollTrigger);

export function SignalGap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const ctx = gsap.context(() => {
      if (!prefersReducedMotion && containerRef.current) {
        const leftItems = gsap.utils.toArray('.signal-left-item');
        const rightItems = gsap.utils.toArray('.signal-right-item');
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            end: 'center 50%',
            scrub: 1,
          }
        });

        tl.to(leftItems, {
          opacity: 0.2,
          y: (i) => (i - 2.5) * -15, // Converge towards center
          stagger: 0.05,
        }, 0);

        tl.fromTo(rightItems, 
          { opacity: 0.1, x: 20 },
          { opacity: 1, x: 0, stagger: 0.1 },
          0.2
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pt-32 pb-48 bg-surface border-t border-border/50">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_80px_1fr] gap-32 mb-48 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            <h3 className="font-mono text-micro tracking-[0.1em] text-muted m-0">WHAT THE WORK CONTAINS</h3>
            <div className="flex flex-col gap-4">
              {['Code', 'Decisions', 'Experiments', 'Results', 'Iteration', 'Documentation'].map((item) => (
                <div key={item} className="signal-left-item font-sans text-large font-medium py-4 border-b border-border text-muted">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Center Divider */}
          <div className="hidden md:flex justify-center h-full">
            <div className="w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            <h3 className="font-mono text-micro tracking-[0.1em] text-muted m-0">WHAT OFTEN GETS SEEN</h3>
            <div className="flex flex-col gap-4">
              {['Grade', 'Resume', 'Certificate', 'Portfolio'].map((item) => (
                <div key={item} className="signal-right-item font-sans text-large font-medium py-4 border-b border-white/20 text-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="font-sans text-h1 font-normal tracking-[-0.04em] leading-[1.1] text-foreground m-0 mb-8">
            A richer body of work can become a thinner signal.
          </h2>
          <p className="text-large text-muted leading-[1.5] m-0">
            The problem isn't that the work doesn't exist. It's that too much of its context disappears between the work itself and the way it is understood.
          </p>
        </div>
      </Container>
    </section>
  );
}
