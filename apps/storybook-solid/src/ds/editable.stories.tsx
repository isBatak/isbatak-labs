import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { EditableDemo } from "@isbatak/compositions/ds/solid/editable/usage"
import { EditableDisabledDemo } from "@isbatak/compositions/ds/solid/editable/disabled"
import { EditableDoubleClickDemo } from "@isbatak/compositions/ds/solid/editable/double-click"
import { EditablePlaceholderDemo } from "@isbatak/compositions/ds/solid/editable/placeholder"
import { EditableSizesDemo } from "@isbatak/compositions/ds/solid/editable/sizes"
import { EditableWithControlsDemo } from "@isbatak/compositions/ds/solid/editable/with-controls"

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
