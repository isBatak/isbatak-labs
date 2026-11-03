import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { TabsDemo } from "@isbatak/compositions/ds/solid/tabs/usage"

const meta = {
  title: "DS/Tabs",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <TabsDemo />,
}
