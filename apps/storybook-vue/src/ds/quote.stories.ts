import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import QuoteDemo from "@isbatak/compositions/ds/vue/quote/usage"

const meta = {
  title: "DS/Quote",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(QuoteDemo) }),
}
