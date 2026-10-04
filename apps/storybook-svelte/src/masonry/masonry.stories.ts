import { masonryArgs, masonryArgTypes } from "@isbatak/storybook-shared"
import type { Meta, StoryObj } from "@storybook/svelte-vite"
import { fn } from "storybook/test"
import BasicExample from "./basic.svelte"
import DynamicExample from "./dynamic.svelte"
import ImagesExample from "./images.svelte"
import SpanningExample from "./spanning.svelte"
import VariableHeightExample from "./variable-height.svelte"

const meta = {
  title: "Masonry",
} satisfies Meta

export default meta

export const Basic: StoryObj<typeof BasicExample> = {
  render: (args) => ({ Component: BasicExample, props: args }),
  args: { ...masonryArgs, onLayoutChange: fn() },
  argTypes: masonryArgTypes,
}

export const Images: StoryObj<typeof ImagesExample> = {
  render: (args) => ({ Component: ImagesExample, props: args }),
  args: { ...masonryArgs, columns: 3, onLayoutChange: fn() },
  argTypes: masonryArgTypes,
}

export const VariableHeight: StoryObj<typeof VariableHeightExample> = {
  render: (args) => ({ Component: VariableHeightExample, props: args }),
  args: { ...masonryArgs, columns: 3, onLayoutChange: fn() },
  argTypes: masonryArgTypes,
}

export const Spanning: StoryObj<typeof SpanningExample> = {
  render: (args) => ({ Component: SpanningExample, props: args }),
  args: { ...masonryArgs, columns: 3, onLayoutChange: fn() },
  argTypes: masonryArgTypes,
}

export const Dynamic: StoryObj<typeof DynamicExample> = {
  render: (args) => ({ Component: DynamicExample, props: args }),
  args: { ...masonryArgs, onLayoutChange: fn() },
  argTypes: masonryArgTypes,
}
