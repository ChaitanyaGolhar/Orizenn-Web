'use client';

import { useState } from 'react';
import { Container } from '../ui/Container';
import { STORY_SCENES } from './story-config';
import { StoryRail } from './StoryRail';
import { StoryBlock } from './StoryBlock';

export function StorySection() {
  const [activeStoryBlock, setActiveStoryBlock] = useState(0);

  return (
    <section className="relative w-full bg-[#070709] border-t border-border/50">
      
      {/* 
        DESKTOP ARCHITECTURE
        Left (25%): Sticky Rail
        Right (75%): Scrolling Content (Narrative + Visual)
      */}
      <div className="hidden md:block py-32">
        <Container className="relative w-full flex items-start">
          
          {/* LEFT: STORY RAIL */}
          <div className="w-[25%] sticky top-[25vh] h-[50vh] flex flex-col justify-center pr-8 z-20">
            <StoryRail sceneIndex={activeStoryBlock} />
          </div>

          {/* RIGHT: STORY CONTENT */}
          <div className="w-[75%] relative z-10 flex flex-col">
            {STORY_SCENES.map((scene, idx) => (
              <StoryBlock 
                key={scene.id} 
                scene={scene} 
                index={idx} 
                onActive={setActiveStoryBlock} 
              />
            ))}
          </div>

        </Container>
      </div>

      {/* 
        MOBILE ARCHITECTURE
        Single scrolling column. Sticky rail is completely removed.
      */}
      <div className="block md:hidden py-24">
        <Container className="flex flex-col">
          {STORY_SCENES.map((scene, idx) => (
            <StoryBlock 
              key={scene.id} 
              scene={scene} 
              index={idx} 
              onActive={setActiveStoryBlock} 
            />
          ))}
        </Container>
      </div>

    </section>
  );
}
