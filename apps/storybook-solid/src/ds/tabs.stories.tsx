import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { TabsDemo } from "@isbatak/compositions/ds/solid/tabs/usage"
import { TabsVariantsDemo } from "@isbatak/compositions/ds/solid/tabs/variants"
import { TabsSizesDemo } from "@isbatak/compositions/ds/solid/tabs/sizes"
import { TabsIconsDemo } from "@isbatak/compositions/ds/solid/tabs/icons"
import { TabsFittedDemo } from "@isbatak/compositions/ds/solid/tabs/fitted"
import { TabsJustifyDemo } from "@isbatak/compositions/ds/solid/tabs/justify"
import { TabsVerticalDemo } from "@isbatak/compositions/ds/solid/tabs/vertical"
import { TabsDisabledDemo } from "@isbatak/compositions/ds/solid/tabs/disabled"
import { TabsControlledDemo } from "@isbatak/compositions/ds/solid/tabs/controlled"
import { TabsManualActivationDemo } from "@isbatak/compositions/ds/solid/tabs/manual-activation"
import { TabsLazyMountDemo } from "@isbatak/compositions/ds/solid/tabs/lazy-mount"

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
