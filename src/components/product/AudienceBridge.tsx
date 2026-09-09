import React from 'react';
import { Container } from '@/components/ui/Container';

export function AudienceBridge() {
  return (
    <section className="relative py-24 lg:py-32 border-b border-white/5" id="audience-bridge">
      <Container className="flex flex-col items-center">
        <h2 className="font-mono text-sm tracking-widest text-signal uppercase mb-16">
          The same evidence. Different value.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          <div className="p-8 border border-white/10 rounded-xl bg-[#0c0c0e]">
            <h3 className="font-sans text-xl text-foreground mb-3">Student</h3>
            <p className="text-sm text-muted leading-relaxed">Understand and communicate the work you actually built.</p>
          </div>
          
          <div className="p-8 border border-white/10 rounded-xl bg-[#0c0c0e]">
            <h3 className="font-sans text-xl text-foreground mb-3">Educator</h3>
            <p className="text-sm text-muted leading-relaxed">Evaluate technical work with more context.</p>
          </div>
          
          <div className="p-8 border border-white/10 rounded-xl bg-[#0c0c0e]">
            <h3 className="font-sans text-xl text-foreground mb-3">Institution</h3>
            <p className="text-sm text-muted leading-relaxed">Gain deeper visibility into technical work across projects and programs.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
