import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { AppShell, ProjectSidebar } from '../product-ui/AppShell';
import { EvidencePanel } from '../product-ui/ProjectViews';
import { ArtifactItem, FindingRow } from '../product-ui/ProductComponents';

export function ProductReveal() {
  return (
    <section className="pt-48 pb-48 bg-surface">
      <Container>
        <div className="flex flex-col items-center text-center gap-8 max-w-[800px] mx-auto mb-32">
          <div className="font-mono text-micro tracking-[0.1em] text-muted uppercase">See it in action</div>
          <h2 className="font-sans text-h1 font-normal tracking-[-0.04em] leading-[1.1] text-foreground m-0">
            A real project.<br />
            A clearer picture.
          </h2>
          <p className="text-large text-muted leading-[1.5] m-0 my-8">
            Explore how Orizenn moves from the work itself to evidence, evaluation, and findings — giving the project more context than a final submission alone can provide.
          </p>
          <div>
            <Button href="/product" variant="primary">View Example Project →</Button>
          </div>
        </div>

        {/* Coded Product Demonstration */}
        <div className="w-full aspect-[16/10] max-w-[1200px] mx-auto overflow-hidden">
          <AppShell>
            <ProjectSidebar />
            <EvidencePanel>
              
              {/* Left Column: Artifacts */}
              <div className="w-[300px] flex flex-col gap-4">
                <h3 className="font-mono text-[10px] uppercase text-muted tracking-widest border-b border-border/50 pb-2 m-0">Discovered Artifacts</h3>
                <ArtifactItem name="navigation_agent.ts" type="code" selected />
                <ArtifactItem name="obstacle_detection.py" type="code" />
                <ArtifactItem name="system_architecture.md" type="doc" />
                <ArtifactItem name="test_results_epoch_4.csv" type="data" />
              </div>

              {/* Right Column: Evidence & Findings */}
              <div className="flex-1 flex flex-col gap-8 bg-surface/30 p-6 border border-border/30 rounded-md overflow-hidden">
                <div>
                  <h3 className="font-mono text-[10px] uppercase text-muted tracking-widest border-b border-border/50 pb-2 m-0 mb-4">Evidence & Evaluation</h3>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-2 rounded-full bg-signal" />
                    <span className="font-sans text-small text-foreground font-medium">navigation_agent.ts</span>
                  </div>
                  
                  <div className="flex flex-col bg-background border border-border/50 rounded-md">
                    <FindingRow 
                      category="Implementation Detail" 
                      text="Uses A* pathfinding with custom heuristic weighting for dynamic obstacles. Code demonstrates advanced state management." 
                    />
                    <FindingRow 
                      category="Architectural Decision" 
                      text="Decoupled sensor ingestion layer from path calculation, allowing for easy testing without hardware in the loop." 
                    />
                    <FindingRow 
                      category="Limitation" 
                      text="Edge cases around sensor failure are caught but not fully recovered; system gracefully halts rather than re-routing." 
                    />
                  </div>
                </div>
              </div>
              
            </EvidencePanel>
          </AppShell>
        </div>
      </Container>
    </section>
  );
}
