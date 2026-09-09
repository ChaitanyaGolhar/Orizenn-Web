export type ArtifactType = 'code' | 'doc' | 'data' | 'notebook' | 'test';

export interface Artifact {
  id: string;
  name: string;
  type: ArtifactType;
  path: string;
}

export interface Evidence {
  id: string;
  artifactIds: string[];
  description: string;
  type: 'behavioral' | 'metric' | 'architectural' | 'test_result';
}

export interface ContextLink {
  sourceEvidenceId: string;
  targetArtifactId: string;
  description: string;
}

export interface Finding {
  id: string;
  title: string;
  description: string;
  evidenceIds: string[];
}

export interface ProductProject {
  id: string;
  name: string;
  domain: string;
  language: string;
  artifacts: Artifact[];
  evidence: Evidence[];
  contextLinks: ContextLink[];
  findings: Finding[];
}

export const autonomousNavigationAgent: ProductProject = {
  id: 'proj-01',
  name: 'Autonomous Navigation Agent',
  domain: 'Computer Vision',
  language: 'Python',
  artifacts: [
    { id: 'art-1', name: 'navigator.py', type: 'code', path: 'src/navigator.py' },
    { id: 'art-2', name: 'planner.py', type: 'code', path: 'src/planner.py' },
    { id: 'art-3', name: 'controller.py', type: 'code', path: 'src/controller.py' },
    { id: 'art-4', name: 'run-01.ipynb', type: 'notebook', path: 'experiments/run-01.ipynb' },
    { id: 'art-5', name: 'run-02.ipynb', type: 'notebook', path: 'experiments/run-02.ipynb' },
    { id: 'art-6', name: 'run-03.ipynb', type: 'notebook', path: 'experiments/run-03.ipynb' },
    { id: 'art-7', name: 'navigation_test.py', type: 'test', path: 'tests/navigation_test.py' },
    { id: 'art-8', name: 'architecture.md', type: 'doc', path: 'docs/architecture.md' },
    { id: 'art-9', name: 'experiment_04.csv', type: 'data', path: 'data/experiment_04.csv' },
  ],
  evidence: [
    { id: 'ev-1', artifactIds: ['art-1'], description: 'A* pathfinding constraints implemented for core navigation module.', type: 'architectural' },
    { id: 'ev-2', artifactIds: ['art-5', 'art-9'], description: 'Obstacle collision avoidance rate converges consistently after 500 epochs.', type: 'metric' },
    { id: 'ev-3', artifactIds: ['art-8'], description: 'Sensor fusion methodology prioritizes LIDAR point clouds over optical streams.', type: 'architectural' },
    { id: 'ev-4', artifactIds: ['art-7'], description: 'Results validated across 12 distinct edge-case environment simulations.', type: 'test_result' },
  ],
  contextLinks: [
    { sourceEvidenceId: 'ev-1', targetArtifactId: 'art-5', description: 'Constraint changes directly affect convergence rate in experiment 2.' },
    { sourceEvidenceId: 'ev-3', targetArtifactId: 'art-1', description: 'Methodology dictates the ingestion layer behavior in navigator.py.' },
  ],
  findings: [
    { 
      id: 'find-1', 
      title: 'Navigation Planner Reworked', 
      description: 'The navigation planner was substantially reworked to decouple the sensor ingestion layer from path calculation, allowing for isolated testing without hardware in the loop.',
      evidenceIds: ['ev-1', 'ev-3', 'ev-4']
    }
  ]
};
