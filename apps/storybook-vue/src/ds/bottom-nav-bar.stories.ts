import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import BottomNavBarDemo from "@isbatak/compositions/ds/vue/bottom-nav-bar/usage"
import BottomNavBarIconOnlyDemo from "@isbatak/compositions/ds/vue/bottom-nav-bar/icon-only"
import BottomNavBarWithBadgeDemo from "@isbatak/compositions/ds/vue/bottom-nav-bar/with-badge"
import BottomNavBarWithRippleDemo from "@isbatak/compositions/ds/vue/bottom-nav-bar/with-ripple"

const meta = {
  title: "DS/Bottom nav bar",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(BottomNavBarDemo) }),
}

export const IconOnly: Story = {
  render: () => ({ setup: () => () => h(BottomNavBarIconOnlyDemo) }),
}

export const WithBadge: Story = {
  render: () => ({ setup: () => () => h(BottomNavBarWithBadgeDemo) }),
}

export const WithRipple: Story = {
  render: () => ({ setup: () => () => h(BottomNavBarWithRippleDemo) }),
}
