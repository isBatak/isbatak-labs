import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { AspectRatioDemo } from "@isbatak/compositions/ds/solid/aspect-ratio/usage"
import { AspectRatioResponsiveDemo } from "@isbatak/compositions/ds/solid/aspect-ratio/responsive"
import { AspectRatioWithImageDemo } from "@isbatak/compositions/ds/solid/aspect-ratio/with-image"
import { AspectRatioWithMapDemo } from "@isbatak/compositions/ds/solid/aspect-ratio/with-map"
import { AspectRatioWithVideoDemo } from "@isbatak/compositions/ds/solid/aspect-ratio/with-video"

const meta = {
  title: "DS/Aspect ratio",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <AspectRatioDemo />,
}

export const Responsive: Story = {
  render: () => <AspectRatioResponsiveDemo />,
}

export const WithImage: Story = {
  render: () => <AspectRatioWithImageDemo />,
}

export const WithMap: Story = {
  render: () => <AspectRatioWithMapDemo />,
}

export const WithVideo: Story = {
  render: () => <AspectRatioWithVideoDemo />,
}
