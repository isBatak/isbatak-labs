import type { Meta, StoryObj } from "@storybook/svelte-vite"
import MenubarDemo from "@isbatak/compositions/ds/svelte/menubar/usage"
import MenubarDisabledDemo from "@isbatak/compositions/ds/svelte/menubar/disabled"
import MenubarNestedDemo from "@isbatak/compositions/ds/svelte/menubar/nested"
import MenubarRootProviderDemo from "@isbatak/compositions/ds/svelte/menubar/root-provider"
import MenubarVerticalDemo from "@isbatak/compositions/ds/svelte/menubar/vertical"
import MenubarVariantsDemo from "@isbatak/compositions/ds/svelte/menubar/variants"
import MenubarSizesDemo from "@isbatak/compositions/ds/svelte/menubar/sizes"

const meta = {
  title: "DS/Menubar",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof MenubarDemo> = {
  render: () => ({ Component: MenubarDemo }),
}

export const Disabled: StoryObj<typeof MenubarDisabledDemo> = {
  render: () => ({ Component: MenubarDisabledDemo }),
}

export const Nested: StoryObj<typeof MenubarNestedDemo> = {
  render: () => ({ Component: MenubarNestedDemo }),
}

export const RootProvider: StoryObj<typeof MenubarRootProviderDemo> = {
  render: () => ({ Component: MenubarRootProviderDemo }),
}

export const Vertical: StoryObj<typeof MenubarVerticalDemo> = {
  render: () => ({ Component: MenubarVerticalDemo }),
}

export const Variants: StoryObj<typeof MenubarVariantsDemo> = {
  render: () => ({ Component: MenubarVariantsDemo }),
}

export const Sizes: StoryObj<typeof MenubarSizesDemo> = {
  render: () => ({ Component: MenubarSizesDemo }),
}
