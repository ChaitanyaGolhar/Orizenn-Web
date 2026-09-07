import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { EvidenceNode } from '@/components/evidence/EvidenceNode';
import { EvidenceLine } from '@/components/evidence/EvidenceLine';

export default function InstitutionsPage() {
  return (
    <main className="pt-32 pb-32">
      <Container className="flex flex-col items-center text-center gap-8 mb-32 max-w-[800px] mx-auto">
        <h1 className="font-sans text-h1 font-normal tracking-[-0.04em] leading-[1.1] text-foreground m-0 mt-16">
          See the work behind the outcomes.
        </h1>
        <p className="text-large text-muted leading-[1.5] m-0 mb-8">
          Technical learning is more than grades and submissions. See more of the work happening across your students, projects, and programs.
        </p>
        <Button href="mailto:hello@orizenn.com" variant="primary">Talk to Orizenn →</Button>
      </Container>

      <Container className="max-w-[1200px] mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 items-center bg-surface/30 p-16 border border-border/50 rounded-lg">
          <div className="flex flex-col gap-6">
            <h2 className="font-sans text-large font-medium text-foreground m-0">The visibility gap</h2>
            <p className="text-muted leading-[1.6] m-0">
              When an institution only sees the final submitted code or the final grade, the actual process of learning, iteration, and technical decision-making remains invisible. Orizenn bridges this gap by bringing the full context of the work into view at the institutional level.
            </p>
          </div>
          
          <div className="flex flex-col items-center justify-center opacity-80">
            <EvidenceNode label="Institution" isActive={false} className="w-[200px] justify-center border-border/50" />
            <EvidenceLine direction="vertical" className="h-[30px] opacity-30" />
            <EvidenceNode label="Programs" isActive={false} className="w-[200px] justify-center border-border/50" />
            <EvidenceLine direction="vertical" className="h-[30px] opacity-30" />
            <EvidenceNode label="Students & Projects" isActive={false} className="w-[200px] justify-center border-border/50" />
            <EvidenceLine direction="vertical" className="h-[30px] opacity-50" />
            <EvidenceNode label="Artifacts & Evidence" isActive={true} className="w-[200px] justify-center border-signal/30 shadow-[0_0_15px_rgba(0,107,255,0.1)]" />
            <EvidenceLine direction="vertical" className="h-[30px]" isActive={true} />
            <EvidenceNode label="Institutional Visibility" isActive={true} className="w-[200px] justify-center bg-signal/10 text-foreground border-signal/50 shadow-[0_0_20px_rgba(0,107,255,0.15)]" />
          </div>
        </div>
      </Container>
    </main>
  );
}
