import type { Meta, StoryObj } from "@storybook/react-vite"
import { TagsInputDemo } from "@isbatak/compositions/ds/react/tags-input/usage"
import { TagsInputDisabledDemo } from "@isbatak/compositions/ds/react/tags-input/disabled"
import { TagsInputMaxDemo } from "@isbatak/compositions/ds/react/tags-input/max"
import { TagsInputSizesDemo } from "@isbatak/compositions/ds/react/tags-input/sizes"
import { TagsInputVariantsDemo } from "@isbatak/compositions/ds/react/tags-input/variants"

const meta = {
  title: "DS/Tags Input",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <TagsInputDemo />,
}

export const Disabled: Story = {
  render: () => <TagsInputDisabledDemo />,
}

export const Max: Story = {
  render: () => <TagsInputMaxDemo />,
}

export const Sizes: Story = {
  render: () => <TagsInputSizesDemo />,
}

export const Variants: Story = {
  render: () => <TagsInputVariantsDemo />,
}
