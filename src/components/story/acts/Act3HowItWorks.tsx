'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Act3HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 1024px)", () => {
      // Pin each beat in the center of the screen and fade out on desktop
      const beats = ['#beat-08', '#beat-09', '#beat-10'];
      beats.forEach((beat) => {
        gsap.timeline({
          scrollTrigger: {
            trigger: beat,
            start: 'center center',
            end: '+=800',
            pin: true,
            scrub: true,
          }
        })
        .to(beat, { opacity: 1, duration: 0.6 })
        .to(beat, { opacity: 0, duration: 0.4 });
      });
    });

    mm.add("(max-width: 1023px)", () => {
      // Mobile-specific scroll transformations
      
      // Evidence (Progressive connections)
      gsap.fromTo('.mobile-visual-evidence',
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0,
          scrollTrigger: {
            trigger: '#beat-08',
            start: 'top 75%',
            end: 'center center',
            scrub: true
          }
        }
      );

      // Understanding (Scroll convergence)
      gsap.fromTo('.mobile-visual-understanding',
        { scale: 1.1, opacity: 0.5 },
        {
          scale: 1, opacity: 1,
          scrollTrigger: {
            trigger: '#beat-10',
            start: 'top 80%',
            end: 'center center',
            scrub: true
          }
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full relative flex flex-col lg:flex-row act-container" id="act3-how-it-works">
      
      {/* NARRATIVE COLUMN */}
      <div className="w-full lg:w-5/12 flex flex-col relative z-20 lg:pr-12">
        
        <div id="beat-08" className="min-h-[50vh] lg:min-h-[100vh] flex flex-col justify-center">
          <span className="font-mono text-[10px] text-signal tracking-widest uppercase mb-4 block">03 / HOW IT WORKS</span>
          <h2 className="font-sans text-3xl lg:text-4xl text-foreground leading-[1.1] tracking-tight mb-6">Understand the evidence.</h2>
          <p className="text-muted text-sm lg:text-base leading-relaxed mb-8">
            Bring project artifacts into context and surface the signals they contain.
          </p>
          
          <div className="lg:hidden w-full aspect-[4/3] border border-white/10 bg-white/5 rounded-xl flex items-center justify-center mt-4 shadow-lg mobile-visual-evidence">
             <span className="font-mono text-sm text-white/30 uppercase tracking-widest text-center">Mockup Placeholder<br/>Evidence Graph (Progressive)</span>
          </div>
        </div>

        <div id="beat-09" className="h-auto py-12 lg:min-h-[100vh] flex flex-col justify-center">
          <h2 className="font-sans text-2xl lg:text-3xl text-foreground leading-[1.1] tracking-tight mb-6">Examine what it demonstrates.</h2>
          <p className="text-muted text-sm lg:text-base leading-relaxed mb-8">
            Analyze the work and surface evidence that can inform evaluation.
          </p>
          
          <div className="lg:hidden w-full h-40 border border-white/10 bg-white/5 rounded-xl flex items-center justify-center mt-4">
             <span className="font-mono text-sm text-white/30 uppercase tracking-widest text-center">Mockup Placeholder<br/>Reasoning Chain (Compact)</span>
          </div>
        </div>

        <div id="beat-10" className="min-h-[65vh] lg:min-h-[100vh] flex flex-col justify-center py-12">
          <h2 className="font-sans text-3xl lg:text-4xl text-foreground leading-[1.1] tracking-tight mb-6">Make the picture clearer.</h2>
          <p className="text-muted text-sm lg:text-base leading-relaxed mb-8">
            Bring evidence, evaluation, and findings together.
          </p>
          
          <div className="lg:hidden w-full aspect-square border border-white/10 bg-white/5 rounded-xl flex items-center justify-center mt-4 shadow-xl mobile-visual-understanding">
             <span className="font-mono text-sm text-white/30 uppercase tracking-widest text-center">Mockup Placeholder<br/>Convergence (Transform)</span>
          </div>
        </div>

      </div>

      {/* VISUAL COLUMN (Sticky on Desktop) */}
      <div className="hidden lg:flex w-7/12 h-[100vh] sticky top-0 z-10 items-center justify-center overflow-hidden p-12">
        <div className="w-full h-full border border-white/10 bg-white/5 rounded-xl flex items-center justify-center shadow-xl">
          <span className="font-mono text-sm text-white/30 uppercase tracking-widest text-center">Mockup Placeholder<br/>How It Works</span>
        </div>
      </div>

    </div>
  );
}
