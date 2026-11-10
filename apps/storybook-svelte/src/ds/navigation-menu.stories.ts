import type { Meta, StoryObj } from "@storybook/svelte-vite"
import NavigationMenuDemo from "@isbatak/compositions/ds/svelte/navigation-menu/usage"
import NavigationMenuWithoutViewportDemo from "@isbatak/compositions/ds/svelte/navigation-menu/without-viewport"
import NavigationMenuControlledDemo from "@isbatak/compositions/ds/svelte/navigation-menu/controlled"
import NavigationMenuCurrentLinkDemo from "@isbatak/compositions/ds/svelte/navigation-menu/current-link"
import NavigationMenuVerticalDemo from "@isbatak/compositions/ds/svelte/navigation-menu/vertical"
import NavigationMenuOpenOnClickDemo from "@isbatak/compositions/ds/svelte/navigation-menu/open-on-click"

const meta = {
  title: "DS/Navigation menu",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof NavigationMenuDemo> = {
  render: () => ({ Component: NavigationMenuDemo }),
}

export const WithoutViewport: StoryObj<typeof NavigationMenuWithoutViewportDemo> = {
  render: () => ({ Component: NavigationMenuWithoutViewportDemo }),
}

export const Controlled: StoryObj<typeof NavigationMenuControlledDemo> = {
  render: () => ({ Component: NavigationMenuControlledDemo }),
}

export const CurrentLink: StoryObj<typeof NavigationMenuCurrentLinkDemo> = {
  render: () => ({ Component: NavigationMenuCurrentLinkDemo }),
}

export const Vertical: StoryObj<typeof NavigationMenuVerticalDemo> = {
  render: () => ({ Component: NavigationMenuVerticalDemo }),
}

export const OpenOnClick: StoryObj<typeof NavigationMenuOpenOnClickDemo> = {
  render: () => ({ Component: NavigationMenuOpenOnClickDemo }),
}
