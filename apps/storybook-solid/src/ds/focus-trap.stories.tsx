import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { FocusTrapDemo } from "@isbatak/compositions/ds/solid/focus-trap/usage"

const meta = {
  title: "DS/Focus trap",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <FocusTrapDemo />,
}
