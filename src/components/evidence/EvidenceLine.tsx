interface EvidenceLineProps {
  isActive?: boolean;
  direction?: 'horizontal' | 'vertical';
  className?: string;
}

export function EvidenceLine({ isActive = false, direction = 'vertical', className = '' }: EvidenceLineProps) {
  const isVert = direction === 'vertical';
  
  return (
    <div className={`flex items-center justify-center ${isVert ? 'w-px min-h-[40px] h-full' : 'h-px min-w-[40px] w-full'} ${className}`}>
      <div className="bg-border w-full h-full transition-all duration-500 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-signal opacity-0 transition-opacity duration-500 shadow-[0_0_8px_var(--color-signal)]"
          style={{
            opacity: isActive ? 1 : 0,
            transformOrigin: isVert ? 'top' : 'left',
            transform: isVert 
              ? `scaleY(${isActive ? 1 : 0})` 
              : `scaleX(${isActive ? 1 : 0})`,
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease'
          }}
        />
      </div>
    </div>
  );
}
