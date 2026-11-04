import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { SpanDemo } from "@isbatak/compositions/ds/solid/span/usage"

const meta = {
  title: "DS/Span",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <SpanDemo />,
}
