"use client"

import { Combobox, useComboboxContext } from "@ark-ui/react/combobox"
import { Dialog } from "@ark-ui/react/dialog"
import { createContext, dataAttr } from "@ark-ui/react/utils"
import {
  type ComponentProps,
  type HTMLAttributes,
  type JSX,
  type KeyboardEvent,
  type PointerEvent,
  type ReactNode,
  forwardRef,
  useId,
  useMemo,
} from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
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
import { Icon } from "../icon/icon"
import { getCommandMatchRanges } from "./command-score"
import type { CommandItem as CommandItemData } from "./command-types"
import {
  type CommandSource,
  type UseCommandProps,
  type UseCommandReturn,
  splitCommandProps,
  useCommand,
} from "./use-command"

const { withProvider, withContext } = createSlotRecipeContext(command)

export const [CommandContextProvider, useCommandContext] = createContext<UseCommandReturn<any>>({
  name: "CommandContext",
  hookName: "useCommandContext",
  providerName: "<Command.Root />",
})

interface CommandProviderContextValue {
  value: CommandSource<any>
  labelId: string
}

const [CommandProviderContextProvider, useCommandProviderContext] = createContext<
  CommandProviderContextValue | undefined
>({ name: "CommandProviderContext", strict: false })

const [CommandCloseProvider, useCommandClose] = createContext<VoidFunction | undefined>({
  name: "CommandCloseContext",
  strict: false,
})

export interface CommandProviderProps<T extends CommandItemData = CommandItemData> {
  /**
   * The value of `useCommandCollection`, shared with the dialog and every `Command.Root` inside.
   */
  value: CommandSource<T>
  children?: ReactNode
}

export function CommandProvider<T extends CommandItemData>({ value, children }: CommandProviderProps<T>) {
  const labelId = useId()
  const context = useMemo(() => ({ value, labelId }), [value, labelId])
  return <CommandProviderContextProvider value={context}>{children}</CommandProviderContextProvider>
}

interface RootProviderBaseProps extends HTMLAttributes<HTMLDivElement> {
  value: UseCommandReturn<any>
}

const CommandRootProviderBase = forwardRef<HTMLDivElement, RootProviderBaseProps>(
  function CommandRootProviderBase(props, ref) {
    const { value, onKeyDownCapture, onPointerDownCapture, ...rest } = props
    return (
      <CommandContextProvider value={value}>
        <Combobox.RootProvider
          ref={ref}
          value={value.combobox}
          {...rest}
          onKeyDownCapture={(event: KeyboardEvent<HTMLDivElement>) => {
            onKeyDownCapture?.(event)
            value.trackModifiers(event)
          }}
          onPointerDownCapture={(event: PointerEvent<HTMLDivElement>) => {
            onPointerDownCapture?.(event)
            value.trackModifiers(event)
          }}
          data-loading={dataAttr(value.loading)}
          data-empty={dataAttr(value.combobox.collection.size === 0)}
        />
      </CommandContextProvider>
    )
  },
)

export const CommandRootProvider = withProvider(CommandRootProviderBase, "root")
export type CommandRootProviderProps = ComponentProps<typeof CommandRootProvider>

type RootBaseProps = Omit<HTMLAttributes<HTMLDivElement>, "onSelect"> & UseCommandProps<any>

const CommandRootBase = forwardRef<HTMLDivElement, RootBaseProps>(function CommandRootBase(props, ref) {
  const [commandProps, localProps] = splitCommandProps(props)
  const provider = useCommandProviderContext()
  const onClose = useCommandClose()
  const value = useCommand({
    onClose,
    ...commandProps,
    command: commandProps.command ?? provider?.value,
    ids: provider ? { label: provider.labelId, ...commandProps.ids } : commandProps.ids,
  })
  return <CommandRootProviderBase ref={ref} value={value} {...localProps} />
})

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

export function CommandDialog({ children, onEscapeKeyDown, onExitComplete, ...props }: CommandDialogProps) {
  const provider = useCommandProviderContext()
  const source = provider?.value

  return (
    <DialogRoot
      placement="top"
      {...props}
      ids={provider ? { title: provider.labelId, ...props.ids } : props.ids}
      onEscapeKeyDown={(event) => {
        onEscapeKeyDown?.(event)
        if (!event.defaultPrevented && source?.popPage()) event.preventDefault()
      }}
      onExitComplete={() => {
        onExitComplete?.()
        source?.reset()
      }}
    >
      <Dialog.Context>
        {(dialog) => <CommandCloseProvider value={() => dialog.setOpen(false)}>{children}</CommandCloseProvider>}
      </Dialog.Context>
    </DialogRoot>
  )
}

