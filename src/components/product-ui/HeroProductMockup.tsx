'use client';

import { FileIcon, CodeIcon, LineChartIcon, FileTextIcon, DatabaseIcon } from 'lucide-react';

export function HeroProductMockup() {
  return (
    <div className="w-full h-full min-h-[500px] md:min-h-[600px] bg-[#0c0c0e] rounded-xl border border-border/50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row relative z-10 text-left">
      
      {/* SIDEBAR (Hidden on small mobile, visible on md+) */}
      <div className="hidden md:flex flex-col w-[240px] bg-surface/40 border-r border-border/50 shrink-0 p-4">
        
        {/* Mock Logo / App Header */}
        <div className="flex items-center gap-2 mb-8 px-2">
          <div className="w-5 h-5 rounded-full border border-signal/50 bg-signal/10 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-signal" />
          </div>
          <span className="font-sans font-medium text-foreground tracking-tight">Orizenn</span>
        </div>

        {/* Project Selector context */}
        <div className="mb-8 px-2">
          <div className="text-[10px] font-mono text-muted uppercase tracking-widest mb-2">Project</div>
          <div className="bg-surface border border-border/50 rounded p-2 shadow-sm cursor-pointer hover:bg-surface/80 transition-colors">
            <div className="text-small font-medium text-foreground truncate">Autonomous Nav System</div>
            <div className="text-[10px] text-muted truncate mt-1">Computer Vision · Python</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1 px-2">
          {['Overview', 'Artifacts', 'Evidence', 'Evaluation', 'Findings'].map((item, i) => (
            <div 
              key={item} 
              className={`text-small px-3 py-2 rounded transition-colors cursor-pointer ${
                i === 2 ? 'bg-signal/10 text-foreground font-medium' : 'text-muted hover:text-foreground hover:bg-surface/50'
              }`}
            >
              {item}
            </div>
          ))}
        </nav>
      </div>

      {/* MAIN WORKSPACE */}
      <div className="flex-1 flex flex-col bg-[#070709] overflow-hidden">
        
        {/* Artifact Strip */}
        <div className="h-auto md:h-[100px] border-b border-border/50 p-4 flex flex-col gap-3 shrink-0 bg-surface/20">
          <div className="flex items-center justify-between">
            <span className="font-sans text-small font-medium text-foreground">Artifacts</span>
            <span className="text-[11px] text-muted">5 sources in project</span>
          </div>
          <div className="flex gap-3 overflow-hidden pb-2">
            
            <div className="flex items-start gap-2 p-2 bg-surface/50 border border-border/50 rounded flex-1 min-w-0 shrink">
              <CodeIcon className="w-4 h-4 text-signal mt-0.5 shrink-0" />
              <div className="flex flex-col min-w-0 overflow-hidden">
                <span className="text-[12px] font-medium text-foreground truncate">navigation.py</span>
                <span className="text-[10px] text-muted truncate">Source Code</span>
              </div>
            </div>

            <div className="flex items-start gap-2 p-2 bg-surface/50 border border-border/50 rounded flex-1 min-w-0 shrink">
              <LineChartIcon className="w-4 h-4 text-muted mt-0.5 shrink-0" />
              <div className="flex flex-col min-w-0 overflow-hidden">
                <span className="text-[12px] font-medium text-foreground truncate">analysis.ipynb</span>
                <span className="text-[10px] text-muted truncate">Notebook</span>
              </div>
            </div>

            <div className="flex items-start gap-2 p-2 bg-surface/50 border border-border/50 rounded flex-1 min-w-0 shrink">
              <FileTextIcon className="w-4 h-4 text-muted mt-0.5 shrink-0" />
              <div className="flex flex-col min-w-0 overflow-hidden">
                <span className="text-[12px] font-medium text-foreground truncate">methodology.md</span>
                <span className="text-[10px] text-muted truncate">Documentation</span>
              </div>
            </div>

            <div className="flex items-start gap-2 p-2 bg-surface/50 border border-border/50 rounded flex-1 min-w-0 shrink hidden sm:flex">
              <DatabaseIcon className="w-4 h-4 text-muted mt-0.5 shrink-0" />
              <div className="flex flex-col min-w-0 overflow-hidden">
                <span className="text-[12px] font-medium text-foreground truncate">experiment_01.csv</span>
                <span className="text-[10px] text-muted truncate">Data</span>
              </div>
            </div>

          </div>
        </div>

        {/* Lower Workspace: Split Panes */}
        <div className="flex-1 flex flex-col xl:flex-row p-4 gap-4 overflow-hidden">
          
          {/* Left Column: Code / Notebook Preview */}
          <div className="flex-1 flex flex-col gap-4 min-h-[300px]">
            {/* Code Panel */}
            <div className="flex-1 bg-[#101014] border border-border/40 rounded-lg overflow-hidden flex flex-col">
              <div className="px-3 py-2 border-b border-border/40 flex items-center gap-2 bg-surface/30">
                <CodeIcon className="w-3.5 h-3.5 text-signal" />
                <span className="text-[11px] font-mono text-muted">navigation.py</span>
              </div>
              <div className="p-4 text-[12px] font-mono leading-relaxed overflow-hidden relative">
                <span className="text-pink-500">import</span> <span className="text-foreground">torch</span><br/>
                <span className="text-pink-500">import</span> <span className="text-foreground">numpy</span> <span className="text-pink-500">as</span> <span className="text-foreground">np</span><br/><br/>
                <span className="text-muted/60"># Core pathfinding module implemented with A* constraints</span><br/>
                <span className="text-signal">def</span> <span className="text-blue-300">calculate_optimal_path</span>(sensor_data, target_node):<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;obstacles = parse_lidar_points(sensor_data)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;grid = construct_nav_mesh(obstacles)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;path = a_star_search(grid, target_node)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-500">return</span> path
                
                {/* Fade out bottom to indicate more code */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#101014] to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Notebook Panel (Hidden on very small screens to save vertical space) */}
            <div className="hidden sm:flex flex-1 bg-[#101014] border border-border/40 rounded-lg overflow-hidden flex-col">
              <div className="px-3 py-2 border-b border-border/40 flex items-center gap-2 bg-surface/30">
                <LineChartIcon className="w-3.5 h-3.5 text-muted" />
                <span className="text-[11px] font-mono text-muted">analysis.ipynb</span>
              </div>
              <div className="p-4 flex flex-col gap-3">
                <div className="text-[11px] font-mono text-muted/60">In [4]: <span className="text-foreground/80">plot_collision_avoidance_rate(results_df)</span></div>
                {/* Simulated Chart */}
                <div className="w-full h-16 border-l border-b border-border/40 relative mt-2">
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-border/40" />
                  <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M0,90 L20,75 L40,65 L60,35 L80,25 L100,10" fill="none" stroke="var(--color-signal)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                    <circle cx="100" cy="10" r="3" fill="var(--color-signal)" />
                  </svg>
                </div>
                <div className="text-[10px] text-muted text-right mt-1">Convergence over 500 epochs</div>
              </div>
            </div>
          </div>

          {/* Right Column: Evidence Panel */}
          <div className="w-full xl:w-[320px] shrink-0 bg-[#0d0d10] border border-signal/20 rounded-lg flex flex-col relative overflow-hidden shadow-[inset_0_0_40px_rgba(0,107,255,0.03)]">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-signal/50 to-transparent" />
            
            <div className="px-4 py-3 border-b border-border/40 flex items-center justify-between bg-signal/5">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-signal shadow-[0_0_8px_var(--color-signal)]" />
                <span className="font-sans text-[13px] font-medium text-foreground">Evidence</span>
              </div>
              <span className="text-[10px] text-muted uppercase tracking-widest">4 Items</span>
            </div>
            
            <div className="flex flex-col flex-1 p-3 gap-2 overflow-y-auto">
              
              {/* Evidence Item 1 */}
              <div className="bg-surface/40 border border-signal/30 rounded p-3 flex flex-col gap-2 relative overflow-hidden group hover:bg-surface/60 transition-colors">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-signal" />
                <p className="text-[12px] font-medium text-foreground leading-snug m-0">
                  A* pathfinding constraints implemented for core navigation module.
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  <CodeIcon className="w-3 h-3 text-signal" />
                  <span className="text-[10px] font-mono text-muted group-hover:text-signal/80 transition-colors">navigation.py</span>
                </div>
              </div>

              {/* Evidence Item 2 */}
              <div className="bg-surface/40 border border-border/50 rounded p-3 flex flex-col gap-2 relative overflow-hidden group hover:bg-surface/60 transition-colors">
                <p className="text-[12px] font-medium text-foreground/90 leading-snug m-0">
                  Obstacle collision avoidance rate converges consistently after 500 epochs.
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  <LineChartIcon className="w-3 h-3 text-muted group-hover:text-foreground transition-colors" />
                  <span className="text-[10px] font-mono text-muted">analysis.ipynb</span>
                </div>
              </div>

              {/* Evidence Item 3 */}
              <div className="bg-surface/40 border border-border/50 rounded p-3 flex flex-col gap-2 relative overflow-hidden group hover:bg-surface/60 transition-colors">
                <p className="text-[12px] font-medium text-foreground/90 leading-snug m-0">
                  Sensor fusion methodology prioritizes LIDAR point clouds over optical streams.
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  <FileTextIcon className="w-3 h-3 text-muted group-hover:text-foreground transition-colors" />
                  <span className="text-[10px] font-mono text-muted">methodology.md</span>
                </div>
              </div>

              {/* Evidence Item 4 */}
              <div className="bg-surface/40 border border-border/50 rounded p-3 flex flex-col gap-2 relative overflow-hidden group hover:bg-surface/60 transition-colors">
                <p className="text-[12px] font-medium text-foreground/90 leading-snug m-0">
                  Results validated across 12 distinct edge-case environment simulations.
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  <DatabaseIcon className="w-3 h-3 text-muted group-hover:text-foreground transition-colors" />
                  <span className="text-[10px] font-mono text-muted">experiment_01.csv</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
