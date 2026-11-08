<script module lang="ts">
  import { Dialog } from "@ark-ui/svelte/dialog"

  export type DialogDescriptionProps = Dialog.DescriptionProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDialogStyles } from "./dialog-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DialogDescriptionProps = $props()
  const styles = useDialogStyles()
</script>

<Dialog.Description bind:ref {...props} data-slot="description" class={[!unstyled && styles().description, className]} />
