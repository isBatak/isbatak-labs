import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import DatePickerDemo from "@isbatak/compositions/ds/vue/date-picker/usage"
import DatePickerClearTriggerDemo from "@isbatak/compositions/ds/vue/date-picker/clear-trigger"
import DatePickerControlledDemo from "@isbatak/compositions/ds/vue/date-picker/controlled"
import DatePickerDisabledDemo from "@isbatak/compositions/ds/vue/date-picker/disabled"
import DatePickerInlineDemo from "@isbatak/compositions/ds/vue/date-picker/inline"
import DatePickerInvalidDemo from "@isbatak/compositions/ds/vue/date-picker/invalid"
import DatePickerMinMaxDemo from "@isbatak/compositions/ds/vue/date-picker/min-max"
import DatePickerPresetsDemo from "@isbatak/compositions/ds/vue/date-picker/presets"
import DatePickerRangeDemo from "@isbatak/compositions/ds/vue/date-picker/range"
import DatePickerSizesDemo from "@isbatak/compositions/ds/vue/date-picker/sizes"
import DatePickerVariantsDemo from "@isbatak/compositions/ds/vue/date-picker/variants"

const meta = {
  title: "DS/Date picker",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(DatePickerDemo) }),
}

export const ClearTrigger: Story = {
  render: () => ({ setup: () => () => h(DatePickerClearTriggerDemo) }),
}

export const Controlled: Story = {
  render: () => ({ setup: () => () => h(DatePickerControlledDemo) }),
}

export const Disabled: Story = {
  render: () => ({ setup: () => () => h(DatePickerDisabledDemo) }),
}

export const Inline: Story = {
  render: () => ({ setup: () => () => h(DatePickerInlineDemo) }),
}

export const Invalid: Story = {
  render: () => ({ setup: () => () => h(DatePickerInvalidDemo) }),
}

export const MinMax: Story = {
  render: () => ({ setup: () => () => h(DatePickerMinMaxDemo) }),
}

export const Presets: Story = {
  render: () => ({ setup: () => () => h(DatePickerPresetsDemo) }),
}

export const Range: Story = {
  render: () => ({ setup: () => () => h(DatePickerRangeDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(DatePickerSizesDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(DatePickerVariantsDemo) }),
}
