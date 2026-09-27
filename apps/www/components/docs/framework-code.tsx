import manifest from "@isbatak/compositions/manifest.json"
import { Tabs } from "@isbatak/panda-ds/components/tabs"
import type { ReactNode } from "react"
import { styled } from "styled-system/jsx"

import { CodeBlock, CodeBody } from "../code/code-block"
import { CodeTabs } from "../code/code-tabs"
import { ExampleTrigger } from "../examples/example-trigger"
import { InstallMethodTabs } from "./install-method"
import { registryUrl } from "./registry"
import type { DocVariant, FrameworkId, StylingId } from "./variant"

type ExampleFiles = (typeof manifest.examples)[number]["frameworks"]["react"]["panda"]

const getExample = (id: string, framework: FrameworkId, styling: StylingId): ExampleFiles | undefined =>
  manifest.examples.find((example) => example.id === id)?.frameworks[framework]?.[styling]

const frameworkLabel = (framework: FrameworkId) => manifest.frameworks.find(({ id }) => id === framework)!.label

const Unavailable = styled("p", {
  base: {
    p: "4",
    textStyle: "sm",
    color: "fg.muted",
  },
})

interface ExampleProps {
  id: string
}

interface VariantProps extends ExampleProps, DocVariant {}

const installCommands = (example: ExampleFiles) =>
  [
    `pnpm add ${example.dependencies.join(" ")}`,
    example.devDependencies.length > 0 && `pnpm add -D ${example.devDependencies.join(" ")}`,
  ]
    .filter(Boolean)
    .join("\n")

export function FrameworkInstall({ id, framework, styling }: VariantProps) {
  const example = getExample(id, framework, styling)
  if (!example) return <Unavailable>Not available for {frameworkLabel(framework)} yet.</Unavailable>
  return <CodeBlock lang="sh" code={`pnpm add ${example.dependencies.join(" ")}`} />
}

const folderOf = (example: ExampleFiles) => example.files[0]!.target.replace(/[^/]+$/, "")

function PandaSetup() {
  return (
    <p>
      Add <code>wheelPickerPreset</code> from <code>@isbatak/panda-wheel-picker</code> to your Panda config.
    </p>
  )
}

function CliInstall({ id, framework, styling }: VariantProps) {
  const example = getExample(id, framework, styling)
  if (!example) return <Unavailable>Not available for {frameworkLabel(framework)} yet.</Unavailable>

  return (
    <>
      <CodeBlock lang="sh" code={`pnpm dlx shadcn@latest add ${registryUrl(id, framework, styling)}`} />
      {styling === "panda" ? (
        <>
          <p>
            This installs the dependencies and adds the component to <code>{folderOf(example)}</code>. It imports the
            recipe from <code>styled-system/recipes</code>.
          </p>
          <PandaSetup />
        </>
      ) : (
        <p>
          This installs the dependencies and adds the component with its stylesheet to <code>{folderOf(example)}</code>.
          It works in any project, with or without a <code>components.json</code>.
        </p>
      )}
    </>
  )
}

function ManualInstall({ id, framework, styling }: VariantProps) {
  const example = getExample(id, framework, styling)
  if (!example) return <Unavailable>Not available for {frameworkLabel(framework)} yet.</Unavailable>

  return (
    <ol>
      <li>
        Install the dependencies:
        <CodeBlock lang="sh" code={installCommands(example)} />
      </li>
      {styling === "panda" && (
        <li>
          <PandaSetup />
        </li>
      )}
      <li>
        Copy these files into <code>{folderOf(example)}</code>:
        <ExampleSource id={id} framework={framework} styling={styling} />
      </li>
    </ol>
  )
}

export function Installation({ id, framework, styling }: VariantProps) {
  return (
    <InstallMethodTabs>
      <Tabs.List>
        <Tabs.Trigger value="cli">shadcn CLI</Tabs.Trigger>
        <Tabs.Trigger value="manual">Manual</Tabs.Trigger>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Content value="cli">
        <CliInstall id={id} framework={framework} styling={styling} />
      </Tabs.Content>
      <Tabs.Content value="manual">
        <ManualInstall id={id} framework={framework} styling={styling} />
      </Tabs.Content>
    </InstallMethodTabs>
  )
}

export function ExampleSource({ id, framework, styling }: VariantProps) {
  const example = getExample(id, framework, styling)
  if (!example) return <Unavailable>Not available for {frameworkLabel(framework)} yet.</Unavailable>

  return (
    <CodeTabs key={`${id}-${framework}-${styling}`} files={example.files}>
      {example.files.map((file) => (
        <Tabs.Content key={file.name} value={file.name} p="0">
          <CodeBody code={file.code} lang={file.lang} />
        </Tabs.Content>
      ))}
    </CodeTabs>
  )
}

export function Example({ id, framework, styling, children }: VariantProps & { children?: ReactNode }) {
  return (
    <ExampleTrigger id={id} source={<ExampleSource id={id} framework={framework} styling={styling} />}>
      {children}
    </ExampleTrigger>
  )
}
