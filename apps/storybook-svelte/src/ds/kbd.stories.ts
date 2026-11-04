import type { Meta, StoryObj } from "@storybook/svelte-vite"
import KbdDemo from "@isbatak/compositions/ds/svelte/kbd/usage"
import KbdCombinationsDemo from "@isbatak/compositions/ds/svelte/kbd/combinations"
import KbdFunctionKeysDemo from "@isbatak/compositions/ds/svelte/kbd/function-keys"
import KbdGroupDemo from "@isbatak/compositions/ds/svelte/kbd/group"
import KbdSizesDemo from "@isbatak/compositions/ds/svelte/kbd/sizes"
import KbdVariantsDemo from "@isbatak/compositions/ds/svelte/kbd/variants"
import KbdWithinTextDemo from "@isbatak/compositions/ds/svelte/kbd/within-text"

const meta = {
  title: "DS/Kbd",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof KbdDemo> = {
  render: () => ({ Component: KbdDemo }),
}

export const Combinations: StoryObj<typeof KbdCombinationsDemo> = {
  render: () => ({ Component: KbdCombinationsDemo }),
}

export const FunctionKeys: StoryObj<typeof KbdFunctionKeysDemo> = {
  render: () => ({ Component: KbdFunctionKeysDemo }),
}

export const Group: StoryObj<typeof KbdGroupDemo> = {
  render: () => ({ Component: KbdGroupDemo }),
}

export const Sizes: StoryObj<typeof KbdSizesDemo> = {
  render: () => ({ Component: KbdSizesDemo }),
}

export const Variants: StoryObj<typeof KbdVariantsDemo> = {
  render: () => ({ Component: KbdVariantsDemo }),
}

export const WithinText: StoryObj<typeof KbdWithinTextDemo> = {
  render: () => ({ Component: KbdWithinTextDemo }),
}
