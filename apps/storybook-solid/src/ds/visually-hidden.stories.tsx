import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { VisuallyHiddenDemo } from "@isbatak/compositions/ds/solid/visually-hidden/usage"

const meta = {
  title: "DS/Visually hidden",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <VisuallyHiddenDemo />,
}
