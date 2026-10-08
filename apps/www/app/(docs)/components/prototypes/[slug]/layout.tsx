import { prototypes } from "#site/content"
import { notFound } from "next/navigation"
import type { ReactNode } from "react"

import { DocPage } from "../../../../../components/docs/doc-page"
import { BottomBlur } from "../../../../../components/layout/bottom-blur"

interface ComponentLayoutProps {
  params: Promise<{ slug: string }>
  children: ReactNode
}

export default async function ComponentLayout({ params, children }: ComponentLayoutProps) {
  const { slug } = await params
  const doc = prototypes.find((component) => component.slug === slug)
  if (!doc) notFound()

  return (
    <>
      <DocPage component={doc}>{children}</DocPage>
      <BottomBlur split={Boolean(doc.preview)} />
    </>
  )
}
