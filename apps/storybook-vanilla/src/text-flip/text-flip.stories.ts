import { textFlipArgs, textFlipArgTypes } from "@isbatak/storybook-shared"
import type { Meta, StoryObj } from "@storybook/html-vite"
import { fn } from "storybook/test"
import { createBasic, type BasicProps } from "./basic"
import { createControls, type ControlsProps } from "./controls"

const meta = {
  title: "Text flip",
} satisfies Meta

export default meta

export const Basic: StoryObj<BasicProps> = {
  render: (args) => createBasic(args),
  args: { ...textFlipArgs, onIndexChange: fn() },
  argTypes: textFlipArgTypes,
}

export const Controls: StoryObj<ControlsProps> = {
  render: (args) => createControls(args),
  args: { ...textFlipArgs, onIndexChange: fn() },
  argTypes: textFlipArgTypes,
}
