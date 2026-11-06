import type { Meta, StoryObj } from "@storybook/svelte-vite"
import NumberStepperInputDemo from "@isbatak/compositions/ds/svelte/number-stepper-input/usage"
import NumberStepperInputDisabledDemo from "@isbatak/compositions/ds/svelte/number-stepper-input/disabled"
import NumberStepperInputInlineLabelDemo from "@isbatak/compositions/ds/svelte/number-stepper-input/inline-label"
import NumberStepperInputMinMaxDemo from "@isbatak/compositions/ds/svelte/number-stepper-input/min-max"
import NumberStepperInputNarrowDemo from "@isbatak/compositions/ds/svelte/number-stepper-input/narrow"
import NumberStepperInputSizesDemo from "@isbatak/compositions/ds/svelte/number-stepper-input/sizes"
import NumberStepperInputVariantsDemo from "@isbatak/compositions/ds/svelte/number-stepper-input/variants"

const meta = {
  title: "DS/Number Stepper Input",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof NumberStepperInputDemo> = {
  render: () => ({ Component: NumberStepperInputDemo }),
}

export const Disabled: StoryObj<typeof NumberStepperInputDisabledDemo> = {
  render: () => ({ Component: NumberStepperInputDisabledDemo }),
}

export const InlineLabel: StoryObj<typeof NumberStepperInputInlineLabelDemo> = {
  render: () => ({ Component: NumberStepperInputInlineLabelDemo }),
}

export const MinMax: StoryObj<typeof NumberStepperInputMinMaxDemo> = {
  render: () => ({ Component: NumberStepperInputMinMaxDemo }),
}

export const Narrow: StoryObj<typeof NumberStepperInputNarrowDemo> = {
  render: () => ({ Component: NumberStepperInputNarrowDemo }),
}

export const Sizes: StoryObj<typeof NumberStepperInputSizesDemo> = {
  render: () => ({ Component: NumberStepperInputSizesDemo }),
}

export const Variants: StoryObj<typeof NumberStepperInputVariantsDemo> = {
  render: () => ({ Component: NumberStepperInputVariantsDemo }),
}
