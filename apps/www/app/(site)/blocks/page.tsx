import type { Metadata } from "next"
import { type ReactNode, Suspense } from "react"
import { styled } from "styled-system/jsx"

import { BlockExample } from "../../../components/blocks/block-example"
import { TimeInput } from "../../../components/blocks/time-input"
import { TimePickerDropdown } from "../../../components/blocks/time-picker-dropdown"
import { TimeWheelsDemo } from "../../../components/blocks/time-wheels-demo"
import { Eyebrow, Section } from "../../../components/home/section"

export const metadata: Metadata = {
  title: "Blocks",
  description: "Larger pieces composed from the prototypes, like time pickers built from wheel pickers.",
}

function BlockSection({
  id,
  title,
  description,
  children,
}: {
  id: string
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <styled.section id={id} display="grid" gap="4" scrollMarginTop="24">
      <styled.div maxW="2xl">
        <styled.h2 textStyle="2xl" fontWeight="medium" letterSpacing="tight">
          {title}
        </styled.h2>
        <styled.p mt="2" color="fg.muted" lineHeight="1.7" textWrap="pretty">
          {description}
        </styled.p>
      </styled.div>
      {children}
    </styled.section>
  )
}

export default function BlocksPage() {
  return (
    <Section>
      <styled.div pt={{ base: "16", md: "28" }} pb={{ base: "8", md: "10" }} maxW="2xl">
        <Eyebrow>Blocks</Eyebrow>
        <styled.h1
          mt="4"
          textStyle={{ base: "4xl", md: "5xl" }}
          fontWeight="medium"
          lineHeight="1.05"
          letterSpacing="tighter"
          textWrap="balance"
        >
          Compositions built from the prototypes.
        </styled.h1>
        <styled.p mt="5" maxW="lg" color="fg.muted" lineHeight="1.7" textWrap="pretty">
          Bigger pieces you can copy into an app, assembled from the wheel picker and the Ark UI components around it.
          They are React and Ark UI for now, styled with the design system recipes.
        </styled.p>
      </styled.div>

      <styled.div display="grid" gap="16" pb="24">
        <BlockSection
          id="time-wheels"
          title="Time wheels"
          description="Hour, minute and AM/PM wheels side by side. The clock format follows the locale, so 24-hour locales get no AM/PM wheel, and the hour and minute wheels loop."
        >
          <BlockExample files={["time-wheels-demo.tsx", "time-wheels.tsx", "wheel-column.tsx"]}>
            <TimeWheelsDemo />
          </BlockExample>
        </BlockSection>
        <BlockSection
          id="time-picker-dropdown"
          title="Time picker dropdown"
          description="A button that shows the selected time and opens the wheels in a popover."
        >
          <BlockExample files={["time-picker-dropdown.tsx", "time-wheels.tsx", "wheel-column.tsx"]}>
            <TimePickerDropdown />
          </BlockExample>
        </BlockSection>
        <BlockSection
          id="time-input"
          title="Time input"
          description="A date input limited to hour, minute and day period segments for typing, with the wheels in a popover for picking. Both edit the same value."
        >
          <BlockExample files={["time-input.tsx", "time-wheels.tsx", "wheel-column.tsx"]}>
            <Suspense>
              <TimeInput />
            </Suspense>
          </BlockExample>
        </BlockSection>
      </styled.div>
    </Section>
  )
}
