import type { Meta, StoryObj } from "@storybook/react-vite"
import { FieldsetDemo } from "@isbatak/compositions/ds/react/fieldset/usage"
import { FieldsetInvalidDemo } from "@isbatak/compositions/ds/react/fieldset/invalid"

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
