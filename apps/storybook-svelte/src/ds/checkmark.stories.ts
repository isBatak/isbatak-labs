import type { Meta, StoryObj } from "@storybook/svelte-vite"
import CheckmarkDemo from "@isbatak/compositions/ds/svelte/checkmark/usage"
import CheckmarkVariantsDemo from "@isbatak/compositions/ds/svelte/checkmark/variants"

const meta = {
  title: "DS/Checkmark",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof CheckmarkDemo> = {
  render: () => ({ Component: CheckmarkDemo }),
}

export const Variants: StoryObj<typeof CheckmarkVariantsDemo> = {
  render: () => ({ Component: CheckmarkVariantsDemo }),
}
