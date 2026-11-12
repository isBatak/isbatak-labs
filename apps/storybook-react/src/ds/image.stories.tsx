import type { Meta, StoryObj } from "@storybook/react-vite"
import { ImageDemo } from "@isbatak/compositions/ds/react/image/usage"
import { ImageCircularDemo } from "@isbatak/compositions/ds/react/image/circular"
import { ImageWithAspectRatioDemo } from "@isbatak/compositions/ds/react/image/with-aspect-ratio"
import { ImageWithFitDemo } from "@isbatak/compositions/ds/react/image/with-fit"
import { ImageWithHtmlDimensionsDemo } from "@isbatak/compositions/ds/react/image/with-html-dimensions"

const meta = {
  title: "DS/Image",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <ImageDemo />,
}

export const Circular: Story = {
  render: () => <ImageCircularDemo />,
}

export const WithAspectRatio: Story = {
  render: () => <ImageWithAspectRatioDemo />,
}

export const WithFit: Story = {
  render: () => <ImageWithFitDemo />,
}

export const WithHtmlDimensions: Story = {
  render: () => <ImageWithHtmlDimensionsDemo />,
}
