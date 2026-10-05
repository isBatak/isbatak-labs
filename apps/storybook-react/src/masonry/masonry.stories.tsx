import { masonryArgs, masonryArgTypes } from "@isbatak/storybook-shared"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { fn } from "storybook/test"
import { Basic as BasicExample } from "./basic"
import { Dynamic as DynamicExample } from "./dynamic"
import { Images as ImagesExample } from "./images"
import { Spanning as SpanningExample } from "./spanning"
import { VariableHeight as VariableHeightExample } from "./variable-height"

const meta = {
  title: "Masonry",
} satisfies Meta

export default meta

export const Basic: StoryObj<typeof BasicExample> = {
  render: (args) => <BasicExample {...args} />,
  args: { ...masonryArgs, onLayoutChange: fn() },
  argTypes: masonryArgTypes,
}

export const Images: StoryObj<typeof ImagesExample> = {
  render: (args) => <ImagesExample {...args} />,
  args: { ...masonryArgs, columns: 3, onLayoutChange: fn() },
  argTypes: masonryArgTypes,
}

export const VariableHeight: StoryObj<typeof VariableHeightExample> = {
  render: (args) => <VariableHeightExample {...args} />,
  args: { ...masonryArgs, columns: 3, onLayoutChange: fn() },
  argTypes: masonryArgTypes,
}

export const Spanning: StoryObj<typeof SpanningExample> = {
  render: (args) => <SpanningExample {...args} />,
  args: { ...masonryArgs, columns: 3, onLayoutChange: fn() },
  argTypes: masonryArgTypes,
}

export const Dynamic: StoryObj<typeof DynamicExample> = {
  render: (args) => <DynamicExample {...args} />,
  args: { ...masonryArgs, onLayoutChange: fn() },
  argTypes: masonryArgTypes,
}
