import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import HeadingDemo from "@isbatak/compositions/ds/vue/heading/usage"
import HeadingAsChildDemo from "@isbatak/compositions/ds/vue/heading/as-child"
import HeadingSizesDemo from "@isbatak/compositions/ds/vue/heading/sizes"
import HeadingWeightsDemo from "@isbatak/compositions/ds/vue/heading/weights"
import HeadingWithHighlightDemo from "@isbatak/compositions/ds/vue/heading/with-highlight"

const meta = {
  title: "DS/Heading",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(HeadingDemo) }),
}

export const AsChild: Story = {
  render: () => ({ setup: () => () => h(HeadingAsChildDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(HeadingSizesDemo) }),
}

export const Weights: Story = {
  render: () => ({ setup: () => () => h(HeadingWeightsDemo) }),
}

export const WithHighlight: Story = {
  render: () => ({ setup: () => () => h(HeadingWithHighlightDemo) }),
}
