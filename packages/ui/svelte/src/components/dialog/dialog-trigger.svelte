<script module lang="ts">
  import { Dialog } from "@ark-ui/svelte/dialog"

  export type DialogTriggerProps = Dialog.TriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDialogStyles } from "./dialog-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DialogTriggerProps = $props()
  const styles = useDialogStyles()
</script>

<Dialog.Trigger bind:ref {...props} data-slot="trigger" class={[!unstyled && styles().trigger, className]} />
