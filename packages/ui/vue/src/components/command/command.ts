import { Combobox, useComboboxContext } from "@ark-ui/vue/combobox"
import { Dialog, useDialogContext } from "@ark-ui/vue/dialog"
import { dataAttr } from "@ark-ui/vue/utils"
import {
  type Component,
  type InjectionKey,
  type PropType,
  Text,
  type VNode,
  defineComponent,
  h,
  inject,
  mergeProps,
  provide,
  useId,
} from "vue"
import type { ComponentProps } from "vue-component-type-helpers"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import { command } from "@isbatak/panda-ds/recipes"

import {
  DialogBackdrop,
  DialogContent,
  DialogDescription,
  DialogPositioner,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "../dialog/dialog"
import { Icon } from "../icon"
import {
  type CommandItem as CommandItemData,
  type UseCommandCollectionReturn,
  getHighlightChunks,
  handleCommandInputKeyDown,
} from "./command-store"
import { type UseCommandProps, type UseCommandReturn, useCommand } from "./use-command"

const { withProvider, withContext } = createSlotRecipeContext(command)

const CommandContextKey: InjectionKey<UseCommandReturn<any>> = Symbol("CommandContext")

interface CommandProviderContextValue {
  readonly value: UseCommandCollectionReturn<any>
  labelId: string
}

const CommandProviderKey: InjectionKey<CommandProviderContextValue> = Symbol("CommandProviderContext")
const CommandCloseKey: InjectionKey<VoidFunction> = Symbol("CommandCloseContext")

export function useCommandContext<T extends CommandItemData = CommandItemData>(): UseCommandReturn<T> {
  const context = inject(CommandContextKey, null)
  if (!context) throw new Error("useCommandContext must be used within <Command.Root />")
  return context
}

export interface CommandProviderProps<T extends CommandItemData = CommandItemData> {
  /**
   * The value of `useCommandCollection`, shared with the dialog and every `Command.Root` inside.
   */
  value: UseCommandCollectionReturn<T>
}

export const CommandProvider = defineComponent({
  name: "CommandProvider",
  props: {
    value: { type: Object as PropType<UseCommandCollectionReturn<any>>, required: true },
  },
  setup(props, { slots }) {
    const labelId = useId()
    provide(CommandProviderKey, {
      get value() {
        return props.value
      },
      labelId,
    })
    return () => slots.default?.()
  },
})

const CommandRootProviderBase = defineComponent({
  name: "CommandRootProviderBase",
  inheritAttrs: false,
  props: {
    value: { type: Object as PropType<UseCommandReturn<any>>, required: true },
  },
  setup(props, { attrs, slots }) {
    provide(CommandContextKey, props.value)
    return () => {
      const { value } = props
      return h(
        Combobox.RootProvider as Component,
        mergeProps(attrs, {
          value: value.combobox.value,
          onKeydownCapture: (event: KeyboardEvent) => value.trackModifiers(event),
          onPointerdownCapture: (event: PointerEvent) => value.trackModifiers(event),
          "data-loading": dataAttr(value.loading),
          "data-empty": dataAttr(value.combobox.value.collection.size === 0),
        }),
        slots,
      )
    }
  },
})

export const CommandRootProvider = withProvider(CommandRootProviderBase, "root")
export type CommandRootProviderProps = ComponentProps<typeof CommandRootProvider>

const optional = <T>(type: PropType<T>) => ({ type, default: undefined })

const CommandRootBase = defineComponent({
  name: "CommandRootBase",
  inheritAttrs: false,
  props: {
    collection: optional(Object as PropType<UseCommandProps<any>["collection"]>),
    command: optional(Object as PropType<UseCommandProps<any>["command"]>),
    loading: optional(Boolean),
    closeOnSelect: optional(Boolean),
    onClose: optional(Function as PropType<UseCommandProps["onClose"]>),
    onSelect: optional(Function as PropType<UseCommandProps["onSelect"]>),
    defaultHighlightedValue: optional(String),
    defaultInputValue: optional(String),
    highlightedValue: optional(String),
    id: optional(String),
    ids: optional(Object as PropType<UseCommandProps["ids"]>),
    inputValue: optional(String),
    navigate: optional(Function as PropType<UseCommandProps["navigate"]>),
    onHighlightChange: optional(Function as PropType<UseCommandProps["onHighlightChange"]>),
    onInputValueChange: optional(Function as PropType<UseCommandProps["onInputValueChange"]>),
    scrollToIndexFn: optional(Function as PropType<UseCommandProps["scrollToIndexFn"]>),
  },
  setup(props, { attrs, slots }) {
    const provider = inject(CommandProviderKey, undefined)
    const close = inject(CommandCloseKey, undefined)
    const value = useCommand<CommandItemData>(() => ({
      ...props,
      onClose: props.onClose ?? close,
      command: props.command ?? provider?.value,
      ids: provider ? { label: provider.labelId, ...props.ids } : props.ids,
    }))
    return () => h(CommandRootProviderBase, { ...attrs, value }, slots)
  },
})

export const CommandRoot = withProvider(CommandRootBase, "root")
export type CommandRootProps = ComponentProps<typeof CommandRoot>

export const CommandDialogTrigger = DialogTrigger
export type CommandDialogTriggerProps = ComponentProps<typeof CommandDialogTrigger>

const CommandDialogCloseProvider = defineComponent({
  name: "CommandDialogCloseProvider",
  setup(_, { slots }) {
    const dialog = useDialogContext()
    provide(CommandCloseKey, () => dialog.value.setOpen(false))
    return () => slots.default?.()
  },
})

export const CommandDialog = defineComponent({
  name: "CommandDialog",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    const provider = inject(CommandProviderKey, undefined)
    return () => {
      const ids = attrs.ids as Record<string, string> | undefined
      return h(
        DialogRoot as Component,
        mergeProps({ placement: "top" }, attrs, {
          ids: provider ? { title: provider.labelId, ...ids } : ids,
          onEscapeKeyDown: (event: KeyboardEvent) => {
            if (!event.defaultPrevented && provider?.value.popPage()) event.preventDefault()
          },
          onExitComplete: () => provider?.value.reset(),
        }),
        () => h(CommandDialogCloseProvider, null, slots),
      )
    }
  },
}) as unknown as typeof DialogRoot
export type CommandDialogProps = ComponentProps<typeof CommandDialog>

