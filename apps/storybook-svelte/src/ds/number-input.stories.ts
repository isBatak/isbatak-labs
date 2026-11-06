import type { Meta, StoryObj } from "@storybook/svelte-vite"
import NumberInputDemo from "@isbatak/compositions/ds/svelte/number-input/usage"
import NumberInputDisabledDemo from "@isbatak/compositions/ds/svelte/number-input/disabled"
import NumberInputFormatDemo from "@isbatak/compositions/ds/svelte/number-input/format"
import NumberInputInvalidDemo from "@isbatak/compositions/ds/svelte/number-input/invalid"
import NumberInputMinMaxDemo from "@isbatak/compositions/ds/svelte/number-input/min-max"
import NumberInputMouseWheelDemo from "@isbatak/compositions/ds/svelte/number-input/mouse-wheel"
import NumberInputSizesDemo from "@isbatak/compositions/ds/svelte/number-input/sizes"
import NumberInputStepDemo from "@isbatak/compositions/ds/svelte/number-input/step"
import NumberInputVariantsDemo from "@isbatak/compositions/ds/svelte/number-input/variants"

const meta = {
  title: "DS/Number Input",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof NumberInputDemo> = {
  render: () => ({ Component: NumberInputDemo }),
}

export const Disabled: StoryObj<typeof NumberInputDisabledDemo> = {
  render: () => ({ Component: NumberInputDisabledDemo }),
}

export const Format: StoryObj<typeof NumberInputFormatDemo> = {
  render: () => ({ Component: NumberInputFormatDemo }),
}

export const Invalid: StoryObj<typeof NumberInputInvalidDemo> = {
  render: () => ({ Component: NumberInputInvalidDemo }),
}

export const MinMax: StoryObj<typeof NumberInputMinMaxDemo> = {
  render: () => ({ Component: NumberInputMinMaxDemo }),
}

export const MouseWheel: StoryObj<typeof NumberInputMouseWheelDemo> = {
  render: () => ({ Component: NumberInputMouseWheelDemo }),
}

export const Sizes: StoryObj<typeof NumberInputSizesDemo> = {
  render: () => ({ Component: NumberInputSizesDemo }),
}

export const Step: StoryObj<typeof NumberInputStepDemo> = {
  render: () => ({ Component: NumberInputStepDemo }),
}

export const Variants: StoryObj<typeof NumberInputVariantsDemo> = {
  render: () => ({ Component: NumberInputVariantsDemo }),
}
