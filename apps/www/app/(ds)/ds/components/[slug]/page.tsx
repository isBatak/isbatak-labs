import { components } from "#site/content"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ComponentPage } from "../../../../../components/ds/component-page"
import { demoSource } from "../../../../../components/ds/demo-source"
import { Section } from "../../../../../components/home/section"
import { SITE_URL } from "../../../../../components/docs/site-url"

interface ComponentRouteProps {
  params: Promise<{ slug: string }>
}

function getComponent(slug: string) {
  return components.find((component) => component.slug === slug)
}

export const instant = false

export function generateStaticParams() {
  return components.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: ComponentRouteProps): Promise<Metadata> {
  const component = getComponent((await params).slug)
  if (!component) return {}
  return {
    title: component.title,
    description: component.description,
    alternates: { canonical: `${SITE_URL}${component.permalink}` },
  }
}

export default async function ComponentRoute({ params }: ComponentRouteProps) {
  const component = getComponent((await params).slug)
  if (!component) notFound()

  return (
    <Section>
      <ComponentPage component={component} source={await demoSource(component.slug)} />
    </Section>
  )
}
