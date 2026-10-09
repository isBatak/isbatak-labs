import { Tabs } from "@isbatak/react-ui/tabs"
import { styled } from "styled-system/jsx"

import { CodeBody } from "../code/code-block"
import { CopyButton } from "../code/copy-button"
import { demos } from "../ds-demos"
import { demoSource } from "./demo-source"

const Preview = styled("div", {
  base: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: "3",
    minH: "48",
    p: "8",
  },
})

const CopyAction = styled("div", {
  base: {
    position: "absolute",
    top: "2",
    insetEnd: "2",
  },
})

export async function DsExample({ id }: { id: string }) {
  const Demo = demos[id]
  if (!Demo) throw new Error(`No design system demo is registered as "${id}"`)
  const source = await demoSource(id)

  return (
    <Tabs.Root className="not-prose" defaultValue="preview" size="xs" variant="folder" my="6">
      <Tabs.List>
        <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
        <Tabs.Trigger value="code">Code</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="preview" p="0">
        <Preview>
          <Demo />
        </Preview>
      </Tabs.Content>
      <Tabs.Content value="code" p="0" position="relative" maxH="lg" overflowY="auto">
        <CodeBody code={source} lang="tsx" floatingActions />
        <CopyAction>
          <CopyButton value={source.trimEnd()} />
        </CopyAction>
      </Tabs.Content>
    </Tabs.Root>
  )
}
