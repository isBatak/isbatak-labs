import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import IconButtonDemo from "@isbatak/compositions/ds/vue/icon-button/usage"
import IconButtonLoadingDemo from "@isbatak/compositions/ds/vue/icon-button/loading"
import IconButtonSizesDemo from "@isbatak/compositions/ds/vue/icon-button/sizes"

const meta = {
  title: "DS/Icon button",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(IconButtonDemo) }),
}

export const Loading: Story = {
  render: () => ({ setup: () => () => h(IconButtonLoadingDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(IconButtonSizesDemo) }),
}
