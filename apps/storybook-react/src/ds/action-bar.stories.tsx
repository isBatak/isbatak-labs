import type { Meta, StoryObj } from "@storybook/react-vite"
import { ActionBarDemo } from "@isbatak/compositions/ds/react/action-bar/usage"
import { ActionBarCloseTriggerDemo } from "@isbatak/compositions/ds/react/action-bar/close-trigger"
import { ActionBarPlacementDemo } from "@isbatak/compositions/ds/react/action-bar/placement"

const meta = {
  title: "DS/Action bar",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <ActionBarDemo />,
}

export const CloseTrigger: Story = {
  render: () => <ActionBarCloseTriggerDemo />,
}

export const Placement: Story = {
  render: () => <ActionBarPlacementDemo />,
}
