import type { Meta, StoryObj } from "@storybook/svelte-vite"
import FloatingPanelDemo from "@isbatak/compositions/ds/svelte/floating-panel/usage"
import FloatingPanelControlledDemo from "@isbatak/compositions/ds/svelte/floating-panel/controlled"
import FloatingPanelControlledSizeDemo from "@isbatak/compositions/ds/svelte/floating-panel/controlled-size"
import FloatingPanelControlledPositionDemo from "@isbatak/compositions/ds/svelte/floating-panel/controlled-position"
import FloatingPanelAnchorPositionDemo from "@isbatak/compositions/ds/svelte/floating-panel/anchor-position"
import FloatingPanelMinMaxSizeDemo from "@isbatak/compositions/ds/svelte/floating-panel/min-max-size"
import FloatingPanelLockAspectRatioDemo from "@isbatak/compositions/ds/svelte/floating-panel/lock-aspect-ratio"
import FloatingPanelStaticDemo from "@isbatak/compositions/ds/svelte/floating-panel/static"

const meta = {
  title: "DS/Floating panel",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof FloatingPanelDemo> = {
  render: () => ({ Component: FloatingPanelDemo }),
}

export const Controlled: StoryObj<typeof FloatingPanelControlledDemo> = {
  render: () => ({ Component: FloatingPanelControlledDemo }),
}

export const ControlledSize: StoryObj<typeof FloatingPanelControlledSizeDemo> = {
  render: () => ({ Component: FloatingPanelControlledSizeDemo }),
}

export const ControlledPosition: StoryObj<typeof FloatingPanelControlledPositionDemo> = {
  render: () => ({ Component: FloatingPanelControlledPositionDemo }),
}

export const AnchorPosition: StoryObj<typeof FloatingPanelAnchorPositionDemo> = {
  render: () => ({ Component: FloatingPanelAnchorPositionDemo }),
}

export const MinMaxSize: StoryObj<typeof FloatingPanelMinMaxSizeDemo> = {
  render: () => ({ Component: FloatingPanelMinMaxSizeDemo }),
}

export const LockAspectRatio: StoryObj<typeof FloatingPanelLockAspectRatioDemo> = {
  render: () => ({ Component: FloatingPanelLockAspectRatioDemo }),
}

export const Static: StoryObj<typeof FloatingPanelStaticDemo> = {
  render: () => ({ Component: FloatingPanelStaticDemo }),
}
