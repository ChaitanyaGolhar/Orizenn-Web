import React from 'react';

/* =========================================
   SCENE 01: WORK (Abundance)
========================================= */
export function WorkScene() {
  return (
    <div className="relative w-[120%] -ml-[10%] min-h-[80vh] flex items-center justify-center">
      {/* Background depth grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
      
      {/* Central Architecture Node */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/10 rounded-full flex items-center justify-center bg-[#070709]/80 backdrop-blur-sm z-10 shadow-[0_0_80px_rgba(0,107,255,0.05)]">
        <div className="text-center">
          <div className="text-[10px] text-signal font-mono tracking-widest uppercase mb-2">System Core</div>
          <div className="font-sans text-2xl text-white tracking-tight">Autonomous Navigation</div>
        </div>
      </div>

      {/* Orbiting / Spatial Elements */}
      <div className="absolute top-[15%] left-[10%] p-6 border-l border-white/10 opacity-70">
        <div className="font-mono text-[10px] text-muted mb-2">/src/navigation</div>
        <div className="font-mono text-[12px] text-white/80 leading-relaxed">
          ├── planner.py<br/>
          ├── trajectory.py<br/>
          ├── perception/<br/>
          │   ├── vision.py<br/>
          │   └── lidar.py
        </div>
      </div>

      <div className="absolute top-[20%] right-[10%] p-6 bg-[#0a0a0c] border border-white/5 shadow-2xl opacity-90 backdrop-blur-md">
        <div className="font-mono text-[10px] text-signal mb-4">navigation.py</div>
        <pre className="font-mono text-[11px] text-white/60 leading-relaxed">
          <code>
{`def compute_trajectory(
  state: NavigationState,
  obstacles: List[Obstacle]
) -> Trajectory:
    
    # 1. Evaluate spatial density
    grid = build_occupancy(obstacles)
    
    # 2. Plan path
    path = a_star(state.pos, goal)`}
          </code>
        </pre>
      </div>

      <div className="absolute bottom-[15%] left-[20%] p-6 border-t border-white/10 opacity-80">
        <div className="font-mono text-[10px] text-muted mb-3">experiment_04_results.json</div>
        <div className="flex gap-8 mt-4">
          <div>
            <div className="text-[10px] text-white/40">Collision Rate</div>
            <div className="text-lg text-white font-mono mt-1">0.02%</div>
          </div>
          <div>
            <div className="text-[10px] text-white/40">Latency</div>
            <div className="text-lg text-[#006BFF] font-mono mt-1">12ms</div>
          </div>
        </div>
      </div>

      {/* Connective Lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ zIndex: 0 }}>
        <path d="M 200 200 L 500 400" stroke="white" strokeWidth="1" strokeDasharray="4 4" fill="none" />
        <path d="M 800 300 L 500 400" stroke="#006BFF" strokeWidth="1" fill="none" />
        <path d="M 300 600 L 500 400" stroke="white" strokeWidth="1" strokeDasharray="4 4" fill="none" />
      </svg>
    </div>
  );
}

/* =========================================
   SCENE 02: GRADE (Compression)
========================================= */
export function GradeScene() {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[50vh]">
      <div className="text-[160px] md:text-[200px] font-sans text-white leading-none tracking-tighter">
        8.6<span className="text-[60px] md:text-[80px] text-white/30 ml-2 font-light tracking-normal">/10</span>
      </div>
      <div className="mt-8 font-mono text-[12px] text-signal tracking-[0.4em] uppercase">
        Final Grade
      </div>
    </div>
  );
}

/* =========================================
   SCENE 03: RESUME (Translation)
========================================= */
export function ResumeScene() {
  return (
    <div className="w-full max-w-[600px] mx-auto pt-12 border-t-[3px] border-white/80">
      <h3 className="font-sans text-3xl text-white tracking-tight mb-4">Autonomous Navigation System</h3>
      <div className="font-mono text-[12px] text-[#006BFF] mb-12">
        Python · Computer Vision · Machine Learning · ROS
      </div>

      <div className="space-y-10">
        <div>
          <div className="font-mono text-[10px] text-white/40 tracking-widest uppercase mb-4">Project Summary</div>
          <p className="text-base text-white/70 leading-relaxed">
            Built an autonomous navigation system utilizing computer vision and path-planning algorithms to achieve real-time obstacle avoidance.
          </p>
        </div>
        <div>
          <div className="font-mono text-[10px] text-white/40 tracking-widest uppercase mb-4">Core Skills</div>
          <p className="text-base text-white/70 leading-relaxed">
            Algorithm Design, Data Analysis, Performance Optimization
          </p>
        </div>
      </div>
    </div>
  );
}

/* =========================================
   SCENE 04: CERTIFICATE (Credential)
========================================= */
export function CertificateScene() {
  return (
    <div className="w-full max-w-[700px] mx-auto aspect-[1.4] border border-white/20 bg-gradient-to-b from-white/5 to-transparent flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
      {/* Faint artifacts behind */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-12 left-12 font-mono text-[10px] text-white">function a_star()...</div>
        <div className="absolute bottom-12 right-12 font-mono text-[10px] text-white">latency: 12ms</div>
        <div className="absolute top-[40%] right-[20%] font-mono text-[10px] text-white">results.json</div>
      </div>

      <div className="w-full flex flex-col items-center text-center z-10 px-12">
        <div className="font-serif text-sm text-white/40 uppercase tracking-[0.4em] mb-16">Certificate of Completion</div>
        <div className="font-sans text-4xl md:text-5xl text-white tracking-tight mb-6">Autonomous Systems</div>
        <div className="w-16 h-[1px] bg-[#006BFF] mb-12" />
        <div className="font-mono text-[11px] text-white/40 tracking-widest">ISSUED 2026</div>
      </div>
    </div>
  );
}

/* =========================================
   SCENE 05: PORTFOLIO (Curation)
========================================= */
export function PortfolioScene() {
  return (
    <div className="w-full max-w-[900px] mx-auto space-y-8">
      <div className="w-full aspect-video bg-[#0a0a0c] border border-white/10 flex items-center justify-center overflow-hidden relative shadow-2xl">
         <div className="absolute inset-0 bg-gradient-to-tr from-[#006BFF]/20 to-transparent opacity-50" />
         <div className="w-48 h-48 border border-white/20 rounded-full" />
         <div className="w-24 h-24 border border-white/40 rounded-full absolute" />
      </div>
      <div className="flex justify-between items-end px-4">
        <div>
          <h3 className="font-sans text-3xl text-white tracking-tight mb-2">Autonomous Navigation</h3>
          <div className="font-mono text-[11px] text-white/50 uppercase tracking-widest">Case Study</div>
        </div>
        <div className="text-base text-[#006BFF]">Read more →</div>
      </div>
    </div>
  );
}

/* =========================================
   SCENE 06: INFORMATION LOSS (Discarding)
========================================= */
export function InformationLossScene() {
  return (
    <div className="w-full min-h-[70vh] relative flex flex-col items-center justify-center">
      {/* TOP: Rich artifacts dropping */}
      <div className="absolute top-[10%] flex justify-center gap-12 w-full opacity-30">
        <span className="font-mono text-[12px] md:text-sm text-white">navigation.py</span>
        <span className="font-mono text-[12px] md:text-sm text-white">results.json</span>
        <span className="font-mono text-[12px] md:text-sm text-white">architecture.md</span>
        <span className="font-mono text-[12px] md:text-sm text-white">experiments/</span>
      </div>

      {/* MIDDLE: The funnel / compression lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
        <path d="M 20% 100 Q 50% 50% 50% 80%" stroke="white" strokeWidth="1" fill="none" strokeDasharray="2 4" />
        <path d="M 40% 100 Q 50% 50% 50% 80%" stroke="white" strokeWidth="1" fill="none" strokeDasharray="2 4" />
        <path d="M 60% 100 Q 50% 50% 50% 80%" stroke="white" strokeWidth="1" fill="none" strokeDasharray="2 4" />
        <path d="M 80% 100 Q 50% 50% 50% 80%" stroke="white" strokeWidth="1" fill="none" strokeDasharray="2 4" />
      </svg>

      {/* BOTTOM: The weak signals */}
      <div className="absolute bottom-[10%] flex flex-col items-center gap-4 bg-[#070709] px-16 py-10 border border-white/10 z-10 shadow-[0_0_50px_rgba(0,107,255,0.05)]">
        <div className="text-4xl text-white font-sans tracking-tight">8.6 / 10</div>
        <div className="text-[11px] text-white/50 font-mono tracking-widest uppercase">Grade & Portfolio</div>
      </div>
    </div>
  );
}

/* =========================================
   SCENE 07: START WITH WORK (Reconstruction)
========================================= */
export function StartWithWorkScene() {
  return (
    <div className="w-[120%] -ml-[10%] min-h-[70vh] relative flex flex-col items-center justify-center">
      {/* Center: The compressed signal breaking open */}
      <div className="absolute top-[15%] text-white/20 font-sans text-3xl blur-[3px] tracking-tight">8.6 / 10</div>
      
      {/* Lines radiating OUTWARD */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60">
        <path d="M 50% 120 Q 30% 50% 20% 80%" stroke="#006BFF" strokeWidth="1" fill="none" />
        <path d="M 50% 120 Q 40% 50% 40% 80%" stroke="#006BFF" strokeWidth="1" fill="none" />
        <path d="M 50% 120 Q 60% 50% 60% 80%" stroke="#006BFF" strokeWidth="1" fill="none" />
        <path d="M 50% 120 Q 70% 50% 80% 80%" stroke="#006BFF" strokeWidth="1" fill="none" />
      </svg>

      {/* Expanded artifacts returning at the bottom */}
      <div className="absolute bottom-[10%] flex justify-center gap-16 w-full">
        <div className="flex flex-col items-center gap-4">
          <div className="w-24 h-32 border border-white/20 bg-[#070709] flex items-center justify-center">
            <div className="w-12 h-1 bg-white/20" />
          </div>
          <span className="font-mono text-[11px] text-white/60">Code</span>
        </div>
        <div className="flex flex-col items-center gap-4 mt-12">
          <div className="w-24 h-32 border border-white/20 bg-[#070709] flex flex-col items-center justify-center gap-2">
            <div className="w-12 h-1 bg-white/20" />
            <div className="w-8 h-1 bg-[#006BFF]/50" />
          </div>
          <span className="font-mono text-[11px] text-[#006BFF]">Data</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="w-24 h-32 border border-white/20 bg-[#070709] flex items-center justify-center">
             <div className="w-8 h-8 border border-white/20 rounded-full" />
          </div>
          <span className="font-mono text-[11px] text-white/60">Notebook</span>
        </div>
      </div>
    </div>
  );
}

/* =========================================
   SCENE 08: EVIDENCE (Connection)
========================================= */
export function EvidenceScene() {
  return (
    <div className="w-[110%] -ml-[5%] h-[600px] relative flex items-center justify-center">
      
      {/* Left side: Artifacts */}
      <div className="absolute left-[5%] flex flex-col gap-20">
        <div className="font-mono text-[12px] text-white/70 flex items-center gap-6">
          <span>navigation.py</span>
          <div className="w-2 h-2 rounded-full bg-white/20 relative z-10" />
        </div>
        <div className="font-mono text-[12px] text-white/70 flex items-center gap-6">
          <span>results.json</span>
          <div className="w-2 h-2 rounded-full bg-white/20 relative z-10" />
        </div>
      </div>

      {/* SVG Network Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <path d="M 20% 180 C 40% 180, 50% 300, 75% 300" stroke="#006BFF" strokeWidth="1" fill="none" opacity="0.6"/>
        <path d="M 20% 420 C 40% 420, 50% 300, 75% 300" stroke="#006BFF" strokeWidth="1" fill="none" opacity="0.6"/>
        <circle cx="75%" cy="300" r="5" fill="#006BFF" />
      </svg>

      {/* Right side: Evidence Node */}
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 flex flex-col gap-3">
        <div className="text-[11px] font-mono text-signal uppercase tracking-widest">Evidence</div>
        <div className="text-2xl text-white font-sans tracking-tight">Implementation Logic</div>
        <div className="text-sm text-white/50 max-w-[240px] leading-relaxed">
          Validates that path planning correctly uses A* heuristics.
        </div>
      </div>

    </div>
  );
}

/* =========================================
   SCENE 09: EVALUATION (Reasoning)
========================================= */
export function EvaluationScene() {
  return (
    <div className="w-full flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-0 mt-12 md:mt-0">
        
      <div className="flex flex-col gap-3 md:flex-1 md:border-t md:border-l-0 border-l border-white/20 md:pt-8 md:pl-0 pl-6 pb-8 md:pb-0 relative">
        <div className="absolute md:-top-[4.5px] top-1 left-[-4.5px] md:left-0 w-2 h-2 rounded-full bg-white/20" />
        <div className="text-[10px] font-mono text-white/50 uppercase tracking-widest">Artifact</div>
        <div className="text-sm text-white font-mono">analysis.ipynb</div>
      </div>

      <div className="flex flex-col gap-3 md:flex-1 md:border-t md:border-l-0 border-l border-[#006BFF]/50 md:pt-8 md:pl-0 pl-6 pb-8 md:pb-0 relative">
        <div className="absolute md:-top-[4.5px] top-1 left-[-4.5px] md:left-0 w-2 h-2 rounded-full bg-[#006BFF]" />
        <div className="text-[10px] font-mono text-[#006BFF] uppercase tracking-widest">Evidence</div>
        <div className="text-sm text-white">Statistical validation of trajectory logic.</div>
      </div>

      <div className="flex flex-col gap-3 md:flex-1 md:border-t md:border-l-0 border-l border-white/20 md:pt-8 md:pl-0 pl-6 pb-8 md:pb-0 relative">
        <div className="absolute md:-top-[4.5px] top-1 left-[-4.5px] md:left-0 w-2 h-2 rounded-full bg-white/20" />
        <div className="text-[10px] font-mono text-white/50 uppercase tracking-widest">Finding</div>
        <div className="text-sm text-white">Edge cases handled flawlessly.</div>
      </div>

      <div className="flex flex-col gap-3 md:flex-1 md:pt-8 md:pl-0 pl-6 relative">
        <div className="absolute md:-top-[4.5px] top-1 left-[-4.5px] md:left-0 w-2 h-2 rounded-full bg-white" />
        <div className="text-[10px] font-mono text-signal uppercase tracking-widest">Evaluation Context</div>
        <div className="text-xl text-white font-sans tracking-tight">Strong systemic reasoning.</div>
      </div>

    </div>
  );
}

/* =========================================
   SCENE 10: UNDERSTANDING (Convergence)
========================================= */
export function UnderstandingScene() {
  return (
    <div className="relative w-full min-h-[80vh] flex items-center justify-center scale-110">
      
      {/* Outer rings */}
      <div className="absolute w-[600px] h-[600px] border border-white/5 rounded-full" />
      <div className="absolute w-[400px] h-[400px] border border-[#006BFF]/20 rounded-full" />

      {/* Labels on the rings */}
      <div className="absolute top-[15%] text-[10px] font-mono text-white/30 uppercase tracking-widest">Evaluation Layer</div>
      <div className="absolute bottom-[15%] text-[10px] font-mono text-signal uppercase tracking-widest">Evidence Layer</div>

      {/* Center Core */}
      <div className="w-[160px] h-[160px] bg-white text-[#070709] rounded-full flex flex-col items-center justify-center z-10 shadow-[0_0_80px_rgba(255,255,255,0.15)]">
        <div className="font-sans font-medium tracking-tight text-xl">THE WORK</div>
      </div>

      {/* Radiating lines connecting the system */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
        <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#006BFF" strokeWidth="1" strokeDasharray="4 4"/>
        <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="white" strokeWidth="1" />
        <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="white" strokeWidth="1" />
        <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="#006BFF" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
      
      {/* Nodes on rings */}
      <div className="absolute top-[25%] left-[30%] w-3 h-3 rounded-full bg-[#006BFF]" />
      <div className="absolute bottom-[25%] right-[30%] w-3 h-3 rounded-full bg-[#006BFF]" />
    </div>
  );
}

/* =========================================
   SCENE 11: PRINCIPLE (Resolution)
========================================= */
export function PrincipleScene() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-16 text-center">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-sans font-light tracking-tighter text-white">
          EVIDENCE
        </h2>
        <div className="w-[1px] h-32 bg-gradient-to-b from-[#006BFF]/80 to-transparent" />
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-sans font-light tracking-tighter text-white/30">
          ASSUMPTION
        </h2>
      </div>
    </div>
  );
}
