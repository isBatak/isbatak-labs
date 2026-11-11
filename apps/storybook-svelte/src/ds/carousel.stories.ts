import type { Meta, StoryObj } from "@storybook/svelte-vite"
import CarouselDemo from "@isbatak/compositions/ds/svelte/carousel/usage"
import CarouselWithIndicatorsDemo from "@isbatak/compositions/ds/svelte/carousel/with-indicators"
import CarouselVerticalDemo from "@isbatak/compositions/ds/svelte/carousel/vertical"
import CarouselSpacingDemo from "@isbatak/compositions/ds/svelte/carousel/spacing"
import CarouselSlidesPerPageDemo from "@isbatak/compositions/ds/svelte/carousel/slides-per-page"
import CarouselSlidesPerMoveDemo from "@isbatak/compositions/ds/svelte/carousel/slides-per-move"
import CarouselWithMouseDragDemo from "@isbatak/compositions/ds/svelte/carousel/with-mouse-drag"
import CarouselWithAutoplayDemo from "@isbatak/compositions/ds/svelte/carousel/with-autoplay"
import CarouselControlledDemo from "@isbatak/compositions/ds/svelte/carousel/controlled"
import CarouselWithProgressTextDemo from "@isbatak/compositions/ds/svelte/carousel/with-progress-text"
import CarouselWithFloatingArrowDemo from "@isbatak/compositions/ds/svelte/carousel/with-floating-arrow"
import CarouselVariableSizeDemo from "@isbatak/compositions/ds/svelte/carousel/variable-size"
import CarouselWithThumbnailsDemo from "@isbatak/compositions/ds/svelte/carousel/with-thumbnails"

const meta = {
  title: "DS/Carousel",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof CarouselDemo> = {
  render: () => ({ Component: CarouselDemo }),
}

export const WithIndicators: StoryObj<typeof CarouselWithIndicatorsDemo> = {
  render: () => ({ Component: CarouselWithIndicatorsDemo }),
}

export const Vertical: StoryObj<typeof CarouselVerticalDemo> = {
  render: () => ({ Component: CarouselVerticalDemo }),
}

export const Spacing: StoryObj<typeof CarouselSpacingDemo> = {
  render: () => ({ Component: CarouselSpacingDemo }),
}

export const SlidesPerPage: StoryObj<typeof CarouselSlidesPerPageDemo> = {
  render: () => ({ Component: CarouselSlidesPerPageDemo }),
}

export const SlidesPerMove: StoryObj<typeof CarouselSlidesPerMoveDemo> = {
  render: () => ({ Component: CarouselSlidesPerMoveDemo }),
}

export const WithMouseDrag: StoryObj<typeof CarouselWithMouseDragDemo> = {
  render: () => ({ Component: CarouselWithMouseDragDemo }),
}

export const WithAutoplay: StoryObj<typeof CarouselWithAutoplayDemo> = {
  render: () => ({ Component: CarouselWithAutoplayDemo }),
}

export const Controlled: StoryObj<typeof CarouselControlledDemo> = {
  render: () => ({ Component: CarouselControlledDemo }),
}

export const WithProgressText: StoryObj<typeof CarouselWithProgressTextDemo> = {
  render: () => ({ Component: CarouselWithProgressTextDemo }),
}

export const WithFloatingArrow: StoryObj<typeof CarouselWithFloatingArrowDemo> = {
  render: () => ({ Component: CarouselWithFloatingArrowDemo }),
}

export const VariableSize: StoryObj<typeof CarouselVariableSizeDemo> = {
  render: () => ({ Component: CarouselVariableSizeDemo }),
}

export const WithThumbnails: StoryObj<typeof CarouselWithThumbnailsDemo> = {
  render: () => ({ Component: CarouselWithThumbnailsDemo }),
}
