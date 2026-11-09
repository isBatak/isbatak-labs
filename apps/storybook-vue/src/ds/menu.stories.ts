import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import MenuDemo from "@isbatak/compositions/ds/vue/menu/usage"
import MenuArrowDemo from "@isbatak/compositions/ds/vue/menu/arrow"
import MenuCheckboxItemsDemo from "@isbatak/compositions/ds/vue/menu/checkbox-items"
import MenuContextMenuDemo from "@isbatak/compositions/ds/vue/menu/context-menu"
import MenuGroupsDemo from "@isbatak/compositions/ds/vue/menu/groups"
import MenuIconsAndCommandsDemo from "@isbatak/compositions/ds/vue/menu/icons-and-commands"
import MenuIndicatorDemo from "@isbatak/compositions/ds/vue/menu/indicator"
import MenuModalModeDemo from "@isbatak/compositions/ds/vue/menu/modal-mode"
import MenuRadioItemsDemo from "@isbatak/compositions/ds/vue/menu/radio-items"
import MenuSizesDemo from "@isbatak/compositions/ds/vue/menu/sizes"
import MenuSubmenuDemo from "@isbatak/compositions/ds/vue/menu/submenu"
import MenuVariantsDemo from "@isbatak/compositions/ds/vue/menu/variants"

const meta = {
  title: "DS/Menu",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(MenuDemo) }),
}

export const Arrow: Story = {
  render: () => ({ setup: () => () => h(MenuArrowDemo) }),
}

export const CheckboxItems: Story = {
  render: () => ({ setup: () => () => h(MenuCheckboxItemsDemo) }),
}

export const ContextMenu: Story = {
  render: () => ({ setup: () => () => h(MenuContextMenuDemo) }),
}

export const Groups: Story = {
  render: () => ({ setup: () => () => h(MenuGroupsDemo) }),
}

export const IconsAndCommands: Story = {
  render: () => ({ setup: () => () => h(MenuIconsAndCommandsDemo) }),
}

export const Indicator: Story = {
  render: () => ({ setup: () => () => h(MenuIndicatorDemo) }),
}

export const ModalMode: Story = {
  render: () => ({ setup: () => () => h(MenuModalModeDemo) }),
}

export const RadioItems: Story = {
  render: () => ({ setup: () => () => h(MenuRadioItemsDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(MenuSizesDemo) }),
}

export const Submenu: Story = {
  render: () => ({ setup: () => () => h(MenuSubmenuDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(MenuVariantsDemo) }),
}
