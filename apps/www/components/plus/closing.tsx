import { Button } from "@isbatak/react-ui/button"
import { styled } from "styled-system/jsx"

import { Section } from "../home/section"
import { CONTACT_EMAIL } from "../layout/site-links"
import { Icon } from "../ui/icon"
import { agencySlots, foundingSeats, libraryOpen } from "./offer"

const Panel = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "4",
    p: { base: "8", md: "10" },
    rounded: "l3",
    bg: "bg.subtle",
    scrollMarginTop: "calc({sizes.header} + {spacing.6})",
  },
})

const PanelTitle = styled("h2", {
  base: {
    textStyle: { base: "2xl", md: "3xl" },
    fontWeight: "medium",
    letterSpacing: "tight",
    textWrap: "balance",
  },
})

const PanelText = styled("p", {
  base: {
    maxW: "md",
    lineHeight: "1.7",
    color: "fg.muted",
    textWrap: "pretty",
  },
})

function mailto(subject: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`
}

export function PlusClosing() {
  const slotsOpen = agencySlots.open > 0

  return (
    <Section>
      <styled.div pb={{ base: "20", md: "32" }}>
        <styled.div
          display="grid"
          gridTemplateColumns={{ base: "minmax(0, 1fr)", md: "repeat(2, minmax(0, 1fr))" }}
          gap="3"
        >
          <Panel id="apply">
            <PanelTitle>{slotsOpen ? "Agencies: apply for a slot" : "Agencies: join the waitlist"}</PanelTitle>
            <PanelText>
              Tell me about your agency, your clients and what you need. If it looks like a fit, we book a 20-minute
              intro call.
            </PanelText>
            <Button asChild>
              <a href={mailto(slotsOpen ? "Plus agency application" : "Plus agency waitlist")}>
                {slotsOpen ? "Apply by email" : "Join by email"}
                <Icon name="arrow-right" />
              </a>
            </Button>
          </Panel>
          {libraryOpen ? (
            <Panel>
              <PanelTitle>Freelancers: get the library</PanelTitle>
              <PanelText>Subscribe monthly or yearly, and cancel anytime.</PanelText>
              <Button asChild variant="outline">
                <a href="#plans">See plans</a>
              </Button>
            </Panel>
          ) : (
            <Panel id="waitlist">
              <PanelTitle>Freelancers: join the waitlist</PanelTitle>
              <PanelText>
                One email when the library opens. The first {foundingSeats} get 25% off for as long as they stay
                subscribed.
              </PanelText>
              <Button asChild variant="outline">
                <a href={mailto("Plus waitlist")}>Join by email</a>
              </Button>
            </Panel>
          )}
        </styled.div>
        <styled.p mt="10" textAlign="center" textStyle="sm" color="fg.muted">
          Still have questions?{" "}
          <styled.a
            href={`mailto:${CONTACT_EMAIL}`}
            color="fg"
            textDecoration="underline"
            textDecorationColor="border.emphasized"
            textUnderlineOffset="3px"
          >
            Email me
          </styled.a>
          .
        </styled.p>
      </styled.div>
    </Section>
  )
}
