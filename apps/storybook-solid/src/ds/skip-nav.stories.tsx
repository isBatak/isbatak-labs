import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { SkipNavDemo } from "@isbatak/compositions/ds/solid/skip-nav/usage"

const meta = {
  title: "DS/Skip nav",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <SkipNavDemo />,
}
