export function ArtifactItem({ name, type, selected = false }: { name: string, type: string, selected?: boolean }) {
  return (
    <div className={`p-3 rounded-md border ${selected ? 'border-signal/50 bg-signal/5' : 'border-border/30 bg-surface/30'} flex flex-col gap-1 cursor-default transition-all`}>
      <div className="flex items-center justify-between">
        <span className={`text-micro font-medium ${selected ? 'text-signal' : 'text-foreground'}`}>{name}</span>
        <span className="text-[9px] font-mono text-muted uppercase px-1.5 py-0.5 rounded bg-background border border-border/50">{type}</span>
      </div>
      {selected && (
        <div className="text-[10px] text-muted mt-2 border-t border-signal/20 pt-2">
          3 evidence signals extracted
        </div>
      )}
    </div>
  );
}

export function FindingRow({ text, category }: { text: string, category: string }) {
  return (
    <div className="p-4 border-b border-border/30 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-signal" />
        <span className="text-[10px] font-mono text-signal uppercase tracking-widest">{category}</span>
      </div>
      <p className="text-micro text-foreground m-0 leading-relaxed">{text}</p>
    </div>
  );
}
