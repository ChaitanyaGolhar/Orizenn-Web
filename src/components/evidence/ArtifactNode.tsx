interface ArtifactNodeProps {
  label: string;
  metadata?: string;
  markerType?: 'dot' | 'ring' | 'cross' | 'tick';
  isActive?: boolean;
  className?: string;
  id?: string;
}

export function ArtifactNode({ 
  label, 
  metadata,
  markerType = 'dot', 
  isActive = false, 
  className = '', 
  id 
}: ArtifactNodeProps) {
  
  // Choose the geometric marker
  const renderMarker = () => {
    switch (markerType) {
      case 'ring':
        return <div className="w-[5px] h-[5px] rounded-full border border-muted/80" />;
      case 'cross':
        return (
          <div className="relative w-2 h-2 flex items-center justify-center opacity-80">
            <div className="absolute w-full h-[1px] bg-muted/80" />
            <div className="absolute h-full w-[1px] bg-muted/80" />
          </div>
        );
      case 'tick':
        return <div className="w-1.5 h-[1px] bg-muted/80" />;
      case 'dot':
      default:
        return <div className="w-1 h-1 rounded-full bg-muted/80" />;
    }
  };

  return (
    <div 
      id={id}
      className={`inline-flex items-start gap-3 transition-opacity duration-700 ${className}
        ${isActive ? 'opacity-90' : 'opacity-40'}
      `}
    >
      <div className="mt-1.5 flex items-center justify-center w-3 h-3">
        {renderMarker()}
      </div>
      
      <div className="flex flex-col gap-0.5">
        <span className="font-sans text-[13px] tracking-wide text-foreground uppercase whitespace-nowrap">
          {label}
        </span>
        {metadata && (
          <span className="font-mono text-[9px] tracking-[0.15em] text-muted uppercase whitespace-nowrap opacity-70">
            {metadata}
          </span>
        )}
      </div>
    </div>
  );
}
