'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Act2Approach() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 1024px)", () => {
      // Pin the beat in the center of the screen and fade out on desktop
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
    });

    mm.add("(max-width: 1023px)", () => {
      // Mobile-specific scroll reconstruction transformation
      gsap.fromTo('.mobile-visual-reconstruct',
        { scale: 0.8, opacity: 0.5 },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: '#beat-07',
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
    <div ref={containerRef} className="w-full relative flex flex-col lg:flex-row act-container lg:min-h-[150vh]" id="act2-approach">
      
      {/* NARRATIVE COLUMN */}
      <div className="w-full lg:w-5/12 flex flex-col relative z-20 lg:pr-12 justify-center">
        <div id="beat-07" className="min-h-[65vh] lg:min-h-[100vh] flex flex-col justify-center">
          <span className="font-mono text-[10px] text-signal tracking-widest uppercase mb-4 block">02 / A DIFFERENT APPROACH</span>
          <h2 className="font-sans text-3xl lg:text-4xl text-foreground leading-[1.1] tracking-tight mb-6">Start with the work.</h2>
          <p className="text-muted text-sm lg:text-base leading-relaxed mb-8">
            Orizenn begins with the technical work itself — not only the claim made about it. It discovers the artifacts inside a project, organizes the evidence they contain, and brings that evidence into a clearer view.
          </p>
          
          <div className="lg:hidden w-full aspect-square border border-white/10 bg-white/5 rounded-xl flex items-center justify-center mt-4 shadow-xl mobile-visual-reconstruct">
             <span className="font-mono text-sm text-white/30 uppercase tracking-widest text-center">Mockup Placeholder<br/>Reconstruction (Scroll Transform)</span>
          </div>
        </div>
      </div>

      {/* VISUAL COLUMN (Sticky on Desktop) */}
      <div className="hidden lg:flex w-7/12 h-[100vh] sticky top-0 z-10 items-center justify-center overflow-hidden p-12">
        <div className="w-full h-full border border-white/10 bg-white/5 rounded-xl flex items-center justify-center shadow-xl">
          <span className="font-mono text-sm text-white/30 uppercase tracking-widest text-center">Mockup Placeholder<br/>A Different Approach</span>
        </div>
      </div>

    </div>
  );
}
