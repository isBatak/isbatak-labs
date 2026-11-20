import { type ListCollection, createListCollection } from "@ark-ui/svelte/collection"
import { type UseComboboxProps, type UseComboboxReturn, useCombobox } from "@ark-ui/svelte/combobox"
import { untrack } from "svelte"

import {
  type CommandItem,
  type CommandModifierKeys,
  type CommandSelectionDetails,
  NO_MODIFIERS,
  type UseCommandCollectionReturn,
  createHighlightRestorer,
  pickModifiers,
  runCommandSelect,
} from "./command-store"

export const comboboxPropKeys = [
  "defaultHighlightedValue",
  "defaultInputValue",
  "highlightedValue",
  "id",
  "ids",
  "inputValue",
  "navigate",
  "onHighlightChange",
  "onInputValueChange",
  "scrollToIndexFn",
] as const

type ComboboxOnlyProps<T extends CommandItem> = Pick<UseComboboxProps<T>, (typeof comboboxPropKeys)[number]>

export interface UseCommandProps<T extends CommandItem = CommandItem> extends ComboboxOnlyProps<T> {
  /**
   * The items to show. Not needed when `command` is passed.
   */
  collection?: ListCollection<T> | undefined
  /**
   * The value of `useCommandCollection`.
   */
  command?: UseCommandCollectionReturn<T> | undefined
  /**
   * Whether results are loading. Defaults to `command.loading`.
   */
  loading?: boolean | undefined
  /**
   * Whether selecting an item calls `onClose`. Holding a modifier key keeps it open.
   * @default true
   */
  closeOnSelect?: boolean | undefined
  /**
   * Called when a selection should close the command. `Command.Dialog` sets it.
   */
  onClose?: VoidFunction | undefined
  /**
   * Called when an item is selected.
   */
  onSelect?: ((details: CommandSelectionDetails) => void) | undefined
}

export interface CommandSelectItemOptions {
  /**
   * The modifier keys of the triggering event. Any of them keeps the command open.
   */
  modifiers?: CommandModifierKeys | undefined
}

export interface UseCommandReturn<T extends CommandItem = CommandItem> {
  /**
   * Whether results are loading.
   */
  readonly loading: boolean | undefined
  /**
   * The value of `useCommandCollection`, if any.
   */
  readonly command: UseCommandCollectionReturn<T> | undefined
  /**
   * The underlying combobox API, such as `highlightedValue` and `focus`.
   */
  combobox: UseComboboxReturn<T>
  /**
   * Selects an item as if the user picked it.
   */
  selectItem: (item: T, options?: CommandSelectItemOptions) => void
  /**
   * Remembers the modifier keys of the event that is about to select an item.
   */
  trackModifiers: (event: CommandModifierKeys) => void
}

type MaybeFunction<T> = T | (() => T)

const defined = <P extends object>(props: P) =>
  Object.fromEntries(Object.entries(props).filter(([, value]) => value !== undefined)) as P

export function useCommand<T extends CommandItem = CommandItem>(
  props: MaybeFunction<UseCommandProps<T>>,
): UseCommandReturn<T> {
  const resolved = $derived(defined(typeof props === "function" ? props() : props))
  const emptyCollection = createListCollection<T>({ items: [] })
  const collection = $derived(resolved.command?.collection ?? resolved.collection ?? emptyCollection)
  let ownInputValue = $state(untrack(() => resolved.defaultInputValue ?? ""))
  let modifiers = NO_MODIFIERS

  const runSelect = (details: CommandSelectionDetails, item: T | null | undefined) => {
    const { command, closeOnSelect, onSelect, onClose } = resolved
    runCommandSelect({ details, item, command, closeOnSelect, onSelect, onClose })
  }

  const combobox = useCombobox<T>(() => {
    const {
      loading: _loading,
      closeOnSelect: _closeOnSelect,
      onClose: _onClose,
      onSelect: _onSelect,
      inputValue,
      defaultInputValue: _defaultInputValue,
      onInputValueChange,
      command,
      collection: _collection,
      ...rest
    } = resolved

    return {
      inputBehavior: "autohighlight",
      selectionBehavior: "preserve",
      loopFocus: false,
      defaultHighlightedValue: collection.firstValue,
      ...rest,
      collection,
      inputValue: command ? command.query : (inputValue ?? ownInputValue),
      onInputValueChange(details) {
        ownInputValue = details.inputValue
        command?.search(details.inputValue)
        onInputValueChange?.(details)
      },
      open: true,
      disableLayer: true,
      onSelect(details) {
        const held = modifiers
        modifiers = NO_MODIFIERS
        runSelect({ ...details, modifiers: held }, collection.find(details.itemValue))
      },
      value: [],
    } satisfies UseComboboxProps<T>
  })

  const restoreHighlight = createHighlightRestorer(untrack(() => resolved.command?.highlightedValue ?? null))

  $effect(() =>
    restoreHighlight({
      collection,
      preferred: resolved.command?.highlightedValue ?? null,
      highlighted: combobox().highlightedValue,
      setHighlight: (value) => combobox().setHighlightValue(value),
    }),
  )

  return {
    get loading() {
      return resolved.loading ?? resolved.command?.loading
    },
    get command() {
      return resolved.command
    },
    combobox,
    selectItem(item, options = {}) {
      const itemValue = collection.getItemValue(item) ?? ""
      runSelect({ itemValue, value: [], modifiers: options.modifiers ?? NO_MODIFIERS }, item)
    },
    trackModifiers(event) {
      modifiers = pickModifiers(event)
    },
  }
}
