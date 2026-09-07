interface ArtifactNodeProps {
  label: string;
  type?: 'code' | 'notebook' | 'document' | 'data' | 'experiment';
  isActive?: boolean;
  className?: string;
  id?: string;
}

export function ArtifactNode({ label, type = 'document', isActive = false, className = '', id }: ArtifactNodeProps) {
  return (
    <div 
      id={id}
      className={`inline-flex flex-col items-start gap-1 p-3 border rounded-md bg-surface/80 backdrop-blur-sm transition-all duration-500
        ${isActive 
          ? 'border-border shadow-[0_4px_20px_rgba(0,0,0,0.5)]' 
          : 'border-transparent opacity-60'
        } ${className}`}
    >
      <div className="flex items-center gap-2">
        {/* Subtle type indicator */}
        <div className={`w-2 h-2 rounded-sm transition-all duration-500 bg-muted/50`} />
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
          {type}
        </span>
      </div>
      <span className={`font-sans text-small tracking-tight transition-all duration-500
        ${isActive ? 'text-foreground' : 'text-muted'}
      `}>
        {label}
      </span>
    </div>
  );
}
