'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Act1Problem() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      // We will set up scroll-linked timelines here
      // linking the text blocks to the visual state.
      
      const visuals = {
        work: '.visual-work',
        grade: '.visual-grade',
        resume: '.visual-resume',
        cert: '.visual-cert',
        portfolio: '.visual-portfolio',
        loss: '.visual-loss'
      };

      // Hide all except work initially
      gsap.set([visuals.grade, visuals.resume, visuals.cert, visuals.portfolio, visuals.loss], { opacity: 0, scale: 0.95 });

      // 02 Grade Trigger
      ScrollTrigger.create({
        trigger: '#beat-02',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        animation: gsap.timeline()
          .to(visuals.work, { opacity: 0.1, scale: 0.9, duration: 1 })
          .to(visuals.grade, { opacity: 1, scale: 1, duration: 1 }, "<")
      });

      // 03 Resume Trigger
      ScrollTrigger.create({
        trigger: '#beat-03',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        animation: gsap.timeline()
          .to(visuals.grade, { opacity: 0, scale: 0.95, duration: 1 })
          .to(visuals.resume, { opacity: 1, scale: 1, duration: 1 }, "<")
      });

      // 04 Cert Trigger
      ScrollTrigger.create({
        trigger: '#beat-04',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        animation: gsap.timeline()
          .to(visuals.resume, { opacity: 0, scale: 0.95, duration: 1 })
          .to(visuals.cert, { opacity: 1, scale: 1, duration: 1 }, "<")
      });

      // 05 Portfolio Trigger
      ScrollTrigger.create({
        trigger: '#beat-05',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        animation: gsap.timeline()
          .to(visuals.cert, { opacity: 0, scale: 0.95, duration: 1 })
          .to(visuals.portfolio, { opacity: 1, scale: 1, duration: 1 }, "<")
      });

      // 06 Information Loss Trigger
      ScrollTrigger.create({
        trigger: '#beat-06',
        start: 'top 80%',
        end: 'bottom center',
        scrub: true,
        animation: gsap.timeline()
          .to(visuals.portfolio, { opacity: 0, scale: 0.8, duration: 1 })
          .to(visuals.work, { opacity: 0, scale: 0.8, duration: 1 }, "<")
          .to(visuals.loss, { opacity: 1, scale: 1, duration: 2 })
      });

      // Pin each beat in the center of the screen and fade out at the end
      const beats = ['#beat-01', '#beat-02', '#beat-03', '#beat-04', '#beat-05', '#beat-06'];
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
    <div ref={containerRef} className="w-full relative flex flex-col md:flex-row act-container" id="act1-problem">
      
      {/* NARRATIVE COLUMN (Scrolls normally) */}
      <div className="w-full md:w-5/12 flex flex-col relative z-20 md:pr-12">
        
        <div id="beat-01" className="min-h-[100vh] flex flex-col justify-center">
          <span className="font-mono text-[10px] text-signal tracking-widest uppercase mb-4 block">01 / THE PROBLEM</span>
          <h2 className="font-sans text-3xl lg:text-4xl text-foreground leading-[1.1] tracking-tight mb-4">
            The work is there.<br/>We just don't see enough of it.
          </h2>
          <p className="text-muted text-sm lg:text-base leading-relaxed mb-8">
            People build real technical work across code, notebooks, experiments, documentation, data, and projects. 
            But much of that work gets reduced to a grade, a resume, a certificate, or a portfolio — signals that rarely show the full picture.
          </p>
          
          {/* Mobile Visual */}
          <div className="md:hidden w-full aspect-square border border-white/5 rounded-full flex flex-col items-center justify-center bg-[#070709]/80 shadow-[0_0_80px_rgba(0,107,255,0.05)]">
            <div className="text-[10px] text-signal font-mono tracking-widest uppercase mb-2">System Core</div>
            <div className="font-sans text-xl text-white tracking-tight">Autonomous Navigation</div>
          </div>
        </div>

        <div id="beat-02" className="min-h-[100vh] flex flex-col justify-center">
          <h2 className="font-sans text-2xl lg:text-3xl text-foreground leading-[1.1] tracking-tight mb-4">A snapshot, not the work.</h2>
          <p className="text-muted text-sm lg:text-base leading-relaxed mb-8">
            A single number rarely captures the process, exploration, decisions, or depth behind the work.
          </p>
          
          {/* Mobile Visual */}
          <div className="md:hidden flex justify-center py-12">
            <div className="text-7xl font-sans text-white leading-none tracking-tighter">
              8.6<span className="text-4xl text-white/30 ml-2 font-light tracking-normal">/10</span>
            </div>
          </div>
        </div>

        <div id="beat-03" className="min-h-[100vh] flex flex-col justify-center">
          <h2 className="font-sans text-2xl lg:text-3xl text-foreground leading-[1.1] tracking-tight mb-4">Skills listed. Context missing.</h2>
          <p className="text-muted text-sm lg:text-base leading-relaxed mb-8">
            A resume can show what someone says they know, but not the depth, process, decisions, experiments, or evidence behind the work.
          </p>
        </div>

        <div id="beat-04" className="min-h-[100vh] flex flex-col justify-center">
          <h2 className="font-sans text-2xl lg:text-3xl text-foreground leading-[1.1] tracking-tight mb-4">Completion, not capability.</h2>
          <p className="text-muted text-sm lg:text-base leading-relaxed mb-8">
            A certificate can confirm that a requirement was completed, but rarely shows what was built, how it was built, or what it demonstrates.
          </p>
        </div>

        <div id="beat-05" className="min-h-[100vh] flex flex-col justify-center">
          <h2 className="font-sans text-2xl lg:text-3xl text-foreground leading-[1.1] tracking-tight mb-4">Highlights, not the full story.</h2>
          <p className="text-muted text-sm lg:text-base leading-relaxed mb-8">
            Portfolios can tell a better story, but they are still a curated view of the work.
          </p>
        </div>

        <div id="beat-06" className="min-h-[100vh] flex flex-col justify-center">
          <h2 className="font-sans text-3xl lg:text-4xl text-foreground leading-[1.1] tracking-tight mb-4">The evidence exists. It just gets lost.</h2>
          <p className="text-muted text-sm lg:text-base leading-relaxed mb-8">
            The same body of work can appear very differently depending on how it is represented. Each format captures a fragment, and important context is often lost.
          </p>
          
          {/* Mobile Visual */}
          <div className="md:hidden flex flex-col items-center gap-4 bg-[#070709] px-12 py-8 border border-white/10 shadow-[0_0_50px_rgba(0,107,255,0.05)]">
            <div className="text-3xl text-white font-sans tracking-tight">8.6 / 10</div>
            <div className="text-[10px] text-white/50 font-mono tracking-widest uppercase">Loss of Context</div>
          </div>
        </div>

      </div>

      {/* VISUAL COLUMN (Sticky) */}
      <div className="hidden md:block w-7/12 h-[100vh] sticky top-0 z-10 flex items-center justify-center overflow-hidden p-12">
        
        {/* Visual 01: Work */}
        <div className="absolute inset-12 flex items-center justify-center visual-work">
          <div className="w-full h-full border border-white/10 bg-white/5 rounded-xl flex items-center justify-center">
             <span className="font-mono text-sm text-white/30 uppercase tracking-widest">Mockup Placeholder: Work</span>
          </div>
        </div>

        {/* Visual 02: Grade */}
        <div className="absolute inset-12 flex items-center justify-center visual-grade">
          <div className="w-full h-full border border-white/10 bg-white/5 rounded-xl flex items-center justify-center">
             <span className="font-mono text-sm text-white/30 uppercase tracking-widest">Mockup Placeholder: Grade</span>
          </div>
        </div>

        {/* Visual 03: Resume */}
        <div className="absolute inset-12 flex flex-col items-center justify-center visual-resume">
          <div className="w-full h-full border border-white/10 bg-white/5 rounded-xl flex items-center justify-center">
             <span className="font-mono text-sm text-white/30 uppercase tracking-widest">Mockup Placeholder: Resume</span>
          </div>
        </div>

        {/* Visual 04: Certificate */}
        <div className="absolute inset-12 flex items-center justify-center visual-cert">
          <div className="w-full h-full border border-white/10 bg-white/5 rounded-xl flex items-center justify-center">
             <span className="font-mono text-sm text-white/30 uppercase tracking-widest">Mockup Placeholder: Certificate</span>
          </div>
        </div>

        {/* Visual 05: Portfolio */}
        <div className="absolute inset-12 flex flex-col items-center justify-center visual-portfolio">
          <div className="w-full h-full border border-white/10 bg-white/5 rounded-xl flex items-center justify-center">
             <span className="font-mono text-sm text-white/30 uppercase tracking-widest">Mockup Placeholder: Portfolio</span>
          </div>
        </div>

        {/* Visual 06: Information Loss */}
        <div className="absolute inset-12 flex flex-col items-center justify-center visual-loss">
          <div className="w-full h-full border border-white/10 bg-white/5 rounded-xl flex items-center justify-center">
             <span className="font-mono text-sm text-white/30 uppercase tracking-widest">Mockup Placeholder: Information Loss</span>
          </div>
        </div>

      </div>

      {/* MOBILE VISUALS (Inline) */}
      <div className="block md:hidden w-full flex flex-col gap-12 mt-12 mb-24">
         {/* Simplified mobile flow logic can be handled separately or interleaved with text */}
      </div>

    </div>
  );
}
