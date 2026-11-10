import type { Meta, StoryObj } from "@storybook/react-vite"
import { CollapsibleDemo } from "@isbatak/compositions/ds/react/collapsible/usage"
import { CollapsibleInitialOpenDemo } from "@isbatak/compositions/ds/react/collapsible/initial-open"
import { CollapsibleIndicatorDemo } from "@isbatak/compositions/ds/react/collapsible/indicator"
import { CollapsiblePartialHeightDemo } from "@isbatak/compositions/ds/react/collapsible/partial-height"
import { CollapsibleDisabledDemo } from "@isbatak/compositions/ds/react/collapsible/disabled"
import { CollapsibleLazyMountDemo } from "@isbatak/compositions/ds/react/collapsible/lazy-mount"
import { CollapsibleControlledDemo } from "@isbatak/compositions/ds/react/collapsible/controlled"

const meta = {
  title: "DS/Collapsible",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <CollapsibleDemo />,
}

export const InitialOpen: Story = {
  render: () => <CollapsibleInitialOpenDemo />,
}

export const Indicator: Story = {
  render: () => <CollapsibleIndicatorDemo />,
}

export const PartialHeight: Story = {
  render: () => <CollapsiblePartialHeightDemo />,
}

export const Disabled: Story = {
  render: () => <CollapsibleDisabledDemo />,
}

export const LazyMount: Story = {
  render: () => <CollapsibleLazyMountDemo />,
}

export const Controlled: Story = {
  render: () => <CollapsibleControlledDemo />,
}
