<script module lang="ts">
  import { Clipboard } from "@ark-ui/svelte/clipboard"

  export type ClipboardLabelProps = Clipboard.LabelProps
</script>

<script lang="ts">
  import { useClipboardStyles } from "./clipboard-styles"

  let { ref = $bindable(null), class: className, ...props }: ClipboardLabelProps = $props()
  const styles = useClipboardStyles()
</script>

<Clipboard.Label bind:ref {...props} data-slot="label" class={[styles().label, className]} />
