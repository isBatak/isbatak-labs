import manifest from "@isbatak/compositions/manifest.json"
import { styled } from "styled-system/jsx"

import { CodeBlock } from "../code/code-block"
import { DemoPreview } from "./demo-preview"
import { DsDemoView } from "./ds-demo-view"
import type { DsFrameworkId } from "./ds-framework"

type DsDemoFiles = Partial<Record<DsFrameworkId, { lang: string; code: string }>>

const frameworkLabels: Record<DsFrameworkId, string> = {
  react: "React",
  vue: "Vue",
  svelte: "Svelte",
  solid: "Solid",
}

const Unavailable = styled("p", {
  base: {
    my: "6",
    p: "4",
    textStyle: "sm",
    color: "fg.muted",
    borderWidth: "1px",
    borderRadius: "l2",
  },
})

export const getDsDemo = (id: string, framework: DsFrameworkId) =>
  (manifest.ds.find((demo) => demo.id === id)?.frameworks as DsDemoFiles | undefined)?.[framework]

export const hasDsDemo = (id: string) => manifest.ds.some((demo) => demo.id === id)

interface DsDemoProps {
  id: string
  framework: DsFrameworkId
}

function NotAvailable({ framework }: { framework: DsFrameworkId }) {
  return <Unavailable className="not-prose">Not available for {frameworkLabels[framework]} yet.</Unavailable>
}

export function DsDemo({ id, framework }: DsDemoProps) {
  if (!hasDsDemo(id)) throw new Error(`No design system demo is registered as "${id}"`)
  const file = getDsDemo(id, framework)
  if (!file) return <NotAvailable framework={framework} />

  return (
    <DemoPreview code={file.code} lang={file.lang}>
      <DsDemoView id={id} framework={framework} />
    </DemoPreview>
  )
}

export function DsDemoSource({ id, framework }: DsDemoProps) {
  const file = getDsDemo(id, framework)
  if (!file) return <NotAvailable framework={framework} />
  return <CodeBlock code={file.code} lang={file.lang} />
}
