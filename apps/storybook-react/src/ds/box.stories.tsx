import type { Meta, StoryObj } from "@storybook/react-vite"
import { BoxDemo } from "@isbatak/compositions/ds/react/box/usage"
import { BoxAsChildDemo } from "@isbatak/compositions/ds/react/box/as-child"
import { BoxWithBorderDemo } from "@isbatak/compositions/ds/react/box/with-border"
import { BoxWithHideBelowDemo } from "@isbatak/compositions/ds/react/box/with-hide-below"
import { BoxWithHideFromDemo } from "@isbatak/compositions/ds/react/box/with-hide-from"
import { BoxWithPseudoPropsDemo } from "@isbatak/compositions/ds/react/box/with-pseudo-props"
import { BoxWithShadowDemo } from "@isbatak/compositions/ds/react/box/with-shadow"

const meta = {
  title: "DS/Box",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <BoxDemo />,
}

export const AsChild: Story = {
  render: () => <BoxAsChildDemo />,
}

export const WithBorder: Story = {
  render: () => <BoxWithBorderDemo />,
}

export const WithHideBelow: Story = {
  render: () => <BoxWithHideBelowDemo />,
}

export const WithHideFrom: Story = {
  render: () => <BoxWithHideFromDemo />,
}

export const WithPseudoProps: Story = {
  render: () => <BoxWithPseudoPropsDemo />,
}

export const WithShadow: Story = {
  render: () => <BoxWithShadowDemo />,
}
