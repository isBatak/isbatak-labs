import type { Meta, StoryObj } from "@storybook/react-vite"
import { CarouselDemo } from "@isbatak/compositions/ds/react/carousel/usage"
import { CarouselWithIndicatorsDemo } from "@isbatak/compositions/ds/react/carousel/with-indicators"
import { CarouselVerticalDemo } from "@isbatak/compositions/ds/react/carousel/vertical"
import { CarouselSpacingDemo } from "@isbatak/compositions/ds/react/carousel/spacing"
import { CarouselSlidesPerPageDemo } from "@isbatak/compositions/ds/react/carousel/slides-per-page"
import { CarouselSlidesPerMoveDemo } from "@isbatak/compositions/ds/react/carousel/slides-per-move"
import { CarouselWithMouseDragDemo } from "@isbatak/compositions/ds/react/carousel/with-mouse-drag"
import { CarouselWithAutoplayDemo } from "@isbatak/compositions/ds/react/carousel/with-autoplay"
import { CarouselControlledDemo } from "@isbatak/compositions/ds/react/carousel/controlled"
import { CarouselWithProgressTextDemo } from "@isbatak/compositions/ds/react/carousel/with-progress-text"
import { CarouselWithFloatingArrowDemo } from "@isbatak/compositions/ds/react/carousel/with-floating-arrow"
import { CarouselVariableSizeDemo } from "@isbatak/compositions/ds/react/carousel/variable-size"
import { CarouselWithThumbnailsDemo } from "@isbatak/compositions/ds/react/carousel/with-thumbnails"

const meta = {
  title: "DS/Carousel",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <CarouselDemo />,
}

export const WithIndicators: Story = {
  render: () => <CarouselWithIndicatorsDemo />,
}

export const Vertical: Story = {
  render: () => <CarouselVerticalDemo />,
}

export const Spacing: Story = {
  render: () => <CarouselSpacingDemo />,
}

export const SlidesPerPage: Story = {
  render: () => <CarouselSlidesPerPageDemo />,
}

export const SlidesPerMove: Story = {
  render: () => <CarouselSlidesPerMoveDemo />,
}

export const WithMouseDrag: Story = {
  render: () => <CarouselWithMouseDragDemo />,
}

export const WithAutoplay: Story = {
  render: () => <CarouselWithAutoplayDemo />,
}

export const Controlled: Story = {
  render: () => <CarouselControlledDemo />,
}

export const WithProgressText: Story = {
  render: () => <CarouselWithProgressTextDemo />,
}

export const WithFloatingArrow: Story = {
  render: () => <CarouselWithFloatingArrowDemo />,
}

export const VariableSize: Story = {
  render: () => <CarouselVariableSizeDemo />,
}

export const WithThumbnails: Story = {
  render: () => <CarouselWithThumbnailsDemo />,
}
