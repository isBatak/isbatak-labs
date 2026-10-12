import type { ReactNode } from "react"
import { Tabs } from "@isbatak/react-ui/tabs"
import { styled } from "styled-system/jsx"

import { CodeBody } from "../code/code-block"
import { CodeTabs } from "../code/code-tabs"
import { blockSource } from "./block-source"

const Preview = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minH: "72",
    p: "8",
  },
})

export async function BlockExample({ files: names, children }: { files: string[]; children: ReactNode }) {
  const files = await Promise.all(names.map(async (name) => ({ name, code: await blockSource(name) })))

  return (
    <Tabs.Root className="not-prose" defaultValue="preview" size="xs" variant="folder">
      <Tabs.List>
        <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
        <Tabs.Trigger value="code">Code</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="preview" p="0">
        <Preview>{children}</Preview>
      </Tabs.Content>
      <Tabs.Content value="code" p="0">
        <CodeTabs files={files}>
          {files.map((file) => (
            <Tabs.Content key={file.name} value={file.name} p="0">
              <CodeBody code={file.code} lang="tsx" scrollable />
            </Tabs.Content>
          ))}
        </CodeTabs>
      </Tabs.Content>
    </Tabs.Root>
  )
}
