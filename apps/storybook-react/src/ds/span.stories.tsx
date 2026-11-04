import type { Meta, StoryObj } from "@storybook/react-vite"
import { SpanDemo } from "@isbatak/compositions/ds/react/span/usage"

const meta = {
  title: "DS/Span",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <SpanDemo />,
}
