<script module lang="ts">
  import { Clipboard } from "@ark-ui/svelte/clipboard"

  export type ClipboardInputProps = Clipboard.InputProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useClipboardStyles } from "./clipboard-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ClipboardInputProps = $props()
  const styles = useClipboardStyles()
</script>

<Clipboard.Input bind:ref {...props} data-slot="input" class={[!unstyled && styles().input, className]} />
