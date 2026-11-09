import type { Meta, StoryObj } from "@storybook/react-vite"
import { TooltipDemo } from "@isbatak/compositions/ds/react/tooltip/usage"
import { TooltipControlledDemo } from "@isbatak/compositions/ds/react/tooltip/controlled"
import { TooltipDelayDemo } from "@isbatak/compositions/ds/react/tooltip/delay"
import { TooltipDisabledDemo } from "@isbatak/compositions/ds/react/tooltip/disabled"
import { TooltipInteractiveDemo } from "@isbatak/compositions/ds/react/tooltip/interactive"
import { TooltipPlacementDemo } from "@isbatak/compositions/ds/react/tooltip/placement"
import { TooltipSizesDemo } from "@isbatak/compositions/ds/react/tooltip/sizes"

const meta = {
  title: "DS/Tooltip",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <TooltipDemo />,
}

export const Controlled: Story = {
  render: () => <TooltipControlledDemo />,
}

export const Delay: Story = {
  render: () => <TooltipDelayDemo />,
}

export const Disabled: Story = {
  render: () => <TooltipDisabledDemo />,
}

export const Interactive: Story = {
  render: () => <TooltipInteractiveDemo />,
}

export const Placement: Story = {
  render: () => <TooltipPlacementDemo />,
}

export const Sizes: Story = {
  render: () => <TooltipSizesDemo />,
}
