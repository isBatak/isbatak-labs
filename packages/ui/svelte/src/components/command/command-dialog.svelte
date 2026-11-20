<script module lang="ts">
  import type { DialogRootProps } from "../dialog/dialog-root.svelte"

  export type CommandDialogProps = DialogRootProps
</script>

<script lang="ts">
  import DialogRoot from "../dialog/dialog-root.svelte"
  import { getCommandProvider } from "./command-context"
  import CommandDialogCloseProvider from "./command-dialog-close-provider.svelte"

  let { open = $bindable(), ids, onEscapeKeyDown, onExitComplete, children, ...props }: CommandDialogProps = $props()
  const provider = getCommandProvider()
</script>

<DialogRoot
  placement="top"
  bind:open
  {...props}
  ids={provider ? { title: provider.labelId, ...ids } : ids}
  onEscapeKeyDown={(event) => {
    onEscapeKeyDown?.(event)
    if (!event.defaultPrevented && provider?.value.popPage()) event.preventDefault()
  }}
  onExitComplete={() => {
    onExitComplete?.()
    provider?.value.reset()
  }}
>
  <CommandDialogCloseProvider>{@render children?.()}</CommandDialogCloseProvider>
</DialogRoot>
