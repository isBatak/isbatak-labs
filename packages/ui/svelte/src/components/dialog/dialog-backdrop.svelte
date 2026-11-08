<script module lang="ts">
  import { Dialog } from "@ark-ui/svelte/dialog"

  export type DialogBackdropProps = Dialog.BackdropProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDialogStyles } from "./dialog-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DialogBackdropProps = $props()
  const styles = useDialogStyles()
</script>

<Dialog.Backdrop bind:ref {...props} data-slot="backdrop" class={[!unstyled && styles().backdrop, className]} />
