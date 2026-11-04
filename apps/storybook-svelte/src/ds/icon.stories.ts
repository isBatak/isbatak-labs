import type { Meta, StoryObj } from "@storybook/svelte-vite"
import IconDemo from "@isbatak/compositions/ds/svelte/icon/usage"
import IconColorDemo from "@isbatak/compositions/ds/svelte/icon/color"
import IconSizesDemo from "@isbatak/compositions/ds/svelte/icon/sizes"

const meta = {
  title: "DS/Icon",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof IconDemo> = {
  render: () => ({ Component: IconDemo }),
}

export const Color: StoryObj<typeof IconColorDemo> = {
  render: () => ({ Component: IconColorDemo }),
}

export const Sizes: StoryObj<typeof IconSizesDemo> = {
  render: () => ({ Component: IconSizesDemo }),
}
