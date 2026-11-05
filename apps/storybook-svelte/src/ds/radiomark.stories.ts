import type { Meta, StoryObj } from "@storybook/svelte-vite"
import RadiomarkDemo from "@isbatak/compositions/ds/svelte/radiomark/usage"
import RadiomarkVariantsDemo from "@isbatak/compositions/ds/svelte/radiomark/variants"

const meta = {
  title: "DS/Radiomark",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof RadiomarkDemo> = {
  render: () => ({ Component: RadiomarkDemo }),
}

export const Variants: StoryObj<typeof RadiomarkVariantsDemo> = {
  render: () => ({ Component: RadiomarkVariantsDemo }),
}
