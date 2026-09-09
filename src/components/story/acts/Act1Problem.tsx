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
      const visuals = {
        work: '.visual-work',
        grade: '.visual-grade',
        resume: '.visual-resume',
        cert: '.visual-cert',
        portfolio: '.visual-portfolio',
        loss: '.visual-loss',
      };

      // Hide grade, resume, cert, portfolio, and loss initially by positioning them below the viewport
      gsap.set([visuals.grade, visuals.resume, visuals.cert, visuals.portfolio, visuals.loss], { yPercent: 100, opacity: 1, scale: 1 });
      gsap.set(visuals.work, { yPercent: 0, opacity: 1, scale: 1 });

      const beatsData = [
        { id: '#beat-01', leave: null, enter: visuals.work },
        { id: '#beat-02', leave: visuals.work, enter: visuals.grade },
        { id: '#beat-03', leave: visuals.grade, enter: visuals.resume },
        { id: '#beat-04', leave: visuals.resume, enter: visuals.cert },
        { id: '#beat-05', leave: visuals.cert, enter: visuals.portfolio },
        { id: '#beat-06', leave: visuals.portfolio, enter: visuals.loss }
      ];

      beatsData.forEach((beat) => {
        // 1. Image Swap Trigger (happens before the pin, as the element scrolls into view)
        if (beat.leave && beat.enter) {
          gsap.timeline({
            scrollTrigger: {
              trigger: beat.id,
              start: 'top bottom', // Starts when the top of the new beat hits the bottom of the viewport
              end: 'center center', // Ends when the new beat is perfectly centered
              scrub: true,
            }
          })
          .to(beat.leave, { yPercent: -100, ease: 'none' })
          .to(beat.enter, { yPercent: 0, ease: 'none' }, "<");
        }

        // 2. Pin and Fade Trigger (happens once the element is centered)
        gsap.timeline({
          scrollTrigger: {
            trigger: beat.id,
            start: 'center center',
            end: '+=800',
            pin: true,
            scrub: true,
          }
        })
        .to(beat.id, { opacity: 1, duration: 0.6 })
        .to(beat.id, { opacity: 0, duration: 0.4 });
      });
    });

    mm.add("(max-width: 1023px)", () => {
      // Any mobile specific animations can go here
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
          
          <div className="lg:hidden w-full flex items-center justify-center mt-8 relative">
            <img src="/problem-mockup.png" alt="The Problem" className="w-full h-auto object-contain" />
          </div>
        </div>

        <div id="beat-02" className="h-auto py-12 lg:min-h-[100vh] flex flex-col justify-center">
          <h2 className="font-sans text-2xl lg:text-3xl text-foreground leading-[1.1] tracking-tight mb-6">A snapshot, not the work.</h2>
          <p className="text-muted text-sm lg:text-base leading-relaxed mb-8">
            A single number rarely captures the process, exploration, decisions, or depth behind the work.
          </p>

          <div className="lg:hidden w-full flex items-center justify-center mt-8 relative">
            <img src="/grade-mockup.png" alt="A snapshot, not the work" className="w-full h-auto object-contain" />
          </div>
        </div>

        <div id="beat-03" className="h-auto py-12 lg:min-h-[100vh] flex flex-col justify-center">
          <h2 className="font-sans text-2xl lg:text-3xl text-foreground leading-[1.1] tracking-tight mb-6">Skills listed. Context missing.</h2>
          <p className="text-muted text-sm lg:text-base leading-relaxed mb-8">
            A resume can show what someone says they know, but not the depth, process, decisions, experiments, or evidence behind the work.
          </p>

          <div className="lg:hidden w-full flex items-center justify-center mt-8 relative">
            <img src="/resume-mockup.png" alt="Skills listed. Context missing." className="w-full h-auto object-contain" />
          </div>
        </div>

        <div id="beat-04" className="h-auto py-12 lg:min-h-[100vh] flex flex-col justify-center">
          <h2 className="font-sans text-2xl lg:text-3xl text-foreground leading-[1.1] tracking-tight mb-6">Completion, not capability.</h2>
          <p className="text-muted text-sm lg:text-base leading-relaxed mb-8">
            A certificate can confirm that a requirement was completed, but rarely shows what was built, how it was built, or what it demonstrates.
          </p>

          <div className="lg:hidden w-full flex items-center justify-center mt-8 relative">
            <img src="/cert-mockup.png" alt="Completion, not capability." className="w-full h-auto object-contain" />
          </div>
        </div>

        <div id="beat-05" className="min-h-[45vh] lg:min-h-[100vh] flex flex-col justify-center py-12">
          <h2 className="font-sans text-2xl lg:text-3xl text-foreground leading-[1.1] tracking-tight mb-6">Highlights, not the full story.</h2>
          <p className="text-muted text-sm lg:text-base leading-relaxed mb-8">
            Portfolios can tell a better story, but they are still a curated view of the work.
          </p>

          <div className="lg:hidden w-full flex items-center justify-center mt-8 relative">
            <img src="/portfolio-mockup.png" alt="Highlights, not the full story." className="w-full h-auto object-contain" />
          </div>
        </div>

        <div id="beat-06" className="min-h-[65vh] lg:min-h-[100vh] flex flex-col justify-center py-12">
          <h2 className="font-sans text-3xl lg:text-4xl text-foreground leading-[1.1] tracking-tight mb-6">The evidence exists. It just gets lost.</h2>
          <p className="text-muted text-sm lg:text-base leading-relaxed mb-8">
            The same body of work can appear very differently depending on how it is represented. Each format captures a fragment, and important context is often lost.
          </p>

          <div className="lg:hidden w-full flex items-center justify-center mt-8 relative">
            <img src="/loss-mockup.png" alt="The evidence exists. It just gets lost." className="w-full h-auto object-contain" />
          </div>
        </div>

      </div>

      {/* VISUAL COLUMN (Sticky on Desktop, hidden on Mobile) */}
      <div className="hidden lg:flex w-7/12 h-[100vh] sticky top-0 z-10 items-center justify-center overflow-hidden p-12">
        
        {/* Visual 01: Work */}
        <div className="absolute inset-0 flex items-center justify-center visual-work">
           <img src="/problem-mockup.png" alt="The Problem Mockup" className="w-full h-full object-contain scale-105" />
        </div>

        {/* Visual 02: Grade */}
        <div className="absolute inset-0 flex items-center justify-center visual-grade">
           <img src="/grade-mockup.png" alt="Grade Mockup" className="w-full h-full object-contain scale-105" />
        </div>

        {/* Visual 03: Resume */}
        <div className="absolute inset-0 flex items-center justify-center visual-resume">
           <img src="/resume-mockup.png" alt="Resume Mockup" className="w-full h-full object-contain scale-105" />
        </div>

        {/* Visual 04: Certificate */}
        <div className="absolute inset-0 flex items-center justify-center visual-cert">
           <img src="/cert-mockup.png" alt="Certificate Mockup" className="w-full h-full object-contain scale-105" />
        </div>

        {/* Visual 05: Portfolio */}
        <div className="absolute inset-0 flex items-center justify-center visual-portfolio">
           <img src="/portfolio-mockup.png" alt="Portfolio Mockup" className="w-full h-full object-contain scale-105" />
        </div>

        {/* Visual 06: Information Loss */}
        <div className="absolute inset-0 flex items-center justify-center visual-loss">
           <img src="/loss-mockup.png" alt="Information Loss Mockup" className="w-full h-full object-contain scale-105" />
        </div>

      </div>

    </div>
  );
}
