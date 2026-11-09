import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import CollapsibleDemo from "@isbatak/compositions/ds/vue/collapsible/usage"
import CollapsibleInitialOpenDemo from "@isbatak/compositions/ds/vue/collapsible/initial-open"
import CollapsibleIndicatorDemo from "@isbatak/compositions/ds/vue/collapsible/indicator"
import CollapsiblePartialHeightDemo from "@isbatak/compositions/ds/vue/collapsible/partial-height"
import CollapsibleDisabledDemo from "@isbatak/compositions/ds/vue/collapsible/disabled"
import CollapsibleLazyMountDemo from "@isbatak/compositions/ds/vue/collapsible/lazy-mount"
import CollapsibleControlledDemo from "@isbatak/compositions/ds/vue/collapsible/controlled"

const meta = {
  title: "DS/Collapsible",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(CollapsibleDemo) }),
}

export const InitialOpen: Story = {
  render: () => ({ setup: () => () => h(CollapsibleInitialOpenDemo) }),
}

export const Indicator: Story = {
  render: () => ({ setup: () => () => h(CollapsibleIndicatorDemo) }),
}

export const PartialHeight: Story = {
  render: () => ({ setup: () => () => h(CollapsiblePartialHeightDemo) }),
}

export const Disabled: Story = {
  render: () => ({ setup: () => () => h(CollapsibleDisabledDemo) }),
}

export const LazyMount: Story = {
  render: () => ({ setup: () => () => h(CollapsibleLazyMountDemo) }),
}

export const Controlled: Story = {
  render: () => ({ setup: () => () => h(CollapsibleControlledDemo) }),
}
