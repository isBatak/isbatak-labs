import type { Meta, StoryObj } from "@storybook/svelte-vite"
import FocusTrapDemo from "@isbatak/compositions/ds/svelte/focus-trap/usage"

const meta = {
  title: "DS/Focus trap",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof FocusTrapDemo> = {
  render: () => ({ Component: FocusTrapDemo }),
}
