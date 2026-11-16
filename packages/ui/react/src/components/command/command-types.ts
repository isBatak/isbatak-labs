import type { Combobox } from "@ark-ui/react/combobox"

export interface CommandModifierKeys {
  metaKey: boolean
  ctrlKey: boolean
  shiftKey: boolean
  altKey: boolean
}

export interface CommandSelectionDetails extends Combobox.SelectionDetails {
  /**
   * The modifier keys held when the item was picked.
   */
  modifiers: CommandModifierKeys
}

export interface CommandItem {
  /**
   * The item's value. Use `itemToValue` on the collection to derive it from another field.
   */
  value?: string | undefined
  /**
   * The item's text. Use `itemToString` on the collection to derive it from another field.
   */
  label?: string | undefined
  /**
   * Whether the item is disabled. Use `isItemDisabled` on the collection to derive it from another field.
   */
  disabled?: boolean | undefined
  /**
   * Extra words that match the item when searching.
   */
  keywords?: string[] | undefined
  /**
   * The value of the item whose page lists this item. An item with children opens its page when selected instead of
   * running.
   */
  parent?: string | undefined
  /**
   * Whether selecting the item opens its page even without children, such as a page that loads its items or renders
   * custom content.
   */
  page?: boolean | undefined
  /**
   * Runs when the item is selected, before the Root `onSelect`.
   */
  onSelect?: ((details: CommandSelectionDetails) => void) | undefined
  /**
   * Overrides the Root `closeOnSelect` for this item.
   */
  closeOnSelect?: boolean | undefined
}

export const NO_MODIFIERS: CommandModifierKeys = {
  metaKey: false,
  ctrlKey: false,
  shiftKey: false,
  altKey: false,
}

export const hasModifierKey = (modifiers: CommandModifierKeys) =>
  modifiers.metaKey || modifiers.ctrlKey || modifiers.shiftKey || modifiers.altKey
