import type { Meta, StoryObj } from "@storybook/svelte-vite"
import CircleDemo from "@isbatak/compositions/ds/svelte/circle/usage"
import CircleWithIconDemo from "@isbatak/compositions/ds/svelte/circle/with-icon"

const meta = {
  title: "DS/Circle and Square",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof CircleDemo> = {
  render: () => ({ Component: CircleDemo }),
}

export const WithIcon: StoryObj<typeof CircleWithIconDemo> = {
  render: () => ({ Component: CircleWithIconDemo }),
}
