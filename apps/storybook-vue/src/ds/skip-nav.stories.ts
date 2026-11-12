import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import SkipNavDemo from "@isbatak/compositions/ds/vue/skip-nav/usage"

const meta = {
  title: "DS/Skip nav",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(SkipNavDemo) }),
}
