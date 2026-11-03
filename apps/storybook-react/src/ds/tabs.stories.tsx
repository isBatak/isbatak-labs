import type { Meta, StoryObj } from "@storybook/react-vite"
import { TabsDemo } from "@isbatak/compositions/ds/react/tabs/usage"

const meta = {
  title: "DS/Tabs",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <TabsDemo />,
}
