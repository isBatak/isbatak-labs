"use client"

import { CodeBlock } from "../code/code-block"
import type { DocVariant } from "../docs/variant"
import type { ExampleSettings } from "./controls"
import { useExampleControls } from "./controls-store"
import { exampleSnippet } from "./snippet"

interface ExampleSnippetProps extends DocVariant {
  id: string
  settings: ExampleSettings
}

export function ExampleSnippet({ id, settings, ...variant }: ExampleSnippetProps) {
  const { overrides } = useExampleControls(id)
  const { code, lang } = exampleSnippet({ ...variant, settings, values: { ...settings, ...overrides } })

  return <CodeBlock code={code} lang={lang} />
}
