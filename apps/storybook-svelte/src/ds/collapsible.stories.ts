import type { Meta, StoryObj } from "@storybook/svelte-vite"
import CollapsibleDemo from "@isbatak/compositions/ds/svelte/collapsible/usage"
import CollapsibleInitialOpenDemo from "@isbatak/compositions/ds/svelte/collapsible/initial-open"
import CollapsibleIndicatorDemo from "@isbatak/compositions/ds/svelte/collapsible/indicator"
import CollapsiblePartialHeightDemo from "@isbatak/compositions/ds/svelte/collapsible/partial-height"
import CollapsibleDisabledDemo from "@isbatak/compositions/ds/svelte/collapsible/disabled"
import CollapsibleLazyMountDemo from "@isbatak/compositions/ds/svelte/collapsible/lazy-mount"
import CollapsibleControlledDemo from "@isbatak/compositions/ds/svelte/collapsible/controlled"

const meta = {
  title: "DS/Collapsible",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof CollapsibleDemo> = {
  render: () => ({ Component: CollapsibleDemo }),
}

export const InitialOpen: StoryObj<typeof CollapsibleInitialOpenDemo> = {
  render: () => ({ Component: CollapsibleInitialOpenDemo }),
}

export const Indicator: StoryObj<typeof CollapsibleIndicatorDemo> = {
  render: () => ({ Component: CollapsibleIndicatorDemo }),
}

export const PartialHeight: StoryObj<typeof CollapsiblePartialHeightDemo> = {
  render: () => ({ Component: CollapsiblePartialHeightDemo }),
}

export const Disabled: StoryObj<typeof CollapsibleDisabledDemo> = {
  render: () => ({ Component: CollapsibleDisabledDemo }),
}

export const LazyMount: StoryObj<typeof CollapsibleLazyMountDemo> = {
  render: () => ({ Component: CollapsibleLazyMountDemo }),
}

export const Controlled: StoryObj<typeof CollapsibleControlledDemo> = {
  render: () => ({ Component: CollapsibleControlledDemo }),
}
