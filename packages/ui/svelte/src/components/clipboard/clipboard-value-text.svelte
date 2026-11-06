<script module lang="ts">
  import { Clipboard } from "@ark-ui/svelte/clipboard"

  export type ClipboardValueTextProps = Clipboard.ValueTextProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useClipboardStyles } from "./clipboard-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ClipboardValueTextProps = $props()
  const styles = useClipboardStyles()
</script>

<Clipboard.ValueText bind:ref {...props} data-slot="valueText" class={[!unstyled && styles().valueText, className]} />
