import { textFlipArgs, textFlipArgTypes } from "@isbatak/storybook-shared"
import type { Meta, StoryObj } from "@storybook/web-components-vite"
import { html } from "lit"
import { fn } from "storybook/test"
import "./text-flip-basic"
import type { TextFlipBasic } from "./text-flip-basic"
import "./text-flip-controls"

const meta = {
  title: "Text flip",
} satisfies Meta

export default meta

export const Basic: StoryObj<TextFlipBasic["args"]> = {
  render: (args) => html`<text-flip-basic .args=${args}></text-flip-basic>`,
  args: { ...textFlipArgs, onIndexChange: fn() },
  argTypes: textFlipArgTypes,
}

export const Controls: StoryObj<TextFlipBasic["args"]> = {
  render: (args) => html`<text-flip-controls .args=${args}></text-flip-controls>`,
  args: { ...textFlipArgs, onIndexChange: fn() },
  argTypes: textFlipArgTypes,
}
