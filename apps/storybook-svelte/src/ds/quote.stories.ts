import type { Meta, StoryObj } from "@storybook/svelte-vite"
import QuoteDemo from "@isbatak/compositions/ds/svelte/quote/usage"

const meta = {
  title: "DS/Quote",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof QuoteDemo> = {
  render: () => ({ Component: QuoteDemo }),
}
