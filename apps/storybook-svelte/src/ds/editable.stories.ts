import type { Meta, StoryObj } from "@storybook/svelte-vite"
import EditableDemo from "@isbatak/compositions/ds/svelte/editable/usage"
import EditableDisabledDemo from "@isbatak/compositions/ds/svelte/editable/disabled"
import EditableDoubleClickDemo from "@isbatak/compositions/ds/svelte/editable/double-click"
import EditablePlaceholderDemo from "@isbatak/compositions/ds/svelte/editable/placeholder"
import EditableSizesDemo from "@isbatak/compositions/ds/svelte/editable/sizes"
import EditableWithControlsDemo from "@isbatak/compositions/ds/svelte/editable/with-controls"

const meta = {
  title: "DS/Editable",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof EditableDemo> = {
  render: () => ({ Component: EditableDemo }),
}

export const Disabled: StoryObj<typeof EditableDisabledDemo> = {
  render: () => ({ Component: EditableDisabledDemo }),
}

export const DoubleClick: StoryObj<typeof EditableDoubleClickDemo> = {
  render: () => ({ Component: EditableDoubleClickDemo }),
}

export const Placeholder: StoryObj<typeof EditablePlaceholderDemo> = {
  render: () => ({ Component: EditablePlaceholderDemo }),
}

export const Sizes: StoryObj<typeof EditableSizesDemo> = {
  render: () => ({ Component: EditableSizesDemo }),
}

export const WithControls: StoryObj<typeof EditableWithControlsDemo> = {
  render: () => ({ Component: EditableWithControlsDemo }),
}
