import type { Meta, StoryObj } from "@storybook/svelte-vite"
import InputDemo from "@isbatak/compositions/ds/svelte/input/usage"
import InputDisabledDemo from "@isbatak/compositions/ds/svelte/input/disabled"
import InputSizesDemo from "@isbatak/compositions/ds/svelte/input/sizes"
import InputVariantsDemo from "@isbatak/compositions/ds/svelte/input/variants"
import InputWithFieldDemo from "@isbatak/compositions/ds/svelte/input/with-field"

const meta = {
  title: "DS/Input",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof InputDemo> = {
  render: () => ({ Component: InputDemo }),
}

export const Disabled: StoryObj<typeof InputDisabledDemo> = {
  render: () => ({ Component: InputDisabledDemo }),
}

export const Sizes: StoryObj<typeof InputSizesDemo> = {
  render: () => ({ Component: InputSizesDemo }),
}

export const Variants: StoryObj<typeof InputVariantsDemo> = {
  render: () => ({ Component: InputVariantsDemo }),
}

export const WithField: StoryObj<typeof InputWithFieldDemo> = {
  render: () => ({ Component: InputWithFieldDemo }),
}
