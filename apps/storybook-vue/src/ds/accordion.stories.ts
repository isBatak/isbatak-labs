import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import AccordionDemo from "@isbatak/compositions/ds/vue/accordion/usage"
import AccordionSizesDemo from "@isbatak/compositions/ds/vue/accordion/sizes"
import AccordionVariantsDemo from "@isbatak/compositions/ds/vue/accordion/variants"
import AccordionControlledDemo from "@isbatak/compositions/ds/vue/accordion/controlled"
import AccordionMultipleDemo from "@isbatak/compositions/ds/vue/accordion/multiple"
import AccordionDisabledItemDemo from "@isbatak/compositions/ds/vue/accordion/disabled-item"
import AccordionWithIconDemo from "@isbatak/compositions/ds/vue/accordion/with-icon"
import AccordionWithSubtextDemo from "@isbatak/compositions/ds/vue/accordion/with-subtext"

const meta = {
  title: "DS/Accordion",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(AccordionDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(AccordionSizesDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(AccordionVariantsDemo) }),
}

export const Controlled: Story = {
  render: () => ({ setup: () => () => h(AccordionControlledDemo) }),
}

export const Multiple: Story = {
  render: () => ({ setup: () => () => h(AccordionMultipleDemo) }),
}

export const DisabledItem: Story = {
  render: () => ({ setup: () => () => h(AccordionDisabledItemDemo) }),
}

export const WithIcon: Story = {
  render: () => ({ setup: () => () => h(AccordionWithIconDemo) }),
}

export const WithSubtext: Story = {
  render: () => ({ setup: () => () => h(AccordionWithSubtextDemo) }),
}
