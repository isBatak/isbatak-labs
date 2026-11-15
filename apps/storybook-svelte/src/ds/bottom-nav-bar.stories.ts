import type { Meta, StoryObj } from "@storybook/svelte-vite"
import BottomNavBarDemo from "@isbatak/compositions/ds/svelte/bottom-nav-bar/usage"
import BottomNavBarIconOnlyDemo from "@isbatak/compositions/ds/svelte/bottom-nav-bar/icon-only"
import BottomNavBarWithBadgeDemo from "@isbatak/compositions/ds/svelte/bottom-nav-bar/with-badge"
import BottomNavBarWithRippleDemo from "@isbatak/compositions/ds/svelte/bottom-nav-bar/with-ripple"

const meta = {
  title: "DS/Bottom nav bar",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof BottomNavBarDemo> = {
  render: () => ({ Component: BottomNavBarDemo }),
}

export const IconOnly: StoryObj<typeof BottomNavBarIconOnlyDemo> = {
  render: () => ({ Component: BottomNavBarIconOnlyDemo }),
}

export const WithBadge: StoryObj<typeof BottomNavBarWithBadgeDemo> = {
  render: () => ({ Component: BottomNavBarWithBadgeDemo }),
}

export const WithRipple: StoryObj<typeof BottomNavBarWithRippleDemo> = {
  render: () => ({ Component: BottomNavBarWithRippleDemo }),
}
