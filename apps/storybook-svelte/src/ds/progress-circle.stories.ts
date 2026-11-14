import type { Meta, StoryObj } from "@storybook/svelte-vite"
import ProgressCircleDemo from "@isbatak/compositions/ds/svelte/progress-circle/usage"
import ProgressCircleSizesDemo from "@isbatak/compositions/ds/svelte/progress-circle/sizes"
import ProgressCircleRoundDemo from "@isbatak/compositions/ds/svelte/progress-circle/round"
import ProgressCircleColorsDemo from "@isbatak/compositions/ds/svelte/progress-circle/colors"
import ProgressCircleWithValueTextDemo from "@isbatak/compositions/ds/svelte/progress-circle/with-value-text"
import ProgressCircleWithLabelDemo from "@isbatak/compositions/ds/svelte/progress-circle/with-label"
import ProgressCircleIndeterminateDemo from "@isbatak/compositions/ds/svelte/progress-circle/indeterminate"

const meta = {
  title: "DS/Progress Circle",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof ProgressCircleDemo> = {
  render: () => ({ Component: ProgressCircleDemo }),
}

export const Sizes: StoryObj<typeof ProgressCircleSizesDemo> = {
  render: () => ({ Component: ProgressCircleSizesDemo }),
}

export const Round: StoryObj<typeof ProgressCircleRoundDemo> = {
  render: () => ({ Component: ProgressCircleRoundDemo }),
}

export const Colors: StoryObj<typeof ProgressCircleColorsDemo> = {
  render: () => ({ Component: ProgressCircleColorsDemo }),
}

export const WithValueText: StoryObj<typeof ProgressCircleWithValueTextDemo> = {
  render: () => ({ Component: ProgressCircleWithValueTextDemo }),
}

export const WithLabel: StoryObj<typeof ProgressCircleWithLabelDemo> = {
  render: () => ({ Component: ProgressCircleWithLabelDemo }),
}

export const Indeterminate: StoryObj<typeof ProgressCircleIndeterminateDemo> = {
  render: () => ({ Component: ProgressCircleIndeterminateDemo }),
}
