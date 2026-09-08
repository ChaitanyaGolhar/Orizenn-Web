export function TechnicalGrid({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 z-0 pointer-events-none ${className}`}>
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Faint center glow for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-signal/5 rounded-full blur-[100px] mix-blend-screen" />
    </div>
  );
}
