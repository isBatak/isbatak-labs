import { icons } from "#site/content"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { SITE_URL } from "../../../../../components/docs/site-url"
import { IconDocPage } from "../../../../../components/ds/icon-doc-page"
import { Section } from "../../../../../components/home/section"

interface IconDocRouteProps {
  params: Promise<{ slug: string }>
}

function getDoc(slug: string) {
  return icons.find((doc) => doc.slug === slug && doc.slug !== "overview")
}

export const instant = false

export function generateStaticParams() {
  return icons.filter(({ slug }) => slug !== "overview").map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: IconDocRouteProps): Promise<Metadata> {
  const doc = getDoc((await params).slug)
  if (!doc) return {}
  return {
    title: `${doc.title} · Icons`,
    description: doc.description,
    alternates: { canonical: `${SITE_URL}${doc.permalink}` },
  }
}

export default async function IconDocRoute({ params }: IconDocRouteProps) {
  const doc = getDoc((await params).slug)
  if (!doc) notFound()

  return (
    <Section>
      <IconDocPage doc={doc} />
    </Section>
  )
}
