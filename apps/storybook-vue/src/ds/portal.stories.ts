import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import PortalDemo from "@isbatak/compositions/ds/vue/portal/usage"

const meta = {
  title: "DS/Portal",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(PortalDemo) }),
}
