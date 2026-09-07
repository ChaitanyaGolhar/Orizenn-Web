interface EvidenceTraceProps {
  progress?: number; // 0 to 1
  direction?: 'horizontal' | 'vertical';
  className?: string;
}

export function EvidenceTrace({ progress = 0, direction = 'vertical', className = '' }: EvidenceTraceProps) {
  const isVert = direction === 'vertical';
  
  return (
    <div className={`relative ${isVert ? 'w-px h-full' : 'h-px w-full'} bg-border/30 overflow-hidden ${className}`}>
      {/* The glowing trace line */}
      <div 
        className="absolute inset-0 bg-signal shadow-[0_0_12px_var(--color-signal)]"
        style={{
          transformOrigin: isVert ? 'top' : 'left',
          transform: isVert ? `scaleY(${progress})` : `scaleX(${progress})`,
          opacity: progress > 0 ? 1 : 0,
          transition: 'transform 0.1s linear, opacity 0.3s ease'
        }}
      />
    </div>
  );
}
