import { styled } from "styled-system/jsx"

import { Eyebrow, Section, SectionHeading } from "../home/section"
import { Faq, FaqItem } from "../tools/faq"
import { formatEuro, foundingSeats, onboardingSprintPrice } from "./offer"

export function PlusFaq() {
  return (
    <Section id="faq" style={{ scrollMarginTop: "var(--sizes-header)" }}>
      <styled.div
        display="grid"
        gap={{ base: "6", md: "8" }}
        gridTemplateColumns={{ md: "repeat(12, minmax(0, 1fr))" }}
        py={{ base: "20", md: "28" }}
        borderTopWidth="1px"
      >
        <styled.div gridColumn={{ md: "span 4 / span 4" }}>
          <Eyebrow>FAQ</Eyebrow>
          <SectionHeading>Questions, answered.</SectionHeading>
        </styled.div>
        <styled.div gridColumn={{ md: "span 8 / span 8" }} minW="0">
          <Faq>
            <FaqItem question="What do I get with Individual?">
              Every Plus block as React, Ark UI and Panda CSS source, which you install with the shadcn CLI or your AI
              agent, plus the Pro Figma file with Code Connect mappings. New blocks arrive about once a month.
            </FaqItem>
            <FaqItem question="Can I use Plus blocks in client projects?">
              Yes, in as many client projects as you like, and the code stays with the client after you cancel. You
              can't resell the blocks as a kit, template or UI library.
            </FaqItem>
            <FaqItem question="What happens when I cancel?">
              You keep access until the end of the period you paid for. Blocks you already shipped stay in your
              projects.
            </FaqItem>
            <FaqItem question="Do you offer refunds?">
              No. You can cancel anytime, but code can't be returned once it's downloaded.
            </FaqItem>
            <FaqItem question="Which frameworks are supported?">
              React with Ark UI and Panda CSS. The blocks build on the open-source components on this site.
            </FaqItem>
            <FaqItem question="Is the Figma kit included?">
              A free version is on Figma Community. The Pro file, with every Plus block and its Code Connect mapping,
              comes with your subscription.
            </FaqItem>
            <FaqItem question="How does the agency retainer work?">
              You get about 8 hours of my time each month for calls, reviews and custom blocks, plus a shared Slack
              channel. Unused hours don't roll over. It starts with a {formatEuro(onboardingSprintPrice)} onboarding
              sprint.
            </FaqItem>
            <FaqItem question="Who owns custom blocks?">
              I do, and you and your client get a permanent license to use and change them. I may add a generic version
              to the library, without your client's branding or business logic.
            </FaqItem>
            <FaqItem question="Do prices include VAT?">
              Tax for your country is calculated at checkout. Agency invoices include VAT where it applies.
            </FaqItem>
            <FaqItem question="When does the library open?">
              When the launch set is ready: app shell, video gallery, video player and transcripts. Join the waitlist
              for the launch email. The first {foundingSeats} get 25% off for as long as they stay subscribed.
            </FaqItem>
          </Faq>
        </styled.div>
      </styled.div>
    </Section>
  )
}
