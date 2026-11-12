import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import ImageDemo from "@isbatak/compositions/ds/vue/image/usage"
import ImageCircularDemo from "@isbatak/compositions/ds/vue/image/circular"
import ImageWithAspectRatioDemo from "@isbatak/compositions/ds/vue/image/with-aspect-ratio"
import ImageWithFitDemo from "@isbatak/compositions/ds/vue/image/with-fit"
import ImageWithHtmlDimensionsDemo from "@isbatak/compositions/ds/vue/image/with-html-dimensions"

const meta = {
  title: "DS/Image",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(ImageDemo) }),
}

export const Circular: Story = {
  render: () => ({ setup: () => () => h(ImageCircularDemo) }),
}

export const WithAspectRatio: Story = {
  render: () => ({ setup: () => () => h(ImageWithAspectRatioDemo) }),
}

export const WithFit: Story = {
  render: () => ({ setup: () => () => h(ImageWithFitDemo) }),
}

export const WithHtmlDimensions: Story = {
  render: () => ({ setup: () => () => h(ImageWithHtmlDimensionsDemo) }),
}
