import type { Meta, StoryObj } from "@storybook/react-vite"
import { TabsDemo } from "@isbatak/compositions/ds/react/tabs/usage"
import { TabsVariantsDemo } from "@isbatak/compositions/ds/react/tabs/variants"
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
