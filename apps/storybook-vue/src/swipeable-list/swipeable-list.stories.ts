import { swipeableListArgs, swipeableListArgTypes } from "@isbatak/storybook-shared"
import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { fn } from "storybook/test"
import { h } from "vue"
import BasicExample from "./basic.vue"

const meta = {
  title: "Swipeable List",
} satisfies Meta

export default meta

export const Basic: StoryObj<typeof BasicExample> = {
  render: (args) => ({ setup: () => () => h(BasicExample, args) }),
  args: { ...swipeableListArgs, onOpenItemChange: fn(), onFullSwipe: fn() },
  argTypes: swipeableListArgTypes,
}
