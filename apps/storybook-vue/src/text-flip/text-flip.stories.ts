import { textFlipArgs, textFlipArgTypes } from "@isbatak/storybook-shared"
import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { fn } from "storybook/test"
import { h } from "vue"
import BasicExample from "./basic.vue"
import ControlsExample from "./controls.vue"

const meta = {
  title: "Text flip",
} satisfies Meta

export default meta

export const Basic: StoryObj<typeof BasicExample> = {
  render: (args) => ({ setup: () => () => h(BasicExample, args) }),
  args: { ...textFlipArgs, onIndexChange: fn() },
  argTypes: textFlipArgTypes,
}

export const Controls: StoryObj<typeof ControlsExample> = {
  render: (args) => ({ setup: () => () => h(ControlsExample, args) }),
  args: { ...textFlipArgs, onIndexChange: fn() },
  argTypes: textFlipArgTypes,
}
