"use client"

import { Badge } from "@isbatak/react-ui/badge"
import { Button } from "@isbatak/react-ui/button"
import { SegmentGroup } from "@isbatak/react-ui/segment-group"
import { useState } from "react"
import { styled } from "styled-system/jsx"

import { Eyebrow, Section, SectionHeading, SectionText } from "../home/section"
import { Icon } from "../ui/icon"
import {
  agencySlots,
  type Billing,
  businessPrice,
  checkoutUrls,
  formatEuro,
  foundingSeats,
  individualPrice,
  isBilling,
  libraryOpen,
  onboardingSprintPrice,
} from "./offer"

const PlanCard = styled("article", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "6",
    p: { base: "6", md: "8" },
    rounded: "l3",
    borderWidth: "1px",
  },
  variants: {
    featured: {
      true: { bg: "bg.subtle", borderColor: "border.emphasized" },
    },
  },
})

const PlanName = styled("h3", {
  base: {
    textStyle: "xl",
    fontWeight: "medium",
    letterSpacing: "tight",
  },
})

const PlanAudience = styled("p", {
  base: {
    mt: "1",
    textStyle: "sm",
    color: "fg.muted",
  },
})

const Feature = styled("li", {
  base: {
    display: "flex",
    alignItems: "flex-start",
    gap: "2.5",
    textStyle: "sm",
    lineHeight: "1.6",
    "& > svg": { flexShrink: "0", mt: "0.5", color: "fg.subtle" },
  },
})

const Fineprint = styled("p", {
  base: {
    textStyle: "xs",
    lineHeight: "1.6",
    color: "fg.muted",
    textWrap: "pretty",
  },
})

const SlotDot = styled("span", {
  base: {
    boxSize: "2",
    rounded: "full",
  },
  variants: {
    open: {
      true: { bg: "green.solid" },
      false: { bg: "border.emphasized" },
    },
  },
})

function Price({ amount, billing, note }: { amount: number; billing: Billing; note: string }) {
  return (
    <div>
      <styled.p display="flex" alignItems="baseline" gap="1.5">
        <styled.span textStyle="4xl" fontWeight="medium" letterSpacing="tight">
          {formatEuro(amount)}
        </styled.span>
        <styled.span textStyle="sm" color="fg.muted">
          {billing === "monthly" ? "/ month" : "/ year"}
        </styled.span>
      </styled.p>
      <styled.p mt="1" textStyle="xs" lineHeight="1.6" color="fg.muted">
        {note}
      </styled.p>
    </div>
  )
}

