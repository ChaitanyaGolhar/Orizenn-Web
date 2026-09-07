import { Container } from '../ui/Container';

export function Trust() {
  return (
    <section className="pt-48 pb-48 bg-background">
      <Container>
        <div className="flex flex-col gap-8 max-w-[800px]">
          <div className="font-mono text-micro tracking-[0.1em] text-muted">OUR PRINCIPLE</div>
          <h2 className="font-sans text-h1 font-normal tracking-[-0.04em] text-foreground m-0 mb-16">
            Evidence should be visible.
          </h2>
          
          <div className="text-large text-muted leading-[1.5] mb-32">
            <p className="m-0 mb-4">The goal isn't to produce another score that asks people to trust the system.</p>
            <p className="m-0 mb-4">The goal is to make the work, the evidence behind it, and the reasoning around its evaluation easier to see.</p>
          </div>

          <div className="flex flex-col gap-16">
            <div className="border-l border-border pl-8">
              <h3 className="font-sans text-large font-medium text-foreground m-0 mb-2">Grounded in the work.</h3>
              <p className="font-sans text-small text-muted m-0">Start with observable project artifacts.</p>
            </div>
            
            <div className="border-l border-border pl-8">
              <h3 className="font-sans text-large font-medium text-foreground m-0 mb-2">Clear about the evidence.</h3>
              <p className="font-sans text-small text-muted m-0">Show the signals that support an evaluation.</p>
            </div>
            
            <div className="border-l border-border pl-8">
              <h3 className="font-sans text-large font-medium text-foreground m-0 mb-2">Honest about the limits.</h3>
              <p className="font-sans text-small text-muted m-0">Evidence can improve judgment without pretending to replace it.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
