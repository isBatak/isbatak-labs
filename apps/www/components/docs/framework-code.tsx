import manifest from "@isbatak/compositions/manifest.json"
import { Tabs } from "@isbatak/react-ui/tabs"
import type { ReactNode } from "react"
import { styled } from "styled-system/jsx"

import { CodeBlock, CodeBody } from "../code/code-block"
import { CodeTabs } from "../code/code-tabs"
import type { ExampleSettings } from "../examples/controls"
import { ExampleSnippet } from "../examples/example-snippet"
import { ExampleTrigger } from "../examples/example-trigger"
import { InstallMethodTabs } from "./install-method"
import { registryUrl } from "./registry"
import type { ApiId, DocVariant, FrameworkId, StylingId } from "./variant"

export type ExampleFiles = (typeof manifest.examples)[number]["apis"]["zag"]["react"]["panda"]

type ApiExamples = Partial<Record<FrameworkId, Record<StylingId, ExampleFiles>>>

interface ExampleProps {
  id: string
}

interface VariantProps extends ExampleProps, DocVariant {}

export const getExample = ({ id, api, framework, styling }: VariantProps): ExampleFiles | undefined =>
  (manifest.examples.find((example) => example.id === id)?.apis[api] as ApiExamples | undefined)?.[framework]?.[styling]

const frameworkLabel = (framework: FrameworkId) => manifest.frameworks.find(({ id }) => id === framework)!.label

const apiLabel = (api: ApiId) => manifest.apis.find(({ id }) => id === api)!.label

const Unavailable = styled("p", {
  base: {
    p: "4",
    textStyle: "sm",
    color: "fg.muted",
  },
})

function NotAvailable({ framework, api }: VariantProps) {
  return (
    <Unavailable>
      Not available for {frameworkLabel(framework)} with {apiLabel(api)} yet.
    </Unavailable>
  )
}

const installCommands = (example: ExampleFiles) =>
  [
    `pnpm add ${example.dependencies.join(" ")}`,
    example.devDependencies.length > 0 && `pnpm add -D ${example.devDependencies.join(" ")}`,
  ]
    .filter(Boolean)
    .join("\n")

export function FrameworkInstall(props: VariantProps) {
  const example = getExample(props)
  if (!example) return <NotAvailable {...props} />
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

function PreactCompatSetup() {
  return (
    <p>
      Ark UI has no Preact adapter, so this uses the React components through <code>preact/compat</code>.{" "}
      <code>@preact/preset-vite</code> sets that up for you. With another bundler, alias <code>react</code> and{" "}
      <code>react-dom</code> to <code>preact/compat</code>.
    </p>
  )
}

const needsPreactCompat = ({ framework, api }: VariantProps) => framework === "preact" && api === "ark"

function CliInstall(props: VariantProps) {
  const example = getExample(props)
  if (!example) return <NotAvailable {...props} />

  return (
    <>
      <CodeBlock lang="sh" code={`pnpm dlx shadcn@latest add ${registryUrl(props)}`} />
      {props.styling === "panda" ? (
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
      {needsPreactCompat(props) && <PreactCompatSetup />}
    </>
  )
}

function ManualInstall(props: VariantProps) {
  const example = getExample(props)
  if (!example) return <NotAvailable {...props} />

  return (
    <ol>
      <li>
        Install the dependencies:
        <CodeBlock lang="sh" code={installCommands(example)} />
      </li>
      {needsPreactCompat(props) && (
        <li>
          <PreactCompatSetup />
        </li>
      )}
      {props.styling === "panda" && (
        <li>
          <PandaSetup />
        </li>
      )}
      <li>
        Copy these files into <code>{folderOf(example)}</code>:
        <ExampleSource {...props} />
      </li>
    </ol>
  )
}

export function Installation(props: VariantProps) {
  return (
    <InstallMethodTabs>
      <Tabs.List>
        <Tabs.Trigger value="cli">shadcn CLI</Tabs.Trigger>
        <Tabs.Trigger value="manual">Manual</Tabs.Trigger>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Content value="cli">
        <CliInstall {...props} />
      </Tabs.Content>
      <Tabs.Content value="manual">
        <ManualInstall {...props} />
      </Tabs.Content>
    </InstallMethodTabs>
  )
}

export function ExampleSource(props: VariantProps) {
  const example = getExample(props)
  if (!example) return <NotAvailable {...props} />

  const { id, framework, styling, api } = props

  return (
    <CodeTabs key={`${id}-${framework}-${styling}-${api}`} files={example.files}>
      {example.files.map((file) => (
        <Tabs.Content key={file.name} value={file.name} p="0">
          <CodeBody code={file.code} lang={file.lang} />
        </Tabs.Content>
      ))}
    </CodeTabs>
  )
}

interface ExampleBlockProps extends VariantProps {
  settings?: ExampleSettings
  children?: ReactNode
}

export function Example({ settings = {}, children, ...props }: ExampleBlockProps) {
  const { id, ...variant } = props

  return (
    <ExampleTrigger id={id} settings={settings} source={<ExampleSource {...props} />}>
      {children}
      <ExampleSnippet id={id} settings={settings} {...variant} />
    </ExampleTrigger>
  )
}
