import manifest from "@isbatak/compositions/manifest.json"

import type { ExampleFiles } from "../../../components/docs/framework-code"
import { registryName } from "../../../components/docs/registry"
import type { ApiId, FrameworkId, StylingId } from "../../../components/docs/variant"

type ApiExamples = Partial<Record<FrameworkId, Record<StylingId, ExampleFiles>>>

const items = manifest.examples.flatMap((example) =>
  manifest.apis.flatMap((api) =>
    manifest.frameworks.flatMap((framework) =>
      manifest.stylings.flatMap((styling) => {
        const files = (example.apis[api.id as ApiId] as ApiExamples)[framework.id as FrameworkId]?.[
          styling.id as StylingId
        ]
        return files
          ? [
              {
                name: registryName({
                  id: example.id,
                  framework: framework.id as FrameworkId,
                  styling: styling.id as StylingId,
                  api: api.id as ApiId,
                }),
                example: example.id,
                api,
                framework,
                styling,
                ...files,
              },
            ]
          : []
      }),
    ),
  ),
)

export function generateStaticParams() {
  return items.map(({ name }) => ({ name: `${name}.json` }))
}

export async function GET(_request: Request, { params }: { params: Promise<{ name: string }> }) {
  const { name } = await params
  const item = items.find((entry) => `${entry.name}.json` === name)
  if (!item) return new Response("Not found", { status: 404 })

  return Response.json({
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: item.name,
    type: "registry:item",
    title: `${item.example} (${item.framework.label}, ${item.styling.label}, ${item.api.label})`,
    description: `The ${item.example} example for ${item.framework.label}, built on ${item.api.id === "ark" ? "Ark UI" : "Zag"} and styled with ${item.styling.label}.`,
    dependencies: item.dependencies,
    devDependencies: item.devDependencies,
    files: item.files.map((file) => ({
      path: `registry/${item.api.id}/${item.framework.id}/${item.styling.id}/${file.name}`,
      type: "registry:file",
      target: `~/${file.target}`,
      content: file.code,
    })),
  })
}
