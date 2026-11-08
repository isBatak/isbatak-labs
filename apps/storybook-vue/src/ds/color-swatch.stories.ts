import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import ColorSwatchDemo from "@isbatak/compositions/ds/vue/color-swatch/usage"
import ColorSwatchAlphaDemo from "@isbatak/compositions/ds/vue/color-swatch/alpha"
import ColorSwatchShapesDemo from "@isbatak/compositions/ds/vue/color-swatch/shapes"
import ColorSwatchSizesDemo from "@isbatak/compositions/ds/vue/color-swatch/sizes"

const meta = {
  title: "DS/Color swatch",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(ColorSwatchDemo) }),
}

export const Alpha: Story = {
  render: () => ({ setup: () => () => h(ColorSwatchAlphaDemo) }),
}

export const Shapes: Story = {
  render: () => ({ setup: () => () => h(ColorSwatchShapesDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(ColorSwatchSizesDemo) }),
}
