'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '../ui/Container';
import { EvidenceNode } from '../evidence/EvidenceNode';
import { EvidenceStage } from '../evidence/EvidenceStage';
import { EvidenceTrace } from '../evidence/EvidenceTrace';

gsap.registerPlugin(ScrollTrigger);

export function Workflow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setActiveStage(3); // Show all active immediately
      return;
    }

    const ctx = gsap.context(() => {
      if (containerRef.current) {
        // The container is pinned. We calculate progress across 4 stages.
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: 'top top',
          end: '+=200%', // Scroll for twice the viewport height to scrub through
          pin: true,
          scrub: 0.5,
          onUpdate: (self) => {
            const stages = 4;
            const currentStageRaw = self.progress * stages;
            // E.g., progress 0.25 -> stage 1. Set state to enable UI transition.
            setActiveStage(currentStageRaw);
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Helper to determine trace progress (0 to 1) between stages
  const getTraceProgress = (stageIndex: number) => {
    const relativeProgress = activeStage - stageIndex;
    if (relativeProgress <= 0) return 0;
    if (relativeProgress >= 1) return 1;
    return relativeProgress;
  };

  return (
    <section ref={containerRef} className="h-screen w-full bg-background flex flex-col justify-center border-t border-border">
      <Container className="grid grid-cols-1 md:grid-cols-[4fr_8fr] gap-16 items-center">
        
        {/* Left Side: Context */}
        <div className="flex flex-col gap-8">
          <div className="font-mono text-micro tracking-[0.1em] text-muted">03 / HOW IT WORKS</div>
          <h2 className="font-sans text-h1 font-normal tracking-[-0.04em] leading-[1.1] text-foreground m-0">
            From project to evidence.
          </h2>
          <p className="text-large text-muted leading-[1.4] m-0">
            A technical project contains more information than its final submission usually reveals. Orizenn helps bring that information into view.
          </p>
        </div>

        {/* Right Side: The Pinned Signature Interaction */}
        <div className="flex flex-col pl-8 md:pl-24 relative py-12">
          
          {/* Stage 0: WORK */}
          <div className="grid grid-cols-[80px_1fr] items-center">
            <div className="flex justify-center relative z-10">
              <EvidenceNode label="01 Work" isActive={activeStage >= 0} />
            </div>
            <div className="pl-12">
              <EvidenceStage 
                title="Find the work." 
                description="Connect the project and identify the artifacts that make up the work." 
                isActive={activeStage >= 0} 
              />
            </div>
          </div>

          <div className="grid grid-cols-[80px_1fr]">
            <div className="flex justify-center py-2 h-[80px]">
              <EvidenceTrace progress={getTraceProgress(0)} />
            </div>
            <div className="pl-12" />
          </div>

          {/* Stage 1: EVIDENCE */}
          <div className="grid grid-cols-[80px_1fr] items-center">
            <div className="flex justify-center relative z-10">
              <EvidenceNode label="02 Evidence" isActive={activeStage >= 1} />
            </div>
            <div className="pl-12">
              <EvidenceStage 
                title="Understand the evidence." 
                description="Bring project artifacts into context." 
                isActive={activeStage >= 1} 
              />
            </div>
          </div>

          <div className="grid grid-cols-[80px_1fr]">
            <div className="flex justify-center py-2 h-[80px]">
              <EvidenceTrace progress={getTraceProgress(1)} />
            </div>
            <div className="pl-12" />
          </div>

          {/* Stage 2: EVALUATION */}
          <div className="grid grid-cols-[80px_1fr] items-center">
            <div className="flex justify-center relative z-10">
              <EvidenceNode label="03 Evaluation" isActive={activeStage >= 2} />
            </div>
            <div className="pl-12">
              <EvidenceStage 
                title="Examine what it demonstrates." 
                description="Analyze the work and surface evidence that can inform evaluation." 
                isActive={activeStage >= 2} 
              />
            </div>
          </div>

          <div className="grid grid-cols-[80px_1fr]">
            <div className="flex justify-center py-2 h-[80px]">
              <EvidenceTrace progress={getTraceProgress(2)} />
            </div>
            <div className="pl-12" />
          </div>

          {/* Stage 3: UNDERSTANDING */}
          <div className="grid grid-cols-[80px_1fr] items-center">
            <div className="flex justify-center relative z-10">
              <EvidenceNode label="04 Understanding" isActive={activeStage >= 3} />
            </div>
            <div className="pl-12">
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
