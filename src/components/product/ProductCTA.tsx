import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function ProductCTA() {
  return (
    <section className="relative py-32 lg:py-48" id="product-cta">
      <Container className="flex flex-col items-center text-center max-w-3xl">
        <h2 className="font-sans text-5xl lg:text-7xl font-light tracking-tighter text-foreground mb-8">
          Let the work speak.
        </h2>
        <p className="text-lg text-muted mb-12 leading-relaxed">
          Turn technical work into structured evidence for clearer evaluation and deeper understanding.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button href="https://app.orizenn.com" variant="primary">Explore Orizenn →</Button>
          <Button href="/institutions" variant="secondary">For Institutions →</Button>
        </div>
      </Container>
    </section>
  );
}
