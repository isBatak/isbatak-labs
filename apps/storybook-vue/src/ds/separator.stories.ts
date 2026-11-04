import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import SeparatorDemo from "@isbatak/compositions/ds/vue/separator/usage"
import SeparatorResponsiveOrientationDemo from "@isbatak/compositions/ds/vue/separator/responsive-orientation"
import SeparatorSizesDemo from "@isbatak/compositions/ds/vue/separator/sizes"
import SeparatorVariantsDemo from "@isbatak/compositions/ds/vue/separator/variants"
import SeparatorVerticalDemo from "@isbatak/compositions/ds/vue/separator/vertical"
import SeparatorWithLabelDemo from "@isbatak/compositions/ds/vue/separator/with-label"

const meta = {
  title: "DS/Separator",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(SeparatorDemo) }),
}

export const ResponsiveOrientation: Story = {
  render: () => ({ setup: () => () => h(SeparatorResponsiveOrientationDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(SeparatorSizesDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(SeparatorVariantsDemo) }),
}

export const Vertical: Story = {
  render: () => ({ setup: () => () => h(SeparatorVerticalDemo) }),
}

export const WithLabel: Story = {
  render: () => ({ setup: () => () => h(SeparatorWithLabelDemo) }),
}
