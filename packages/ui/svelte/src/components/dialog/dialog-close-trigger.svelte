<script module lang="ts">
  import { Dialog } from "@ark-ui/svelte/dialog"

  export type DialogCloseTriggerProps = Dialog.CloseTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { CloseButton } from "../button"
  import { useDialogStyles } from "./dialog-styles"

  let { ref = $bindable(null), unstyled, class: className, children, asChild, ...props }: DialogCloseTriggerProps =
    $props()
  const styles = useDialogStyles()
</script>

{#snippet closeButton(triggerProps: () => Record<string, unknown>)}
  <CloseButton {...triggerProps()} size="sm" />
{/snippet}

<Dialog.CloseTrigger
  bind:ref
  {...props}
  {...asChild ? { asChild } : children ? {} : { asChild: closeButton }}
  data-slot="closeTrigger"
  class={[!unstyled && styles().closeTrigger, className]}
>
  {@render children?.()}
</Dialog.CloseTrigger>
