import type { Meta, StoryObj } from "@storybook/react-vite"
import { NavigationMenuDemo } from "@isbatak/compositions/ds/react/navigation-menu/usage"
import { NavigationMenuWithoutViewportDemo } from "@isbatak/compositions/ds/react/navigation-menu/without-viewport"
import { NavigationMenuControlledDemo } from "@isbatak/compositions/ds/react/navigation-menu/controlled"
import { NavigationMenuCurrentLinkDemo } from "@isbatak/compositions/ds/react/navigation-menu/current-link"
import { NavigationMenuVerticalDemo } from "@isbatak/compositions/ds/react/navigation-menu/vertical"
import { NavigationMenuOpenOnClickDemo } from "@isbatak/compositions/ds/react/navigation-menu/open-on-click"

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
