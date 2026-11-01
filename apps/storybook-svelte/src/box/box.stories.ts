import type { Meta, StoryObj } from "@storybook/svelte-vite"
import BasicExample from "./basic.svelte"

const meta = {
  title: "Box",
} satisfies Meta

export default meta

export const Basic: StoryObj<typeof BasicExample> = {
  render: () => ({ Component: BasicExample }),
}
