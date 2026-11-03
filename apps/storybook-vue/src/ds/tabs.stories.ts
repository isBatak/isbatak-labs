import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import TabsDemo from "@isbatak/compositions/ds/vue/tabs/usage"

const meta = {
  title: "DS/Tabs",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(TabsDemo) }),
}
