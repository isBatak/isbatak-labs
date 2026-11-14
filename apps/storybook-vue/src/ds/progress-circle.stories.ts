import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import ProgressCircleDemo from "@isbatak/compositions/ds/vue/progress-circle/usage"
import ProgressCircleSizesDemo from "@isbatak/compositions/ds/vue/progress-circle/sizes"
import ProgressCircleRoundDemo from "@isbatak/compositions/ds/vue/progress-circle/round"
import ProgressCircleColorsDemo from "@isbatak/compositions/ds/vue/progress-circle/colors"
import ProgressCircleWithValueTextDemo from "@isbatak/compositions/ds/vue/progress-circle/with-value-text"
import ProgressCircleWithLabelDemo from "@isbatak/compositions/ds/vue/progress-circle/with-label"
import ProgressCircleIndeterminateDemo from "@isbatak/compositions/ds/vue/progress-circle/indeterminate"

const meta = {
  title: "DS/Progress Circle",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(ProgressCircleDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(ProgressCircleSizesDemo) }),
}

export const Round: Story = {
  render: () => ({ setup: () => () => h(ProgressCircleRoundDemo) }),
}

export const Colors: Story = {
  render: () => ({ setup: () => () => h(ProgressCircleColorsDemo) }),
}

export const WithValueText: Story = {
  render: () => ({ setup: () => () => h(ProgressCircleWithValueTextDemo) }),
}

export const WithLabel: Story = {
  render: () => ({ setup: () => () => h(ProgressCircleWithLabelDemo) }),
}

export const Indeterminate: Story = {
  render: () => ({ setup: () => () => h(ProgressCircleIndeterminateDemo) }),
}
