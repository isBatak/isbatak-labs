import { styles } from "#site/content"
import type { Metadata } from "next"
import Link from "next/link"
import { styled } from "styled-system/jsx"

import { DsDocLayout } from "../../../../components/ds/ds-doc-layout"
import { Eyebrow, Section } from "../../../../components/home/section"
import { Icon } from "../../../../components/ui/icon"

export const metadata: Metadata = {
  title: "Design system styles",
  description: "Style utilities that extend the Panda design system.",
}

const StyleLink = styled(Link, {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "2",
    p: "5",
    borderWidth: "1px",
    borderRadius: "l3",
    transitionProperty: "background, border-color",
    transitionDuration: "fast",
    focusVisibleRing: "outside",
    _hover: { bg: "bg.subtle", borderColor: "border.emphasized" },
  },
})

export default function StylesPage() {
  const items = styles.toSorted((a, b) => a.order - b.order || a.title.localeCompare(b.title))

  return (
    <Section>
      <DsDocLayout section="styles" toc={[]}>
        <Eyebrow>Design system</Eyebrow>
        <styled.h1 mt="4" textStyle={{ base: "4xl", md: "5xl" }} fontWeight="semibold" letterSpacing="tight">
          Styles
        </styled.h1>
        <styled.p mt="4" maxW="2xl" color="fg.muted" textStyle="md" lineHeight="1.8">
          Panda presets that add style props on top of the design system. Install one, add it to your Panda config and
          use its props on any element.
        </styled.p>

        <styled.ul
          mt="10"
          display="grid"
          gridTemplateColumns={{ base: "1fr", md: "repeat(2, minmax(0, 1fr))" }}
          gap="4"
        >
          {items.map((style) => (
            <li key={style.slug}>
              <StyleLink href={style.permalink}>
                <styled.span display="flex" alignItems="center" justifyContent="space-between" fontWeight="medium">
                  {style.title}
                  <Icon name="arrow-right" color="fg.subtle" />
                </styled.span>
                <styled.span textStyle="sm" color="fg.muted" lineHeight="1.6">
                  {style.description}
                </styled.span>
              </StyleLink>
            </li>
          ))}
        </styled.ul>
      </DsDocLayout>
    </Section>
  )
}
