import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import IconDemo from "@isbatak/compositions/ds/vue/icon/usage"
import IconColorDemo from "@isbatak/compositions/ds/vue/icon/color"
import IconSizesDemo from "@isbatak/compositions/ds/vue/icon/sizes"

const meta = {
  title: "DS/Icon",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(IconDemo) }),
}

export const Color: Story = {
  render: () => ({ setup: () => () => h(IconColorDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(IconSizesDemo) }),
}
