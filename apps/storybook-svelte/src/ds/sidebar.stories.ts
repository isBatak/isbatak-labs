import type { Meta, StoryObj } from "@storybook/svelte-vite"
import SidebarDemo from "@isbatak/compositions/ds/svelte/sidebar/usage"
import SidebarSizesDemo from "@isbatak/compositions/ds/svelte/sidebar/sizes"
import SidebarSubtleDemo from "@isbatak/compositions/ds/svelte/sidebar/subtle"
import SidebarCompactDemo from "@isbatak/compositions/ds/svelte/sidebar/compact"
import SidebarIndicatorDemo from "@isbatak/compositions/ds/svelte/sidebar/indicator"

const meta = {
  title: "DS/Sidebar",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof SidebarDemo> = {
  render: () => ({ Component: SidebarDemo }),
}

export const Sizes: StoryObj<typeof SidebarSizesDemo> = {
  render: () => ({ Component: SidebarSizesDemo }),
}

export const Subtle: StoryObj<typeof SidebarSubtleDemo> = {
  render: () => ({ Component: SidebarSubtleDemo }),
}

export const Compact: StoryObj<typeof SidebarCompactDemo> = {
  render: () => ({ Component: SidebarCompactDemo }),
}

export const Indicator: StoryObj<typeof SidebarIndicatorDemo> = {
  render: () => ({ Component: SidebarIndicatorDemo }),
}
