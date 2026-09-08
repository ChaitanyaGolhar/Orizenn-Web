export type ChapterId = 'problem' | 'approach' | 'how-it-works' | 'principle';

export type LayoutMode = 'split' | 'stacked' | 'visual-dominant' | 'centered' | 'diagram' | 'chain' | 'full-bleed' | 'minimal';
export type VisualScale = 'small' | 'medium' | 'large' | 'hero' | 'full' | 'full-width';
export type SeparatorType = 'none' | 'line' | 'strong';
export type BackgroundMode = 'technical' | 'minimal' | 'document' | 'artifact' | 'editorial' | 'transformation' | 'reconstruction' | 'structured' | 'system' | 'void';

export type StoryScene = {
  id: string;
  chapter: ChapterId;
  eyebrow?: string;
  title: string;
  body?: string;
  navLabel: string;
  visualType: string;
  layoutMode: LayoutMode;
  backgroundMode: BackgroundMode;
  visualScale: VisualScale;
  separator: SeparatorType;
};

export const STORY_SCENES: StoryScene[] = [
  // CHAPTER 1: THE PROBLEM
  {
    id: 'scene-01-work',
    chapter: 'problem',
    eyebrow: '01 / THE PROBLEM',
    title: 'The work is there.\nWe just don\'t see enough of it.',
    body: 'People build real technical work across code, notebooks, experiments, documentation, data, and projects. But much of that work gets reduced to a grade, a resume, a certificate, or a portfolio — signals that rarely show the full picture.',
    navLabel: 'The Work',
    visualType: 'work-dense',
    layoutMode: 'visual-dominant',
    backgroundMode: 'technical',
    visualScale: 'hero',
    separator: 'none',
  },
  {
    id: 'scene-02-grades',
    chapter: 'problem',
    title: 'A snapshot,\nnot the work.',
    body: 'A single number rarely captures the process, exploration, decisions, or depth behind the work.',
    navLabel: 'Grades',
    visualType: 'grade-sparse',
    layoutMode: 'centered',
    backgroundMode: 'minimal',
    visualScale: 'hero', // typography is huge
    separator: 'line',
  },
  {
    id: 'scene-03-resumes',
    chapter: 'problem',
    title: 'Skills listed.\nContext missing.',
    body: 'A resume can show what someone says they know, but not the depth, process, decisions, experiments, or evidence behind the work.',
    navLabel: 'Resumes',
    visualType: 'resume-tags',
    layoutMode: 'stacked',
    backgroundMode: 'document',
    visualScale: 'large',
    separator: 'none',
  },
  {
    id: 'scene-04-certificates',
    chapter: 'problem',
    title: 'Completion,\nnot capability.',
    body: 'A certificate can confirm that a requirement was completed, but rarely shows what was built, how it was built, or what it demonstrates.',
    navLabel: 'Certificates',
    visualType: 'certificate-formal',
    layoutMode: 'centered',
    backgroundMode: 'artifact',
    visualScale: 'large',
    separator: 'line',
  },
  {
    id: 'scene-05-portfolios',
    chapter: 'problem',
    title: 'Highlights,\nnot the full story.',
    body: 'Portfolios can tell a better story, but they are still a curated view of the work.',
    navLabel: 'Portfolios',
    visualType: 'portfolio-curated',
    layoutMode: 'visual-dominant',
    backgroundMode: 'editorial',
    visualScale: 'hero',
    separator: 'none',
  },
  {
    id: 'scene-06-info-loss',
    chapter: 'problem',
    title: 'The evidence exists.\nIt just gets lost.',
    body: 'The same body of work can appear very differently depending on how it is represented. Each format captures a fragment, and important context is often lost.',
    navLabel: 'Information Loss',
    visualType: 'loss-diagram',
    layoutMode: 'full-bleed',
    backgroundMode: 'transformation',
    visualScale: 'full',
    separator: 'line',
  },

  // CHAPTER 2: A DIFFERENT APPROACH
  {
    id: 'scene-07-start',
    chapter: 'approach',
    eyebrow: '02 / A DIFFERENT APPROACH',
    title: 'Start with the work.',
    body: 'Orizenn begins with the technical work itself — not only the claim made about it. It discovers the artifacts inside a project, organizes the evidence they contain, and brings that evidence into a clearer view.',
    navLabel: 'Start with the work',
    visualType: 'work-returns',
    layoutMode: 'visual-dominant',
    backgroundMode: 'reconstruction',
    visualScale: 'hero',
    separator: 'none',
  },

  // CHAPTER 3: HOW IT WORKS
  {
    id: 'scene-08-evidence',
    chapter: 'how-it-works',
    eyebrow: '03 / HOW IT WORKS',
    title: 'Understand the evidence.',
    body: 'Bring project artifacts into context and surface the signals they contain.',
    navLabel: 'Evidence',
    visualType: 'evidence-mapping',
    layoutMode: 'diagram',
    backgroundMode: 'technical',
    visualScale: 'large',
    separator: 'none',
  },
  {
    id: 'scene-09-evaluation',
    chapter: 'how-it-works',
    title: 'Examine what it demonstrates.',
    body: 'Analyze the work and surface evidence that can inform evaluation.',
    navLabel: 'Evaluation',
    visualType: 'evaluation-dimensions',
    layoutMode: 'chain',
    backgroundMode: 'structured',
    visualScale: 'full-width',
    separator: 'line',
  },
  {
    id: 'scene-10-understanding',
    chapter: 'how-it-works',
    title: 'Make the picture clearer.',
    body: 'Bring evidence, evaluation, and findings together.',
    navLabel: 'Understanding',
    visualType: 'understanding-resolved',
    layoutMode: 'diagram',
    backgroundMode: 'system',
    visualScale: 'hero',
    separator: 'none',
  },

  // CHAPTER 4: THE ORIZENN APPROACH (Principle)
  {
    id: 'scene-11-principle',
    chapter: 'principle',
    eyebrow: 'THE ORIZENN APPROACH',
    title: 'Evidence before assumption.',
    body: 'Orizenn is built around a simple idea: technical work should be understood through the evidence inside the work itself.',
    navLabel: 'Evidence before assumption',
    visualType: 'principle-quiet',
    layoutMode: 'minimal',
    backgroundMode: 'void',
    visualScale: 'hero', // Huge typography
    separator: 'none',
  }
];

// Helper to group by chapter for the Rail
export const CHAPTERS = [
  { id: 'problem', label: 'THE PROBLEM' },
  { id: 'approach', label: 'THE DIFFERENCE' },
  { id: 'how-it-works', label: 'HOW IT WORKS' },
  { id: 'principle', label: 'THE ORIZENN APPROACH' }
] as const;
