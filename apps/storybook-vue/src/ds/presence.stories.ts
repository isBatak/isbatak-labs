import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import PresenceDemo from "@isbatak/compositions/ds/vue/presence/usage"

const meta = {
  title: "DS/Presence",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(PresenceDemo) }),
}