export function PlusPricing() {
  const [billing, setBilling] = useState<Billing>("monthly")
  const checkoutUrl = libraryOpen ? checkoutUrls[billing] : null
  const slotsOpen = agencySlots.open > 0
  const period = billing === "monthly" ? "a month" : "a year"

  return (
    <Section id="plans" style={{ scrollMarginTop: "var(--sizes-header)" }}>
      <styled.div py={{ base: "20", md: "28" }} borderTopWidth="1px">
        <styled.div maxW="xl" mx="auto" textAlign="center">
          <Eyebrow>Plans</Eyebrow>
          <SectionHeading>Plans for freelancers and agencies.</SectionHeading>
          <SectionText>
            Freelancers subscribe to the library. Agencies get the library for the whole team and a monthly block of my
            time.
          </SectionText>
        </styled.div>

        <styled.div display="flex" flexWrap="wrap" alignItems="center" justifyContent="center" gap="3" mt="10">
          <SegmentGroup.Root
            value={billing}
            onValueChange={(details) => {
              if (isBilling(details.value)) setBilling(details.value)
            }}
            orientation="horizontal"
            aria-label="Billing period"
          >
            <SegmentGroup.Indicator />
            <SegmentGroup.Item value="monthly">
              <SegmentGroup.ItemText>Monthly</SegmentGroup.ItemText>
              <SegmentGroup.ItemHiddenInput />
            </SegmentGroup.Item>
            <SegmentGroup.Item value="yearly">
              <SegmentGroup.ItemText>Yearly</SegmentGroup.ItemText>
              <SegmentGroup.ItemHiddenInput />
            </SegmentGroup.Item>
          </SegmentGroup.Root>
          <Badge colorPalette="green">3 months free</Badge>
        </styled.div>
        <styled.p srOnly aria-live="polite">
          Individual {formatEuro(individualPrice[billing])} and Business {formatEuro(businessPrice[billing])} {period}
        </styled.p>

        <styled.div
          display="grid"
          gridTemplateColumns={{ base: "minmax(0, 1fr)", md: "repeat(2, minmax(0, 1fr))" }}
          gap="4"
          maxW="4xl"
          mx="auto"
          mt="8"
        >
          <PlanCard>
            <div>
              <PlanName>Individual</PlanName>
              <PlanAudience>For freelancers who want the library.</PlanAudience>
            </div>
            <Price
              amount={individualPrice[billing]}
              billing={billing}
              note={
                billing === "monthly"
                  ? "Billed monthly. Cancel anytime."
                  : `${formatEuro(individualPrice.yearly / 12)} a month, billed yearly.`
              }
            />
            <styled.ul display="flex" flexDirection="column" gap="2.5">
              <Feature>
                <Icon name="check" />
                Every Plus block as React, Ark UI and Panda CSS source
              </Feature>
              <Feature>
                <Icon name="check" />
                Install blocks with the shadcn CLI or your AI agent
              </Feature>
              <Feature>
                <Icon name="check" />
                The Pro Figma file with Code Connect mappings
              </Feature>
              <Feature>
                <Icon name="check" />
                Use blocks in unlimited client projects
              </Feature>
              <Feature>
                <Icon name="check" />
                Support through GitHub issues and email
              </Feature>
            </styled.ul>
            <styled.div display="flex" flexDirection="column" gap="3" mt="auto">
              {checkoutUrl ? (
                <Button asChild size="lg">
                  <a href={checkoutUrl}>Subscribe</a>
                </Button>
              ) : (
                <>
                  <Button asChild size="lg" variant="outline">
                    <a href="#waitlist">Join the waitlist</a>
                  </Button>
                  <Fineprint>
                    The first {foundingSeats} from the waitlist get 25% off for as long as they stay subscribed.
                  </Fineprint>
                </>
              )}
            </styled.div>
          </PlanCard>

          <PlanCard featured>
            <div>
              <PlanName>Business</PlanName>
              <PlanAudience>For agencies that want the library and my time.</PlanAudience>
            </div>
            <Price
              amount={businessPrice[billing]}
              billing={billing}
              note={
                billing === "monthly"
                  ? "Invoiced monthly."
                  : `${formatEuro(businessPrice.yearly / 12)} a month, invoiced yearly.`
              }
            />
            <styled.ul display="flex" flexDirection="column" gap="2.5">
              <Feature>
                <Icon name="check" />
                About 8 hours of my time a month for calls, reviews and custom blocks
              </Feature>
              <Feature>
                <Icon name="check" />
                The Plus library and Pro Figma file for your whole team
              </Feature>
              <Feature>
                <Icon name="check" />A shared Slack channel for quick questions
              </Feature>
              <Feature>
                <Icon name="check" />
                Custom blocks licensed to you and your client for good
              </Feature>
              <Feature>
                <Icon name="check" />
                Starts with a {formatEuro(onboardingSprintPrice)} onboarding sprint
              </Feature>
            </styled.ul>
            <styled.div display="flex" flexDirection="column" gap="3" mt="auto">
              <styled.p display="flex" alignItems="center" gap="2" textStyle="sm" fontWeight="medium">
                <SlotDot open={slotsOpen} aria-hidden />
                {slotsOpen
                  ? `${agencySlots.open} of ${agencySlots.total} agency slots open`
                  : "All agency slots are taken"}
              </styled.p>
              <Button asChild size="lg">
                <a href="#apply">{slotsOpen ? "Apply as an agency" : "Join the agency waitlist"}</a>
              </Button>
              <Fineprint>Unused hours don't roll over.</Fineprint>
            </styled.div>
          </PlanCard>
        </styled.div>
      </styled.div>
    </Section>
  )
}
