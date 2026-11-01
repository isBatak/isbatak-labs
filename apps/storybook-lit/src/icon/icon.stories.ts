import "@isbatak/lit-ui/icon"
import { type IconControls, iconArgs, iconArgTypes } from "@isbatak/storybook-shared"
import type { Meta, StoryObj } from "@storybook/web-components-vite"
import { html } from "lit"
import { color } from "./color"
import { fontSize } from "./font-size"
import "./icon-gallery"
import { sizes } from "./sizes"

const meta = {
  title: "Icon",
} satisfies Meta

export default meta

export const Basic: StoryObj<IconControls> = {
  render: (args) => html`<ib-icon name=${args.name} size=${args.size}></ib-icon>`,
  args: iconArgs,
  argTypes: iconArgTypes,
}

export const Sizes: StoryObj = {
  render: () => sizes(),
}

export const FontSize: StoryObj = {
  render: () => fontSize(),
}

export const Color: StoryObj = {
  render: () => color(),
}

export const Gallery: StoryObj = {
  render: () => html`<icon-gallery></icon-gallery>`,
}
