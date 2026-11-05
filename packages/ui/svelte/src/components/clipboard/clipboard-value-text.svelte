<script module lang="ts">
  import { Clipboard } from "@ark-ui/svelte/clipboard"

  export type ClipboardValueTextProps = Clipboard.ValueTextProps
</script>

<script lang="ts">
  import { useClipboardStyles } from "./clipboard-styles"

  let { ref = $bindable(null), class: className, ...props }: ClipboardValueTextProps = $props()
  const styles = useClipboardStyles()
</script>

<Clipboard.ValueText bind:ref {...props} data-slot="valueText" class={[styles().valueText, className]} />
