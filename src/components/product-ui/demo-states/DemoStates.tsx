import React from 'react';

// Common Header Component
function ProjectIdentifier({ accent }: { accent: string }) {
  return (
    <div className="mb-6 flex items-center gap-3 opacity-80">
      <div 
        className="w-2 h-2 rounded-full shadow-[0_0_10px_currentColor] transition-colors duration-700" 
        style={{ color: accent, backgroundColor: accent }} 
      />
      <span className="text-small text-foreground font-mono uppercase tracking-widest transition-colors duration-700 hover:text-white">
        Autonomous Navigation Agent
      </span>
    </div>
  );
}

// 1. Project Demo State
export const ProjectDemo: React.FC<{isActive: boolean; accent: string}> = ({ isActive, accent }) => {
  return (
    <div className="flex flex-col h-full w-full">
      <ProjectIdentifier accent={accent} />
      <div className="flex-1 flex gap-4 md:gap-6 flex-col md:flex-row min-h-0 relative z-10 transition-transform duration-700">
        
        {/* File Tree - Structural Sidebar */}
        <div className="w-full md:w-[260px] shrink-0 bg-surface/90 backdrop-blur-xl rounded-xl border border-border/40 p-5 overflow-y-auto shadow-2xl flex flex-col gap-6">
          <div>
            <div className="text-[10px] font-mono text-muted tracking-widest mb-3 uppercase">src/</div>
            <div className="flex flex-col gap-1.5">
              <div className="text-small text-foreground flex items-center gap-2.5 bg-white/5 border border-white/10 p-2 rounded-md shadow-sm" style={{ borderColor: `${accent}40` }}>
                <span className="font-mono text-[10px] px-1 rounded" style={{ color: accent, backgroundColor: `${accent}20` }}>TS</span> navigation_agent.ts
              </div>
              <div className="text-small text-foreground/70 flex items-center gap-2.5 p-2 rounded-md">
                <span className="text-blue-400 font-mono text-[10px] bg-blue-400/10 px-1 rounded">PY</span> obstacle_detection.py
              </div>
            </div>
          </div>
          <div>
            <div className="text-[10px] font-mono text-muted tracking-widest mb-3 uppercase">docs/</div>
            <div className="flex flex-col gap-1.5">
              <div className="text-small text-foreground/70 flex items-center gap-2.5 p-2 rounded-md">
                <span className="text-muted font-mono text-[10px] bg-surface px-1 rounded border border-border/50">MD</span> system_architecture.md
              </div>
            </div>
          </div>
        </div>

        {/* Code Editor Mock - Floating Main Panel */}
        <div className="flex-1 bg-[#050508]/90 backdrop-blur-2xl border border-border/40 rounded-xl flex flex-col min-h-[200px] md:min-h-0 overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -z-10 pointer-events-none opacity-20" style={{ backgroundColor: accent }} />
          
          <div className="border-b border-border/20 bg-surface/50 flex">
            <div className="text-micro font-mono text-foreground border-t-2 bg-[#050508] px-4 py-3 flex items-center gap-2" style={{ borderTopColor: accent }}>
              <span style={{ color: accent }}>ts</span> navigation_agent.ts
              <div className="w-4 h-4 ml-2 opacity-50 flex items-center justify-center">×</div>
            </div>
          </div>
          
          <div className="p-6 font-mono text-[11px] md:text-micro text-muted/90 leading-[1.7] overflow-y-auto">
            <div className="text-purple-400 font-medium">import</div> {'{'} PathFinder {'}'} <div className="text-purple-400 font-medium inline">from</div> <span className="text-green-300">'./core/pathfinding'</span>;<br/><br/>
            <div className="text-blue-400 font-medium">export class</div> NavigationAgent {'{'}<br/>
            &nbsp;&nbsp;<div className="text-muted/50 italic">// A* pathfinding with custom heuristic weighting</div><br/>
            &nbsp;&nbsp;<div className="text-blue-400 font-medium">async</div> <span className="text-yellow-200">calculateOptimalPath</span>(target: Coordinates) {'{'}<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<div className="text-purple-400 font-medium">const</div> obstacles = <div className="text-blue-400 font-medium">await</div> <div style={{ color: accent, display: 'inline' }}>this</div>.sensors.getDynamicObstacles();<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<div className="text-purple-400 font-medium">return</div> <div style={{ color: accent, display: 'inline' }}>this</div>.pathFinder.solve(target, obstacles);<br/>
            &nbsp;&nbsp;{'}'}<br/>
            {'}'}
          </div>
        </div>

      </div>
    </div>
  );
};

