import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { SpacerDemo } from "@isbatak/compositions/ds/solid/spacer/usage"

const meta = {
  title: "DS/Spacer",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <SpacerDemo />,
}
