import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import ToggleDemo from "@isbatak/compositions/ds/vue/toggle/usage"
import ToggleDefaultPressedDemo from "@isbatak/compositions/ds/vue/toggle/default-pressed"
import ToggleWithIndicatorDemo from "@isbatak/compositions/ds/vue/toggle/with-indicator"

const meta = {
  title: "DS/Toggle",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(ToggleDemo) }),
}

export const DefaultPressed: Story = {
  render: () => ({ setup: () => () => h(ToggleDefaultPressedDemo) }),
}

export const WithIndicator: Story = {
  render: () => ({ setup: () => () => h(ToggleWithIndicatorDemo) }),
}
