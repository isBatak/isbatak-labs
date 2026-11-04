import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { HeadingDemo } from "@isbatak/compositions/ds/solid/heading/usage"
import { HeadingAsChildDemo } from "@isbatak/compositions/ds/solid/heading/as-child"
import { HeadingSizesDemo } from "@isbatak/compositions/ds/solid/heading/sizes"
import { HeadingWeightsDemo } from "@isbatak/compositions/ds/solid/heading/weights"
import { HeadingWithHighlightDemo } from "@isbatak/compositions/ds/solid/heading/with-highlight"

const meta = {
  title: "DS/Heading",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <HeadingDemo />,
}

export const AsChild: Story = {
  render: () => <HeadingAsChildDemo />,
}

export const Sizes: Story = {
  render: () => <HeadingSizesDemo />,
}

export const Weights: Story = {
  render: () => <HeadingWeightsDemo />,
}

export const WithHighlight: Story = {
  render: () => <HeadingWithHighlightDemo />,
}
