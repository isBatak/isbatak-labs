import type { Meta, StoryObj } from "@storybook/svelte-vite"
import SpanDemo from "@isbatak/compositions/ds/svelte/span/usage"

const meta = {
  title: "DS/Span",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof SpanDemo> = {
  render: () => ({ Component: SpanDemo }),
}
