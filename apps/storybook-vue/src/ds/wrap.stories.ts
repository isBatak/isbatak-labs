import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import WrapDemo from "@isbatak/compositions/ds/vue/wrap/usage"
import WrapAlignDemo from "@isbatak/compositions/ds/vue/wrap/align"
import WrapGapDemo from "@isbatak/compositions/ds/vue/wrap/gap"
import WrapJustifyDemo from "@isbatak/compositions/ds/vue/wrap/justify"
import WrapResponsiveDemo from "@isbatak/compositions/ds/vue/wrap/responsive"
import WrapRowColumnGapDemo from "@isbatak/compositions/ds/vue/wrap/row-column-gap"
import WrapWrapItemDemo from "@isbatak/compositions/ds/vue/wrap/wrap-item"

const meta = {
  title: "DS/Wrap",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(WrapDemo) }),
}

export const Align: Story = {
  render: () => ({ setup: () => () => h(WrapAlignDemo) }),
}

export const Gap: Story = {
  render: () => ({ setup: () => () => h(WrapGapDemo) }),
}

export const Justify: Story = {
  render: () => ({ setup: () => () => h(WrapJustifyDemo) }),
}

export const Responsive: Story = {
  render: () => ({ setup: () => () => h(WrapResponsiveDemo) }),
}

export const RowColumnGap: Story = {
  render: () => ({ setup: () => () => h(WrapRowColumnGapDemo) }),
}

export const WrapItem: Story = {
  render: () => ({ setup: () => () => h(WrapWrapItemDemo) }),
}
