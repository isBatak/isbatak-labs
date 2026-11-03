import type { ReactNode } from "react"

import { CodeBody } from "../code/code-block"
import { CodePreview } from "../ui/code-preview"
import { Icon } from "../ui/icon"

interface DemoPreviewProps {
  code: string
  lang: string
  children: ReactNode
}

export function DemoPreview({ code, lang, children }: DemoPreviewProps) {
  return (
    <CodePreview.Root className="not-prose" code={code.trimEnd()} my="6">
      <CodePreview.Stage>
        <CodePreview.Preview
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          gap="3"
          minH="48"
        >
          {children}
        </CodePreview.Preview>
        <CodePreview.Resizer>
          <Icon name="grip-vertical" />
        </CodePreview.Resizer>
      </CodePreview.Stage>
      <CodePreview.Toolbar>
        <CodePreview.Trigger>
          Code
          <Icon name="chevron-down" />
        </CodePreview.Trigger>
        <CodePreview.ThemeTrigger>
          <Icon name="moon" data-icon="moon" />
          <Icon name="sun" data-icon="sun" />
        </CodePreview.ThemeTrigger>
        <CodePreview.DirTrigger>
          <Icon name="text-direction" />
        </CodePreview.DirTrigger>
        <CodePreview.CopyTrigger>
          <Icon name="copy" data-icon="copy" />
          <Icon name="check" data-icon="check" />
          Copy
        </CodePreview.CopyTrigger>
      </CodePreview.Toolbar>
      <CodePreview.Content>
        <CodeBody code={code} lang={lang} />
      </CodePreview.Content>
    </CodePreview.Root>
  )
}
