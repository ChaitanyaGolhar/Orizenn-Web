interface EvidenceStageProps {
  title: string;
  description: string;
  isActive?: boolean;
  className?: string;
  id?: string;
}

export function EvidenceStage({ title, description, isActive = false, className = '', id }: EvidenceStageProps) {
  return (
    <div 
      id={id} 
      className={`flex flex-col gap-2 transition-all duration-[800ms] cubic-bezier(0.4, 0, 0.2, 1)
        ${isActive ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-4'} 
        ${className}`}
    >
      <h3 className="font-sans text-large font-medium text-foreground tracking-tight m-0">
        {title}
      </h3>
      <p className="font-sans text-small text-muted leading-relaxed max-w-[35ch] m-0">
        {description}
      </p>
    </div>
  );
}
