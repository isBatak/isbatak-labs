<script module lang="ts">
  import { Clipboard } from "@ark-ui/svelte/clipboard"

  export type ClipboardLabelProps = Clipboard.LabelProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useClipboardStyles } from "./clipboard-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ClipboardLabelProps = $props()
  const styles = useClipboardStyles()
</script>

<Clipboard.Label bind:ref {...props} data-slot="label" class={[!unstyled && styles().label, className]} />
