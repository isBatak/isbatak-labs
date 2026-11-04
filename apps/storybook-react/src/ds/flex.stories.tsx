import type { Meta, StoryObj } from "@storybook/react-vite"
import { FlexDemo } from "@isbatak/compositions/ds/react/flex/usage"
import { FlexAlignDemo } from "@isbatak/compositions/ds/react/flex/align"
import { FlexAutoMarginDemo } from "@isbatak/compositions/ds/react/flex/auto-margin"
import { FlexDirectionDemo } from "@isbatak/compositions/ds/react/flex/direction"
import { FlexInlineDemo } from "@isbatak/compositions/ds/react/flex/inline"
import { FlexJustifyDemo } from "@isbatak/compositions/ds/react/flex/justify"
import { FlexOrderDemo } from "@isbatak/compositions/ds/react/flex/order"
import { FlexWrapDemo } from "@isbatak/compositions/ds/react/flex/wrap"

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
