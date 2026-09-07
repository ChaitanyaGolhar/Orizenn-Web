import { Container } from '@/components/ui/Container';
import { EvidenceNode } from '@/components/evidence/EvidenceNode';
import { EvidenceTrace } from '@/components/evidence/EvidenceTrace';
import { ArtifactNode } from '@/components/evidence/ArtifactNode';

export default function HowItWorksPage() {
  return (
    <main className="pt-32 pb-48">
      <Container className="flex flex-col items-center text-center gap-8 mb-32 max-w-[800px] mx-auto">
        <h1 className="font-sans text-h1 font-normal tracking-[-0.04em] leading-[1.1] text-foreground m-0 mt-16">
          From work to understanding.
        </h1>
        <p className="text-large text-muted leading-[1.5] m-0">
          A technical pipeline that transforms fragmented project artifacts into a structured evaluation framework.
        </p>
      </Container>

      <Container className="max-w-[1000px] mx-auto">
        {/* Technical Timeline Pipeline */}
        <div className="flex flex-col relative pl-12 md:pl-24">
          
          <div className="grid grid-cols-[100px_1fr] md:grid-cols-[250px_1fr] items-start">
            <EvidenceNode label="01 Work" isActive={true} />
            <div className="flex flex-col gap-4 pl-8 md:pl-16 pt-2">
              <ArtifactNode label="Source Code" type="code" isActive />
              <ArtifactNode label="Jupyter Notebooks" type="notebook" isActive />
              <ArtifactNode label="Documentation" type="document" isActive />
              <ArtifactNode label="Experiment Data" type="data" isActive />
            </div>
          </div>

          <div className="h-[120px] ml-16 md:ml-[125px] border-l border-signal/40 relative">
            <div className="absolute top-0 bottom-0 left-0 w-px bg-signal shadow-[0_0_12px_rgba(0,107,255,0.8)]" />
          </div>

          <div className="grid grid-cols-[100px_1fr] md:grid-cols-[250px_1fr] items-center">
            <EvidenceNode label="02 Evidence" isActive={true} />
            <div className="pl-8 md:pl-16 text-muted leading-[1.6]">
              Artifacts are analyzed to extract structural, semantic, and contextual signals. What decisions were made? What complexity was handled?
            </div>
          </div>

          <div className="h-[120px] ml-16 md:ml-[125px] border-l border-signal/40 relative">
            <div className="absolute top-0 bottom-0 left-0 w-px bg-signal shadow-[0_0_12px_rgba(0,107,255,0.8)]" />
          </div>
          
          <div className="grid grid-cols-[100px_1fr] md:grid-cols-[250px_1fr] items-center">
            <EvidenceNode label="03 Evaluation" isActive={true} />
            <div className="pl-8 md:pl-16 text-muted leading-[1.6]">
              Signals are mapped against criteria. We establish a grounded understanding of the work's actual merit, limitations, and scope.
            </div>
          </div>

          <div className="h-[120px] ml-16 md:ml-[125px] border-l border-signal/40 relative">
            <div className="absolute top-0 bottom-0 left-0 w-px bg-signal shadow-[0_0_12px_rgba(0,107,255,0.8)]" />
          </div>

          <div className="grid grid-cols-[100px_1fr] md:grid-cols-[250px_1fr] items-center">
            <EvidenceNode label="04 Understanding" isActive={true} className="!bg-signal/10 !border-signal/50 shadow-[0_0_20px_rgba(0,107,255,0.2)]" />
            <div className="pl-8 md:pl-16 text-foreground font-medium leading-[1.6]">
              The evaluator receives the context necessary to make an informed, evidence-backed judgment.
            </div>
          </div>

        </div>
      </Container>
    </main>
  );
}
