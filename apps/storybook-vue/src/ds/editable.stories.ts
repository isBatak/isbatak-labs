import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import EditableDemo from "@isbatak/compositions/ds/vue/editable/usage"
import EditableDisabledDemo from "@isbatak/compositions/ds/vue/editable/disabled"
import EditableDoubleClickDemo from "@isbatak/compositions/ds/vue/editable/double-click"
import EditablePlaceholderDemo from "@isbatak/compositions/ds/vue/editable/placeholder"
import EditableSizesDemo from "@isbatak/compositions/ds/vue/editable/sizes"
import EditableWithControlsDemo from "@isbatak/compositions/ds/vue/editable/with-controls"

const meta = {
  title: "DS/Editable",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(EditableDemo) }),
}

export const Disabled: Story = {
  render: () => ({ setup: () => () => h(EditableDisabledDemo) }),
}

export const DoubleClick: Story = {
  render: () => ({ setup: () => () => h(EditableDoubleClickDemo) }),
}

export const Placeholder: Story = {
  render: () => ({ setup: () => () => h(EditablePlaceholderDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(EditableSizesDemo) }),
}

export const WithControls: Story = {
  render: () => ({ setup: () => () => h(EditableWithControlsDemo) }),
}
