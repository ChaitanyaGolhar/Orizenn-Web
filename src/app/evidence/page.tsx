import { Container } from '@/components/ui/Container';

export default function EvidencePage() {
  return (
    <main className="pt-32 pb-48">
      <Container className="flex flex-col items-center text-center gap-8 mb-32 max-w-[800px] mx-auto">
        <h1 className="font-sans text-h1 font-normal tracking-[-0.04em] leading-[1.1] text-foreground m-0 mt-16">
          Evidence before assumption.
        </h1>
        <p className="text-large text-muted leading-[1.5] m-0">
          Technical work contains signals that conventional representations often leave behind. Orizenn brings those signals into view.
        </p>
      </Container>

      <Container className="max-w-[800px] mx-auto">
        <div className="flex flex-col gap-12 text-center">
          
          <div className="flex flex-col items-center gap-4">
            <span className="font-mono text-micro uppercase tracking-widest text-muted">The Claim</span>
            <div className="px-8 py-6 bg-surface border border-border/50 rounded-lg text-large text-foreground font-medium italic">
              "I built an autonomous navigation system."
            </div>
          </div>

          <div className="flex justify-center py-4">
            <div className="w-px h-16 bg-gradient-to-b from-border/50 to-signal/50" />
          </div>

          <div className="flex flex-col items-center gap-4">
            <span className="font-mono text-micro uppercase tracking-widest text-signal">The Work (Artifacts)</span>
            <div className="w-full p-8 border border-border/50 rounded-lg bg-surface/30 grid grid-cols-2 gap-4 text-left">
              <div className="p-3 bg-background rounded border border-border/30 text-small text-muted font-mono">navigation.py</div>
              <div className="p-3 bg-background rounded border border-border/30 text-small text-muted font-mono">sensor_fusion.ipynb</div>
              <div className="p-3 bg-background rounded border border-border/30 text-small text-muted font-mono">README.md</div>
              <div className="p-3 bg-background rounded border border-border/30 text-small text-muted font-mono">test_results.csv</div>
            </div>
          </div>

          <div className="flex justify-center py-4">
            <div className="w-px h-16 bg-gradient-to-b from-signal/50 to-signal" />
          </div>

          <div className="flex flex-col items-center gap-4">
            <span className="font-mono text-micro uppercase tracking-widest text-signal">The Evidence</span>
            <div className="w-full p-8 border border-signal/30 rounded-lg bg-signal/5 text-left flex flex-col gap-4">
              <p className="m-0 text-foreground">Uses A* pathfinding with custom heuristic weighting.</p>
              <p className="m-0 text-foreground">Decoupled sensor ingestion layer from path calculation.</p>
              <p className="m-0 text-foreground">Edge cases around sensor failure are caught but system halts rather than re-routing.</p>
            </div>
          </div>

          <div className="flex justify-center py-4">
            <div className="w-px h-16 bg-signal shadow-[0_0_10px_rgba(0,107,255,0.5)]" />
          </div>

          <div className="flex flex-col items-center gap-4">
            <span className="font-mono text-micro uppercase tracking-widest text-foreground font-bold">The Evaluation</span>
            <div className="w-full p-8 border border-border/50 rounded-lg bg-surface text-large text-foreground leading-[1.6]">
              Demonstrates strong architectural boundaries and algorithmic implementation, but lacks robust fault tolerance.
            </div>
          </div>

        </div>
      </Container>
    </main>
  );
}
