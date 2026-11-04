import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import ProseDemo from "@isbatak/compositions/ds/vue/prose/usage"
import ProseSizesDemo from "@isbatak/compositions/ds/vue/prose/sizes"

const meta = {
  title: "DS/Prose",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(ProseDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(ProseSizesDemo) }),
}
