import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import ClipboardDemo from "@isbatak/compositions/ds/vue/clipboard/usage"
import ClipboardWithButtonDemo from "@isbatak/compositions/ds/vue/clipboard/with-button"
import ClipboardWithLabelDemo from "@isbatak/compositions/ds/vue/clipboard/with-label"

const meta = {
  title: "DS/Clipboard",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(ClipboardDemo) }),
}

export const WithButton: Story = {
  render: () => ({ setup: () => () => h(ClipboardWithButtonDemo) }),
}

export const WithLabel: Story = {
  render: () => ({ setup: () => () => h(ClipboardWithLabelDemo) }),
}
