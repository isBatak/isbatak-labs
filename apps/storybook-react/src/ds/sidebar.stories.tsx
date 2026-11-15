import type { Meta, StoryObj } from "@storybook/react-vite"
import { SidebarDemo } from "@isbatak/compositions/ds/react/sidebar/usage"
import { SidebarSizesDemo } from "@isbatak/compositions/ds/react/sidebar/sizes"
import { SidebarSubtleDemo } from "@isbatak/compositions/ds/react/sidebar/subtle"
import { SidebarCompactDemo } from "@isbatak/compositions/ds/react/sidebar/compact"
import { SidebarIndicatorDemo } from "@isbatak/compositions/ds/react/sidebar/indicator"

const meta = {
  title: "DS/Sidebar",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <SidebarDemo />,
}

export const Sizes: Story = {
  render: () => <SidebarSizesDemo />,
}

export const Subtle: Story = {
  render: () => <SidebarSubtleDemo />,
}

export const Compact: Story = {
  render: () => <SidebarCompactDemo />,
}

export const Indicator: Story = {
  render: () => <SidebarIndicatorDemo />,
}
