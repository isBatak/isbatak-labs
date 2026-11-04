import type { Meta, StoryObj } from "@storybook/svelte-vite"
import StrongDemo from "@isbatak/compositions/ds/svelte/strong/usage"

const meta = {
  title: "DS/Strong",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof StrongDemo> = {
  render: () => ({ Component: StrongDemo }),
}
