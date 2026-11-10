import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { NavigationMenuDemo } from "@isbatak/compositions/ds/solid/navigation-menu/usage"
import { NavigationMenuWithoutViewportDemo } from "@isbatak/compositions/ds/solid/navigation-menu/without-viewport"
import { NavigationMenuControlledDemo } from "@isbatak/compositions/ds/solid/navigation-menu/controlled"
import { NavigationMenuCurrentLinkDemo } from "@isbatak/compositions/ds/solid/navigation-menu/current-link"
import { NavigationMenuVerticalDemo } from "@isbatak/compositions/ds/solid/navigation-menu/vertical"
import { NavigationMenuOpenOnClickDemo } from "@isbatak/compositions/ds/solid/navigation-menu/open-on-click"

const meta = {
  title: "DS/Navigation menu",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <NavigationMenuDemo />,
}

export const WithoutViewport: Story = {
  render: () => <NavigationMenuWithoutViewportDemo />,
}

export const Controlled: Story = {
  render: () => <NavigationMenuControlledDemo />,
}

export const CurrentLink: Story = {
  render: () => <NavigationMenuCurrentLinkDemo />,
}

export const Vertical: Story = {
  render: () => <NavigationMenuVerticalDemo />,
}

export const OpenOnClick: Story = {
  render: () => <NavigationMenuOpenOnClickDemo />,
}
