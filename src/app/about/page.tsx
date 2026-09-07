import { Container } from '@/components/ui/Container';

export default function AboutPage() {
  return (
    <main className="pt-32 pb-48">
      <Container className="flex flex-col items-center text-center gap-8 mb-32 max-w-[900px] mx-auto">
        <h1 className="font-sans text-h1 font-normal tracking-[-0.04em] leading-[1.1] text-foreground m-0 mt-16">
          Technical work deserves to be understood by more than its summary.
        </h1>
      </Container>

      <Container className="max-w-[800px] mx-auto">
        <div className="flex flex-col gap-16 text-large text-muted leading-[1.6]">
          <p>
            The world has standardized on proxies. Grades, certificates, and resumes are summaries designed for fast processing. But in technical fields, these summaries consistently fail to capture the actual substance of what someone can do.
          </p>
          
          <p>
            When a student builds a project, they write code, structure data, run experiments, and make hundreds of decisions. When that project is evaluated, it is often reduced to a final output or a letter grade. The context is lost. The evidence disappears.
          </p>

          <p>
            Orizenn was built because we believe the work itself is the strongest signal. We built a system to discover the artifacts inside a technical project, extract the structural and semantic evidence they contain, and present that evidence clearly to the people who need to understand it.
          </p>

          <div className="mt-16 pt-16 border-t border-border/50">
            <h2 className="font-mono text-micro uppercase tracking-widest text-foreground mb-12">Our Principles</h2>
            
            <div className="flex flex-col gap-8 text-foreground font-medium">
              <div className="flex gap-4 items-start">
                <span className="text-signal">01</span>
                <span>Work over claims.</span>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-signal">02</span>
                <span>Evidence over assumptions.</span>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-signal">03</span>
                <span>Context over isolated signals.</span>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-signal">04</span>
                <span>Judgment informed by evidence.</span>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </main>
  );
}
