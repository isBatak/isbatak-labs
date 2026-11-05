<script module lang="ts">
  import { Clipboard } from "@ark-ui/svelte/clipboard"

  export type ClipboardIndicatorProps = Clipboard.IndicatorProps
</script>

<script lang="ts">
  import { useClipboardStyles } from "./clipboard-styles"

  let { ref = $bindable(null), class: className, ...props }: ClipboardIndicatorProps = $props()
  const styles = useClipboardStyles()
</script>

<Clipboard.Indicator bind:ref {...props} data-slot="indicator" class={[styles().indicator, className]} />
