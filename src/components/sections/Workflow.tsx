'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '../ui/Container';
import { EvidenceNode } from '../evidence/EvidenceNode';
import { EvidenceLine } from '../evidence/EvidenceLine';
import { EvidenceStage } from '../evidence/EvidenceStage';

gsap.registerPlugin(ScrollTrigger);

export function Workflow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setActiveStage(3); // Show all active
      return;
    }

    const ctx = gsap.context(() => {
      if (containerRef.current) {
        const stages = 4;
        
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: 'top 30%',
          end: 'bottom 70%',
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const currentStage = Math.min(Math.floor(progress * stages), stages - 1);
            setActiveStage(currentStage);
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pt-32 pb-48 min-h-[150vh] bg-background">
      <Container>
        <div className="font-mono text-micro tracking-[0.1em] text-muted mb-16">03 / HOW IT WORKS</div>
        <h2 className="font-sans text-h1 font-normal tracking-[-0.04em] leading-[1.1] text-foreground m-0 mb-16">
          From project to evidence.
        </h2>
        <p className="text-large text-muted max-w-[40ch] leading-[1.4] m-0 mb-32">
          A technical project contains more information than its final submission usually reveals. Orizenn helps bring that information into view.
        </p>

        <div className="flex flex-col pl-8 mt-32">
          {/* Stage 0: WORK */}
          <div className="grid grid-cols-[80px_1fr] md:grid-cols-[200px_1fr] items-center">
            <div className="flex justify-center">
              <EvidenceNode label="Work" isActive={activeStage >= 0} />
            </div>
            <div className="pl-16">
              <EvidenceStage 
                title="Find the work." 
                description="Connect the project and identify the artifacts that make up the work." 
                isActive={activeStage >= 0} 
              />
            </div>
          </div>

          <div className="grid grid-cols-[80px_1fr] md:grid-cols-[200px_1fr] h-[100px]">
            <div className="flex justify-center py-2">
              <EvidenceLine isActive={activeStage >= 1} />
            </div>
            <div className="pl-16" />
          </div>

          {/* Stage 1: EVIDENCE */}
          <div className="grid grid-cols-[80px_1fr] md:grid-cols-[200px_1fr] items-center">
            <div className="flex justify-center">
              <EvidenceNode label="Evidence" isActive={activeStage >= 1} />
            </div>
            <div className="pl-16">
              <EvidenceStage 
                title="Understand the evidence." 
                description="Bring project artifacts into context." 
                isActive={activeStage >= 1} 
              />
            </div>
          </div>

          <div className="grid grid-cols-[80px_1fr] md:grid-cols-[200px_1fr] h-[100px]">
            <div className="flex justify-center py-2">
              <EvidenceLine isActive={activeStage >= 2} />
            </div>
            <div className="pl-16" />
          </div>

          {/* Stage 2: EVALUATION */}
          <div className="grid grid-cols-[80px_1fr] md:grid-cols-[200px_1fr] items-center">
            <div className="flex justify-center">
              <EvidenceNode label="Evaluation" isActive={activeStage >= 2} />
            </div>
            <div className="pl-16">
              <EvidenceStage 
                title="Examine what it demonstrates." 
                description="Analyze the work and surface evidence that can inform evaluation." 
                isActive={activeStage >= 2} 
              />
            </div>
          </div>

          <div className="grid grid-cols-[80px_1fr] md:grid-cols-[200px_1fr] h-[100px]">
            <div className="flex justify-center py-2">
              <EvidenceLine isActive={activeStage >= 3} />
            </div>
            <div className="pl-16" />
          </div>

          {/* Stage 3: UNDERSTANDING */}
          <div className="grid grid-cols-[80px_1fr] md:grid-cols-[200px_1fr] items-center">
            <div className="flex justify-center">
              <EvidenceNode label="Understanding" isActive={activeStage >= 3} />
            </div>
            <div className="pl-16">
              <EvidenceStage 
                title="Make the picture clearer." 
                description="Bring evidence, evaluation, and findings together." 
                isActive={activeStage >= 3} 
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
