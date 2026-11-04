import type { Meta, StoryObj } from "@storybook/svelte-vite"
import CodeDemo from "@isbatak/compositions/ds/svelte/code/usage"
import CodeSizesDemo from "@isbatak/compositions/ds/svelte/code/sizes"
import CodeVariantsDemo from "@isbatak/compositions/ds/svelte/code/variants"

const meta = {
  title: "DS/Code",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof CodeDemo> = {
  render: () => ({ Component: CodeDemo }),
}

export const Sizes: StoryObj<typeof CodeSizesDemo> = {
  render: () => ({ Component: CodeSizesDemo }),
}

export const Variants: StoryObj<typeof CodeVariantsDemo> = {
  render: () => ({ Component: CodeVariantsDemo }),
}
