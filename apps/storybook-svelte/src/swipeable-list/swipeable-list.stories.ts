import { swipeableListArgs, swipeableListArgTypes } from "@isbatak/storybook-shared"
import type { Meta, StoryObj } from "@storybook/svelte-vite"
import { fn } from "storybook/test"
import BasicExample from "./basic.svelte"

const meta = {
  title: "Swipeable List",
} satisfies Meta

export default meta

export const Basic: StoryObj<typeof BasicExample> = {
  render: (args) => ({ Component: BasicExample, props: args }),
  args: { ...swipeableListArgs, onOpenItemChange: fn(), onFullSwipe: fn() },
  argTypes: swipeableListArgTypes,
}
