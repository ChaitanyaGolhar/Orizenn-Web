import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function FinalCTA() {
  return (
    <section className="pt-48 pb-64 bg-background text-center border-b border-border">
      <Container>
        <div className="flex flex-col items-center gap-8 max-w-[700px] mx-auto">
          <div className="font-mono text-micro tracking-[0.1em] text-muted">A CLEARER WAY TO UNDERSTAND TECHNICAL WORK</div>
          <h2 className="font-sans text-hero font-normal tracking-[-0.04em] leading-[1.1] text-foreground m-0">
            Let the work speak.
          </h2>
          <p className="text-large text-muted leading-[1.5] my-4 mb-16">
            Orizenn brings the evidence inside technical work into view — for the people building it, evaluating it, and trying to understand what it demonstrates.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button href="/explore" variant="primary">Explore Orizenn →</Button>
            <Button href="/institutions" variant="secondary">For Institutions →</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
