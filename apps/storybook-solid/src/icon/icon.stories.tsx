import { iconArgs, iconArgTypes } from "@isbatak/storybook-shared"
import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { Basic as BasicExample } from "./basic"
import { Color as ColorExample } from "./color"
import { FontSize as FontSizeExample } from "./font-size"
import { Gallery as GalleryExample } from "./gallery"
import { Sizes as SizesExample } from "./sizes"

const meta = {
  title: "Icon",
} satisfies Meta

export default meta

export const Basic: StoryObj<typeof BasicExample> = {
  render: (args) => <BasicExample {...args} />,
  args: iconArgs,
  argTypes: iconArgTypes,
}

export const Sizes: StoryObj<typeof SizesExample> = {
  render: () => <SizesExample />,
}

export const FontSize: StoryObj<typeof FontSizeExample> = {
  render: () => <FontSizeExample />,
}

export const Color: StoryObj<typeof ColorExample> = {
  render: () => <ColorExample />,
}

export const Gallery: StoryObj<typeof GalleryExample> = {
  render: () => <GalleryExample />,
}
