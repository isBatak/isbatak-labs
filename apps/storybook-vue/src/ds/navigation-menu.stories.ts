import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import NavigationMenuDemo from "@isbatak/compositions/ds/vue/navigation-menu/usage"
import NavigationMenuWithoutViewportDemo from "@isbatak/compositions/ds/vue/navigation-menu/without-viewport"
import NavigationMenuControlledDemo from "@isbatak/compositions/ds/vue/navigation-menu/controlled"
import NavigationMenuCurrentLinkDemo from "@isbatak/compositions/ds/vue/navigation-menu/current-link"
import NavigationMenuVerticalDemo from "@isbatak/compositions/ds/vue/navigation-menu/vertical"
import NavigationMenuOpenOnClickDemo from "@isbatak/compositions/ds/vue/navigation-menu/open-on-click"

const meta = {
  title: "DS/Navigation menu",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(NavigationMenuDemo) }),
}

export const WithoutViewport: Story = {
  render: () => ({ setup: () => () => h(NavigationMenuWithoutViewportDemo) }),
}

export const Controlled: Story = {
  render: () => ({ setup: () => () => h(NavigationMenuControlledDemo) }),
}

export const CurrentLink: Story = {
  render: () => ({ setup: () => () => h(NavigationMenuCurrentLinkDemo) }),
}

export const Vertical: Story = {
  render: () => ({ setup: () => () => h(NavigationMenuVerticalDemo) }),
}

export const OpenOnClick: Story = {
  render: () => ({ setup: () => () => h(NavigationMenuOpenOnClickDemo) }),
}
