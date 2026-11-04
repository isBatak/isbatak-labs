import type { Meta, StoryObj } from "@storybook/svelte-vite"
import EmDemo from "@isbatak/compositions/ds/svelte/em/usage"

const meta = {
  title: "DS/Em",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof EmDemo> = {
  render: () => ({ Component: EmDemo }),
}
