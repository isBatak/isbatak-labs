import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { DateInputDemo } from "@isbatak/compositions/ds/solid/date-input/usage"
import { DateInputControlledDemo } from "@isbatak/compositions/ds/solid/date-input/controlled"
import { DateInputDateTimeDemo } from "@isbatak/compositions/ds/solid/date-input/date-time"
import { DateInputDisabledDemo } from "@isbatak/compositions/ds/solid/date-input/disabled"
import { DateInputInvalidDemo } from "@isbatak/compositions/ds/solid/date-input/invalid"
import { DateInputLocaleDemo } from "@isbatak/compositions/ds/solid/date-input/locale"
import { DateInputRangeDemo } from "@isbatak/compositions/ds/solid/date-input/range"
import { DateInputSizesDemo } from "@isbatak/compositions/ds/solid/date-input/sizes"
import { DateInputVariantsDemo } from "@isbatak/compositions/ds/solid/date-input/variants"

const meta = {
  title: "DS/Date input",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <DateInputDemo />,
}

export const Controlled: Story = {
  render: () => <DateInputControlledDemo />,
}

export const DateTime: Story = {
  render: () => <DateInputDateTimeDemo />,
}

export const Disabled: Story = {
  render: () => <DateInputDisabledDemo />,
}

export const Invalid: Story = {
  render: () => <DateInputInvalidDemo />,
}

export const Locale: Story = {
  render: () => <DateInputLocaleDemo />,
}

export const Range: Story = {
  render: () => <DateInputRangeDemo />,
}

export const Sizes: Story = {
  render: () => <DateInputSizesDemo />,
}

export const Variants: Story = {
  render: () => <DateInputVariantsDemo />,
}
