import type { Meta, StoryObj } from "@storybook/svelte-vite"
import VisuallyHiddenDemo from "@isbatak/compositions/ds/svelte/visually-hidden/usage"

const meta = {
  title: "DS/Visually hidden",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof VisuallyHiddenDemo> = {
  render: () => ({ Component: VisuallyHiddenDemo }),
}
