'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '../ui/Container';
import { TechnicalGrid } from '../ui/TechnicalGrid';
import { EvidenceMotif } from '../ui/EvidenceMotif';

gsap.registerPlugin(ScrollTrigger);

export function ClearerWay() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      const elements = gsap.utils.toArray('.clearer-way-anim');

      gsap.set(elements, { opacity: 0, y: 12 });
      gsap.set('.clearer-way-grid', { opacity: 0 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 75%',
        onEnter: () => {
          const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

          tl.to('.clearer-way-grid', {
            opacity: 1,
            duration: 1.2,
          });

          tl.to(elements, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
          }, "-=0.8");
        },
        once: true,
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="w-full bg-background py-20 md:py-32 px-5 sm:px-8"
    >
      <Container className="max-w-[1200px] mx-auto p-0">
        <div className="relative w-full bg-[#070709] rounded-[24px] md:rounded-[32px] border border-border/10 overflow-hidden flex flex-col items-center justify-center px-6 py-14 md:px-16 md:py-20 lg:px-24">
          <TechnicalGrid className="clearer-way-grid" />

          <div className="relative z-10 flex flex-col items-center text-center w-full max-w-[700px] mx-auto">
            
            <div className="clearer-way-anim font-mono text-[10px] md:text-[11px] tracking-[0.1em] text-muted uppercase mb-10">
              A CLEARER WAY TO UNDERSTAND TECHNICAL WORK
            </div>

            <h2 className="clearer-way-anim font-sans text-[26px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-normal tracking-[-0.04em] leading-[1.05] text-foreground m-0 mb-8 uppercase whitespace-nowrap">
              LET THE WORK SPEAK.
            </h2>

            <p className="clearer-way-anim text-sm md:text-base text-muted leading-relaxed max-w-[460px] mb-10">
              Bring the evidence inside technical work into view — and understand what it demonstrates.
            </p>

            <div className="clearer-way-anim flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 pointer-events-auto w-full sm:w-auto">
              {/* Primary CTA */}
              <a
                href="/explore"
                className="group relative flex items-center justify-center gap-2 px-8 py-3.5 w-full sm:w-auto rounded-lg bg-gradient-to-b from-signal to-[#0055CC] text-white font-sans font-medium text-small md:text-base tracking-wide transition-all duration-300 hover:-translate-y-[1px] hover:brightness-110 shadow-[0_0_20px_rgba(0,107,255,0.2)] hover:shadow-[0_0_30px_rgba(0,107,255,0.3)] focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 focus:ring-offset-[#070709]"
              >
                Explore Orizenn
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>

              {/* Secondary CTA */}
              <a
                href="/institutions"
                className="group flex items-center justify-center gap-2 px-6 py-3.5 w-full sm:w-auto rounded-lg border border-border/20 bg-transparent text-muted font-sans font-medium text-small md:text-base tracking-wide transition-all duration-300 hover:text-foreground hover:bg-surface/10 hover:border-border/40 focus:outline-none focus:ring-2 focus:ring-signal/50 focus:ring-offset-2 focus:ring-offset-[#070709]"
              >
                For Institutions
              </a>
            </div>

            <EvidenceMotif className="clearer-way-anim" />

          </div>
        </div>
      </Container>
    </section>
  );
}
