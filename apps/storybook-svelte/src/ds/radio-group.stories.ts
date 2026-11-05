import type { Meta, StoryObj } from "@storybook/svelte-vite"
import RadioGroupDemo from "@isbatak/compositions/ds/svelte/radio-group/usage"
import RadioGroupDisabledDemo from "@isbatak/compositions/ds/svelte/radio-group/disabled"
import RadioGroupSizesDemo from "@isbatak/compositions/ds/svelte/radio-group/sizes"
import RadioGroupVariantsDemo from "@isbatak/compositions/ds/svelte/radio-group/variants"
import RadioGroupVerticalDemo from "@isbatak/compositions/ds/svelte/radio-group/vertical"

const meta = {
  title: "DS/Radio group",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof RadioGroupDemo> = {
  render: () => ({ Component: RadioGroupDemo }),
}

export const Disabled: StoryObj<typeof RadioGroupDisabledDemo> = {
  render: () => ({ Component: RadioGroupDisabledDemo }),
}

export const Sizes: StoryObj<typeof RadioGroupSizesDemo> = {
  render: () => ({ Component: RadioGroupSizesDemo }),
}

export const Variants: StoryObj<typeof RadioGroupVariantsDemo> = {
  render: () => ({ Component: RadioGroupVariantsDemo }),
}

export const Vertical: StoryObj<typeof RadioGroupVerticalDemo> = {
  render: () => ({ Component: RadioGroupVerticalDemo }),
}
