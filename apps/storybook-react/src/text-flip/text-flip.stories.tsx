import { textFlipArgs, textFlipArgTypes } from "@isbatak/storybook-shared"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { fn } from "storybook/test"
import { Basic as BasicExample } from "./basic"
import { Controls as ControlsExample } from "./controls"

const meta = {
  title: "Text flip",
} satisfies Meta

export default meta

export const Basic: StoryObj<typeof BasicExample> = {
  render: (args) => <BasicExample {...args} />,
  args: { ...textFlipArgs, onIndexChange: fn() },
  argTypes: textFlipArgTypes,
}

export const Controls: StoryObj<typeof ControlsExample> = {
  render: (args) => <ControlsExample {...args} />,
  args: { ...textFlipArgs, onIndexChange: fn() },
  argTypes: textFlipArgTypes,
}
