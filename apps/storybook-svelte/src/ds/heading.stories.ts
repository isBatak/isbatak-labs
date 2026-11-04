import type { Meta, StoryObj } from "@storybook/svelte-vite"
import HeadingDemo from "@isbatak/compositions/ds/svelte/heading/usage"
import HeadingAsChildDemo from "@isbatak/compositions/ds/svelte/heading/as-child"
import HeadingSizesDemo from "@isbatak/compositions/ds/svelte/heading/sizes"
import HeadingWeightsDemo from "@isbatak/compositions/ds/svelte/heading/weights"
import HeadingWithHighlightDemo from "@isbatak/compositions/ds/svelte/heading/with-highlight"

const meta = {
  title: "DS/Heading",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof HeadingDemo> = {
  render: () => ({ Component: HeadingDemo }),
}

export const AsChild: StoryObj<typeof HeadingAsChildDemo> = {
  render: () => ({ Component: HeadingAsChildDemo }),
}

export const Sizes: StoryObj<typeof HeadingSizesDemo> = {
  render: () => ({ Component: HeadingSizesDemo }),
}

export const Weights: StoryObj<typeof HeadingWeightsDemo> = {
  render: () => ({ Component: HeadingWeightsDemo }),
}

export const WithHighlight: StoryObj<typeof HeadingWithHighlightDemo> = {
  render: () => ({ Component: HeadingWithHighlightDemo }),
}
