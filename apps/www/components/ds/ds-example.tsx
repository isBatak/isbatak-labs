import { demos } from "../ds-demos"
import type { DemoCalloutsConfig } from "./demo-callouts"
import { DemoPreview } from "./demo-preview"
import { demoSource } from "./demo-source"

export async function DsExample({ id, callouts }: { id: string; callouts?: DemoCalloutsConfig }) {
  const Demo = demos[id]
  if (!Demo) throw new Error(`No design system demo is registered as "${id}"`)

  return (
    <DemoPreview code={await demoSource(id)} lang="tsx" callouts={callouts}>
      <Demo />
    </DemoPreview>
  )
}
