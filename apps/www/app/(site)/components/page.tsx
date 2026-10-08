import type { Metadata } from "next"
import { styled } from "styled-system/jsx"

import { prototypeItems } from "../../../components/catalog/catalog-items"
import { ComponentCatalog } from "../../../components/catalog/component-catalog"
import { Eyebrow, Section } from "../../../components/home/section"

export const metadata: Metadata = {
  title: "Components",
  description:
    "Prototypes: new headless components built as Zag.js state machines and proposed upstream, with copy-paste code for six frameworks.",
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
          Prototypes on their way to Zag.js.
        </styled.h1>
        <styled.p mt="5" maxW="lg" color="fg.muted" lineHeight="1.7" textWrap="pretty">
          Prototypes are headless components that Zag.js and Ark UI don't ship yet. Each one is a framework-agnostic
          state machine proposed upstream, and you can use it today with copy-paste code for React, Vue, Svelte, Solid,
          Preact and vanilla JS.
        </styled.p>
      </styled.div>

      <ComponentCatalog items={prototypeItems()} label="prototypes" />
    </Section>
  )
}
