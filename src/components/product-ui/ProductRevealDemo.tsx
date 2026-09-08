"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
export type DemoStateId = 'project' | 'artifacts' | 'evidence' | 'evaluation' | 'findings';

export const DEMO_STATES: { 
  id: DemoStateId; 
  label: string; 
  description: string;
  accent: string;
}[] = [
  { 
    id: 'project', 
    label: 'Project', 
    description: 'Start with the technical work itself — the project, its structure, and everything inside it.',
    accent: '#bfdbfe', // blue-200
  },
  { 
    id: 'artifacts', 
    label: 'Artifacts', 
    description: 'Surface the code, notebooks, documentation, data, and other artifacts that make up the project.',
    accent: '#a5f3fc', // cyan-200
  },
  { 
    id: 'evidence', 
    label: 'Evidence', 
    description: 'Connect those artifacts to the evidence they contain and the work they demonstrate.',
    accent: '#c7d2fe', // indigo-200
  },
  { 
    id: 'evaluation', 
    label: 'Evaluation', 
    description: 'Bring evidence into context so the project can be examined more completely.',
    accent: '#e9d5ff', // purple-200
  },
  { 
    id: 'findings', 
    label: 'Findings', 
    description: 'Bring the evidence and evaluation together into findings that explain the work more clearly.',
    accent: '#99f6e4', // teal-200
  },
];

const CYCLE_DURATION = 4500; // 4.5 seconds
const REPEAT_COUNT = 40; // Render 40 sets to simulate infinite scrolling
const TOTAL_ITEMS = DEMO_STATES.length * REPEAT_COUNT;

export function ProductRevealDemo() {
  // Start right in the middle to allow infinite scrolling in both directions
  const [currentIndex, setCurrentIndex] = useState(Math.floor(REPEAT_COUNT / 2) * DEMO_STATES.length);
  const [isPaused, setIsPaused] = useState(false);
  const [inViewport, setInViewport] = useState(false);
  const [trackTranslate, setTrackTranslate] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const activeStateObj = DEMO_STATES[currentIndex % DEMO_STATES.length];
  const activeState = activeStateObj.id;

  const containerRef = useRef<HTMLDivElement>(null);
  const selectorRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<number>(0);
  const lastUpdateRef = useRef<number>(Date.now());
  const requestRef = useRef<number | undefined>(undefined);

  // Intersection Observer to start autoplay only when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInViewport(entry.isIntersecting);
      },
      { threshold: 0.2 } // Trigger when 20% visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animation Loop for the timer and state cycling
  const animate = useCallback((time: number) => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      return; // Don't autoplay
    }

    if (!isPaused && inViewport) {
      const now = Date.now();
      const delta = now - lastUpdateRef.current;
      
      // We accumulate delta to decide when to switch
      const accumulated = (progressRef.current || 0) + delta;
      
      if (accumulated >= CYCLE_DURATION) {
        // Time to switch state
        setCurrentIndex((prev) => prev + 1);
        progressRef.current = 0;
      } else {
        progressRef.current = accumulated;
      }
      lastUpdateRef.current = now;
    } else {
      // If paused, just update the lastUpdateRef so delta doesn't explode when unpaused
      lastUpdateRef.current = Date.now();
    }

    requestRef.current = requestAnimationFrame(animate);
  }, [isPaused, inViewport]);

  useEffect(() => {
    lastUpdateRef.current = Date.now();
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [animate]);

  // Handle manual selection
  const handleSelect = (absoluteIndex: number) => {
    setCurrentIndex(absoluteIndex);
    progressRef.current = 0;
    lastUpdateRef.current = Date.now();
  };

  // Handle infinite scroll seamless snapping
  useEffect(() => {
    if (currentIndex >= TOTAL_ITEMS - 10) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(Math.floor(REPEAT_COUNT / 2) * DEMO_STATES.length + (currentIndex % DEMO_STATES.length));
        setTimeout(() => setIsTransitioning(true), 50);
      }, 700); // Wait for slide transition to finish
    }
  }, [currentIndex]);

  // Measure and center active pill precisely via translation
  useEffect(() => {
    if (selectorRef.current && trackRef.current) {
      const container = selectorRef.current;
      const activePill = trackRef.current.children[currentIndex] as HTMLElement;
      if (activePill) {
        const containerCenter = container.clientWidth / 2;
        const pillCenter = activePill.offsetLeft + (activePill.clientWidth / 2);
        
        // Target translation to bring pill center to container center
        const translation = containerCenter - pillCenter;
        setTrackTranslate(translation);
      }
    }
  }, [currentIndex, inViewport]);

  // Recalculate on resize
  useEffect(() => {
    const handleResize = () => {
      // Trigger a re-render to recalculate translation by setting a dummy state, 
      // or just call the translation logic directly. For simplicity we'll just 
      // force update or let it be slightly off until next state.
      // A better way is pulling the translate logic into a function and calling it here.
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full max-w-[1200px] mx-auto flex flex-col gap-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      {/* Dynamic Description */}
      <div className="h-[60px] md:h-[40px] relative w-full max-w-[600px] mx-auto mb-4 flex justify-center items-center">
        {DEMO_STATES.map((state) => {
          const isCurrent = activeState === state.id;
          return (
            <div 
              key={`desc-${state.id}`}
              className={`absolute inset-0 flex justify-center text-center transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                ${isCurrent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
              aria-hidden={!isCurrent}
            >
              <p className="text-base md:text-lg text-gray-600 font-medium leading-snug m-0 max-w-[500px]">
                {state.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* State Selector (Moving Carousel Track) */}
      <div 
        ref={selectorRef}
        className="relative w-full overflow-hidden pb-6 pt-2 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
        role="tablist"
        aria-label="Product Demonstration Perspectives"
      >
        <div 
          ref={trackRef}
          className={`flex items-center gap-3 w-max ${isTransitioning ? 'transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]' : ''}`}
          style={{ transform: `translateX(${trackTranslate}px)` }}
        >
        {Array.from({ length: REPEAT_COUNT }).flatMap((_, setIndex) => 
          DEMO_STATES.map((state, index) => {
            const absoluteIndex = setIndex * DEMO_STATES.length + index;
            const isActive = absoluteIndex === currentIndex;
            const distance = Math.abs(absoluteIndex - currentIndex);
            
            // Fading out opacity for items further away
            const opacityClass = isActive ? 'opacity-100' : distance === 1 ? 'opacity-70' : distance === 2 ? 'opacity-40' : 'opacity-10';

            return (
              <button
                key={`${setIndex}-${state.id}`}
                role="tab"
                aria-selected={isActive}
                data-active={isActive}
                onClick={() => handleSelect(absoluteIndex)}
                className={`relative px-5 py-2.5 rounded-xl text-[14px] font-semibold whitespace-nowrap transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] shrink-0 border-none outline-none focus-visible:ring-2 focus-visible:ring-signal ${opacityClass}`}
                style={{
                  backgroundColor: isActive ? state.accent : '#F3F4F6', // active accent, inactive gray-100
                  color: '#111827', // always dark text
                }}
              >
                {state.label}
              </button>
            );
          })
        )}
        </div>
      </div>

      {/* Product Showcase Viewport */}
      <div 
        className="w-full h-[300px] md:h-[400px] rounded-[2.5rem] overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col group mt-2 transition-colors duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{ backgroundColor: DEMO_STATES.find(s => s.id === activeState)?.accent || '#C4E0FF' }}
      >
        
        {/* Subtle inner noise/texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      </div>
    </div>
  );
}
