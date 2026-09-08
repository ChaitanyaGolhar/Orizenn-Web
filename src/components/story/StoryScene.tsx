import { StoryScene as StorySceneType } from './story-config';
import { 
  WorkScene, GradeScene, ResumeScene, CertificateScene, PortfolioScene, 
  InformationLossScene, StartWithWorkScene, EvidenceScene, EvaluationScene, 
  UnderstandingScene, PrincipleScene 
} from './scenes';

const SCENE_COMPONENTS: Record<string, React.FC> = {
  'work-dense': WorkScene,
  'grade-sparse': GradeScene,
  'resume-tags': ResumeScene,
  'certificate-formal': CertificateScene,
  'portfolio-curated': PortfolioScene,
  'loss-diagram': InformationLossScene,
  'work-returns': StartWithWorkScene,
  'evidence-mapping': EvidenceScene,
  'evaluation-dimensions': EvaluationScene,
  'understanding-resolved': UnderstandingScene,
  'principle-quiet': PrincipleScene
};

interface StorySceneProps {
  scene: StorySceneType;
  isActive: boolean;
}

export function StoryScene({ scene, isActive }: StorySceneProps) {
  const Component = SCENE_COMPONENTS[scene.visualType];

  if (!Component) return null;

  return (
    <div className={`w-full relative transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-40'}`}>
      <Component />
      
      {/* Subtle overlay for inactive state to push it slightly back */}
      <div 
        className={`absolute inset-0 bg-black/40 transition-opacity duration-700 pointer-events-none ${
          isActive ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  );
}
