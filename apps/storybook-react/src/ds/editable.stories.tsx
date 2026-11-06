import type { Meta, StoryObj } from "@storybook/react-vite"
import { EditableDemo } from "@isbatak/compositions/ds/react/editable/usage"
import { EditableDisabledDemo } from "@isbatak/compositions/ds/react/editable/disabled"
import { EditableDoubleClickDemo } from "@isbatak/compositions/ds/react/editable/double-click"
import { EditablePlaceholderDemo } from "@isbatak/compositions/ds/react/editable/placeholder"
import { EditableSizesDemo } from "@isbatak/compositions/ds/react/editable/sizes"
import { EditableWithControlsDemo } from "@isbatak/compositions/ds/react/editable/with-controls"

const meta = {
  title: "DS/Editable",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <EditableDemo />,
}

export const Disabled: Story = {
  render: () => <EditableDisabledDemo />,
}

export const DoubleClick: Story = {
  render: () => <EditableDoubleClickDemo />,
}

export const Placeholder: Story = {
  render: () => <EditablePlaceholderDemo />,
}

export const Sizes: Story = {
  render: () => <EditableSizesDemo />,
}

export const WithControls: Story = {
  render: () => <EditableWithControlsDemo />,
}
