'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Act3HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      
      // Pin each beat in the center of the screen and fade out
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

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full relative flex flex-col md:flex-row act-container" id="act3-how-it-works">
      
      {/* NARRATIVE COLUMN */}
      <div className="w-full md:w-5/12 flex flex-col relative z-20 md:pr-12">
        
        <div id="beat-08" className="min-h-[100vh] flex flex-col justify-center">
          <span className="font-mono text-[10px] text-signal tracking-widest uppercase mb-4 block">03 / HOW IT WORKS</span>
          <h2 className="font-sans text-3xl lg:text-4xl text-foreground leading-[1.1] tracking-tight mb-4">Understand the evidence.</h2>
          <p className="text-muted text-sm lg:text-base leading-relaxed">
            Bring project artifacts into context and surface the signals they contain.
          </p>
        </div>

        <div id="beat-09" className="min-h-[100vh] flex flex-col justify-center">
          <h2 className="font-sans text-2xl lg:text-3xl text-foreground leading-[1.1] tracking-tight mb-4">Examine what it demonstrates.</h2>
          <p className="text-muted text-sm lg:text-base leading-relaxed">
            Analyze the work and surface evidence that can inform evaluation.
          </p>
        </div>

        <div id="beat-10" className="min-h-[100vh] flex flex-col justify-center">
          <h2 className="font-sans text-3xl lg:text-4xl text-foreground leading-[1.1] tracking-tight mb-4">Make the picture clearer.</h2>
          <p className="text-muted text-sm lg:text-base leading-relaxed">
            Bring evidence, evaluation, and findings together.
          </p>
        </div>

      </div>

      {/* VISUAL COLUMN (Sticky) */}
      <div className="hidden md:block w-7/12 h-[100vh] sticky top-0 z-10 flex items-center justify-center overflow-hidden p-12">
        
        <div className="w-full h-full border border-white/10 bg-white/5 rounded-xl flex items-center justify-center shadow-xl">
          <span className="font-mono text-sm text-white/30 uppercase tracking-widest text-center">Mockup Placeholder<br/>How It Works</span>
        </div>

      </div>

    </div>
  );
}
