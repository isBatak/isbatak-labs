import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import StrongDemo from "@isbatak/compositions/ds/vue/strong/usage"

const meta = {
  title: "DS/Strong",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(StrongDemo) }),
}
