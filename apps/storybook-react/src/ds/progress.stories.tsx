import type { Meta, StoryObj } from "@storybook/react-vite"
import { ProgressDemo } from "@isbatak/compositions/ds/react/progress/usage"
import { ProgressSizesDemo } from "@isbatak/compositions/ds/react/progress/sizes"
import { ProgressVariantsDemo } from "@isbatak/compositions/ds/react/progress/variants"
import { ProgressShapesDemo } from "@isbatak/compositions/ds/react/progress/shapes"
import { ProgressStripedDemo } from "@isbatak/compositions/ds/react/progress/striped"
import { ProgressWithLabelDemo } from "@isbatak/compositions/ds/react/progress/with-label"
import { ProgressWithValueTextDemo } from "@isbatak/compositions/ds/react/progress/with-value-text"
import { ProgressIndeterminateDemo } from "@isbatak/compositions/ds/react/progress/indeterminate"
import { ProgressColorsDemo } from "@isbatak/compositions/ds/react/progress/colors"

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
