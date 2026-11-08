import type { Meta, StoryObj } from "@storybook/svelte-vite"
import DateInputDemo from "@isbatak/compositions/ds/svelte/date-input/usage"
import DateInputControlledDemo from "@isbatak/compositions/ds/svelte/date-input/controlled"
import DateInputDateTimeDemo from "@isbatak/compositions/ds/svelte/date-input/date-time"
import DateInputDisabledDemo from "@isbatak/compositions/ds/svelte/date-input/disabled"
import DateInputInvalidDemo from "@isbatak/compositions/ds/svelte/date-input/invalid"
import DateInputLocaleDemo from "@isbatak/compositions/ds/svelte/date-input/locale"
import DateInputRangeDemo from "@isbatak/compositions/ds/svelte/date-input/range"
import DateInputSizesDemo from "@isbatak/compositions/ds/svelte/date-input/sizes"
import DateInputVariantsDemo from "@isbatak/compositions/ds/svelte/date-input/variants"

const meta = {
  title: "DS/Date input",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof DateInputDemo> = {
  render: () => ({ Component: DateInputDemo }),
}

export const Controlled: StoryObj<typeof DateInputControlledDemo> = {
  render: () => ({ Component: DateInputControlledDemo }),
}

export const DateTime: StoryObj<typeof DateInputDateTimeDemo> = {
  render: () => ({ Component: DateInputDateTimeDemo }),
}

export const Disabled: StoryObj<typeof DateInputDisabledDemo> = {
  render: () => ({ Component: DateInputDisabledDemo }),
}

export const Invalid: StoryObj<typeof DateInputInvalidDemo> = {
  render: () => ({ Component: DateInputInvalidDemo }),
}

export const Locale: StoryObj<typeof DateInputLocaleDemo> = {
  render: () => ({ Component: DateInputLocaleDemo }),
}

export const Range: StoryObj<typeof DateInputRangeDemo> = {
  render: () => ({ Component: DateInputRangeDemo }),
}

export const Sizes: StoryObj<typeof DateInputSizesDemo> = {
  render: () => ({ Component: DateInputSizesDemo }),
}

export const Variants: StoryObj<typeof DateInputVariantsDemo> = {
  render: () => ({ Component: DateInputVariantsDemo }),
}
