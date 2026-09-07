import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function Audience() {
  return (
    <section className="pt-32 pb-32 bg-background">
      <Container>
        <div className="font-mono text-micro tracking-[0.1em] text-muted mb-8">WHY IT MATTERS</div>
        <h2 className="font-sans text-h1 font-normal tracking-[-0.04em] text-foreground m-0 mb-32 max-w-[800px]">
          More visibility into the work that matters.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Students */}
          <div className="flex flex-col py-16 border-t border-border">
            <h3 className="font-sans text-large font-medium text-foreground m-0 mb-4">Let your work speak for itself.</h3>
            <p className="font-sans text-small text-muted leading-[1.5] m-0 mb-8 grow">
              Turn the work you build into a clearer record of what you actually did, learned, and demonstrated.
            </p>
            <Button href="/students" variant="secondary" className="self-start pl-0">For Students →</Button>
          </div>

          {/* Educators */}
          <div className="flex flex-col py-16 border-t border-border">
            <h3 className="font-sans text-large font-medium text-foreground m-0 mb-4">Evaluate with more context.</h3>
            <p className="font-sans text-small text-muted leading-[1.5] m-0 mb-8 grow">
              See beyond the final submission and understand more of the work behind it.
            </p>
            <Button href="/educators" variant="secondary" className="self-start pl-0">For Educators →</Button>
          </div>

          {/* Institutions */}
          <div className="flex flex-col py-16 border-t border-border">
            <h3 className="font-sans text-large font-medium text-foreground m-0 mb-4">See more of what is actually being built.</h3>
            <p className="font-sans text-small text-muted leading-[1.5] m-0 mb-8 grow">
              Gain deeper visibility into technical work across students, projects, and programs.
            </p>
            <Button href="/institutions" variant="secondary" className="self-start pl-0">For Institutions →</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
