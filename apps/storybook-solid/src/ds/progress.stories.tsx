import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { ProgressDemo } from "@isbatak/compositions/ds/solid/progress/usage"
import { ProgressSizesDemo } from "@isbatak/compositions/ds/solid/progress/sizes"
import { ProgressVariantsDemo } from "@isbatak/compositions/ds/solid/progress/variants"
import { ProgressShapesDemo } from "@isbatak/compositions/ds/solid/progress/shapes"
import { ProgressStripedDemo } from "@isbatak/compositions/ds/solid/progress/striped"
import { ProgressWithLabelDemo } from "@isbatak/compositions/ds/solid/progress/with-label"
import { ProgressWithValueTextDemo } from "@isbatak/compositions/ds/solid/progress/with-value-text"
import { ProgressIndeterminateDemo } from "@isbatak/compositions/ds/solid/progress/indeterminate"
import { ProgressColorsDemo } from "@isbatak/compositions/ds/solid/progress/colors"

const meta = {
  title: "DS/Progress",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <ProgressDemo />,
}

export const Sizes: Story = {
  render: () => <ProgressSizesDemo />,
}

export const Variants: Story = {
  render: () => <ProgressVariantsDemo />,
}

export const Shapes: Story = {
  render: () => <ProgressShapesDemo />,
}

export const Striped: Story = {
  render: () => <ProgressStripedDemo />,
}

export const WithLabel: Story = {
  render: () => <ProgressWithLabelDemo />,
}

export const WithValueText: Story = {
  render: () => <ProgressWithValueTextDemo />,
}

export const Indeterminate: Story = {
  render: () => <ProgressIndeterminateDemo />,
}

export const Colors: Story = {
  render: () => <ProgressColorsDemo />,
}
