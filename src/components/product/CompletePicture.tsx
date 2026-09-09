'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';

export function CompletePicture() {
  return (
    <section className="relative py-24 lg:py-48 border-b border-white/5" id="complete-picture">
      <Container className="flex flex-col items-center text-center mb-16 lg:mb-24">
        <h2 className="font-sans text-4xl lg:text-6xl font-light tracking-tighter text-foreground mb-6">
          See the complete picture.
        </h2>
        <p className="text-base lg:text-lg text-muted max-w-2xl leading-relaxed">
          Instead of judging technical work through isolated outputs, Orizenn makes the relationships between the work, the evidence, and the resulting findings easier to understand.
        </p>
      </Container>
      
      <Container className="max-w-[1200px]">
        <div className="w-full aspect-[4/3] lg:aspect-[16/9] max-h-[700px] border border-white/10 bg-white/5 rounded-xl flex items-center justify-center shadow-2xl">
          <span className="font-mono text-sm lg:text-base text-white/30 uppercase tracking-widest text-center whitespace-pre-wrap">Mockup Placeholder{'\n'}Complete Evidence Chain</span>
        </div>
      </Container>
    </section>
  );
}
