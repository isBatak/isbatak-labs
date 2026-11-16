<script module lang="ts">
  import type { Snippet } from "svelte"

  import type { CommandItem, UseCommandCollectionReturn } from "./command-store"

  export interface CommandProviderProps<T extends CommandItem = CommandItem> {
    /**
     * The value of `useCommandCollection`, shared with the dialog and every `Command.Root` inside.
     */
    value: UseCommandCollectionReturn<T>
    children?: Snippet | undefined
  }
</script>

<script lang="ts" generics="T extends CommandItem = CommandItem">
  import { setCommandProvider } from "./command-context"

  let { value, children }: CommandProviderProps<T> = $props()
  const labelId = $props.id()

  setCommandProvider({
    get value() {
      return value
    },
    labelId,
  })
</script>

{@render children?.()}
