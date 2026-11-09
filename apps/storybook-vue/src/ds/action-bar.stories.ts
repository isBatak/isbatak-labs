import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import ActionBarDemo from "@isbatak/compositions/ds/vue/action-bar/usage"
import ActionBarCloseTriggerDemo from "@isbatak/compositions/ds/vue/action-bar/close-trigger"
import ActionBarPlacementDemo from "@isbatak/compositions/ds/vue/action-bar/placement"

const meta = {
  title: "DS/Action bar",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(ActionBarDemo) }),
}

export const CloseTrigger: Story = {
  render: () => ({ setup: () => () => h(ActionBarCloseTriggerDemo) }),
}

export const Placement: Story = {
  render: () => ({ setup: () => () => h(ActionBarPlacementDemo) }),
}
