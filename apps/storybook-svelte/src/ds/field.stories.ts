import type { Meta, StoryObj } from "@storybook/svelte-vite"
import FieldDemo from "@isbatak/compositions/ds/svelte/field/usage"
import FieldDisabledDemo from "@isbatak/compositions/ds/svelte/field/disabled"
import FieldHorizontalDemo from "@isbatak/compositions/ds/svelte/field/horizontal"
import FieldInvalidDemo from "@isbatak/compositions/ds/svelte/field/invalid"
import FieldOptionalDemo from "@isbatak/compositions/ds/svelte/field/optional"
import FieldRequiredDemo from "@isbatak/compositions/ds/svelte/field/required"

const meta = {
  title: "DS/Field",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof FieldDemo> = {
  render: () => ({ Component: FieldDemo }),
}

export const Disabled: StoryObj<typeof FieldDisabledDemo> = {
  render: () => ({ Component: FieldDisabledDemo }),
}

export const Horizontal: StoryObj<typeof FieldHorizontalDemo> = {
  render: () => ({ Component: FieldHorizontalDemo }),
}

export const Invalid: StoryObj<typeof FieldInvalidDemo> = {
  render: () => ({ Component: FieldInvalidDemo }),
}

export const Optional: StoryObj<typeof FieldOptionalDemo> = {
  render: () => ({ Component: FieldOptionalDemo }),
}

export const Required: StoryObj<typeof FieldRequiredDemo> = {
  render: () => ({ Component: FieldRequiredDemo }),
}
