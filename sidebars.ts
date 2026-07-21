import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Start here',
      collapsed: false,
      items: [
        'getting-started',
        'start/add-first-repository',
        'start/create-first-task',
      ],
    },
    {
      type: 'category',
      label: 'Use Verft',
      collapsed: false,
      items: [
        'use/create-task',
        'use/review-task-results',
        'use/apply-or-reject-changes',
        'use/inspect-task-logs',
      ],
    },
    {
      type: 'category',
      label: 'Automate Verft',
      collapsed: false,
      items: [
        'automate/create-or-queue-task-api',
        'automate/create-documentation-after-pr-merge',
        'automate/troubleshoot-inbound-webhook-deliveries',
        'automate/personal-access-tokens',
        'automate/api-request-examples',
      ],
    },
    {
      type: 'category',
      label: 'Operate Verft',
      collapsed: false,
      items: [
        'operate/run-verft-locally',
        'operate/configure-provider-credentials',
        'operate/inspect-server-logs',
        'operate/stop-or-restart-verft',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: false,
      items: [
        'reference/task-types',
        'reference/token-scopes',
        'reference/api-responses-and-errors',
        'reference/environment-variables',
      ],
    },
  ],
};

export default sidebars;
