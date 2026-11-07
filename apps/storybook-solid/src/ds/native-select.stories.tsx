import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { NativeSelectDemo } from "@isbatak/compositions/ds/solid/native-select/usage"
import { NativeSelectDisabledDemo } from "@isbatak/compositions/ds/solid/native-select/disabled"
import { NativeSelectInvalidDemo } from "@isbatak/compositions/ds/solid/native-select/invalid"
import { NativeSelectOptionGroupsDemo } from "@isbatak/compositions/ds/solid/native-select/option-groups"
import { NativeSelectSizesDemo } from "@isbatak/compositions/ds/solid/native-select/sizes"
import { NativeSelectVariantsDemo } from "@isbatak/compositions/ds/solid/native-select/variants"
import { NativeSelectWithFieldDemo } from "@isbatak/compositions/ds/solid/native-select/with-field"

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
