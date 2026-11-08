import type { Meta, StoryObj } from "@storybook/svelte-vite"
import NativeSelectDemo from "@isbatak/compositions/ds/svelte/native-select/usage"
import NativeSelectDisabledDemo from "@isbatak/compositions/ds/svelte/native-select/disabled"
import NativeSelectInvalidDemo from "@isbatak/compositions/ds/svelte/native-select/invalid"
import NativeSelectOptionGroupsDemo from "@isbatak/compositions/ds/svelte/native-select/option-groups"
import NativeSelectSizesDemo from "@isbatak/compositions/ds/svelte/native-select/sizes"
import NativeSelectVariantsDemo from "@isbatak/compositions/ds/svelte/native-select/variants"
import NativeSelectWithFieldDemo from "@isbatak/compositions/ds/svelte/native-select/with-field"

const meta = {
  title: "DS/Native Select",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof NativeSelectDemo> = {
  render: () => ({ Component: NativeSelectDemo }),
}

export const Disabled: StoryObj<typeof NativeSelectDisabledDemo> = {
  render: () => ({ Component: NativeSelectDisabledDemo }),
}

export const Invalid: StoryObj<typeof NativeSelectInvalidDemo> = {
  render: () => ({ Component: NativeSelectInvalidDemo }),
}

export const OptionGroups: StoryObj<typeof NativeSelectOptionGroupsDemo> = {
  render: () => ({ Component: NativeSelectOptionGroupsDemo }),
}

export const Sizes: StoryObj<typeof NativeSelectSizesDemo> = {
  render: () => ({ Component: NativeSelectSizesDemo }),
}

export const Variants: StoryObj<typeof NativeSelectVariantsDemo> = {
  render: () => ({ Component: NativeSelectVariantsDemo }),
}

export const WithField: StoryObj<typeof NativeSelectWithFieldDemo> = {
  render: () => ({ Component: NativeSelectWithFieldDemo }),
}
