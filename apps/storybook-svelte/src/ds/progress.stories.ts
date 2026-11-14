import type { Meta, StoryObj } from "@storybook/svelte-vite"
import ProgressDemo from "@isbatak/compositions/ds/svelte/progress/usage"
import ProgressSizesDemo from "@isbatak/compositions/ds/svelte/progress/sizes"
import ProgressVariantsDemo from "@isbatak/compositions/ds/svelte/progress/variants"
import ProgressShapesDemo from "@isbatak/compositions/ds/svelte/progress/shapes"
import ProgressStripedDemo from "@isbatak/compositions/ds/svelte/progress/striped"
import ProgressWithLabelDemo from "@isbatak/compositions/ds/svelte/progress/with-label"
import ProgressWithValueTextDemo from "@isbatak/compositions/ds/svelte/progress/with-value-text"
import ProgressIndeterminateDemo from "@isbatak/compositions/ds/svelte/progress/indeterminate"
import ProgressColorsDemo from "@isbatak/compositions/ds/svelte/progress/colors"

const meta = {
  title: "DS/Progress",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof ProgressDemo> = {
  render: () => ({ Component: ProgressDemo }),
}

export const Sizes: StoryObj<typeof ProgressSizesDemo> = {
  render: () => ({ Component: ProgressSizesDemo }),
}

export const Variants: StoryObj<typeof ProgressVariantsDemo> = {
  render: () => ({ Component: ProgressVariantsDemo }),
}

export const Shapes: StoryObj<typeof ProgressShapesDemo> = {
  render: () => ({ Component: ProgressShapesDemo }),
}

export const Striped: StoryObj<typeof ProgressStripedDemo> = {
  render: () => ({ Component: ProgressStripedDemo }),
}

export const WithLabel: StoryObj<typeof ProgressWithLabelDemo> = {
  render: () => ({ Component: ProgressWithLabelDemo }),
}

export const WithValueText: StoryObj<typeof ProgressWithValueTextDemo> = {
  render: () => ({ Component: ProgressWithValueTextDemo }),
}

export const Indeterminate: StoryObj<typeof ProgressIndeterminateDemo> = {
  render: () => ({ Component: ProgressIndeterminateDemo }),
}

export const Colors: StoryObj<typeof ProgressColorsDemo> = {
  render: () => ({ Component: ProgressColorsDemo }),
}
