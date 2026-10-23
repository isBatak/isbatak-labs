import { styles } from "#site/content"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { SITE_URL } from "../../../../../components/docs/site-url"
import { StylePage } from "../../../../../components/ds/style-page"
import { Section } from "../../../../../components/home/section"

interface StyleRouteProps {
  params: Promise<{ slug: string }>
}

function getStyle(slug: string) {
  return styles.find((style) => style.slug === slug)
}

export function generateStaticParams() {
  return styles.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: StyleRouteProps): Promise<Metadata> {
  const style = getStyle((await params).slug)
  if (!style) return {}
  return {
    title: style.title,
    description: style.description,
    alternates: { canonical: `${SITE_URL}${style.permalink}` },
  }
}

export default async function StyleRoute({ params }: StyleRouteProps) {
  const style = getStyle((await params).slug)
  if (!style) notFound()

  return (
    <Section>
      <StylePage style={style} />
    </Section>
  )
}