export interface CommandDialogContentProps extends Omit<DialogContentProps, "title"> {
  /**
   * The accessible title of the dialog. Visually hidden.
   * @default "Command palette"
   */
  title?: ReactNode
  /**
   * The accessible description of the dialog. Visually hidden.
   * @default "Search for a command to run"
   */
  description?: ReactNode
}

export function CommandDialogContent({
  title = "Command palette",
  description = "Search for a command to run",
  children,
  ...props
}: CommandDialogContentProps) {
  return (
    <DialogPositioner>
      <DialogContent overflow="hidden" {...props}>
        <DialogTitle srOnly>{title}</DialogTitle>
        <DialogDescription srOnly>{description}</DialogDescription>
        {children}
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

const CommandIndicatorBase = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function CommandIndicatorBase(
  { children, ...props },
  ref,
) {
  const { loading } = useCommandContext()
  return (
    <div ref={ref} {...props} data-loading={dataAttr(loading)}>
      {children ?? <Icon name="search" />}
    </div>
  )
})

export const CommandIndicator = withContext(CommandIndicatorBase, "indicator")
export type CommandIndicatorProps = ComponentProps<typeof CommandIndicator>

const isComposing = (event: KeyboardEvent<HTMLInputElement>) =>
  event.nativeEvent.isComposing || event.nativeEvent.keyCode === 229

const CommandInputBase = forwardRef<HTMLInputElement, Combobox.InputProps>(function CommandInputBase(props, ref) {
  const { command, combobox, selectItem } = useCommandContext()
  const provider = useCommandProviderContext()
  return (
    <Combobox.Input
      ref={ref}
      aria-labelledby={provider?.labelId}
      {...props}
      onKeyDown={(event) => {
        props.onKeyDown?.(event)
        if (isComposing(event)) return
        command?.onInputKeyDown(event)
        if (event.defaultPrevented || event.key !== "Enter") return
        if (!command || command.filterQuery === command.query) return

        const highlighted = combobox.highlightedValue
        if (highlighted && highlighted !== combobox.collection.firstValue) return

        const item = command.getFirstMatch(command.query)
        if (!item) return
        event.preventDefault()
        const { metaKey, ctrlKey, shiftKey, altKey } = event
        selectItem(item, { modifiers: { metaKey, ctrlKey, shiftKey, altKey } })
      }}
    />
  )
})

export const CommandInput = withContext(CommandInputBase, "input")
export type CommandInputProps = ComponentProps<typeof CommandInput>

const StyledCommandClearTrigger = withContext(Combobox.ClearTrigger, "clearTrigger")
export type CommandClearTriggerProps = ComponentProps<typeof StyledCommandClearTrigger>

export function CommandClearTrigger({ children, ...props }: CommandClearTriggerProps) {
  return (
    <StyledCommandClearTrigger aria-label="Clear search" {...props}>
      {children ?? <Icon name="close" />}
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

const CommandItemTextBase = forwardRef<HTMLDivElement, CommandItemTextBaseProps>(function CommandItemTextBase(
  { highlight, children, ...props },
  ref,
) {
  const combobox = useComboboxContext()
  const { command } = useCommandContext()
  const query = command?.filterQuery ?? combobox.inputValue
  const text = highlight && typeof children === "string" ? children : null

  const content = useMemo(() => {
    if (text === null) return children
    const ranges = getCommandMatchRanges(text, query)
    if (!ranges.length) return text
    const parts: ReactNode[] = []
    let cursor = 0
    for (const [start, end] of ranges) {
      if (start > cursor) parts.push(text.slice(cursor, start))
      parts.push(<mark key={start}>{text.slice(start, end)}</mark>)
      cursor = end
    }
    if (cursor < text.length) parts.push(text.slice(cursor))
    return parts
  }, [text, children, query])

  return (
    <Combobox.ItemText ref={ref} {...props}>
      {content}
    </Combobox.ItemText>
  )
})

export const CommandItemText = withContext(CommandItemTextBase, "itemText")
export type CommandItemTextProps = ComponentProps<typeof CommandItemText>

export const CommandItemCommand = withContext("kbd", "itemCommand")
export type CommandItemCommandProps = ComponentProps<typeof CommandItemCommand>

const CommandLoadingBase = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function CommandLoadingBase(props, ref) {
    const { loading } = useCommandContext()
    if (!loading) return null
    return <div ref={ref} {...props} />
  },
)

export const CommandLoading = withContext(CommandLoadingBase, "loading")
export type CommandLoadingProps = ComponentProps<typeof CommandLoading>

const CommandEmptyBase = forwardRef<HTMLDivElement, Combobox.EmptyProps>(function CommandEmptyBase(props, ref) {
  const { loading } = useCommandContext()
  if (loading) return null
  return <Combobox.Empty ref={ref} {...props} />
})

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
