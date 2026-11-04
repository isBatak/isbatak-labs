import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import VisuallyHiddenDemo from "@isbatak/compositions/ds/vue/visually-hidden/usage"

const meta = {
  title: "DS/Visually hidden",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(VisuallyHiddenDemo) }),
}
