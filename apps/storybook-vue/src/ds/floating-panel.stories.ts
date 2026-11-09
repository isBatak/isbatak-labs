import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import FloatingPanelDemo from "@isbatak/compositions/ds/vue/floating-panel/usage"
import FloatingPanelControlledDemo from "@isbatak/compositions/ds/vue/floating-panel/controlled"
import FloatingPanelControlledSizeDemo from "@isbatak/compositions/ds/vue/floating-panel/controlled-size"
import FloatingPanelControlledPositionDemo from "@isbatak/compositions/ds/vue/floating-panel/controlled-position"
import FloatingPanelAnchorPositionDemo from "@isbatak/compositions/ds/vue/floating-panel/anchor-position"
import FloatingPanelMinMaxSizeDemo from "@isbatak/compositions/ds/vue/floating-panel/min-max-size"
import FloatingPanelLockAspectRatioDemo from "@isbatak/compositions/ds/vue/floating-panel/lock-aspect-ratio"
import FloatingPanelStaticDemo from "@isbatak/compositions/ds/vue/floating-panel/static"

const meta = {
  title: "DS/Floating panel",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(FloatingPanelDemo) }),
}

export const Controlled: Story = {
  render: () => ({ setup: () => () => h(FloatingPanelControlledDemo) }),
}

export const ControlledSize: Story = {
  render: () => ({ setup: () => () => h(FloatingPanelControlledSizeDemo) }),
}

export const ControlledPosition: Story = {
  render: () => ({ setup: () => () => h(FloatingPanelControlledPositionDemo) }),
}

export const AnchorPosition: Story = {
  render: () => ({ setup: () => () => h(FloatingPanelAnchorPositionDemo) }),
}

export const MinMaxSize: Story = {
  render: () => ({ setup: () => () => h(FloatingPanelMinMaxSizeDemo) }),
}

export const LockAspectRatio: Story = {
  render: () => ({ setup: () => () => h(FloatingPanelLockAspectRatioDemo) }),
}

export const Static: Story = {
  render: () => ({ setup: () => () => h(FloatingPanelStaticDemo) }),
}
