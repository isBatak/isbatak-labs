import { wheelPickerArgs, wheelPickerArgTypes } from "@isbatak/storybook-shared"
import type { Meta, StoryObj } from "@storybook/web-components-vite"
import { html } from "lit"
import { fn } from "storybook/test"
import "./basic"
import type { BasicProps } from "./basic"
import "./controlled"
import "./multiple"

const meta = {
  title: "Wheel Picker",
} satisfies Meta

export default meta

export const Basic: StoryObj<BasicProps> = {
  render: (args) => html`
    <wheel-picker-basic
      .disabled=${args.disabled}
      .loop=${args.loop}
      .visibleCount=${args.visibleCount}
      .itemHeight=${args.itemHeight}
      .onValueChange=${args.onValueChange}
    ></wheel-picker-basic>
  `,
  args: { ...wheelPickerArgs, onValueChange: fn() },
  argTypes: wheelPickerArgTypes,
}

export const Controlled: StoryObj = {
  render: () => html`<wheel-picker-controlled></wheel-picker-controlled>`,
}

export const Multiple: StoryObj = {
  render: () => html`<wheel-picker-multiple></wheel-picker-multiple>`,
}
