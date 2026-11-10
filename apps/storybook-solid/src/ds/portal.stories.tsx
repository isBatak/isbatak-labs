import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { PortalDemo } from "@isbatak/compositions/ds/solid/portal/usage"

const meta = {
  title: "DS/Portal",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <PortalDemo />,
}
