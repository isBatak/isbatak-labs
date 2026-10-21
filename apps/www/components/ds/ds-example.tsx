import { CodeBody } from "../code/code-block"
import { demos } from "../ds-demos"
import { CodePreview } from "../ui/code-preview"
import { Icon } from "../ui/icon"
import { demoSource } from "./demo-source"

export async function DsExample({ id }: { id: string }) {
  const Demo = demos[id]
  if (!Demo) throw new Error(`No design system demo is registered as "${id}"`)
  const source = await demoSource(id)

  return (
    <CodePreview.Root className="not-prose" code={source.trimEnd()} my="6">
      <CodePreview.Stage>
        <CodePreview.Preview
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          gap="3"
          minH="48"
        >
          <Demo />
        </CodePreview.Preview>
        <CodePreview.Resizer>
          <Icon name="grip-vertical" />
        </CodePreview.Resizer>
      </CodePreview.Stage>
      <CodePreview.Content>
        <CodeBody code={source} lang="tsx" />
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
