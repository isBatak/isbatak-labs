import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import StickyDemo from "@isbatak/compositions/ds/vue/sticky/usage"

const meta = {
  title: "DS/Sticky",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(StickyDemo) }),
}
