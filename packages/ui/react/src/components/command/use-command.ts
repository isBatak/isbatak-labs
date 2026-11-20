"use client"

import { type ListCollection, createListCollection } from "@ark-ui/react/collection"
import { type Combobox, type UseComboboxReturn, useCombobox } from "@ark-ui/react/combobox"
import { useCallback, useEffect, useMemo, useRef } from "react"

import {
  type CommandItem,
  type CommandModifierKeys,
  type CommandSelectionDetails,
  NO_MODIFIERS,
  hasModifierKey,
} from "./command-types"
import type { UseCommandCollectionReturn } from "./use-command-collection"
import { useControllableState, useLiveRef } from "./use-controllable-state"

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

type ComboboxOnlyProps<T extends CommandItem> = Pick<Combobox.RootBaseProps<T>, (typeof comboboxPropKeys)[number]>

export interface CommandSource<T extends CommandItem = CommandItem> extends UseCommandCollectionReturn<T> {}

export interface UseCommandProps<T extends CommandItem = CommandItem> extends ComboboxOnlyProps<T> {
  /**
   * The items to show. Not needed when `command` is passed.
   */
  collection?: ListCollection<T> | undefined
  /**
   * The value of `useCommandCollection`.
   */
  command?: CommandSource<T> | undefined
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
  loading: boolean | undefined
  /**
   * The value of `useCommandCollection`, if any.
   */
  command: CommandSource<T> | undefined
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

const pickModifiers = ({ metaKey, ctrlKey, shiftKey, altKey }: CommandModifierKeys): CommandModifierKeys => ({
  metaKey,
  ctrlKey,
  shiftKey,
  altKey,
})

export function useCommand<T extends CommandItem = CommandItem>(props: UseCommandProps<T>): UseCommandReturn<T> {
  const {
    loading: loadingProp,
    closeOnSelect = true,
    onClose,
    onSelect,
    inputValue: inputValueProp,
    defaultInputValue = "",
    onInputValueChange,
    command,
    collection: collectionProp,
    ...restProps
  } = props

  const emptyCollection = useMemo(() => createListCollection<T>({ items: [] }), [])
  const collection = command?.collection ?? collectionProp ?? emptyCollection
  const loading = loadingProp ?? command?.loading

  const [inputValue, setInputValue] = useControllableState({
    value: command ? command.query : inputValueProp,
    defaultValue: defaultInputValue,
  })

  const modifiersRef = useRef<CommandModifierKeys>(NO_MODIFIERS)
  const trackModifiers = useCallback((event: CommandModifierKeys) => {
    modifiersRef.current = pickModifiers(event)
  }, [])

  const runSelect = (details: CommandSelectionDetails, item: T | null | undefined) => {
    item?.onSelect?.(details)
    onSelect?.(details)
    if (command?.onSelect(details)) return

    const shouldClose = closeOnSelect && !hasModifierKey(details.modifiers)
    if (item?.closeOnSelect ?? shouldClose) onClose?.()
  }

  const combobox = useCombobox<T>({
    inputBehavior: "autohighlight",
    selectionBehavior: "preserve",
    loopFocus: false,
    defaultHighlightedValue: collection.firstValue,
    ...restProps,
    collection,
    inputValue,
    onInputValueChange(details) {
      setInputValue(details.inputValue)
      command?.search(details.inputValue)
      onInputValueChange?.(details)
    },
    open: true,
    disableLayer: true,
    onSelect(details) {
      const modifiers = modifiersRef.current
      modifiersRef.current = NO_MODIFIERS
      runSelect({ ...details, modifiers }, collection.find(details.itemValue))
    },
    value: [],
  })

  useRestoreHighlight(combobox, command?.highlightedValue ?? null)

  const selectItem = (item: T, options: CommandSelectItemOptions = {}) => {
    const itemValue = collection.getItemValue(item) ?? ""
    runSelect({ itemValue, value: [], modifiers: options.modifiers ?? NO_MODIFIERS }, item)
  }

  return { loading, command, combobox, selectItem, trackModifiers }
}

function useRestoreHighlight<T extends CommandItem>(combobox: UseComboboxReturn<T>, preferred: string | null) {
  const { collection, highlightedValue } = combobox
  const setHighlightRef = useLiveRef(combobox.setHighlightValue)
  const preferredRef = useRef(preferred)
  const pendingRef = useRef<string | null>(null)

  useEffect(() => {
    if (preferred !== preferredRef.current) {
      preferredRef.current = preferred
      pendingRef.current = preferred
    }

    const pending = pendingRef.current
    if (pending && pending !== highlightedValue && collection.has(pending)) {
      const frame = requestAnimationFrame(() => setHighlightRef.current(pending))
      return () => cancelAnimationFrame(frame)
    }
    pendingRef.current = null
  }, [collection, preferred, highlightedValue, setHighlightRef])
}

const commandPropKeys = new Set<string>([
  ...comboboxPropKeys,
  "collection",
  "command",
  "loading",
  "closeOnSelect",
  "onClose",
  "onSelect",
])

export function splitCommandProps<P extends UseCommandProps<any>>(props: P) {
  const commandProps: Record<string, unknown> = {}
  const rest: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(props)) {
    if (commandPropKeys.has(key)) commandProps[key] = value
    else rest[key] = value
  }
  return [commandProps as UseCommandProps<any>, rest as Omit<P, keyof UseCommandProps>] as const
}
