import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { ColorSwatchDemo } from "@isbatak/compositions/ds/solid/color-swatch/usage"
import { ColorSwatchAlphaDemo } from "@isbatak/compositions/ds/solid/color-swatch/alpha"
import { ColorSwatchShapesDemo } from "@isbatak/compositions/ds/solid/color-swatch/shapes"
import { ColorSwatchSizesDemo } from "@isbatak/compositions/ds/solid/color-swatch/sizes"

const meta = {
  title: "DS/Color swatch",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <ColorSwatchDemo />,
}

export const Alpha: Story = {
  render: () => <ColorSwatchAlphaDemo />,
}

export const Shapes: Story = {
  render: () => <ColorSwatchShapesDemo />,
}

export const Sizes: Story = {
  render: () => <ColorSwatchSizesDemo />,
}
