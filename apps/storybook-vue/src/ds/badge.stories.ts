import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import BadgeDemo from "@isbatak/compositions/ds/vue/badge/usage"
import BadgeColorsDemo from "@isbatak/compositions/ds/vue/badge/colors"
import BadgeSizesDemo from "@isbatak/compositions/ds/vue/badge/sizes"
import BadgeStatusDemo from "@isbatak/compositions/ds/vue/badge/status"
import BadgeVariantsDemo from "@isbatak/compositions/ds/vue/badge/variants"
import BadgeWithIconDemo from "@isbatak/compositions/ds/vue/badge/with-icon"
import BadgeWithGroupDemo from "@isbatak/compositions/ds/vue/badge/with-group"

const meta = {
  title: "DS/Badge",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(BadgeDemo) }),
}

export const Colors: Story = {
  render: () => ({ setup: () => () => h(BadgeColorsDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(BadgeSizesDemo) }),
}

export const Status: Story = {
  render: () => ({ setup: () => () => h(BadgeStatusDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(BadgeVariantsDemo) }),
}

export const WithIcon: Story = {
  render: () => ({ setup: () => () => h(BadgeWithIconDemo) }),
}

export const WithGroup: Story = {
  render: () => ({ setup: () => () => h(BadgeWithGroupDemo) }),
}
