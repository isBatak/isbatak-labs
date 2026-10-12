import { textFlipArgs, textFlipArgTypes } from "@isbatak/storybook-shared"
import { fn } from "storybook/test"
import type { Meta, StoryObj } from "storybook-solidjs-vite"
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
