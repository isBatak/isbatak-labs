import type { Meta, StoryObj } from "@storybook/svelte-vite"
import HighlightDemo from "@isbatak/compositions/ds/svelte/highlight/usage"
import HighlightMatchAllDemo from "@isbatak/compositions/ds/svelte/highlight/match-all"
import HighlightMultipleDemo from "@isbatak/compositions/ds/svelte/highlight/multiple"

const meta = {
  title: "DS/Highlight",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof HighlightDemo> = {
  render: () => ({ Component: HighlightDemo }),
}

export const MatchAll: StoryObj<typeof HighlightMatchAllDemo> = {
  render: () => ({ Component: HighlightMatchAllDemo }),
}

export const Multiple: StoryObj<typeof HighlightMultipleDemo> = {
  render: () => ({ Component: HighlightMultipleDemo }),
}
