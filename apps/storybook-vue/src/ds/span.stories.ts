import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import SpanDemo from "@isbatak/compositions/ds/vue/span/usage"

const meta = {
  title: "DS/Span",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(SpanDemo) }),
}
