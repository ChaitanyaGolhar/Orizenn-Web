import { ReactNode } from 'react';

interface EvidenceFieldProps {
  children: ReactNode;
  className?: string;
}

export function EvidenceField({ children, className = '' }: EvidenceFieldProps) {
  return (
    <div className={`relative w-full h-full perspective-[1000px] flex items-center justify-center ${className}`}>
      {/* Subtle background grid pattern representing the "field" */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(var(--color-text) 1px, transparent 1px), linear-gradient(90deg, var(--color-text) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)'
        }}
      />
      {children}
    </div>
  );
}
