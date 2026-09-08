import { StoryScene } from './story-config';

interface StoryNarrativeProps {
  scene: StoryScene;
  isActive: boolean;
  centered?: boolean;
}

export function StoryNarrative({ scene, isActive, centered = false }: StoryNarrativeProps) {
  return (
    <div 
      className={`flex flex-col gap-4 transition-colors duration-700 ${isActive ? 'opacity-100' : 'opacity-40'} ${centered ? 'items-center text-center' : ''}`}
    >
      {scene.eyebrow && (
        <span className="font-mono text-[10px] text-signal tracking-widest uppercase mb-2 block">
          {scene.eyebrow}
        </span>
      )}
      <h2 className={`font-sans text-3xl lg:text-4xl text-foreground leading-[1.1] tracking-tight whitespace-pre-line ${centered ? 'mx-auto' : ''}`}>
        {scene.title}
      </h2>
      {scene.body && (
        <p className={`text-muted text-sm lg:text-base leading-relaxed mt-2 ${centered ? 'max-w-lg mx-auto' : ''}`}>
          {scene.body}
        </p>
      )}
    </div>
  );
}
