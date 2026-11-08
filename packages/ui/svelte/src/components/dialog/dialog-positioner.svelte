<script module lang="ts">
  import { Dialog } from "@ark-ui/svelte/dialog"

  export type DialogPositionerProps = Dialog.PositionerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDialogStyles } from "./dialog-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DialogPositionerProps = $props()
  const styles = useDialogStyles()
</script>

<Dialog.Positioner bind:ref {...props} data-slot="positioner" class={[!unstyled && styles().positioner, className]} />
