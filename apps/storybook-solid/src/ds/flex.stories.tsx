import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { FlexDemo } from "@isbatak/compositions/ds/solid/flex/usage"
import { FlexAlignDemo } from "@isbatak/compositions/ds/solid/flex/align"
import { FlexAutoMarginDemo } from "@isbatak/compositions/ds/solid/flex/auto-margin"
import { FlexDirectionDemo } from "@isbatak/compositions/ds/solid/flex/direction"
import { FlexInlineDemo } from "@isbatak/compositions/ds/solid/flex/inline"
import { FlexJustifyDemo } from "@isbatak/compositions/ds/solid/flex/justify"
import { FlexOrderDemo } from "@isbatak/compositions/ds/solid/flex/order"
import { FlexWrapDemo } from "@isbatak/compositions/ds/solid/flex/wrap"

const meta = {
  title: "DS/Flex",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <FlexDemo />,
}

export const Align: Story = {
  render: () => <FlexAlignDemo />,
}

export const AutoMargin: Story = {
  render: () => <FlexAutoMarginDemo />,
}

export const Direction: Story = {
  render: () => <FlexDirectionDemo />,
}

export const Inline: Story = {
  render: () => <FlexInlineDemo />,
}

export const Justify: Story = {
  render: () => <FlexJustifyDemo />,
}

export const Order: Story = {
  render: () => <FlexOrderDemo />,
}

export const Wrap: Story = {
  render: () => <FlexWrapDemo />,
}
