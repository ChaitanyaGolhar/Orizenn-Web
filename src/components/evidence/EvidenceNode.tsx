interface EvidenceNodeProps {
  label: string;
  isActive?: boolean;
  className?: string;
  id?: string;
}

export function EvidenceNode({ label, isActive = false, className = '', id }: EvidenceNodeProps) {
  return (
    <div 
      id={id}
      className={`inline-flex items-center gap-3 transition-opacity duration-700 ${className}
        ${isActive ? 'opacity-100' : 'opacity-40'}
      `}
    >
      {/* Structural Intersection Point */}
      <div className="relative flex items-center justify-center w-4 h-4">
        {/* Horizontal & Vertical grid lines intersecting at the node */}
        <div className="absolute w-[200%] h-[1px] bg-signal/30 -z-10" />
        <div className="absolute h-[200%] w-[1px] bg-signal/30 -z-10" />
        
        {/* The Node Core */}
        <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-700
          ${isActive ? 'bg-signal' : 'bg-muted/50'}
        `} />
        
        {/* Outer Structural Ring */}
        <div className={`absolute inset-0 rounded-full border transition-colors duration-700
          ${isActive ? 'border-signal/40' : 'border-transparent'}
        `} />
      </div>
      
      <span className="font-sans text-[14px] font-medium tracking-[0.1em] text-foreground uppercase">
        {label}
      </span>
    </div>
  );
}
