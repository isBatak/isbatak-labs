import type { Meta, StoryObj } from "@storybook/react-vite"
import { PaginationDemo } from "@isbatak/compositions/ds/react/pagination/usage"
import { PaginationSizesDemo } from "@isbatak/compositions/ds/react/pagination/sizes"
import { PaginationVariantsDemo } from "@isbatak/compositions/ds/react/pagination/variants"
import { PaginationAttachedDemo } from "@isbatak/compositions/ds/react/pagination/attached"
import { PaginationCompactDemo } from "@isbatak/compositions/ds/react/pagination/compact"
import { PaginationPageRangeDemo } from "@isbatak/compositions/ds/react/pagination/page-range"
import { PaginationFirstAndLastDemo } from "@isbatak/compositions/ds/react/pagination/first-and-last"
import { PaginationSiblingCountDemo } from "@isbatak/compositions/ds/react/pagination/sibling-count"
import { PaginationControlledDemo } from "@isbatak/compositions/ds/react/pagination/controlled"

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
