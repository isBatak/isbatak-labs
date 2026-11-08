import { masonryArgs, masonryArgTypes } from "@isbatak/storybook-shared"
import type { Meta, StoryObj } from "@storybook/web-components-vite"
import { html } from "lit"
import { fn } from "storybook/test"
import "./basic"
import "./dynamic"
import "./images"
import type { MasonryStoryProps } from "./masonry-story"
import "./spanning"
import "./variable-height"

const meta = {
  title: "Masonry",
} satisfies Meta

export default meta

export const Basic: StoryObj<MasonryStoryProps> = {
  render: (args) => html`
    <masonry-basic
      .columns=${args.columns}
      .gap=${args.gap}
      .sequential=${args.sequential}
      .minColumnWidth=${args.minColumnWidth}
      .direction=${args.dir}
      .onLayoutChange=${args.onLayoutChange}
    ></masonry-basic>
  `,
  args: { ...masonryArgs, onLayoutChange: fn() },
  argTypes: masonryArgTypes,
}

export const Images: StoryObj<MasonryStoryProps> = {
  render: (args) => html`
    <masonry-images
      .columns=${args.columns}
      .gap=${args.gap}
      .sequential=${args.sequential}
      .minColumnWidth=${args.minColumnWidth}
      .direction=${args.dir}
      .onLayoutChange=${args.onLayoutChange}
    ></masonry-images>
  `,
  args: { ...masonryArgs, columns: 3, onLayoutChange: fn() },
  argTypes: masonryArgTypes,
}

export const VariableHeight: StoryObj<MasonryStoryProps> = {
  render: (args) => html`
    <masonry-variable-height
      .columns=${args.columns}
      .gap=${args.gap}
      .sequential=${args.sequential}
      .minColumnWidth=${args.minColumnWidth}
      .direction=${args.dir}
      .onLayoutChange=${args.onLayoutChange}
    ></masonry-variable-height>
  `,
  args: { ...masonryArgs, columns: 3, onLayoutChange: fn() },
  argTypes: masonryArgTypes,
}

export const Spanning: StoryObj<MasonryStoryProps> = {
  render: (args) => html`
    <masonry-spanning
      .columns=${args.columns}
      .gap=${args.gap}
      .sequential=${args.sequential}
      .minColumnWidth=${args.minColumnWidth}
      .direction=${args.dir}
      .onLayoutChange=${args.onLayoutChange}
    ></masonry-spanning>
  `,
  args: { ...masonryArgs, columns: 3, onLayoutChange: fn() },
  argTypes: masonryArgTypes,
}

export const Dynamic: StoryObj<MasonryStoryProps> = {
  render: (args) => html`
    <masonry-dynamic
      .columns=${args.columns}
      .gap=${args.gap}
      .sequential=${args.sequential}
      .minColumnWidth=${args.minColumnWidth}
      .direction=${args.dir}
      .onLayoutChange=${args.onLayoutChange}
    ></masonry-dynamic>
  `,
  args: { ...masonryArgs, onLayoutChange: fn() },
  argTypes: masonryArgTypes,
}
