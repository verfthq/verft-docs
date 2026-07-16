import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'getting-started',
    {
      type: 'category',
      label: 'How-to Guides',
      collapsed: false,
      items: [
        'how-to/create-or-queue-task-api',
        'how-to/change-pr-task-auto-archive',
        'how-to/create-documentation-after-pr-merge',
        'how-to/inspect-logs',
      ],
    },
  ],
};

export default sidebars;
