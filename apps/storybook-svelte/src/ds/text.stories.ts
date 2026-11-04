import type { Meta, StoryObj } from "@storybook/svelte-vite"
import TextDemo from "@isbatak/compositions/ds/svelte/text/usage"
import TextAsChildDemo from "@isbatak/compositions/ds/svelte/text/as-child"
import TextLineClampDemo from "@isbatak/compositions/ds/svelte/text/line-clamp"
import TextSizesDemo from "@isbatak/compositions/ds/svelte/text/sizes"
import TextTruncateDemo from "@isbatak/compositions/ds/svelte/text/truncate"
import TextWeightsDemo from "@isbatak/compositions/ds/svelte/text/weights"

const meta = {
  title: "DS/Text",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof TextDemo> = {
  render: () => ({ Component: TextDemo }),
}

export const AsChild: StoryObj<typeof TextAsChildDemo> = {
  render: () => ({ Component: TextAsChildDemo }),
}

export const LineClamp: StoryObj<typeof TextLineClampDemo> = {
  render: () => ({ Component: TextLineClampDemo }),
}

export const Sizes: StoryObj<typeof TextSizesDemo> = {
  render: () => ({ Component: TextSizesDemo }),
}

export const Truncate: StoryObj<typeof TextTruncateDemo> = {
  render: () => ({ Component: TextTruncateDemo }),
}

export const Weights: StoryObj<typeof TextWeightsDemo> = {
  render: () => ({ Component: TextWeightsDemo }),
}
