import type { Meta, StoryObj } from "@storybook/svelte-vite"
import MenuDemo from "@isbatak/compositions/ds/svelte/menu/usage"
import MenuArrowDemo from "@isbatak/compositions/ds/svelte/menu/arrow"
import MenuCheckboxItemsDemo from "@isbatak/compositions/ds/svelte/menu/checkbox-items"
import MenuContextMenuDemo from "@isbatak/compositions/ds/svelte/menu/context-menu"
import MenuGroupsDemo from "@isbatak/compositions/ds/svelte/menu/groups"
import MenuIconsAndCommandsDemo from "@isbatak/compositions/ds/svelte/menu/icons-and-commands"
import MenuIndicatorDemo from "@isbatak/compositions/ds/svelte/menu/indicator"
import MenuModalModeDemo from "@isbatak/compositions/ds/svelte/menu/modal-mode"
import MenuRadioItemsDemo from "@isbatak/compositions/ds/svelte/menu/radio-items"
import MenuSizesDemo from "@isbatak/compositions/ds/svelte/menu/sizes"
import MenuSubmenuDemo from "@isbatak/compositions/ds/svelte/menu/submenu"
import MenuVariantsDemo from "@isbatak/compositions/ds/svelte/menu/variants"

const meta = {
  title: "DS/Menu",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof MenuDemo> = {
  render: () => ({ Component: MenuDemo }),
}

export const Arrow: StoryObj<typeof MenuArrowDemo> = {
  render: () => ({ Component: MenuArrowDemo }),
}

export const CheckboxItems: StoryObj<typeof MenuCheckboxItemsDemo> = {
  render: () => ({ Component: MenuCheckboxItemsDemo }),
}

export const ContextMenu: StoryObj<typeof MenuContextMenuDemo> = {
  render: () => ({ Component: MenuContextMenuDemo }),
}

export const Groups: StoryObj<typeof MenuGroupsDemo> = {
  render: () => ({ Component: MenuGroupsDemo }),
}

export const IconsAndCommands: StoryObj<typeof MenuIconsAndCommandsDemo> = {
  render: () => ({ Component: MenuIconsAndCommandsDemo }),
}

export const Indicator: StoryObj<typeof MenuIndicatorDemo> = {
  render: () => ({ Component: MenuIndicatorDemo }),
}

export const ModalMode: StoryObj<typeof MenuModalModeDemo> = {
  render: () => ({ Component: MenuModalModeDemo }),
}

export const RadioItems: StoryObj<typeof MenuRadioItemsDemo> = {
  render: () => ({ Component: MenuRadioItemsDemo }),
}

export const Sizes: StoryObj<typeof MenuSizesDemo> = {
  render: () => ({ Component: MenuSizesDemo }),
}

export const Submenu: StoryObj<typeof MenuSubmenuDemo> = {
  render: () => ({ Component: MenuSubmenuDemo }),
}

export const Variants: StoryObj<typeof MenuVariantsDemo> = {
  render: () => ({ Component: MenuVariantsDemo }),
}
