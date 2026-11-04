import type { Meta, StoryObj } from "@storybook/svelte-vite"
import SeparatorDemo from "@isbatak/compositions/ds/svelte/separator/usage"
import SeparatorResponsiveOrientationDemo from "@isbatak/compositions/ds/svelte/separator/responsive-orientation"
import SeparatorSizesDemo from "@isbatak/compositions/ds/svelte/separator/sizes"
import SeparatorVariantsDemo from "@isbatak/compositions/ds/svelte/separator/variants"
import SeparatorVerticalDemo from "@isbatak/compositions/ds/svelte/separator/vertical"
import SeparatorWithLabelDemo from "@isbatak/compositions/ds/svelte/separator/with-label"

const meta = {
  title: "DS/Separator",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof SeparatorDemo> = {
  render: () => ({ Component: SeparatorDemo }),
}

export const ResponsiveOrientation: StoryObj<typeof SeparatorResponsiveOrientationDemo> = {
  render: () => ({ Component: SeparatorResponsiveOrientationDemo }),
}

export const Sizes: StoryObj<typeof SeparatorSizesDemo> = {
  render: () => ({ Component: SeparatorSizesDemo }),
}

export const Variants: StoryObj<typeof SeparatorVariantsDemo> = {
  render: () => ({ Component: SeparatorVariantsDemo }),
}

export const Vertical: StoryObj<typeof SeparatorVerticalDemo> = {
  render: () => ({ Component: SeparatorVerticalDemo }),
}

export const WithLabel: StoryObj<typeof SeparatorWithLabelDemo> = {
  render: () => ({ Component: SeparatorWithLabelDemo }),
}
