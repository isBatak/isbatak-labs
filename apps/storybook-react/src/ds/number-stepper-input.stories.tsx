import type { Meta, StoryObj } from "@storybook/react-vite"
import { NumberStepperInputDemo } from "@isbatak/compositions/ds/react/number-stepper-input/usage"
import { NumberStepperInputDisabledDemo } from "@isbatak/compositions/ds/react/number-stepper-input/disabled"
import { NumberStepperInputInlineLabelDemo } from "@isbatak/compositions/ds/react/number-stepper-input/inline-label"
import { NumberStepperInputMinMaxDemo } from "@isbatak/compositions/ds/react/number-stepper-input/min-max"
import { NumberStepperInputNarrowDemo } from "@isbatak/compositions/ds/react/number-stepper-input/narrow"
import { NumberStepperInputSizesDemo } from "@isbatak/compositions/ds/react/number-stepper-input/sizes"
import { NumberStepperInputVariantsDemo } from "@isbatak/compositions/ds/react/number-stepper-input/variants"

const meta = {
  title: "DS/Number Stepper Input",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <NumberStepperInputDemo />,
}

export const Disabled: Story = {
  render: () => <NumberStepperInputDisabledDemo />,
}

export const InlineLabel: Story = {
  render: () => <NumberStepperInputInlineLabelDemo />,
}

export const MinMax: Story = {
  render: () => <NumberStepperInputMinMaxDemo />,
}

export const Narrow: Story = {
  render: () => <NumberStepperInputNarrowDemo />,
}

export const Sizes: Story = {
  render: () => <NumberStepperInputSizesDemo />,
}

export const Variants: Story = {
  render: () => <NumberStepperInputVariantsDemo />,
}
