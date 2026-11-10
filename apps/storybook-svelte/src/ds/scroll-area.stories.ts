import type { Meta, StoryObj } from "@storybook/svelte-vite"
import ScrollAreaDemo from "@isbatak/compositions/ds/svelte/scroll-area/usage"
import ScrollAreaHorizontalDemo from "@isbatak/compositions/ds/svelte/scroll-area/horizontal"
import ScrollAreaBothDirectionsDemo from "@isbatak/compositions/ds/svelte/scroll-area/both-directions"
import ScrollAreaSizesDemo from "@isbatak/compositions/ds/svelte/scroll-area/sizes"
import ScrollAreaVariantsDemo from "@isbatak/compositions/ds/svelte/scroll-area/variants"
import ScrollAreaScrollShadowDemo from "@isbatak/compositions/ds/svelte/scroll-area/scroll-shadow"
import ScrollAreaThumbStylingDemo from "@isbatak/compositions/ds/svelte/scroll-area/thumb-styling"
import ScrollAreaScrollToEdgeDemo from "@isbatak/compositions/ds/svelte/scroll-area/scroll-to-edge"
import ScrollAreaScrollToPositionDemo from "@isbatak/compositions/ds/svelte/scroll-area/scroll-to-position"

const meta = {
  title: "DS/Scroll area",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof ScrollAreaDemo> = {
  render: () => ({ Component: ScrollAreaDemo }),
}

export const Horizontal: StoryObj<typeof ScrollAreaHorizontalDemo> = {
  render: () => ({ Component: ScrollAreaHorizontalDemo }),
}

export const BothDirections: StoryObj<typeof ScrollAreaBothDirectionsDemo> = {
  render: () => ({ Component: ScrollAreaBothDirectionsDemo }),
}

export const Sizes: StoryObj<typeof ScrollAreaSizesDemo> = {
  render: () => ({ Component: ScrollAreaSizesDemo }),
}

export const Variants: StoryObj<typeof ScrollAreaVariantsDemo> = {
  render: () => ({ Component: ScrollAreaVariantsDemo }),
}

export const ScrollShadow: StoryObj<typeof ScrollAreaScrollShadowDemo> = {
  render: () => ({ Component: ScrollAreaScrollShadowDemo }),
}

export const ThumbStyling: StoryObj<typeof ScrollAreaThumbStylingDemo> = {
  render: () => ({ Component: ScrollAreaThumbStylingDemo }),
}

export const ScrollToEdge: StoryObj<typeof ScrollAreaScrollToEdgeDemo> = {
  render: () => ({ Component: ScrollAreaScrollToEdgeDemo }),
}

export const ScrollToPosition: StoryObj<typeof ScrollAreaScrollToPositionDemo> = {
  render: () => ({ Component: ScrollAreaScrollToPositionDemo }),
}
