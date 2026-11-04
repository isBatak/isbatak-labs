import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { StickyDemo } from "@isbatak/compositions/ds/solid/sticky/usage"

const meta = {
  title: "DS/Sticky",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <StickyDemo />,
}
