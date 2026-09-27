import { swipeableListArgs, swipeableListArgTypes } from "@isbatak/storybook-shared"
import type { Meta, StoryObj } from "@storybook/html-vite"
import { fn } from "storybook/test"
import { createBasic, type BasicProps } from "./basic"

const meta = {
  title: "Swipeable List",
} satisfies Meta

export default meta

export const Basic: StoryObj<BasicProps> = {
  render: (args) => createBasic(args),
  args: { ...swipeableListArgs, onOpenItemChange: fn(), onFullSwipe: fn() },
  argTypes: swipeableListArgTypes,
}
