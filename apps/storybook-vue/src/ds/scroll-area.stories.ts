import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import ScrollAreaDemo from "@isbatak/compositions/ds/vue/scroll-area/usage"
import ScrollAreaHorizontalDemo from "@isbatak/compositions/ds/vue/scroll-area/horizontal"
import ScrollAreaBothDirectionsDemo from "@isbatak/compositions/ds/vue/scroll-area/both-directions"
import ScrollAreaSizesDemo from "@isbatak/compositions/ds/vue/scroll-area/sizes"
import ScrollAreaVariantsDemo from "@isbatak/compositions/ds/vue/scroll-area/variants"
import ScrollAreaScrollShadowDemo from "@isbatak/compositions/ds/vue/scroll-area/scroll-shadow"
import ScrollAreaThumbStylingDemo from "@isbatak/compositions/ds/vue/scroll-area/thumb-styling"
import ScrollAreaScrollToEdgeDemo from "@isbatak/compositions/ds/vue/scroll-area/scroll-to-edge"
import ScrollAreaScrollToPositionDemo from "@isbatak/compositions/ds/vue/scroll-area/scroll-to-position"

const meta = {
  title: "DS/Scroll area",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(ScrollAreaDemo) }),
}

export const Horizontal: Story = {
  render: () => ({ setup: () => () => h(ScrollAreaHorizontalDemo) }),
}

export const BothDirections: Story = {
  render: () => ({ setup: () => () => h(ScrollAreaBothDirectionsDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(ScrollAreaSizesDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(ScrollAreaVariantsDemo) }),
}

export const ScrollShadow: Story = {
  render: () => ({ setup: () => () => h(ScrollAreaScrollShadowDemo) }),
}

export const ThumbStyling: Story = {
  render: () => ({ setup: () => () => h(ScrollAreaThumbStylingDemo) }),
}

export const ScrollToEdge: Story = {
  render: () => ({ setup: () => () => h(ScrollAreaScrollToEdgeDemo) }),
}

export const ScrollToPosition: Story = {
  render: () => ({ setup: () => () => h(ScrollAreaScrollToPositionDemo) }),
}
