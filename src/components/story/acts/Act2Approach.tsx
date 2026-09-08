'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Act2Approach() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true
        }
      });

      // Pin the beat in the center of the screen and fade out
      gsap.timeline({
        scrollTrigger: {
          trigger: '#beat-07',
          start: 'center center',
          end: '+=800',
          pin: true,
          scrub: true,
        }
      })
      .to('#beat-07', { opacity: 1, duration: 0.6 })
      .to('#beat-07', { opacity: 0, duration: 0.4 });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full relative flex flex-col md:flex-row act-container min-h-[150vh]" id="act2-approach">
      
      {/* NARRATIVE COLUMN */}
      <div className="w-full md:w-5/12 flex flex-col relative z-20 md:pr-12 justify-center">
        <div id="beat-07" className="min-h-[100vh] flex flex-col justify-center">
          <span className="font-mono text-[10px] text-signal tracking-widest uppercase mb-4 block">02 / A DIFFERENT APPROACH</span>
          <h2 className="font-sans text-3xl lg:text-4xl text-foreground leading-[1.1] tracking-tight mb-4">Start with the work.</h2>
          <p className="text-muted text-sm lg:text-base leading-relaxed">
            Orizenn begins with the technical work itself — not only the claim made about it. It discovers the artifacts inside a project, organizes the evidence they contain, and brings that evidence into a clearer view.
          </p>
        </div>
      </div>

      {/* VISUAL COLUMN (Sticky) */}
      <div className="hidden md:block w-7/12 h-[100vh] sticky top-0 z-10 flex items-center justify-center overflow-hidden p-12">
        
        <div className="w-full h-full border border-white/10 bg-white/5 rounded-xl flex items-center justify-center shadow-xl">
          <span className="font-mono text-sm text-white/30 uppercase tracking-widest text-center">Mockup Placeholder<br/>A Different Approach</span>
        </div>

      </div>

    </div>
  );
}
