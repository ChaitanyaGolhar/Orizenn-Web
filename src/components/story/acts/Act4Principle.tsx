'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Act4Principle() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
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
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full relative flex flex-col act-container border-t border-white/5 py-32" id="act4-principle">
      
      <div id="beat-11" className="min-h-[100vh] flex flex-col items-center justify-center relative z-20 w-full">
        
        <span className="font-mono text-[10px] text-signal tracking-widest uppercase mb-16 block">THE ORIZENN APPROACH</span>
        
        <div className="w-full h-64 border border-white/10 bg-white/5 rounded-xl flex items-center justify-center shadow-xl max-w-4xl mx-auto my-12">
          <span className="font-mono text-sm text-white/30 uppercase tracking-widest text-center">Mockup Placeholder<br/>The Orizenn Approach</span>
        </div>
        
        <div className="mt-24 max-w-lg text-center">
          <p className="text-muted text-sm lg:text-base leading-relaxed">
            Orizenn is built around a simple idea: technical work should be understood through the evidence inside the work itself.
          </p>
        </div>

      </div>

    </div>
  );
}
