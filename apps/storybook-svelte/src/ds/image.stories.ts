import type { Meta, StoryObj } from "@storybook/svelte-vite"
import ImageDemo from "@isbatak/compositions/ds/svelte/image/usage"
import ImageCircularDemo from "@isbatak/compositions/ds/svelte/image/circular"
import ImageWithAspectRatioDemo from "@isbatak/compositions/ds/svelte/image/with-aspect-ratio"
import ImageWithFitDemo from "@isbatak/compositions/ds/svelte/image/with-fit"
import ImageWithHtmlDimensionsDemo from "@isbatak/compositions/ds/svelte/image/with-html-dimensions"

const meta = {
  title: "DS/Image",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof ImageDemo> = {
  render: () => ({ Component: ImageDemo }),
}

export const Circular: StoryObj<typeof ImageCircularDemo> = {
  render: () => ({ Component: ImageCircularDemo }),
}

export const WithAspectRatio: StoryObj<typeof ImageWithAspectRatioDemo> = {
  render: () => ({ Component: ImageWithAspectRatioDemo }),
}

export const WithFit: StoryObj<typeof ImageWithFitDemo> = {
  render: () => ({ Component: ImageWithFitDemo }),
}

export const WithHtmlDimensions: StoryObj<typeof ImageWithHtmlDimensionsDemo> = {
  render: () => ({ Component: ImageWithHtmlDimensionsDemo }),
}
