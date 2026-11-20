import { Combobox, useComboboxContext } from "@ark-ui/solid/combobox"
import { Dialog, useDialogContext } from "@ark-ui/solid/dialog"
import { type HTMLArkProps, ark } from "@ark-ui/solid/factory"
import {
  type ComponentProps,
  type JSX,
  type ParentProps,
  Show,
  createContext,
  createEffect,
  createSignal,
  createUniqueId,
  Index,
  onCleanup,
  splitProps,
  useContext,
} from "solid-js"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
import { command } from "@isbatak/panda-ds/recipes"

import {
  DialogBackdrop,
  type DialogBackdropProps,
  DialogContent,
  type DialogContentProps,
  DialogDescription,
  DialogPositioner,
  DialogRoot,
  type DialogRootProps,
  DialogTitle,
  DialogTrigger,
  type DialogTriggerProps,
} from "../dialog/dialog"
import { Icon } from "../icon"
import {
  type CommandItem as CommandItemData,
  type UseCommandCollectionReturn,
  getHighlightChunks,
  handleCommandInputKeyDown,
} from "./command-store"
import { type UseCommandProps, type UseCommandReturn, commandPropKeys, useCommand } from "./use-command"

const { withProvider, withContext } = createSlotRecipeContext(command)

const CommandContextValue = createContext<UseCommandReturn<any>>()

export function useCommandContext<T extends CommandItemData = CommandItemData>(): UseCommandReturn<T> {
  const context = useContext(CommandContextValue)
  if (!context) throw new Error("useCommandContext must be used within <Command.Root />")
  return context
}

interface CommandProviderContextValue {
  readonly value: UseCommandCollectionReturn<any>
  labelId: string
}

const CommandProviderContext = createContext<CommandProviderContextValue>()
const CommandCloseContext = createContext<VoidFunction>()

export interface CommandProviderProps<T extends CommandItemData = CommandItemData> extends ParentProps {
  /**
   * The value of `useCommandCollection`, shared with the dialog and every `Command.Root` inside.
   */
  value: UseCommandCollectionReturn<T>
}

export function CommandProvider<T extends CommandItemData>(props: CommandProviderProps<T>) {
  const labelId = createUniqueId()
  const context: CommandProviderContextValue = {
    get value() {
      return props.value
    },
    labelId,
  }
  return <CommandProviderContext.Provider value={context}>{props.children}</CommandProviderContext.Provider>
}

type RootProviderBaseProps = HTMLArkProps<"div"> & { value: UseCommandReturn<any> }

function CommandRootProviderBase(props: RootProviderBaseProps) {
  const [local, rest] = splitProps(props, ["value", "ref"])
  const [element, setElement] = createSignal<HTMLDivElement>()

  createEffect(() => {
    const node = element()
    if (!node) return
    const track = (event: KeyboardEvent | PointerEvent) => local.value.trackModifiers(event)
    node.addEventListener("keydown", track, true)
    node.addEventListener("pointerdown", track, true)
    onCleanup(() => {
      node.removeEventListener("keydown", track, true)
      node.removeEventListener("pointerdown", track, true)
    })
  })

  return (
    <CommandContextValue.Provider value={local.value}>
      <Combobox.RootProvider
        {...rest}
        ref={(node: HTMLDivElement) => {
          setElement(node)
          if (typeof local.ref === "function") (local.ref as (node: HTMLDivElement) => void)(node)
        }}
        value={local.value.combobox}
        data-loading={local.value.loading ? "" : undefined}
        data-empty={local.value.combobox().collection.size === 0 ? "" : undefined}
      />
    </CommandContextValue.Provider>
  )
}

export const CommandRootProvider = withProvider(CommandRootProviderBase, "root")
export type CommandRootProviderProps = ComponentProps<typeof CommandRootProvider>

type RootBaseProps = Omit<HTMLArkProps<"div">, "onSelect"> & UseCommandProps<any>

function CommandRootBase(props: RootBaseProps) {
  const [commandProps, localProps] = splitProps(props, [...commandPropKeys])
  const provider = useContext(CommandProviderContext)
  const close = useContext(CommandCloseContext)
  const value = useCommand<CommandItemData>(() => ({
    ...commandProps,
    onClose: commandProps.onClose ?? close,
    command: commandProps.command ?? provider?.value,
    ids: provider ? { label: provider.labelId, ...commandProps.ids } : commandProps.ids,
  }))
  return <CommandRootProviderBase value={value} {...localProps} />
}

