<script module lang="ts">
  import type { CommandVariantProps } from "@isbatak/panda-ds/recipes"
  import type { HTMLAttributes } from "svelte/elements"

  import type { CommandItem } from "./command-store"
  import type { UseCommandProps } from "./use-command.svelte"

  export type CommandRootProps<T extends CommandItem = CommandItem> = Omit<HTMLAttributes<HTMLDivElement>, "id"> &
    Omit<UseCommandProps<T>, "id"> &
    CommandVariantProps & { id?: string | undefined; ref?: HTMLElement | null; unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends CommandItem = CommandItem">
  import { getCommandClose, getCommandProvider } from "./command-context"
  import CommandRootProvider from "./command-root-provider.svelte"
  import { useCommand } from "./use-command.svelte"

  let {
    ref = $bindable(null),
    collection,
    command,
    loading,
    closeOnSelect,
    onClose,
    onSelect,
    defaultHighlightedValue,
    defaultInputValue,
    highlightedValue,
    id,
    ids,
    inputValue,
    navigate,
    onHighlightChange,
    onInputValueChange,
    scrollToIndexFn,
    ...props
  }: CommandRootProps<T> = $props()

  const uid = $props.id()
  const provider = getCommandProvider()
  const close = getCommandClose()

  const value = useCommand<T>(() => ({
    collection,
    command: command ?? provider?.value,
    loading,
    closeOnSelect,
    onClose: onClose ?? close,
    onSelect,
    defaultHighlightedValue,
    defaultInputValue,
    highlightedValue,
    id: id ?? uid,
    ids: provider ? { label: provider.labelId, ...ids } : ids,
    inputValue,
    navigate,
    onHighlightChange,
    onInputValueChange,
    scrollToIndexFn,
  }))
</script>

<CommandRootProvider bind:ref {value} {...props} />
