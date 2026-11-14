import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { ProgressCircleDemo } from "@isbatak/compositions/ds/solid/progress-circle/usage"
import { ProgressCircleSizesDemo } from "@isbatak/compositions/ds/solid/progress-circle/sizes"
import { ProgressCircleRoundDemo } from "@isbatak/compositions/ds/solid/progress-circle/round"
import { ProgressCircleColorsDemo } from "@isbatak/compositions/ds/solid/progress-circle/colors"
import { ProgressCircleWithValueTextDemo } from "@isbatak/compositions/ds/solid/progress-circle/with-value-text"
import { ProgressCircleWithLabelDemo } from "@isbatak/compositions/ds/solid/progress-circle/with-label"
import { ProgressCircleIndeterminateDemo } from "@isbatak/compositions/ds/solid/progress-circle/indeterminate"

const meta = {
  title: "DS/Progress Circle",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <ProgressCircleDemo />,
}

export const Sizes: Story = {
  render: () => <ProgressCircleSizesDemo />,
}

export const Round: Story = {
  render: () => <ProgressCircleRoundDemo />,
}

export const Colors: Story = {
  render: () => <ProgressCircleColorsDemo />,
}

export const WithValueText: Story = {
  render: () => <ProgressCircleWithValueTextDemo />,
}

export const WithLabel: Story = {
  render: () => <ProgressCircleWithLabelDemo />,
}

export const Indeterminate: Story = {
  render: () => <ProgressCircleIndeterminateDemo />,
}
