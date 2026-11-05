import type { Meta, StoryObj } from "@storybook/svelte-vite"
import RadioCardDemo from "@isbatak/compositions/ds/svelte/radio-card/usage"
import RadioCardVariantsDemo from "@isbatak/compositions/ds/svelte/radio-card/variants"

const meta = {
  title: "DS/Radio card",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof RadioCardDemo> = {
  render: () => ({ Component: RadioCardDemo }),
}

export const Variants: StoryObj<typeof RadioCardVariantsDemo> = {
  render: () => ({ Component: RadioCardVariantsDemo }),
}
