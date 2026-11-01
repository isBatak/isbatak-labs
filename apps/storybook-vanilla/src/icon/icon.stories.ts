import { type IconControls, iconArgs, iconArgTypes } from "@isbatak/storybook-shared"
import type { Meta, StoryObj } from "@storybook/html-vite"
import { createBasic } from "./basic"
import { createColor } from "./color"
import { createFontSize } from "./font-size"
import { createGallery } from "./gallery"
import { createSizes } from "./sizes"

const meta = {
  title: "Icon",
} satisfies Meta

export default meta

export const Basic: StoryObj<IconControls> = {
  render: (args) => createBasic(args),
  args: iconArgs,
  argTypes: iconArgTypes,
}

export const Sizes: StoryObj = {
  render: () => createSizes(),
}

export const FontSize: StoryObj = {
  render: () => createFontSize(),
}

export const Color: StoryObj = {
  render: () => createColor(),
}

export const Gallery: StoryObj = {
  render: () => createGallery(),
}
