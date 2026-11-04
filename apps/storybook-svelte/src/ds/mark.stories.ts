import type { Meta, StoryObj } from "@storybook/svelte-vite"
import MarkDemo from "@isbatak/compositions/ds/svelte/mark/usage"
import MarkVariantsDemo from "@isbatak/compositions/ds/svelte/mark/variants"

const meta = {
  title: "DS/Mark",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof MarkDemo> = {
  render: () => ({ Component: MarkDemo }),
}

export const Variants: StoryObj<typeof MarkVariantsDemo> = {
  render: () => ({ Component: MarkVariantsDemo }),
}
