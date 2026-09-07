import { Container } from '../ui/Container';

export function Approach() {
  return (
    <section className="pt-48 pb-32 bg-background border-t border-border">
      <Container>
        <div className="flex flex-col gap-16 max-w-[800px]">
          <div className="font-mono text-micro tracking-[0.1em] text-muted">02 / A DIFFERENT APPROACH</div>
          <h2 className="font-sans text-h1 font-normal tracking-[-0.04em] leading-[1.1] text-foreground m-0">
            Start with the work.
          </h2>
          <p className="text-large text-muted leading-[1.5] m-0">
            Orizenn begins with the technical work itself — not only the claim made about it. It discovers the artifacts inside a project, organizes the evidence they contain, and brings that evidence into a clearer view.
          </p>
        </div>
      </Container>
    </section>
  );
}
