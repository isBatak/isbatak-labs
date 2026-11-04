import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import FloatGapDemo from "@isbatak/compositions/ds/vue/float-gap/usage"
import FloatGapPlacementsDemo from "@isbatak/compositions/ds/vue/float-gap/placements"

const meta = {
  title: "DS/Float gap",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(FloatGapDemo) }),
}

export const Placements: Story = {
  render: () => ({ setup: () => () => h(FloatGapPlacementsDemo) }),
}
