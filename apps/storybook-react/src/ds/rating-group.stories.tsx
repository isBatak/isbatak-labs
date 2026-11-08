import type { Meta, StoryObj } from "@storybook/react-vite"
import { RatingGroupDemo } from "@isbatak/compositions/ds/react/rating-group/usage"
import { RatingGroupColorsDemo } from "@isbatak/compositions/ds/react/rating-group/colors"
import { RatingGroupControlledDemo } from "@isbatak/compositions/ds/react/rating-group/controlled"
import { RatingGroupCustomIconDemo } from "@isbatak/compositions/ds/react/rating-group/custom-icon"
import { RatingGroupDisabledDemo } from "@isbatak/compositions/ds/react/rating-group/disabled"
import { RatingGroupHalfDemo } from "@isbatak/compositions/ds/react/rating-group/half"
import { RatingGroupReadOnlyDemo } from "@isbatak/compositions/ds/react/rating-group/read-only"
import { RatingGroupSizesDemo } from "@isbatak/compositions/ds/react/rating-group/sizes"

const meta = {
  title: "DS/Rating group",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <RatingGroupDemo />,
}

export const Colors: Story = {
  render: () => <RatingGroupColorsDemo />,
}

export const Controlled: Story = {
  render: () => <RatingGroupControlledDemo />,
}

export const CustomIcon: Story = {
  render: () => <RatingGroupCustomIconDemo />,
}

export const Disabled: Story = {
  render: () => <RatingGroupDisabledDemo />,
}

export const Half: Story = {
  render: () => <RatingGroupHalfDemo />,
}

export const ReadOnly: Story = {
  render: () => <RatingGroupReadOnlyDemo />,
}

export const Sizes: Story = {
  render: () => <RatingGroupSizesDemo />,
}