export const CommandDialogContent = defineComponent({
  name: "CommandDialogContent",
  inheritAttrs: false,
  props: {
    title: { type: String, default: "Command palette" },
    description: { type: String, default: "Search for a command to run" },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(DialogPositioner as Component, null, () =>
        h(DialogContent as Component, { overflow: "hidden", ...attrs }, () => [
          h(DialogTitle as Component, { srOnly: true }, () => props.title),
          h(DialogDescription as Component, { srOnly: true }, () => props.description),
          slots.default?.(),
        ]),
      )
  },
})
export type CommandDialogContentProps = ComponentProps<typeof DialogContent> & {
  title?: string | undefined
  description?: string | undefined
}

export const CommandDialogBackdrop = DialogBackdrop
export type CommandDialogBackdropProps = ComponentProps<typeof CommandDialogBackdrop>

export const CommandLabel = withContext(Combobox.Label, "label")
export type CommandLabelProps = ComponentProps<typeof CommandLabel>

export const CommandControl = withContext(Combobox.Control, "control")
export type CommandControlProps = ComponentProps<typeof CommandControl>

const CommandIndicatorBase = defineComponent({
  name: "CommandIndicatorBase",
  setup(_, { slots }) {
    const context = useCommandContext()
    return () =>
      h("div", { "data-loading": dataAttr(context.loading) }, slots.default?.() ?? h(Icon, { name: "search" }))
  },
})

export const CommandIndicator = withContext(CommandIndicatorBase, "indicator")
export type CommandIndicatorProps = ComponentProps<typeof CommandIndicator>

const CommandInputBase = defineComponent({
  name: "CommandInputBase",
  inheritAttrs: false,
  setup(_, { attrs }) {
    const context = useCommandContext()
    const provider = inject(CommandProviderKey, undefined)
    return () =>
      h(
        Combobox.Input as Component,
        mergeProps({ "aria-labelledby": provider?.labelId }, attrs, {
          onKeydown: (event: KeyboardEvent) => {
            const { combobox } = context
            handleCommandInputKeyDown(event, {
              command: context.command,
              highlightedValue: combobox.value.highlightedValue,
              firstValue: combobox.value.collection.firstValue,
              selectItem: (item, modifiers) => context.selectItem(item, { modifiers }),
            })
          },
        }),
      )
  },
})

