import type { Meta, StoryObj } from "@storybook/svelte-vite"
import StatusDemo from "@isbatak/compositions/ds/svelte/status/usage"
import StatusSizesDemo from "@isbatak/compositions/ds/svelte/status/sizes"
import StatusWithLabelDemo from "@isbatak/compositions/ds/svelte/status/with-label"

const meta = {
  title: "DS/Status",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof StatusDemo> = {
  render: () => ({ Component: StatusDemo }),
}

export const Sizes: StoryObj<typeof StatusSizesDemo> = {
  render: () => ({ Component: StatusSizesDemo }),
}

export const WithLabel: StoryObj<typeof StatusWithLabelDemo> = {
  render: () => ({ Component: StatusWithLabelDemo }),
}
