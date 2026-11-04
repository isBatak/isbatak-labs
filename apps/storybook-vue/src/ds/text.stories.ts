import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import TextDemo from "@isbatak/compositions/ds/vue/text/usage"
import TextAsChildDemo from "@isbatak/compositions/ds/vue/text/as-child"
import TextLineClampDemo from "@isbatak/compositions/ds/vue/text/line-clamp"
import TextSizesDemo from "@isbatak/compositions/ds/vue/text/sizes"
import TextTruncateDemo from "@isbatak/compositions/ds/vue/text/truncate"
import TextWeightsDemo from "@isbatak/compositions/ds/vue/text/weights"

const meta = {
  title: "DS/Text",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(TextDemo) }),
}

export const AsChild: Story = {
  render: () => ({ setup: () => () => h(TextAsChildDemo) }),
}

export const LineClamp: Story = {
  render: () => ({ setup: () => () => h(TextLineClampDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(TextSizesDemo) }),
}

export const Truncate: Story = {
  render: () => ({ setup: () => () => h(TextTruncateDemo) }),
}

export const Weights: Story = {
  render: () => ({ setup: () => () => h(TextWeightsDemo) }),
}
