import { tools } from "#site/content"
import { notFound } from "next/navigation"

import { ToolPage } from "../../../../components/tools/tool-page"

export function getTool(slug: string) {
  return tools.find((tool) => tool.slug === slug && !tool.external)
}

export async function ToolDetails({ params }: { params: Promise<{ slug: string }> }) {
  const tool = getTool((await params).slug)
  if (!tool) notFound()
  return <ToolPage tool={tool} />
}