const StyledCommandRoot = withProvider(CommandRootBase, "root")

export type CommandRootProps<T extends CommandItemData = CommandItemData> = Omit<
  ComponentProps<typeof StyledCommandRoot>,
  keyof UseCommandProps<T>
> &
  UseCommandProps<T>

export const CommandRoot = StyledCommandRoot as <T extends CommandItemData>(props: CommandRootProps<T>) => JSX.Element

export const CommandDialogTrigger = DialogTrigger
export type CommandDialogTriggerProps = DialogTriggerProps

export type CommandDialogProps = DialogRootProps

function CommandDialogCloseProvider(props: ParentProps) {
  const dialog = useDialogContext()
  return (
    <CommandCloseContext.Provider value={() => dialog().setOpen(false)}>{props.children}</CommandCloseContext.Provider>
  )
}

export function CommandDialog(props: CommandDialogProps) {
  const provider = useContext(CommandProviderContext)
  const [local, rest] = splitProps(props, ["children", "ids", "onEscapeKeyDown", "onExitComplete"])

  return (
    <DialogRoot
      placement="top"
      {...rest}
      ids={provider ? { title: provider.labelId, ...local.ids } : local.ids}
      onEscapeKeyDown={(event) => {
        local.onEscapeKeyDown?.(event)
        if (!event.defaultPrevented && provider?.value.popPage()) event.preventDefault()
      }}
      onExitComplete={() => {
        local.onExitComplete?.()
        provider?.value.reset()
      }}
    >
      <CommandDialogCloseProvider>{local.children}</CommandDialogCloseProvider>
    </DialogRoot>
  )
}

export interface CommandDialogContentProps extends Omit<DialogContentProps, "title"> {
  /**
   * The accessible title of the dialog. Visually hidden.
   * @default "Command palette"
   */
  title?: JSX.Element | undefined
  /**
   * The accessible description of the dialog. Visually hidden.
   * @default "Search for a command to run"
   */
  description?: JSX.Element | undefined
}

export function CommandDialogContent(props: CommandDialogContentProps) {
  const [local, rest] = splitProps(props, ["title", "description", "children"])
  return (
    <DialogPositioner>
      <DialogContent overflow="hidden" {...rest}>
        <DialogTitle srOnly>{local.title ?? "Command palette"}</DialogTitle>
        <DialogDescription srOnly>{local.description ?? "Search for a command to run"}</DialogDescription>
        {local.children}
      </DialogContent>
    </DialogPositioner>
  )
}

export const CommandDialogBackdrop = DialogBackdrop
export type CommandDialogBackdropProps = DialogBackdropProps

export const CommandLabel = withContext(Combobox.Label, "label")
export type CommandLabelProps = ComponentProps<typeof CommandLabel>

export const CommandControl = withContext(Combobox.Control, "control")
export type CommandControlProps = ComponentProps<typeof CommandControl>

function CommandIndicatorBase(props: HTMLArkProps<"div">) {
  const [local, rest] = splitProps(props, ["children"])
  const context = useCommandContext()
  return (
    <ark.div {...rest} data-loading={context.loading ? "" : undefined}>
      {local.children ?? <Icon name="search" />}
    </ark.div>
  )
}

export const CommandIndicator = withContext(CommandIndicatorBase, "indicator")
export type CommandIndicatorProps = ComponentProps<typeof CommandIndicator>

type KeyboardHandler = JSX.EventHandlerUnion<HTMLInputElement, KeyboardEvent>

const callHandler = (
  handler: KeyboardHandler | undefined,
  event: Parameters<JSX.EventHandler<HTMLInputElement, KeyboardEvent>>[0],
) => {
  if (typeof handler === "function") handler(event)
  else handler?.[0](handler[1], event)
}

