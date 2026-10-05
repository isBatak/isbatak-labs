import { components } from "#site/content"
import manifest from "@isbatak/compositions/manifest.json"

import api from "../../data/api.json"
import { formatType } from "./api-table"
import type { ExampleSettings } from "../examples/controls"
import { exampleSnippet } from "../examples/snippet"
import { componentMeta, componentOf } from "./component-meta"
import type { ExampleFiles } from "./framework-code"
import { registryUrl } from "./registry"
import { SITE_URL } from "./site-url"
import type { ApiId, FrameworkId, StylingId } from "./variant"

type Attributes = Record<string, string>

interface ApiMember {
  type: string
  description: string
  defaultValue?: string
}

export const markdownPath = (permalink: string) => `${permalink}.md`

const fence = (lang: string, code: string) => `\`\`\`${lang}\n${code}\n\`\`\``

const parseAttributes = (source: string): Attributes =>
  Object.fromEntries(Array.from(source.matchAll(/(\w+)="([^"]*)"/g), ([, key = "", value = ""]) => [key, value]))

type ApiExamples = Partial<Record<FrameworkId, Record<StylingId, ExampleFiles>>>

const variantsOf = (id: string) => {
  const example = manifest.examples.find((entry) => entry.id === id)
  return manifest.apis.flatMap((api) =>
    manifest.frameworks.flatMap((framework) =>
      manifest.stylings.flatMap((styling) => {
        const files = (example?.apis[api.id as ApiId] as ApiExamples | undefined)?.[framework.id as FrameworkId]?.[
          styling.id as StylingId
        ]
        return files
          ? [
              {
                api,
                framework,
                styling,
                files,
                variant: {
                  id,
                  api: api.id as ApiId,
                  framework: framework.id as FrameworkId,
                  styling: styling.id as StylingId,
                },
              },
            ]
          : []
      }),
    ),
  )
}

const installation = ({ id = "" }: Attributes) =>
  [
    "Add the component with the shadcn CLI, using the registry item for your framework, styling and API (Zag or Ark UI):",
    fence(
      "sh",
      variantsOf(id)
        .map(
          ({ api, framework, styling, variant }) =>
            `# ${framework.label}, ${styling.label}, ${api.label}\npnpm dlx shadcn@latest add ${registryUrl(variant)}`,
        )
        .join("\n\n"),
    ),
    `With Panda CSS, add \`"${componentMeta[componentOf(id)].pandaPackage}"\` to \`presets\` in your Panda config, or import \`${componentMeta[componentOf(id)].preset}\` from it and add that instead.`,
    "Preact with Ark UI uses the React components through `preact/compat`, so alias `react` and `react-dom` to `preact/compat` unless `@preact/preset-vite` already does.",
  ].join("\n\n")

const frameworkInstall = ({ id = "" }: Attributes) =>
  fence(
    "sh",
    variantsOf(id)
      .filter(({ styling }) => styling.id === "css")
      .map(
        ({ api, framework, files }) => `# ${framework.label}, ${api.label}\npnpm add ${files.dependencies.join(" ")}`,
      )
      .join("\n\n"),
  )

const exampleCode = ({ id = "" }: Attributes) =>
  [
    "Full source for each framework, as shadcn registry items:",
    variantsOf(id)
      .filter(({ styling }) => styling.id === "css")
      .map(({ api, framework, variant }) => `- [${framework.label}, ${api.label}](${registryUrl(variant)})`)
      .join("\n"),
  ].join("\n\n")

const escapeCell = (value: string) => value.replaceAll("|", "\\|").replaceAll("\n", " ")

const apiTable = ({ name = "", kind = "" }: Attributes) => {
  const members = Object.entries(
    (api[name as keyof typeof api]?.[kind as "context" | "api"] ?? {}) as Record<string, ApiMember>,
  )
  return [
    `| ${kind === "context" ? "Prop" : "Property"} | Type | Default | Description |`,
    "| --- | --- | --- | --- |",
    ...members.map(
      ([key, member]) =>
        `| \`${key}\` | \`${escapeCell(formatType(member.type))}\` | ${member.defaultValue ? `\`${escapeCell(member.defaultValue)}\`` : "—"} | ${escapeCell(member.description)} |`,
    ),
  ].join("\n")
}

const renderers: Record<string, (attributes: Attributes) => string> = {
  ApiTable: apiTable,
  ExampleCode: exampleCode,
  FrameworkInstall: frameworkInstall,
  Installation: installation,
}

const renderProse = (prose: string) =>
  prose
    .replace(/<\/?([A-Z]\w*)([^>]*?)\/?>/g, (_, tag: string, attributes: string) =>
      renderers[tag] ? renderers[tag](parseAttributes(attributes)) : "",
    )
    .replaceAll("](/", `](${SITE_URL}/`)

const parseSettings = (attributes: string): ExampleSettings => {
  const source = attributes.match(/settings=\{(\{[\s\S]*?\})\}/)?.[1]
  return source ? (new Function(`return (${source})`)() as ExampleSettings) : {}
}

const exampleSnippets = (attributes: string) => {
  const settings = parseSettings(attributes)
  const id = parseAttributes(attributes).id ?? ""
  const snippet = (api: ApiId) =>
    exampleSnippet({ id, framework: "react", styling: "panda", api, settings, values: settings })
  const zag = snippet("zag")
  const ark = snippet("ark")
  return ["With Zag (React):", fence(zag.lang, zag.code), "With Ark UI (React):", fence(ark.lang, ark.code)].join(
    "\n\n",
  )
}

const renderExamples = (raw: string) =>
  raw.replace(
    /<Example\b([^>]*)>([\s\S]*?)<\/Example>/g,
    (_, attributes: string, body: string) => `${body.trim()}\n\n${exampleSnippets(attributes)}\n`,
  )

const renderBody = (raw: string) =>
  renderExamples(raw)
    .split(/(^```[\s\S]*?^```)/m)
    .map((part, index) => (index % 2 === 1 ? part : renderProse(part)))
    .join("")

const toMarkdown = (title: string, description: string | undefined, raw: string) =>
  `${[`# ${title}`, description, renderBody(raw)]
    .filter(Boolean)
    .join("\n\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()}\n`

export const markdownParams = () => components.map((doc) => ({ slug: [doc.slug] }))

export function getMarkdown([slug, ...rest]: string[]) {
  const component = components.find((doc) => doc.slug === slug)
  if (!component || rest.length > 0) return undefined
  return toMarkdown(component.title, component.description, component.raw)
}
