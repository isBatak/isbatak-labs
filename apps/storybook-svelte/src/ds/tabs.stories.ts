import type { Meta, StoryObj } from "@storybook/svelte-vite"
import TabsDemo from "@isbatak/compositions/ds/svelte/tabs/usage"
import TabsVariantsDemo from "@isbatak/compositions/ds/svelte/tabs/variants"
import TabsSizesDemo from "@isbatak/compositions/ds/svelte/tabs/sizes"
import TabsIconsDemo from "@isbatak/compositions/ds/svelte/tabs/icons"
import TabsFittedDemo from "@isbatak/compositions/ds/svelte/tabs/fitted"
import TabsJustifyDemo from "@isbatak/compositions/ds/svelte/tabs/justify"
import TabsVerticalDemo from "@isbatak/compositions/ds/svelte/tabs/vertical"
import TabsDisabledDemo from "@isbatak/compositions/ds/svelte/tabs/disabled"
import TabsControlledDemo from "@isbatak/compositions/ds/svelte/tabs/controlled"
import TabsManualActivationDemo from "@isbatak/compositions/ds/svelte/tabs/manual-activation"
import TabsLazyMountDemo from "@isbatak/compositions/ds/svelte/tabs/lazy-mount"

const meta = {
  title: "DS/Tabs",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof TabsDemo> = {
  render: () => ({ Component: TabsDemo }),
}

export const Variants: StoryObj<typeof TabsVariantsDemo> = {
  render: () => ({ Component: TabsVariantsDemo }),
}

export const Sizes: StoryObj<typeof TabsSizesDemo> = {
  render: () => ({ Component: TabsSizesDemo }),
}

export const Icons: StoryObj<typeof TabsIconsDemo> = {
  render: () => ({ Component: TabsIconsDemo }),
}

export const Fitted: StoryObj<typeof TabsFittedDemo> = {
  render: () => ({ Component: TabsFittedDemo }),
}

export const Justify: StoryObj<typeof TabsJustifyDemo> = {
  render: () => ({ Component: TabsJustifyDemo }),
}

export const Vertical: StoryObj<typeof TabsVerticalDemo> = {
  render: () => ({ Component: TabsVerticalDemo }),
}

export const Disabled: StoryObj<typeof TabsDisabledDemo> = {
  render: () => ({ Component: TabsDisabledDemo }),
}

export const Controlled: StoryObj<typeof TabsControlledDemo> = {
  render: () => ({ Component: TabsControlledDemo }),
}

export const ManualActivation: StoryObj<typeof TabsManualActivationDemo> = {
  render: () => ({ Component: TabsManualActivationDemo }),
}

export const LazyMount: StoryObj<typeof TabsLazyMountDemo> = {
  render: () => ({ Component: TabsLazyMountDemo }),
}
