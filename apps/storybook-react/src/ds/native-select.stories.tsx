import type { Meta, StoryObj } from "@storybook/react-vite"
import { NativeSelectDemo } from "@isbatak/compositions/ds/react/native-select/usage"
import { NativeSelectDisabledDemo } from "@isbatak/compositions/ds/react/native-select/disabled"
import { NativeSelectInvalidDemo } from "@isbatak/compositions/ds/react/native-select/invalid"
import { NativeSelectOptionGroupsDemo } from "@isbatak/compositions/ds/react/native-select/option-groups"
import { NativeSelectSizesDemo } from "@isbatak/compositions/ds/react/native-select/sizes"
import { NativeSelectVariantsDemo } from "@isbatak/compositions/ds/react/native-select/variants"
import { NativeSelectWithFieldDemo } from "@isbatak/compositions/ds/react/native-select/with-field"

const meta = {
  title: "DS/Native Select",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <NativeSelectDemo />,
}

export const Disabled: Story = {
  render: () => <NativeSelectDisabledDemo />,
}

export const Invalid: Story = {
  render: () => <NativeSelectInvalidDemo />,
}

export const OptionGroups: Story = {
  render: () => <NativeSelectOptionGroupsDemo />,
}

export const Sizes: Story = {
  render: () => <NativeSelectSizesDemo />,
}

export const Variants: Story = {
  render: () => <NativeSelectVariantsDemo />,
}

export const WithField: Story = {
  render: () => <NativeSelectWithFieldDemo />,
}
