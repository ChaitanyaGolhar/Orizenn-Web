import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { EvidenceNode } from '../evidence/EvidenceNode';
import { EvidenceLine } from '../evidence/EvidenceLine';

export function Institutions() {
  return (
    <section className="pt-48 pb-48 bg-surface">
      <Container className="grid grid-cols-1 lg:grid-cols-[8fr_4fr] gap-32">
        <div className="flex flex-col gap-8 max-w-[900px]">
          <div className="font-mono text-micro tracking-[0.1em] text-muted">FOR INSTITUTIONS</div>
          <h2 className="font-sans text-hero font-normal tracking-[-0.04em] leading-[1.1] text-foreground m-0 mb-8">
            See the work behind the outcomes.
          </h2>
          
          <div className="flex flex-col gap-8 text-large text-muted leading-[1.5]">
            <p className="m-0 max-w-[45ch]">
              Technical learning doesn't happen only in grades and submissions. Students build through projects, experiments, code, documentation, and iteration.
            </p>
            <p className="m-0 max-w-[45ch]">
              Orizenn helps institutions bring more of that work into view — creating a richer basis for understanding technical learning and evaluating what students actually demonstrate.
            </p>
          </div>

          <div className="flex items-center gap-4 mt-16">
            <Button href="/contact" variant="primary">Talk to Orizenn →</Button>
            <Button href="/how-it-works" variant="secondary">See How It Works →</Button>
          </div>
        </div>
        
        {/* Institutional System Visualization */}
        <div className="hidden lg:flex flex-col items-center justify-center opacity-60">
          <EvidenceNode label="Program" isActive={false} className="w-[200px] justify-center border-border/50" />
          <EvidenceLine direction="vertical" className="h-[40px] opacity-50" />
          <EvidenceNode label="Student Projects" isActive={false} className="w-[200px] justify-center border-border/50" />
          <EvidenceLine direction="vertical" className="h-[40px] opacity-50" />
          <EvidenceNode label="Artifacts" isActive={false} className="w-[200px] justify-center border-border/50" />
          <EvidenceLine direction="vertical" className="h-[40px] opacity-50" />
          <EvidenceNode label="Evidence" isActive={true} className="w-[200px] justify-center border-signal/30 shadow-[0_0_15px_rgba(0,102,255,0.1)]" />
          <EvidenceLine direction="vertical" className="h-[40px]" isActive={true} />
          <EvidenceNode label="Program Visibility" isActive={true} className="w-[200px] justify-center bg-signal/10 text-foreground border-signal/50 shadow-[0_0_20px_rgba(0,102,255,0.15)]" />
        </div>
      </Container>
    </section>
  );
}
