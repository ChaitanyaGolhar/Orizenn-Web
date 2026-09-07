import { ReactNode } from 'react';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="w-full h-full bg-[#0a0a0c] text-foreground flex overflow-hidden font-sans border border-border/50 rounded-lg shadow-2xl relative">
      {/* Mock Browser Header (optional, for realism if placed in a frame) */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-surface border-b border-border/50 flex items-center px-4 gap-2 z-50">
        <div className="w-3 h-3 rounded-full bg-border/50" />
        <div className="w-3 h-3 rounded-full bg-border/50" />
        <div className="w-3 h-3 rounded-full bg-border/50" />
        <div className="mx-auto w-[200px] h-4 rounded bg-background/50 border border-border/30" />
      </div>
      
      <div className="w-full h-full flex pt-8">
        {children}
      </div>
    </div>
  );
}

export function ProjectSidebar() {
  return (
    <div className="w-[240px] flex-shrink-0 border-r border-border/50 bg-surface/30 p-4 flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded bg-signal/20 flex items-center justify-center">
          <div className="w-3 h-3 bg-signal rounded-sm" />
        </div>
        <span className="font-medium text-small">Orizenn System</span>
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-mono text-[10px] text-muted tracking-widest uppercase">Project Views</span>
        <div className="px-2 py-1.5 rounded bg-signal/10 text-foreground text-micro border border-signal/20">Evidence Workspace</div>
        <div className="px-2 py-1.5 rounded text-muted text-micro hover:bg-surface transition-colors cursor-default">Source Artifacts</div>
        <div className="px-2 py-1.5 rounded text-muted text-micro hover:bg-surface transition-colors cursor-default">Evaluation Report</div>
      </div>
    </div>
  );
}
