import type { Meta, StoryObj } from "@storybook/react-vite"
import { HoverCardDemo } from "@isbatak/compositions/ds/react/hover-card/usage"
import { HoverCardControlledDemo } from "@isbatak/compositions/ds/react/hover-card/controlled"
import { HoverCardDelayDemo } from "@isbatak/compositions/ds/react/hover-card/delay"
import { HoverCardPlacementDemo } from "@isbatak/compositions/ds/react/hover-card/placement"
import { HoverCardSizesDemo } from "@isbatak/compositions/ds/react/hover-card/sizes"

const meta = {
  title: "DS/Hover card",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <HoverCardDemo />,
}

export const Controlled: Story = {
  render: () => <HoverCardControlledDemo />,
}

export const Delay: Story = {
  render: () => <HoverCardDelayDemo />,
}

export const Placement: Story = {
  render: () => <HoverCardPlacementDemo />,
}

export const Sizes: Story = {
  render: () => <HoverCardSizesDemo />,
}
