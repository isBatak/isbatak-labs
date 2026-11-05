import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { CheckboxDemo } from "@isbatak/compositions/ds/solid/checkbox/usage"
import { CheckboxDisabledDemo } from "@isbatak/compositions/ds/solid/checkbox/disabled"
import { CheckboxGroupDemo } from "@isbatak/compositions/ds/solid/checkbox/group"
import { CheckboxIndeterminateDemo } from "@isbatak/compositions/ds/solid/checkbox/indeterminate"
import { CheckboxInvalidDemo } from "@isbatak/compositions/ds/solid/checkbox/invalid"
import { CheckboxSizesDemo } from "@isbatak/compositions/ds/solid/checkbox/sizes"
import { CheckboxVariantsDemo } from "@isbatak/compositions/ds/solid/checkbox/variants"

const meta = {
  title: "DS/Checkbox",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <CheckboxDemo />,
}

export const Disabled: Story = {
  render: () => <CheckboxDisabledDemo />,
}

export const Group: Story = {
  render: () => <CheckboxGroupDemo />,
}

export const Indeterminate: Story = {
  render: () => <CheckboxIndeterminateDemo />,
}

export const Invalid: Story = {
  render: () => <CheckboxInvalidDemo />,
}

export const Sizes: Story = {
  render: () => <CheckboxSizesDemo />,
}

export const Variants: Story = {
  render: () => <CheckboxVariantsDemo />,
}
