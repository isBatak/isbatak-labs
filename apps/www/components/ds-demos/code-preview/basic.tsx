"use client"

import { Button } from "@isbatak/react-ui/button"

import { CodeBody } from "../../code/code-block"
import { CodePreview } from "../../ui/code-preview"
import { Icon } from "../../ui/icon"

const code = `<Button>Save changes</Button>`

export function CodePreviewDemo() {
  return (
    <CodePreview.Root code={code} w="full">
      <CodePreview.Stage>
        <CodePreview.Preview display="flex" justifyContent="center">
          <Button>Save changes</Button>
        </CodePreview.Preview>
        <CodePreview.Resizer>
          <Icon name="grip-vertical" />
        </CodePreview.Resizer>
      </CodePreview.Stage>
      <CodePreview.Content>
        <CodeBody code={code} lang="tsx" />
      </CodePreview.Content>
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
    </CodePreview.Root>
  )
}
