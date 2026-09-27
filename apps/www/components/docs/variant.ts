export const frameworkIds = ["react", "vue", "svelte", "solid", "preact", "vanilla"] as const
export const stylingIds = ["panda", "css"] as const

export type FrameworkId = (typeof frameworkIds)[number]
export type StylingId = (typeof stylingIds)[number]

export interface DocVariant {
  framework: FrameworkId
  styling: StylingId
}

export const FRAMEWORK_KEY = "docs-framework"
export const STYLING_KEY = "docs-styling"

export const defaultVariant: DocVariant = { framework: "react", styling: "panda" }

export const isFramework = (value: unknown): value is FrameworkId => frameworkIds.includes(value as FrameworkId)
export const isStyling = (value: unknown): value is StylingId => stylingIds.includes(value as StylingId)

export const variantPath = (permalink: string, { framework, styling }: DocVariant) =>
  `${permalink}/${framework}/${styling}`
