import { tools } from "#site/content"
import type { Metadata } from "next"
import { Suspense } from "react"

import { SITE_URL } from "../../../../components/docs/site-url"
import { ToolPageSkeleton } from "../../../../components/tools/tool-page"
import { getTool, ToolDetails } from "./tool-details"

interface ToolRouteProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return tools.filter((tool) => !tool.external).map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: ToolRouteProps): Promise<Metadata> {
  const tool = getTool((await params).slug)
  if (!tool) return {}
  return {
    title: tool.title,
    description: tool.description,
    alternates: { canonical: `${SITE_URL}${tool.permalink}` },
  }
}

export default function ToolRoute({ params }: ToolRouteProps) {
  return (
    <Suspense fallback={<ToolPageSkeleton />}>
      <ToolDetails params={params} />
    </Suspense>
  )
}
