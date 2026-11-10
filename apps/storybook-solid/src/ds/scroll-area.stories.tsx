import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { ScrollAreaDemo } from "@isbatak/compositions/ds/solid/scroll-area/usage"
import { ScrollAreaHorizontalDemo } from "@isbatak/compositions/ds/solid/scroll-area/horizontal"
import { ScrollAreaBothDirectionsDemo } from "@isbatak/compositions/ds/solid/scroll-area/both-directions"
import { ScrollAreaSizesDemo } from "@isbatak/compositions/ds/solid/scroll-area/sizes"
import { ScrollAreaVariantsDemo } from "@isbatak/compositions/ds/solid/scroll-area/variants"
import { ScrollAreaScrollShadowDemo } from "@isbatak/compositions/ds/solid/scroll-area/scroll-shadow"
import { ScrollAreaThumbStylingDemo } from "@isbatak/compositions/ds/solid/scroll-area/thumb-styling"
import { ScrollAreaScrollToEdgeDemo } from "@isbatak/compositions/ds/solid/scroll-area/scroll-to-edge"
import { ScrollAreaScrollToPositionDemo } from "@isbatak/compositions/ds/solid/scroll-area/scroll-to-position"

const meta = {
  title: "DS/Scroll area",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <ScrollAreaDemo />,
}

export const Horizontal: Story = {
  render: () => <ScrollAreaHorizontalDemo />,
}

export const BothDirections: Story = {
  render: () => <ScrollAreaBothDirectionsDemo />,
}

export const Sizes: Story = {
  render: () => <ScrollAreaSizesDemo />,
}

export const Variants: Story = {
  render: () => <ScrollAreaVariantsDemo />,
}

export const ScrollShadow: Story = {
  render: () => <ScrollAreaScrollShadowDemo />,
}

export const ThumbStyling: Story = {
  render: () => <ScrollAreaThumbStylingDemo />,
}

export const ScrollToEdge: Story = {
  render: () => <ScrollAreaScrollToEdgeDemo />,
}

export const ScrollToPosition: Story = {
  render: () => <ScrollAreaScrollToPositionDemo />,
}
