import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import ProgressDemo from "@isbatak/compositions/ds/vue/progress/usage"
import ProgressSizesDemo from "@isbatak/compositions/ds/vue/progress/sizes"
import ProgressVariantsDemo from "@isbatak/compositions/ds/vue/progress/variants"
import ProgressShapesDemo from "@isbatak/compositions/ds/vue/progress/shapes"
import ProgressStripedDemo from "@isbatak/compositions/ds/vue/progress/striped"
import ProgressWithLabelDemo from "@isbatak/compositions/ds/vue/progress/with-label"
import ProgressWithValueTextDemo from "@isbatak/compositions/ds/vue/progress/with-value-text"
import ProgressIndeterminateDemo from "@isbatak/compositions/ds/vue/progress/indeterminate"
import ProgressColorsDemo from "@isbatak/compositions/ds/vue/progress/colors"

const meta = {
  title: "DS/Progress",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(ProgressDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(ProgressSizesDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(ProgressVariantsDemo) }),
}

export const Shapes: Story = {
  render: () => ({ setup: () => () => h(ProgressShapesDemo) }),
}

export const Striped: Story = {
  render: () => ({ setup: () => () => h(ProgressStripedDemo) }),
}

export const WithLabel: Story = {
  render: () => ({ setup: () => () => h(ProgressWithLabelDemo) }),
}

export const WithValueText: Story = {
  render: () => ({ setup: () => () => h(ProgressWithValueTextDemo) }),
}

export const Indeterminate: Story = {
  render: () => ({ setup: () => () => h(ProgressIndeterminateDemo) }),
}

export const Colors: Story = {
  render: () => ({ setup: () => () => h(ProgressColorsDemo) }),
}
