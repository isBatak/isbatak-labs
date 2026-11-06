import type { Meta, StoryObj } from "@storybook/react-vite"
import { FieldDemo } from "@isbatak/compositions/ds/react/field/usage"
import { FieldDisabledDemo } from "@isbatak/compositions/ds/react/field/disabled"
import { FieldHorizontalDemo } from "@isbatak/compositions/ds/react/field/horizontal"
import { FieldInvalidDemo } from "@isbatak/compositions/ds/react/field/invalid"
import { FieldOptionalDemo } from "@isbatak/compositions/ds/react/field/optional"
import { FieldRequiredDemo } from "@isbatak/compositions/ds/react/field/required"

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
