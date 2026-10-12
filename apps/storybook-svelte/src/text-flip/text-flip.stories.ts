import { textFlipArgs, textFlipArgTypes } from "@isbatak/storybook-shared"
import type { Meta, StoryObj } from "@storybook/svelte-vite"
import { fn } from "storybook/test"
import BasicExample from "./basic.svelte"
import ControlsExample from "./controls.svelte"

const meta = {
  title: "Text flip",
} satisfies Meta

export default meta

export const Basic: StoryObj<typeof BasicExample> = {
  render: (args) => ({ Component: BasicExample, props: args }),
  args: { ...textFlipArgs, onIndexChange: fn() },
  argTypes: textFlipArgTypes,
}

export const Controls: StoryObj<typeof ControlsExample> = {
  render: (args) => ({ Component: ControlsExample, props: args }),
  args: { ...textFlipArgs, onIndexChange: fn() },
  argTypes: textFlipArgTypes,
}
