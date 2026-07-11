import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';
import { BarChartSquare } from '@boxicons/react';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-1">
          <BarChartSquare />
          {appName}
        </div>
      ),
      transparentMode: 'top',
    },
    links: [
      {
        text: 'Problems',
        url: 'https://codeforces.com/problemset',
        active: 'nested-url',
      },
      {
        text: 'Solutions',
        url: 'https://github.com/opensubmissions/codeforces/tree/main/sol/solution',
        active: 'nested-url',
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
