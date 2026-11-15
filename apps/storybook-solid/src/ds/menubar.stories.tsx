import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { MenubarDemo } from "@isbatak/compositions/ds/solid/menubar/usage"
import { MenubarDisabledDemo } from "@isbatak/compositions/ds/solid/menubar/disabled"
import { MenubarNestedDemo } from "@isbatak/compositions/ds/solid/menubar/nested"
import { MenubarRootProviderDemo } from "@isbatak/compositions/ds/solid/menubar/root-provider"
import { MenubarVerticalDemo } from "@isbatak/compositions/ds/solid/menubar/vertical"
import { MenubarVariantsDemo } from "@isbatak/compositions/ds/solid/menubar/variants"
import { MenubarSizesDemo } from "@isbatak/compositions/ds/solid/menubar/sizes"

const meta = {
  title: "DS/Menubar",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <MenubarDemo />,
}

export const Disabled: Story = {
  render: () => <MenubarDisabledDemo />,
}

export const Nested: Story = {
  render: () => <MenubarNestedDemo />,
}

export const RootProvider: Story = {
  render: () => <MenubarRootProviderDemo />,
}

export const Vertical: Story = {
  render: () => <MenubarVerticalDemo />,
}

export const Variants: Story = {
  render: () => <MenubarVariantsDemo />,
}

export const Sizes: Story = {
  render: () => <MenubarSizesDemo />,
}