function CommandInputBase(props: Combobox.InputProps) {
  const [local, rest] = splitProps(props, ["onKeyDown"])
  const context = useCommandContext()
  const provider = useContext(CommandProviderContext)
  return (
    <Combobox.Input
      aria-labelledby={provider?.labelId}
      {...rest}
      onKeyDown={(event) => {
        callHandler(local.onKeyDown as KeyboardHandler | undefined, event)
        const combobox = context.combobox()
        handleCommandInputKeyDown(event, {
          command: context.command,
          highlightedValue: combobox.highlightedValue,
          firstValue: combobox.collection.firstValue,
          selectItem: (item, modifiers) => context.selectItem(item, { modifiers }),
        })
      }}
    />
  )
}

export const CommandInput = withContext(CommandInputBase, "input")
export type CommandInputProps = ComponentProps<typeof CommandInput>

const StyledCommandClearTrigger = withContext(Combobox.ClearTrigger, "clearTrigger")
export type CommandClearTriggerProps = ComponentProps<typeof StyledCommandClearTrigger>

export function CommandClearTrigger(props: CommandClearTriggerProps) {
  const [local, rest] = splitProps(props, ["children"])
  return (
    <StyledCommandClearTrigger aria-label="Clear search" {...rest}>
      {local.children ?? <Icon name="close" />}
    </StyledCommandClearTrigger>
  )
}

export const CommandList = withContext(Combobox.Content, "list")
export type CommandListProps = ComponentProps<typeof CommandList>

export const CommandItemGroup = withContext(Combobox.ItemGroup, "itemGroup")
export type CommandItemGroupProps = ComponentProps<typeof CommandItemGroup>

export const CommandItemGroupLabel = withContext(Combobox.ItemGroupLabel, "itemGroupLabel")
export type CommandItemGroupLabelProps = ComponentProps<typeof CommandItemGroupLabel>

export const CommandItem = withContext(Combobox.Item, "item", { defaultProps: { persistFocus: true } })
export type CommandItemProps = ComponentProps<typeof CommandItem>

interface CommandItemTextBaseProps extends Combobox.ItemTextProps {
  /**
   * Whether to bold the characters that match the search query. Applies when the children are a string.
   */
  highlight?: boolean | undefined
}

function CommandItemTextBase(props: CommandItemTextBaseProps) {
  const [local, rest] = splitProps(props, ["highlight", "children"])
  const combobox = useComboboxContext()
  const context = useCommandContext()

  const content = () => {
    const text = local.children
    if (!local.highlight || typeof text !== "string") return text
    const query = context.command?.filterQuery ?? combobox().inputValue
    return (
      <Index each={getHighlightChunks(text, query)}>
        {(chunk) => (chunk().match ? <mark>{chunk().text}</mark> : chunk().text)}
      </Index>
    )
  }

  return <Combobox.ItemText {...rest}>{content()}</Combobox.ItemText>
}

export const CommandItemText = withContext(CommandItemTextBase, "itemText")
export type CommandItemTextProps = ComponentProps<typeof CommandItemText>

export const CommandItemCommand = withContext("kbd", "itemCommand")
export type CommandItemCommandProps = ComponentProps<typeof CommandItemCommand>

function CommandLoadingBase(props: HTMLArkProps<"div">) {
  const context = useCommandContext()
  return (
    <Show when={context.loading}>
      <ark.div {...props} />
    </Show>
  )
}

export const CommandLoading = withContext(CommandLoadingBase, "loading")
export type CommandLoadingProps = ComponentProps<typeof CommandLoading>

function CommandEmptyBase(props: Combobox.EmptyProps) {
  const context = useCommandContext()
  return (
    <Show when={!context.loading}>
      <Combobox.Empty {...props} />
    </Show>
  )
}

export const CommandEmpty = withContext(CommandEmptyBase, "empty")
export type CommandEmptyProps = ComponentProps<typeof CommandEmpty>

export const CommandSeparator = withContext("div", "separator", { defaultProps: { role: "presentation" } })
export type CommandSeparatorProps = ComponentProps<typeof CommandSeparator>

export const CommandFooter = withContext("div", "footer")
export type CommandFooterProps = ComponentProps<typeof CommandFooter>

export const CommandContext = Combobox.Context
export type CommandContextProps = Combobox.ContextProps<CommandItemData>

export const CommandDialogContext = Dialog.Context
export type CommandDialogContextProps = Dialog.ContextProps

export const CommandItemContext = Combobox.ItemContext
export type CommandItemContextProps = Combobox.ItemContextProps
