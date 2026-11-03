import type { Meta, StoryObj } from "@storybook/react-vite"
import { GroupDemo } from "@isbatak/compositions/ds/react/group/usage"

const meta = {
  title: "DS/Group",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <GroupDemo />,
}
