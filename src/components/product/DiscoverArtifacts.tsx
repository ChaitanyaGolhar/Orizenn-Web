'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';

export function DiscoverArtifacts() {
  return (
    <section className="relative w-full flex flex-col lg:flex-row-reverse border-b border-white/5" id="discover-artifacts">
      
      {/* NARRATIVE COLUMN */}
      <div className="w-full lg:w-5/12 flex flex-col relative z-20 px-6 md:px-12 xl:pr-24 xl:pl-12">
        <div className="min-h-[50vh] lg:min-h-[100vh] flex flex-col justify-center py-24">
          <span className="font-mono text-[10px] text-signal tracking-widest uppercase mb-4 block">02 / DISCOVER</span>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-foreground mb-6">
            See what the work is made of.
          </h2>
          <p className="text-base text-muted leading-relaxed">
            Orizenn identifies the technical artifacts that make up a project and gives them a structured place in the larger picture. The artifact is not the conclusion — it is the beginning of the evidence chain.
          </p>

          <div className="lg:hidden w-full aspect-[4/3] border border-white/10 bg-white/5 rounded-xl flex items-center justify-center mt-12 shadow-lg">
             <span className="font-mono text-sm text-white/30 uppercase tracking-widest text-center">Mockup Placeholder<br/>Artifact Drilldown</span>
          </div>
        </div>
      </div>

      {/* VISUAL COLUMN (Sticky on Desktop) */}
      <div className="hidden lg:flex w-7/12 h-[100vh] sticky top-0 z-10 items-center justify-center overflow-hidden py-12 pl-12 xl:pl-24 pr-0">
        <div className="w-full h-[65vh] max-h-[800px] border border-white/10 bg-white/5 rounded-xl flex items-center justify-center shadow-xl">
          <span className="font-mono text-sm text-white/30 uppercase tracking-widest text-center">Mockup Placeholder<br/>Artifact Drilldown</span>
        </div>
      </div>

    </section>
  );
}
