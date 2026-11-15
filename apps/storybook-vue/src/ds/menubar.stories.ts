import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import MenubarDemo from "@isbatak/compositions/ds/vue/menubar/usage"
import MenubarDisabledDemo from "@isbatak/compositions/ds/vue/menubar/disabled"
import MenubarNestedDemo from "@isbatak/compositions/ds/vue/menubar/nested"
import MenubarRootProviderDemo from "@isbatak/compositions/ds/vue/menubar/root-provider"
import MenubarVerticalDemo from "@isbatak/compositions/ds/vue/menubar/vertical"
import MenubarVariantsDemo from "@isbatak/compositions/ds/vue/menubar/variants"
import MenubarSizesDemo from "@isbatak/compositions/ds/vue/menubar/sizes"

const meta = {
  title: "DS/Menubar",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(MenubarDemo) }),
}

export const Disabled: Story = {
  render: () => ({ setup: () => () => h(MenubarDisabledDemo) }),
}

export const Nested: Story = {
  render: () => ({ setup: () => () => h(MenubarNestedDemo) }),
}

export const RootProvider: Story = {
  render: () => ({ setup: () => () => h(MenubarRootProviderDemo) }),
}

export const Vertical: Story = {
  render: () => ({ setup: () => () => h(MenubarVerticalDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(MenubarVariantsDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(MenubarSizesDemo) }),
}
