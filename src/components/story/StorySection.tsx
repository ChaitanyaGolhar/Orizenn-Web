'use client';

import { useState, useEffect } from 'react';
import { Container } from '../ui/Container';
import { StoryRail } from './StoryRail';
import { Act1Problem } from './acts/Act1Problem';
import { Act2Approach } from './acts/Act2Approach';
import { Act3HowItWorks } from './acts/Act3HowItWorks';
import { Act4Principle } from './acts/Act4Principle';

export function StorySection() {
  const [activeActId, setActiveActId] = useState('act1-problem');

  useEffect(() => {
    // Intersection Observer to detect which Act is currently visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveActId(entry.target.id);
        }
      });
    }, {
      rootMargin: '-50% 0px -50% 0px' // Trigger when the center of the act passes the center of the screen
    });

    const acts = document.querySelectorAll('.act-container');
    acts.forEach(act => observer.observe(act));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-[#070709] border-t border-border/50">
      
      <div className="py-24 md:py-32">
        <Container className="relative w-full flex flex-col md:flex-row items-start">
          
          {/* LEFT: STORY RAIL (Hidden on mobile) */}
          <div className="hidden md:flex w-[25%] sticky top-[25vh] h-[50vh] flex-col justify-center pr-8 z-20">
            <StoryRail activeActId={activeActId} />
          </div>

          {/* RIGHT: STORY CONTENT (The 4 Acts) */}
          <div className="w-full md:w-[75%] relative z-10 flex flex-col gap-24 md:gap-32">
            <Act1Problem />
            <Act2Approach />
            <Act3HowItWorks />
            <Act4Principle />
          </div>

        </Container>
      </div>

    </section>
  );
}
