import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import StepsDemo from "@isbatak/compositions/ds/vue/steps/usage"
import StepsSizesDemo from "@isbatak/compositions/ds/vue/steps/sizes"
import StepsVariantsDemo from "@isbatak/compositions/ds/vue/steps/variants"
import StepsColorsDemo from "@isbatak/compositions/ds/vue/steps/colors"
import StepsVerticalDemo from "@isbatak/compositions/ds/vue/steps/vertical"
import StepsControlledDemo from "@isbatak/compositions/ds/vue/steps/controlled"
import StepsIconDemo from "@isbatak/compositions/ds/vue/steps/icon"
import StepsDescriptionDemo from "@isbatak/compositions/ds/vue/steps/description"
import StepsTriggerDemo from "@isbatak/compositions/ds/vue/steps/trigger"

const meta = {
  title: "DS/Steps",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(StepsDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(StepsSizesDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(StepsVariantsDemo) }),
}

export const Colors: Story = {
  render: () => ({ setup: () => () => h(StepsColorsDemo) }),
}

export const Vertical: Story = {
  render: () => ({ setup: () => () => h(StepsVerticalDemo) }),
}

export const Controlled: Story = {
  render: () => ({ setup: () => () => h(StepsControlledDemo) }),
}

export const Icon: Story = {
  render: () => ({ setup: () => () => h(StepsIconDemo) }),
}

export const Description: Story = {
  render: () => ({ setup: () => () => h(StepsDescriptionDemo) }),
}

export const Trigger: Story = {
  render: () => ({ setup: () => () => h(StepsTriggerDemo) }),
}
