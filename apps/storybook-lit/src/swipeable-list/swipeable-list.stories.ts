import { swipeableListArgs, swipeableListArgTypes } from "@isbatak/storybook-shared"
import type { Meta, StoryObj } from "@storybook/web-components-vite"
import { html } from "lit"
import { fn } from "storybook/test"
import "./swipeable-list-basic"
import type { SwipeableListBasic } from "./swipeable-list-basic"

const meta = {
  title: "Swipeable List",
} satisfies Meta

export default meta

export const Basic: StoryObj<SwipeableListBasic["args"]> = {
  render: (args) => html`<swipeable-list-basic .args=${args}></swipeable-list-basic>`,
  args: { ...swipeableListArgs, onOpenItemChange: fn(), onFullSwipe: fn() },
  argTypes: swipeableListArgTypes,
}
