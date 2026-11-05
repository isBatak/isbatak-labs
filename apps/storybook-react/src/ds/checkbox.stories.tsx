import type { Meta, StoryObj } from "@storybook/react-vite"
import { CheckboxDemo } from "@isbatak/compositions/ds/react/checkbox/usage"
import { CheckboxDisabledDemo } from "@isbatak/compositions/ds/react/checkbox/disabled"
import { CheckboxGroupDemo } from "@isbatak/compositions/ds/react/checkbox/group"
import { CheckboxIndeterminateDemo } from "@isbatak/compositions/ds/react/checkbox/indeterminate"
import { CheckboxInvalidDemo } from "@isbatak/compositions/ds/react/checkbox/invalid"
import { CheckboxSizesDemo } from "@isbatak/compositions/ds/react/checkbox/sizes"
import { CheckboxVariantsDemo } from "@isbatak/compositions/ds/react/checkbox/variants"

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
