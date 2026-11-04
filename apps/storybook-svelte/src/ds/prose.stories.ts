import type { Meta, StoryObj } from "@storybook/svelte-vite"
import ProseDemo from "@isbatak/compositions/ds/svelte/prose/usage"
import ProseSizesDemo from "@isbatak/compositions/ds/svelte/prose/sizes"

const meta = {
  title: "DS/Prose",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof ProseDemo> = {
  render: () => ({ Component: ProseDemo }),
}

export const Sizes: StoryObj<typeof ProseSizesDemo> = {
  render: () => ({ Component: ProseSizesDemo }),
}
