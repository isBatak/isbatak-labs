import type { Meta, StoryObj } from "@storybook/svelte-vite"
import HoverCardDemo from "@isbatak/compositions/ds/svelte/hover-card/usage"
import HoverCardControlledDemo from "@isbatak/compositions/ds/svelte/hover-card/controlled"
import HoverCardDelayDemo from "@isbatak/compositions/ds/svelte/hover-card/delay"
import HoverCardPlacementDemo from "@isbatak/compositions/ds/svelte/hover-card/placement"
import HoverCardSizesDemo from "@isbatak/compositions/ds/svelte/hover-card/sizes"

const meta = {
  title: "DS/Hover card",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof HoverCardDemo> = {
  render: () => ({ Component: HoverCardDemo }),
}

export const Controlled: StoryObj<typeof HoverCardControlledDemo> = {
  render: () => ({ Component: HoverCardControlledDemo }),
}

export const Delay: StoryObj<typeof HoverCardDelayDemo> = {
  render: () => ({ Component: HoverCardDelayDemo }),
}

export const Placement: StoryObj<typeof HoverCardPlacementDemo> = {
  render: () => ({ Component: HoverCardPlacementDemo }),
}

export const Sizes: StoryObj<typeof HoverCardSizesDemo> = {
  render: () => ({ Component: HoverCardSizesDemo }),
}
