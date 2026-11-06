<script module lang="ts">
  import { Clipboard } from "@ark-ui/svelte/clipboard"

  export type ClipboardIndicatorProps = Clipboard.IndicatorProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useClipboardStyles } from "./clipboard-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ClipboardIndicatorProps = $props()
  const styles = useClipboardStyles()
</script>

<Clipboard.Indicator bind:ref {...props} data-slot="indicator" class={[!unstyled && styles().indicator, className]} />
