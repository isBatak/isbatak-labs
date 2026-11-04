import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import FloatDemo from "@isbatak/compositions/ds/vue/float/usage"
import FloatOffsetDemo from "@isbatak/compositions/ds/vue/float/offset"
import FloatPlacementsDemo from "@isbatak/compositions/ds/vue/float/placements"
import FloatWithBadgeDemo from "@isbatak/compositions/ds/vue/float/with-badge"

const meta = {
  title: "DS/Float",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(FloatDemo) }),
}

export const Offset: Story = {
  render: () => ({ setup: () => () => h(FloatOffsetDemo) }),
}

export const Placements: Story = {
  render: () => ({ setup: () => () => h(FloatPlacementsDemo) }),
}

export const WithBadge: Story = {
  render: () => ({ setup: () => () => h(FloatWithBadgeDemo) }),
}
