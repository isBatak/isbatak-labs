import { Button } from "@isbatak/react-ui/button"
import type { Metadata } from "next"
import Link from "next/link"
import { styled } from "styled-system/jsx"

import { allItems } from "../../../components/catalog/catalog-items"
import { ComponentCatalog } from "../../../components/catalog/component-catalog"
import { Eyebrow, Section } from "../../../components/home/section"
import { Icon } from "../../../components/ui/icon"

export const metadata: Metadata = {
  title: "Components",
  description: "Design system components built on Ark UI and Panda CSS, plus prototypes on their way to Zag.js.",
}

export default function ComponentsPage() {
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
          Ark UI components styled with the Panda design system, plus prototypes: new headless components proposed to
          Zag.js, with copy-paste code for six frameworks.
        </styled.p>
        <styled.div display="flex" flexWrap="wrap" gap="2" mt="6">
          <Button asChild variant="outline" size="sm">
            <Link href="/components/ds">
              Design system
              <Icon name="arrow-right" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="/components/prototypes">
              Prototypes
              <Icon name="arrow-right" />
            </Link>
          </Button>
        </styled.div>
      </styled.div>

      <ComponentCatalog items={allItems()} />
    </Section>
  )
}
