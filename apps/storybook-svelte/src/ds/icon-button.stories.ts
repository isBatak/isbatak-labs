import type { Meta, StoryObj } from "@storybook/svelte-vite"
import IconButtonDemo from "@isbatak/compositions/ds/svelte/icon-button/usage"
import IconButtonLoadingDemo from "@isbatak/compositions/ds/svelte/icon-button/loading"
import IconButtonSizesDemo from "@isbatak/compositions/ds/svelte/icon-button/sizes"

const meta = {
  title: "DS/Icon button",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof IconButtonDemo> = {
  render: () => ({ Component: IconButtonDemo }),
}

export const Loading: StoryObj<typeof IconButtonLoadingDemo> = {
  render: () => ({ Component: IconButtonLoadingDemo }),
}

export const Sizes: StoryObj<typeof IconButtonSizesDemo> = {
  render: () => ({ Component: IconButtonSizesDemo }),
}
