import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { NumberInputDemo } from "@isbatak/compositions/ds/solid/number-input/usage"
import { NumberInputDisabledDemo } from "@isbatak/compositions/ds/solid/number-input/disabled"
import { NumberInputFormatDemo } from "@isbatak/compositions/ds/solid/number-input/format"
import { NumberInputInvalidDemo } from "@isbatak/compositions/ds/solid/number-input/invalid"
import { NumberInputMinMaxDemo } from "@isbatak/compositions/ds/solid/number-input/min-max"
import { NumberInputMouseWheelDemo } from "@isbatak/compositions/ds/solid/number-input/mouse-wheel"
import { NumberInputSizesDemo } from "@isbatak/compositions/ds/solid/number-input/sizes"
import { NumberInputStepDemo } from "@isbatak/compositions/ds/solid/number-input/step"
import { NumberInputVariantsDemo } from "@isbatak/compositions/ds/solid/number-input/variants"

const meta = {
  title: "DS/Number Input",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <NumberInputDemo />,
}

export const Disabled: Story = {
  render: () => <NumberInputDisabledDemo />,
}

export const Format: Story = {
  render: () => <NumberInputFormatDemo />,
}

export const Invalid: Story = {
  render: () => <NumberInputInvalidDemo />,
}

export const MinMax: Story = {
  render: () => <NumberInputMinMaxDemo />,
}

export const MouseWheel: Story = {
  render: () => <NumberInputMouseWheelDemo />,
}

export const Sizes: Story = {
  render: () => <NumberInputSizesDemo />,
}

export const Step: Story = {
  render: () => <NumberInputStepDemo />,
}

export const Variants: Story = {
  render: () => <NumberInputVariantsDemo />,
}
