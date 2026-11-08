import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { DatePickerDemo } from "@isbatak/compositions/ds/solid/date-picker/usage"
import { DatePickerClearTriggerDemo } from "@isbatak/compositions/ds/solid/date-picker/clear-trigger"
import { DatePickerControlledDemo } from "@isbatak/compositions/ds/solid/date-picker/controlled"
import { DatePickerDisabledDemo } from "@isbatak/compositions/ds/solid/date-picker/disabled"
import { DatePickerInlineDemo } from "@isbatak/compositions/ds/solid/date-picker/inline"
import { DatePickerInvalidDemo } from "@isbatak/compositions/ds/solid/date-picker/invalid"
import { DatePickerMinMaxDemo } from "@isbatak/compositions/ds/solid/date-picker/min-max"
import { DatePickerPresetsDemo } from "@isbatak/compositions/ds/solid/date-picker/presets"
import { DatePickerRangeDemo } from "@isbatak/compositions/ds/solid/date-picker/range"
import { DatePickerSizesDemo } from "@isbatak/compositions/ds/solid/date-picker/sizes"
import { DatePickerVariantsDemo } from "@isbatak/compositions/ds/solid/date-picker/variants"

const meta = {
  title: "DS/Date picker",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <DatePickerDemo />,
}

export const ClearTrigger: Story = {
  render: () => <DatePickerClearTriggerDemo />,
}

export const Controlled: Story = {
  render: () => <DatePickerControlledDemo />,
}

export const Disabled: Story = {
  render: () => <DatePickerDisabledDemo />,
}

export const Inline: Story = {
  render: () => <DatePickerInlineDemo />,
}

export const Invalid: Story = {
  render: () => <DatePickerInvalidDemo />,
}

export const MinMax: Story = {
  render: () => <DatePickerMinMaxDemo />,
}

export const Presets: Story = {
  render: () => <DatePickerPresetsDemo />,
}

export const Range: Story = {
  render: () => <DatePickerRangeDemo />,
}

export const Sizes: Story = {
  render: () => <DatePickerSizesDemo />,
}

export const Variants: Story = {
  render: () => <DatePickerVariantsDemo />,
}
