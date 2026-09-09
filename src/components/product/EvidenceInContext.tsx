'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/ui/Container';

gsap.registerPlugin(ScrollTrigger);

export function EvidenceInContext() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    if (!containerRef.current) return;
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 1024px)", () => {
      // Accumulation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=1500',
          pin: true,
          scrub: true,
          onUpdate: (self) => {
            const p = self.progress;
            if (p < 0.25) setActiveStep(1);
            else if (p < 0.5) setActiveStep(2);
            else if (p < 0.75) setActiveStep(3);
            else setActiveStep(4);
          }
        }
      });
      
      // Step 2: Evidence appears
      tl.to('.ctx-narrative-1', { opacity: 0, duration: 0.5 })
        .fromTo('.ctx-narrative-2', { opacity: 0 }, { opacity: 1, duration: 0.5 }, '>')
      
      // Step 3: Context appears
        .to('.ctx-narrative-2', { opacity: 0, duration: 0.5 })
        .fromTo('.ctx-narrative-3', { opacity: 0 }, { opacity: 1, duration: 0.5 }, '>')

      // Step 4: Finding appears
        .to('.ctx-narrative-3', { opacity: 0, duration: 0.5 })
        .fromTo('.ctx-narrative-4', { opacity: 0 }, { opacity: 1, duration: 0.5 }, '>');
    });

    return () => mm.revert();
  }, []);

  const placeholderText = () => {
    switch (activeStep) {
      case 1: return 'Mockup Placeholder\nArtifact Isolated';
      case 2: return 'Mockup Placeholder\nArtifact + Evidence';
      case 3: return 'Mockup Placeholder\nArtifact + Evidence + Context';
      case 4: return 'Mockup Placeholder\nResolved Finding';
      default: return 'Mockup Placeholder';
    }
  };

  return (
    <section className="relative bg-[#070709] border-b border-white/5" id="evidence-in-context" ref={containerRef}>
      <Container className="flex flex-col lg:flex-row h-full min-h-[100vh]">
        
        {/* Left: Sticky Narrative (Desktop) / Normal flow (Mobile) */}
        <div className="w-full lg:w-5/12 flex flex-col justify-center py-24 lg:py-0 relative z-20 px-6 md:px-12 xl:pl-24 xl:pr-12">
          
          <div className="relative h-auto lg:h-[200px] flex flex-col justify-center">
            <span className="font-mono text-[10px] text-signal tracking-widest uppercase mb-4 block lg:absolute lg:-top-12">04 / CONTEXT</span>

            {/* Desktop stacked narrative */}
            <div className="hidden lg:block">
              <div className="absolute inset-0 flex flex-col justify-center ctx-narrative-1">
                <h2 className="font-sans text-4xl font-light text-foreground mb-4">Start with the Artifact.</h2>
                <p className="text-muted leading-relaxed">An isolated artifact gives you structure, but lacks meaning.</p>
              </div>
              <div className="absolute inset-0 flex flex-col justify-center opacity-0 ctx-narrative-2">
                <h2 className="font-sans text-4xl font-light text-foreground mb-4">Surface the Evidence.</h2>
                <p className="text-muted leading-relaxed">The artifact yields a specific technical signal or behavior.</p>
              </div>
              <div className="absolute inset-0 flex flex-col justify-center opacity-0 ctx-narrative-3">
                <h2 className="font-sans text-4xl font-light text-foreground mb-4">Put it into Context.</h2>
                <p className="text-muted leading-relaxed">That signal affects other parts of the system, establishing a relationship.</p>
              </div>
              <div className="absolute inset-0 flex flex-col justify-center opacity-0 ctx-narrative-4">
                <h2 className="font-sans text-4xl font-light text-foreground mb-4">Resolve the Finding.</h2>
                <p className="text-muted leading-relaxed">Contextualized evidence resolves into a clear, understandable technical finding.</p>
              </div>
            </div>

            {/* Mobile linear narrative */}
            <div className="lg:hidden">
              <h2 className="font-sans text-3xl font-light tracking-tight text-foreground mb-6">
                Put evidence into context.
              </h2>
              <p className="text-base text-muted leading-relaxed">
                A change, experiment, test, or artifact means more when it can be understood in relation to the rest of the work.
              </p>
              <div className="w-full aspect-[4/3] border border-white/10 bg-white/5 rounded-xl flex items-center justify-center mt-12 shadow-lg">
                <span className="font-mono text-sm text-white/30 uppercase tracking-widest text-center whitespace-pre-wrap">Mockup Placeholder{'\n'}Contextual Relationships</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right: Cumulative Visual (Desktop) */}
        <div className="hidden lg:flex w-7/12 h-[100vh] sticky top-0 z-10 items-center justify-center overflow-hidden py-12 pr-12 xl:pr-24 pl-0">
          <div className="w-full h-[65vh] max-h-[800px] border border-white/10 bg-white/5 rounded-xl flex items-center justify-center shadow-xl transition-colors duration-500">
            <span className="font-mono text-sm text-white/30 uppercase tracking-widest text-center whitespace-pre-wrap">
              {placeholderText()}
            </span>
          </div>
        </div>

      </Container>
    </section>
  );
}
