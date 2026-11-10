import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { TocDemo } from "@isbatak/compositions/ds/solid/toc/usage"
import { TocSizesDemo } from "@isbatak/compositions/ds/solid/toc/sizes"
import { TocTrackDemo } from "@isbatak/compositions/ds/solid/toc/track"

const meta = {
  title: "DS/Table of contents",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <TocDemo />,
}

export const Sizes: Story = {
  render: () => <TocSizesDemo />,
}

export const Track: Story = {
  render: () => <TocTrackDemo />,
}
