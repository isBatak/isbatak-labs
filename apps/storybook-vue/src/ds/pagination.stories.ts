import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import PaginationDemo from "@isbatak/compositions/ds/vue/pagination/usage"
import PaginationSizesDemo from "@isbatak/compositions/ds/vue/pagination/sizes"
import PaginationVariantsDemo from "@isbatak/compositions/ds/vue/pagination/variants"
import PaginationAttachedDemo from "@isbatak/compositions/ds/vue/pagination/attached"
import PaginationCompactDemo from "@isbatak/compositions/ds/vue/pagination/compact"
import PaginationPageRangeDemo from "@isbatak/compositions/ds/vue/pagination/page-range"
import PaginationFirstAndLastDemo from "@isbatak/compositions/ds/vue/pagination/first-and-last"
import PaginationSiblingCountDemo from "@isbatak/compositions/ds/vue/pagination/sibling-count"
import PaginationControlledDemo from "@isbatak/compositions/ds/vue/pagination/controlled"

const meta = {
  title: "DS/Pagination",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(PaginationDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(PaginationSizesDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(PaginationVariantsDemo) }),
}

export const Attached: Story = {
  render: () => ({ setup: () => () => h(PaginationAttachedDemo) }),
}

export const Compact: Story = {
  render: () => ({ setup: () => () => h(PaginationCompactDemo) }),
}

export const PageRange: Story = {
  render: () => ({ setup: () => () => h(PaginationPageRangeDemo) }),
}

export const FirstAndLast: Story = {
  render: () => ({ setup: () => () => h(PaginationFirstAndLastDemo) }),
}

export const SiblingCount: Story = {
  render: () => ({ setup: () => () => h(PaginationSiblingCountDemo) }),
}

export const Controlled: Story = {
  render: () => ({ setup: () => () => h(PaginationControlledDemo) }),
}
