<script module lang="ts">
  import { Clipboard } from "@ark-ui/svelte/clipboard"

  export type ClipboardControlProps = Clipboard.ControlProps
</script>

<script lang="ts">
  import { useClipboardStyles } from "./clipboard-styles"

  let { ref = $bindable(null), class: className, ...props }: ClipboardControlProps = $props()
  const styles = useClipboardStyles()
</script>

<Clipboard.Control bind:ref {...props} data-slot="control" class={[styles().control, className]} />
