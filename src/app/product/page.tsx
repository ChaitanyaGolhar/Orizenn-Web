import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { AppShell, ProjectSidebar } from '@/components/product-ui/AppShell';
import { EvidencePanel } from '@/components/product-ui/ProjectViews';
import { ArtifactItem, FindingRow } from '@/components/product-ui/ProductComponents';

export default function ProductPage() {
  return (
    <main className="pt-32 pb-32">
      <Container className="flex flex-col items-center text-center gap-8 mb-24 max-w-[800px] mx-auto">
        <h1 className="font-sans text-h1 font-normal tracking-[-0.04em] leading-[1.1] text-foreground m-0 mt-16">
          See what the work can reveal.
        </h1>
        <p className="text-large text-muted leading-[1.5] m-0">
          Explore how Orizenn turns technical project artifacts into structured evidence and evaluation.
        </p>
      </Container>

      <Container className="mb-48">
        <div className="w-full h-[600px] max-w-[1200px] mx-auto overflow-hidden">
          <AppShell>
            <ProjectSidebar />
            <EvidencePanel>
              
              <div className="w-[300px] flex flex-col gap-4 overflow-y-auto pr-2">
                <h3 className="font-mono text-[10px] uppercase text-muted tracking-widest border-b border-border/50 pb-2 m-0 sticky top-0 bg-background z-10">Project Workspace</h3>
                <ArtifactItem name="navigation_agent.ts" type="code" selected />
                <ArtifactItem name="obstacle_detection.py" type="code" />
                <ArtifactItem name="system_architecture.md" type="doc" />
                <ArtifactItem name="test_results_epoch_4.csv" type="data" />
                <ArtifactItem name="ci_cd_pipeline.yml" type="code" />
              </div>

              <div className="flex-1 flex flex-col gap-8 bg-surface/30 p-6 border border-border/30 rounded-md overflow-y-auto">
                <div>
                  <h3 className="font-mono text-[10px] uppercase text-muted tracking-widest border-b border-border/50 pb-2 m-0 mb-4">Evidence Analysis</h3>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-2 rounded-full bg-signal" />
                    <span className="font-sans text-small text-foreground font-medium">navigation_agent.ts</span>
                  </div>
                  
                  <div className="flex flex-col bg-background border border-border/50 rounded-md">
                    <FindingRow category="Implementation Detail" text="Uses A* pathfinding with custom heuristic weighting for dynamic obstacles. Code demonstrates advanced state management." />
                    <FindingRow category="Architectural Decision" text="Decoupled sensor ingestion layer from path calculation, allowing for easy testing without hardware in the loop." />
                    <FindingRow category="Limitation" text="Edge cases around sensor failure are caught but not fully recovered; system gracefully halts rather than re-routing." />
                  </div>
                </div>
              </div>
              
            </EvidencePanel>
          </AppShell>
        </div>
      </Container>

      <Container className="flex flex-col items-center text-center gap-8 mb-32 max-w-[600px] mx-auto">
        <h2 className="font-sans text-large font-normal text-foreground">
          The work is the source.<br/>Orizenn makes it legible.
        </h2>
        <Button href="https://app.orizenn.com" variant="primary">Open App →</Button>
      </Container>
    </main>
  );
}
