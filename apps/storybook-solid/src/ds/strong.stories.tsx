import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { StrongDemo } from "@isbatak/compositions/ds/solid/strong/usage"

const meta = {
  title: "DS/Strong",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <StrongDemo />,
}
