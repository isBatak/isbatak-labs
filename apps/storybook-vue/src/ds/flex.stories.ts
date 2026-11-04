import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import FlexDemo from "@isbatak/compositions/ds/vue/flex/usage"
import FlexAlignDemo from "@isbatak/compositions/ds/vue/flex/align"
import FlexAutoMarginDemo from "@isbatak/compositions/ds/vue/flex/auto-margin"
import FlexDirectionDemo from "@isbatak/compositions/ds/vue/flex/direction"
import FlexInlineDemo from "@isbatak/compositions/ds/vue/flex/inline"
import FlexJustifyDemo from "@isbatak/compositions/ds/vue/flex/justify"
import FlexOrderDemo from "@isbatak/compositions/ds/vue/flex/order"
import FlexWrapDemo from "@isbatak/compositions/ds/vue/flex/wrap"

const meta = {
  title: "DS/Flex",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(FlexDemo) }),
}

export const Align: Story = {
  render: () => ({ setup: () => () => h(FlexAlignDemo) }),
}

export const AutoMargin: Story = {
  render: () => ({ setup: () => () => h(FlexAutoMarginDemo) }),
}

export const Direction: Story = {
  render: () => ({ setup: () => () => h(FlexDirectionDemo) }),
}

export const Inline: Story = {
  render: () => ({ setup: () => () => h(FlexInlineDemo) }),
}

export const Justify: Story = {
  render: () => ({ setup: () => () => h(FlexJustifyDemo) }),
}

export const Order: Story = {
  render: () => ({ setup: () => () => h(FlexOrderDemo) }),
}

export const Wrap: Story = {
  render: () => ({ setup: () => () => h(FlexWrapDemo) }),
}
