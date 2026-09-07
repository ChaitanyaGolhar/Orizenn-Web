import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function ProductReveal() {
  return (
    <section className="pt-48 pb-48 bg-surface">
      <Container>
        <div className="flex flex-col items-center text-center gap-16 max-w-[800px] mx-auto mb-32">
          <div className="font-mono text-micro tracking-[0.1em] text-muted">SEE IT IN ACTION</div>
          <h2 className="font-sans text-h1 font-normal tracking-[-0.04em] leading-[1.1] text-foreground m-0">
            A real project.<br />
            A clearer picture.
          </h2>
          <p className="text-large text-muted leading-[1.5] m-0">
            Explore how Orizenn moves from the work itself to evidence, evaluation, and findings — giving the project more context than a final submission alone can provide.
          </p>
          <div className="mt-8">
            <Button href="/project" variant="primary">View Example Project →</Button>
          </div>
        </div>

        <div className="w-full aspect-video max-w-[1200px] mx-auto rounded-lg border border-border overflow-hidden bg-background shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
          {/* Temporary placeholder for real Orizenn product UI */}
          <div 
            className="w-full h-full flex flex-col items-center justify-center gap-16"
            style={{
              background: 'repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.02) 10px, transparent 10px, transparent 20px)'
            }}
          >
            <div className="font-mono text-body text-muted">
              [REAL ORIZENN UI: PRODUCT MEDIA SLOT]
            </div>
            <div className="font-sans text-large font-medium text-signal">
              ARTIFACTS → EVIDENCE → EVALUATION → FINDINGS
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
