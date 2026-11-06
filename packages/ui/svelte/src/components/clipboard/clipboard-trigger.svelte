<script module lang="ts">
  import { Clipboard } from "@ark-ui/svelte/clipboard"

  export type ClipboardTriggerProps = Clipboard.TriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useClipboardStyles } from "./clipboard-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ClipboardTriggerProps = $props()
  const styles = useClipboardStyles()
</script>

<Clipboard.Trigger bind:ref {...props} data-slot="trigger" class={[!unstyled && styles().trigger, className]} />
