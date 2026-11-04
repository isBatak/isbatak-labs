import type { Meta, StoryObj } from "@storybook/react-vite"
import { GroupDemo } from "@isbatak/compositions/ds/react/group/usage"
import { GroupGrowDemo } from "@isbatak/compositions/ds/react/group/grow"
import { GroupSpacedDemo } from "@isbatak/compositions/ds/react/group/spaced"
import { GroupVerticalDemo } from "@isbatak/compositions/ds/react/group/vertical"

const meta = {
  title: "DS/Group",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <GroupDemo />,
}

export const Grow: Story = {
  render: () => <GroupGrowDemo />,
}

export const Spaced: Story = {
  render: () => <GroupSpacedDemo />,
}

export const Vertical: Story = {
  render: () => <GroupVerticalDemo />,
}
