<script module lang="ts">
  import { Clipboard } from "@ark-ui/svelte/clipboard"

  export type ClipboardControlProps = Clipboard.ControlProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useClipboardStyles } from "./clipboard-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ClipboardControlProps = $props()
  const styles = useClipboardStyles()
</script>

<Clipboard.Control bind:ref {...props} data-slot="control" class={[!unstyled && styles().control, className]} />
