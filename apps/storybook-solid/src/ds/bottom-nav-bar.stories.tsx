import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { BottomNavBarDemo } from "@isbatak/compositions/ds/solid/bottom-nav-bar/usage"
import { BottomNavBarIconOnlyDemo } from "@isbatak/compositions/ds/solid/bottom-nav-bar/icon-only"
import { BottomNavBarWithBadgeDemo } from "@isbatak/compositions/ds/solid/bottom-nav-bar/with-badge"
import { BottomNavBarWithRippleDemo } from "@isbatak/compositions/ds/solid/bottom-nav-bar/with-ripple"

const meta = {
  title: "DS/Bottom nav bar",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <BottomNavBarDemo />,
}

export const IconOnly: Story = {
  render: () => <BottomNavBarIconOnlyDemo />,
}

export const WithBadge: Story = {
  render: () => <BottomNavBarWithBadgeDemo />,
}

export const WithRipple: Story = {
  render: () => <BottomNavBarWithRippleDemo />,
}
