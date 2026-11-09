import type { Meta, StoryObj } from "@storybook/svelte-vite"
import ActionBarDemo from "@isbatak/compositions/ds/svelte/action-bar/usage"
import ActionBarCloseTriggerDemo from "@isbatak/compositions/ds/svelte/action-bar/close-trigger"
import ActionBarPlacementDemo from "@isbatak/compositions/ds/svelte/action-bar/placement"

const meta = {
  title: "DS/Action bar",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof ActionBarDemo> = {
  render: () => ({ Component: ActionBarDemo }),
}

export const CloseTrigger: StoryObj<typeof ActionBarCloseTriggerDemo> = {
  render: () => ({ Component: ActionBarCloseTriggerDemo }),
}

export const Placement: StoryObj<typeof ActionBarPlacementDemo> = {
  render: () => ({ Component: ActionBarPlacementDemo }),
}
