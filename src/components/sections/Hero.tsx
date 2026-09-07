'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { EvidenceNode } from '../evidence/EvidenceNode';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const visualsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const ctx = gsap.context(() => {
      if (!prefersReducedMotion && containerRef.current && visualsRef.current) {
        const nodes = gsap.utils.toArray('.scatter-node');
        const lines = gsap.utils.toArray('.scatter-line');
        const centralNode = document.querySelector('.central-node');
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom center',
            scrub: 1,
          }
        });

        tl.to(nodes, {
          y: (i) => (i % 2 === 0 ? -60 : 60),
          x: (i) => (i % 2 === 0 ? 40 : -40),
          opacity: 0.2,
          stagger: 0.1,
        }, 0);
        
        tl.to(lines, {
          opacity: 0.1,
          scaleX: 0.5,
          stagger: 0.1,
        }, 0);
        
        tl.to(centralNode, {
          scale: 1.1,
          opacity: 1,
        }, 0);
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen flex items-center relative overflow-hidden pt-32 pb-32">
      <Container className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-32 items-center relative z-10">
        
        <div className="flex flex-col gap-8 relative z-20">
          <div className="font-mono text-micro tracking-[0.1em] text-muted">FROM TECHNICAL WORK TO EVIDENCE</div>
          <h1 className="font-sans text-hero font-normal leading-[1.1] tracking-[-0.04em] text-foreground m-0">
            Let the work speak.
          </h1>
          <p className="text-large text-muted max-w-[32ch] leading-[1.4] m-0">
            Orizenn turns technical work into structured evidence — making it easier to understand what was built, what it demonstrates, and how it should be evaluated.
          </p>
          
          <div className="flex items-center gap-4 mt-4">
            <Button href="/explore" variant="primary">Explore Orizenn →</Button>
            <Button href="/institutions" variant="secondary">For Institutions →</Button>
          </div>
          
          <div className="font-mono text-micro text-muted mt-32 opacity-50">
            Real work. Real evidence. Better context.
          </div>
        </div>

        <div className="relative h-[600px] flex items-center justify-center perspective-[1000px]" ref={visualsRef}>
          {/* SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0">
            <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="var(--color-border)" strokeWidth="1" className="scatter-line origin-center" />
            <line x1="80%" y1="30%" x2="50%" y2="50%" stroke="var(--color-border)" strokeWidth="1" className="scatter-line origin-center" />
            <line x1="25%" y1="70%" x2="50%" y2="50%" stroke="var(--color-border)" strokeWidth="1" className="scatter-line origin-center" />
            <line x1="75%" y1="75%" x2="50%" y2="50%" stroke="var(--color-border)" strokeWidth="1" className="scatter-line origin-center" />
            <line x1="10%" y1="45%" x2="50%" y2="50%" stroke="var(--color-border)" strokeWidth="1" className="scatter-line origin-center" />
          </svg>

          {/* Artifact Nodes */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="absolute top-[15%] left-[10%] scatter-node transition-transform"><EvidenceNode label="Code" /></div>
            <div className="absolute top-[25%] right-[15%] scatter-node transition-transform"><EvidenceNode label="Experiments" /></div>
            <div className="absolute bottom-[25%] left-[15%] scatter-node transition-transform"><EvidenceNode label="Documentation" /></div>
            <div className="absolute bottom-[20%] right-[15%] scatter-node transition-transform"><EvidenceNode label="Data" /></div>
            <div className="absolute top-[45%] left-[5%] scatter-node transition-transform"><EvidenceNode label="Notebooks" /></div>
          </div>
          
          {/* Central System */}
          <div className="relative w-[300px] h-[300px] flex items-center justify-center z-20">
            {/* Subtle light emergence */}
            <div className="absolute w-[250px] h-[250px] rounded-full bg-[radial-gradient(circle,rgba(0,102,255,0.08)_0%,rgba(0,102,255,0)_70%)] pointer-events-none" />
            
            <div className="central-node relative z-10">
              <EvidenceNode label="Evidence" isActive={true} className="scale-110" />
            </div>
          </div>
        </div>
        
      </Container>
    </section>
  );
}
