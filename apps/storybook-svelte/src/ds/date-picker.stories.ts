import type { Meta, StoryObj } from "@storybook/svelte-vite"
import DatePickerDemo from "@isbatak/compositions/ds/svelte/date-picker/usage"
import DatePickerClearTriggerDemo from "@isbatak/compositions/ds/svelte/date-picker/clear-trigger"
import DatePickerControlledDemo from "@isbatak/compositions/ds/svelte/date-picker/controlled"
import DatePickerDisabledDemo from "@isbatak/compositions/ds/svelte/date-picker/disabled"
import DatePickerInlineDemo from "@isbatak/compositions/ds/svelte/date-picker/inline"
import DatePickerInvalidDemo from "@isbatak/compositions/ds/svelte/date-picker/invalid"
import DatePickerMinMaxDemo from "@isbatak/compositions/ds/svelte/date-picker/min-max"
import DatePickerPresetsDemo from "@isbatak/compositions/ds/svelte/date-picker/presets"
import DatePickerRangeDemo from "@isbatak/compositions/ds/svelte/date-picker/range"
import DatePickerSizesDemo from "@isbatak/compositions/ds/svelte/date-picker/sizes"
import DatePickerVariantsDemo from "@isbatak/compositions/ds/svelte/date-picker/variants"

const meta = {
  title: "DS/Date picker",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof DatePickerDemo> = {
  render: () => ({ Component: DatePickerDemo }),
}

export const ClearTrigger: StoryObj<typeof DatePickerClearTriggerDemo> = {
  render: () => ({ Component: DatePickerClearTriggerDemo }),
}

export const Controlled: StoryObj<typeof DatePickerControlledDemo> = {
  render: () => ({ Component: DatePickerControlledDemo }),
}

export const Disabled: StoryObj<typeof DatePickerDisabledDemo> = {
  render: () => ({ Component: DatePickerDisabledDemo }),
}

export const Inline: StoryObj<typeof DatePickerInlineDemo> = {
  render: () => ({ Component: DatePickerInlineDemo }),
}

export const Invalid: StoryObj<typeof DatePickerInvalidDemo> = {
  render: () => ({ Component: DatePickerInvalidDemo }),
}

export const MinMax: StoryObj<typeof DatePickerMinMaxDemo> = {
  render: () => ({ Component: DatePickerMinMaxDemo }),
}

export const Presets: StoryObj<typeof DatePickerPresetsDemo> = {
  render: () => ({ Component: DatePickerPresetsDemo }),
}

export const Range: StoryObj<typeof DatePickerRangeDemo> = {
  render: () => ({ Component: DatePickerRangeDemo }),
}

export const Sizes: StoryObj<typeof DatePickerSizesDemo> = {
  render: () => ({ Component: DatePickerSizesDemo }),
}

export const Variants: StoryObj<typeof DatePickerVariantsDemo> = {
  render: () => ({ Component: DatePickerVariantsDemo }),
}
