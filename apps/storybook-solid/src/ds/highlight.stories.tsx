import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { HighlightDemo } from "@isbatak/compositions/ds/solid/highlight/usage"
import { HighlightMatchAllDemo } from "@isbatak/compositions/ds/solid/highlight/match-all"
import { HighlightMultipleDemo } from "@isbatak/compositions/ds/solid/highlight/multiple"

const meta = {
  title: "DS/Highlight",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <HighlightDemo />,
}

export const MatchAll: Story = {
  render: () => <HighlightMatchAllDemo />,
}

export const Multiple: Story = {
  render: () => <HighlightMultipleDemo />,
}
