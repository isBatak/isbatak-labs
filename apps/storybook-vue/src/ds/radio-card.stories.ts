import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import RadioCardDemo from "@isbatak/compositions/ds/vue/radio-card/usage"
import RadioCardVariantsDemo from "@isbatak/compositions/ds/vue/radio-card/variants"

const meta = {
  title: "DS/Radio card",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(RadioCardDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(RadioCardVariantsDemo) }),
}
