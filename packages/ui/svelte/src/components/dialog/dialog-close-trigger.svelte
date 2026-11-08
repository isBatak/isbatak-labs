<script module lang="ts">
  import { Dialog } from "@ark-ui/svelte/dialog"

  export type DialogCloseTriggerProps = Dialog.CloseTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDialogStyles } from "./dialog-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DialogCloseTriggerProps = $props()
  const styles = useDialogStyles()
</script>

<Dialog.CloseTrigger bind:ref {...props} data-slot="closeTrigger" class={[!unstyled && styles().closeTrigger, className]} />
