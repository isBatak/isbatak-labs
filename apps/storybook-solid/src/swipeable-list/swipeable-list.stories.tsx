import { swipeableListArgs, swipeableListArgTypes } from "@isbatak/storybook-shared"
import { fn } from "storybook/test"
import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { Basic as BasicExample } from "./basic"

const meta = {
  title: "Swipeable List",
} satisfies Meta

export default meta

export const Basic: StoryObj<typeof BasicExample> = {
  render: (args) => <BasicExample {...args} />,
  args: { ...swipeableListArgs, onOpenItemChange: fn(), onFullSwipe: fn() },
  argTypes: swipeableListArgTypes,
}
