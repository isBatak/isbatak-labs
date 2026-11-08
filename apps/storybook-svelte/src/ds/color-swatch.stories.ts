import type { Meta, StoryObj } from "@storybook/svelte-vite"
import ColorSwatchDemo from "@isbatak/compositions/ds/svelte/color-swatch/usage"
import ColorSwatchAlphaDemo from "@isbatak/compositions/ds/svelte/color-swatch/alpha"
import ColorSwatchShapesDemo from "@isbatak/compositions/ds/svelte/color-swatch/shapes"
import ColorSwatchSizesDemo from "@isbatak/compositions/ds/svelte/color-swatch/sizes"

const meta = {
  title: "DS/Color swatch",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof ColorSwatchDemo> = {
  render: () => ({ Component: ColorSwatchDemo }),
}

export const Alpha: StoryObj<typeof ColorSwatchAlphaDemo> = {
  render: () => ({ Component: ColorSwatchAlphaDemo }),
}

export const Shapes: StoryObj<typeof ColorSwatchShapesDemo> = {
  render: () => ({ Component: ColorSwatchShapesDemo }),
}

export const Sizes: StoryObj<typeof ColorSwatchSizesDemo> = {
  render: () => ({ Component: ColorSwatchSizesDemo }),
}
