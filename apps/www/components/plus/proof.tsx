import Link from "next/link"
import { styled } from "styled-system/jsx"

import { Eyebrow, Section, SectionHeading } from "../home/section"
import { REPO_URL } from "../layout/site-links"
import { Icon } from "../ui/icon"

const ProofCard = styled("li", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "4",
  },
})

const ProofImage = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    aspectRatio: "wide",
    rounded: "l3",
    borderWidth: "1px",
    borderStyle: "dashed",
    borderColor: "border.emphasized",
    color: "fg.subtle",
  },
})

const ProofTitle = styled("h3", {
  base: {
    textStyle: "lg",
    fontWeight: "medium",
    letterSpacing: "tight",
  },
})

const ProofText = styled("p", {
  base: {
    mt: "1.5",
    textStyle: "sm",
    lineHeight: "1.7",
    color: "fg.muted",
    textWrap: "pretty",
  },
})

const linkStyles = {
  color: "fg",
  textDecoration: "underline",
  textDecorationColor: "border.emphasized",
  textUnderlineOffset: "3px",
  _hover: { textDecorationColor: "fg.subtle" },
} as const

const InternalLink = styled(Link, { base: linkStyles })
const ExternalLink = styled("a", { base: linkStyles })

export function PlusProof() {
  return (
    <Section>
      <styled.div py={{ base: "20", md: "28" }} borderTopWidth="1px">
        <styled.div maxW="2xl">
          <Eyebrow>Track record</Eyebrow>
          <SectionHeading>Work you can look at.</SectionHeading>
        </styled.div>
        <styled.ul
          display="grid"
          gridTemplateColumns={{ base: "minmax(0, 1fr)", sm: "repeat(2, minmax(0, 1fr))" }}
          gap="8"
          mt="10"
        >
          <ProofCard>
            <ProofImage>
              <Icon name="brand-github" size="2xl" />
            </ProofImage>
            <div>
              <ProofTitle>Open source</ProofTitle>
              <ProofText>
                <InternalLink href="/components">Headless components</InternalLink> that run in React, Vue, Svelte,
                Solid, Preact and vanilla JS, plus the <InternalLink href="/ds/components">design system</InternalLink>,{" "}
                <InternalLink href="/blocks">blocks</InternalLink> and <InternalLink href="/tools">tools</InternalLink>{" "}
                on this site, all on{" "}
                <ExternalLink href={REPO_URL} target="_blank" rel="noopener">
                  GitHub
                </ExternalLink>
                .
              </ProofText>
            </div>
          </ProofCard>
          <ProofCard>
            <ProofImage>
              <Icon name="player-play" size="2xl" />
            </ProofImage>
            <div>
              <ProofTitle>Chakra UI meetup speaker</ProofTitle>
              <ProofText>Spoke at the Chakra UI meetup.</ProofText>
            </div>
          </ProofCard>
          <ProofCard>
            <ProofImage>
              <Icon name="brand-react" size="2xl" />
            </ProofImage>
            <div>
              <ProofTitle>React workshop</ProofTitle>
              <ProofText>Ran a React workshop.</ProofText>
            </div>
          </ProofCard>
          <ProofCard>
            <ProofImage>
              <Icon name="components" size="2xl" />
            </ProofImage>
            <div>
              <ProofTitle>Design system at TradeLocker</ProofTitle>
              <ProofText>Design system work for the TradeLocker trading platform.</ProofText>
            </div>
          </ProofCard>
        </styled.ul>
      </styled.div>
    </Section>
  )
}
