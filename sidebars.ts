import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'getting-started',
    {
      type: 'category',
      label: 'How-to Guides',
      collapsed: false,
      items: [
        'how-to/find-repository-id',
        'how-to/create-or-queue-task-api',
        'how-to/create-documentation-after-pr-merge',
      ],
    },
  ],
};

export default sidebars;
