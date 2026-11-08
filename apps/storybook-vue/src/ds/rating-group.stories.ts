import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import RatingGroupDemo from "@isbatak/compositions/ds/vue/rating-group/usage"
import RatingGroupColorsDemo from "@isbatak/compositions/ds/vue/rating-group/colors"
import RatingGroupControlledDemo from "@isbatak/compositions/ds/vue/rating-group/controlled"
import RatingGroupCustomIconDemo from "@isbatak/compositions/ds/vue/rating-group/custom-icon"
import RatingGroupDisabledDemo from "@isbatak/compositions/ds/vue/rating-group/disabled"
import RatingGroupHalfDemo from "@isbatak/compositions/ds/vue/rating-group/half"
import RatingGroupReadOnlyDemo from "@isbatak/compositions/ds/vue/rating-group/read-only"
import RatingGroupSizesDemo from "@isbatak/compositions/ds/vue/rating-group/sizes"

const meta = {
  title: "DS/Rating group",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(RatingGroupDemo) }),
}

export const Colors: Story = {
  render: () => ({ setup: () => () => h(RatingGroupColorsDemo) }),
}

export const Controlled: Story = {
  render: () => ({ setup: () => () => h(RatingGroupControlledDemo) }),
}

export const CustomIcon: Story = {
  render: () => ({ setup: () => () => h(RatingGroupCustomIconDemo) }),
}

export const Disabled: Story = {
  render: () => ({ setup: () => () => h(RatingGroupDisabledDemo) }),
}

export const Half: Story = {
  render: () => ({ setup: () => () => h(RatingGroupHalfDemo) }),
}

export const ReadOnly: Story = {
  render: () => ({ setup: () => () => h(RatingGroupReadOnlyDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(RatingGroupSizesDemo) }),
}
