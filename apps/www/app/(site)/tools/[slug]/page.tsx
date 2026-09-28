import { tools } from "#site/content"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { SITE_URL } from "../../../../components/docs/site-url"
import { ToolPage } from "../../../../components/tools/tool-page"

interface ToolRouteProps {
  params: Promise<{ slug: string }>
}

function getTool(slug: string) {
  return tools.find((tool) => tool.slug === slug && !tool.external)
}

export const dynamicParams = false

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

export default async function ToolRoute({ params }: ToolRouteProps) {
  const tool = getTool((await params).slug)
  if (!tool) notFound()
  return <ToolPage tool={tool} />
}
