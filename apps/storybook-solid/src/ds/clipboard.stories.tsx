import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { ClipboardDemo } from "@isbatak/compositions/ds/solid/clipboard/usage"
import { ClipboardWithButtonDemo } from "@isbatak/compositions/ds/solid/clipboard/with-button"
import { ClipboardWithLabelDemo } from "@isbatak/compositions/ds/solid/clipboard/with-label"

const meta = {
  title: "DS/Clipboard",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <ClipboardDemo />,
}

export const WithButton: Story = {
  render: () => <ClipboardWithButtonDemo />,
}

export const WithLabel: Story = {
  render: () => <ClipboardWithLabelDemo />,
}
