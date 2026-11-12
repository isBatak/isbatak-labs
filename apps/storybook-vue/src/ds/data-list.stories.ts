import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import DataListDemo from "@isbatak/compositions/ds/vue/data-list/usage"
import DataListOrientationDemo from "@isbatak/compositions/ds/vue/data-list/orientation"
import DataListSizesDemo from "@isbatak/compositions/ds/vue/data-list/sizes"
import DataListVariantsDemo from "@isbatak/compositions/ds/vue/data-list/variants"
import DataListSeparatorDemo from "@isbatak/compositions/ds/vue/data-list/separator"

const meta = {
  title: "DS/Data List",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(DataListDemo) }),
}

export const Orientation: Story = {
  render: () => ({ setup: () => () => h(DataListOrientationDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(DataListSizesDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(DataListVariantsDemo) }),
}

export const Separator: Story = {
  render: () => ({ setup: () => () => h(DataListSeparatorDemo) }),
}
