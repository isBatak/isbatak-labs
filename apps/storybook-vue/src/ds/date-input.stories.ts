import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import DateInputDemo from "@isbatak/compositions/ds/vue/date-input/usage"
import DateInputControlledDemo from "@isbatak/compositions/ds/vue/date-input/controlled"
import DateInputDateTimeDemo from "@isbatak/compositions/ds/vue/date-input/date-time"
import DateInputDisabledDemo from "@isbatak/compositions/ds/vue/date-input/disabled"
import DateInputInvalidDemo from "@isbatak/compositions/ds/vue/date-input/invalid"
import DateInputLocaleDemo from "@isbatak/compositions/ds/vue/date-input/locale"
import DateInputRangeDemo from "@isbatak/compositions/ds/vue/date-input/range"
import DateInputSizesDemo from "@isbatak/compositions/ds/vue/date-input/sizes"
import DateInputVariantsDemo from "@isbatak/compositions/ds/vue/date-input/variants"

const meta = {
  title: "DS/Date input",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(DateInputDemo) }),
}

export const Controlled: Story = {
  render: () => ({ setup: () => () => h(DateInputControlledDemo) }),
}

export const DateTime: Story = {
  render: () => ({ setup: () => () => h(DateInputDateTimeDemo) }),
}

export const Disabled: Story = {
  render: () => ({ setup: () => () => h(DateInputDisabledDemo) }),
}

export const Invalid: Story = {
  render: () => ({ setup: () => () => h(DateInputInvalidDemo) }),
}

export const Locale: Story = {
  render: () => ({ setup: () => () => h(DateInputLocaleDemo) }),
}

export const Range: Story = {
  render: () => ({ setup: () => () => h(DateInputRangeDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(DateInputSizesDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(DateInputVariantsDemo) }),
}
