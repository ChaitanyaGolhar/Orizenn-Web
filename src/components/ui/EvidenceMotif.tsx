export function EvidenceMotif({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center opacity-60 ${className}`}>
      <div className="flex items-center">
        <div className="w-[3px] h-[3px] rounded-full bg-muted/60" />
        <div className="w-8 sm:w-12 h-[1px] bg-muted/30" />
        <div className="w-[4px] h-[4px] rounded-full bg-signal/60" />
        <div className="w-8 sm:w-12 h-[1px] bg-muted/30" />

        <div className="relative flex justify-center">
          <div className="w-[4px] h-[4px] rounded-full bg-signal/80 shadow-[0_0_8px_rgba(0,107,255,0.5)] z-10" />
          <div className="absolute top-[4px] w-[1px] h-8 bg-gradient-to-b from-signal/50 to-transparent" />
        </div>

        <div className="w-8 sm:w-12 h-[1px] bg-muted/30" />
        <div className="w-[4px] h-[4px] rounded-full bg-signal/60" />
        <div className="w-8 sm:w-12 h-[1px] bg-muted/30" />
        <div className="w-[3px] h-[3px] rounded-full bg-muted/60" />
      </div>
      <div className="font-mono text-[9px] tracking-[0.2em] text-muted/60 uppercase mt-10">
        EVIDENCE
      </div>
    </div>
  );
}
