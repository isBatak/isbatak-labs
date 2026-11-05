import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import CloseButtonDemo from "@isbatak/compositions/ds/vue/close-button/usage"
import CloseButtonSizesDemo from "@isbatak/compositions/ds/vue/close-button/sizes"

const meta = {
  title: "DS/Close button",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(CloseButtonDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(CloseButtonSizesDemo) }),
}
