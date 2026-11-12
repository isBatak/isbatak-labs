import type { Meta, StoryObj } from "@storybook/react-vite"
import { DataListDemo } from "@isbatak/compositions/ds/react/data-list/usage"
import { DataListOrientationDemo } from "@isbatak/compositions/ds/react/data-list/orientation"
import { DataListSizesDemo } from "@isbatak/compositions/ds/react/data-list/sizes"
import { DataListVariantsDemo } from "@isbatak/compositions/ds/react/data-list/variants"
import { DataListSeparatorDemo } from "@isbatak/compositions/ds/react/data-list/separator"

const meta = {
  title: "DS/Data List",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <DataListDemo />,
}

export const Orientation: Story = {
  render: () => <DataListOrientationDemo />,
}

export const Sizes: Story = {
  render: () => <DataListSizesDemo />,
}

export const Variants: Story = {
  render: () => <DataListVariantsDemo />,
}

export const Separator: Story = {
  render: () => <DataListSeparatorDemo />,
}
