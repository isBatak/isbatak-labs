import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { FieldDemo } from "@isbatak/compositions/ds/solid/field/usage"
import { FieldDisabledDemo } from "@isbatak/compositions/ds/solid/field/disabled"
import { FieldHorizontalDemo } from "@isbatak/compositions/ds/solid/field/horizontal"
import { FieldInvalidDemo } from "@isbatak/compositions/ds/solid/field/invalid"
import { FieldOptionalDemo } from "@isbatak/compositions/ds/solid/field/optional"
import { FieldRequiredDemo } from "@isbatak/compositions/ds/solid/field/required"

const meta = {
  title: "DS/Field",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <FieldDemo />,
}

export const Disabled: Story = {
  render: () => <FieldDisabledDemo />,
}

export const Horizontal: Story = {
  render: () => <FieldHorizontalDemo />,
}

export const Invalid: Story = {
  render: () => <FieldInvalidDemo />,
}

export const Optional: Story = {
  render: () => <FieldOptionalDemo />,
}

export const Required: Story = {
  render: () => <FieldRequiredDemo />,
}
