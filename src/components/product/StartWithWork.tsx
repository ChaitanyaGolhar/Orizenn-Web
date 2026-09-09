'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';

export function StartWithWork() {
  return (
    <section className="relative w-full flex flex-col lg:flex-row border-b border-white/5" id="start-with-work">
      
      {/* NARRATIVE COLUMN */}
      <div className="w-full lg:w-5/12 flex flex-col relative z-20 px-6 md:px-12 xl:pl-24 xl:pr-12">
        <div className="min-h-[50vh] lg:min-h-[100vh] flex flex-col justify-center py-24">
          <span className="font-mono text-[10px] text-signal tracking-widest uppercase mb-4 block">01 / START</span>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-foreground mb-6">
            Start with the work.
          </h2>
          <p className="text-base text-muted leading-relaxed mb-6">
            Technical work is not one file or one submission. It is a collection of artifacts, decisions, experiments, iterations, documentation, and changes.
          </p>
          <p className="text-base text-muted leading-relaxed">
            Orizenn begins there.
          </p>

          <div className="lg:hidden w-full aspect-[4/3] border border-white/10 bg-white/5 rounded-xl flex items-center justify-center mt-12 shadow-lg">
             <span className="font-mono text-sm text-white/30 uppercase tracking-widest text-center">Mockup Placeholder<br/>Project Workspace</span>
          </div>
        </div>
      </div>

      {/* VISUAL COLUMN (Sticky on Desktop) */}
      <div className="hidden lg:flex w-7/12 h-[100vh] sticky top-0 z-10 items-center justify-center overflow-hidden py-12 pr-12 xl:pr-24 pl-0">
        <div className="w-full h-[65vh] max-h-[800px] border border-white/10 bg-white/5 rounded-xl flex items-center justify-center shadow-xl">
          <span className="font-mono text-sm text-white/30 uppercase tracking-widest text-center">Mockup Placeholder<br/>Project Workspace</span>
        </div>
      </div>

    </section>
  );
}
