'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '../ui/Container';
import { ArtifactNode } from '../evidence/ArtifactNode';

gsap.registerPlugin(ScrollTrigger);

export function SignalGap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const ctx = gsap.context(() => {
      if (!prefersReducedMotion && containerRef.current && visualRef.current) {
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: visualRef.current,
            start: 'top 70%',
            end: 'bottom 40%',
            scrub: 1,
          }
        });

        const artifacts = gsap.utils.toArray('.sg-artifact');
        const signals = gsap.utils.toArray('.sg-signal');
        const labelsLeft = document.querySelector('.sg-label-left');
        const labelsRight = document.querySelector('.sg-label-right');
        const centralStatement = document.querySelector('.sg-central-statement');

        gsap.set(signals, { opacity: 0, x: 50 });
        gsap.set(labelsRight, { opacity: 0 });
        gsap.set(centralStatement, { opacity: 0, y: 20 });

        // Phase 1: Artifacts begin to fade and compress
        tl.to(artifacts, {
          opacity: 0.1,
          x: 50,
          stagger: 0.05,
          filter: 'blur(4px)',
          duration: 1
        }, 0);

        tl.to(labelsLeft, { opacity: 0.3, duration: 1 }, 0);

        // Phase 2: Conventional signals emerge from the compression
        tl.to(signals, {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 1
        }, 0.5);

        tl.to(labelsRight, { opacity: 1, duration: 0.5 }, 0.5);

        // Phase 3: The concluding statement resolves
        tl.to(centralStatement, {
          opacity: 1,
          y: 0,
          duration: 0.5
        }, 1.5);
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen w-full bg-surface border-t border-border/50 flex flex-col justify-center py-32">
      <Container>
        
        <div className="text-center mb-24 max-w-[800px] mx-auto">
          <h2 className="font-sans text-h1 font-normal tracking-[-0.04em] leading-[1.1] text-foreground m-0 mb-8">
            A richer body of work can become a thinner signal.
          </h2>
          <p className="text-large text-muted leading-[1.5] m-0">
            The problem isn't that the work doesn't exist. It's that too much of its context disappears between the work itself and the way it is understood.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2px_1fr] gap-16 items-center max-w-[1000px] mx-auto relative" ref={visualRef}>
          
          {/* Left: The Rich Work */}
          <div className="flex flex-col gap-6 items-end">
            <h3 className="sg-label-left font-mono text-micro tracking-[0.1em] text-muted m-0 uppercase w-full text-right">What the work contains</h3>
            <div className="flex flex-col gap-3 w-full items-end">
              <ArtifactNode label="Source Code" type="code" className="sg-artifact" isActive />
              <ArtifactNode label="Architectural Decisions" type="document" className="sg-artifact" isActive />
              <ArtifactNode label="Jupyter Notebooks" type="notebook" className="sg-artifact" isActive />
              <ArtifactNode label="Experiment Results" type="data" className="sg-artifact" isActive />
              <ArtifactNode label="Commit History" type="code" className="sg-artifact" isActive />
            </div>
          </div>

          {/* Center: The Filter */}
          <div className="hidden md:flex flex-col items-center justify-center h-full relative">
            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-border to-transparent" />
            <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rotate-45 border-r border-t border-border/50 bg-surface" />
          </div>

          {/* Right: The Compressed Signal */}
          <div className="flex flex-col gap-6 items-start">
            <h3 className="sg-label-right font-mono text-micro tracking-[0.1em] text-signal m-0 uppercase w-full text-left">What often gets seen</h3>
            <div className="flex flex-col gap-4 w-full">
              {['Grade', 'Resume', 'Certificate'].map((item) => (
                <div key={item} className="sg-signal font-sans text-large font-medium py-3 border-b border-signal/20 text-foreground w-[200px]">
                  {item}
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="sg-central-statement text-center mt-24">
          <div className="inline-block border border-border/50 bg-background/50 px-8 py-4 rounded-md">
            <span className="font-sans text-small font-medium text-foreground uppercase tracking-widest">Information Loss</span>
          </div>
        </div>

      </Container>
    </section>
  );
}
