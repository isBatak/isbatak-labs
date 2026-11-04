import type { Meta, StoryObj } from "@storybook/svelte-vite"
import BlockquoteDemo from "@isbatak/compositions/ds/svelte/blockquote/usage"
import BlockquoteJustifyDemo from "@isbatak/compositions/ds/svelte/blockquote/justify"
import BlockquoteVariantsDemo from "@isbatak/compositions/ds/svelte/blockquote/variants"
import BlockquoteWithCaptionDemo from "@isbatak/compositions/ds/svelte/blockquote/with-caption"
import BlockquoteWithIconDemo from "@isbatak/compositions/ds/svelte/blockquote/with-icon"

const meta = {
  title: "DS/Blockquote",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof BlockquoteDemo> = {
  render: () => ({ Component: BlockquoteDemo }),
}

export const Justify: StoryObj<typeof BlockquoteJustifyDemo> = {
  render: () => ({ Component: BlockquoteJustifyDemo }),
}

export const Variants: StoryObj<typeof BlockquoteVariantsDemo> = {
  render: () => ({ Component: BlockquoteVariantsDemo }),
}

export const WithCaption: StoryObj<typeof BlockquoteWithCaptionDemo> = {
  render: () => ({ Component: BlockquoteWithCaptionDemo }),
}

export const WithIcon: StoryObj<typeof BlockquoteWithIconDemo> = {
  render: () => ({ Component: BlockquoteWithIconDemo }),
}
