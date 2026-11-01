import { icons } from "#site/content"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { SITE_URL } from "../../../../components/docs/site-url"
import { IconDocPage } from "../../../../components/ds/icon-doc-page"
import { Section } from "../../../../components/home/section"

const overview = icons.find((doc) => doc.slug === "overview")

export const metadata: Metadata = {
  title: "Icons",
  description: overview?.description,
  alternates: { canonical: `${SITE_URL}/ds/icons` },
}

export default function IconsOverviewRoute() {
  if (!overview) notFound()

  return (
    <Section>
      <IconDocPage doc={overview} />
    </Section>
  )
}
