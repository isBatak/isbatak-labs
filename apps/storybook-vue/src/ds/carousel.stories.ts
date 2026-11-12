import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import CarouselDemo from "@isbatak/compositions/ds/vue/carousel/usage"
import CarouselWithIndicatorsDemo from "@isbatak/compositions/ds/vue/carousel/with-indicators"
import CarouselVerticalDemo from "@isbatak/compositions/ds/vue/carousel/vertical"
import CarouselSpacingDemo from "@isbatak/compositions/ds/vue/carousel/spacing"
import CarouselSlidesPerPageDemo from "@isbatak/compositions/ds/vue/carousel/slides-per-page"
import CarouselSlidesPerMoveDemo from "@isbatak/compositions/ds/vue/carousel/slides-per-move"
import CarouselWithMouseDragDemo from "@isbatak/compositions/ds/vue/carousel/with-mouse-drag"
import CarouselWithAutoplayDemo from "@isbatak/compositions/ds/vue/carousel/with-autoplay"
import CarouselControlledDemo from "@isbatak/compositions/ds/vue/carousel/controlled"
import CarouselWithProgressTextDemo from "@isbatak/compositions/ds/vue/carousel/with-progress-text"
import CarouselWithFloatingArrowDemo from "@isbatak/compositions/ds/vue/carousel/with-floating-arrow"
import CarouselVariableSizeDemo from "@isbatak/compositions/ds/vue/carousel/variable-size"
import CarouselWithThumbnailsDemo from "@isbatak/compositions/ds/vue/carousel/with-thumbnails"

const meta = {
  title: "DS/Carousel",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(CarouselDemo) }),
}

export const WithIndicators: Story = {
  render: () => ({ setup: () => () => h(CarouselWithIndicatorsDemo) }),
}

export const Vertical: Story = {
  render: () => ({ setup: () => () => h(CarouselVerticalDemo) }),
}

export const Spacing: Story = {
  render: () => ({ setup: () => () => h(CarouselSpacingDemo) }),
}

export const SlidesPerPage: Story = {
  render: () => ({ setup: () => () => h(CarouselSlidesPerPageDemo) }),
}

export const SlidesPerMove: Story = {
  render: () => ({ setup: () => () => h(CarouselSlidesPerMoveDemo) }),
}

export const WithMouseDrag: Story = {
  render: () => ({ setup: () => () => h(CarouselWithMouseDragDemo) }),
}

export const WithAutoplay: Story = {
  render: () => ({ setup: () => () => h(CarouselWithAutoplayDemo) }),
}

export const Controlled: Story = {
  render: () => ({ setup: () => () => h(CarouselControlledDemo) }),
}

export const WithProgressText: Story = {
  render: () => ({ setup: () => () => h(CarouselWithProgressTextDemo) }),
}

export const WithFloatingArrow: Story = {
  render: () => ({ setup: () => () => h(CarouselWithFloatingArrowDemo) }),
}

export const VariableSize: Story = {
  render: () => ({ setup: () => () => h(CarouselVariableSizeDemo) }),
}

export const WithThumbnails: Story = {
  render: () => ({ setup: () => () => h(CarouselWithThumbnailsDemo) }),
}