// 2. Artifacts Demo State
export const ArtifactsDemo: React.FC<{isActive: boolean; accent: string}> = ({ isActive, accent }) => {
  return (
    <div className="flex flex-col h-full w-full">
      <ProjectIdentifier accent={accent} />
      <div className="flex-1 flex justify-center items-center relative z-10 pt-4">
        
        {/* Spatial Artifact Arrangement */}
        <div className="relative w-full max-w-3xl aspect-[16/9] md:aspect-auto md:h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] rounded-3xl" />
          
          <div className="relative w-[300px] h-[300px] animate-[spin_60s_linear_infinite]">
            {/* Artifact 1: Code */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_60s_linear_infinite_reverse]">
              <div className="bg-surface/80 backdrop-blur-md border border-border/40 rounded-xl p-4 shadow-xl flex flex-col items-center gap-2" style={{ boxShadow: `0 10px 30px -10px ${accent}40` }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5" style={{ color: accent }}>{'</>'}</div>
                <div className="text-small font-medium text-foreground">navigation.ts</div>
                <div className="text-[10px] font-mono text-muted uppercase tracking-widest">Code</div>
              </div>
            </div>

            {/* Artifact 2: Doc */}
            <div className="absolute bottom-10 left-0 -translate-x-1/2 animate-[spin_60s_linear_infinite_reverse]">
              <div className="bg-surface/80 backdrop-blur-md border border-border/40 rounded-xl p-4 shadow-xl flex flex-col items-center gap-2" style={{ boxShadow: `0 10px 30px -10px ${accent}40` }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5" style={{ color: accent }}>{'[]'}</div>
                <div className="text-small font-medium text-foreground">architecture.md</div>
                <div className="text-[10px] font-mono text-muted uppercase tracking-widest">Doc</div>
              </div>
            </div>

            {/* Artifact 3: Data */}
            <div className="absolute bottom-10 right-0 translate-x-1/2 animate-[spin_60s_linear_infinite_reverse]">
              <div className="bg-surface/80 backdrop-blur-md border border-border/40 rounded-xl p-4 shadow-xl flex flex-col items-center gap-2" style={{ boxShadow: `0 10px 30px -10px ${accent}40` }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5" style={{ color: accent }}>{'{}'}</div>
                <div className="text-small font-medium text-foreground">test_results.csv</div>
                <div className="text-[10px] font-mono text-muted uppercase tracking-widest">Data</div>
              </div>
            </div>
            
            {/* Center connecting visual */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-dashed border-white/20 flex items-center justify-center animate-[spin_60s_linear_infinite_reverse]">
               <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accent, boxShadow: `0 0 10px ${accent}` }} />
            </div>
            
            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full -z-10" viewBox="0 0 300 300">
              <circle cx="150" cy="150" r="130" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-white/10" fill="none" />
              <path d="M150,150 L150,0" stroke={accent} strokeWidth="1" className="opacity-30" />
              <path d="M150,150 L37,250" stroke={accent} strokeWidth="1" className="opacity-30" />
              <path d="M150,150 L263,250" stroke={accent} strokeWidth="1" className="opacity-30" />
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
};

// 3. Evidence Demo State
export const EvidenceDemo: React.FC<{isActive: boolean; accent: string}> = ({ isActive, accent }) => {
  return (
    <div className="flex flex-col h-full w-full">
      <ProjectIdentifier accent={accent} />
      <div className="flex-1 relative flex items-center justify-center min-h-0 px-4">
        
        {/* Node Graph Representation */}
        <div className="w-full max-w-4xl relative aspect-[4/3] md:aspect-auto md:h-full flex items-center justify-center">
          
          <div className="absolute inset-0 hidden md:block">
            {/* Connection lines from artifacts to evidence */}
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M 20,25 C 40,25 45,50 65,35" stroke={accent} strokeWidth="0.4" fill="none" className="opacity-40" />
              <path d="M 20,50 C 40,50 45,50 65,50" stroke={accent} strokeWidth="0.6" fill="none" className={isActive ? "animate-[dash_3s_linear_infinite] opacity-80" : "opacity-40"} strokeDasharray="2,2" />
              <path d="M 20,75 C 40,75 45,50 65,65" stroke={accent} strokeWidth="0.4" fill="none" className="opacity-40" />
            </svg>
          </div>

          <div className="flex w-full justify-between items-center z-10 relative px-10">
            
            {/* Artifact Sources */}
            <div className="flex flex-col gap-12">
              <div className="bg-surface/90 border border-border/40 p-3 rounded-lg shadow-xl w-32 flex justify-center">
                <span className="text-[11px] font-mono text-muted">navigation.ts</span>
              </div>
              <div className="bg-surface/90 border border-border/40 p-3 rounded-lg shadow-xl w-32 flex justify-center ring-1 ring-inset" style={{ '--tw-ring-color': `${accent}40` } as React.CSSProperties}>
                <span className="text-[11px] font-mono text-foreground">architecture.md</span>
              </div>
              <div className="bg-surface/90 border border-border/40 p-3 rounded-lg shadow-xl w-32 flex justify-center">
                <span className="text-[11px] font-mono text-muted">results.csv</span>
              </div>
            </div>

            {/* Extracted Evidence */}
            <div className="flex flex-col gap-16 mr-10">
              <div className="bg-surface/90 backdrop-blur-xl border border-border/40 p-5 rounded-2xl shadow-2xl relative w-64">
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-surface border-4 flex items-center justify-center" style={{ borderColor: accent }}>
                   <div className="w-1 h-1 rounded-full bg-foreground" />
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest mb-1 opacity-70" style={{ color: accent }}>Extracted Evidence</div>
                <div className="text-small font-medium text-foreground">Advanced Pathfinding</div>
              </div>
              
              <div className="bg-surface/90 backdrop-blur-xl border border-border/40 p-5 rounded-2xl shadow-2xl relative w-64">
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-surface border-4 flex items-center justify-center" style={{ borderColor: accent }}>
                   <div className="w-1 h-1 rounded-full bg-foreground" />
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest mb-1 opacity-70" style={{ color: accent }}>Extracted Evidence</div>
                <div className="text-small font-medium text-foreground">Decoupled Architecture</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

// 4. Evaluation Demo State
export const EvaluationDemo: React.FC<{isActive: boolean; accent: string}> = ({ isActive, accent }) => {
  return (
    <div className="flex flex-col h-full w-full">
      <ProjectIdentifier accent={accent} />
      <div className="flex-1 flex items-center justify-center min-h-0 px-4">
        
        {/* Horizontal Reasoning Chain */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full max-w-5xl">
          
          <div className="flex-1 bg-surface/90 backdrop-blur-md border border-border/40 p-5 rounded-xl shadow-lg flex flex-col items-center text-center w-full">
            <div className="text-[10px] font-mono text-muted uppercase tracking-widest mb-3">Artifact</div>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-2" style={{ color: accent }}>{'</>'}</div>
            <div className="text-small text-foreground">navigation.ts</div>
          </div>

          <div className="hidden md:block text-border">→</div>

          <div className="flex-1 bg-surface/90 backdrop-blur-md border border-border/40 p-5 rounded-xl shadow-lg flex flex-col items-center text-center w-full">
            <div className="text-[10px] font-mono uppercase tracking-widest mb-3" style={{ color: accent }}>Evidence</div>
            <div className="text-small text-foreground leading-snug">Uses custom A* heuristic weighting.</div>
          </div>

          <div className="hidden md:block text-border">→</div>

          <div className="flex-1 bg-surface/90 backdrop-blur-md border border-border/40 p-5 rounded-xl shadow-lg flex flex-col items-center text-center w-full">
            <div className="text-[10px] font-mono text-muted uppercase tracking-widest mb-3">Finding</div>
            <div className="text-small text-foreground leading-snug">Advanced temporal state management.</div>
          </div>

          <div className="hidden md:block text-border" style={{ color: accent }}>→</div>

          <div className="flex-1 bg-surface/90 backdrop-blur-md border p-6 rounded-2xl shadow-2xl flex flex-col items-center text-center w-full transform scale-105" style={{ borderColor: `${accent}60`, boxShadow: `0 20px 40px -10px ${accent}30` }}>
            <div className="text-[11px] font-mono uppercase tracking-widest mb-3 font-semibold" style={{ color: accent }}>Evaluation</div>
            <div className="text-body font-medium text-foreground leading-tight">Validates claimed capabilities perfectly.</div>
          </div>

        </div>

      </div>
    </div>
  );
};

// 5. Findings Demo State
export const FindingsDemo: React.FC<{isActive: boolean; accent: string}> = ({ isActive, accent }) => {
  return (
    <div className="flex flex-col h-full w-full relative">
      <ProjectIdentifier accent={accent} />

      <div className="flex-1 flex flex-col justify-center items-center min-h-0 relative z-10 w-full max-w-3xl mx-auto">
        
        <div className="w-full flex items-center justify-between mb-8 border-b border-border/40 pb-4">
           <div className="text-small font-mono text-muted uppercase tracking-widest">Resolved Findings</div>
           <div className="text-micro font-mono bg-white/5 px-2 py-1 rounded text-foreground/80">3 Identified</div>
        </div>

        <div className="flex flex-col gap-4 w-full">
          {/* Finding 1 */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-surface/80 backdrop-blur border border-border/40 p-4 rounded-xl shadow-lg">
            <div className="w-1.5 h-full min-h-[40px] rounded-full" style={{ backgroundColor: accent }} />
            <div className="flex-1">
              <div className="text-body font-medium text-foreground">Strong implementation evidence</div>
              <div className="text-small text-muted mt-1">Confirmed advanced pathfinding and state management.</div>
            </div>
            <div className="flex items-center gap-2 bg-background border border-border/50 px-3 py-1.5 rounded-md mt-3 md:mt-0">
               <span className="w-1.5 h-1.5 rounded-full bg-signal" />
               <span className="text-[11px] font-mono text-muted">navigation.ts</span>
            </div>
          </div>
          
          {/* Finding 2 */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-surface/80 backdrop-blur border border-border/40 p-4 rounded-xl shadow-lg">
            <div className="w-1.5 h-full min-h-[40px] rounded-full" style={{ backgroundColor: accent }} />
            <div className="flex-1">
              <div className="text-body font-medium text-foreground">Clear architectural separation</div>
              <div className="text-small text-muted mt-1">Decoupled layers validated by system documentation.</div>
            </div>
            <div className="flex items-center gap-2 bg-background border border-border/50 px-3 py-1.5 rounded-md mt-3 md:mt-0">
               <span className="w-1.5 h-1.5 rounded-full bg-signal" />
               <span className="text-[11px] font-mono text-muted">architecture.md</span>
            </div>
          </div>

          {/* Finding 3 */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-surface/80 backdrop-blur border border-border/40 p-4 rounded-xl shadow-lg">
            <div className="w-1.5 h-full min-h-[40px] rounded-full bg-border/50" />
            <div className="flex-1">
              <div className="text-body font-medium text-foreground">Sensor-failure limitation</div>
              <div className="text-small text-muted mt-1">Fault tolerance lacks recovery routing paths.</div>
            </div>
            <div className="flex items-center gap-2 bg-background border border-border/50 px-3 py-1.5 rounded-md mt-3 md:mt-0">
               <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
               <span className="text-[11px] font-mono text-muted">results.csv</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
