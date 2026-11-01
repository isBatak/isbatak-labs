import { iconArgs, iconArgTypes } from "@isbatak/storybook-shared"
import type { Meta, StoryObj } from "@storybook/svelte-vite"
import BasicExample from "./basic.svelte"
import ColorExample from "./color.svelte"
import FontSizeExample from "./font-size.svelte"
import GalleryExample from "./gallery.svelte"
import SizesExample from "./sizes.svelte"

const meta = {
  title: "Icon",
} satisfies Meta

export default meta

export const Basic: StoryObj<typeof BasicExample> = {
  render: (args) => ({ Component: BasicExample, props: args }),
  args: iconArgs,
  argTypes: iconArgTypes,
}

export const Sizes: StoryObj<typeof SizesExample> = {
  render: () => ({ Component: SizesExample }),
}

export const FontSize: StoryObj<typeof FontSizeExample> = {
  render: () => ({ Component: FontSizeExample }),
}

export const Color: StoryObj<typeof ColorExample> = {
  render: () => ({ Component: ColorExample }),
}

export const Gallery: StoryObj<typeof GalleryExample> = {
  render: () => ({ Component: GalleryExample }),
}
