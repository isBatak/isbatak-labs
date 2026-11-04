import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { BlockquoteDemo } from "@isbatak/compositions/ds/solid/blockquote/usage"
import { BlockquoteJustifyDemo } from "@isbatak/compositions/ds/solid/blockquote/justify"
import { BlockquoteVariantsDemo } from "@isbatak/compositions/ds/solid/blockquote/variants"
import { BlockquoteWithCaptionDemo } from "@isbatak/compositions/ds/solid/blockquote/with-caption"
import { BlockquoteWithIconDemo } from "@isbatak/compositions/ds/solid/blockquote/with-icon"

const meta = {
  title: "DS/Blockquote",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <BlockquoteDemo />,
}

export const Justify: Story = {
  render: () => <BlockquoteJustifyDemo />,
}

export const Variants: Story = {
  render: () => <BlockquoteVariantsDemo />,
}

export const WithCaption: Story = {
  render: () => <BlockquoteWithCaptionDemo />,
}

export const WithIcon: Story = {
  render: () => <BlockquoteWithIconDemo />,
}
