import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import BleedDemo from "@isbatak/compositions/ds/vue/bleed/usage"
import BleedDirectionDemo from "@isbatak/compositions/ds/vue/bleed/direction"
import BleedVerticalDemo from "@isbatak/compositions/ds/vue/bleed/vertical"

const meta = {
  title: "DS/Bleed",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(BleedDemo) }),
}

export const Direction: Story = {
  render: () => ({ setup: () => () => h(BleedDirectionDemo) }),
}

export const Vertical: Story = {
  render: () => ({ setup: () => () => h(BleedVerticalDemo) }),
}
