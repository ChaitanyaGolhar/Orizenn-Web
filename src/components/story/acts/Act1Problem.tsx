'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Act1Problem() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 1024px)", () => {
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
    });

    mm.add("(max-width: 1023px)", () => {
      // Mobile-specific scroll transformation for Information Loss
      gsap.fromTo('.mobile-visual-loss', 
        { scale: 1.1, opacity: 0.5 },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: '#beat-06',
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
    <div ref={containerRef} className="w-full relative flex flex-col lg:flex-row act-container" id="act1-problem">
      
      {/* NARRATIVE COLUMN (Scrolls normally on desktop, stack on mobile) */}
      <div className="w-full lg:w-5/12 flex flex-col relative z-20 lg:pr-12">
        
        <div id="beat-01" className="min-h-[65vh] lg:min-h-[100vh] flex flex-col justify-center pt-16 lg:pt-0">
          <span className="font-mono text-[10px] text-signal tracking-widest uppercase mb-4 block">01 / THE PROBLEM</span>
          <h2 className="font-sans text-3xl lg:text-4xl text-foreground leading-[1.1] tracking-tight mb-6">
            The work is there.<br/>We just don't see enough of it.
          </h2>
          <p className="text-muted text-sm lg:text-base leading-relaxed mb-8">
            People build real technical work across code, notebooks, experiments, documentation, data, and projects. 
            But much of that work gets reduced to a grade, a resume, a certificate, or a portfolio — signals that rarely show the full picture.
          </p>
          
          <div className="lg:hidden w-full aspect-square border border-white/10 bg-white/5 rounded-xl flex items-center justify-center mt-4 shadow-xl">
            <span className="font-mono text-sm text-white/30 uppercase tracking-widest text-center">Mockup Placeholder<br/>Work (Dense)</span>
          </div>
        </div>

        <div id="beat-02" className="h-auto py-12 lg:min-h-[100vh] flex flex-col justify-center">
          <h2 className="font-sans text-2xl lg:text-3xl text-foreground leading-[1.1] tracking-tight mb-6">A snapshot, not the work.</h2>
          <p className="text-muted text-sm lg:text-base leading-relaxed mb-8">
            A single number rarely captures the process, exploration, decisions, or depth behind the work.
          </p>
          
          <div className="lg:hidden flex justify-center py-8">
            <span className="font-mono text-xl text-white/30 uppercase tracking-widest text-center">Mockup Placeholder: Grade</span>
          </div>
        </div>

        <div id="beat-03" className="h-auto py-12 lg:min-h-[100vh] flex flex-col justify-center">
          <h2 className="font-sans text-2xl lg:text-3xl text-foreground leading-[1.1] tracking-tight mb-6">Skills listed. Context missing.</h2>
          <p className="text-muted text-sm lg:text-base leading-relaxed mb-8">
            A resume can show what someone says they know, but not the depth, process, decisions, experiments, or evidence behind the work.
          </p>
          <div className="lg:hidden w-full h-32 border border-white/10 bg-white/5 rounded-xl flex items-center justify-center mt-4">
             <span className="font-mono text-sm text-white/30 uppercase tracking-widest text-center">Mockup Placeholder<br/>Resume (Minimal)</span>
          </div>
        </div>

        <div id="beat-04" className="h-auto py-12 lg:min-h-[100vh] flex flex-col justify-center">
          <h2 className="font-sans text-2xl lg:text-3xl text-foreground leading-[1.1] tracking-tight mb-6">Completion, not capability.</h2>
          <p className="text-muted text-sm lg:text-base leading-relaxed mb-8">
            A certificate can confirm that a requirement was completed, but rarely shows what was built, how it was built, or what it demonstrates.
          </p>
          <div className="lg:hidden w-full h-32 border border-white/10 bg-white/5 rounded-xl flex items-center justify-center mt-4">
             <span className="font-mono text-sm text-white/30 uppercase tracking-widest text-center">Mockup Placeholder<br/>Certificate (Static)</span>
          </div>
        </div>

        <div id="beat-05" className="min-h-[45vh] lg:min-h-[100vh] flex flex-col justify-center py-12">
          <h2 className="font-sans text-2xl lg:text-3xl text-foreground leading-[1.1] tracking-tight mb-6">Highlights, not the full story.</h2>
          <p className="text-muted text-sm lg:text-base leading-relaxed mb-8">
            Portfolios can tell a better story, but they are still a curated view of the work.
          </p>
          <div className="lg:hidden w-full aspect-video border border-white/10 bg-white/5 rounded-xl flex items-center justify-center mt-4 shadow-lg">
             <span className="font-mono text-sm text-white/30 uppercase tracking-widest text-center">Mockup Placeholder<br/>Portfolio (Subtle Reveal)</span>
          </div>
        </div>

        <div id="beat-06" className="min-h-[65vh] lg:min-h-[100vh] flex flex-col justify-center py-12">
          <h2 className="font-sans text-3xl lg:text-4xl text-foreground leading-[1.1] tracking-tight mb-6">The evidence exists. It just gets lost.</h2>
          <p className="text-muted text-sm lg:text-base leading-relaxed mb-8">
            The same body of work can appear very differently depending on how it is represented. Each format captures a fragment, and important context is often lost.
          </p>
          
          <div className="lg:hidden w-full aspect-[4/3] border border-white/10 bg-white/5 rounded-xl flex items-center justify-center mt-4 shadow-2xl mobile-visual-loss overflow-hidden relative">
             <div className="absolute inset-0 bg-gradient-to-t from-[#070709] to-transparent opacity-80" />
             <span className="font-mono text-sm text-white/30 uppercase tracking-widest text-center relative z-10">Mockup Placeholder<br/>Information Loss (Dense Transform)</span>
          </div>
        </div>

      </div>

      {/* VISUAL COLUMN (Sticky on Desktop, hidden on Mobile) */}
      <div className="hidden lg:flex w-7/12 h-[100vh] sticky top-0 z-10 items-center justify-center overflow-hidden p-12">
        
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

    </div>
  );
}
