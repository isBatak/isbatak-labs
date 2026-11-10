import type { Meta, StoryObj } from "@storybook/svelte-vite"
import PaginationDemo from "@isbatak/compositions/ds/svelte/pagination/usage"
import PaginationSizesDemo from "@isbatak/compositions/ds/svelte/pagination/sizes"
import PaginationVariantsDemo from "@isbatak/compositions/ds/svelte/pagination/variants"
import PaginationAttachedDemo from "@isbatak/compositions/ds/svelte/pagination/attached"
import PaginationCompactDemo from "@isbatak/compositions/ds/svelte/pagination/compact"
import PaginationPageRangeDemo from "@isbatak/compositions/ds/svelte/pagination/page-range"
import PaginationFirstAndLastDemo from "@isbatak/compositions/ds/svelte/pagination/first-and-last"
import PaginationSiblingCountDemo from "@isbatak/compositions/ds/svelte/pagination/sibling-count"
import PaginationControlledDemo from "@isbatak/compositions/ds/svelte/pagination/controlled"

const meta = {
  title: "DS/Pagination",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof PaginationDemo> = {
  render: () => ({ Component: PaginationDemo }),
}

export const Sizes: StoryObj<typeof PaginationSizesDemo> = {
  render: () => ({ Component: PaginationSizesDemo }),
}

export const Variants: StoryObj<typeof PaginationVariantsDemo> = {
  render: () => ({ Component: PaginationVariantsDemo }),
}

export const Attached: StoryObj<typeof PaginationAttachedDemo> = {
  render: () => ({ Component: PaginationAttachedDemo }),
}

export const Compact: StoryObj<typeof PaginationCompactDemo> = {
  render: () => ({ Component: PaginationCompactDemo }),
}

export const PageRange: StoryObj<typeof PaginationPageRangeDemo> = {
  render: () => ({ Component: PaginationPageRangeDemo }),
}

export const FirstAndLast: StoryObj<typeof PaginationFirstAndLastDemo> = {
  render: () => ({ Component: PaginationFirstAndLastDemo }),
}

export const SiblingCount: StoryObj<typeof PaginationSiblingCountDemo> = {
  render: () => ({ Component: PaginationSiblingCountDemo }),
}

export const Controlled: StoryObj<typeof PaginationControlledDemo> = {
  render: () => ({ Component: PaginationControlledDemo }),
}
