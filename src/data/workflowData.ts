import { ICardWorkflowProps } from '@/interface/ICardWorkflowProps';

export const workflowData: ICardWorkflowProps[] = [
  {
    data: {
      id: 1,
      phase: 'Phase 1',
      title: 'Planning',
      description: 'Define project scope, objectives, and deliverables.',
    },
  },
  {
    data: {
      id: 2,
      phase: 'Phase 2',
      title: 'Design',
      description: 'Create wireframes and prototypes for the project.',
    },
  },
  {
    data: {
      id: 3,
      phase: 'Phase 3',
      title: 'Development',
      description: 'Implement the project based on the approved designs.',
    },
  },
];
