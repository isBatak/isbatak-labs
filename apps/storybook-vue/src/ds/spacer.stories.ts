import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import SpacerDemo from "@isbatak/compositions/ds/vue/spacer/usage"

const meta = {
  title: "DS/Spacer",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(SpacerDemo) }),
}
