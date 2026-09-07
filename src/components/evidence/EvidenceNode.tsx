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
      className={`inline-flex items-center gap-3 px-4 py-2 border rounded-md transition-all duration-500 relative bg-surface
        ${isActive 
          ? 'border-[rgba(0,102,255,0.3)] shadow-[0_0_20px_rgba(0,102,255,0.1)]' 
          : 'border-border'
        } ${className}`}
    >
      <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500
        ${isActive 
          ? 'bg-signal shadow-[0_0_10px_var(--color-signal)]' 
          : 'bg-muted'
        }`} 
      />
      <span className={`font-mono text-micro uppercase tracking-widest transition-all duration-500
        ${isActive ? 'text-foreground' : 'text-muted'}
      `}>
        {label}
      </span>
    </div>
  );
}
