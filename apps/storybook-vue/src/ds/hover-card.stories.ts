import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import HoverCardDemo from "@isbatak/compositions/ds/vue/hover-card/usage"
import HoverCardControlledDemo from "@isbatak/compositions/ds/vue/hover-card/controlled"
import HoverCardDelayDemo from "@isbatak/compositions/ds/vue/hover-card/delay"
import HoverCardPlacementDemo from "@isbatak/compositions/ds/vue/hover-card/placement"
import HoverCardSizesDemo from "@isbatak/compositions/ds/vue/hover-card/sizes"

const meta = {
  title: "DS/Hover card",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(HoverCardDemo) }),
}

export const Controlled: Story = {
  render: () => ({ setup: () => () => h(HoverCardControlledDemo) }),
}

export const Delay: Story = {
  render: () => ({ setup: () => () => h(HoverCardDelayDemo) }),
}

export const Placement: Story = {
  render: () => ({ setup: () => () => h(HoverCardPlacementDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(HoverCardSizesDemo) }),
}
