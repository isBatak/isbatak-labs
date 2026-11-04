import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import AspectRatioDemo from "@isbatak/compositions/ds/vue/aspect-ratio/usage"
import AspectRatioResponsiveDemo from "@isbatak/compositions/ds/vue/aspect-ratio/responsive"
import AspectRatioWithImageDemo from "@isbatak/compositions/ds/vue/aspect-ratio/with-image"
import AspectRatioWithMapDemo from "@isbatak/compositions/ds/vue/aspect-ratio/with-map"
import AspectRatioWithVideoDemo from "@isbatak/compositions/ds/vue/aspect-ratio/with-video"

const meta = {
  title: "DS/Aspect ratio",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(AspectRatioDemo) }),
}

export const Responsive: Story = {
  render: () => ({ setup: () => () => h(AspectRatioResponsiveDemo) }),
}

export const WithImage: Story = {
  render: () => ({ setup: () => () => h(AspectRatioWithImageDemo) }),
}

export const WithMap: Story = {
  render: () => ({ setup: () => () => h(AspectRatioWithMapDemo) }),
}

export const WithVideo: Story = {
  render: () => ({ setup: () => () => h(AspectRatioWithVideoDemo) }),
}
