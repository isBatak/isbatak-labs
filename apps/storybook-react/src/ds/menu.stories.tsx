import type { Meta, StoryObj } from "@storybook/react-vite"
import { MenuDemo } from "@isbatak/compositions/ds/react/menu/usage"
import { MenuArrowDemo } from "@isbatak/compositions/ds/react/menu/arrow"
import { MenuCheckboxItemsDemo } from "@isbatak/compositions/ds/react/menu/checkbox-items"
import { MenuContextMenuDemo } from "@isbatak/compositions/ds/react/menu/context-menu"
import { MenuGroupsDemo } from "@isbatak/compositions/ds/react/menu/groups"
import { MenuIconsAndCommandsDemo } from "@isbatak/compositions/ds/react/menu/icons-and-commands"
import { MenuIndicatorDemo } from "@isbatak/compositions/ds/react/menu/indicator"
import { MenuModalModeDemo } from "@isbatak/compositions/ds/react/menu/modal-mode"
import { MenuRadioItemsDemo } from "@isbatak/compositions/ds/react/menu/radio-items"
import { MenuSizesDemo } from "@isbatak/compositions/ds/react/menu/sizes"
import { MenuSubmenuDemo } from "@isbatak/compositions/ds/react/menu/submenu"
import { MenuVariantsDemo } from "@isbatak/compositions/ds/react/menu/variants"

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
