import { styled } from "styled-system/jsx"

import { Eyebrow, Section, SectionHeading } from "../home/section"
import { formatEuro, onboardingSprintPrice } from "./offer"

const Step = styled("li", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "2",
    p: "6",
    rounded: "l3",
    bg: "bg.subtle",
  },
})

const StepNumber = styled("span", {
  base: {
    fontFamily: "mono",
    textStyle: "overline",
    color: "fg.subtle",
  },
})

const StepTitle = styled("h3", {
  base: {
    mt: "2",
    textStyle: "lg",
    fontWeight: "medium",
    letterSpacing: "tight",
  },
})

const StepText = styled("p", {
  base: {
    textStyle: "sm",
    lineHeight: "1.7",
    color: "fg.muted",
    textWrap: "pretty",
  },
})

export function PlusAgencyWork() {
  return (
    <Section id="agencies" style={{ scrollMarginTop: "var(--sizes-header)" }}>
      <styled.div py={{ base: "20", md: "28" }} borderTopWidth="1px">
        <styled.div maxW="2xl">
          <Eyebrow>For agencies</Eyebrow>
          <SectionHeading>How agency work runs.</SectionHeading>
          <styled.p mt="4" maxW="lg" textStyle="sm" lineHeight="1.7" color="fg.muted" textWrap="pretty">
            I work with only a few agencies at a time, so every application gets a real answer and every retainer gets
            real hours.
          </styled.p>
        </styled.div>
        <styled.ol
          display="grid"
          gridTemplateColumns={{
            base: "minmax(0, 1fr)",
            md: "repeat(2, minmax(0, 1fr))",
            lg: "repeat(4, minmax(0, 1fr))",
          }}
          gap="3"
          mt="10"
        >
          <Step>
            <StepNumber aria-hidden>01</StepNumber>
            <StepTitle>Apply</StepTitle>
            <StepText>Tell me about your agency, your clients and what you need from Plus.</StepText>
          </Step>
          <Step>
            <StepNumber aria-hidden>02</StepNumber>
            <StepTitle>Intro call</StepTitle>
            <StepText>
              A 20-minute call to check the fit. If it works, you get a short proposal and a contract.
            </StepText>
          </Step>
          <Step>
            <StepNumber aria-hidden>03</StepNumber>
            <StepTitle>Onboarding sprint</StepTitle>
            <StepText>
              {formatEuro(onboardingSprintPrice)} for about 12 hours. I set up Code Connect, the Figma MCP server and
              the agent kit in one of your projects, then run a 2-hour workshop for your team.
            </StepText>
          </Step>
          <Step>
            <StepNumber aria-hidden>04</StepNumber>
            <StepTitle>Monthly retainer</StepTitle>
            <StepText>
              About 8 hours a month for calls, reviews and custom blocks, with a shared Slack channel in between.
            </StepText>
          </Step>
        </styled.ol>
      </styled.div>
    </Section>
  )
}
