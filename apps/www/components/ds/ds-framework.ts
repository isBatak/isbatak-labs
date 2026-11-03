import type { FrameworkId } from "../docs/variant"

export const dsFrameworkIds = ["react", "vue", "svelte", "solid"] as const satisfies readonly FrameworkId[]

export type DsFrameworkId = (typeof dsFrameworkIds)[number]

export const defaultDsFramework: DsFrameworkId = "react"

export const isDsFramework = (value: unknown): value is DsFrameworkId => dsFrameworkIds.includes(value as DsFrameworkId)

export const dsComponentPath = (framework: DsFrameworkId, slug: string) => `/ds/components/${framework}/${slug}`

export const dsPermalink = (pathname: string) =>
  pathname.replace(/^\/ds\/components\/(react|vue|svelte|solid)\//, "/ds/components/")
