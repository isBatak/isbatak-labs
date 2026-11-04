import type { Meta, StoryObj } from "@storybook/react-vite"
import { SeparatorDemo } from "@isbatak/compositions/ds/react/separator/usage"
import { SeparatorResponsiveOrientationDemo } from "@isbatak/compositions/ds/react/separator/responsive-orientation"
import { SeparatorSizesDemo } from "@isbatak/compositions/ds/react/separator/sizes"
import { SeparatorVariantsDemo } from "@isbatak/compositions/ds/react/separator/variants"
import { SeparatorVerticalDemo } from "@isbatak/compositions/ds/react/separator/vertical"
import { SeparatorWithLabelDemo } from "@isbatak/compositions/ds/react/separator/with-label"

const meta = {
  title: "DS/Separator",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <SeparatorDemo />,
}

export const ResponsiveOrientation: Story = {
  render: () => <SeparatorResponsiveOrientationDemo />,
}

export const Sizes: Story = {
  render: () => <SeparatorSizesDemo />,
}

export const Variants: Story = {
  render: () => <SeparatorVariantsDemo />,
}

export const Vertical: Story = {
  render: () => <SeparatorVerticalDemo />,
}

export const WithLabel: Story = {
  render: () => <SeparatorWithLabelDemo />,
}
