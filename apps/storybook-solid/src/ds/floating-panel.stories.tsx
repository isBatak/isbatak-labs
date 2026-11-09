import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { FloatingPanelDemo } from "@isbatak/compositions/ds/solid/floating-panel/usage"
import { FloatingPanelControlledDemo } from "@isbatak/compositions/ds/solid/floating-panel/controlled"
import { FloatingPanelControlledSizeDemo } from "@isbatak/compositions/ds/solid/floating-panel/controlled-size"
import { FloatingPanelControlledPositionDemo } from "@isbatak/compositions/ds/solid/floating-panel/controlled-position"
import { FloatingPanelAnchorPositionDemo } from "@isbatak/compositions/ds/solid/floating-panel/anchor-position"
import { FloatingPanelMinMaxSizeDemo } from "@isbatak/compositions/ds/solid/floating-panel/min-max-size"
import { FloatingPanelLockAspectRatioDemo } from "@isbatak/compositions/ds/solid/floating-panel/lock-aspect-ratio"
import { FloatingPanelStaticDemo } from "@isbatak/compositions/ds/solid/floating-panel/static"

const meta = {
  title: "DS/Floating panel",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <FloatingPanelDemo />,
}

export const Controlled: Story = {
  render: () => <FloatingPanelControlledDemo />,
}

export const ControlledSize: Story = {
  render: () => <FloatingPanelControlledSizeDemo />,
}

export const ControlledPosition: Story = {
  render: () => <FloatingPanelControlledPositionDemo />,
}

export const AnchorPosition: Story = {
  render: () => <FloatingPanelAnchorPositionDemo />,
}

export const MinMaxSize: Story = {
  render: () => <FloatingPanelMinMaxSizeDemo />,
}

export const LockAspectRatio: Story = {
  render: () => <FloatingPanelLockAspectRatioDemo />,
}

export const Static: Story = {
  render: () => <FloatingPanelStaticDemo />,
}
