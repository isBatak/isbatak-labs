import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import BoxDemo from "@isbatak/compositions/ds/vue/box/usage"
import BoxAsChildDemo from "@isbatak/compositions/ds/vue/box/as-child"
import BoxWithBorderDemo from "@isbatak/compositions/ds/vue/box/with-border"
import BoxWithHideBelowDemo from "@isbatak/compositions/ds/vue/box/with-hide-below"
import BoxWithHideFromDemo from "@isbatak/compositions/ds/vue/box/with-hide-from"
import BoxWithPseudoPropsDemo from "@isbatak/compositions/ds/vue/box/with-pseudo-props"
import BoxWithShadowDemo from "@isbatak/compositions/ds/vue/box/with-shadow"

const meta = {
  title: "DS/Box",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(BoxDemo) }),
}

export const AsChild: Story = {
  render: () => ({ setup: () => () => h(BoxAsChildDemo) }),
}

export const WithBorder: Story = {
  render: () => ({ setup: () => () => h(BoxWithBorderDemo) }),
}

export const WithHideBelow: Story = {
  render: () => ({ setup: () => () => h(BoxWithHideBelowDemo) }),
}

export const WithHideFrom: Story = {
  render: () => ({ setup: () => () => h(BoxWithHideFromDemo) }),
}

export const WithPseudoProps: Story = {
  render: () => ({ setup: () => () => h(BoxWithPseudoPropsDemo) }),
}

export const WithShadow: Story = {
  render: () => ({ setup: () => () => h(BoxWithShadowDemo) }),
}
