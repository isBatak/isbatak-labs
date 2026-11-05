import type { Meta, StoryObj } from "@storybook/svelte-vite"
import CheckboxDemo from "@isbatak/compositions/ds/svelte/checkbox/usage"
import CheckboxDisabledDemo from "@isbatak/compositions/ds/svelte/checkbox/disabled"
import CheckboxGroupDemo from "@isbatak/compositions/ds/svelte/checkbox/group"
import CheckboxIndeterminateDemo from "@isbatak/compositions/ds/svelte/checkbox/indeterminate"
import CheckboxInvalidDemo from "@isbatak/compositions/ds/svelte/checkbox/invalid"
import CheckboxSizesDemo from "@isbatak/compositions/ds/svelte/checkbox/sizes"
import CheckboxVariantsDemo from "@isbatak/compositions/ds/svelte/checkbox/variants"

const meta = {
  title: "DS/Checkbox",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof CheckboxDemo> = {
  render: () => ({ Component: CheckboxDemo }),
}

export const Disabled: StoryObj<typeof CheckboxDisabledDemo> = {
  render: () => ({ Component: CheckboxDisabledDemo }),
}

export const Group: StoryObj<typeof CheckboxGroupDemo> = {
  render: () => ({ Component: CheckboxGroupDemo }),
}

export const Indeterminate: StoryObj<typeof CheckboxIndeterminateDemo> = {
  render: () => ({ Component: CheckboxIndeterminateDemo }),
}

export const Invalid: StoryObj<typeof CheckboxInvalidDemo> = {
  render: () => ({ Component: CheckboxInvalidDemo }),
}

export const Sizes: StoryObj<typeof CheckboxSizesDemo> = {
  render: () => ({ Component: CheckboxSizesDemo }),
}

export const Variants: StoryObj<typeof CheckboxVariantsDemo> = {
  render: () => ({ Component: CheckboxVariantsDemo }),
}
