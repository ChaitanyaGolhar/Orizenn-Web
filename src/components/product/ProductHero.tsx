'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function ProductHero() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5" id="product-hero">
      <Container className="flex flex-col items-center text-center gap-8 relative z-10">
        
        <span className="font-mono text-[10px] lg:text-xs text-signal tracking-widest uppercase block mb-2">
          PRODUCT
        </span>
        
        <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter text-foreground max-w-4xl mx-auto leading-[1.1]">
          Turn technical work into evidence.
        </h1>
        
        <p className="text-base lg:text-lg text-muted leading-relaxed max-w-2xl mx-auto">
          Orizenn examines the work inside technical projects — from artifacts and changes to the evidence they contain — so it can be understood with more context.
        </p>
        
        <div className="flex items-center justify-center gap-4 mt-8">
          <Button href="https://app.orizenn.com" variant="primary">Explore Orizenn →</Button>
          <Button href="/how-it-works" variant="secondary">See How It Works →</Button>
        </div>

      </Container>

      {/* Visual: Project entering Orizenn */}
      <Container className="mt-24 lg:mt-32 max-w-4xl">
        <div className="relative w-full flex flex-col items-center justify-start pt-12">
          
          <div className="w-full aspect-video border border-white/10 bg-white/5 rounded-xl flex items-center justify-center shadow-xl max-w-2xl mx-auto">
            <span className="font-mono text-sm text-white/30 uppercase tracking-widest text-center">Mockup Placeholder<br/>Project Ingestion</span>
          </div>

        </div>
      </Container>
    </section>
  );
}
