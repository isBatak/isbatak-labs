import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import NumberStepperInputDemo from "@isbatak/compositions/ds/vue/number-stepper-input/usage"
import NumberStepperInputDisabledDemo from "@isbatak/compositions/ds/vue/number-stepper-input/disabled"
import NumberStepperInputInlineLabelDemo from "@isbatak/compositions/ds/vue/number-stepper-input/inline-label"
import NumberStepperInputMinMaxDemo from "@isbatak/compositions/ds/vue/number-stepper-input/min-max"
import NumberStepperInputNarrowDemo from "@isbatak/compositions/ds/vue/number-stepper-input/narrow"
import NumberStepperInputSizesDemo from "@isbatak/compositions/ds/vue/number-stepper-input/sizes"
import NumberStepperInputVariantsDemo from "@isbatak/compositions/ds/vue/number-stepper-input/variants"

const meta = {
  title: "DS/Number Stepper Input",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(NumberStepperInputDemo) }),
}

export const Disabled: Story = {
  render: () => ({ setup: () => () => h(NumberStepperInputDisabledDemo) }),
}

export const InlineLabel: Story = {
  render: () => ({ setup: () => () => h(NumberStepperInputInlineLabelDemo) }),
}

export const MinMax: Story = {
  render: () => ({ setup: () => () => h(NumberStepperInputMinMaxDemo) }),
}

export const Narrow: Story = {
  render: () => ({ setup: () => () => h(NumberStepperInputNarrowDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(NumberStepperInputSizesDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(NumberStepperInputVariantsDemo) }),
}
