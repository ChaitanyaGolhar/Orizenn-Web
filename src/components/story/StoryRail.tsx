'use client';

import { STORY_ACTS } from './story-config';

interface StoryRailProps {
  activeActId: string;
}

export function StoryRail({ activeActId }: StoryRailProps) {
  return (
    <div className="flex flex-col h-full justify-center">
      <div className="flex flex-col gap-6">
        {STORY_ACTS.map(act => {
          const isActive = act.id === activeActId;
          
          return (
            <div 
              key={act.id} 
              className={`flex items-center gap-4 transition-all duration-500 ease-in-out ${
                isActive ? 'opacity-100 translate-x-2' : 'opacity-30 translate-x-0'
              }`}
            >
              {/* Node indicator */}
              <div 
                className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                  isActive 
                    ? 'bg-signal shadow-[0_0_8px_rgba(0,107,255,0.8)]' 
                    : 'bg-white/20'
                }`} 
              />
              {/* Label */}
              <span className={`font-mono text-[10px] uppercase tracking-widest ${isActive ? 'text-signal' : 'text-white/60'}`}>
                {act.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
