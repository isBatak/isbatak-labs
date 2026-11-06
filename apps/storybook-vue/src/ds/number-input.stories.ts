import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import NumberInputDemo from "@isbatak/compositions/ds/vue/number-input/usage"
import NumberInputDisabledDemo from "@isbatak/compositions/ds/vue/number-input/disabled"
import NumberInputFormatDemo from "@isbatak/compositions/ds/vue/number-input/format"
import NumberInputInvalidDemo from "@isbatak/compositions/ds/vue/number-input/invalid"
import NumberInputMinMaxDemo from "@isbatak/compositions/ds/vue/number-input/min-max"
import NumberInputMouseWheelDemo from "@isbatak/compositions/ds/vue/number-input/mouse-wheel"
import NumberInputSizesDemo from "@isbatak/compositions/ds/vue/number-input/sizes"
import NumberInputStepDemo from "@isbatak/compositions/ds/vue/number-input/step"
import NumberInputVariantsDemo from "@isbatak/compositions/ds/vue/number-input/variants"

const meta = {
  title: "DS/Number Input",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(NumberInputDemo) }),
}

export const Disabled: Story = {
  render: () => ({ setup: () => () => h(NumberInputDisabledDemo) }),
}

export const Format: Story = {
  render: () => ({ setup: () => () => h(NumberInputFormatDemo) }),
}

export const Invalid: Story = {
  render: () => ({ setup: () => () => h(NumberInputInvalidDemo) }),
}

export const MinMax: Story = {
  render: () => ({ setup: () => () => h(NumberInputMinMaxDemo) }),
}

export const MouseWheel: Story = {
  render: () => ({ setup: () => () => h(NumberInputMouseWheelDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(NumberInputSizesDemo) }),
}

export const Step: Story = {
  render: () => ({ setup: () => () => h(NumberInputStepDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(NumberInputVariantsDemo) }),
}
