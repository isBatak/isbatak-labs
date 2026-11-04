import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import CircleDemo from "@isbatak/compositions/ds/vue/circle/usage"
import CircleWithIconDemo from "@isbatak/compositions/ds/vue/circle/with-icon"

const meta = {
  title: "DS/Circle and Square",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(CircleDemo) }),
}

export const WithIcon: Story = {
  render: () => ({ setup: () => () => h(CircleWithIconDemo) }),
}
