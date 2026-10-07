import { prototypes } from "#site/content"
import type { Metadata } from "next"
import { styled } from "styled-system/jsx"

import { ComponentCatalog } from "../../../components/catalog/component-catalog"
import { Eyebrow, Section } from "../../../components/home/section"

export const metadata: Metadata = {
  title: "Prototypes",
  description: "New headless components proposed for Zag.js, with copy-paste code for six frameworks.",
}

export default function PrototypesPage() {
  const items = prototypes
    .toSorted((a, b) => a.order - b.order)
    .map(({ slug, permalink, title, description, category, original, status, preview }) => ({
      slug,
      permalink,
      title,
      description,
      category,
      original,
      status,
      preview,
    }))

  return (
    <Section>
      <styled.div pt={{ base: "16", md: "28" }} pb={{ base: "8", md: "10" }} maxW="2xl">
        <Eyebrow>Prototypes</Eyebrow>
        <styled.h1
          mt="4"
          textStyle={{ base: "4xl", md: "5xl" }}
          fontWeight="medium"
          lineHeight="1.05"
          letterSpacing="tighter"
          textWrap="balance"
        >
          Components on their way to Zag.js.
        </styled.h1>
        <styled.p mt="5" maxW="lg" color="fg.muted" lineHeight="1.7" textWrap="pretty">
          New headless components, each proposed upstream to Zag.js. Use them today with copy-paste code for six
          frameworks.
        </styled.p>
      </styled.div>

      <ComponentCatalog items={items} />
    </Section>
  )
}
