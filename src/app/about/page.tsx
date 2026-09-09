import React from 'react';
import { AboutHero } from '@/components/about/AboutHero';
import { WhyOrizenn } from '@/components/about/WhyOrizenn';
import { WhatWeBelieve } from '@/components/about/WhatWeBelieve';
import { WhatWeAreBuilding } from '@/components/about/WhatWeAreBuilding';
import { OurApproach } from '@/components/about/OurApproach';
import { OurStandard } from '@/components/about/OurStandard';
import { LookingAhead } from '@/components/about/LookingAhead';
import { AboutCTA } from '@/components/about/AboutCTA';

export default function AboutPage() {
  return (
    <main className="bg-[#070709] min-h-screen text-foreground overflow-x-hidden">
      
      {/* 01 WHY THIS EXISTS */}
      <AboutHero />
      
      {/* 02 THE PROBLEM WE SEE */}
      <WhyOrizenn />
      
      {/* 03 WHAT WE BELIEVE */}
      <WhatWeBelieve />
      
      {/* 04 WHAT WE ARE BUILDING */}
      <WhatWeAreBuilding />
      
      {/* 05 HOW WE APPROACH IT */}
      <OurApproach />
      
      {/* 06 THE STANDARD WE HOLD */}
      <OurStandard />
      
      {/* 07 LOOKING AHEAD */}
      <LookingAhead />
      
      {/* 08 CTA */}
      <AboutCTA />

    </main>
  );
}
