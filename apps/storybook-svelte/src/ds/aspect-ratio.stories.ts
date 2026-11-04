import type { Meta, StoryObj } from "@storybook/svelte-vite"
import AspectRatioDemo from "@isbatak/compositions/ds/svelte/aspect-ratio/usage"
import AspectRatioResponsiveDemo from "@isbatak/compositions/ds/svelte/aspect-ratio/responsive"
import AspectRatioWithImageDemo from "@isbatak/compositions/ds/svelte/aspect-ratio/with-image"
import AspectRatioWithMapDemo from "@isbatak/compositions/ds/svelte/aspect-ratio/with-map"
import AspectRatioWithVideoDemo from "@isbatak/compositions/ds/svelte/aspect-ratio/with-video"

const meta = {
  title: "DS/Aspect ratio",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof AspectRatioDemo> = {
  render: () => ({ Component: AspectRatioDemo }),
}

export const Responsive: StoryObj<typeof AspectRatioResponsiveDemo> = {
  render: () => ({ Component: AspectRatioResponsiveDemo }),
}

export const WithImage: StoryObj<typeof AspectRatioWithImageDemo> = {
  render: () => ({ Component: AspectRatioWithImageDemo }),
}

export const WithMap: StoryObj<typeof AspectRatioWithMapDemo> = {
  render: () => ({ Component: AspectRatioWithMapDemo }),
}

export const WithVideo: StoryObj<typeof AspectRatioWithVideoDemo> = {
  render: () => ({ Component: AspectRatioWithVideoDemo }),
}
