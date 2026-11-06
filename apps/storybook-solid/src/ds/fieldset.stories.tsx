import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { FieldsetDemo } from "@isbatak/compositions/ds/solid/fieldset/usage"
import { FieldsetInvalidDemo } from "@isbatak/compositions/ds/solid/fieldset/invalid"

const meta = {
  title: "DS/Fieldset",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <FieldsetDemo />,
}

export const Invalid: Story = {
  render: () => <FieldsetInvalidDemo />,
}
