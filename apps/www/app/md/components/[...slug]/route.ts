import { getMarkdown, markdownParams } from "../../../../components/docs/markdown"

export function generateStaticParams() {
  return markdownParams()
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string[] }> }) {
  const markdown = getMarkdown((await params).slug)
  if (!markdown) return new Response("Not found", { status: 404 })

  return new Response(markdown, {
    headers: { "Content-Type": "text/markdown; charset=utf-8", Vary: "Accept" },
  })
}
