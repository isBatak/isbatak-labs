import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { PaginationDemo } from "@isbatak/compositions/ds/solid/pagination/usage"
import { PaginationSizesDemo } from "@isbatak/compositions/ds/solid/pagination/sizes"
import { PaginationVariantsDemo } from "@isbatak/compositions/ds/solid/pagination/variants"
import { PaginationAttachedDemo } from "@isbatak/compositions/ds/solid/pagination/attached"
import { PaginationCompactDemo } from "@isbatak/compositions/ds/solid/pagination/compact"
import { PaginationPageRangeDemo } from "@isbatak/compositions/ds/solid/pagination/page-range"
import { PaginationFirstAndLastDemo } from "@isbatak/compositions/ds/solid/pagination/first-and-last"
import { PaginationSiblingCountDemo } from "@isbatak/compositions/ds/solid/pagination/sibling-count"
import { PaginationControlledDemo } from "@isbatak/compositions/ds/solid/pagination/controlled"

const meta = {
  title: "DS/Pagination",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <PaginationDemo />,
}

export const Sizes: Story = {
  render: () => <PaginationSizesDemo />,
}

export const Variants: Story = {
  render: () => <PaginationVariantsDemo />,
}

export const Attached: Story = {
  render: () => <PaginationAttachedDemo />,
}

export const Compact: Story = {
  render: () => <PaginationCompactDemo />,
}

export const PageRange: Story = {
  render: () => <PaginationPageRangeDemo />,
}

export const FirstAndLast: Story = {
  render: () => <PaginationFirstAndLastDemo />,
}

export const SiblingCount: Story = {
  render: () => <PaginationSiblingCountDemo />,
}

export const Controlled: Story = {
  render: () => <PaginationControlledDemo />,
}
