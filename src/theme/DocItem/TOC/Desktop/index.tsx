import React, {type ReactNode} from 'react';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import TOC from '@theme/TOC';

export default function DocItemTOCDesktop(): ReactNode {
  const {toc, frontMatter} = useDoc();

  return (
    <aside className="verft-toc">
      <div className="verft-toc-title">On this page</div>
      <TOC
        toc={toc}
        minHeadingLevel={frontMatter.toc_min_heading_level}
        maxHeadingLevel={frontMatter.toc_max_heading_level}
        className={ThemeClassNames.docs.docTocDesktop}
      />
    </aside>
  );
}
