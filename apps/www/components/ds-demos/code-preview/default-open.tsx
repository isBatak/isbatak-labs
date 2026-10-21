"use client"

import { Badge } from "@isbatak/react-ui/badge"

import { CodeBody } from "../../code/code-block"
import { CodePreview } from "../../ui/code-preview"
import { Icon } from "../../ui/icon"

const code = `<Badge colorPalette="green">Published</Badge>`

export function CodePreviewDefaultOpenDemo() {
  return (
    <CodePreview.Root code={code} defaultOpen w="full">
      <CodePreview.Stage>
        <CodePreview.Preview display="flex" justifyContent="center">
          <Badge colorPalette="green">Published</Badge>
        </CodePreview.Preview>
      </CodePreview.Stage>
      <CodePreview.Content>
        <CodeBody code={code} lang="tsx" />
      </CodePreview.Content>
      <CodePreview.Toolbar>
        <CodePreview.Trigger>
          Code
          <Icon name="chevron-down" />
        </CodePreview.Trigger>
        <CodePreview.CopyTrigger>
          <Icon name="copy" data-icon="copy" />
          <Icon name="check" data-icon="check" />
          Copy
        </CodePreview.CopyTrigger>
      </CodePreview.Toolbar>
    </CodePreview.Root>
  )
}
