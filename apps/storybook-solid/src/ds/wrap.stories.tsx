import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { WrapDemo } from "@isbatak/compositions/ds/solid/wrap/usage"
import { WrapAlignDemo } from "@isbatak/compositions/ds/solid/wrap/align"
import { WrapGapDemo } from "@isbatak/compositions/ds/solid/wrap/gap"
import { WrapJustifyDemo } from "@isbatak/compositions/ds/solid/wrap/justify"
import { WrapResponsiveDemo } from "@isbatak/compositions/ds/solid/wrap/responsive"
import { WrapRowColumnGapDemo } from "@isbatak/compositions/ds/solid/wrap/row-column-gap"
import { WrapWrapItemDemo } from "@isbatak/compositions/ds/solid/wrap/wrap-item"

const meta = {
  title: "DS/Wrap",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <WrapDemo />,
}

export const Align: Story = {
  render: () => <WrapAlignDemo />,
}

export const Gap: Story = {
  render: () => <WrapGapDemo />,
}

export const Justify: Story = {
  render: () => <WrapJustifyDemo />,
}

export const Responsive: Story = {
  render: () => <WrapResponsiveDemo />,
}

export const RowColumnGap: Story = {
  render: () => <WrapRowColumnGapDemo />,
}

export const WrapItem: Story = {
  render: () => <WrapWrapItemDemo />,
}
