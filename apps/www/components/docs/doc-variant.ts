"use client"

import { useParams, useRouter } from "next/navigation"

import { type DocVariant, isApi, isFramework, isStyling, variantPath } from "./variant"

type DocParams = Partial<Record<"slug" | "framework" | "styling" | "api", string>>

export function useDocVariant() {
  const { slug, framework, styling, api } = useParams<DocParams>()
  const router = useRouter()
  const variant =
    slug && isFramework(framework) && isStyling(styling) && isApi(api) ? { framework, styling, api } : undefined

  const setVariant = (change: Partial<DocVariant>) => {
    if (!variant) return
    router.replace(variantPath(`/prototypes/${slug}`, { ...variant, ...change }), { scroll: false })
  }

  return { variant, setVariant }
}
