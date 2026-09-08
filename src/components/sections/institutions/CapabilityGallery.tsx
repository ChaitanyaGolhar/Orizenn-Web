'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    id: 'student-projects',
    title: 'Student Projects',
    description: 'See the work being built through code, experiments, and active documentation.',
    spanClass: 'md:col-span-1 lg:col-span-0.01'
  },
  {
    id: 'artifacts',
    title: 'Artifacts',
    description: 'See what the projects actually contain beneath the final surface.',
    spanClass: 'md:col-span-1 lg:col-span-2'
  },
  {
    id: 'evidence',
    title: 'Evidence',
    description: 'Connect technical work to explicit demonstrations of learning.',
    spanClass: 'md:col-span-2 lg:col-span-1'
  },
  {
    id: 'evaluation',
    title: 'Evaluation',
    description: 'Evaluate submissions with deep context rather than surface checks.',
    spanClass: 'md:col-span-2 lg:col-span-2'
  },
  {
    id: 'findings',
    title: 'Findings',
    description: 'Understand exactly where evaluation findings come from.',
    spanClass: 'md:col-span-1 lg:col-span-1'
  },
  {
    id: 'program-visibility',
    title: 'Program Visibility',
    description: 'See the larger body of technical work across your institution.',
    spanClass: 'md:col-span-1 lg:col-span-1'
  }
];

export function CapabilityGallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.anim-bento-card', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 max-w-[1200px] mx-auto z-10 relative">
      {capabilities.map((cap) => (
        <div key={cap.id} className={`anim-bento-card flex flex-col bg-[#1A1A1C] border border-border/30 rounded-xl overflow-hidden h-[340px] shadow-sm ${cap.spanClass}`}>
          {/* Visual Placeholder Area */}
          <div className="flex-1 relative flex items-center justify-center p-0 overflow-hidden">
          </div>

          {/* Text Area */}
          <div className="p-6 pt-0 flex flex-col gap-2 h-[110px] justify-center bg-transparent">
            <h3 className="font-sans text-base lg:text-lg text-foreground font-medium m-0">{cap.title}</h3>
            <p className="font-sans text-xs lg:text-sm text-muted leading-relaxed m-0">{cap.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
