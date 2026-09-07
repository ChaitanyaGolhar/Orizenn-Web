import { Container } from '../ui/Container';

export function Philosophy() {
  return (
    <section className="pt-48 pb-48 bg-background text-center">
      <Container>
        <div className="flex flex-col items-center gap-16 max-w-[800px] mx-auto">
          <div className="font-mono text-micro tracking-[0.1em] text-muted">THE ORIZENN APPROACH</div>
          <h2 className="font-sans text-h1 font-normal tracking-[-0.04em] leading-[1.1] text-foreground m-0">
            Evidence before assumption.
          </h2>
          <p className="text-large text-muted leading-[1.5] m-0">
            Orizenn is built around a simple idea: technical work should be understood through the evidence inside the work itself.
          </p>
          <div className="font-sans text-large font-medium text-signal mt-16 px-16 py-12 border border-border rounded-md bg-white/[0.02]">
            It does not replace judgment.<br/>It gives judgment more context.
          </div>
        </div>
      </Container>
    </section>
  );
}
