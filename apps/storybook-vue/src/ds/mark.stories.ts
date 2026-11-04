import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import MarkDemo from "@isbatak/compositions/ds/vue/mark/usage"
import MarkVariantsDemo from "@isbatak/compositions/ds/vue/mark/variants"

const meta = {
  title: "DS/Mark",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(MarkDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(MarkVariantsDemo) }),
}
