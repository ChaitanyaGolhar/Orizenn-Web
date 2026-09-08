export type ActId = 'act1-problem' | 'act2-approach' | 'act3-how-it-works' | 'act4-principle';

export type StoryScene = {
  id: string;
  act: ActId;
  chapterLabel: string;
  beatType: 'environment' | 'reduction' | 'document' | 'artifact' | 'transformation' | 'reconstruction' | 'graph' | 'reasoning' | 'convergence' | 'principle';
  title: string;
  body?: string;
};

export const STORY_ACTS = [
  { id: 'act1-problem', label: '01 / THE PROBLEM' },
  { id: 'act2-approach', label: '02 / A DIFFERENT APPROACH' },
  { id: 'act3-how-it-works', label: '03 / HOW IT WORKS' },
  { id: 'act4-principle', label: 'THE ORIZENN APPROACH' }
] as const;
