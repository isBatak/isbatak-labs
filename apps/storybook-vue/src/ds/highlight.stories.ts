import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import HighlightDemo from "@isbatak/compositions/ds/vue/highlight/usage"
import HighlightMatchAllDemo from "@isbatak/compositions/ds/vue/highlight/match-all"
import HighlightMultipleDemo from "@isbatak/compositions/ds/vue/highlight/multiple"

const meta = {
  title: "DS/Highlight",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(HighlightDemo) }),
}

export const MatchAll: Story = {
  render: () => ({ setup: () => () => h(HighlightMatchAllDemo) }),
}

export const Multiple: Story = {
  render: () => ({ setup: () => () => h(HighlightMultipleDemo) }),
}
