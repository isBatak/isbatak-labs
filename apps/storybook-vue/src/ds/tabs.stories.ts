import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import TabsDemo from "@isbatak/compositions/ds/vue/tabs/usage"
import TabsVariantsDemo from "@isbatak/compositions/ds/vue/tabs/variants"
import TabsIndicatorDemo from "@isbatak/compositions/ds/vue/tabs/indicator"
import TabsCustomIndicatorDemo from "@isbatak/compositions/ds/vue/tabs/custom-indicator"
import TabsLinksDemo from "@isbatak/compositions/ds/vue/tabs/links"
import TabsStoreDemo from "@isbatak/compositions/ds/vue/tabs/store"
import TabsDynamicDemo from "@isbatak/compositions/ds/vue/tabs/dynamic"
import TabsResponsiveOrientationDemo from "@isbatak/compositions/ds/vue/tabs/responsive-orientation"
import TabsAnimationDemo from "@isbatak/compositions/ds/vue/tabs/animation"
import TabsSizesDemo from "@isbatak/compositions/ds/vue/tabs/sizes"
import TabsIconsDemo from "@isbatak/compositions/ds/vue/tabs/icons"
import TabsFittedDemo from "@isbatak/compositions/ds/vue/tabs/fitted"
import TabsJustifyDemo from "@isbatak/compositions/ds/vue/tabs/justify"
import TabsVerticalDemo from "@isbatak/compositions/ds/vue/tabs/vertical"
import TabsDisabledDemo from "@isbatak/compositions/ds/vue/tabs/disabled"
import TabsControlledDemo from "@isbatak/compositions/ds/vue/tabs/controlled"
import TabsManualActivationDemo from "@isbatak/compositions/ds/vue/tabs/manual-activation"
import TabsLazyMountDemo from "@isbatak/compositions/ds/vue/tabs/lazy-mount"

const meta = {
  title: "DS/Tabs",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(TabsDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(TabsVariantsDemo) }),
}

export const Indicator: Story = {
  render: () => ({ setup: () => () => h(TabsIndicatorDemo) }),
}

export const CustomIndicator: Story = {
  render: () => ({ setup: () => () => h(TabsCustomIndicatorDemo) }),
}

export const Links: Story = {
  render: () => ({ setup: () => () => h(TabsLinksDemo) }),
}

export const Store: Story = {
  render: () => ({ setup: () => () => h(TabsStoreDemo) }),
}

export const Dynamic: Story = {
  render: () => ({ setup: () => () => h(TabsDynamicDemo) }),
}

export const ResponsiveOrientation: Story = {
  render: () => ({ setup: () => () => h(TabsResponsiveOrientationDemo) }),
}

export const Animation: Story = {
  render: () => ({ setup: () => () => h(TabsAnimationDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(TabsSizesDemo) }),
}

export const Icons: Story = {
  render: () => ({ setup: () => () => h(TabsIconsDemo) }),
}

export const Fitted: Story = {
  render: () => ({ setup: () => () => h(TabsFittedDemo) }),
}

export const Justify: Story = {
  render: () => ({ setup: () => () => h(TabsJustifyDemo) }),
}

export const Vertical: Story = {
  render: () => ({ setup: () => () => h(TabsVerticalDemo) }),
}

export const Disabled: Story = {
  render: () => ({ setup: () => () => h(TabsDisabledDemo) }),
}

export const Controlled: Story = {
  render: () => ({ setup: () => () => h(TabsControlledDemo) }),
}

export const ManualActivation: Story = {
  render: () => ({ setup: () => () => h(TabsManualActivationDemo) }),
}

export const LazyMount: Story = {
  render: () => ({ setup: () => () => h(TabsLazyMountDemo) }),
}
