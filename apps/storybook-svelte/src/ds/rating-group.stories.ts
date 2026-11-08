import type { Meta, StoryObj } from "@storybook/svelte-vite"
import RatingGroupDemo from "@isbatak/compositions/ds/svelte/rating-group/usage"
import RatingGroupColorsDemo from "@isbatak/compositions/ds/svelte/rating-group/colors"
import RatingGroupControlledDemo from "@isbatak/compositions/ds/svelte/rating-group/controlled"
import RatingGroupCustomIconDemo from "@isbatak/compositions/ds/svelte/rating-group/custom-icon"
import RatingGroupDisabledDemo from "@isbatak/compositions/ds/svelte/rating-group/disabled"
import RatingGroupHalfDemo from "@isbatak/compositions/ds/svelte/rating-group/half"
import RatingGroupReadOnlyDemo from "@isbatak/compositions/ds/svelte/rating-group/read-only"
import RatingGroupSizesDemo from "@isbatak/compositions/ds/svelte/rating-group/sizes"

const meta = {
  title: "DS/Rating group",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof RatingGroupDemo> = {
  render: () => ({ Component: RatingGroupDemo }),
}

export const Colors: StoryObj<typeof RatingGroupColorsDemo> = {
  render: () => ({ Component: RatingGroupColorsDemo }),
}

export const Controlled: StoryObj<typeof RatingGroupControlledDemo> = {
  render: () => ({ Component: RatingGroupControlledDemo }),
}

export const CustomIcon: StoryObj<typeof RatingGroupCustomIconDemo> = {
  render: () => ({ Component: RatingGroupCustomIconDemo }),
}

export const Disabled: StoryObj<typeof RatingGroupDisabledDemo> = {
  render: () => ({ Component: RatingGroupDisabledDemo }),
}

export const Half: StoryObj<typeof RatingGroupHalfDemo> = {
  render: () => ({ Component: RatingGroupHalfDemo }),
}

export const ReadOnly: StoryObj<typeof RatingGroupReadOnlyDemo> = {
  render: () => ({ Component: RatingGroupReadOnlyDemo }),
}

export const Sizes: StoryObj<typeof RatingGroupSizesDemo> = {
  render: () => ({ Component: RatingGroupSizesDemo }),
}
