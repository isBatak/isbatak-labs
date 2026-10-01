export const frameworkIds = ["react", "vue", "svelte", "solid", "preact", "vanilla"] as const
export const stylingIds = ["panda", "css"] as const
export const apiIds = ["zag", "ark"] as const

export type FrameworkId = (typeof frameworkIds)[number]
export type StylingId = (typeof stylingIds)[number]
export type ApiId = (typeof apiIds)[number]

export interface DocVariant {
  framework: FrameworkId
  styling: StylingId
  api: ApiId
}

export const FRAMEWORK_KEY = "docs-framework"
export const STYLING_KEY = "docs-styling"
export const API_KEY = "docs-api"

export const defaultVariant: DocVariant = { framework: "react", styling: "panda", api: "zag" }

export const arkFrameworks: readonly FrameworkId[] = ["react", "vue", "svelte", "solid", "preact"]

export const supportsApi = (framework: FrameworkId, api: ApiId) => api === "zag" || arkFrameworks.includes(framework)

export const isFramework = (value: unknown): value is FrameworkId => frameworkIds.includes(value as FrameworkId)
export const isStyling = (value: unknown): value is StylingId => stylingIds.includes(value as StylingId)
export const isApi = (value: unknown): value is ApiId => apiIds.includes(value as ApiId)

export const resolveVariant = (variant: DocVariant): DocVariant =>
  supportsApi(variant.framework, variant.api) ? variant : { ...variant, api: "zag" }

export const variantPath = (permalink: string, variant: DocVariant) => {
  const { framework, styling, api } = resolveVariant(variant)
  return `${permalink}/${framework}/${styling}/${api}`
}

export const variantParams = () =>
  frameworkIds.flatMap((framework) =>
    stylingIds.flatMap((styling) =>
      apiIds.filter((api) => supportsApi(framework, api)).map((api) => ({ framework, styling, api })),
    ),
  )