export const CommandInput = withContext(CommandInputBase, "input")
export type CommandInputProps = ComponentProps<typeof Combobox.Input> & ComponentProps<typeof CommandInput>

const StyledCommandClearTrigger = withContext(Combobox.ClearTrigger, "clearTrigger")
export type CommandClearTriggerProps = ComponentProps<typeof StyledCommandClearTrigger>

export const CommandClearTrigger = defineComponent({
  name: "CommandClearTrigger",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () =>
      h(
        StyledCommandClearTrigger as Component,
        { "aria-label": "Clear search", ...attrs },
        () => slots.default?.() ?? h(Icon, { name: "close" }),
      )
  },
}) as unknown as typeof StyledCommandClearTrigger

export const CommandList = withContext(Combobox.Content, "list")
export type CommandListProps = ComponentProps<typeof CommandList>

export const CommandItemGroup = withContext(Combobox.ItemGroup, "itemGroup")
export type CommandItemGroupProps = ComponentProps<typeof CommandItemGroup>

export const CommandItemGroupLabel = withContext(Combobox.ItemGroupLabel, "itemGroupLabel")
export type CommandItemGroupLabelProps = ComponentProps<typeof CommandItemGroupLabel>

export const CommandItem = withContext(Combobox.Item, "item", { defaultProps: { persistFocus: true } })
export type CommandItemProps = ComponentProps<typeof CommandItem>

const textOf = (nodes: VNode[] | undefined) =>
  nodes?.length === 1 && nodes[0]?.type === Text && typeof nodes[0].children === "string" ? nodes[0].children : null

const CommandItemTextBase = defineComponent({
  name: "CommandItemTextBase",
  inheritAttrs: false,
  props: {
    highlight: { type: Boolean, default: false },
  },
  setup(props, { attrs, slots }) {
    const combobox = useComboboxContext()
    const context = useCommandContext()
    return () => {
      const nodes = slots.default?.()
      const text = props.highlight ? textOf(nodes) : null
      const query = context.command?.filterQuery ?? combobox.value.inputValue
      const content =
        text === null
          ? nodes
          : getHighlightChunks(text, query).map((chunk) => (chunk.match ? h("mark", chunk.text) : chunk.text))
      return h(Combobox.ItemText as Component, attrs, () => content)
    }
  },
})

export const CommandItemText = withContext(CommandItemTextBase, "itemText")
export type CommandItemTextProps = ComponentProps<typeof CommandItemText>

export const CommandItemCommand = withContext("kbd", "itemCommand")
export type CommandItemCommandProps = ComponentProps<typeof CommandItemCommand>

const CommandLoadingBase = defineComponent({
  name: "CommandLoadingBase",
  setup(_, { slots }) {
    const context = useCommandContext()
    return () => (context.loading ? h("div", null, slots.default?.()) : null)
  },
})

export const CommandLoading = withContext(CommandLoadingBase, "loading")
export type CommandLoadingProps = ComponentProps<typeof CommandLoading>

const CommandEmptyBase = defineComponent({
  name: "CommandEmptyBase",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    const context = useCommandContext()
    return () => (context.loading ? null : h(Combobox.Empty as Component, attrs, slots))
  },
})

export const CommandEmpty = withContext(CommandEmptyBase, "empty")
export type CommandEmptyProps = ComponentProps<typeof CommandEmpty>

export const CommandSeparator = withContext("div", "separator", { defaultProps: { role: "presentation" } })
export type CommandSeparatorProps = ComponentProps<typeof CommandSeparator>

export const CommandFooter = withContext("div", "footer")
export type CommandFooterProps = ComponentProps<typeof CommandFooter>

export const CommandContext = Combobox.Context
export type CommandContextProps = ComponentProps<typeof CommandContext>

export const CommandDialogContext = Dialog.Context
export type CommandDialogContextProps = ComponentProps<typeof CommandDialogContext>

export const CommandItemContext = Combobox.ItemContext
export type CommandItemContextProps = ComponentProps<typeof CommandItemContext>
