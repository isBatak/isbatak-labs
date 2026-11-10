import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import FocusTrapDemo from "@isbatak/compositions/ds/vue/focus-trap/usage"

const meta = {
  title: "DS/Focus trap",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(FocusTrapDemo) }),
}
