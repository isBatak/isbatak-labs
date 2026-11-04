import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import EmDemo from "@isbatak/compositions/ds/vue/em/usage"

const meta = {
  title: "DS/Em",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(EmDemo) }),
}
