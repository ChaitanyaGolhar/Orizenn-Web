import { ReactNode } from 'react';

export function ProjectHeader() {
  return (
    <div className="h-[60px] border-b border-border/50 flex items-center px-6 justify-between flex-shrink-0">
      <div className="flex flex-col">
        <h1 className="text-small font-medium m-0">Autonomous Navigation Agent</h1>
        <span className="text-[10px] text-muted font-mono">Last analyzed: 2 hours ago</span>
      </div>
      <div className="px-3 py-1 bg-surface border border-border/50 rounded text-micro text-foreground">
        Generate Report
      </div>
    </div>
  );
}

export function EvidencePanel({ children }: { children: ReactNode }) {
  return (
    <div className="flex-1 flex flex-col bg-background relative overflow-hidden">
      <ProjectHeader />
      <div className="flex-1 p-6 overflow-hidden flex gap-6">
        {children}
      </div>
    </div>
  );
}
