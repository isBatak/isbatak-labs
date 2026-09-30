import { components } from "#site/content"
import type { Metadata } from "next"
import { styled } from "styled-system/jsx"

import { ComponentCatalog } from "../../../components/catalog/component-catalog"
import { Eyebrow, Section } from "../../../components/home/section"

export const metadata: Metadata = {
  title: "Components",
  description: "Design system components built on Ark UI and Panda CSS, plus original headless components.",
}

export default function ComponentsPage() {
  const items = components
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
        <Eyebrow>Components</Eyebrow>
        <styled.h1
          mt="4"
          textStyle={{ base: "4xl", md: "5xl" }}
          fontWeight="medium"
          lineHeight="1.05"
          letterSpacing="tighter"
          textWrap="balance"
        >
          Components for every part of the interface.
        </styled.h1>
        <styled.p mt="5" maxW="lg" color="fg.muted" lineHeight="1.7" textWrap="pretty">
          Ark UI components styled with the Panda design system, plus originals: new headless components with copy-paste
          code for six frameworks.
        </styled.p>
      </styled.div>

      <ComponentCatalog items={items} />
    </Section>
  )
}
