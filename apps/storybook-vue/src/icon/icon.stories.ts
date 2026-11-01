import { iconArgs, iconArgTypes } from "@isbatak/storybook-shared"
import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import BasicExample from "./basic.vue"
import ColorExample from "./color.vue"
import FontSizeExample from "./font-size.vue"
import GalleryExample from "./gallery.vue"
import SizesExample from "./sizes.vue"

const meta = {
  title: "Icon",
} satisfies Meta

export default meta

export const Basic: StoryObj<typeof BasicExample> = {
  render: (args) => ({ setup: () => () => h(BasicExample, args) }),
  args: iconArgs,
  argTypes: iconArgTypes,
}

export const Sizes: StoryObj<typeof SizesExample> = {
  render: () => ({ setup: () => () => h(SizesExample) }),
}

export const FontSize: StoryObj<typeof FontSizeExample> = {
  render: () => ({ setup: () => () => h(FontSizeExample) }),
}

export const Color: StoryObj<typeof ColorExample> = {
  render: () => ({ setup: () => () => h(ColorExample) }),
}

export const Gallery: StoryObj<typeof GalleryExample> = {
  render: () => ({ setup: () => () => h(GalleryExample) }),
}
