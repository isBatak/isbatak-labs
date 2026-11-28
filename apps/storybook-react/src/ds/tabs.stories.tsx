import type { Meta, StoryObj } from "@storybook/react-vite"
import { TabsDemo } from "@isbatak/compositions/ds/react/tabs/usage"
import { TabsVariantsDemo } from "@isbatak/compositions/ds/react/tabs/variants"
import { TabsIndicatorDemo } from "@isbatak/compositions/ds/react/tabs/indicator"
import { TabsCustomIndicatorDemo } from "@isbatak/compositions/ds/react/tabs/custom-indicator"
import { TabsLinksDemo } from "@isbatak/compositions/ds/react/tabs/links"
import { TabsStoreDemo } from "@isbatak/compositions/ds/react/tabs/store"
import { TabsDynamicDemo } from "@isbatak/compositions/ds/react/tabs/dynamic"
import { TabsResponsiveOrientationDemo } from "@isbatak/compositions/ds/react/tabs/responsive-orientation"
import { TabsAnimationDemo } from "@isbatak/compositions/ds/react/tabs/animation"
import { TabsSizesDemo } from "@isbatak/compositions/ds/react/tabs/sizes"
import { TabsIconsDemo } from "@isbatak/compositions/ds/react/tabs/icons"
import { TabsFittedDemo } from "@isbatak/compositions/ds/react/tabs/fitted"
import { TabsJustifyDemo } from "@isbatak/compositions/ds/react/tabs/justify"
import { TabsVerticalDemo } from "@isbatak/compositions/ds/react/tabs/vertical"
import { TabsDisabledDemo } from "@isbatak/compositions/ds/react/tabs/disabled"
import { TabsControlledDemo } from "@isbatak/compositions/ds/react/tabs/controlled"
import { TabsManualActivationDemo } from "@isbatak/compositions/ds/react/tabs/manual-activation"
import { TabsLazyMountDemo } from "@isbatak/compositions/ds/react/tabs/lazy-mount"

const meta = {
  title: "DS/Tabs",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <TabsDemo />,
}

export const Variants: Story = {
  render: () => <TabsVariantsDemo />,
}

export const Indicator: Story = {
  render: () => <TabsIndicatorDemo />,
}

export const CustomIndicator: Story = {
  render: () => <TabsCustomIndicatorDemo />,
}

export const Links: Story = {
  render: () => <TabsLinksDemo />,
}

export const Store: Story = {
  render: () => <TabsStoreDemo />,
}

export const Dynamic: Story = {
  render: () => <TabsDynamicDemo />,
}

export const ResponsiveOrientation: Story = {
  render: () => <TabsResponsiveOrientationDemo />,
}

export const Animation: Story = {
  render: () => <TabsAnimationDemo />,
}

export const Sizes: Story = {
  render: () => <TabsSizesDemo />,
}

export const Icons: Story = {
  render: () => <TabsIconsDemo />,
}

export const Fitted: Story = {
  render: () => <TabsFittedDemo />,
}

export const Justify: Story = {
  render: () => <TabsJustifyDemo />,
}

export const Vertical: Story = {
  render: () => <TabsVerticalDemo />,
}

export const Disabled: Story = {
  render: () => <TabsDisabledDemo />,
}

export const Controlled: Story = {
  render: () => <TabsControlledDemo />,
}

export const ManualActivation: Story = {
  render: () => <TabsManualActivationDemo />,
}

export const LazyMount: Story = {
  render: () => <TabsLazyMountDemo />,
}
