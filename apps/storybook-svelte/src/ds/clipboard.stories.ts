import type { Meta, StoryObj } from "@storybook/svelte-vite"
import ClipboardDemo from "@isbatak/compositions/ds/svelte/clipboard/usage"
import ClipboardWithButtonDemo from "@isbatak/compositions/ds/svelte/clipboard/with-button"
import ClipboardWithLabelDemo from "@isbatak/compositions/ds/svelte/clipboard/with-label"

const meta = {
  title: "DS/Clipboard",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof ClipboardDemo> = {
  render: () => ({ Component: ClipboardDemo }),
}

export const WithButton: StoryObj<typeof ClipboardWithButtonDemo> = {
  render: () => ({ Component: ClipboardWithButtonDemo }),
}

export const WithLabel: StoryObj<typeof ClipboardWithLabelDemo> = {
  render: () => ({ Component: ClipboardWithLabelDemo }),
}
