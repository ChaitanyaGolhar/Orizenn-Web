'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Act4Principle() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 1024px)", () => {
      gsap.timeline({
        scrollTrigger: {
          trigger: '#beat-11',
          start: 'center center',
          end: '+=800',
          pin: true,
          scrub: true,
        }
      })
      .to('#beat-11', { opacity: 1, duration: 0.6 })
      .to('#beat-11', { opacity: 0, duration: 0.4 });
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full relative flex flex-col act-container border-t border-white/5 py-16 lg:py-32" id="act4-principle">
      
      <div id="beat-11" className="h-auto py-16 lg:min-h-[100vh] flex flex-col items-center justify-center relative z-20 w-full">
        
        <span className="font-mono text-[10px] text-signal tracking-widest uppercase mb-8 lg:mb-16 block">THE ORIZENN APPROACH</span>
        <div className="w-11/12 lg:w-full flex items-center justify-center my-8 lg:my-12 max-w-4xl mx-auto relative">
           <img src="/principle-mockup.png" alt="Orizenn Principle" className="w-full h-auto object-contain" />
        </div>
        <div className="mt-8 lg:mt-24 max-w-lg text-center">
          <p className="text-muted text-sm lg:text-base leading-relaxed">
            Orizenn is built around a simple idea: technical work should be understood through the evidence inside the work itself.
          </p>
        </div>

      </div>

    </div>
  );
}
