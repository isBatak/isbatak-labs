import { masonryArgs, masonryArgTypes } from "@isbatak/storybook-shared"
import type { Meta, StoryObj } from "@storybook/html-vite"
import { fn } from "storybook/test"
import { createBasic, type BasicProps } from "./basic"
import { createDynamic, type DynamicProps } from "./dynamic"
import { createImages, type ImagesProps } from "./images"
import { createSpanning, type SpanningProps } from "./spanning"
import { createVariableHeight, type VariableHeightProps } from "./variable-height"

const meta = {
  title: "Masonry",
} satisfies Meta

export default meta

export const Basic: StoryObj<BasicProps> = {
  render: (args) => createBasic(args),
  args: { ...masonryArgs, onLayoutChange: fn() },
  argTypes: masonryArgTypes,
}

export const Images: StoryObj<ImagesProps> = {
  render: (args) => createImages(args),
  args: { ...masonryArgs, columns: 3, onLayoutChange: fn() },
  argTypes: masonryArgTypes,
}

export const VariableHeight: StoryObj<VariableHeightProps> = {
  render: (args) => createVariableHeight(args),
  args: { ...masonryArgs, columns: 3, onLayoutChange: fn() },
  argTypes: masonryArgTypes,
}

export const Spanning: StoryObj<SpanningProps> = {
  render: (args) => createSpanning(args),
  args: { ...masonryArgs, columns: 3, onLayoutChange: fn() },
  argTypes: masonryArgTypes,
}

export const Dynamic: StoryObj<DynamicProps> = {
  render: (args) => createDynamic(args),
  args: { ...masonryArgs, onLayoutChange: fn() },
  argTypes: masonryArgTypes,
}
