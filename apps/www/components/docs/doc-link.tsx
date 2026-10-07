"use client"

import Link from "next/link"
import type { ComponentProps } from "react"

import { useApi } from "./api"
import { useFramework } from "./framework"
import { useStyling } from "./styling"
import { variantPath } from "./variant"

export function DocLink({ href, ...props }: ComponentProps<typeof Link> & { href: string }) {
  const { framework } = useFramework()
  const { styling } = useStyling()
  const { api } = useApi()
  return <Link href={variantPath(href, { framework, styling, api })} prefetch {...props} />
}
