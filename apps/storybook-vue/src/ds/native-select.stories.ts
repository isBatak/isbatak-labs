import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import NativeSelectDemo from "@isbatak/compositions/ds/vue/native-select/usage"
import NativeSelectDisabledDemo from "@isbatak/compositions/ds/vue/native-select/disabled"
import NativeSelectInvalidDemo from "@isbatak/compositions/ds/vue/native-select/invalid"
import NativeSelectOptionGroupsDemo from "@isbatak/compositions/ds/vue/native-select/option-groups"
import NativeSelectSizesDemo from "@isbatak/compositions/ds/vue/native-select/sizes"
import NativeSelectVariantsDemo from "@isbatak/compositions/ds/vue/native-select/variants"
import NativeSelectWithFieldDemo from "@isbatak/compositions/ds/vue/native-select/with-field"

const meta = {
  title: "DS/Native Select",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(NativeSelectDemo) }),
}

export const Disabled: Story = {
  render: () => ({ setup: () => () => h(NativeSelectDisabledDemo) }),
}

export const Invalid: Story = {
  render: () => ({ setup: () => () => h(NativeSelectInvalidDemo) }),
}

export const OptionGroups: Story = {
  render: () => ({ setup: () => () => h(NativeSelectOptionGroupsDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(NativeSelectSizesDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(NativeSelectVariantsDemo) }),
}

export const WithField: Story = {
  render: () => ({ setup: () => () => h(NativeSelectWithFieldDemo) }),
}
