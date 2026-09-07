'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { EvidenceField } from '../evidence/EvidenceField';
import { ArtifactNode } from '../evidence/ArtifactNode';
import { EvidenceNode } from '../evidence/EvidenceNode';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const ctx = gsap.context(() => {
      if (!prefersReducedMotion && containerRef.current && visualRef.current) {
        
        // Setup GSAP Timeline bound to scroll
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
            pin: true,
          }
        });

        const artifacts = gsap.utils.toArray('.hero-artifact');
        const lines = gsap.utils.toArray('.hero-line');
        const evidenceNode = document.querySelector('.hero-evidence');
        const evaluationNode = document.querySelector('.hero-evaluation');
        const understandingNode = document.querySelector('.hero-understanding');

        // Initial state: artifacts scattered, nodes hidden
        gsap.set([evidenceNode, evaluationNode, understandingNode], { opacity: 0, scale: 0.8 });
        gsap.set(lines, { strokeDasharray: 1000, strokeDashoffset: 1000, opacity: 0 });

        // Phase 1: Artifacts converge slightly and lines draw
        tl.to(artifacts, {
          x: (i) => (i % 2 === 0 ? 30 : -30),
          y: (i) => (i < 2 ? 30 : -30),
          opacity: 0.6,
          duration: 1
        }, 0);
        
        tl.to(lines, {
          strokeDashoffset: 0,
          opacity: 0.3,
          duration: 1
        }, 0);

        // Phase 2: Evidence emerges
        tl.to(evidenceNode, {
          opacity: 1,
          scale: 1,
          duration: 0.5
        }, 1);

        // Phase 3: Evaluation & Understanding sequentially emerge
        tl.to(evaluationNode, {
          opacity: 1,
          scale: 1,
          duration: 0.5
        }, 1.5);
        
        tl.to(understandingNode, {
          opacity: 1,
          scale: 1,
          duration: 0.5
        }, 2);
        
        // Final: Dim the raw artifacts to highlight the Understanding
        tl.to(artifacts, {
          opacity: 0.1,
          duration: 0.5
        }, 2);
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen w-full relative overflow-hidden bg-background">
      <Container className="h-full grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 items-center">
        
        {/* Left: Copy */}
        <div className="flex flex-col gap-8 relative z-20 pt-24">
          <div className="font-mono text-micro tracking-[0.1em] text-muted uppercase">From Technical Work to Evidence</div>
          <h1 className="font-sans text-hero font-normal leading-[1.05] tracking-[-0.04em] text-foreground m-0">
            Let the work speak.
          </h1>
          <p className="text-large text-muted max-w-[32ch] leading-[1.4] m-0">
            Orizenn turns technical work into structured evidence — making it easier to understand what was built, what it demonstrates, and how it should be evaluated.
          </p>
          
          <div className="flex items-center gap-4 mt-8">
            <Button href="/product" variant="primary">Explore Orizenn →</Button>
            <Button href="/institutions" variant="secondary">For Institutions →</Button>
          </div>
          
          <div className="font-mono text-micro text-muted mt-24 opacity-60 uppercase tracking-widest">
            Real work. Real evidence. Better context.
          </div>
        </div>

        {/* Right: Visual Benchmark (Information Field) */}
        <div className="relative h-[80%] w-full flex items-center justify-center" ref={visualRef}>
          <EvidenceField className="absolute inset-0">
            
            {/* Connection Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ filter: 'drop-shadow(0 0 8px rgba(0,107,255,0.2))' }}>
              <path d="M 20% 20% Q 40% 40% 50% 50%" fill="none" stroke="var(--color-signal)" strokeWidth="1" className="hero-line" />
              <path d="M 80% 25% Q 60% 40% 50% 50%" fill="none" stroke="var(--color-signal)" strokeWidth="1" className="hero-line" />
              <path d="M 25% 80% Q 40% 60% 50% 50%" fill="none" stroke="var(--color-signal)" strokeWidth="1" className="hero-line" />
              <path d="M 75% 75% Q 60% 60% 50% 50%" fill="none" stroke="var(--color-signal)" strokeWidth="1" className="hero-line" />
              
              {/* Vertical progression lines */}
              <path d="M 50% 50% L 50% 65%" fill="none" stroke="var(--color-signal)" strokeWidth="2" className="hero-line" />
              <path d="M 50% 65% L 50% 80%" fill="none" stroke="var(--color-signal)" strokeWidth="2" className="hero-line" />
            </svg>

            {/* Scattered Artifacts */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              <ArtifactNode label="app.ts" type="code" className="absolute top-[15%] left-[15%] hero-artifact" />
              <ArtifactNode label="model.ipynb" type="notebook" className="absolute top-[20%] right-[20%] hero-artifact" />
              <ArtifactNode label="architecture.md" type="document" className="absolute bottom-[25%] left-[20%] hero-artifact" />
              <ArtifactNode label="results.csv" type="data" className="absolute bottom-[20%] right-[25%] hero-artifact" />
              <ArtifactNode label="eval_script.py" type="code" className="absolute top-[40%] left-[5%] hero-artifact" />
            </div>
            
            {/* Central Progression Axis */}
            <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-[12vh] z-20">
              <div className="hero-evidence">
                <EvidenceNode label="Evidence" isActive={true} className="scale-110" />
              </div>
              <div className="hero-evaluation">
                <EvidenceNode label="Evaluation" isActive={true} className="scale-110" />
              </div>
              <div className="hero-understanding">
                <div className="px-6 py-3 bg-signal/10 border border-signal/50 rounded-md text-foreground font-sans font-medium shadow-[0_0_30px_rgba(0,107,255,0.2)]">
                  Understanding
                </div>
              </div>
            </div>
            
          </EvidenceField>
        </div>
        
      </Container>
    </section>
  );
}
