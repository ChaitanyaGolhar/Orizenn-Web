import { Container } from '../ui/Container';

export function Problem() {
  return (
    <section className="pt-48 pb-32 bg-background">
      <Container>
        <div className="flex flex-col gap-16 max-w-[800px]">
          <div className="font-mono text-micro tracking-[0.1em] text-muted">01 / THE PROBLEM</div>
          <h2 className="font-sans text-h1 font-normal tracking-[-0.04em] leading-[1.1] text-foreground m-0">
            The work is there.<br />
            We just don't see enough of it.
          </h2>
          <p className="text-large text-muted leading-[1.5] m-0 max-w-[38ch]">
            People build real technical work across code, notebooks, experiments, documentation, data, and projects. But much of that work gets reduced to a grade, a resume, a certificate, or a portfolio — signals that rarely show the full picture.
          </p>
          <div className="text-large text-foreground font-medium leading-[1.5] mt-8 border-l-2 border-border pl-8">
            The evidence exists. It is just fragmented, difficult to interpret, and easy to overlook.
          </div>
        </div>
      </Container>
    </section>
  );
}
