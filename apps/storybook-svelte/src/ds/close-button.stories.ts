import type { Meta, StoryObj } from "@storybook/svelte-vite"
import CloseButtonDemo from "@isbatak/compositions/ds/svelte/close-button/usage"
import CloseButtonSizesDemo from "@isbatak/compositions/ds/svelte/close-button/sizes"

const meta = {
  title: "DS/Close button",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof CloseButtonDemo> = {
  render: () => ({ Component: CloseButtonDemo }),
}

export const Sizes: StoryObj<typeof CloseButtonSizesDemo> = {
  render: () => ({ Component: CloseButtonSizesDemo }),
}
