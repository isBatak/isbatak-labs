import { tools } from "#site/content"
import type { Metadata } from "next"
import { styled } from "styled-system/jsx"

import { Eyebrow, Section } from "../../../components/home/section"
import { ToolCard } from "../../../components/tools/tool-card"

export const metadata: Metadata = {
  title: "Tools",
  description: "Developer tools built alongside the components: command-line helpers and bundler plugins.",
}

export default function ToolsPage() {
  const items = tools.toSorted((a, b) => a.order - b.order)

  return (
    <Section>
      <styled.div pt={{ base: "16", md: "28" }} pb={{ base: "10", md: "14" }} maxW="2xl">
        <Eyebrow>Tools</Eyebrow>
        <styled.h1
          mt="4"
          textStyle={{ base: "4xl", md: "5xl" }}
          fontWeight="medium"
          lineHeight="1.05"
          letterSpacing="tighter"
          textWrap="balance"
        >
          Small tools for everyday frontend work.
        </styled.h1>
        <styled.p mt="5" maxW="lg" color="fg.muted" lineHeight="1.7" textWrap="pretty">
          Command-line helpers and bundler plugins built while making these components, each published on its own.
        </styled.p>
      </styled.div>

      <styled.div pb="24">
        <styled.p fontFamily="mono" textStyle="overline" color="fg.subtle" pb="4">
          All tools
        </styled.p>
        <styled.div
          display="grid"
          gridTemplateColumns={{ base: "minmax(0, 1fr)", md: "repeat(2, minmax(0, 1fr))" }}
          gap="2"
          mx="-6"
        >
          {items.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </styled.div>
      </styled.div>
    </Section>
  )
}
