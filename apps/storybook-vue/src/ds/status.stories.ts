import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import StatusDemo from "@isbatak/compositions/ds/vue/status/usage"
import StatusSizesDemo from "@isbatak/compositions/ds/vue/status/sizes"
import StatusWithLabelDemo from "@isbatak/compositions/ds/vue/status/with-label"

const meta = {
  title: "DS/Status",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(StatusDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(StatusSizesDemo) }),
}

export const WithLabel: Story = {
  render: () => ({ setup: () => () => h(StatusWithLabelDemo) }),
}
