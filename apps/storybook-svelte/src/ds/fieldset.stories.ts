import type { Meta, StoryObj } from "@storybook/svelte-vite"
import FieldsetDemo from "@isbatak/compositions/ds/svelte/fieldset/usage"
import FieldsetInvalidDemo from "@isbatak/compositions/ds/svelte/fieldset/invalid"

const meta = {
  title: "DS/Fieldset",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof FieldsetDemo> = {
  render: () => ({ Component: FieldsetDemo }),
}

export const Invalid: StoryObj<typeof FieldsetInvalidDemo> = {
  render: () => ({ Component: FieldsetInvalidDemo }),
}
