import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { TextDemo } from "@isbatak/compositions/ds/solid/text/usage"
import { TextAsChildDemo } from "@isbatak/compositions/ds/solid/text/as-child"
import { TextLineClampDemo } from "@isbatak/compositions/ds/solid/text/line-clamp"
import { TextSizesDemo } from "@isbatak/compositions/ds/solid/text/sizes"
import { TextTruncateDemo } from "@isbatak/compositions/ds/solid/text/truncate"
import { TextWeightsDemo } from "@isbatak/compositions/ds/solid/text/weights"

const meta = {
  title: "DS/Text",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <TextDemo />,
}

export const AsChild: Story = {
  render: () => <TextAsChildDemo />,
}

export const LineClamp: Story = {
  render: () => <TextLineClampDemo />,
}

export const Sizes: Story = {
  render: () => <TextSizesDemo />,
}

export const Truncate: Story = {
  render: () => <TextTruncateDemo />,
}

export const Weights: Story = {
  render: () => <TextWeightsDemo />,
}
