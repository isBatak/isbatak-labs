import type { Meta, StoryObj } from "@storybook/react-vite"
import { HighlightDemo } from "@isbatak/compositions/ds/react/highlight/usage"
import { HighlightMatchAllDemo } from "@isbatak/compositions/ds/react/highlight/match-all"
import { HighlightMultipleDemo } from "@isbatak/compositions/ds/react/highlight/multiple"

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
