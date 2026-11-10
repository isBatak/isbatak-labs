import type { Meta, StoryObj } from "@storybook/react-vite"
import { AccordionDemo } from "@isbatak/compositions/ds/react/accordion/usage"
import { AccordionSizesDemo } from "@isbatak/compositions/ds/react/accordion/sizes"
import { AccordionVariantsDemo } from "@isbatak/compositions/ds/react/accordion/variants"
import { AccordionControlledDemo } from "@isbatak/compositions/ds/react/accordion/controlled"
import { AccordionMultipleDemo } from "@isbatak/compositions/ds/react/accordion/multiple"
import { AccordionDisabledItemDemo } from "@isbatak/compositions/ds/react/accordion/disabled-item"
import { AccordionWithIconDemo } from "@isbatak/compositions/ds/react/accordion/with-icon"
import { AccordionWithSubtextDemo } from "@isbatak/compositions/ds/react/accordion/with-subtext"

const meta = {
  title: "DS/Accordion",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <AccordionDemo />,
}

export const Sizes: Story = {
  render: () => <AccordionSizesDemo />,
}

export const Variants: Story = {
  render: () => <AccordionVariantsDemo />,
}

export const Controlled: Story = {
  render: () => <AccordionControlledDemo />,
}

export const Multiple: Story = {
  render: () => <AccordionMultipleDemo />,
}

export const DisabledItem: Story = {
  render: () => <AccordionDisabledItemDemo />,
}

export const WithIcon: Story = {
  render: () => <AccordionWithIconDemo />,
}

export const WithSubtext: Story = {
  render: () => <AccordionWithSubtextDemo />,
}
