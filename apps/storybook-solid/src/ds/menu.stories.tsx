import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { MenuDemo } from "@isbatak/compositions/ds/solid/menu/usage"
import { MenuArrowDemo } from "@isbatak/compositions/ds/solid/menu/arrow"
import { MenuCheckboxItemsDemo } from "@isbatak/compositions/ds/solid/menu/checkbox-items"
import { MenuContextMenuDemo } from "@isbatak/compositions/ds/solid/menu/context-menu"
import { MenuGroupsDemo } from "@isbatak/compositions/ds/solid/menu/groups"
import { MenuIconsAndCommandsDemo } from "@isbatak/compositions/ds/solid/menu/icons-and-commands"
import { MenuIndicatorDemo } from "@isbatak/compositions/ds/solid/menu/indicator"
import { MenuModalModeDemo } from "@isbatak/compositions/ds/solid/menu/modal-mode"
import { MenuRadioItemsDemo } from "@isbatak/compositions/ds/solid/menu/radio-items"
import { MenuSizesDemo } from "@isbatak/compositions/ds/solid/menu/sizes"
import { MenuSubmenuDemo } from "@isbatak/compositions/ds/solid/menu/submenu"
import { MenuVariantsDemo } from "@isbatak/compositions/ds/solid/menu/variants"

const meta = {
  title: "DS/Menu",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <MenuDemo />,
}

export const Arrow: Story = {
  render: () => <MenuArrowDemo />,
}

export const CheckboxItems: Story = {
  render: () => <MenuCheckboxItemsDemo />,
}

export const ContextMenu: Story = {
  render: () => <MenuContextMenuDemo />,
}

export const Groups: Story = {
  render: () => <MenuGroupsDemo />,
}

export const IconsAndCommands: Story = {
  render: () => <MenuIconsAndCommandsDemo />,
}

export const Indicator: Story = {
  render: () => <MenuIndicatorDemo />,
}

export const ModalMode: Story = {
  render: () => <MenuModalModeDemo />,
}

export const RadioItems: Story = {
  render: () => <MenuRadioItemsDemo />,
}

export const Sizes: Story = {
  render: () => <MenuSizesDemo />,
}

export const Submenu: Story = {
  render: () => <MenuSubmenuDemo />,
}

export const Variants: Story = {
  render: () => <MenuVariantsDemo />,
}
