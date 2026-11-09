import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import TooltipDemo from "@isbatak/compositions/ds/vue/tooltip/usage"
import TooltipControlledDemo from "@isbatak/compositions/ds/vue/tooltip/controlled"
import TooltipDelayDemo from "@isbatak/compositions/ds/vue/tooltip/delay"
import TooltipDisabledDemo from "@isbatak/compositions/ds/vue/tooltip/disabled"
import TooltipInteractiveDemo from "@isbatak/compositions/ds/vue/tooltip/interactive"
import TooltipPlacementDemo from "@isbatak/compositions/ds/vue/tooltip/placement"
import TooltipSizesDemo from "@isbatak/compositions/ds/vue/tooltip/sizes"

const meta = {
  title: "DS/Tooltip",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(TooltipDemo) }),
}

export const Controlled: Story = {
  render: () => ({ setup: () => () => h(TooltipControlledDemo) }),
}

export const Delay: Story = {
  render: () => ({ setup: () => () => h(TooltipDelayDemo) }),
}

export const Disabled: Story = {
  render: () => ({ setup: () => () => h(TooltipDisabledDemo) }),
}

export const Interactive: Story = {
  render: () => ({ setup: () => () => h(TooltipInteractiveDemo) }),
}

export const Placement: Story = {
  render: () => ({ setup: () => () => h(TooltipPlacementDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(TooltipSizesDemo) }),
}
