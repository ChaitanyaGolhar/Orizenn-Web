'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { StoryScene as StorySceneType } from './story-config';
import { StoryNarrative } from './StoryNarrative';
import { StoryScene as StorySceneComponent } from './StoryScene';

gsap.registerPlugin(ScrollTrigger);

interface StoryBlockProps {
  scene: StorySceneType;
  index: number;
  onActive: (index: number) => void;
}

const getBackgroundStyles = (mode: string) => {
  switch (mode) {
    case 'technical': return 'bg-[#050505] bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]';
    case 'minimal': return 'bg-[#020202]';
    case 'document': return 'bg-[#08080a] bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100%_24px]';
    case 'artifact': return 'bg-[#060608] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]';
    case 'editorial': return 'bg-[#070709]';
    case 'transformation': return 'bg-[#030304] bg-[linear-gradient(45deg,rgba(255,255,255,0.01)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.01)_50%,rgba(255,255,255,0.01)_75%,transparent_75%,transparent)] bg-[size:20px_20px]';
    case 'reconstruction': return 'bg-[#0a0a0c] bg-[radial-gradient(ellipse_at_top,rgba(0,107,255,0.05)_0%,transparent_60%)]';
    case 'structured': return 'bg-[#070709] bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100%]';
    case 'system': return 'bg-[#050505] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_100%)]';
    case 'void': return 'bg-black';
    default: return 'bg-[#0a0a0c]';
  }
};

export function StoryBlock({ scene, index, onActive }: StoryBlockProps) {
  const blockRef = useRef<HTMLDivElement>(null);
  const narrativeRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!blockRef.current || !narrativeRef.current || !visualRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: blockRef.current,
        start: "top center+=15%", 
        end: "bottom center+=15%",
        onEnter: () => { setIsActive(true); onActive(index); },
        onEnterBack: () => { setIsActive(true); onActive(index); },
        onLeave: () => setIsActive(false),
        onLeaveBack: () => setIsActive(false),
      });

      // Entrance animation for narrative
      gsap.fromTo(narrativeRef.current,
        { opacity: 0.2, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: blockRef.current,
            start: "top bottom-=10%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Entrance animation for visual
      gsap.fromTo(visualRef.current,
        { opacity: 0.1, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: blockRef.current,
            start: "top bottom-=10%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => ctx.revert();
  }, [index, onActive]);

  const renderLayout = () => {
    switch (scene.layoutMode) {
      case 'split':
        return (
          <div className="w-full flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto px-4 md:px-8">
            <div ref={narrativeRef} className="w-full lg:w-[35%]">
              <StoryNarrative scene={scene} isActive={isActive} />
            </div>
            <div ref={visualRef} className="w-full lg:w-[65%]">
              <StorySceneComponent scene={scene} isActive={isActive} />
            </div>
          </div>
        );
        
      case 'stacked':
        return (
          <div className="w-full flex flex-col gap-16 max-w-7xl mx-auto px-4 md:px-8">
            <div ref={narrativeRef} className="w-full max-w-2xl mx-auto">
              <StoryNarrative scene={scene} isActive={isActive} centered />
            </div>
            <div ref={visualRef} className="w-full">
              <StorySceneComponent scene={scene} isActive={isActive} />
            </div>
          </div>
        );

      case 'visual-dominant':
        return (
          <div className="w-full flex flex-col relative max-w-[1400px] mx-auto px-4 md:px-8">
            <div ref={narrativeRef} className="w-full max-w-sm absolute bottom-8 left-12 z-20 hidden lg:block bg-black/60 p-8 backdrop-blur-md border border-white/5 rounded-xl shadow-2xl">
              <StoryNarrative scene={scene} isActive={isActive} />
            </div>
            <div ref={narrativeRef} className="w-full block lg:hidden mb-12 relative z-20">
              <StoryNarrative scene={scene} isActive={isActive} />
            </div>
            <div ref={visualRef} className="w-full relative">
              <StorySceneComponent scene={scene} isActive={isActive} />
            </div>
          </div>
        );

      case 'centered':
        return (
          <div className="w-full flex flex-col items-center justify-center gap-16 max-w-7xl mx-auto px-4 md:px-8">
            <div ref={visualRef} className="w-full">
              <StorySceneComponent scene={scene} isActive={isActive} />
            </div>
            <div ref={narrativeRef} className="w-full max-w-xl">
              <StoryNarrative scene={scene} isActive={isActive} centered />
            </div>
          </div>
        );

      case 'chain':
        return (
          <div className="w-full flex flex-col lg:flex-row items-center gap-16 max-w-[1400px] mx-auto px-4 md:px-8">
            <div ref={narrativeRef} className="w-full lg:w-[30%]">
              <StoryNarrative scene={scene} isActive={isActive} />
            </div>
            <div ref={visualRef} className="w-full lg:w-[70%]">
              <StorySceneComponent scene={scene} isActive={isActive} />
            </div>
          </div>
        );

      case 'diagram':
        return (
          <div className="w-full flex flex-col gap-12 max-w-[1400px] mx-auto px-4 md:px-8">
            <div ref={narrativeRef} className="w-full max-w-3xl">
              <StoryNarrative scene={scene} isActive={isActive} />
            </div>
            <div ref={visualRef} className="w-full">
              <StorySceneComponent scene={scene} isActive={isActive} />
            </div>
          </div>
        );

      case 'full-bleed':
        return (
          <div className="w-full flex flex-col items-center relative overflow-hidden">
            <div ref={narrativeRef} className="w-full max-w-2xl text-center mb-16 relative z-20 px-4">
              <StoryNarrative scene={scene} isActive={isActive} centered />
            </div>
            {/* Bleeds across the entire StoryContent column safely */}
            <div ref={visualRef} className="w-full flex justify-center">
              <div className="w-full">
                <StorySceneComponent scene={scene} isActive={isActive} />
              </div>
            </div>
          </div>
        );

      case 'minimal':
        return (
          <div className="w-full flex flex-col items-center justify-center gap-16 max-w-4xl mx-auto px-4 md:px-8">
            <div ref={visualRef} className="w-full">
              <StorySceneComponent scene={scene} isActive={isActive} />
            </div>
            <div ref={narrativeRef} className="w-full">
              <StoryNarrative scene={scene} isActive={isActive} centered />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`relative w-full ${getBackgroundStyles(scene.backgroundMode)}`}>
      {scene.separator === 'line' && (
        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5" />
      )}
      {scene.separator === 'strong' && (
        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20" />
      )}
      
      <div 
        ref={blockRef} 
        className="w-full flex items-center min-h-[100vh] py-32 relative overflow-hidden"
      >
        {renderLayout()}
      </div>
    </div>
  );
}
