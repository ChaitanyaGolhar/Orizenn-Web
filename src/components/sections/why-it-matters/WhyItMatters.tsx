'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function WhyItMatters() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(cardsRef.current, { y: (i) => i * 20, opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(cardsRef.current, { y: '100vh' });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5,
        }
      });

      // Card 01 enters
      tl.to(cardsRef.current[0], {
        y: 0,
        ease: 'power2.out',
        duration: 1
      }, 0);

      tl.to({}, { duration: 0.5 }, 1);

      // Card 02 enters
      tl.to(cardsRef.current[1], {
        y: 20,
        ease: 'power2.out',
        duration: 1
      }, 1.5);

      tl.to({}, { duration: 0.5 }, 2.5);

      // Card 03 enters
      tl.to(cardsRef.current[2], {
        y: 40,
        ease: 'power2.out',
        duration: 1
      }, 3.0);

      tl.to({}, { duration: 0.5 }, 4.0);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-[#070709] border-t border-border/10 pt-[10px]">
      <div className="sticky top-[10px] h-screen w-full flex flex-col justify-center overflow-hidden px-6 md:px-12 lg:px-24">
        
        {/* Intro */}
        <div className="w-full max-w-[1100px] mx-auto mb-10 z-0">
          <div className="font-mono text-[10px] md:text-[11px] text-muted tracking-[0.1em] uppercase mb-5">
            WHY IT MATTERS
          </div>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-[64px] text-foreground font-normal m-0 max-w-[700px] leading-[1.05] tracking-[-0.04em]">
            More visibility into<br/>the work that matters.
          </h2>
        </div>

        {/* Stack */}
        <div className="relative w-full max-w-[1100px] mx-auto h-[500px] md:h-[480px] z-10">
          
          {/* Card 01: Student */}
          <div 
            ref={el => { cardsRef.current[0] = el; }} 
            className="absolute left-0 right-0 top-0 bottom-0 bg-[#1A1A1C] border border-border/10 rounded-[28px] md:rounded-[36px] shadow-[0_-10px_40px_rgba(0,0,0,0.5)] z-10 flex flex-col md:flex-row overflow-hidden"
          >
            <div className="w-full md:w-[45%] p-8 md:p-14 flex flex-col justify-between">
              <div>
                <div className="font-mono text-[10px] text-muted uppercase tracking-[0.15em] mb-6">
                  01 / FOR STUDENTS
                </div>
                <h3 className="text-2xl md:text-3xl text-foreground mb-4 font-normal tracking-[-0.02em]">
                  Let your work speak for itself.
                </h3>
                <p className="text-muted text-sm md:text-base leading-relaxed">
                  Turn the work you build into a clearer record of what you actually did, learned, and demonstrated.
                </p>
              </div>
              <div className="mt-8">
                <a href="/students" className="text-signal text-sm font-medium hover:text-signal/80 transition-colors">
                  For Students →
                </a>
              </div>
            </div>

            <div className="w-full md:w-[55%] border-l border-border/5 p-8 flex items-center justify-center relative bg-[#161618]">
              <div className="font-mono text-[10px] md:text-xs text-muted/50 uppercase tracking-widest text-center px-4">
                Product Mockup Placeholder
              </div>
            </div>
          </div>

          {/* Card 02: Educator */}
          <div 
            ref={el => { cardsRef.current[1] = el; }} 
            className="absolute left-0 right-0 top-0 bottom-0 bg-[#1A1A1C] border border-border/10 rounded-[28px] md:rounded-[36px] shadow-[0_-20px_50px_rgba(0,0,0,0.6)] z-20 flex flex-col md:flex-row overflow-hidden"
          >
            <div className="w-full md:w-[45%] p-8 md:p-14 flex flex-col justify-between bg-[#1A1A1C] relative z-10">
              <div>
                <div className="font-mono text-[10px] text-muted uppercase tracking-[0.15em] mb-6">
                  02 / FOR EDUCATORS
                </div>
                <h3 className="text-2xl md:text-3xl text-foreground mb-4 font-normal tracking-[-0.02em]">
                  Evaluate with more context.
                </h3>
                <p className="text-muted text-sm md:text-base leading-relaxed">
                  See beyond the final submission and understand more of the work behind it.
                </p>
              </div>
              <div className="mt-8">
                <a href="/educators" className="text-signal text-sm font-medium hover:text-signal/80 transition-colors">
                  For Educators →
                </a>
              </div>
            </div>

            <div className="w-full md:w-[55%] border-l border-border/5 p-8 flex items-center justify-center relative bg-[#161618]">
              <div className="font-mono text-[10px] md:text-xs text-muted/50 uppercase tracking-widest text-center px-4">
                Product Mockup Placeholder
              </div>
            </div>
          </div>

          {/* Card 03: Institution */}
          <div 
            ref={el => { cardsRef.current[2] = el; }} 
            className="absolute left-0 right-0 top-0 bottom-0 bg-[#1A1A1C] border border-border/10 rounded-[28px] md:rounded-[36px] shadow-[0_-30px_60px_rgba(0,0,0,0.8)] z-30 flex flex-col md:flex-row overflow-hidden"
          >
            <div className="w-full md:w-[45%] p-8 md:p-14 flex flex-col justify-between bg-[#1A1A1C] relative z-10">
              <div>
                <div className="font-mono text-[10px] text-muted uppercase tracking-[0.15em] mb-6">
                  03 / FOR INSTITUTIONS
                </div>
                <h3 className="text-2xl md:text-3xl text-foreground mb-4 font-normal tracking-[-0.02em]">
                  See more of what is actually being built.
                </h3>
                <p className="text-muted text-sm md:text-base leading-relaxed">
                  Gain deeper visibility into technical work across students, projects, and programs.
                </p>
              </div>
              <div className="mt-8">
                <a href="/institutions" className="text-signal text-sm font-medium hover:text-signal/80 transition-colors">
                  For Institutions →
                </a>
              </div>
            </div>

            <div className="w-full md:w-[55%] border-l border-border/5 p-8 flex items-center justify-center relative bg-[#161618]">
              <div className="font-mono text-[10px] md:text-xs text-muted/50 uppercase tracking-widest text-center px-4">
                Product Mockup Placeholder
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
