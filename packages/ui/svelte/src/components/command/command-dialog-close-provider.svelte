<script lang="ts">
  import { useDialogContext } from "@ark-ui/svelte/dialog"
  import type { Snippet } from "svelte"

  import { setCommandClose } from "./command-context"

  let { children }: { children?: Snippet | undefined } = $props()
  const dialog = useDialogContext()
  setCommandClose(() => dialog().setOpen(false))
</script>

{@render children?.()}
