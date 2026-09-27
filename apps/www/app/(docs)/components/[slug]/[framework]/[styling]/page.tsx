import { components } from "#site/content"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { DocFooter } from "../../../../../../components/docs/doc-footer"
import { ExampleSource } from "../../../../../../components/docs/framework-code"
import { SITE_URL } from "../../../../../../components/docs/site-url"
import { type DocVariant, frameworkIds, stylingIds } from "../../../../../../components/docs/variant"
import { PreviewSource } from "../../../../../../components/examples/preview-context"
import { MDXContent } from "../../../../../../components/mdx-content"
import { Prose } from "../../../../../../components/ui/prose"

interface ComponentPageProps {
  params: Promise<{ slug: string } & DocVariant>
}

function getDoc(slug: string) {
  return components.find((doc) => doc.slug === slug)
}

export const dynamicParams = false

export function generateStaticParams() {
  return components.flatMap(({ slug }) =>
    frameworkIds.flatMap((framework) => stylingIds.map((styling) => ({ slug, framework, styling }))),
  )
}

export async function generateMetadata({ params }: ComponentPageProps): Promise<Metadata> {
  const doc = getDoc((await params).slug)
  if (!doc) return {}
  return {
    title: doc.title,
    description: doc.description,
    alternates: { canonical: `${SITE_URL}${doc.permalink}` },
  }
}

export default async function ComponentPage({ params }: ComponentPageProps) {
  const { slug, framework, styling } = await params
  const doc = getDoc(slug)
  if (!doc) notFound()

  const variant = { framework, styling }

  return (
    <>
      {doc.preview && <PreviewSource id={doc.preview} source={<ExampleSource id={doc.preview} {...variant} />} />}
      <Prose>
        <MDXContent code={doc.code} variant={variant} />
      </Prose>
      <DocFooter component={doc} variant={variant} />
    </>
  )
}
