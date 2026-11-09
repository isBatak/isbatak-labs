import type { Meta, StoryObj } from "@storybook/svelte-vite"
import TooltipDemo from "@isbatak/compositions/ds/svelte/tooltip/usage"
import TooltipControlledDemo from "@isbatak/compositions/ds/svelte/tooltip/controlled"
import TooltipDelayDemo from "@isbatak/compositions/ds/svelte/tooltip/delay"
import TooltipDisabledDemo from "@isbatak/compositions/ds/svelte/tooltip/disabled"
import TooltipInteractiveDemo from "@isbatak/compositions/ds/svelte/tooltip/interactive"
import TooltipPlacementDemo from "@isbatak/compositions/ds/svelte/tooltip/placement"
import TooltipSizesDemo from "@isbatak/compositions/ds/svelte/tooltip/sizes"

const meta = {
  title: "DS/Tooltip",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof TooltipDemo> = {
  render: () => ({ Component: TooltipDemo }),
}

export const Controlled: StoryObj<typeof TooltipControlledDemo> = {
  render: () => ({ Component: TooltipControlledDemo }),
}

export const Delay: StoryObj<typeof TooltipDelayDemo> = {
  render: () => ({ Component: TooltipDelayDemo }),
}

export const Disabled: StoryObj<typeof TooltipDisabledDemo> = {
  render: () => ({ Component: TooltipDisabledDemo }),
}

export const Interactive: StoryObj<typeof TooltipInteractiveDemo> = {
  render: () => ({ Component: TooltipInteractiveDemo }),
}

export const Placement: StoryObj<typeof TooltipPlacementDemo> = {
  render: () => ({ Component: TooltipPlacementDemo }),
}

export const Sizes: StoryObj<typeof TooltipSizesDemo> = {
  render: () => ({ Component: TooltipSizesDemo }),
}
