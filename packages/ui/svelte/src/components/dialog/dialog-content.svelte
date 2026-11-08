<script module lang="ts">
  import { Dialog } from "@ark-ui/svelte/dialog"

  export type DialogContentProps = Dialog.ContentProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDialogStyles } from "./dialog-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DialogContentProps = $props()
  const styles = useDialogStyles()
</script>

<Dialog.Content bind:ref {...props} data-slot="content" class={[!unstyled && styles().content, className]} />
