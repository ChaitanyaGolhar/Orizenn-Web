'use client';

import { STORY_SCENES, CHAPTERS } from './story-config';

interface StoryRailProps {
  sceneIndex: number;
}

export function StoryRail({ sceneIndex }: StoryRailProps) {
  const currentScene = STORY_SCENES[sceneIndex];
  
  return (
    <div className="flex flex-col h-full justify-between py-10">
      {/* BOTTOM: Chapter / Nav state */}
      <div className="relative h-[200px]">
        {CHAPTERS.map(chapter => {
          const isActiveChapter = chapter.id === currentScene.chapter;
          const chapterScenes = STORY_SCENES.filter(s => s.chapter === chapter.id);
          
          return (
            <div 
              key={chapter.id} 
              className={`flex flex-col gap-4 absolute top-0 left-0 w-full transition-all duration-700 ease-in-out ${
                isActiveChapter ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-4 pointer-events-none z-0'
              }`}
            >
              <span className="font-mono text-[10px] text-muted/60 uppercase tracking-widest">
                {chapter.label}
              </span>
              <ul className="flex flex-col gap-3 pl-1">
                {chapterScenes.map(scene => {
                  const isActive = scene.id === currentScene.id;
                  
                  return (
                    <li key={scene.id} className="flex items-center gap-3">
                      {/* Node indicator */}
                      <div 
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                          isActive 
                            ? 'bg-signal scale-125 shadow-[0_0_8px_rgba(0,107,255,0.8)]' 
                            : 'bg-transparent border border-muted/30 scale-100'
                        }`} 
                      />
                      {/* Label */}
                      <span 
                        className={`font-sans text-small transition-colors duration-500 ${
                          isActive ? 'text-foreground' : 'text-muted/40'
                        }`}
                      >
                        {scene.navLabel}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
