import { components } from "#site/content"
import { readFile } from "node:fs/promises"
import { join } from "node:path"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ComponentPage } from "../../../../../components/ds/component-page"
import { Section } from "../../../../../components/home/section"
import { SITE_URL } from "../../../../../components/docs/site-url"

interface ComponentRouteProps {
  params: Promise<{ slug: string }>
}

function getComponent(slug: string) {
  return components.find((component) => component.slug === slug)
}

async function demoSource(slug: string) {
  "use cache"
  const source = await readFile(join(process.cwd(), "components/ds-demos", `${slug}.tsx`), "utf8")
  return source.replace(/^"use client"\n+/, "")
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
