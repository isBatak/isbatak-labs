"use client"

import { useParams, useRouter } from "next/navigation"

import { type DocVariant, isFramework, isStyling, variantPath } from "./variant"

type DocParams = Partial<Record<"slug" | "framework" | "styling", string>>

export function useDocVariant() {
  const { slug, framework, styling } = useParams<DocParams>()
  const router = useRouter()
  const variant = slug && isFramework(framework) && isStyling(styling) ? { framework, styling } : undefined

  const setVariant = (change: Partial<DocVariant>) => {
    if (!variant) return
    router.replace(variantPath(`/components/${slug}`, { ...variant, ...change }), { scroll: false })
  }

  return { variant, setVariant }
}
