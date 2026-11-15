import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import SidebarDemo from "@isbatak/compositions/ds/vue/sidebar/usage"
import SidebarSizesDemo from "@isbatak/compositions/ds/vue/sidebar/sizes"
import SidebarSubtleDemo from "@isbatak/compositions/ds/vue/sidebar/subtle"
import SidebarCompactDemo from "@isbatak/compositions/ds/vue/sidebar/compact"
import SidebarIndicatorDemo from "@isbatak/compositions/ds/vue/sidebar/indicator"

const meta = {
  title: "DS/Sidebar",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(SidebarDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(SidebarSizesDemo) }),
}

export const Subtle: Story = {
  render: () => ({ setup: () => () => h(SidebarSubtleDemo) }),
}

export const Compact: Story = {
  render: () => ({ setup: () => () => h(SidebarCompactDemo) }),
}

export const Indicator: Story = {
  render: () => ({ setup: () => () => h(SidebarIndicatorDemo) }),
}
